import { MapPin, Smartphone, Calendar } from "lucide-react";
import aiIcon from "@/assets/ai-icon.png";

const FeatureHighlights = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <MapPin className="w-8 h-8 text-accent mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Spot Map</h3>
            <p className="text-muted-foreground text-sm">Discover surf spots with parking, cafes, and surf schools nearby.</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <Smartphone className="w-8 h-8 text-accent mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Privacy-First Design</h3>
            <p className="text-muted-foreground text-sm">No accounts needed, your data stays private</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <img src={aiIcon} alt="AI Smart Picks" className="w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Smart Picks</h3>
            <p className="text-muted-foreground text-sm">AI analyzes historical and forecast data to recommend the perfect surf days for your skill level.</p>
          </div>
          
          <div className="bg-card rounded-xl p-6 border shadow-sm text-center">
            <Calendar className="w-8 h-8 text-accent mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Extended Forecasts</h3>
            <p className="text-muted-foreground text-sm">Get detailed 14-day forecasts with hourly breakdowns and confidence ratings.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;