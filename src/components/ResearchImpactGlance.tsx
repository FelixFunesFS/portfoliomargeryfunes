import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, TrendingUp, Award } from 'lucide-react';
const ResearchImpactGlance = () => {
  const impactMetrics = [{
    icon: Users,
    value: "200+",
    label: "Users Interviewed",
    description: "Across military and civilian contexts"
  }, {
    icon: Clock,
    value: "26,000+",
    label: "Hours Saved",
    description: "Through automation and optimization"
  }, {
    icon: TrendingUp,
    value: "90%",
    label: "Error Reduction",
    description: "In data-intensive workflows"
  }, {
    icon: Award,
    value: "5,200%",
    label: "Average ROI",
    description: "From user-centered solutions"
  }];
  return <section className="py-12 bg-muted/30">
      
    </section>;
};
export default ResearchImpactGlance;