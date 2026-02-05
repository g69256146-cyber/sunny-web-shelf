 import { Link } from "react-router-dom";
 import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
 import {
   principalInvestigator,
   researchTeam,
   operationsTeam,
   administrationTeam,
   clinicalSiteInvestigators,
 } from "@/data/teamData";
 import PrincipalInvestigatorCard from "@/components/team/PrincipalInvestigatorCard";
 import TeamMemberCard from "@/components/team/TeamMemberCard";
 import AdministrationCard from "@/components/team/AdministrationCard";
 import ClinicalInvestigatorCard from "@/components/team/ClinicalInvestigatorCard";
 import TeamSection from "@/components/team/TeamSection";

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
              Meet the dedicated professionals driving the MATHRU ICU Palliative Care 
              Research Project forward.
            </p>
          </div>
        </div>
      </section>

      {/* Principal Investigator Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Principal <span className="text-gradient">Investigator</span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <PrincipalInvestigatorCard {...principalInvestigator} />
          </div>
        </div>
      </section>

      {/* Research Team Section */}
      <TeamSection
        title="Research"
        highlightedWord="Team"
        description="Core investigators and researchers driving the scientific aspects of the study."
        className="bg-muted"
      >
        {researchTeam.map((member, index) => (
          <TeamMemberCard key={index} {...member} variant="gradient" />
        ))}
      </TeamSection>

      {/* Operations & Implementation Section */}
      <TeamSection
        title="Operations &"
        highlightedWord="Implementation"
        description="The team ensuring smooth project execution and data quality."
      >
        {operationsTeam.map((member, index) => (
          <TeamMemberCard key={index} {...member} variant="muted" />
        ))}
      </TeamSection>

      {/* Administration & Governance Section */}
      <TeamSection
        title="Administration &"
        highlightedWord="Governance"
        description="Senior leadership providing strategic guidance and institutional oversight."
        className="bg-muted"
        gridClassName="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {administrationTeam.map((member, index) => (
          <AdministrationCard key={index} {...member} />
        ))}
      </TeamSection>

      {/* Clinical Site Investigators Section */}
      <TeamSection
        title="Clinical Site"
        highlightedWord="Investigators"
        description="Principal and Co-Investigators from participating clinical sites across India."
        gridClassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {clinicalSiteInvestigators.map((investigator, index) => (
          <ClinicalInvestigatorCard key={index} investigator={investigator} />
        ))}
      </TeamSection>

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
