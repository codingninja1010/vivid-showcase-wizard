import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin, Award, Users, Code } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "INFOSYS SPRINGBOARD",
      location: "Remote",
      duration: "May 2024 - July 2024",
      type: "Internship",
      technologies: ["Python", "AI/ML", "Azure", "Tesseract OCR", "Microsoft TrOCR"],
      highlights: [
        "Developed Python-based software for automated bank check extraction from scanned PDFs",
        "Implemented OCR solutions using Tesseract OCR and Microsoft TrOCR for accurate data extraction",
        "Automated validation and data extraction processes to reduce manual errors by 85%",
        "Deployed and monitored application performance on Microsoft Azure cloud platform",
        "Collaborated in an Agile team environment covering all phases of the SDLC",
        "Improved system reliability and ensured high availability and scalability"
      ],
      achievements: [
        "Reduced manual processing time by 90%",
        "Achieved 95% accuracy in check data extraction",
        "Successfully deployed production-ready solution on Azure"
      ]
    },
    {
      title: "Open-Source Contributor",
      company: "CODE PEAK",
      location: "Remote",
      duration: "December 2023 - January 2024",
      type: "Open Source",
      technologies: ["Python", "JavaScript", "ReactJS", "Git", "GitHub"],
      highlights: [
        "Led the creation and merging of 20+ Pull Requests across multiple repositories",
        "Resolved 15+ critical issues in open-source projects during the program",
        "Enhanced proficiency in Git version control and GitHub collaborative workflows",
        "Participated in code reviews and maintained high code quality standards",
        "Contributed to documentation and improved project accessibility",
        "Mentored newcomers to open-source development"
      ],
      achievements: [
        "Ranked 15th out of 300+ contributors in the program",
        "Recognized for outstanding dedication to open-source development",
        "Built strong collaborative development skills"
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 glow-text">
              Work <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey in software development, from internships to open-source contributions.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30" />
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background pulse-glow" />
              
              <Card className={`ml-16 mb-12 glass hover-lift transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}>
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl flex items-center gap-3 mb-2">
                        <Building2 className="text-primary" size={24} />
                        {exp.title}
                      </CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="font-semibold text-lg text-accent">
                          {exp.company}
                        </span>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                    <Badge className={`${
                      exp.type === 'Internship' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'
                    } px-4 py-2`}>
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code size={18} className="text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users size={18} className="text-primary" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award size={18} className="text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Award size={16} className="text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;