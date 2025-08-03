import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Lightbulb, Target, Users, Code2, Rocket } from 'lucide-react';

const JourneyAlternative = () => {
  const timelineSteps = [
    {
      phase: "Discovery",
      location: "U.S. Air Force & Boeing",
      insight: "Systems didn't align with how people actually worked",
      action: "Began questioning the status quo",
      icon: <MapPin className="w-5 h-5" />,
      color: "bg-blue-500"
    },
    {
      phase: "Action",
      location: "Self-Directed Learning",
      insight: "Gaps could be bridged with the right approach",
      action: "Learned automation, programming, and systems analysis",
      icon: <Code2 className="w-5 h-5" />,
      color: "bg-purple-500"
    },
    {
      phase: "Recognition", 
      location: "Leadership Rotations",
      insight: "Technical skills + user perspective = value",
      action: "Rotated every 6 months to improve core systems",
      icon: <Target className="w-5 h-5" />,
      color: "bg-accent"
    },
    {
      phase: "Revelation",
      location: "Systems Analysis",
      insight: "Communication and alignment problem, not people problem",
      action: "Identified the real gap between users and developers",
      icon: <Lightbulb className="w-5 h-5" />,
      color: "bg-yellow-500"
    },
    {
      phase: "Transformation",
      location: "Formal Education",
      insight: "User research could solve the translation problem",
      action: "Earned certifications in UX/UI and expanded to full stack",
      icon: <Users className="w-5 h-5" />,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section id="journey-alt" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">My Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            From <span className="text-gradient">Problem Identifier</span> to{' '}
            <span className="text-gradient">Solution Creator</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            How military service and corporate experience shaped my approach to user-centered design
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
          
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
              
              {/* Content */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Card className="glass border-none hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full ${step.color} text-white flex items-center justify-center`}>
                          {step.icon}
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-1">{step.phase}</Badge>
                          <p className="text-sm text-muted-foreground">{step.location}</p>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">"{step.insight}"</h3>
                      <p className="text-muted-foreground">{step.action}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} hidden md:block`}>
                  {/* Spacer for timeline alignment */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills gained */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Skills developed throughout the journey:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">User Research</Badge>
            <Badge variant="secondary">Experience Design</Badge>
            <Badge variant="secondary">Systems Analysis</Badge>
            <Badge variant="secondary">Automation</Badge>
            <Badge variant="secondary">Full Stack Development</Badge>
            <Badge variant="secondary">Process Improvement</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyAlternative;