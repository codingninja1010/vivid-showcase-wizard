import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  Globe, 
  Cpu,
  Monitor,
  Server,
  Smartphone,
  GitBranch
} from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = {
    languages: {
      icon: Code2,
      title: "Programming Languages",
      items: ["Python", "JavaScript", "Java", "C/C++", "SQL", "PHP"],
    },
    frontend: {
      icon: Monitor,
      title: "Frontend Development",
      items: ["React", "HTML5", "CSS3", "Tailwind CSS", "JavaScript ES6+", "Responsive Design"],
    },
    backend: {
      icon: Server,
      title: "Backend & APIs",
      items: ["Flask", "REST APIs", "XML Processing", "Server Architecture"],
    },
    databases: {
      icon: Database,
      title: "Databases",
      items: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"],
    },
    cloud: {
      icon: Cloud,
      title: "Cloud & DevOps",
      items: ["Microsoft Azure", "Google Cloud", "Git", "GitHub", "CI/CD"],
    },
    aiml: {
      icon: Brain,
      title: "AI/ML & Computer Vision",
      items: ["OpenCV", "MediaPipe", "Machine Learning", "Tesseract OCR", "TrOCR"],
    },
    tools: {
      icon: GitBranch,
      title: "Development Tools",
      items: ["Git Version Control", "Agile & Scrum", "Debugging", "Testing"],
    },
    concepts: {
      icon: Cpu,
      title: "Technical Concepts",
      items: ["Data Structures", "Algorithms", "SDLC", "System Design", "Problem Solving"],
    },
  };

  const softSkills = [
    "Strong Collaboration",
    "Teamwork",
    "Communication",
    "Time Management",
    "Problem-Solving",
    "Leadership",
    "Adaptability",
    "Critical Thinking"
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 glow-text">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate software engineer with expertise in AI/ML, full-stack development, 
              and cloud technologies. I love creating innovative solutions and contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Object.entries(skills).map(([key, skill], index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={key}
                className={`glass hover-lift transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <Icon size={20} className="text-white" />
                    </div>
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <Badge 
                        key={item}
                        variant="secondary" 
                        className="text-xs hover:bg-primary/20 transition-colors"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Soft Skills */}
        <Card className={`glass hover-lift transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Globe size={20} className="text-white" />
              </div>
              Soft Skills & Professional Qualities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <Badge 
                  key={skill}
                  variant="outline" 
                  className="text-sm py-2 px-4 hover:bg-primary/10 transition-colors border-primary/30"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Personal Statement */}
        <div className={`mt-12 text-center transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-muted-foreground leading-relaxed">
                "I believe in the power of technology to solve real-world problems. Whether it's 
                automating bank check extraction, creating gesture-based interfaces, or contributing 
                to open-source projects, I'm always excited to tackle new challenges and learn 
                cutting-edge technologies."
              </blockquote>
              <footer className="mt-4 text-primary font-semibold">
                — Rakesh Bhagavan Vajrapu
              </footer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;