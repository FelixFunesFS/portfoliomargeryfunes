import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, FileText, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ProcessPhase {
  phase: string;
  activities: string[];
  deliverables: string[];
  duration: string;
}

interface ResearchProcessTimelineProps {
  phases: ProcessPhase[];
  className?: string;
}

const phaseColors = {
  Discovery: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-600 dark:text-blue-400",
    icon: "text-blue-500"
  },
  Synthesis: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-600 dark:text-purple-400",
    icon: "text-purple-500"
  },
  Design: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-600 dark:text-yellow-400",
    icon: "text-yellow-500"
  },
  "Design & Development": {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-600 dark:text-yellow-400",
    icon: "text-yellow-500"
  },
  Validation: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    text: "text-green-600 dark:text-green-400",
    icon: "text-green-500"
  },
  Development: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-600 dark:text-amber-400",
    icon: "text-amber-500"
  },
  "Testing & Refinement": {
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    text: "text-teal-600 dark:text-teal-400",
    icon: "text-teal-500"
  },
  "Launch & Iteration": {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-500"
  },
  Iteration: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-600 dark:text-emerald-400",
    icon: "text-emerald-500"
  }
};

const getPhaseColor = (phase: string) => {
  return phaseColors[phase as keyof typeof phaseColors] || phaseColors.Discovery;
};

export const ResearchProcessTimeline = ({ phases, className }: ResearchProcessTimelineProps) => {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
          
          <Accordion 
            type="multiple" 
            defaultValue={phases.map((_, index) => `phase-${index}`)}
            className="grid gap-4" 
            style={{ gridTemplateColumns: `repeat(${phases.length}, 1fr)` }}
          >
            {phases.map((phase, index) => {
              const colors = getPhaseColor(phase.phase);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Phase Circle */}
                  <div className="relative z-10 flex justify-center mb-4">
                    <div className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center border-2",
                      colors.bg, colors.border
                    )}>
                      <CheckCircle2 className={cn("w-8 h-8", colors.icon)} />
                    </div>
                  </div>
                  
                  {/* Arrow (except for last item) */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-8 -right-2 z-0">
                      <ArrowRight className="w-4 h-4 text-border" />
                    </div>
                  )}
                  
                  {/* Phase Card */}
                  <AccordionItem 
                    value={`phase-${index}`} 
                    className={cn(
                      "rounded-lg border backdrop-blur-sm transition-all duration-300",
                      colors.bg, colors.border
                    )}
                  >
                    <AccordionTrigger className="px-4 pt-4 pb-2 hover:no-underline [&[data-state=open]]:pb-2 min-h-[48px] sm:min-h-[44px]">
                      <div className="flex flex-col items-center w-full">
                        <h4 className={cn("font-semibold text-center text-xs sm:text-sm", colors.text)}>
                          {phase.phase}
                        </h4>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-4 pb-4 pt-2">
                      <div className="space-y-3 text-xs">
                        <div>
                          <p className="font-medium text-foreground/80 mb-1.5">Activities:</p>
                          <ul className="space-y-1 text-muted-foreground">
                            {phase.activities.map((activity, i) => (
                              <li key={i}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <p className="font-medium text-foreground/80 mb-1.5">Deliverables:</p>
                          <div className="flex items-start gap-1.5">
                            <FileText className="w-3 h-3 mt-0.5 flex-shrink-0 text-muted-foreground" />
                            <ul className="space-y-1 text-muted-foreground">
                              {phase.deliverables.map((deliverable, i) => (
                                <li key={i}>• {deliverable}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </div>

      {/* Mobile: Vertical Timeline */}
      <div className="lg:hidden space-y-4">
        {phases.map((phase, index) => {
          const colors = getPhaseColor(phase.phase);
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              {/* Vertical Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-border" />
              )}
              
              {/* Phase Circle */}
              <div className="absolute left-0 top-0">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center border-2",
                  colors.bg, colors.border
                )}>
                  <CheckCircle2 className={cn("w-4 h-4", colors.icon)} />
                </div>
              </div>
              
              {/* Phase Card with Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem 
                  value={`phase-mobile-${index}`}
                  className={cn(
                    "rounded-lg border backdrop-blur-sm",
                    colors.bg, colors.border
                  )}
                >
                  <AccordionTrigger className="px-3 pt-3 pb-2 hover:no-underline min-h-[48px]">
                    <div className="flex flex-col items-start w-full pr-2">
                      <h4 className={cn("font-semibold text-xs", colors.text)}>
                        {phase.phase}
                      </h4>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-3 pb-3 pt-1">
                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="font-medium text-foreground/80 mb-1">Activities:</p>
                        <ul className="space-y-0.5 text-muted-foreground">
                          {phase.activities.map((activity, i) => (
                            <li key={i}>• {activity}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <p className="font-medium text-foreground/80 mb-1">Deliverables:</p>
                        <ul className="space-y-0.5 text-muted-foreground">
                          {phase.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <FileText className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
