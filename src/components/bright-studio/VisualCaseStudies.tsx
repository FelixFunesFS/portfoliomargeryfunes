import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { caseStudiesData } from '@/data/caseStudies';
import caseStudy1Dashboard from '@/assets/case-study-1-dashboard.jpg';
import caseStudy3Slides from '@/assets/case-study-3-slides.jpg';
import caseStudy4Workspace from '@/assets/case-study-4-workspace.jpg';
import caseStudy5Automation from '@/assets/case-study-5-automation.jpg';

const VisualCaseStudies = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const navigate = useNavigate();

  const featuredStudies = [
    { ...caseStudiesData[0], image: caseStudy1Dashboard, category: 'Systems Design', color: '#3B82F6' },
    { ...caseStudiesData[2], image: caseStudy3Slides, category: 'Research', color: '#8B5CF6' },
    { ...caseStudiesData[3], image: caseStudy4Workspace, category: 'Collaboration', color: '#F59E0B' },
    { ...caseStudiesData[4], image: caseStudy5Automation, category: 'Automation', color: '#10B981' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how research insights transformed into impactful solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredStudies.map((study, index) => (
            <motion.article
              key={study.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
              onClick={() => navigate('/case-studies', { state: { selectedStudyId: study.id } })}
              whileHover={{ y: -8 }}
              style={{
                gridColumn: index === 0 || index === 3 ? 'span 1' : 'span 1',
                gridRow: index === 1 ? 'span 2' : 'span 1',
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                {/* Category Badge */}
                <motion.div
                  className="inline-flex items-center w-fit mb-4 px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                  style={{ backgroundColor: study.color }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {study.category}
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                  {study.title}
                </h3>

                {/* Key Metric */}
                {study.metrics && study.metrics[0] && (
                  <div className="mb-4">
                    <div className="text-4xl font-bold mb-1">{study.metrics[0].value}</div>
                    <div className="text-lg text-gray-200">{study.metrics[0].label}</div>
                  </div>
                )}

                {/* Description */}
                <p className="text-base text-gray-200 mb-6 line-clamp-2">{study.problem}</p>

                {/* CTA */}
                <div className="flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  View Case Study
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisualCaseStudies;
