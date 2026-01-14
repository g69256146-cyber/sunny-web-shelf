import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Executive Director",
    bio: "20+ years of experience in research leadership and strategic development.",
    initials: "SM",
  },
  {
    name: "Michael Chen",
    role: "Director of Research",
    bio: "Expert in data analytics and evidence-based policy development.",
    initials: "MC",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Senior Research Fellow",
    bio: "Specializes in community engagement and participatory research methods.",
    initials: "ER",
  },
  {
    name: "James Wilson",
    role: "Operations Manager",
    bio: "Oversees project delivery and organizational efficiency.",
    initials: "JW",
  },
  {
    name: "Dr. Aisha Patel",
    role: "Lead Analyst",
    bio: "Expert in quantitative methods and impact assessment.",
    initials: "AP",
  },
  {
    name: "David Thompson",
    role: "Communications Lead",
    bio: "Manages stakeholder engagement and knowledge dissemination.",
    initials: "DT",
  },
  {
    name: "Dr. Lisa Wang",
    role: "Research Associate",
    bio: "Focuses on innovative research methodologies and emerging trends.",
    initials: "LW",
  },
  {
    name: "Robert Kim",
    role: "Project Coordinator",
    bio: "Ensures seamless execution of multi-stakeholder initiatives.",
    initials: "RK",
  },
];

const advisors = [
  {
    name: "Prof. Margaret Sullivan",
    role: "Strategic Advisor",
    affiliation: "Former University Dean",
    initials: "MS",
  },
  {
    name: "Dr. Richard Hayes",
    role: "Technical Advisor",
    affiliation: "Industry Expert",
    initials: "RH",
  },
  {
    name: "Jennifer Clarke",
    role: "Board Member",
    affiliation: "Nonprofit Leadership",
    initials: "JC",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-1/2 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground animate-slide-up">
              Meet Our <span className="text-secondary">Team</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              Our diverse team of experts brings together decades of experience 
              in research, analysis, and strategic development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Core <span className="text-gradient">Team</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The dedicated professionals driving our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-full hero-gradient flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="text-2xl font-display font-bold text-primary-foreground">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="mt-4 flex justify-center gap-2">
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Advisory <span className="text-gradient">Board</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experienced leaders providing strategic guidance and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-hover border border-border text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 ring-4 ring-primary/20">
                  <span className="text-2xl font-display font-bold text-primary">
                    {advisor.initials}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {advisor.name}
                </h3>
                <p className="text-secondary font-medium mb-2">{advisor.role}</p>
                <p className="text-sm text-muted-foreground">{advisor.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Join Our Team
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for research and impact. Explore opportunities to work with us.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
