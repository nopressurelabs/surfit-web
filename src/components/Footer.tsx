import { Waves, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Documentation", href: "#docs" },
      { label: "Getting Started", href: "#getting-started" },
      { label: "Examples", href: "#examples" }
    ],
    Community: [
      { label: "GitHub", href: "https://github.com/nopressurelabs/surfit" },
      { label: "Discord", href: "#discord" },
      { label: "Discussions", href: "#discussions" },
      { label: "Contributing", href: "#contributing" }
    ],
    Resources: [
      { label: "Blog", href: "#blog" },
      { label: "Changelog", href: "#changelog" },
      { label: "Support", href: "#support" },
      { label: "Status", href: "#status" }
    ]
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-heading text-foreground">Surfit</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Ride the wave of innovation with cutting-edge surf technology. 
              Built by the community, for the community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Surfit by nopressurelabs. Open source and community driven.
            </p>
            <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for the surf community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;