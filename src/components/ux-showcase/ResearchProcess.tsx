import { motion } from 'framer-motion';
import { Search, Lightbulb, Palette, Target } from 'lucide-react';
import useInView from '@/hooks/useInView';

const ResearchProcess = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const processes = [
    {
      number: '01',
      title: 'Discovery',
      icon: Search,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      items: ['User Interviews', 'Journey Mapping', 'Empathy Sessions', 'Stakeholder Alignment'],
    },
    {
      number: '02',
      title: 'Synthesis',
      icon: Lightbulb,
      color: 'text-systems-cyan',
      bgColor: 'bg-systems-cyan/10',
      borderColor: 'border-systems-cyan/20',
      items: ['Affinity Mapping', 'Key Insights', 'Persona Development', 'Problem Definition'],
    },
    {
      number: '03',
      title: 'Design',
      icon: Palette,
      color: 'text-agile-primary',
      bgColor: 'bg-agile-primary/10',
      borderColor: 'border-agile-primary/20',
      items: ['Wireframes', 'Prototypes', 'Design Iterations', 'Accessibility Review'],
    },
    {
      number: '04',
      title: 'Validate',
      icon: Target,
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      items: ['A/B Testing', 'Usability Studies', 'Metrics Analysis', 'Continuous Improvement'],
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
    hidden: { opacity: 0, y: 30 },
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
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            How I Approach UX Research
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic, user-centered methodology that transforms insights into impactful solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {processes.map((process, idx) => (
            <motion.article
              key={idx}
              variants={cardVariants}
              className={`relative p-8 rounded-2xl bg-card border-2 ${process.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
            >
              {/* Number Badge */}
              <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full ${process.bgColor} border-2 ${process.borderColor} flex items-center justify-center shadow-md`}>
                <span className={`text-2xl font-bold ${process.color}`}>{process.number}</span>
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl ${process.bgColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <process.icon className={`w-8 h-8 ${process.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4 text-card-foreground">{process.title}</h3>

              {/* Items */}
              <ul className="space-y-2">
                {process.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full ${process.bgColor} flex-shrink-0`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchProcess;
