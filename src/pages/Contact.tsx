import { useState } from "react";
import { Mail, Phone, MapPin, Send, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: Building2,
    title: "Department",
    details: "Department of Palliative Medicine and Supportive Care",
    description: "Kasturba Medical College, Manipal",
    href: "#",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "Kasturba Medical College",
    description: "Manipal, Karnataka 576104, India",
    href: "#",
  },
  {
    icon: Mail,
    title: "Email",
    details: "arun.ghoshal@manipal.edu",
    description: "For academic inquiries",
    href: "mailto:arun.ghoshal@manipal.edu",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "0820 292 2221",
    description: "Department Office",
    href: "tel:+918202922221",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. Our team will respond shortly.",
    });

    setFormData({ name: "", email: "", affiliation: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground animate-slide-up">
              Contact <span className="text-secondary">Us</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              For academic inquiries, clinical collaboration, or research partnership 
              opportunities, please reach out to our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="p-6 bg-background rounded-xl card-hover border border-border group"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-foreground font-medium">{item.details}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Send an <span className="text-gradient">Inquiry</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Complete the form below for academic collaboration, research inquiries, 
                or institutional partnership requests.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Dr. John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john.doe@institution.edu"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="affiliation" className="block text-sm font-medium text-foreground mb-2">
                    Institution / Affiliation
                  </label>
                  <Input
                    id="affiliation"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleChange}
                    placeholder="University / Hospital / Organization"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Research collaboration inquiry"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your inquiry or collaboration interest..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Institution Info */}
            <div className="space-y-8">
              <div className="aspect-[4/3] rounded-2xl hero-gradient overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-display font-semibold mb-2">
                      Kasturba Medical College
                    </h3>
                    <p className="text-primary-foreground/80">
                      Manipal Academy of Higher Education
                      <br />
                      Manipal, Karnataka 576104
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-muted rounded-xl">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Principal Investigator
                </h3>
                <p className="text-muted-foreground mb-2">
                  <strong className="text-foreground">Dr. Naveen Salins</strong>
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Professor, Department of Palliative Medicine and Supportive Care
                  <br />
                  Kasturba Medical College, Manipal, MAHE
                </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:arun.ghoshal@manipal.edu">arun.ghoshal@manipal.edu</a>
                </div>
              </div>

              <div className="p-6 bg-muted rounded-xl">
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  Response Time
                </h3>
                <p className="text-muted-foreground">
                  We typically respond to academic and collaboration inquiries within 
                  3-5 business days. For urgent matters, please indicate the urgency 
                  in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
