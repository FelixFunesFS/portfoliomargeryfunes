import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const UnifiedImpactMetrics = () => {
  const metrics = [
    {
      icon: Clock,
      value: "26,000+",
      label: "Hours Saved Annually",
      description: "Through automation and optimization",
      color: "text-systems-cyan"
    },
    {
      icon: TrendingUp,
      value: "90%",
      label: "Error Reduction",
      description: "In data-intensive workflows",
      color: "text-success"
    },
    {
      icon: Award,
      value: "5,200%",
      label: "Average ROI",
      description: "From user-centered solutions",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Measurable Impact
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            <span className="bg-gradient-to-r from-primary via-systems-cyan to-accent bg-clip-text text-transparent">Impact-Driven</span> Results
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Delivering quantifiable business impact through systematic UX research 
            and user-centered design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
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
                    <div className={`${metric.color}/20 p-3 rounded-full`}>
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {metric.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnifiedImpactMetrics;
