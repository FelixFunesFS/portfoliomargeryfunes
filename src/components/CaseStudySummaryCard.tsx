import { motion } from "framer-motion";
import { Quote, TrendingUp, ChevronDown, Users, TestTube, FileText, CheckCircle2, RefreshCw, Lightbulb, ExternalLink, Microscope } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { CaseStudy } from "@/types/caseStudy";
import { cn } from "@/lib/utils";
import { ResearchMethodsBadges } from "@/components/ResearchMethodsBadges";
import { ResearchProcessTimeline } from "@/components/ResearchProcessTimeline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CaseStudySummaryCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
  className?: string;
}

export const CaseStudySummaryCard = ({ 
  caseStudy, 
  featured = false, 
  className 
}: CaseStudySummaryCardProps) => {
  const navigate = useNavigate();
  const [isProcessExpanded, setIsProcessExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className={cn(
        "overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm flex flex-col max-w-[1400px] mx-auto",
        featured && "border-primary/30"
      )}>
        <CardHeader className="space-y-3 pb-3">
          {/* Skill Focus Badge */}
          <div className="flex items-start justify-between gap-4">
            <Badge variant="outline" className="text-xs font-medium bg-accent/10 text-accent border-accent/30">
              Primary Focus: User Research & Design
            </Badge>
            {featured && (
              <Badge className="bg-primary text-primary-foreground">Featured Study</Badge>
            )}
          </div>


          {/* Research Scale Showcase */}
          {caseStudy.researchScale && (
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground border-t border-border/30 pt-3">
              {caseStudy.researchScale.interviews && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium">{caseStudy.researchScale.interviews}+ Interviews</span>
                </div>
              )}
              {caseStudy.researchScale.testSessions && (
                <div className="flex items-center gap-1.5">
                  <TestTube className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium">{caseStudy.researchScale.testSessions}+ Test Sessions</span>
                </div>
              )}
              {caseStudy.researchScale.artifacts && (
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium">{caseStudy.researchScale.artifacts}+ Artifacts</span>
                </div>
              )}
              {caseStudy.researchScale.participants && (
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-primary" />
                  <span className="font-medium">{caseStudy.researchScale.participants}+ Participants</span>
                </div>
              )}
            </div>
          )}
        </CardHeader>

        <CardContent className="flex-1 flex flex-col px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 space-y-6">
          {/* TOP SECTION: Challenge/Solution (50%) + Key Results/Methods (50%) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:border-r lg:border-border/30 lg:pr-6">
            {/* LEFT COLUMN: Title + Challenge + Solution */}
            <div className="space-y-5 flex flex-col">
              {/* Title */}
              <h3 className={cn(
                "font-bold leading-tight text-foreground break-words",
                featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
              )}>
                {caseStudy.title}
              </h3>
              {/* THE CHALLENGE */}
              <div className="space-y-3 flex-[1.2]">
                <div className="flex items-center gap-2 text-destructive">
                  <div className="w-1 h-6 bg-destructive rounded-full" />
                  <h4 className="font-semibold text-sm uppercase tracking-wider">The Challenge</h4>
                </div>
                
                <div className="pl-4 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseStudy.problem}
                  </p>
                  
                  {caseStudy.userVoice && (
                    <div className="relative p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <Quote className="absolute top-2 left-2 w-3.5 h-3.5 text-destructive/40" />
                      <p className="text-sm italic text-foreground/90 pl-5">
                        "{caseStudy.userVoice}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* SOLUTION & IMPACT */}
              <div className="space-y-3 flex-1 pt-5 border-t border-border/20">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <div className="w-1 h-6 bg-green-600 dark:bg-green-400 rounded-full" />
                  <h4 className="font-semibold text-sm uppercase tracking-wider">Solution & Impact</h4>
                </div>
                
                <div className="pl-4 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {caseStudy.solution}
                  </p>
                  
                  {caseStudy.stakeholderQuote && (
                    <div className="relative p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <Quote className="absolute top-2 left-2 w-3.5 h-3.5 text-green-500/40" />
                      <p className="text-sm italic text-foreground/90 pl-5">
                        "{caseStudy.stakeholderQuote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            </div>

            {/* RIGHT COLUMN: Key Results + Methods */}
            <div className="space-y-5">
              {/* KEY RESULTS - MOVED TO TOP FOR IMMEDIATE IMPACT */}
              {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <div className="w-1 h-6 bg-green-600 dark:bg-green-400 rounded-full" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Key Results</h4>
                  </div>
                  
                  <div className="pl-4">
                    <div className="grid grid-cols-2 gap-3">
                      {caseStudy.metrics.slice(0, 4).map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-4 rounded-lg bg-green-500/10 border border-green-500/20"
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                              {metric.value}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-1">{metric.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* RESEARCH METHODS */}
              {caseStudy.researchMethods && caseStudy.researchMethods.length > 0 && (
                <div className="space-y-3 pt-5 border-t border-border/20">
                  <div className="flex items-center gap-2 text-primary">
                    <div className="w-1 h-6 bg-primary rounded-full" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Research Methods</h4>
                  </div>
                  
                  <div className="pl-4">
                    <ResearchMethodsBadges 
                      methods={caseStudy.researchMethods.slice(0, 5)}
                      className="flex-wrap gap-2"
                    />
                    {caseStudy.researchMethods.length > 5 && (
                      <Badge 
                        variant="outline" 
                        className="mt-2 text-xs bg-muted/50 border-muted-foreground/20"
                      >
                        +{caseStudy.researchMethods.length - 5} more
                      </Badge>
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* GROWTH & REFLECTION - Now Collapsible */}
          {caseStudy.reflection && (
            <Collapsible className="border-t border-border/30 pt-5">
              <CollapsibleTrigger className="w-full group">
                <div className="flex items-center justify-between w-full hover:bg-amber-500/5 transition-colors rounded-lg p-3">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                    <Lightbulb className="w-5 h-5" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Growth & Lessons Learned</h4>
                  </div>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-amber-600 dark:text-amber-400 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  )} />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="pt-4">
                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* LEFT: What Worked Well + Future Optimizations */}
                  <div className="space-y-4">
                    {caseStudy.reflection.whatWorkedWell && caseStudy.reflection.whatWorkedWell.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                          <CheckCircle2 className="w-4 h-4" />
                          <h5 className="font-semibold text-sm uppercase tracking-wide">What Worked Well</h5>
                        </div>
                        <ul className="space-y-1.5 pl-6 text-xs text-muted-foreground">
                          {caseStudy.reflection.whatWorkedWell.slice(0, 2).map((item, index) => (
                            <li key={index} className="list-disc">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {caseStudy.reflection.wouldDoDifferently && caseStudy.reflection.wouldDoDifferently.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                          <RefreshCw className="w-4 h-4" />
                          <h5 className="font-semibold text-sm uppercase tracking-wide">Future Optimizations</h5>
                        </div>
                        <ul className="space-y-1.5 pl-6 text-xs text-muted-foreground">
                          {caseStudy.reflection.wouldDoDifferently.slice(0, 2).map((item, index) => (
                            <li key={index} className="list-disc">{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* RIGHT: Key Lesson */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary">
                      <Lightbulb className="w-4 h-4" />
                      <h5 className="font-semibold text-sm uppercase tracking-wide">Key Lesson</h5>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <p className="text-sm text-foreground leading-relaxed">
                        {caseStudy.reflection.lessonsLearned}
                      </p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* BOTTOM SECTION: Expandable Research Process */}
          {caseStudy.researchProcess && caseStudy.researchProcess.length > 0 && (
            <Collapsible
              open={isProcessExpanded}
              onOpenChange={setIsProcessExpanded}
              className="border-t border-border/30 pt-5"
            >
              <CollapsibleTrigger className="w-full group">
                <div className="flex items-center justify-between w-full hover:bg-primary/5 transition-colors rounded-lg p-3">
                  <div className="flex items-center gap-2 text-primary">
                    <Microscope className="w-5 h-5" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Research Process & Methodology</h4>
                  </div>
                  <ChevronDown className={cn(
                    "w-4 h-4 text-primary transition-transform duration-300",
                    isProcessExpanded && "rotate-180"
                  )} />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="pt-4">
                <div className="pl-4">
                  <ResearchProcessTimeline phases={caseStudy.researchProcess} />
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* View Full Case Study Button */}
          <div className="pt-2 border-t border-border/20">
            <Button
              onClick={() => {
                // Soul Train's Eatery (ID 6) has a dedicated deep dive page
                if (caseStudy.id === 6) {
                  navigate('/case-studies/soul-trains-eatery');
                } else {
                  navigate('/case-studies', { 
                    state: { selectedStudyId: caseStudy.id } 
                  });
                }
              }}
              className="w-full group mt-4"
              variant="outline"
            >
              <span>{caseStudy.id === 6 ? 'View Deep Dive Case Study' : 'View Full Case Study'}</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
