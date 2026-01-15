import { Link } from "react-router-dom";
import { ArrowRight, FileText, BookOpen, ClipboardList, Presentation, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const outputCategories = [
  {
    icon: ClipboardList,
    title: "Study Protocols",
    description: "Research protocols and methodology documents.",
  },
  {
    icon: FileText,
    title: "Reports",
    description: "Progress reports and findings summaries.",
  },
  {
    icon: BookOpen,
    title: "Publications",
    description: "Peer-reviewed journal articles and manuscripts.",
  },
  {
    icon: Presentation,
    title: "Study Documents",
    description: "Consent forms, questionnaires, and data collection tools.",
  },
];

const studyDocuments = [
  {
    title: "Study Protocol (Version 1.0)",
    category: "Protocol",
    date: "2024",
    description:
      "Complete study protocol detailing the research methodology, objectives, and implementation strategy.",
    available: true,
  },
  {
    title: "Patient Information Sheet",
    category: "Study Document",
    date: "2024",
    description:
      "Information document provided to patients and families regarding study participation.",
    available: true,
  },
  {
    title: "Informed Consent Form",
    category: "Study Document",
    date: "2024",
    description: "Consent documentation for study participants and their families.",
    available: true,
  },
  {
    title: "Quality of Dying Assessment Tool",
    category: "Data Collection",
    date: "2024",
    description: "Validated instrument for assessing quality of dying in ICU settings.",
    available: true,
  },
  {
    title: "Family Satisfaction Questionnaire",
    category: "Data Collection",
    date: "2024",
    description: "Questionnaire for assessing family satisfaction with ICU care.",
    available: true,
  },
  {
    title: "Interim Analysis Report",
    category: "Report",
    date: "Upcoming",
    description: "Preliminary findings and progress update on study implementation.",
    available: false,
  },
];

const publications = [
  {
    title: "Palliative Care Integration in Indian ICUs: A Scoping Review",
    journal: "Indian Journal of Critical Care Medicine",
    status: "Published",
    year: "2024",
  },
  {
    title: "MCACP Study Protocol: Implementation of Structured Palliative Care in ICU",
    journal: "BMC Palliative Care",
    status: "Under Review",
    year: "2024",
  },
];

const Outputs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground animate-slide-up">
              Research <span className="text-secondary">Outputs</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              Access study protocols, reports, publications, and research documents 
              from the MCACP ICU Palliative Care Research Project.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outputCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl hero-gradient flex items-center justify-center mb-4">
                  <category.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Documents */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Study <span className="text-gradient">Documents</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Protocols, consent forms, and data collection instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studyDocuments.map((doc, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {doc.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{doc.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{doc.description}</p>
                </div>
                <Button
                  variant={doc.available ? "outline" : "ghost"}
                  size="sm"
                  className="flex-shrink-0"
                  disabled={!doc.available}
                >
                  {doc.available ? (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </>
                  ) : (
                    "Coming Soon"
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Academic <span className="text-gradient">Publications</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Peer-reviewed articles and manuscripts from our research.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {publications.map((pub, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      pub.status === "Published"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="text-sm text-muted-foreground">{pub.year}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground">{pub.journal}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Additional publications will be listed as they become available.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Access Full Research Materials
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            For detailed study materials, data access requests, or academic collaboration, 
            please contact our research team.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link to="/contact">
              Contact Research Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Outputs;
