import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, MapPin, Download, Star } from "lucide-react";
import heroSurfingWave from "@/assets/hero-surfing-wave.jpg";
import appLogo from "@/assets/surfit-app-logo.png";
import appStoreBadge from "@/assets/app-store-badge.svg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Hero Surfing Background */}
      <div className="absolute inset-0">
        {/* Base gradient background matching the wave colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-600 to-teal-700"></div>
        
        {/* Main hero surfing image */}
        <img 
          src={heroSurfingWave} 
          alt="Surfer riding a beautiful turquoise wave"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient overlays to blend with background colors and ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-teal-800/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-teal-800/40"></div>
      </div>

      {/* Animated wave overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[120%] h-32 bg-gradient-to-t from-primary/30 to-transparent ocean-wave"></div>
        <div className="absolute bottom-0 left-0 w-[120%] h-24 bg-gradient-to-t from-accent/20 to-transparent wave-flow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="tide-in">
          {/* Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 surf-float">
            <img 
              src={appLogo} 
              alt="SurfIt App Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-0 sm:mr-4 rounded-2xl shadow-lg"
            />
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading bg-gradient-to-r from-white via-white to-accent bg-clip-text text-transparent">
              SurfIt
            </h1>
          </div>
          

          <p className="text-base sm:text-lg md:text-xl text-white/85 mb-10 sm:mb-16 max-w-3xl mx-auto leading-relaxed px-2">
            One map, all the surf: <span className="text-accent font-semibold">swell</span>, <span className="text-accent font-semibold">wind</span>, and <span className="text-accent font-semibold">tide</span>— find the best spot and the best conditions for better surfing sessions. Fast, private (no account required), and hassle-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
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
              variant="glass" 
              size="xl"
              className="min-w-[200px]"
            >
              <Smartphone className="mr-3 text-accent" />
              View Demo
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;