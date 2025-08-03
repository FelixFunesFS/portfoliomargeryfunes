
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Layout, PenTool, Code, Shield, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'Systems Analysis', level: 98 },
    { name: 'UX Research', level: 92 },
    { name: 'Process Optimization', level: 95 },
    { name: 'SharePoint Development', level: 90 },
    { name: 'VBA/Automation', level: 88 },
    { name: 'JavaScript/React', level: 85 },
    { name: 'Military Leadership', level: 100 },
  ];
  
  const services = [
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      title: 'Systems Design & Analysis',
      description: 'Military-trained approach to complex system design with precision and strategic thinking.',
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: 'Mission-Critical UX',
      description: 'User experiences designed for high-stakes environments where failure is not an option.',
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: 'Process Automation',
      description: 'Streamlining workflows through intelligent automation and systems integration.',
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: 'Leadership & Training',
      description: 'Leading cross-functional teams with military discipline and strategic coordination.',
    },
  ];

  return (
    <section id="about" className="section bg-gradient-to-br from-accent/30 via-background to-muted/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Mission-Driven Design Philosophy
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Combining 8 years of military precision with advanced UX methodologies to create 
            systems that perform under pressure and deliver exceptional user outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6">From Air Force to Innovation</h3>
            <p className="mb-4 text-muted-foreground">
              My unique background combines 8 years of U.S. Air Force systems operations with advanced 
              UX design methodologies. This rare combination allows me to approach complex problems with 
              both strategic military thinking and user-centered design principles.
            </p>
            <p className="mb-4 text-muted-foreground">
              During my military service, I specialized in complex systems analysis for F117 aircraft engines, 
              managing operations across 23 global bases and automating critical processes that saved thousands 
              of man-hours while reducing errors by up to 87%.
            </p>
            <p className="text-muted-foreground">
              Today, I apply this same precision and systems thinking to digital product design, creating 
              solutions that are not just beautiful, but built for reliability, scalability, and mission success.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Mission Capabilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index}>
                <Card className="glass border-none hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
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

export default About;
