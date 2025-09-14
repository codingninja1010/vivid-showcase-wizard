import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Heart, 
  Hand, 
  Users, 
  TrendingUp,
  Code2,
  Zap
} from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "Medicite - Reducing Medical Waste",
      icon: Heart,
      description: "A comprehensive web platform designed to address the critical issue of medical waste reduction through intelligent medicine management and accessibility.",
      longDescription: "Developed a user-friendly website that tackles the growing problem of medical waste by providing instant access to critical medicine information and promoting sustainable healthcare practices.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React JS", "PHP", "MySQL"],
      highlights: [
        "Engineered an advanced search feature for instant access to critical medicine details",
        "Implemented user-friendly interface with responsive design principles",
        "Built comprehensive database of medical information with PHP backend",
        "Designed to impact 5 million+ potential people with low medical proficiency",
        "Focused on sustainability and waste reduction in healthcare sector"
      ],
      impact: {
        users: "5M+ Potential Users",
        focus: "Medical Sustainability",
        type: "Healthcare Platform"
      },
      status: "Completed",
      category: "Full-Stack Web Development"
    },
    {
      title: "Gesture Based Volume Controller",
      icon: Hand,
      description: "An innovative computer vision system that enables intuitive volume control through real-time hand gesture recognition using advanced machine learning techniques.",
      longDescription: "Implemented a cutting-edge real-time hand gesture recognition system for intuitive volume control using Python and OpenCV, leveraging machine learning for accurate gesture detection.",
      technologies: ["Python", "OpenCV", "MediaPipe", "NumPy", "Machine Learning"],
      highlights: [
        "Implemented real-time hand gesture recognition for intuitive volume control",
        "Leveraged MediaPipe framework for accurate hand landmark detection",
        "Achieved low-latency gesture recognition with robustness against environmental noise",
        "Designed real-time system ensuring smooth user experience",
        "Applied computer vision and machine learning algorithms for precise detection"
      ],
      impact: {
        users: "Personal Project",
        focus: "Computer Vision",
        type: "AI/ML Application"
      },
      status: "Completed",
      category: "AI/ML & Computer Vision"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 glow-text">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that demonstrate my expertise in full-stack development, 
              AI/ML, and creating impactful user experiences.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className={`glass hover-lift transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } group h-full`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-gradient-primary group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                          {project.category}
                        </Badge>
                        <CardTitle className="text-xl lg:text-2xl leading-tight">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Code2 size={18} className="text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Zap size={18} className="text-primary" />
                      Key Features & Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Impact */}
                  <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Users size={16} className="text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">Impact</p>
                      <p className="text-sm font-semibold">{project.impact.users}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <TrendingUp size={16} className="text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">Focus</p>
                      <p className="text-sm font-semibold">{project.impact.focus}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Code2 size={16} className="text-primary" />
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">Type</p>
                      <p className="text-sm font-semibold">{project.impact.type}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button className="flex-1 group" variant="outline">
                      <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      View Code
                    </Button>
                    <Button className="flex-1 group">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Projects Teaser */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">More Projects Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and exploring emerging technologies. 
                Check back regularly to see my latest work in AI/ML, web development, and open-source contributions.
              </p>
              <Button variant="outline" className="group">
                <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                View All Projects on GitHub
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;