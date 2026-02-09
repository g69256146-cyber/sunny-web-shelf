import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  affiliation: string;
  subject: string;
  message: string;
}

// Simple in-memory rate limiting (per IP)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

// HTML escaping to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Input validation
function validateInput(data: ContactEmailRequest): { valid: boolean; error?: string } {
  const { name, email, affiliation, subject, message } = data;

  // Check required fields
  if (!name || !email || !affiliation || !subject || !message) {
    return { valid: false, error: "All fields are required" };
  }

  // Validate lengths
  if (name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }
  if (email.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }
  if (affiliation.length > 200) {
    return { valid: false, error: "Affiliation must be less than 200 characters" };
  }
  if (subject.length > 200) {
    return { valid: false, error: "Subject must be less than 200 characters" };
  }
  if (message.length < 10) {
    return { valid: false, error: "Message must be at least 10 characters" };
  }
  if (message.length > 2000) {
    return { valid: false, error: "Message must be less than 2000 characters" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, error: "Invalid email format" };
  }

  return { valid: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Check rate limit
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const requestData: ContactEmailRequest = await req.json();

    // Validate input
    const validation = validateInput(requestData);
    if (!validation.valid) {
      console.error("Validation failed:", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, affiliation, subject, message } = requestData;

    console.log("Received contact form submission:", { 
      name: name.substring(0, 20), 
      emailDomain: email.split("@")[1], 
      affiliation: affiliation.substring(0, 20),
      subject: subject.substring(0, 30)
    });

    // Initialize Supabase client with service role for admin access
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store submission in database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: `${subject.trim()} - ${affiliation.trim()}`,
        message: message.trim(),
      });

    if (dbError) {
      console.error("Error storing contact submission:", dbError.message);
      // Continue with email sending even if database insert fails
    } else {
      console.log("Contact submission stored in database");
    }

    // Escape all user inputs for HTML emails
    const escapedName = escapeHtml(name.trim());
    const escapedEmail = escapeHtml(email.trim());
    const escapedAffiliation = escapeHtml(affiliation.trim());
    const escapedSubject = escapeHtml(subject.trim());
    const escapedMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

    // Send notification email to the research team
    const notificationEmail = await resend.emails.send({
      from: "MATHRU Research <onboarding@resend.dev>",
      to: ["arun.ghoshal@manipal.edu"],
      subject: `New Inquiry: ${escapedSubject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Institution/Affiliation:</strong> ${escapedAffiliation}</p>
        <p><strong>Subject:</strong> ${escapedSubject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${escapedMessage}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail.id ? "success" : "failed");

    // Send confirmation email to the sender
    const confirmationEmail = await resend.emails.send({
      from: "MATHRU Research <onboarding@resend.dev>",
      to: [email.trim()],
      subject: "Thank you for your inquiry - MATHRU ICU Palliative Care Research",
      html: `
        <h2>Thank you for contacting us, ${escapedName}!</h2>
        <p>We have received your inquiry regarding: <strong>${escapedSubject}</strong></p>
        <p>Our research team will review your message and respond within 3-5 business days.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p>${escapedMessage}</p>
        <hr />
        <p>Best regards,<br>
        <strong>MATHRU ICU Palliative Care Research Team</strong><br>
        Department of Palliative Medicine and Supportive Care<br>
        Kasturba Medical College, Manipal, MAHE</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail.id ? "success" : "failed");

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "An error occurred processing your request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
