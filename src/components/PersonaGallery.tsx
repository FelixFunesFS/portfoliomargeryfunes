import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Target, AlertCircle, CheckSquare, ChevronDown, Users, Building2, Home } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface Persona {
  id: string;
  name: string;
  role: string;
  context: string;
  image?: string;
  accentColor?: 'blue' | 'green' | 'purple' | 'amber' | 'teal';
  goals: string[];
  painPoints: string[];
  keyTasks: string[];
  quote: string;
}

interface PersonaGalleryProps {
  personas: Persona[];
  className?: string;
}

const accentColorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    text: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30',
    icon: 'text-blue-500'
  },
  green: {
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
    text: 'text-green-600 dark:text-green-400',
    badge: 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30',
    icon: 'text-green-500'
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
    text: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30',
    icon: 'text-purple-500'
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30',
    text: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30',
    icon: 'text-amber-500'
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30',
    text: 'text-teal-600 dark:text-teal-400',
    badge: 'bg-teal-500/20 text-teal-700 dark:text-teal-300 border-teal-500/30',
    icon: 'text-teal-500'
  }
};

const PersonaCard = ({ persona, index }: { persona: Persona; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const colors = accentColorMap[persona.accentColor || 'blue'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className={cn(
        "h-full overflow-hidden transition-all duration-300 hover:shadow-lg",
        colors.bg,
        colors.border,
        "border"
      )}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <Badge variant="outline" className={cn("text-xs font-medium mb-2", colors.badge)}>
                {persona.role}
              </Badge>
              <h3 className={cn("font-bold text-lg", colors.text)}>
                {persona.name}
              </h3>
            </div>
            <div className={cn("p-2 rounded-full", colors.bg)}>
              {persona.role.toLowerCase().includes('corporate') && <Building2 className={cn("w-5 h-5", colors.icon)} />}
              {persona.role.toLowerCase().includes('military') && <Users className={cn("w-5 h-5", colors.icon)} />}
              {persona.role.toLowerCase().includes('parent') && <Home className={cn("w-5 h-5", colors.icon)} />}
              {persona.role.toLowerCase().includes('admin') && <Building2 className={cn("w-5 h-5", colors.icon)} />}
              {persona.role.toLowerCase().includes('staff') && <Users className={cn("w-5 h-5", colors.icon)} />}
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Quote - Always Visible */}
          <div className={cn("relative p-4 rounded-lg", colors.bg, "border", colors.border)}>
            <Quote className={cn("absolute top-2 left-2 w-4 h-4 opacity-40", colors.icon)} />
            <p className="text-sm italic text-foreground/90 pl-5 leading-relaxed">
              "{persona.quote}"
            </p>
          </div>

          {/* Context */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {persona.context}
          </p>

          {/* Expandable Details */}
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger className="w-full group">
              <div className={cn(
                "flex items-center justify-between w-full p-3 rounded-lg transition-colors",
                "hover:bg-muted/50"
              )}>
                <span className="text-sm font-medium text-muted-foreground">
                  {isExpanded ? 'Hide Details' : 'View Goals & Pain Points'}
                </span>
                <ChevronDown className={cn(
                  "w-4 h-4 text-muted-foreground transition-transform duration-300",
                  isExpanded && "rotate-180"
                )} />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 pt-3"
                  >
                    {/* Goals */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Target className="w-4 h-4" />
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Goals</h4>
                      </div>
                      <ul className="space-y-1.5 pl-6 text-xs text-muted-foreground">
                        {persona.goals.map((goal, idx) => (
                          <li key={idx} className="list-disc">{goal}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Pain Points */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="w-4 h-4" />
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Pain Points</h4>
                      </div>
                      <ul className="space-y-1.5 pl-6 text-xs text-muted-foreground">
                        {persona.painPoints.map((point, idx) => (
                          <li key={idx} className="list-disc">{point}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Tasks */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <CheckSquare className="w-4 h-4" />
                        <h4 className="font-semibold text-sm uppercase tracking-wide">Key Tasks</h4>
                      </div>
                      <ul className="space-y-1.5 pl-6 text-xs text-muted-foreground">
                        {persona.keyTasks.map((task, idx) => (
                          <li key={idx} className="list-disc">{task}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const PersonaGallery = ({ personas, className }: PersonaGalleryProps) => {
  const customerPersonas = personas.filter(p => 
    ['corporate', 'military', 'family'].includes(p.id)
  );
  const internalPersonas = personas.filter(p => 
    ['admin', 'staff'].includes(p.id)
  );

  return (
    <div className={cn("space-y-6", className)}>
      <Tabs defaultValue="customers" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="customers" className="gap-2">
            <Users className="w-4 h-4" />
            Customers ({customerPersonas.length})
          </TabsTrigger>
          <TabsTrigger value="internal" className="gap-2">
            <Building2 className="w-4 h-4" />
            Internal Team ({internalPersonas.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="customers" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerPersonas.map((persona, index) => (
              <PersonaCard key={persona.id} persona={persona} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="internal" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {internalPersonas.map((persona, index) => (
              <PersonaCard key={persona.id} persona={persona} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
