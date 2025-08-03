
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimatedMetric from '@/components/AnimatedMetric';
import { CaseStudy } from '@/types/caseStudy';

interface CaseStudyDetailsProps {
  study: CaseStudy;
  onClose: () => void;
}

const CaseStudyDetails: React.FC<CaseStudyDetailsProps> = ({ study, onClose }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-purple to-blue p-6 md:p-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose} 
            className="mb-4 text-white hover:bg-white/10"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to all case studies
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h1>
          <p className="text-white/80 text-lg max-w-3xl">{study.projectGoal}</p>
        </motion.div>
      </div>
      
      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div 
          className="md:col-span-2 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <section>
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <span className="bg-purple/10 text-purple p-1 rounded-md mr-2">
                <ChevronRight size={18} />
              </span>
              Problem
            </h2>
            <p className="text-muted-foreground">{study.problem}</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <span className="bg-purple/10 text-purple p-1 rounded-md mr-2">
                <ChevronRight size={18} />
              </span>
              Solution
            </h2>
            <p className="text-muted-foreground">{study.solution}</p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <span className="bg-purple/10 text-purple p-1 rounded-md mr-2">
                <ChevronRight size={18} />
              </span>
              Key Outcomes
            </h2>
            <ul className="space-y-3">
              {study.keyOutcomes.map((outcome, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="bg-accent/10 text-accent p-1 rounded-full mr-2 mt-0.5">
                    <Check size={12} />
                  </span>
                  <span className="text-muted-foreground">{outcome}</span>
                </motion.li>
              ))}
            </ul>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3 flex items-center">
              <span className="bg-purple/10 text-purple p-1 rounded-md mr-2">
                <ChevronRight size={18} />
              </span>
              UX Impact
            </h2>
            <p className="text-muted-foreground">{study.uxImpact}</p>
          </section>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <section className="bg-accent/30 p-5 rounded-lg">
            <h3 className="text-lg font-medium mb-3">My Role</h3>
            <p className="text-muted-foreground mb-4">{study.myRole.title}</p>
            <ul className="space-y-2">
              {study.myRole.responsibilities.map((resp, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-purple mr-2">•</span>
                  {resp}
                </li>
              ))}
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-medium mb-3">Tools Used</h3>
            <div className="flex flex-wrap gap-2">
              {study.tools.map((tool, index) => (
                <Badge key={index} className="bg-purple text-white">
                  {tool}
                </Badge>
              ))}
            </div>
          </section>
          
          {study.metrics && (
            <section>
              <h3 className="text-lg font-medium mb-3">Impact Metrics</h3>
              <div className="space-y-3">
                {study.metrics.map((metric, index) => (
                  <AnimatedMetric
                    key={index}
                    label={metric.label}
                    value={metric.value}
                    percentage={metric.percentage}
                    delay={index * 200}
                  />
                ))}
              </div>
            </section>
          )}
          
          <section>
            <h3 className="text-lg font-medium mb-2">Additional Context</h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Assumptions:</h4>
                <p className="text-sm">{study.assumptions}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground">Limitations:</h4>
                <p className="text-sm">{study.limitations}</p>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
