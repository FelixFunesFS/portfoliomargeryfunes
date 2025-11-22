import { motion } from "framer-motion";
import { 
  Users, 
  MessageSquare, 
  Map, 
  FlaskConical, 
  LineChart, 
  Target,
  FileSearch,
  GitCompare,
  Workflow,
  Brain,
  UserCheck,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ResearchMethodsBadgesProps {
  methods: string[];
  showCount?: boolean;
  scale?: {
    interviews?: number;
    testSessions?: number;
    participants?: number;
  };
  className?: string;
}

const methodIcons: Record<string, { icon: any; description: string }> = {
  'User Interviews': {
    icon: MessageSquare,
    description: 'One-on-one conversations to understand user needs, pain points, and behaviors'
  },
  'Journey Mapping': {
    icon: Map,
    description: 'Visual representation of user experience across touchpoints and time'
  },
  'Usability Testing': {
    icon: FlaskConical,
    description: 'Task-based testing to validate design decisions and identify friction points'
  },
  'Workflow Analysis': {
    icon: Workflow,
    description: 'Systematic examination of existing processes to identify inefficiencies'
  },
  'Empathy Mapping': {
    icon: Brain,
    description: 'Collaborative visualization of user attitudes, behaviors, and emotions'
  },
  'User Persona Development': {
    icon: Users,
    description: 'Creating representative user archetypes based on research data'
  },
  'Stakeholder Interviews': {
    icon: Target,
    description: 'Strategic conversations with decision-makers to align business goals'
  },
  'Pattern Analysis': {
    icon: LineChart,
    description: 'Identifying recurring themes and insights across research data'
  },
  'User Acceptance Testing': {
    icon: UserCheck,
    description: 'Validation testing with real users to ensure solution meets requirements'
  },
  'Edge Case Testing': {
    icon: GitCompare,
    description: 'Testing boundary conditions and unusual scenarios for robustness'
  },
  'Data Quality Analysis': {
    icon: FileSearch,
    description: 'Systematic review of data accuracy, completeness, and reliability'
  },
  'Workflow Shadowing': {
    icon: Users,
    description: 'Observing users in their natural environment to understand real workflows'
  },
  'Field Observation': {
    icon: Users,
    description: 'In-situ observation of users performing tasks in real contexts'
  },
  'Task Completion Testing': {
    icon: CheckCircle2,
    description: 'Measuring user success rates and efficiency in completing key tasks'
  },
  'Cross-Base User Research': {
    icon: Map,
    description: 'Multi-location research to understand regional variations and patterns'
  },
  'Information Architecture Design': {
    icon: Workflow,
    description: 'Structuring and organizing information for optimal findability'
  },
  'Role-Based Testing': {
    icon: Users,
    description: 'Testing with different user roles to validate permission and access patterns'
  },
  'User Flow Design': {
    icon: Workflow,
    description: 'Mapping optimal paths for users to accomplish their goals'
  },
  'Iterative Testing': {
    icon: GitCompare,
    description: 'Continuous testing and refinement through multiple design iterations'
  },
  'Feedback Loop Analysis': {
    icon: LineChart,
    description: 'Analyzing user feedback patterns to drive continuous improvement'
  },
  'Form Usability Testing': {
    icon: FlaskConical,
    description: 'Specialized testing focused on form completion and data entry efficiency'
  }
};

const getMethodIcon = (method: string) => {
  const match = methodIcons[method];
  return match || { icon: CheckCircle2, description: 'Research method applied' };
};

export const ResearchMethodsBadges = ({ 
  methods, 
  showCount = false, 
  scale,
  className 
}: ResearchMethodsBadgesProps) => {
  const getCountText = (method: string) => {
    if (!scale || !showCount) return null;
    
    if (method.includes('Interview') && scale.interviews) {
      return `${scale.interviews}+`;
    }
    if ((method.includes('Testing') || method.includes('Test')) && scale.testSessions) {
      return `${scale.testSessions}`;
    }
    if (method.includes('Participant') && scale.participants) {
      return `${scale.participants}+`;
    }
    return null;
  };

  return (
    <TooltipProvider>
      <div className={cn("flex flex-wrap gap-2", className)}>
        {methods.map((method, index) => {
          const { icon: Icon, description } = getMethodIcon(method);
          const count = getCountText(method);
          
          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Badge 
                    variant="secondary"
                    className="px-2 py-1 sm:px-3 sm:py-1.5 gap-1.5 text-[10px] sm:text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-help"
                  >
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span>{method}</span>
                    {count && (
                      <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary/20 text-[10px] font-bold">
                        {count}
                      </span>
                    )}
                  </Badge>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-xs">{description}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </TooltipProvider>
  );
};
