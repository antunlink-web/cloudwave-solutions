import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Laptop, Database } from "lucide-react";
import techPattern from "@/assets/tech-pattern.jpg";
import cloudImage from "@/assets/cloud-computing.jpg";
import mobileImage from "@/assets/mobile-dev.jpg";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom, responsive websites built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that engage users and deliver seamless functionality.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure solutions that grow with your business needs and optimize costs.",
  },
  {
    icon: Laptop,
    title: "SaaS Solutions",
    description: "Enterprise-grade software as a service platforms designed to streamline your operations.",
  },
  {
    icon: Database,
    title: "CRM Systems",
    description: "Powerful customer relationship management tools to boost sales and customer satisfaction.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
      <div className="absolute inset-0 opacity-5">
        <img src={techPattern} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            // Add specific images to certain services
            let serviceImage = null;
            if (service.title === "Cloud Computing") serviceImage = cloudImage;
            if (service.title === "Mobile Applications") serviceImage = mobileImage;

            return (
              <Card 
                key={index} 
                className="group glass hover:shadow-[0_0_40px_hsl(var(--primary)/0.3),0_0_80px_hsl(var(--accent)/0.2)] transition-all duration-500 hover:scale-105 hover:border-primary/50 relative overflow-hidden"
              >
                {/* Background image for specific services */}
                {serviceImage && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <img src={serviceImage} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-accent to-primary flex items-center justify-center mb-4 group-hover:shadow-[0_0_30px_hsl(var(--primary-glow)/0.6),0_0_50px_hsl(var(--accent)/0.3)] transition-all duration-500 group-hover:scale-110 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <service.icon className="h-7 w-7 text-primary-foreground relative z-10" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
