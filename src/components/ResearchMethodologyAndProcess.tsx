import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, TestTube, MapPin, BarChart3, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ResearchMethodologyAndProcess = () => {
  const navigate = useNavigate();

  const researchMethods = [
    {
      name: "User Interviews",
      description: "In-depth conversations to understand user motivations, pain points, and mental models",
      icon: Users,
      count: "50+ conducted",
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Usability Testing",
      description: "Observing real users interact with systems to identify friction points",
      icon: TestTube,
      count: "200+ sessions",
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "Journey Mapping",
      description: "Visualizing end-to-end user experiences to identify optimization opportunities",
      icon: MapPin,
      count: "25+ journeys",
      color: "bg-accent/10 text-accent"
    },
    {
      name: "Data Analysis",
      description: "Quantitative analysis to validate insights and measure impact",
      icon: BarChart3,
      count: "Multi-year datasets",
      color: "bg-muted text-muted-foreground"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Primary Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research Methodology & Design Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive, evidence-based approach combining systematic research methods with agile delivery. 
            Every solution is grounded in real user needs and validated through rigorous testing.
          </p>
        </motion.div>

        {/* Research Toolkit */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Research Toolkit & Methods
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Systematic approaches to understanding users and validating solutions
            </p>
          </motion.div>

          {/* Research Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mx-auto mb-3`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {method.count}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA to Insights Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              onClick={() => navigate('/insights')}
              className="group"
            >
              Explore My Complete Design Process
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodologyAndProcess;
