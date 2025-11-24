import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Waves, Wind, Brain, MapPin, Bell, Wifi, Zap, TrendingUp, Check, ShoppingBag, Store } from "lucide-react";
import appStoreBadge from "@/assets/app-store-badge.svg";

const proFeatures = [
  {
    icon: Brain,
    title: "AI POWERED",
    description: "Advanced machine learning predicts wave quality with 95% accuracy"
  },
  {
    icon: TrendingUp,
    title: "14-Day Extended Forecast",
    description: "Plan your surf trips with confidence using our extended predictions"
  },
  {
    icon: ShoppingBag,
    title: "Smart Gear Suggestions for Every Wave",
    description: "Gear, swimwear, and surfboard recommendations based on sea, weather, and location conditions"
  },
  {
    icon: Store,
    title: "Find nearby Restaurants, Cafés and Surf Schools",
    description: "Grab a bite before the next set. Rent a board or some gears."
  },
  {
    icon: Waves,
    title: "Real-Time Swell and Tide Analysis",
    description: "Live tracking of swell direction, period, and height from global buoys"
  },
  {
    icon: Wind,
    title: "Wind & Weather Layers",
    description: "Detailed wind patterns and weather forecasts"
  },
  {
    icon: MapPin,
    title: "1000+ Secret Spots",
    description: "Access exclusive breaks and hidden gems from local surfers worldwide"
  },
  {
    icon: Zap,
    title: "Lightning-Fast Updates",
    description: "Condition updates every 15 minutes, not hours"
  }
];

const ProFeatures = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/10" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 font-heading">
            Unlock the Ultimate Surf Experience
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get professional-grade forecasting tools trusted by thousands of surfers worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {proFeatures.map((feature, index) => (
            <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-accent mb-4" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing CTA */}
        <div id="pricing" className="px-4">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary via-primary to-accent border-primary/30 shadow-2xl">
          <CardContent className="p-6 sm:p-8 md:p-12 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Monthly Plan */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                  <div className="inline-flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-primary-foreground">$3.99</span>
                    <span className="text-base sm:text-lg text-primary-foreground/80">/month</span>
                  </div>
                  <p className="text-primary-foreground/90 text-sm">
                    Billed monthly
                  </p>
                </div>

                {/* Annual Plan */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
                  <div className="inline-flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-primary-foreground">$19.99</span>
                    <span className="text-base sm:text-lg text-primary-foreground/80">/year</span>
                  </div>
                  <p className="text-primary-foreground/90 text-sm">
                    Save over 50%
                  </p>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 text-lg mb-6">
                Unlimited access to all Pro features
              </p>
              
              {/* What's included */}
              <div className="flex flex-col gap-3 mb-8 text-left max-w-md mx-auto">
                {[
                  "7-day free trial included",
                  "Cancel anytime, no commitment",
                  "Priority customer support",
                  "Early access to new features"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#" 
                className="block transition-transform hover:scale-105"
              >
                <img 
                  src={appStoreBadge} 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>
              
              <Button 
                variant="outline" 
                size="xl"
                className="min-w-[200px] bg-primary-foreground text-primary border-0 hover:bg-primary-foreground/90"
              >
                Start Free Trial
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default ProFeatures;