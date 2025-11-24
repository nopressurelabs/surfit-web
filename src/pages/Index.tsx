import Navigation from "@/components/SurfitNavigation";
import Hero from "@/components/SurfitHero";
import FeatureHighlights from "@/components/FeatureHighlights";
import Features from "@/components/SurfitFeatures";
import ProFeatures from "@/components/ProFeatures";
import DataSources from "@/components/DataSources";
import Footer from "@/components/SurfitFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeatureHighlights />
      <section id="features">
        <Features />
      </section>
      <section id="pro">
        <ProFeatures />
      </section>
      <section id="support">
        <DataSources />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
