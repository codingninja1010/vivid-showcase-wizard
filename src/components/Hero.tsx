import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';
import developerAvatar from '@/assets/developer-avatar.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="space-y-2">
                <p className="text-lg text-primary-glow font-medium tracking-wider uppercase">
                  Software Developer
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold glow-text">
                  Rakesh Bhagavan
                  <span className="block text-4xl lg:text-6xl text-accent">
                    Vajrapu
                  </span>
                </h1>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Passionate Software Engineer specializing in AI/ML, Full-Stack Development, 
                and Open-Source Contributions. Building innovative solutions with Python, 
                JavaScript, and Cloud Technologies.
              </p>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a 
                  href="tel:+919110343290" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +91 9110343290
                </a>
                <a 
                  href="mailto:rakeshrb1411@gmail.com" 
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  rakeshrb1411@gmail.com
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Button 
                size="lg" 
                className="animated-gradient hover-lift group"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="glass hover-lift group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>

              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full glass hover-lift"
                  asChild
                >
                  <a href="https://github.com/rakesh-vajrapu" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                </Button>
                
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="rounded-full glass hover-lift"
                  asChild
                >
                  <a href="https://linkedin.com/in/rakeshvajrapu" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 rounded-full animated-gradient p-1">
                  <div className="w-full h-full rounded-full overflow-hidden glass">
                    <img 
                      src={developerAvatar}
                      alt="Rakesh Bhagavan Vajrapu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating particles around avatar */}
                <div className="absolute -inset-10">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full pulse-glow"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + (i % 2) * 80}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-primary-glow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;