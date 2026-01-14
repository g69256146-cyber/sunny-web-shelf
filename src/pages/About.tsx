import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To advance knowledge and drive meaningful change through collaborative research, innovation, and strategic partnerships that address complex global challenges.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "A world where evidence-based solutions and collaborative innovation create sustainable progress and improve quality of life for all communities.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "Integrity, excellence, collaboration, and impact guide every decision we make and every initiative we undertake.",
  },
];

const milestones = [
  { year: "2014", title: "Foundation", description: "MCACP was established with a vision to bridge research and practice." },
  { year: "2016", title: "First Major Project", description: "Completed our inaugural large-scale collaborative initiative." },
  { year: "2018", title: "Global Expansion", description: "Extended partnerships to international organizations." },
  { year: "2020", title: "Digital Innovation", description: "Launched innovative digital research platforms." },
  { year: "2022", title: "Impact Milestone", description: "Reached 50+ completed projects with measurable impact." },
  { year: "2024", title: "Continued Growth", description: "Expanding our team and capabilities for greater impact." },
];

const capabilities = [
  "Research & Analysis",
  "Strategic Planning",
  "Project Management",
  "Stakeholder Engagement",
  "Data Analytics",
  "Impact Assessment",
  "Policy Development",
  "Training & Capacity Building",
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
              About <span className="text-secondary">MCACP</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 animate-slide-up animation-delay-100">
              We are a dedicated team of professionals committed to advancing knowledge 
              and driving impactful change through collaborative research and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
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

      {/* Story Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Founded with a passion for making a difference, MCACP emerged from a 
                recognition that meaningful change requires collaboration, expertise, 
                and unwavering commitment to excellence.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Over the years, we have grown from a small team of dedicated researchers 
                to a robust organization with diverse capabilities and a proven track 
                record of delivering impactful solutions.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Today, we continue to push boundaries, embrace innovation, and forge 
                partnerships that create lasting value for our clients and communities.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-card border border-border overflow-hidden p-8">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Our Capabilities
                </h3>
                <div className="space-y-3">
                  {capabilities.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
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

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Key milestones that have shaped our organization and impact.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

            <div className="space-y-12">
              {milestones.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-2 translate-y-2 ring-4 ring-background" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="p-6 bg-card rounded-xl card-hover border border-border">
                      <div className="text-secondary font-display font-bold text-lg mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
            Explore our outputs, meet our team, or get in touch to discuss how we can 
            collaborate on your next initiative.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/outputs">
                View Our Outputs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
