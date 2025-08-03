import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Plane, Building, Users, Target, Lightbulb, Code } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: "U.S. Air Force & Boeing",
      subtitle: "Identifying the Problem",
      description: "Noticed systems didn't align with how people actually worked. Applications were clunky, workflows inefficient."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Taking Action",
      subtitle: "Learning & Building",
      description: "Began learning automation, programming, and systems analysis to improve processes and bridge the user-technology gap."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Leadership Recognition",
      subtitle: "Continuous Improvement",
      description: "Rotated into new roles every six months to assess, modernize, and automate core systems."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "The Real Problem",
      subtitle: "Communication & Alignment",
      description: "Discovered the gap between users who couldn't express technical needs and developers lacking operational context."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Formal Pursuit",
      subtitle: "User Research & Experience Design",
      description: "Earned certifications, refined design practice, and expanded into full stack development."
    }
  ];

  return (
    <section id="journey" className="section bg-accent/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            My Journey into User Research: Bridging the Gap
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            From military service to user-centered design — discovering the power of bridging 
            the gap between users and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {milestone.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                  <Badge variant="secondary" className="mb-2">
                    {milestone.subtitle}
                  </Badge>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pl-8">
            <Card className="glass border-none h-full">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">The Realization</h3>
                    <p className="text-muted-foreground mb-4">
                      Through this work, I uncovered a deeper problem: most users couldn't clearly 
                      express their needs in technical terms, and development teams didn't always 
                      have access to the full context of daily operations.
                    </p>
                    <p className="text-muted-foreground">
                      <strong>It wasn't a people problem — it was a communication and alignment problem.</strong>
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-primary">Today's Mission</h3>
                    <p className="text-muted-foreground mb-4">
                      I create research-driven, human-centered solutions that help teams build 
                      the right products — the first time.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">User Research</Badge>
                      <Badge variant="outline">Experience Design</Badge>
                      <Badge variant="outline">Full Stack Development</Badge>
                      <Badge variant="outline">Systems Analysis</Badge>
                      <Badge variant="outline">Process Improvement</Badge>
                      <Badge variant="outline">Automation</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Card className="glass border-none inline-block">
            <CardContent className="p-6">
              <Building className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-lg font-medium text-primary">
                "Translator between users and developers"
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Bridging the gap with research-driven design and technical expertise
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Journey;