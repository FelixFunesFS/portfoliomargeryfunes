import { motion } from 'framer-motion';
import { Search, Lightbulb, Pencil, CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const ProcessCards = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const processes = [
    {
      number: '1',
      title: 'Discovery',
      icon: Search,
      color: '#3B82F6',
      bgColor: 'bg-blue-50',
      borderColor: 'border-[#3B82F6]',
      items: ['User Interviews', 'Journey Mapping', 'Empathy Building'],
    },
    {
      number: '2',
      title: 'Synthesis',
      icon: Lightbulb,
      color: '#10B981',
      bgColor: 'bg-green-50',
      borderColor: 'border-[#10B981]',
      items: ['Affinity Mapping', 'Key Insights', 'Persona Creation'],
    },
    {
      number: '3',
      title: 'Design',
      icon: Pencil,
      color: '#8B5CF6',
      bgColor: 'bg-purple-50',
      borderColor: 'border-[#8B5CF6]',
      items: ['Wireframes', 'Prototypes', 'Iteration'],
    },
    {
      number: '4',
      title: 'Validate',
      icon: CheckCircle,
      color: '#F59E0B',
      bgColor: 'bg-amber-50',
      borderColor: 'border-[#F59E0B]',
      items: ['A/B Testing', 'Usability Tests', 'Impact Metrics'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            How I Approach UX Research
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processes.map((process) => {
            const Icon = process.icon;
            return (
              <motion.article
                key={process.number}
                variants={cardVariants}
                className="group relative bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-opacity-100"
                style={{ borderColor: process.color }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Number Badge */}
                <div
                  className={`absolute -top-4 -left-4 w-16 h-16 rounded-2xl ${process.bgColor} flex items-center justify-center shadow-lg`}
                >
                  <span className="text-3xl font-bold" style={{ color: process.color }}>
                    {process.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${process.bgColor} rounded-2xl flex items-center justify-center mb-6 mt-8`}>
                  <Icon className="w-8 h-8" style={{ color: process.color }} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{process.title}</h3>

                {/* Items */}
                <ul className="space-y-2">
                  {process.items.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="mr-2" style={{ color: process.color }}>
                        •
                      </span>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessCards;
