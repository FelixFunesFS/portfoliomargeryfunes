import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, Cog, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useInView from '@/hooks/useInView';

const CareerJourney = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const milestones = [
    {
      year: '2004-2018',
      title: 'Military Service',
      description: 'US Air Force & Marine Corps - Leadership, systems thinking, and precision under pressure',
      icon: Shield,
      color: 'text-military-primary',
      bgColor: 'bg-military-primary/10',
    },
    {
      year: '2018-2020',
      title: 'Systems Analysis',
      description: 'Boeing & Enterprise - Analyzing complex workflows and optimizing processes at scale',
      icon: Cog,
      color: 'text-systems-cyan',
      bgColor: 'bg-systems-cyan/10',
    },
    {
      year: '2020-2023',
      title: 'Career Transition',
      description: 'Bridging military precision with user-centered design principles and research methodologies',
      icon: TrendingUp,
      color: 'text-agile-primary',
      bgColor: 'bg-agile-primary/10',
    },
    {
      year: '2023-Present',
      title: 'UX Research Leader',
      description: 'Leading research initiatives, designing solutions, and mentoring teams in user-centered practices',
      icon: Sparkles,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? milestones.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === milestones.length - 1 ? 0 : prev + 1));
  };

  return (
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From military precision to user-centered design excellence
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex-1 mx-8 overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="min-w-full px-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="p-8 rounded-2xl bg-card border border-border shadow-lg"
                    >
                      <div className="flex items-start gap-6">
                        <div className={`p-4 rounded-xl ${milestone.bgColor}`}>
                          <milestone.icon className={`w-8 h-8 ${milestone.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-primary mb-2">{milestone.year}</p>
                          <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                            {milestone.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {milestones.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to milestone ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourney;
