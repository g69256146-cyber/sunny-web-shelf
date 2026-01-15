import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
const features = [{
  icon: Target,
  title: "Mission-Driven",
  description: "Focused on delivering impactful outcomes that drive real-world change and innovation."
}, {
  icon: Users,
  title: "Collaborative",
  description: "Working together with partners and stakeholders to achieve shared goals and objectives."
}, {
  icon: Lightbulb,
  title: "Innovative",
  description: "Pioneering new approaches and solutions to address complex challenges effectively."
}, {
  icon: Award,
  title: "Excellence",
  description: "Committed to the highest standards of quality in everything we undertake."
}];
const stats = [{
  value: "50+",
  label: "Projects Completed"
}, {
  value: "25+",
  label: "Team Members"
}, {
  value: "10+",
  label: "Years Experience"
}, {
  value: "100%",
  label: "Commitment"
}];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight animate-slide-up">
              Advancing Knowledge,
              <br />
              <span className="text-secondary">Driving Impact</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl animate-slide-up animation-delay-100">
              MCACP is dedicated to pioneering research and collaborative initiatives that create 
              meaningful change in our communities and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-slide-up animation-delay-200">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/contact">Get in Touch</Link>
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

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                
                
              </div>)}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our core values and principles guide everything we do, ensuring we deliver 
              exceptional results for our partners and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => <div key={index} className="p-6 bg-card rounded-xl card-hover border border-border">
                <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                At MCACP, we believe in the power of collaborative research and innovation 
                to solve complex challenges. Our team of dedicated professionals works 
                tirelessly to advance knowledge and create lasting impact.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Through strategic partnerships and innovative methodologies, we transform 
                ideas into actionable solutions that benefit organizations and communities 
                across the globe.
              </p>
              <Button className="mt-8" size="lg" asChild>
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl hero-gradient overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-20 h-20 mx-auto rounded-full bg-primary-foreground/20 flex items-center justify-center mb-4">
                      <Target className="w-10 h-10" />
                    </div>
                    <p className="text-xl font-display font-semibold">Purpose-Driven Excellence</p>
                  </div>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground">
            Ready to Collaborate?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Join us in our mission to drive innovation and create meaningful impact. 
            Let's work together to shape a better future.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;