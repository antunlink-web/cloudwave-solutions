import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Expert team with 10+ years of experience",
  "Agile development methodology",
  "24/7 support and maintenance",
  "Competitive pricing and transparent billing",
  "Cutting-edge technology stack",
  "On-time project delivery",
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TechSolutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're a dedicated team of IT professionals committed to delivering excellence. 
              Our approach combines technical expertise with business acumen to create solutions 
              that not only work but drive real results.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
            <div className="relative bg-card rounded-2xl p-8 shadow-[0_0_50px_hsl(var(--primary)/0.1)] border border-border">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    98%
                  </div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
