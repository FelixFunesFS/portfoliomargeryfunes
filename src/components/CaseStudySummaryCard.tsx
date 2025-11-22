import { motion } from "framer-motion";
import { Quote, TrendingUp, ChevronDown, Users, TestTube, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudy } from "@/types/caseStudy";
import { cn } from "@/lib/utils";
import { ResearchMethodsBadges } from "@/components/ResearchMethodsBadges";

interface CaseStudySummaryCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
  onExpandClick: () => void;
  isExpanded: boolean;
  className?: string;
}

export const CaseStudySummaryCard = ({ 
  caseStudy, 
  featured = false, 
  onExpandClick,
  isExpanded,
  className 
}: CaseStudySummaryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className={cn(
        "overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm flex flex-col",
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

          {/* Title */}
          <h3 className={cn(
            "font-bold leading-tight text-foreground",
            featured ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          )}>
            {caseStudy.title}
          </h3>

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

        <CardContent className="flex-1 flex flex-col p-4 sm:p-5 md:p-6">
          {/* Two Column Layout: 55/45 on desktop, single column on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 flex-1">
            
            {/* LEFT COLUMN: Challenge + Solution */}
            <div className="space-y-5 flex flex-col">
              {/* THE CHALLENGE */}
              <div className="space-y-3 flex-[1.2]">
                <div className="flex items-center gap-2 text-destructive">
                  <div className="w-1 h-6 bg-destructive rounded-full" />
                  <h4 className="font-semibold text-sm uppercase tracking-wider">The Challenge</h4>
                </div>
                
                <div className="pl-4 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {caseStudy.problem}
                  </p>
                  
                  {caseStudy.userVoice && (
                    <div className="relative p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <Quote className="absolute top-2 left-2 w-3.5 h-3.5 text-destructive/40" />
                      <p className="text-xs italic text-foreground/90 pl-5 line-clamp-2">
                        "{caseStudy.userVoice}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* SOLUTION & IMPACT */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <div className="w-1 h-6 bg-green-600 dark:bg-green-400 rounded-full" />
                  <h4 className="font-semibold text-sm uppercase tracking-wider">Solution & Impact</h4>
                </div>
                
                <div className="pl-4 space-y-3">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {caseStudy.solution}
                  </p>
                  
                  {caseStudy.stakeholderQuote && (
                    <div className="relative p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <Quote className="absolute top-2 left-2 w-3.5 h-3.5 text-green-500/40" />
                      <p className="text-xs italic text-foreground/90 pl-5 line-clamp-2">
                        "{caseStudy.stakeholderQuote}"
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Key Results + Research Methods */}
            <div className="space-y-5 flex flex-col">
              {/* KEY RESULTS */}
              {caseStudy.metrics && caseStudy.metrics.length > 0 && (
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                    <div className="w-1 h-6 bg-teal-600 dark:bg-teal-400 rounded-full" />
                    <h4 className="font-semibold text-sm uppercase tracking-wider">Key Results</h4>
                  </div>
                  
                  <div className="pl-4">
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5">
                      {caseStudy.metrics.slice(0, 4).map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20"
                        >
                          <div className="flex items-center gap-1.5 mb-1">
                            <TrendingUp className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                            <span className="text-lg font-bold text-teal-600 dark:text-teal-400">
                              {metric.value}
                            </span>
                          </div>
                          <p className="text-[10px] text-muted-foreground line-clamp-1">{metric.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* RESEARCH METHODS */}
              {caseStudy.researchMethods && caseStudy.researchMethods.length > 0 && (
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                    <div className="w-1 h-6 bg-violet-600 dark:bg-violet-400 rounded-full" />
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

          {/* CTA Button */}
          <div className="pt-5 mt-auto border-t border-border/30">
            <Button
              onClick={onExpandClick}
              className="w-full group"
              variant={isExpanded ? "default" : "outline"}
            >
              <span>{isExpanded ? "Hide" : "View"} Research Process</span>
              <ChevronDown className={cn(
                "w-4 h-4 ml-2 transition-transform duration-300",
                isExpanded && "rotate-180"
              )} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
