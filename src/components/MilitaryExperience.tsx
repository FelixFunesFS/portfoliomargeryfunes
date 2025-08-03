import React from 'react';
import { Shield, Target, Users, Zap, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MilitaryExperience = () => {

  const transferableSkills = [
    {
      icon: <Target className="w-6 h-6" />,
      skill: "Strategic Planning",
      description: "Translating mission objectives into achievable action plans"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      skill: "Systems Analysis",
      description: "Experience with complex operational systems and equipment"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      skill: "Process Optimization",
      description: "Streamlining workflows in high-stakes environments"
    },
    {
      icon: <Users className="w-6 h-6" />,
      skill: "Team Leadership",
      description: "Managing diverse teams towards common objectives"
    }
  ];

  const militaryCaseStudies = [
    {
      title: "F117 Engine Cycle Tracking Automation",
      impact: "87% error reduction, 480+ man-hours saved monthly",
      description: "Transformed manual tracking systems for 1,200+ aircraft engines into a real-time digital dashboard"
    },
    {
      title: "USAF Maintenance Configuration Tool", 
      impact: "100% compliance tracking, hours to minutes setup",
      description: "Designed a web-based configuration management system that revolutionized maintenance workflows"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-background via-muted/10 to-accent/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/30">
              US Air Force Veteran
            </Badge>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gradient">
            Military-Informed Design Leadership
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            8 years of Air Force service provided exceptional training in leadership, decision-making under pressure, 
            and systems thinking - all of which inform my approach to design and systems analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Service Details */}
          <div>
            <Card className="glass border-none h-full">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold">United States Air Force</h3>
                    <p className="text-muted-foreground">Systems Operations Specialist</p>
                    <p className="text-sm text-muted-foreground">2010 - 2018</p>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Exceptional Service Recognition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Team Achievement Award</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Process Improvement Leadership</span>
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-accent/30 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-2">Leadership Recognition:</p>
                  <p className="text-sm italic">"Known for making the impossible, possible!"</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Military Design Vision */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Military-Influenced Design Vision</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Precision</h4>
                  <p className="text-muted-foreground text-sm">Attention to detail that ensures error-free designs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Resilience</h4>
                  <p className="text-muted-foreground text-sm">Creating interfaces that perform reliably under pressure</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Efficiency</h4>
                  <p className="text-muted-foreground text-sm">Optimizing workflows to save time and resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transferable Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Transferable Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {transferableSkills.map((skill, index) => (
              <div key={index}>
                <Card className="glass border-none h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">{skill.skill}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Military Case Studies Highlight */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Military/Design Case Studies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {militaryCaseStudies.map((study, index) => (
              <div key={index}>
                <Card className="glass border-none h-full">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-2">{study.title}</h4>
                    <p className="text-primary font-medium text-sm mb-3">{study.impact}</p>
                    <p className="text-muted-foreground text-sm mb-4">{study.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Case Study
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilitaryExperience;