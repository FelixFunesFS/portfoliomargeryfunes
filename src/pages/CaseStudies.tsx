
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyDetails from '@/components/CaseStudyDetails';
import { caseStudiesData } from '@/data/caseStudies';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Margery Funes | Case Studies";
    window.scrollTo(0, 0);
  }, []);

  const handleStudySelect = (id: number) => {
    setSelectedStudy(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedStudy(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="section pt-32 pb-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Case Studies</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Detailed explorations of my UX/UI design and development work, showcasing problem-solving approaches and results.
            </p>
          </motion.div>

          {selectedStudy !== null ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CaseStudyDetails 
                study={caseStudiesData.find(study => study.id === selectedStudy)!} 
                onClose={handleClose}
              />
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, staggerChildren: 0.1 }}
            >
              {caseStudiesData.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CaseStudyCard 
                    study={study} 
                    onClick={() => handleStudySelect(study.id)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;
