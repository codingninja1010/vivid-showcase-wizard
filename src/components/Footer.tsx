import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rakesh-vajrapu",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rakeshvajrapu",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rakeshrb1411@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+919110343290",
      label: "Phone"
    }
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold glow-text">
              Rakesh Bhagavan <span className="text-primary">Vajrapu</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer passionate about AI/ML, Full-Stack Development, 
              and building innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Experience', 'Projects', 'Education', 'Achievements', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Me</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    size="icon"
                    variant="outline"
                    className="rounded-full hover-lift"
                    asChild
                  >
                    <a
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rakesh Bhagavan Vajrapu. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;