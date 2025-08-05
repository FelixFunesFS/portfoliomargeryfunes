import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Search, TestTube, BarChart3, MapPin, Target, Lightbulb, CheckCircle } from 'lucide-react';

const ResearchMethodology = () => {
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

  const researchProcessSteps = [
    {
      step: "1",
      title: "Empathy & Discovery",
      description: "Deep user research to understand real problems",
      icon: Search
    },
    {
      step: "2", 
      title: "Synthesis & Insights",
      description: "Pattern recognition and opportunity identification",
      icon: Lightbulb
    },
    {
      step: "3",
      title: "Solution Design",
      description: "Evidence-based solutions aligned with user needs",
      icon: Target
    },
    {
      step: "4",
      title: "Validation & Iteration",
      description: "Testing and refining based on user feedback",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research Toolkit & Methods
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Systematic approaches to understanding users and validating solutions
          </p>
        </motion.div>

        {/* Research Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Research Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-muted/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">My Research Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {researchProcessSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.step}
                </div>
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <step.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < researchProcessSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchMethodology;