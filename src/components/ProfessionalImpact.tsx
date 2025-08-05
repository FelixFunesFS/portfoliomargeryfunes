import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Clock, Users, DollarSign, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfessionalImpact = () => {
  const impacts = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      metric: "26,000+",
      label: "Hours Saved Annually",
      description: "Through automation and process optimization across 50+ users"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-success" />,
      metric: "98%",
      label: "Process Efficiency Gain",
      description: "Reduced 9.6 hours/week to 5 minutes for slide deck generation"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      metric: "90%",
      label: "Error Reduction",
      description: "Eliminated manual data entry errors in mission-critical systems"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      metric: "$2M+",
      label: "Cost Savings",
      description: "5-year projected savings from OQAR automation implementation"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      metric: "23",
      label: "Global Bases Served",
      description: "Scaled systems and processes across international military operations"
    },
    {
      icon: <Award className="w-8 h-8 text-success" />,
      metric: "1200+",
      label: "Aircraft Systems",
      description: "Managed F117 engine logistics and tracking systems"
    }
  ];

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
            Professional Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Measurable Results & Career Growth
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            From military systems specialist to UX designer, delivering quantifiable business impact 
            through strategic design and automation solutions.
          </p>
        </div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass border-none hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-accent/20 p-3 rounded-full">
                      {impact.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {impact.metric}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {impact.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Career Progression Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Career Progression</h3>
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

export default ProfessionalImpact;