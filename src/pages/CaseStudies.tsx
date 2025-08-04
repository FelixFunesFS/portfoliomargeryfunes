import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyDetails from '@/components/CaseStudyDetails';
import { caseStudiesData } from '@/data/caseStudies';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter, Grid, List } from 'lucide-react';

const CaseStudies = () => {
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

  const categories = ['all', 'military', 'enterprise', 'research', 'design'];
  
  const filteredStudies = caseStudiesData.filter(study => {
    if (filter === 'all') return true;
    if (filter === 'military') return study.title.toLowerCase().includes('f117') || study.title.toLowerCase().includes('dod') || study.title.toLowerCase().includes('boeing');
    if (filter === 'enterprise') return study.title.toLowerCase().includes('enterprise') || study.title.toLowerCase().includes('dashboard');
    if (filter === 'research') return study.title.toLowerCase().includes('research') || study.title.toLowerCase().includes('ux');
    if (filter === 'design') return study.title.toLowerCase().includes('design') || study.title.toLowerCase().includes('ui');
    return true;
  });

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Systems Analysis & UX Case Studies
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Deep dives into complex systems analysis, UX research methodologies, and user-centered design solutions. 
              From military aircraft systems to enterprise software - solving problems through analytical precision and empathetic design.
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
            <>
              {/* Filters and View Toggle */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={filter === category ? "default" : "outline"}
                      className="cursor-pointer capitalize"
                      onClick={() => setFilter(category)}
                    >
                      {category === 'all' ? 'All Projects' : category}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              {/* Case Studies Grid/List */}
              <motion.div 
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                  : "space-y-6"
                }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, staggerChildren: 0.1 }}
              >
                {filteredStudies.map((study, index) => (
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

              {filteredStudies.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-muted-foreground text-lg">
                    No case studies found for the selected category.
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CaseStudies;