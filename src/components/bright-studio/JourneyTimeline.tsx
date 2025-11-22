import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';

const JourneyTimeline = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const milestones = [
    {
      year: '2004',
      title: 'Military Service',
      description: 'Began career in U.S. Air Force, developing systems thinking and analytical skills',
      image: '🎖️',
    },
    {
      year: '2010',
      title: 'Systems Analysis',
      description: 'Transitioned to systems analysis, optimizing workflows and processes',
      image: '⚙️',
    },
    {
      year: '2018',
      title: 'Career Transition',
      description: 'Discovered UX research, merging systems expertise with human-centered design',
      image: '🔄',
    },
    {
      year: '2022',
      title: 'UX Certifications',
      description: 'Completed Google UX Design & Research certifications',
      image: '🎓',
    },
    {
      year: '2024',
      title: 'Research Leader',
      description: 'Leading enterprise UX research initiatives with measurable business impact',
      image: '🚀',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(milestones.length - 1, prev + 1));
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">My Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From military systems analyst to UX research leader
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300 flex items-center justify-center -ml-6"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === milestones.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all duration-300 flex items-center justify-center -mr-6"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Timeline */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: `-${currentIndex * 33.33}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
                  role="listitem"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
                  >
                    {/* Year Badge */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] text-white text-2xl font-bold mb-6 shadow-lg">
                      {milestone.year}
                    </div>

                    {/* Icon */}
                    <div className="text-7xl mb-6 filter grayscale hover:grayscale-0 transition-all duration-300">
                      {milestone.image}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                  </motion.article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {milestones.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-12 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]' : 'w-3 bg-gray-300'
                }`}
                aria-label={`Go to milestone ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
