import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Wind, Clock, MapPin, Smartphone, Zap } from "lucide-react";
import swellAnalysisBg from "@/assets/swell-analysis-bg.jpg";
import windSkyBg from "@/assets/wind-sky-bg.jpg";
import tideChartsBg from "@/assets/tide-charts-bg.jpg";
import spotMapBg from "@/assets/spot-map-bg.jpg";
import privacyBg from "@/assets/privacy-bg.jpg";
import lightningFastBg from "@/assets/lightning-fast-bg.jpg";

const Features = () => {
  const coreFeatures = [
    {
      icon: Waves,
      title: "Swell Analysis",
      description: "Real-time swell height, period, and direction data from multiple marine sources.",
      tags: ["Real-time", "Multiple Sources"],
      background: swellAnalysisBg
    },
    {
      icon: Wind,
      title: "Wind Conditions",
      description: "Precise wind speed and direction forecasts optimized for surf conditions.",
      tags: ["Forecasts", "Surf Optimized"],
      background: windSkyBg
    },
    {
      icon: Clock,
      title: "Tide Charts",
      description: "Accurate tide predictions showing the best times to paddle out.",
      tags: ["Predictions", "Timing"],
      background: tideChartsBg
    }
  ];

  const smartFeatures = [
    {
      icon: MapPin,
      title: "Interactive Spot Map",
      description: "Discover surf spots with parking, cafes, and surf schools nearby.",
      background: spotMapBg
    },
    {
      icon: Smartphone,
      title: "Privacy-First Design",
      description: "No account required. Your surf data stays on your device.",
      background: privacyBg
    },
    {
      icon: Zap,
      title: "Just $3.99/Month",
      description: "One price, forever. No ads, no hidden fees—no worries.",
      background: lightningFastBg
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 swell-rise">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground mb-4 sm:mb-6">
            Why Choose SurfIt
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            SurfIt combines the essential surf data you need into one simple, fast, and privacy-friendly app.
          </p>
        </div>

        {/* Core Data Features */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent border-accent/20 text-sm">
              Core Data
            </Badge>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-4">
              All the data you need, beautifully combined
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
              <Card 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border border-white bg-card/90 backdrop-blur-sm relative overflow-hidden"
                  style={{
                    backgroundImage: `url(${feature.background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Transparent overlay */}
                  <div className="absolute inset-0 bg-white/70 dark:bg-black/70"></div>
                  
                  <CardHeader className="text-center relative z-10">
                    <div className="mx-auto p-4 rounded-full bg-white group-hover:bg-white transition-colors w-fit mb-4">
                      <feature.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl font-heading text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative z-10">
                    <p className="text-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
                <div className="flex flex-wrap gap-2 justify-center">
                  {feature.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Features */}
        <div>
          <div className="text-center mb-10 sm:mb-12">
            <Badge className="mb-3 sm:mb-4 bg-accent/10 text-accent border-accent/20 text-sm">
              Smart Features
            </Badge>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground px-4">
              Built for the modern surfer
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {smartFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white bg-gradient-to-br from-card to-card/50 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${feature.background})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Transparent overlay */}
                <div className="absolute inset-0 bg-white/70 dark:bg-black/70"></div>
                
                <CardContent className="pt-8 text-center relative z-10">
                  <div className="mx-auto p-3 rounded-full bg-white group-hover:bg-white transition-colors w-fit mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h4>
                  <p className="text-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;