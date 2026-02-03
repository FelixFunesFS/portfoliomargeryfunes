import { motion } from "framer-motion";
import { Globe, Mail, Smartphone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SystemTouchpoint {
  touchpoint: string;
  userType: string;
  purpose: string;
  channel: 'web' | 'email' | 'mobile' | 'pdf';
}

interface SystemTouchpointsMatrixProps {
  touchpoints: SystemTouchpoint[];
  className?: string;
}

const channelConfig = {
  web: {
    icon: Globe,
    label: 'Web',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30'
  },
  email: {
    icon: Mail,
    label: 'Email',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30'
  },
  mobile: {
    icon: Smartphone,
    label: 'Mobile',
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30'
  },
  pdf: {
    icon: FileText,
    label: 'PDF',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30'
  }
};

const TouchpointCard = ({ touchpoint, index }: { touchpoint: SystemTouchpoint; index: number }) => {
  const config = channelConfig[touchpoint.channel];
  const IconComponent = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      <Card className={cn(
        "h-full transition-all duration-300 hover:shadow-md",
        config.bg,
        "border",
        config.border
      )}>
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div className={cn("p-2 rounded-lg", config.bg)}>
              <IconComponent className={cn("w-5 h-5", config.color)} />
            </div>
            <Badge variant="outline" className={cn("text-xs shrink-0", config.bg, config.border)}>
              {config.label}
            </Badge>
          </div>

          <div>
            <h4 className={cn("font-semibold text-sm", config.color)}>
              {touchpoint.touchpoint}
            </h4>
            <p className="text-xs text-muted-foreground mt-1">
              {touchpoint.purpose}
            </p>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-border/50">
            <span className="text-xs text-muted-foreground">Users:</span>
            <Badge variant="secondary" className="text-xs">
              {touchpoint.userType}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export const SystemTouchpointsMatrix = ({ touchpoints, className }: SystemTouchpointsMatrixProps) => {
  // Group touchpoints by channel for the legend
  const channelCounts = touchpoints.reduce((acc, tp) => {
    acc[tp.channel] = (acc[tp.channel] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className={cn("space-y-6", className)}>
      {/* Channel Legend */}
      <div className="flex flex-wrap gap-3 justify-center">
        {Object.entries(channelCounts).map(([channel, count]) => {
          const config = channelConfig[channel as keyof typeof channelConfig];
          const IconComponent = config.icon;
          return (
            <div 
              key={channel}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full",
                config.bg,
                "border",
                config.border
              )}
            >
              <IconComponent className={cn("w-4 h-4", config.color)} />
              <span className={cn("text-sm font-medium", config.color)}>
                {config.label}
              </span>
              <Badge variant="secondary" className="text-xs h-5 px-1.5">
                {count}
              </Badge>
            </div>
          );
        })}
      </div>

      {/* Touchpoints Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {touchpoints.map((touchpoint, index) => (
          <TouchpointCard 
            key={`${touchpoint.touchpoint}-${index}`} 
            touchpoint={touchpoint} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
};
