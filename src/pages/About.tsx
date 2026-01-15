import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Eye, Heart, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const coreValues = [
  {
    icon: Target,
    title: "Mission",
    description:
      "To evaluate and implement structured palliative care integration in ICU settings, improving quality of dying and family satisfaction for patients with advanced and terminal illness.",
  },
  {
    icon: Eye,
    title: "Vision",
    description:
      "To establish evidence-based practices for palliative care in intensive care units across tertiary care hospitals in India, transforming end-of-life care.",
  },
  {
    icon: Heart,
    title: "Values",
    description:
      "Compassion, scientific rigor, ethical conduct, and patient-centered care guide every aspect of our research and clinical practice.",
  },
];

const studyObjectives = [
  "Evaluate quality of dying for ICU patients with advanced illness",
  "Assess family satisfaction with end-of-life care",
  "Analyze cost-effectiveness of integrated palliative care",
  "Measure ICU resource utilisation patterns",
  "Develop implementation frameworks for palliative care integration",
  "Generate evidence for policy development",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground animate-slide-up">
              About the <span className="text-secondary">Study</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              Understanding the background, rationale, and design of the MCACP 
              ICU Palliative Care Research Project.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl card-hover border border-border"
              >
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background & Rationale */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Background & <span className="text-gradient">Rationale</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Intensive Care Units (ICUs) increasingly care for patients with advanced 
                and terminal illnesses. Despite high mortality rates in these settings, 
                palliative care integration remains limited in many tertiary care hospitals 
                in India.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                The MCACP study addresses this gap by evaluating a structured approach 
                to integrating palliative and supportive care within ICU settings. This 
                implementation-focused research aims to generate evidence that can guide 
                clinical practice and healthcare policy.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                By focusing on quality of dying, family satisfaction, and resource 
                utilisation, the study provides a comprehensive assessment of palliative 
                care's role in critical care medicine.
              </p>
            </div>
            <div className="relative">
              <div className="p-8 bg-card rounded-2xl border border-border">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Study Objectives
                </h3>
                <div className="space-y-4">
                  {studyObjectives.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Study Design */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Study <span className="text-gradient">Design</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A rigorous methodology designed to generate high-quality evidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Methodology
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Implementation-focused research design
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Mixed-methods approach (quantitative and qualitative)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Multi-site tertiary care hospital setting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Prospective data collection
                </li>
              </ul>
            </div>
            <div className="p-8 bg-card rounded-2xl border border-border">
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Outcome Measures
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Quality of dying assessment scales
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Family satisfaction questionnaires
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  Cost-effectiveness analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold">•</span>
                  ICU resource utilisation metrics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Ethics */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Registration & <span className="text-gradient">Ethics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-2xl border border-border text-center">
              <div className="w-16 h-16 mx-auto rounded-xl hero-gradient flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                CTRI Registration
              </h3>
              <p className="text-muted-foreground">
                This study is registered with the Clinical Trials Registry - India (CTRI), 
                ensuring transparency and adherence to research standards.
              </p>
            </div>
            <div className="p-8 bg-card rounded-2xl border border-border text-center">
              <div className="w-16 h-16 mx-auto rounded-xl hero-gradient flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Ethics Approval
              </h3>
              <p className="text-muted-foreground">
                The study has received ethics approval from the Institutional Ethics 
                Committee, Kasturba Medical College, Manipal, MAHE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Want to Learn More?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Explore our research outputs, meet the team, or contact us for 
            academic collaboration opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/outputs">
                View Outputs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
