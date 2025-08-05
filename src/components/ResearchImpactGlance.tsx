import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';

const ResearchImpactGlance = () => {
  const impactMetrics = [
    {
      icon: Users,
      value: "200+",
      label: "Users Interviewed",
      description: "Across military and civilian contexts"
    },
    {
      icon: Clock,
      value: "26,000+",
      label: "Hours Saved",
      description: "Through automation and optimization"
    },
    {
      icon: TrendingUp,
      value: "90%",
      label: "Error Reduction",
      description: "In data-intensive workflows"
    },
    {
      icon: Award,
      value: "5,200%",
      label: "Average ROI",
      description: "From user-centered solutions"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Research Impact at a Glance
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Proven Results Through User Research
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quantified impact from systematic user research and human-centered design
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric.description}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchImpactGlance;