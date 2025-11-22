import { motion } from 'framer-motion';
import { Users, Search, Clock, TrendingUp, Zap, DollarSign } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';

const ImpactCounters = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const metrics = [
    { icon: Users, value: 50, suffix: '+', label: 'User Interviews', color: '#8B5CF6' },
    { icon: Search, value: 200, suffix: '+', label: 'Testing Sessions', color: '#3B82F6' },
    { icon: Clock, value: 26000, suffix: '+', label: 'Hours Saved', color: '#10B981' },
    { icon: TrendingUp, value: 90, suffix: '%', label: 'Error Reduction', color: '#F59E0B' },
    { icon: Zap, value: 98, suffix: '%', label: 'Faster Process', color: '#EF4444' },
    { icon: DollarSign, value: 5200, suffix: '%', label: 'ROI', color: '#8B5CF6' },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">Research Impact</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <MetricCard
                key={metric.label}
                icon={Icon}
                value={metric.value}
                suffix={metric.suffix}
                label={metric.label}
                color={metric.color}
                delay={index * 0.1}
                isInView={isInView}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

interface MetricCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
  isInView: boolean;
}

const MetricCard = ({ icon: Icon, value, suffix, label, color, delay, isInView }: MetricCardProps) => {
  const count = useCountUp({ end: value, duration: 2000, isInView });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-8 h-8" style={{ color }} />
      </div>

      <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        {count.toLocaleString()}
        {suffix}
      </div>

      <div className="text-xl text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

export default ImpactCounters;
