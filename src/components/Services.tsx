import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Cloud, Laptop, Database } from "lucide-react";

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
    <section id="services" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:scale-105 border-border bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary-glow)/0.4)] transition-all">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
