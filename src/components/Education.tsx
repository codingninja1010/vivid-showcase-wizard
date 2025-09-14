import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  BookOpen,
  Star,
  TrendingUp
} from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      institution: "Vignan's Institute of Information Technology",
      degree: "Bachelor of Technology in Computer Science",
      duration: "November 2022 - April 2026",
      status: "In Progress",
      gpa: "9.2/10.0",
      highlights: [
        "Maintaining excellent academic performance with 9.2 CGPA",
        "Specialized in Computer Science fundamentals and advanced topics",
        "Active participation in coding competitions and technical events",
        "Strong foundation in algorithms, data structures, and software engineering"
      ],
      focus: "Core Computer Science"
    },
    {
      institution: "Indian Institute of Technology, Madras",
      degree: "Bachelor of Science in Programming and Data Science",
      duration: "June 2023 - April 2027",
      status: "In Progress", 
      gpa: "Pursuing",
      highlights: [
        "Dual degree program focusing on advanced programming concepts",
        "Comprehensive curriculum in data science and analytics",
        "Exposure to cutting-edge research in AI and machine learning",
        "Rigorous training in mathematical foundations of computer science"
      ],
      focus: "Data Science & Programming"
    }
  ];

  const certifications = [
    {
      title: "Python Certification",
      issuer: "Infosys Springboard",
      category: "Programming",
      status: "Certified"
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      category: "Cloud & AI",
      status: "Certified"
    },
    {
      title: "Meta Full-Stack Developer Professional Certificate",
      issuer: "Meta",
      category: "Web Development",
      status: "Certified"
    },
    {
      title: "Udacity AI Programming with Python",
      issuer: "Udacity",
      category: "AI/ML",
      status: "Certified"
    }
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 glow-text">
              Education & <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey and professional certifications that shaped my expertise 
              in computer science and software development.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Academic Background
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className={`glass hover-lift transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-gradient-primary">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                          {edu.focus}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant={edu.status === 'In Progress' ? 'secondary' : 'default'}>
                      {edu.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl mb-2">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-lg font-semibold text-accent mb-2">
                    {edu.institution}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {edu.duration}
                    </div>
                    {edu.gpa !== 'Pursuing' && (
                      <div className="flex items-center gap-2">
                        <Star size={16} className="text-primary" />
                        <span className="font-semibold">CGPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`glass hover-lift transform transition-all duration-1000 group ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 5) * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-gradient-primary group-hover:scale-110 transition-transform">
                      <Award size={20} className="text-white" />
                    </div>
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {cert.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">
                    {cert.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen size={16} />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <Badge variant="outline" className="w-full justify-center py-1">
                      {cert.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className={`mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Excellence</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="text-primary" size={24} />
                  </div>
                  <p className="text-3xl font-bold text-primary">9.2</p>
                  <p className="text-muted-foreground">Current CGPA</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="text-accent" size={24} />
                  </div>
                  <p className="text-3xl font-bold text-accent">4+</p>
                  <p className="text-muted-foreground">Professional Certifications</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center mb-2">
                    <GraduationCap className="text-secondary" size={24} />
                  </div>
                  <p className="text-3xl font-bold text-secondary">2</p>
                  <p className="text-muted-foreground">Degree Programs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;