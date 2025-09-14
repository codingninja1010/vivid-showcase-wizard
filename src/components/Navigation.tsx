import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, Briefcase, Code2, GraduationCap, Trophy, MessageSquare } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold glow-text hover:scale-105 transition-transform"
            >
              RB<span className="text-primary">V</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 transition-all hover-lift ${
                      activeSection === item.id 
                        ? 'text-primary bg-primary/10 border border-primary/20' 
                        : 'text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
          <div className="relative flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-4 text-xl transition-all hover-lift ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10 border border-primary/20' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Icon size={24} />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {/* Floating Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                activeSection === item.id 
                  ? 'bg-primary shadow-glow' 
                  : 'bg-muted-foreground/30 hover:bg-primary/50'
              }`}
              title={item.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;