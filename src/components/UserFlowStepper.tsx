import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowRight, LogIn, LogOut, User, Shield, Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FlowStep {
  step: number;
  name: string;
  description: string;
  fields?: string[];
}

interface UserFlow {
  id: string;
  name: string;
  userType: 'customer' | 'admin' | 'staff';
  description: string;
  steps: FlowStep[];
  entryPoints?: string[];
  exitStates?: string[];
}

interface UserFlowStepperProps {
  flows: UserFlow[];
  className?: string;
}

const userTypeConfig = {
  customer: {
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    badge: 'bg-blue-500/20 text-blue-700 dark:text-blue-300',
    stepActive: 'bg-blue-500 text-white',
    stepInactive: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
    icon: User
  },
  admin: {
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/20 text-amber-700 dark:text-amber-300',
    stepActive: 'bg-amber-500 text-white',
    stepInactive: 'bg-amber-500/20 text-amber-600 dark:text-amber-400',
    icon: Shield
  },
  staff: {
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    badge: 'bg-teal-500/20 text-teal-700 dark:text-teal-300',
    stepActive: 'bg-teal-500 text-white',
    stepInactive: 'bg-teal-500/20 text-teal-600 dark:text-teal-400',
    icon: Users
  }
};

const StepCircle = ({ 
  step, 
  isActive, 
  config 
}: { 
  step: number; 
  isActive: boolean; 
  config: typeof userTypeConfig.customer;
}) => (
  <div className={cn(
    "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
    isActive ? config.stepActive : config.stepInactive
  )}>
    {step}
  </div>
);

const FlowStepCard = ({ 
  flowStep, 
  isActive, 
  onClick, 
  config,
  isLast
}: { 
  flowStep: FlowStep; 
  isActive: boolean; 
  onClick: () => void;
  config: typeof userTypeConfig.customer;
  isLast: boolean;
}) => (
  <div className="flex flex-col items-center">
    {/* Step Circle */}
    <button
      onClick={onClick}
      className={cn(
        "relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
      )}
      aria-expanded={isActive}
      aria-label={`Step ${flowStep.step}: ${flowStep.name}`}
    >
      <StepCircle step={flowStep.step} isActive={isActive} config={config} />
      {isActive && (
        <motion.div
          layoutId="activeRing"
          className={cn("absolute -inset-1 rounded-full border-2", config.border)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </button>

    {/* Step Name */}
    <span className={cn(
      "mt-2 text-xs font-medium text-center max-w-[80px] leading-tight",
      isActive ? config.color : "text-muted-foreground"
    )}>
      {flowStep.name}
    </span>
  </div>
);

const FlowConnector = ({ isVertical = false }: { isVertical?: boolean }) => (
  <div className={cn(
    "flex items-center justify-center",
    isVertical ? "h-8 w-10" : "w-8 h-10 flex-shrink-0"
  )}>
    {isVertical ? (
      <div className="w-0.5 h-full bg-border" />
    ) : (
      <>
        <div className="flex-1 h-0.5 bg-border" />
        <ArrowRight className="w-3 h-3 text-muted-foreground mx-1" />
        <div className="flex-1 h-0.5 bg-border" />
      </>
    )}
  </div>
);

export const UserFlowStepper = ({ flows, className }: UserFlowStepperProps) => {
  const [selectedFlowId, setSelectedFlowId] = useState(flows[0]?.id);
  const [activeStep, setActiveStep] = useState(1);

  const selectedFlow = flows.find(f => f.id === selectedFlowId) || flows[0];
  const config = userTypeConfig[selectedFlow?.userType || 'customer'];
  const IconComponent = config.icon;

  if (!selectedFlow) return null;

  const activeStepData = selectedFlow.steps.find(s => s.step === activeStep);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Flow Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Select value={selectedFlowId} onValueChange={(value) => {
          setSelectedFlowId(value);
          setActiveStep(1);
        }}>
          <SelectTrigger className="w-full sm:w-[300px]">
            <SelectValue placeholder="Select a user flow" />
          </SelectTrigger>
          <SelectContent>
            {flows.map((flow) => (
              <SelectItem key={flow.id} value={flow.id}>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={cn("text-xs", userTypeConfig[flow.userType].badge)}>
                    {flow.userType}
                  </Badge>
                  <span>{flow.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Badge variant="outline" className={cn("w-fit", config.badge)}>
          <IconComponent className="w-3 h-3 mr-1" />
          {selectedFlow.steps.length} Steps
        </Badge>
      </div>

      {/* Flow Description */}
      <p className="text-sm text-muted-foreground">
        {selectedFlow.description}
      </p>

      {/* Horizontal Stepper (Desktop) */}
      <div className="hidden md:block">
        <div className="flex items-start justify-center gap-2 overflow-x-auto pb-4">
          {selectedFlow.steps.map((step, index) => (
            <div key={step.step} className="flex items-start">
              <FlowStepCard
                flowStep={step}
                isActive={activeStep === step.step}
                onClick={() => setActiveStep(step.step)}
                config={config}
                isLast={index === selectedFlow.steps.length - 1}
              />
              {index < selectedFlow.steps.length - 1 && (
                <FlowConnector />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Stepper (Mobile) */}
      <div className="md:hidden space-y-2">
        {selectedFlow.steps.map((step, index) => (
          <div key={step.step}>
            <button
              onClick={() => setActiveStep(step.step)}
              className={cn(
                "w-full flex items-center gap-4 p-3 rounded-lg transition-colors",
                activeStep === step.step ? config.bg : "hover:bg-muted/50"
              )}
            >
              <StepCircle step={step.step} isActive={activeStep === step.step} config={config} />
              <div className="flex-1 text-left">
                <span className={cn(
                  "font-medium text-sm",
                  activeStep === step.step ? config.color : "text-foreground"
                )}>
                  {step.name}
                </span>
              </div>
              <ChevronRight className={cn(
                "w-4 h-4 transition-transform",
                activeStep === step.step ? "rotate-90" : "",
                "text-muted-foreground"
              )} />
            </button>
            {index < selectedFlow.steps.length - 1 && (
              <div className="ml-5">
                <FlowConnector isVertical />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step Details Panel */}
      <AnimatePresence mode="wait">
        {activeStepData && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className={cn("border", config.border, config.bg)}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm",
                    config.stepActive
                  )}>
                    {activeStepData.step}
                  </div>
                  <div>
                    <h4 className={cn("font-semibold", config.color)}>
                      Step {activeStepData.step}: {activeStepData.name}
                    </h4>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {activeStepData.description}
                </p>

                {activeStepData.fields && activeStepData.fields.length > 0 && (
                  <div className="space-y-2">
                    <h5 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Fields / Elements
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activeStepData.fields.map((field, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Entry/Exit States */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {selectedFlow.entryPoints && selectedFlow.entryPoints.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <LogIn className="w-4 h-4" />
              <h5 className="text-xs font-semibold uppercase tracking-wide">Entry Points</h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedFlow.entryPoints.map((entry, idx) => (
                <Badge key={idx} variant="outline" className="text-xs bg-green-500/10 border-green-500/30">
                  {entry}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {selectedFlow.exitStates && selectedFlow.exitStates.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <LogOut className="w-4 h-4" />
              <h5 className="text-xs font-semibold uppercase tracking-wide">Exit States</h5>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedFlow.exitStates.map((exit, idx) => (
                <Badge key={idx} variant="outline" className="text-xs bg-amber-500/10 border-amber-500/30">
                  {exit}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
