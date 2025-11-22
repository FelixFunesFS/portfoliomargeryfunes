import { motion } from "framer-motion";
import { ArrowRight, Quote, TrendingUp, Lightbulb, Award } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ResearchProcessTimeline } from "./ResearchProcessTimeline";
import { ResearchMethodsBadges } from "./ResearchMethodsBadges";
import { CaseStudy } from "@/types/caseStudy";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface ProcessStoryCardProps {
  caseStudy: CaseStudy;
  featured?: boolean;
  className?: string;
}

export const ProcessStoryCard = ({ caseStudy, featured = false, className }: ProcessStoryCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className={cn(
        "overflow-hidden hover:shadow-2xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm",
        featured && "border-primary/30"
      )}>
        <CardHeader className="space-y-4 pb-4">
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
        </CardHeader>

        <CardContent className="space-y-6">
          {/* THE CHALLENGE */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-destructive">
              <div className="w-1 h-6 bg-destructive rounded-full" />
              <h4 className="font-semibold text-sm uppercase tracking-wider">The Challenge</h4>
            </div>
            
            <div className="pl-4 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {caseStudy.problem}
              </p>
              
              {caseStudy.userVoice && (
                <div className="relative p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <Quote className="absolute top-2 left-2 w-4 h-4 text-destructive/40" />
                  <p className="text-sm italic text-foreground/90 pl-6">
                    "{caseStudy.userVoice}"
                  </p>
                </div>
              )}
            </div>
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

          {/* KEY INSIGHTS & SOLUTION */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <div className="w-1 h-6 bg-green-600 dark:bg-green-400 rounded-full" />
              <h4 className="font-semibold text-sm uppercase tracking-wider">Key Insights & Solution</h4>
            </div>
            
            <div className="pl-4 space-y-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {caseStudy.solution}
              </p>
              
              {caseStudy.stakeholderQuote && (
                <div className="relative p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Quote className="absolute top-2 left-2 w-4 h-4 text-green-500/40" />
                  <p className="text-sm italic text-foreground/90 pl-6">
                    "{caseStudy.stakeholderQuote}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* IMPACT METRICS */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400">
                <div className="w-1 h-6 bg-teal-600 dark:bg-teal-400 rounded-full" />
                <h4 className="font-semibold text-sm uppercase tracking-wider">Measured Impact</h4>
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
                      className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/20"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                        <span className="text-xl font-bold text-teal-600 dark:text-teal-400">
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
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
              
              <div className="pl-4 space-y-3">
                {caseStudy.reflection.whatWorkedWell && caseStudy.reflection.whatWorkedWell.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      <p className="text-xs font-semibold text-foreground/80">What Worked Well:</p>
                    </div>
                    <ul className="space-y-1 text-xs text-muted-foreground ml-6">
                      {caseStudy.reflection.whatWorkedWell.slice(0, 2).map((item, i) => (
                        <li key={i} className="line-clamp-2">• {item}</li>
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
                    <p className="text-xs text-muted-foreground ml-6 line-clamp-3">
                      {caseStudy.reflection.lessonsLearned}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TECHNICAL TOOLS (De-emphasized) */}
          {caseStudy.tools && caseStudy.tools.length > 0 && (
            <div className="pl-4 pt-2 border-t border-border/50">
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
          <div className="pt-4">
            <Button
              onClick={() => navigate(`/case-studies/${caseStudy.id}`)}
              className="w-full group"
              variant={featured ? "default" : "outline"}
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
