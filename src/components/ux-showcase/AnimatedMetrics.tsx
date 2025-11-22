import { motion } from 'framer-motion';
import { Users, TestTube, Clock, TrendingUp, CheckCircle, Target } from 'lucide-react';
import useInView from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  context: string;
  color: string;
  isInView: boolean;
  delay: number;
}

const MetricCard = ({ icon: Icon, value, suffix, label, context, color, isInView, delay }: MetricCardProps) => {
  const count = useCountUp({ end: value, duration: 2000, isInView });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative p-8 rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className={`absolute top-4 right-4 p-3 rounded-xl bg-${color}/10`}>
        <Icon className={`w-6 h-6 text-${color}`} />
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1 mb-2">
          <motion.span
            className="text-5xl font-bold text-foreground"
            key={count}
          >
            {count}
          </motion.span>
          <span className="text-3xl font-bold text-primary">{suffix}</span>
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{label}</h3>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {context}
      </p>
    </motion.div>
  );
};

const AnimatedMetrics = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const metrics = [
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: 'User Interviews',
      context: 'In-depth conversations with users across military, government, and non-profit sectors',
      color: 'primary',
    },
    {
      icon: TestTube,
      value: 200,
      suffix: '+',
      label: 'Testing Sessions',
      context: 'Usability tests, A/B experiments, and validation studies conducted',
      color: 'systems-cyan',
    },
    {
      icon: Clock,
      value: 26,
      suffix: 'K+',
      label: 'Hours Saved',
      context: 'Process improvements and automation solutions delivered to end users',
      color: 'success',
    },
    {
      icon: TrendingUp,
      value: 5200,
      suffix: '%',
      label: 'Average ROI',
      context: 'Return on investment achieved through research-driven optimization',
      color: 'agile-secondary',
    },
    {
      icon: CheckCircle,
      value: 90,
      suffix: '%',
      label: 'Error Reduction',
      context: 'Average decrease in user errors through improved design and workflows',
      color: 'primary',
    },
    {
      icon: Target,
      value: 98,
      suffix: '%',
      label: 'User Satisfaction',
      context: 'High satisfaction scores across enterprise automation projects',
      color: 'success',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Research Impact by the Numbers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable outcomes from systematic, user-centered research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <MetricCard
              key={idx}
              {...metric}
              isInView={isInView}
              delay={0.1 * idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedMetrics;
