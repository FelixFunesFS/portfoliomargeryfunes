
import React, { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface AnimatedMetricProps {
  label: string;
  value: string;
  percentage: number;
  delay?: number;
}

const AnimatedMetric: React.FC<AnimatedMetricProps> = ({
  label,
  value,
  percentage,
  delay = 0,
}) => {
  const [progress, setProgress] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isInView, percentage, delay]);

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="mb-4"
    >
      <div className="flex justify-between text-sm mb-1">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
      <Progress value={progress} className="h-2" />
    </motion.div>
  );
};

export default AnimatedMetric;
