import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Award, 
  Users, 
  Target, 
  Star,
  Crown,
  Zap,
  TrendingUp
} from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: "AWS AI/ML Scholarship Recipient",
      icon: Crown,
      category: "Scholarship",
      description: "Awarded the prestigious AWS AI/ML Scholarship from Amazon Web Services",
      details: [
        "Selected from a competitive pool of over 50,000+ applicants worldwide",
        "Recognition for exceptional potential in artificial intelligence and machine learning",
        "Access to exclusive AWS training resources and certification programs",
        "Part of elite cohort of future AI/ML leaders"
      ],
      impact: "1 in 50,000+ Selected",
      year: "2024",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "2nd Place - Worthy Hack Hackathon",
      icon: Trophy,
      category: "Competition",
      description: "Led a team of 4 developers to secure 2nd place in a competitive hackathon",
      details: [
        "Competed against 170+ teams in intensive 48-hour hackathon",
        "Demonstrated exceptional leadership and technical skills",
        "Collaborated effectively under pressure to deliver innovative solution",
        "Recognized for outstanding problem-solving and execution"
      ],
      impact: "Top 2 out of 170+ Teams",
      year: "2024",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Top Open-Source Contributor",
      icon: Star,
      category: "Open Source",
      description: "Ranked 15th out of 300+ contributors in Code Peak program",
      details: [
        "Consistently high-quality contributions to open-source projects",
        "Demonstrated dedication to collaborative development",
        "Mentored junior developers and reviewed code submissions",
        "Built reputation for reliable and impactful contributions"
      ],
      impact: "Top 5% Contributor",
      year: "2023-2024",
      color: "from-green-400 to-teal-500"
    }
  ];

  const stats = [
    {
      icon: Trophy,
      value: "3+",
      label: "Major Achievements",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      value: "50K+",
      label: "AWS Scholarship Pool",
      color: "text-blue-400"
    },
    {
      icon: Target,
      value: "170+",
      label: "Hackathon Competitors",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      value: "Top 5%",
      label: "Open Source Ranking",
      color: "text-green-400"
    }
  ];

  return (
    <section ref={sectionRef} id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 glow-text">
              Achievements & <span className="text-primary">Recognition</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition for technical excellence, leadership, and contributions to the tech community.
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="glass text-center hover-lift">
                <CardContent className="p-6">
                  <Icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className={`glass hover-lift transform transition-all duration-1000 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } group overflow-hidden relative`}
                style={{ transitionDelay: `${(index + 2) * 200}ms` }}
              >
                {/* Gradient Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color} group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div>
                          <Badge className="mb-3" variant="outline">
                            {achievement.category}
                          </Badge>
                          <CardTitle className="text-2xl lg:text-3xl">
                            {achievement.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-2 text-lg">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Badge className="bg-primary/20 text-primary border-primary/30 mb-2">
                          {achievement.year}
                        </Badge>
                        <p className="text-lg font-bold text-accent">
                          {achievement.impact}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Zap size={18} className="text-primary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {achievement.details.slice(0, 2).map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Award size={18} className="text-primary" />
                          Recognition Details
                        </h4>
                        <ul className="space-y-2">
                          {achievement.details.slice(2).map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Future Goals */}
        <div className={`mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Card className="glass max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Target className="mx-auto text-primary" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Continuing the Journey</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                These achievements represent just the beginning of my journey in technology. 
                I'm committed to continuous learning, contributing to open-source projects, 
                and building innovative solutions that make a positive impact on the world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;