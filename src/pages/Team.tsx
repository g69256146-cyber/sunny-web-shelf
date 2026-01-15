import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const principalInvestigator = {
  name: "Dr. Naveen Salins",
  role: "Principal Investigator",
  affiliation: "Professor, Department of Palliative Medicine and Supportive Care",
  institution: "Kasturba Medical College, Manipal, MAHE",
  bio: "Leading expert in palliative medicine with extensive experience in clinical research and healthcare policy development.",
  initials: "NS",
};

const researchTeam = [
  {
    name: "Ashmitha",
    role: "Co-Investigator",
    bio: "Specialist in palliative care research methodology and patient outcomes assessment.",
    initials: "AD",
  },
  {
    name: "Dr. Sunil Rao",
    role: "Research Fellow",
    bio: "Focus on mixed-methods research and qualitative data analysis.",
    initials: "SR",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Research Associate",
    bio: "Expertise in biostatistics and health economics evaluation.",
    initials: "PS",
  },
];

const operationsTeam = [
  {
    name: "Mr. Rajesh Kumar",
    role: "Project Coordinator",
    bio: "Oversees day-to-day project operations and multi-site coordination.",
    initials: "RK",
  },
  {
    name: "Ms. Anjali Nair",
    role: "Data Manager",
    bio: "Manages data collection, quality assurance, and database administration.",
    initials: "AN",
  },
  {
    name: "Ms. Deepa Menon",
    role: "Research Nurse",
    bio: "Clinical data collection and patient-family liaison.",
    initials: "DM",
  },
];

const administrationTeam = [
  {
    name: "Dr. Avinash Shetty",
    role: "Department Head",
    affiliation: "Department of Palliative Medicine, KMC Manipal",
    initials: "AS",
  },
  {
    name: "Dr. Vikram Rao",
    role: "ICU Director",
    affiliation: "Department of Critical Care Medicine, KMC Manipal",
    initials: "VR",
  },
  {
    name: "Prof. Shobha Ullas",
    role: "Research Advisor",
    affiliation: "MAHE Research Committee",
    initials: "SU",
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
              Research <span className="text-secondary">Team</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              Meet the dedicated professionals driving the MCACP ICU Palliative Care 
              Research Project forward.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Investigator */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Principal <span className="text-gradient">Investigator</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-card rounded-2xl card-hover border border-border text-center">
              <div className="w-28 h-28 mx-auto rounded-full hero-gradient flex items-center justify-center mb-6 ring-4 ring-secondary/30">
                <span className="text-3xl font-display font-bold text-primary-foreground">
                  {principalInvestigator.initials}
                </span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-foreground">
                {principalInvestigator.name}
              </h3>
              <p className="text-secondary font-medium text-lg mb-2">
                {principalInvestigator.role}
              </p>
              <p className="text-muted-foreground mb-1">{principalInvestigator.affiliation}</p>
              <p className="text-muted-foreground text-sm mb-4">
                {principalInvestigator.institution}
              </p>
              <p className="text-muted-foreground leading-relaxed">{principalInvestigator.bio}</p>
              <div className="mt-6">
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Team */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Research <span className="text-gradient">Team</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Core investigators and researchers driving the scientific aspects of the study.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {researchTeam.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border text-center"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations & Implementation Team */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Operations & <span className="text-gradient">Implementation</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The team ensuring smooth project execution and data quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {operationsTeam.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 ring-2 ring-border">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administration & Governance */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Administration & <span className="text-gradient">Governance</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Senior leadership providing strategic guidance and institutional oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {administrationTeam.map((member, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl card-hover border border-border text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 ring-4 ring-primary/20">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Interested in Collaboration?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We welcome academic and clinical collaborations. Contact us to discuss 
            research partnerships and opportunities.
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
