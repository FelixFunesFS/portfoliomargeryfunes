
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

          {/* Growth & Reflection Section */}
          <section className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-xl p-6 border border-amber-500/20">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-amber-600 dark:text-amber-400">
              <span className="bg-amber-500/10 text-amber-600 dark:text-amber-400 p-1 rounded-md mr-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
                </svg>
              </span>
              Growth & Reflection
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center text-foreground">
                    <Check size={16} className="mr-2 text-success" />
                    What Worked Well
                  </h3>
                  <ul className="space-y-2">
                    {study.reflection.whatWorkedWell.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <span className="mr-2 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center text-foreground">
                    <span className="mr-2 text-amber-500">💡</span>
                    Key Lesson Learned
                  </h3>
                  <p className="text-sm text-muted-foreground italic border-l-2 border-amber-500 pl-4">
                    {study.reflection.lessonsLearned}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center text-foreground">
                    <span className="mr-2">→</span>
                    What I'd Do Differently
                  </h3>
                  <ul className="space-y-2">
                    {study.reflection.wouldDoDifferently.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-muted-foreground">
                        <span className="mr-2 mt-1">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background/50 rounded-lg p-4 border border-border">
                  <h3 className="font-semibold mb-2 flex items-center text-foreground">
                    <span className="mr-2">📊</span>
                    Potential Impact
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {study.reflection.potentialImpact}
                  </p>
                </div>
              </div>
            </div>
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
