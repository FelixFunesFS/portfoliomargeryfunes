
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '@/data/caseStudies';

const CaseStudySummary = () => {
  const [activeStudy, setActiveStudy] = useState(0);
  
  const handleNext = () => {
    setActiveStudy((prev) => (prev === caseStudiesData.length - 1 ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setActiveStudy((prev) => (prev === 0 ? caseStudiesData.length - 1 : prev - 1));
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <section className="bg-accent/20 py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Case Study Highlights</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my UX/UI work through detailed case studies showcasing problem-solving approaches and results.
          </p>
        </div>
        
        <div className="lg:px-10 mb-12 relative">
          <Carousel className="w-full">
            <CarouselContent>
              {caseStudiesData.map((study, index) => (
                <CarouselItem key={study.id} className="md:basis-1/1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md"
                  >
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-2/5 bg-gradient-to-br from-purple to-blue p-8 text-white">
                        <span className="inline-block text-sm font-semibold bg-white/20 px-3 py-1 rounded-full mb-4">
                          Case Study {study.id}
                        </span>
                        <h3 className="text-xl md:text-2xl font-bold mb-3">{study.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tools.map((tool, idx) => (
                            <span key={idx} className="bg-white/10 text-xs px-3 py-1 rounded-full">
                              {tool}
                            </span>
                          ))}
                        </div>
                        <p className="text-white/80 mb-5">{truncateText(study.problem, 120)}</p>
                        <Link to="/case-studies" className="inline-block">
                          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple">
                            View All Case Studies
                          </Button>
                        </Link>
                      </div>
                      
                      <div className="w-full lg:w-3/5 p-8">
                        <h4 className="text-lg font-medium mb-4">Key Outcomes</h4>
                        <ul className="space-y-3 mb-6">
                          {study.keyOutcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-flex items-center justify-center bg-purple/10 text-purple rounded-full h-5 w-5 mt-0.5 mr-2">
                                <ChevronRight size={12} />
                              </span>
                              <span className="text-muted-foreground">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {study.metrics && (
                          <div className="space-y-3 mt-6">
                            <h4 className="text-lg font-medium mb-2">Impact</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {study.metrics.slice(0, 2).map((metric, idx) => (
                                <div key={idx} className="bg-accent/20 p-4 rounded-lg text-center">
                                  <div className="text-2xl font-bold text-purple mb-1">
                                    {metric.value}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {metric.label}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:-left-5 left-2" />
            <CarouselNext className="lg:-right-5 right-2" />
          </Carousel>
          
          <div className="flex justify-center mt-6 gap-2">
            {caseStudiesData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStudy(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  activeStudy === index ? 'bg-purple w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/case-studies">
            <Button className="bg-purple hover:bg-purple-light transition-colors">
              View All Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySummary;
