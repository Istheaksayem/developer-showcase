import { Github, Linkedin, Facebook, Twitter, Heart } from "lucide-react";
import { socialLinks } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold mb-2 inline-block">
              <span className="text-gradient">Dev</span>
              <span className="text-foreground">Portfolio</span>
            </a>
            <p className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Facebook size={18} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <Twitter size={18} />
            </a>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            Made with <Heart size={16} className="text-primary fill-primary" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
