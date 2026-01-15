import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Activity, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const studySnapshot = [
  { label: "Design", value: "Implementation-focused, mixed-methods study" },
  { label: "Setting", value: "Intensive Care Units in tertiary care teaching hospitals" },
  { label: "Outcomes", value: "Quality of dying, family satisfaction, cost of care, ICU resource utilisation" },
  { label: "Status", value: "Ongoing (Ethics approved)" },
];

const features = [
  {
    icon: Heart,
    title: "Palliative Care Integration",
    description: "Structured integration of palliative and supportive care within intensive care settings.",
  },
  {
    icon: Users,
    title: "Patient & Family Centered",
    description: "Focus on quality of dying and family satisfaction with end-of-life care.",
  },
  {
    icon: Activity,
    title: "ICU Resource Optimization",
    description: "Evaluating cost-effectiveness and resource utilisation in tertiary care settings.",
  },
  {
    icon: ClipboardCheck,
    title: "Evidence-Based Practice",
    description: "Implementation research to guide clinical practice and policy development.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary font-medium text-sm mb-6 animate-slide-up">
              Department of Palliative Medicine and Supportive Care, KMC Manipal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight animate-slide-up">
              MCACP
              <br />
              <span className="text-secondary">ICU Palliative Care</span>
              <br />
              Research Project
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-slide-up animation-delay-100">
              Evaluating the integration of structured palliative and supportive care 
              within intensive care unit settings for patients with advanced and terminal illness.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up animation-delay-200">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/outputs">View Outputs</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Study Snapshot */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto container-padding">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
            Study <span className="text-gradient">Snapshot</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studySnapshot.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border"
              >
                <h3 className="text-secondary font-display font-semibold text-lg mb-2">
                  {item.label}
                </h3>
                <p className="text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Project <span className="text-gradient">Overview</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                The MCACP (Multifaceted, Comprehensive, Appropriate Care Package) study 
                is an implementation-focused clinical research initiative conducted by the 
                Department of Palliative Medicine and Supportive Care, Kasturba Medical College, 
                Manipal, under the Manipal Academy of Higher Education (MAHE).
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                The study aims to improve quality of dying, enhance family satisfaction 
                with care, and evaluate cost of care and ICU resource utilisation in 
                tertiary care hospitals in India.
              </p>
              <Button className="mt-8" size="lg" asChild>
                <Link to="/about">
                  Read Full Background
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl hero-gradient overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground p-8">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                      <Heart className="w-10 h-10" />
                    </div>
                    <p className="text-xl font-display font-semibold">
                      Compassionate Care in Critical Settings
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Key Focus <span className="text-gradient">Areas</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our research addresses critical aspects of palliative care integration 
              in intensive care settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl card-hover border border-border"
              >
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
            Interested in Collaboration?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We welcome academic and clinical collaborations to advance palliative care 
            research in ICU settings. Contact us to explore partnership opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
