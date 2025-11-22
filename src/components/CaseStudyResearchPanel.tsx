import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Award, Lightbulb, RefreshCw, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResearchProcessTimeline } from "./ResearchProcessTimeline";
import { ResearchMethodsBadges } from "./ResearchMethodsBadges";
import { CaseStudy } from "@/types/caseStudy";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

interface CaseStudyResearchPanelProps {
  caseStudy: CaseStudy;
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyResearchPanel = ({ 
  caseStudy, 
  isOpen,
  onClose 
}: CaseStudyResearchPanelProps) => {
  const navigate = useNavigate();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      // Prevent body scroll when panel is open
      document.body.style.overflow = 'hidden';
      
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 400);
      
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          initial={{ maxHeight: 0, opacity: 0 }}
          animate={{ maxHeight: "2000px", opacity: 1 }}
          exit={{ maxHeight: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm mt-6 max-h-[calc(100vh-200px)] sm:max-h-[calc(100vh-150px)] lg:max-h-none">
            <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5 lg:space-y-6 overflow-y-auto max-h-[calc(100vh-250px)] sm:max-h-[calc(100vh-200px)] lg:max-h-none">
              {/* Close Button */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Full Research Process & Methodology
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                  className="h-10 w-10 sm:h-8 sm:w-8 p-0 relative before:content-[''] before:absolute before:inset-[-6px] before:sm:hidden"
                  aria-label="Close research panel"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* RESEARCH PROCESS TIMELINE */}
              {caseStudy.researchProcess && caseStudy.researchProcess.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Research Process</h4>
                  </div>
                  
                  <div className="pl-4">
                    <ResearchProcessTimeline phases={caseStudy.researchProcess} />
                  </div>
                </div>
              )}

              {/* RESEARCH METHODS USED */}
              {caseStudy.researchMethods && caseStudy.researchMethods.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-primary">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Research Methods</h4>
                  </div>
                  
                  <div className="pl-4">
                    <ResearchMethodsBadges 
                      methods={caseStudy.researchMethods} 
                      showCount 
                      scale={caseStudy.researchScale}
                    />
                  </div>
                </div>
              )}

              {/* REFLECTION & GROWTH */}
              {caseStudy.reflection && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <div className="w-1 h-6 bg-amber-600 dark:bg-amber-400 rounded-full" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Growth & Reflection</h4>
                  </div>
                  
                  <div className="pl-4 space-y-4">
                    {caseStudy.reflection.whatWorkedWell && caseStudy.reflection.whatWorkedWell.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <p className="text-xs font-semibold text-foreground/80">What Worked Well:</p>
                        </div>
                        <ul className="space-y-1.5 text-xs text-muted-foreground ml-6">
                          {caseStudy.reflection.whatWorkedWell.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {caseStudy.reflection.lessonsLearned && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <p className="text-xs font-semibold text-foreground/80">Key Lesson:</p>
                        </div>
                        <p className="text-xs text-muted-foreground ml-6">
                          {caseStudy.reflection.lessonsLearned}
                        </p>
                      </div>
                    )}
                    
                    {caseStudy.reflection.wouldDoDifferently && caseStudy.reflection.wouldDoDifferently.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <RefreshCw className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <p className="text-xs font-semibold text-foreground/80">Future Optimizations:</p>
                        </div>
                        <ul className="space-y-1.5 text-xs text-muted-foreground ml-6">
                          {caseStudy.reflection.wouldDoDifferently.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TECHNICAL TOOLS (De-emphasized) */}
              {caseStudy.tools && caseStudy.tools.length > 0 && (
                <div className="pl-4 pt-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground/60 mb-2">Technical Implementation:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.tools.map((tool, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-[10px] bg-muted/30 text-muted-foreground/70 border-border/30"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-4 border-t border-border/50">
                <Button
                  onClick={() => navigate(`/case-studies/${caseStudy.id}`)}
                  className="w-full group"
                  variant="default"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
