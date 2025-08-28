import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ExternalLink, Eye, MapPin, TrendingUp, Target } from 'lucide-react';

interface WebDesignProject {
  title: string;
  client: string;
  location: string;
  platform: string;
  description: string;
  challenge: string;
  solution: string;
  assumptions: string;
  limitations: string;
  outcomes: string;
  features: string[];
  tools: string[];
  category: string;
  icon: any;
  color: string;
  link: string | null;
  image: string;
  keyOutcomes: string[];
}

interface WebDesignCardProps {
  project: WebDesignProject;
  index: number;
  onViewCaseStudy: () => void;
}

const WebDesignCard: React.FC<WebDesignCardProps> = ({ project, index, onViewCaseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300 h-full overflow-hidden">
        {/* Project Image/Mockup */}
        <div 
          className={`h-48 sm:h-56 relative overflow-hidden bg-primary/10 ${project.link ? 'cursor-pointer group' : ''}`}
          onClick={project.link ? () => window.open(project.link!, '_blank') : undefined}
        >
          <img 
            src={project.image.startsWith('http') 
              ? project.image 
              : `https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=800&q=80`
            }
            alt={`${project.title} project mockup`}
            className={`w-full h-full object-cover transition-transform duration-300 ${project.link ? 'group-hover:scale-105' : ''}`}
            onError={(e) => {
              // Fallback to a default image if the live image fails to load
              e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent ${project.link ? 'group-hover:from-background/70 group-hover:via-background/10' : ''}`}></div>
          {project.link && (
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-accent text-accent bg-background/80 backdrop-blur-sm">
                {project.platform}
              </Badge>
              {project.link && (
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-white hover:bg-white/20 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link!, '_blank');
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </div>

        <CardHeader className="p-4 sm:p-6">
          {/* Impact Metric Callout */}
          <div className="mb-4 p-3 bg-gradient-to-r from-primary-glow/10 to-accent/10 rounded-lg border border-primary-glow/20">
            <div className="flex items-start gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-primary-glow mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-semibold text-primary-glow">Key Impact: </span>
                <span className="text-foreground">{project.keyOutcomes[0]}</span>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-glow/20 flex items-center justify-center">
                <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-glow" />
              </div>
              <div>
                <CardTitle className="text-foreground text-lg sm:text-xl">{project.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{project.client}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">
              <MapPin className="w-3 h-3 inline mr-1" />
              {project.location}
            </p>
            <p className="text-sm text-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <Badge key={featureIndex} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {project.features.length > 3 && (
              <Badge variant="outline" className="text-xs">+{project.features.length - 3}</Badge>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-4 sm:p-6 pt-0">
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-0 h-auto mb-4">
                <span className="text-sm font-medium">View More Details</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="space-y-3">
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-destructive mb-1">Challenge</h4>
                  <p className="text-xs text-foreground">{project.challenge}</p>
                </div>
                
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-emerald-600 mb-1">Solution</h4>
                  <p className="text-xs text-foreground">{project.solution}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-amber-600 mb-1">Assumptions</h4>
                    <p className="text-xs text-foreground">{project.assumptions}</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <h4 className="text-xs font-semibold text-blue-600 mb-1">Limitations</h4>
                    <p className="text-xs text-foreground">{project.limitations}</p>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-primary mb-1">Outcomes</h4>
                  <p className="text-xs text-foreground">{project.outcomes}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Tools & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </CollapsibleContent>
          </Collapsible>

          <div className="flex gap-2 mt-4">
            <Button 
              size="sm" 
              className="flex-1 bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow"
              onClick={onViewCaseStudy}
            >
              <Target className="w-3 h-3 mr-2" />
              View Case Study
            </Button>
            {project.link && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 border-accent text-accent hover:bg-accent/10"
                onClick={() => window.open(project.link!, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                Live Site
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WebDesignCard;