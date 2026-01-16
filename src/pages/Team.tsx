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
    role: "Project Research Scientist",
    bio: "Responsible for supporting study implementation, data collection, and research analysis activities.",
    initials: "A",
  },
  {
    name: "Aparna Nanda",
    role: "Project Research Scientist",
    bio: "Contributes to research coordination, participant-level data processes, and outcome assessment.",
    initials: "AN",
  },
  {
    name: "Anusha",
    role: "Data Management and Reporting Coordinator",
    bio: "Oversees data integrity, database management, and preparation of study reports and summaries.",
    initials: "A",
  },
];

const operationsTeam = [
  {
    name: "Akshatha",
    role: "Training Program Coordinator",
    bio: "Leads planning and delivery of training programs for clinical and project staff across study sites.",
    initials: "AK",
  },
  {
    name: "Subhashchandra",
    role: "Project Site Implementation Lead (Support)",
    bio: "Supports on-site implementation, coordination, and adherence to study protocols.",
    initials: "SC",
  },
  {
    name: "Prasanna Naik",
    role: "Project Technical Support III / Social Worker",
    bio: "Provides technical and psychosocial support to facilitate patient- and family-centered care processes.",
    initials: "PN",
  },
  {
    name: "Stacy Mendonca",
    role: "Communication Liaison",
    bio: "Coordinates internal and external communication to support stakeholder engagement and dissemination.",
    initials: "SM",
  },
  {
    name: "Gauthami",
    role: "Digital Liaison",
    bio: "Manages digital coordination, online resources, and technology-supported project communication.",
    initials: "G",
  },
];

const administrationTeam = [
  {
    name: "Harsha",
    role: "Ethics and Regulatory Documentation Officer",
    affiliation: "Department of Palliative Medicine, KMC Manipal",
    initials: "H",
  },
  {
    name: "Pooja Naik",
    role: "Finance and Administrative Officer",
    affiliation: "MCACP ICU Palliative Care Research Project",
    initials: "PN",
  },
];

const clinicalSiteInvestigators = [
  {
    institution: "Kasturba Medical College Manipal",
    name: "Dr Naveen Salins",
    role: "Principal Investigator",
    position: "Professor and Head, Department of Palliative Medicine and Supportive Care",
    expertise: ["ICU Palliative Care", "Health Research", "Public Policy"],
    email: "naveen.salins@manipal.edu",
    initials: "NS",
  },
  {
    institution: "Kasturba Medical College Manipal",
    name: "Dr Arun Ghoshal",
    role: "Co-Principal Investigator",
    position: "Assistant Professor, Department of Palliative Medicine and Supportive Care",
    expertise: ["Palliative Care Research", "Palliative Care Education"],
    email: "arun.ghoshal@manipal.edu",
    initials: "AG",
  },
  {
    institution: "AIIMS Delhi",
    name: "Dr Seema Mishra",
    role: "Co-Principal Investigator",
    position: "Professor and Head, Department of Onco-Anaesthesia and Palliative Medicine, Dr. B.R. Ambedkar IRCH and NCI Jhajjar",
    expertise: ["ICU Palliative Care", "Health Research", "Public Policy"],
    email: "seemamishra2003@gmail.com",
    initials: "SM",
  },
  {
    institution: "CMC Vellore",
    name: "Dr Jenifer Jeba Sundararaj",
    role: "Co-Principal Investigator",
    position: "Professor and Head, Department of Palliative Medicine",
    expertise: ["Palliative Care", "Health Research", "Public Policy"],
    email: "jenifermugesh@yahoo.com",
    initials: "JJS",
  },
  {
    institution: "Tata Memorial Hospital Mumbai",
    name: "Dr Sheila Nainan Myatra",
    role: "Co-Principal Investigator",
    position: "Professor, Department of Anaesthesiology, Critical Care and Pain",
    expertise: ["ICU Palliative Care", "Health Research", "Public Policy"],
    email: "sheila150@hotmail.com",
    initials: "SNM",
  },
  {
    institution: "Bharati Vidyapeeth Deemed University Pune",
    name: "Dr Shivakumar Iyer",
    role: "Co-Principal Investigator",
    position: "Professor and Head, Department of Critical Care Medicine",
    expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
    email: "suchetashiva@gmail.com",
    initials: "SI",
  },
  {
    institution: "P. D. Hinduja Hospital Mumbai",
    name: "Dr Roop Gursahani",
    role: "Co-Investigator",
    position: "Consultant Neurologist",
    expertise: ["Neurology", "ICU Palliative Care", "Health Research"],
    email: "roop_gursahani@hotmail.com",
    initials: "RG",
  },
  {
    institution: "St John's Medical College Hospital Bangalore",
    name: "Dr Nandini Vallath",
    role: "Co-Principal Investigator",
    position: "Professor and Head, Department of Pain and Palliative Medicine",
    expertise: ["ICU Palliative Care", "Health Research"],
    email: "aanandini@gmail.com",
    initials: "NV",
  },
  {
    institution: "Vardhaman Mahavir Medical College & Safdarjung Hospital Delhi",
    name: "Dr Anirban Hom Choudhuri",
    role: "Co-Principal Investigator",
    position: "Director, Professor & Head, Department of Critical Care Medicine",
    expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
    email: "anirban.homchoudhuri@gmail.com",
    initials: "AHC",
  },
  {
    institution: "Aster CMI Hospital Bengaluru",
    name: "Dr Raghavendra Ramanjulu",
    role: "Co-Principal Investigator",
    position: "Head, Department of Pain and Palliative Medicine",
    expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
    email: "drragraj1@gmail.com",
    initials: "RR",
  },
  {
    institution: "Yashoda Super-speciality Hospital Kaushambi Ghaziabad",
    name: "Dr Raj Kumar Mani",
    role: "Co-Principal Investigator",
    position: "Chairman, Department of Critical Care and Pulmonology",
    expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
    email: "raj.rkmjs@gmail.com",
    initials: "RKM",
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

      {/* Clinical Site Investigators */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Clinical Site <span className="text-gradient">Investigators</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Principal and Co-Investigators from participating clinical sites across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalSiteInvestigators.map((investigator, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex-shrink-0 rounded-full hero-gradient flex items-center justify-center">
                    <span className="text-lg font-display font-bold text-primary-foreground">
                      {investigator.initials}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {investigator.name}
                    </h3>
                    <p className="text-secondary font-medium text-sm">{investigator.role}</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    {investigator.institution}
                  </p>
                  <p className="text-xs text-muted-foreground">{investigator.position}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {investigator.expertise.map((exp, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${investigator.email}`}
                    className="inline-flex items-center text-xs text-primary hover:underline mt-2"
                  >
                    <Mail className="w-3 h-3 mr-1" />
                    {investigator.email}
                  </a>
                </div>
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
