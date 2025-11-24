import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal, Download, Play, Code } from "lucide-react";

const GettingStarted = () => {
  const steps = [
    {
      icon: Download,
      title: "Clone Repository",
      description: "Get started by cloning the Surfit repository to your local machine.",
      code: "git clone https://github.com/nopressurelabs/surfit.git"
    },
    {
      icon: Terminal,
      title: "Install Dependencies",
      description: "Install all required dependencies using your preferred package manager.",
      code: "cd surfit && npm install"
    },
    {
      icon: Play,
      title: "Start Development",
      description: "Launch the development server and start building amazing surf tech.",
      code: "npm run dev"
    },
    {
      icon: Code,
      title: "Start Building",
      description: "Explore the docs, run examples, and start creating your surf applications.",
      code: "npm run docs"
    }
  ];

  return (
    <section className="py-24 px-4 gradient-wave">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to get Surfit up and running on your machine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm bg-card/90">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </div>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-heading">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-muted rounded-lg p-3 font-mono text-sm text-foreground border">
                  <code>{step.code}</code>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading text-foreground">Ready to dive in?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="wave" size="lg">
                View Documentation
              </Button>
              <Button variant="outline" size="lg">
                Explore Examples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;