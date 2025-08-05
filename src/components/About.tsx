
import React from 'react';
import { Target, Shield, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  
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
