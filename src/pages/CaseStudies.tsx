import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const caseStudies = [
  {
    title: "E-Commerce Platform Transformation",
    client: "RetailCorp",
    category: "Web Development",
    description: "Complete redesign and development of a high-traffic e-commerce platform with advanced inventory management and real-time analytics.",
    results: [
      { icon: TrendingUp, label: "300% increase in conversions" },
      { icon: Users, label: "2M+ active users" },
      { icon: Zap, label: "50% faster load times" },
    ],
    image: "bg-gradient-to-br from-primary/20 to-accent/20",
  },
  {
    title: "Healthcare CRM System",
    client: "MediHealth",
    category: "CRM Development",
    description: "Custom CRM solution for healthcare providers with patient management, appointment scheduling, and HIPAA-compliant data storage.",
    results: [
      { icon: TrendingUp, label: "85% operational efficiency gain" },
      { icon: Users, label: "10K+ patients managed" },
      { icon: Zap, label: "Real-time data sync" },
    ],
    image: "bg-gradient-to-br from-accent/20 to-primary/20",
  },
  {
    title: "Mobile Banking App",
    client: "FinTech Solutions",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication, instant transfers, and AI-powered financial insights.",
    results: [
      { icon: TrendingUp, label: "4.8★ app store rating" },
      { icon: Users, label: "500K+ downloads" },
      { icon: Zap, label: "Bank-grade security" },
    ],
    image: "bg-gradient-to-br from-primary/30 to-accent/30",
  },
  {
    title: "Cloud Infrastructure Migration",
    client: "Enterprise Global",
    category: "Cloud Computing",
    description: "Complete migration of legacy systems to cloud infrastructure with zero downtime and enhanced scalability.",
    results: [
      { icon: TrendingUp, label: "60% cost reduction" },
      { icon: Users, label: "99.99% uptime achieved" },
      { icon: Zap, label: "Auto-scaling enabled" },
    ],
    image: "bg-gradient-to-br from-accent/30 to-primary/30",
  },
  {
    title: "SaaS Project Management Tool",
    client: "TeamFlow",
    category: "SaaS Development",
    description: "Multi-tenant SaaS platform for project management with real-time collaboration, time tracking, and custom workflows.",
    results: [
      { icon: TrendingUp, label: "1000+ companies using" },
      { icon: Users, label: "50K+ active users daily" },
      { icon: Zap, label: "Real-time collaboration" },
    ],
    image: "bg-gradient-to-br from-primary/25 to-accent/25",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    client: "DataVision",
    category: "Web Development",
    description: "Advanced analytics platform with AI-driven insights, predictive modeling, and interactive data visualizations.",
    results: [
      { icon: TrendingUp, label: "90% faster insights" },
      { icon: Users, label: "TB+ data processed" },
      { icon: Zap, label: "AI-powered predictions" },
    ],
    image: "bg-gradient-to-br from-accent/25 to-primary/25",
  },
];

const CaseStudies = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.href = "/#contact";
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Success Stories &{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Case Studies
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Discover how we've helped businesses transform their digital presence and achieve remarkable results
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className="glass border-primary/30 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] transition-all group"
                >
                  <div className={`h-48 ${study.image} relative overflow-hidden rounded-t-lg`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      Client: {study.client}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm">
                      {study.description}
                    </p>
                    
                    <div className="space-y-3 pt-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                            <result.icon className="h-4 w-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Ready to Create Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Success Story?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Let's discuss how we can help transform your business with cutting-edge technology solutions
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                onClick={scrollToContact}
                className="group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;