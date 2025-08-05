import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { useInView } from '@/hooks/useInView';

interface SkillItemProps {
  name: string;
  level: number;
  proficiency: string;
  description: string;
  delay?: number;
}

const SkillItem: React.FC<SkillItemProps> = ({
  name,
  level,
  proficiency,
  description,
  delay = 0,
}) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, level, delay]);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'bg-primary text-primary-foreground';
      case 'Advanced':
        return 'bg-secondary text-secondary-foreground';
      case 'Proficient':
        return 'bg-accent text-accent-foreground';
      case 'Foundational':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <TooltipProvider>
      <motion.div
        ref={ref as any}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: delay / 1000 }}
        className="mb-4"
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="cursor-help">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">{name}</span>
                <Badge 
                  variant="secondary" 
                  className={`text-xs px-2 py-1 ${getProficiencyColor(proficiency)}`}
                >
                  {proficiency}
                </Badge>
              </div>
              <Progress 
                value={progress} 
                className="h-2 bg-muted"
              />
              <div className="text-xs text-muted-foreground mt-1 text-right">
                {level}%
              </div>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p className="text-sm">{description}</p>
          </TooltipContent>
        </Tooltip>
      </motion.div>
    </TooltipProvider>
  );
};

export default SkillItem;