import { CheckCircle2 } from "lucide-react";
import officeImage from "@/assets/office-workspace.jpg";

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
          
          <div className="space-y-8">
            {/* Office Image */}
            <div className="relative group overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative">
                <img 
                  src={officeImage} 
                  alt="Modern futuristic office workspace with holographic displays" 
                  className="w-full h-64 lg:h-80 object-cover rounded-2xl border-2 border-primary/30 group-hover:border-primary/50 transition-all shadow-[0_0_60px_hsl(var(--primary)/0.3)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-3 blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative glass rounded-2xl p-8 shadow-[0_0_60px_hsl(var(--primary)/0.3),0_0_100px_hsl(var(--accent)/0.2)] border-2 border-primary/30 hover:border-primary/50 transition-all">
                <div className="space-y-6">
                  <div className="group/stat">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 animate-gradient drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                      500+
                    </div>
                    <div className="text-muted-foreground group-hover/stat:text-foreground transition-colors">Projects Completed</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 animate-gradient drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]" style={{ animationDelay: '1s' }}>
                      98%
                    </div>
                    <div className="text-muted-foreground group-hover/stat:text-foreground transition-colors">Client Satisfaction</div>
                  </div>
                  <div className="group/stat">
                    <div className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-2 animate-gradient drop-shadow-[0_0_20px_hsl(var(--primary)/0.5)]" style={{ animationDelay: '2s' }}>
                      50+
                    </div>
                    <div className="text-muted-foreground group-hover/stat:text-foreground transition-colors">Team Members</div>
                  </div>
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
