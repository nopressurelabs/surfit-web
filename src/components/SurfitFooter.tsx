import { Heart, Shield, MessageCircle } from "lucide-react";
import surfitAppIcon from "@/assets/surfit-app-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Download", href: "#download" },
      { label: "Pricing", href: "#pricing" }
    ],
    Support: [
      { label: "Contact", href: "#support" },
      { label: "Privacy Policy", href: "/privacy" }
    ],
    Community: [
      { label: "WhatsApp", href: "https://wa.me/34623944378" },
      { label: "Feedback", href: "#support" },
      { label: "Bugs", href: "#support" }
    ]
  };

  return (
    <footer className="bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 mb-8 sm:mb-0">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img src={surfitAppIcon} alt="SurfIt Logo" className="w-8 h-8 rounded-lg" />
              <span className="text-xl sm:text-2xl font-bold font-heading text-foreground">SurfIt</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md leading-relaxed">
              Find better days to surf. SurfIt blends swell, wind and tide into one fast, 
              privacy‑friendly map—no accounts, just better sessions.
            </p>
            <div className="flex space-x-4 items-center">
              <a 
                href="https://wa.me/34623944378" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="mailto:help@surfit.app" 
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                help@surfit.app
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4 font-heading">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {currentYear} Surfit.app by NoPressureLab. Open sources surf forecasting.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a 
                href="https://wa.me/34623944378" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <div className="flex items-center text-muted-foreground text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Privacy-first design
              </div>
              <p className="text-muted-foreground text-sm flex items-center">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for surfers
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;