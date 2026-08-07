import { Link } from "react-router-dom";
import { ArrowRight, FileText, BookOpen, ClipboardList, Presentation, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
// PDFs are served from /public/documents so they work on any static host
const annualReportPdf = { url: "/documents/CAR_Annual_Report_Year_1.pdf" };
const grantProposalPdf = { url: "/documents/Final_ICMR_CAR_Grant_Proposal.pdf" };
const fieldGuidePdf = { url: "/documents/investigator_field_guide_AP.pdf" };
const protocolPaperPdf = { url: "/documents/prognostication_in_ICU_protocol_paper.pdf" };

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

const studyProtocols = [
  {
    title: "ICMR CAR Grant Proposal",
    category: "Study Protocol",
    date: "2024",
    description:
      "Final ICMR Centre for Advanced Research (CAR) grant proposal for the MATHRU study.",
    available: true,
    file: grantProposalPdf.url,
  },
];

const studyDocuments = [
  {
    title: "Investigator Field Guide",
    category: "Study Document",
    date: "2024",
    description:
      "Field guide for investigators conducting the MATHRU study.",
    available: true,
    file: fieldGuidePdf.url,
  },
];

const reports = [
  {
    title: "CAR Annual Report Year 1",
    category: "Annual Report",
    date: "2026",
    description:
      "First-year annual report for the MATHRU ICU Palliative Care Research Project.",
    available: true,
    file: annualReportPdf.url,
  },
];

const annexures = [
  { label: "Annexure 1", file: "/documents/annexures/Annexure_1.pdf" },
  { label: "Annexure 2", file: "/documents/annexures/Annexure_2.pdf" },
  { label: "Annexure 3", file: "/documents/annexures/Annexure_3.pdf" },
  { label: "Annexure 4", file: "/documents/annexures/Annexure_4.pdf" },
  { label: "Annexure 5", file: "/documents/annexures/Annexure_5.pdf" },
  { label: "Annexure 6A", file: "/documents/annexures/Annexure_6A.pdf" },
  { label: "Annexure 6B", file: "/documents/annexures/Annexure_6B.pdf" },
  { label: "Annexure 7", file: "/documents/annexures/Annexure_7.pdf" },
  { label: "Annexure 8", file: "/documents/annexures/Annexure_8.pdf" },
  { label: "Consolidated SOE — KMC & SJMC", file: "/documents/annexures/Consolidated_SOE-KMC_SJMC.pdf" },
  { label: "Consolidated UC — KMC & SJMC", file: "/documents/annexures/Consolidated_UC-KMC_SJMC.pdf" },
  { label: "Outcome Assessment", file: "/documents/annexures/Outcome_Assessment.pdf" },
];


interface DocumentCardProps {
  doc: {
    title: string;
    category: string;
    date: string;
    description: string;
    available: boolean;
    file: string;
  };
}

const DocumentCard = ({ doc }: DocumentCardProps) => (
  <div className="p-6 bg-card rounded-xl border border-border flex flex-col sm:flex-row sm:items-start gap-4">
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
    <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
      <Button
        variant={doc.available ? "outline" : "ghost"}
        size="sm"
        disabled={!doc.available}
        asChild={doc.available}
      >
        {doc.available ? (
          <a href={doc.file} target="_blank" rel="noopener noreferrer">
            <Eye className="w-4 h-4 mr-2" />
            View
          </a>
        ) : (
          "Coming Soon"
        )}
      </Button>
      <Button
        variant={doc.available ? "outline" : "ghost"}
        size="sm"
        disabled={!doc.available}
        asChild={doc.available}
      >
        {doc.available ? (
          <a href={doc.file} download>
            <Download className="w-4 h-4 mr-2" />
            Download
          </a>
        ) : (
          "Coming Soon"
        )}
      </Button>
    </div>
  </div>
);

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
              from the MATHRU ICU Palliative Care Research Project.
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

      {/* Study Protocols */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Study <span className="text-gradient">Protocols</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Research protocols and methodology documents.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studyProtocols.map((doc, index) => (
              <DocumentCard key={index} doc={doc} />
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
              <DocumentCard key={index} doc={doc} />
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Annual <span className="text-gradient">Reports</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Progress reports and findings summaries.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {reports.map((doc, index) => (
              <DocumentCard key={index} doc={doc} />
            ))}

            {/* Annexures folder nested under the annual report */}
            <div className="ml-0 sm:ml-8 border-l-2 border-border pl-0 sm:pl-6">
              <Collapsible>
                <div className="bg-card rounded-xl border border-border overflow-hidden">
                  <CollapsibleTrigger className="w-full flex items-center gap-3 p-5 text-left hover:bg-muted/50 transition-colors group">
                    <Folder className="w-5 h-5 text-primary flex-shrink-0 group-data-[state=open]:hidden" />
                    <FolderOpen className="w-5 h-5 text-primary flex-shrink-0 hidden group-data-[state=open]:block" />
                    <span className="flex-1">
                      <span className="block font-display font-semibold text-foreground">
                        Annexures
                      </span>
                      <span className="block text-sm text-muted-foreground">
                        {annexures.length} supporting documents
                      </span>
                    </span>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-5 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {annexures.map((a) => (
                        <div
                          key={a.label}
                          className="flex items-center justify-between gap-2 p-3 rounded-lg border border-border bg-background"
                        >
                          <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                            <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                            {a.label}
                          </span>
                          <span className="flex items-center gap-1">
                            <Button variant="ghost" size="sm" asChild>
                              <a href={a.file} target="_blank" rel="noopener noreferrer" aria-label={`View ${a.label}`}>
                                <Eye className="w-4 h-4" />
                              </a>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                              <a href={a.file} download aria-label={`Download ${a.label}`}>
                                <Download className="w-4 h-4" />
                              </a>
                            </Button>
                          </span>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>
          </div>


        </div>
      </section>

      {/* Publications */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Academic <span className="text-gradient">Publications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="p-6 bg-card rounded-xl border border-border flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    Protocol Paper
                  </span>
                  <span className="text-sm text-muted-foreground">2024</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  Prognostication in ICU: Protocol Paper
                </h3>
                <p className="text-muted-foreground text-sm">
                  Study protocol paper on prognostication in the ICU setting.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
                <Button variant="outline" size="sm" className="flex-shrink-0" asChild>
                  <a
                    href={protocolPaperPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-shrink-0" asChild>
                  <a
                    href={protocolPaperPdf.url}
                    download
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Files */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Workshop Files
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Workshop videos are available on our YouTube channel.
            </p>
          </div>

          <div className="text-center space-y-4">
            <Button size="lg" variant="default" asChild>
              <a
                href="https://www.youtube.com/@Mathru-p5g"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit MATHRU Workshop YouTube Channel
              </a>
            </Button>
            <p>
              <a
                href="https://www.youtube.com/@Mathru-p5g"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                https://www.youtube.com/@Mathru-p5g
              </a>
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
