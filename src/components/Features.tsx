import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Zap, Users, Code, Gauge, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Waves,
      title: "Wave Analytics",
      description: "Advanced wave pattern analysis and real-time surf condition monitoring with ML-powered predictions."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times and real-time data processing."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by surfers, for surfers. Open source and community-focused development."
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Clean APIs, comprehensive documentation, and extensible architecture."
    },
    {
      icon: Gauge,
      title: "Real-time Monitoring",
      description: "Live surf condition updates with customizable alerts and notifications."
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with 99.9% uptime and robust error handling."
    }
  ];

  return (
    <section className="py-24 px-4 gradient-wave">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Features that Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make Surfit the ultimate choice for surf technology enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/90"
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;