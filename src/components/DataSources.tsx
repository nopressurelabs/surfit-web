import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Phone } from "lucide-react";

const DataSources = () => {

  return (
    <section id="support" className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 sm:mb-8">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Have questions, feedback, or suggestions? We'd love to hear from the surf community.
            </p>

            <div className="space-y-6 mb-10">
              <Card className="group hover:shadow-xl transition-all duration-300 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-heading text-accent">Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Questions, feedback or suggestions? Reach out directly to our team.
                  </p>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full border-accent/30 hover:bg-accent/10 hover:border-accent text-accent"
                      onClick={() => {
                        navigator.clipboard.writeText('help@surfit.app');
                        // You could add a toast notification here
                      }}
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      help@surfit.app
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full border-accent/30 hover:bg-accent/10 hover:border-accent text-accent"
                      onClick={() => window.open('https://wa.me/34623944378', '_blank')}
                    >
                      <Phone className="mr-2 w-4 h-4" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Privacy Promise
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                SurfIt is designed with privacy at its core. No user accounts, no tracking, 
                no data collection. Your surf spots and preferences stay on your device.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DataSources;