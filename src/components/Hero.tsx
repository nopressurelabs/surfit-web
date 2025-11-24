import { Button } from "@/components/ui/button";
import { Github, ArrowRight, Waves } from "lucide-react";
import heroWave from "@/assets/hero-wave.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroWave} 
          alt="Ocean waves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Animated wave overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/20 to-transparent wave"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary-light/15 to-transparent wave-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="fade-in-up">
          <div className="flex items-center justify-center mb-6 float">
            <Waves className="w-12 h-12 text-primary-light mr-3" />
            <h1 className="text-6xl md:text-8xl font-bold font-heading bg-gradient-to-r from-white to-primary-light bg-clip-text text-transparent">
              Surfit
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ride the wave of innovation with cutting-edge surf technology. 
            Built by <span className="text-primary-light font-semibold">nopressurelabs</span> for the surf community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="wave" 
              size="xl"
              className="group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Github className="mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;