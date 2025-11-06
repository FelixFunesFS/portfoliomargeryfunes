import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const CareerProgression = () => {
  const careerProgression = [
    { role: "Aircraft Systems Specialist", years: "2016-2018", location: "US Air Force" },
    { role: "Senior Systems Analyst", years: "2018-2021", location: "DOD/Boeing Contract" },
    { role: "UX Designer & Automation Lead", years: "2021-2023", location: "Military Systems" },
    { role: "UX/UI Designer", years: "2023-Present", location: "Freelance/Contract" }
  ];

  return (
    <section className="section bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Career Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Career Progression
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            A journey from military systems specialist to UX designer, applying 
            systems thinking and research methodologies across diverse domains.
          </p>
        </div>

        {/* Career Progression Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-success rounded-full" />
            
            <div className="space-y-8">
              {careerProgression.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <Card className="glass border-none">
                      <CardContent className="p-6">
                        <h4 className="text-lg font-semibold mb-2">{position.role}</h4>
                        <p className="text-muted-foreground mb-1">{position.years}</p>
                        <p className="text-primary font-medium">{position.location}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                  
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProgression;
