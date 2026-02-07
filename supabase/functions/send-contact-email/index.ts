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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, affiliation, subject, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, affiliation, subject });

    // Validate inputs
    if (!name || !email || !affiliation || !subject || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client with service role for admin access
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store submission in database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        subject: `${subject} - ${affiliation}`,
        message,
      });

    if (dbError) {
      console.error("Error storing contact submission:", dbError);
      // Continue with email sending even if database insert fails
    } else {
      console.log("Contact submission stored in database");
    }

    // Send notification email to the research team
    const notificationEmail = await resend.emails.send({
      from: "MATHRU Research <onboarding@resend.dev>",
      to: ["arun.ghoshal@manipal.edu"],
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Institution/Affiliation:</strong> ${affiliation}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the sender
    const confirmationEmail = await resend.emails.send({
      from: "MATHRU Research <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for your inquiry - MATHRU ICU Palliative Care Research",
      html: `
        <h2>Thank you for contacting us, ${name}!</h2>
        <p>We have received your inquiry regarding: <strong>${subject}</strong></p>
        <p>Our research team will review your message and respond within 3-5 business days.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr />
        <p>Best regards,<br>
        <strong>MATHRU ICU Palliative Care Research Team</strong><br>
        Department of Palliative Medicine and Supportive Care<br>
        Kasturba Medical College, Manipal, MAHE</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
