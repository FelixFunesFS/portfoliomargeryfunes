import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudies';
import useInView from '@/hooks/useInView';
import caseStudy1Image from '@/assets/case-study-1-dashboard.jpg';
import caseStudy3Image from '@/assets/case-study-3-slides.jpg';
import caseStudy4Image from '@/assets/case-study-4-workspace.jpg';
import caseStudy5Image from '@/assets/case-study-5-automation.jpg';

const VisualCaseStudiesGrid = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const navigate = useNavigate();

  const featuredStudies = [
    { ...caseStudiesData[0], image: caseStudy1Image, category: 'Systems Design', color: 'primary' },
    { ...caseStudiesData[2], image: caseStudy3Image, category: 'Research', color: 'agile-primary' },
    { ...caseStudiesData[3], image: caseStudy4Image, category: 'Automation', color: 'success' },
    { ...caseStudiesData[4], image: caseStudy5Image, category: 'Process', color: 'systems-cyan' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Research-driven solutions that deliver measurable impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredStudies.map((study) => (
            <motion.article
              key={study.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              onClick={() => navigate('/case-studies', { state: { selectedStudyId: study.id } })}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-${study.color}/90 backdrop-blur-sm`}>
                  <span className="text-sm font-semibold text-white">{study.category}</span>
                </div>

                {/* Pulse Indicator */}
                <div className="absolute top-4 right-4">
                  <div className="relative">
                    <div className={`w-3 h-3 rounded-full bg-${study.color} animate-pulse`} />
                    <div className={`absolute inset-0 w-3 h-3 rounded-full bg-${study.color}/50 animate-ping`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                {/* Key Metric */}
                {study.metrics && study.metrics[0] && (
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-${study.color}/10 border border-${study.color}/20 mb-4`}>
                    <span className="text-2xl font-bold text-primary">{study.metrics[0].value}</span>
                    <span className="text-sm text-muted-foreground">{study.metrics[0].label}</span>
                  </div>
                )}

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {study.problem}
                </p>

                {/* View CTA */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VisualCaseStudiesGrid;
