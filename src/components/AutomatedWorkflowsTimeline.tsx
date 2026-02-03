import { motion } from "framer-motion";
import { Zap, Mail, Clock, Users, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AutomatedWorkflow {
  trigger: string;
  emailType: string;
  recipient: string;
  timing: string;
}

interface AutomatedWorkflowsTimelineProps {
  workflows: AutomatedWorkflow[];
  className?: string;
}

const timingConfig: Record<string, { color: string; bg: string; border: string }> = {
  'Immediate': {
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30'
  },
  'On admin action': {
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30'
  },
  'Automated with cooldown': {
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30'
  },
  'default': {
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30'
  }
};

const getTimingConfig = (timing: string) => {
  if (timing.toLowerCase().includes('immediate')) return timingConfig['Immediate'];
  if (timing.toLowerCase().includes('admin')) return timingConfig['On admin action'];
  if (timing.toLowerCase().includes('automated') || timing.toLowerCase().includes('cooldown')) 
    return timingConfig['Automated with cooldown'];
  return timingConfig['default'];
};

const WorkflowCard = ({ workflow, index }: { workflow: AutomatedWorkflow; index: number }) => {
  const config = getTimingConfig(workflow.timing);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-border" />
      
      <div className="flex gap-4">
        {/* Timeline dot */}
        <div className={cn(
          "relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0",
          config.bg,
          "border-2",
          config.border
        )}>
          <Zap className={cn("w-5 h-5", config.color)} />
        </div>

        {/* Content Card */}
        <Card className={cn(
          "flex-1 transition-all duration-300 hover:shadow-md mb-4",
          "border",
          config.border
        )}>
          <CardContent className="p-4">
            {/* Trigger */}
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className={cn("text-xs", config.bg, config.border)}>
                Trigger
              </Badge>
              <span className="text-sm font-medium text-foreground">
                {workflow.trigger}
              </span>
            </div>

            {/* Flow visualization */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <div className={cn("flex items-center gap-1.5 px-2 py-1 rounded", config.bg)}>
                <Zap className={cn("w-3 h-3", config.color)} />
                <span className="text-xs font-medium">Trigger</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-primary/10">
                <Mail className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">{workflow.emailType}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-muted">
                <Users className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-medium">{workflow.recipient}</span>
              </div>
            </div>

            {/* Timing */}
            <div className="flex items-center gap-2 pt-2 border-t border-border/50">
              <Clock className={cn("w-4 h-4", config.color)} />
              <span className={cn("text-xs font-medium", config.color)}>
                {workflow.timing}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export const AutomatedWorkflowsTimeline = ({ workflows, className }: AutomatedWorkflowsTimelineProps) => {
  // Group by timing type for stats
  const immediateCount = workflows.filter(w => 
    w.timing.toLowerCase().includes('immediate')
  ).length;
  const scheduledCount = workflows.filter(w => 
    w.timing.toLowerCase().includes('day') || w.timing.toLowerCase().includes('before')
  ).length;
  const conditionalCount = workflows.length - immediateCount - scheduledCount;

  return (
    <div className={cn("space-y-6", className)}>
      {/* Stats Summary */}
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
          <Zap className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-sm font-medium text-green-600 dark:text-green-400">
            {immediateCount} Immediate
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
          <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
            {scheduledCount} Scheduled
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
          <Mail className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
            {conditionalCount} Conditional
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-2">
        {workflows.map((workflow, index) => (
          <WorkflowCard 
            key={`${workflow.trigger}-${index}`} 
            workflow={workflow} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};
