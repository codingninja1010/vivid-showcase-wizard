import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  MapPin, 
  Send,
  MessageSquare,
  User,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "rakeshrb1411@gmail.com",
      href: "mailto:rakeshrb1411@gmail.com",
      description: "Send me an email for professional inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9110343290",
      href: "tel:+919110343290",
      description: "Call me for urgent matters"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/rakesh-vajrapu",
      href: "https://github.com/rakesh-vajrapu",
      description: "Check out my code and contributions"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/rakeshvajrapu",
      href: "https://linkedin.com/in/rakeshvajrapu",
      description: "Connect with me professionally"
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 glow-text">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on exciting projects? Let's discuss opportunities, 
              share ideas, or just have a conversation about technology and innovation.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className={`glass hover-lift transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageSquare className="text-primary" />
                  Send Me a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium">
                        <User size={16} />
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                        className="glass"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium">
                        <Mail size={16} />
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        required
                        className="glass"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium">
                      <MessageCircle size={16} />
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glass"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                      <MessageSquare size={16} />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, question, or just say hello!"
                      rows={6}
                      required
                      className="glass resize-none"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full group animated-gradient">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className={`glass transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="group">
                      <a 
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all hover-lift group"
                      >
                        <div className="p-2 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-1">
                            {info.value}
                          </p>
                          <p className="text-xs text-muted-foreground/80">
                            {info.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className={`glass transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-3 animate-pulse" />
                  <h3 className="font-semibold mb-2">Available for Opportunities</h3>
                  <p className="text-muted-foreground text-sm">
                    Currently seeking internships, freelance projects, and collaboration opportunities 
                    in software development, AI/ML, and full-stack web development.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Connect */}
            <Card className={`glass transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Quick Connect</h3>
                <div className="flex justify-center gap-4">
                  <Button size="icon" variant="outline" className="rounded-full hover-lift" asChild>
                    <a href="https://github.com/rakesh-vajrapu" target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover-lift" asChild>
                    <a href="https://linkedin.com/in/rakeshvajrapu" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover-lift" asChild>
                    <a href="mailto:rakeshrb1411@gmail.com">
                      <Mail size={20} />
                    </a>
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full hover-lift" asChild>
                    <a href="tel:+919110343290">
                      <Phone size={20} />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;