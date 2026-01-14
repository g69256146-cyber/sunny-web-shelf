import { Link } from "react-router-dom";
import { ArrowRight, FileText, BarChart3, BookOpen, Presentation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const outputCategories = [
  {
    icon: FileText,
    title: "Research Reports",
    count: 24,
    description: "Comprehensive research publications and analysis documents.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    count: 15,
    description: "Data-driven insights and analytical frameworks.",
  },
  {
    icon: BookOpen,
    title: "Publications",
    count: 18,
    description: "Academic papers and industry publications.",
  },
  {
    icon: Presentation,
    title: "Presentations",
    count: 32,
    description: "Conference presentations and workshop materials.",
  },
];

const featuredOutputs = [
  {
    title: "Annual Impact Assessment Report 2024",
    category: "Research Report",
    date: "January 2024",
    description: "A comprehensive analysis of our program outcomes and community impact over the past year.",
    featured: true,
  },
  {
    title: "Innovation Framework for Sustainable Development",
    category: "Publication",
    date: "December 2023",
    description: "A strategic framework designed to guide sustainable innovation practices.",
  },
  {
    title: "Community Engagement Best Practices",
    category: "Research Report",
    date: "November 2023",
    description: "Evidence-based recommendations for effective community engagement strategies.",
  },
  {
    title: "Data Analytics Platform Overview",
    category: "Technical Document",
    date: "October 2023",
    description: "Documentation of our proprietary analytics platform and its applications.",
  },
  {
    title: "Partnership Development Guide",
    category: "Publication",
    date: "September 2023",
    description: "Guidelines for building and maintaining effective strategic partnerships.",
  },
  {
    title: "Quarterly Research Insights Q3 2023",
    category: "Data & Analytics",
    date: "August 2023",
    description: "Key findings and trends from our research activities during Q3.",
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
              Our <span className="text-secondary">Outputs</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              Explore our research, publications, and resources that demonstrate 
              our commitment to knowledge creation and impact.
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
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {category.title}
                </h3>
                <div className="text-3xl font-display font-bold text-secondary mb-2">
                  {category.count}
                </div>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Outputs */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Featured <span className="text-gradient">Resources</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our latest and most impactful publications and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredOutputs.map((output, index) => (
              <div
                key={index}
                className={`p-6 bg-card rounded-xl card-hover border border-border ${
                  output.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {output.category}
                      </span>
                      <span className="text-sm text-muted-foreground">{output.date}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {output.title}
                    </h3>
                    <p className="text-muted-foreground">{output.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="flex-shrink-0">
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Resources
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Need Custom Research?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We offer tailored research and consulting services to address your 
            specific needs. Get in touch to discuss your requirements.
          </p>
          <Button size="lg" variant="secondary" className="mt-8" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Outputs;
