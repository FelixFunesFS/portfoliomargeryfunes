import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Users, Map, FileText, FlaskConical, Workflow, FileSearch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { caseStudiesData } from '@/data/caseStudies';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import TiltCard from '@/components/TiltCard';
import type { CaseStudy } from '@/types/caseStudy';

// Icon mapping for research artifacts
const artifactIconMap = {
  'journey-map': { icon: Map, label: 'Journey Map', color: 'text-blue-500' },
  'persona': { icon: Users, label: 'User Personas', color: 'text-purple-500' },
  'wireframe': { icon: FileText, label: 'Wireframes', color: 'text-green-500' },
  'usability-test': { icon: FlaskConical, label: 'Usability Testing', color: 'text-orange-500' },
  'flow-diagram': { icon: Workflow, label: 'Flow Diagrams', color: 'text-cyan-500' },
  'research-report': { icon: FileSearch, label: 'Research Report', color: 'text-pink-500' }
} as const;

const BentoGridCaseStudies = () => {
  const navigate = useNavigate();

  // Filter to prioritize military-related case studies
  const militaryFirst = [...caseStudiesData].sort((a, b) => {
    const aMilitary = a.title.includes('F117') || a.title.includes('DOD') || a.title.includes('Boeing');
    const bMilitary = b.title.includes('F117') || b.title.includes('DOD') || b.title.includes('Boeing');
    if (aMilitary && !bMilitary) return -1;
    if (!aMilitary && bMilitary) return 1;
    return 0;
  });

  const topFour = militaryFirst.slice(0, 4);

  const handleNavigate = (studyId: number) => {
    navigate('/case-studies', {
      state: { selectedStudyId: studyId }
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="container-custom">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(320px,auto)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Card 1 - Large Featured (2 cols x 2 rows) */}
        <FeaturedCard study={topFour[0]} onNavigate={handleNavigate} variants={cardVariants} />
        
        {/* Card 2 - Medium */}
        <MediumCard study={topFour[1]} onNavigate={handleNavigate} variants={cardVariants} />
        
        {/* Card 3 - Medium */}
        <MediumCard study={topFour[2]} onNavigate={handleNavigate} variants={cardVariants} />
        
        {/* Card 4 - Wide (2 cols x 1 row) */}
        <WideCard study={topFour[3]} onNavigate={handleNavigate} variants={cardVariants} />
      </motion.div>
    </div>
  );
};

// Featured Card Component (Large)
const FeaturedCard = ({ study, onNavigate, variants }: { 
  study: CaseStudy; 
  onNavigate: (id: number) => void;
  variants: any;
}) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <motion.div
      variants={variants}
      className="md:col-span-2 md:row-span-2"
    >
      <TiltCard className="h-full">
        <Card 
          className="h-full cursor-pointer group overflow-hidden relative border-2 border-primary/20 bg-gradient-to-br from-card/90 via-card/95 to-card backdrop-blur-xl hover:border-primary/40 transition-all duration-300"
          onClick={() => onNavigate(study.id)}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <CardContent className="p-8 relative z-10 flex flex-col h-full">
            <div className="flex items-start justify-between mb-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 font-semibold">
                Featured Case Study
              </Badge>
              <Badge variant="secondary" className="text-xs">
                {study.myRole.title}
              </Badge>
            </div>

            <h3 className="text-3xl font-bold mb-4 line-clamp-2 group-hover:text-primary transition-colors">
              {study.title}
            </h3>

            {/* Research Artifacts - Priority Display */}
            {study.artifacts && study.artifacts.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide flex items-center gap-2">
                  <FlaskConical className="h-3.5 w-3.5" />
                  Research Methods Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.artifacts.map((artifact, index) => {
                    const artifactInfo = artifactIconMap[artifact.type];
                    const Icon = artifactInfo?.icon || FileText;
                    return (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className={`text-xs bg-accent/10 border-accent/30 ${artifactInfo?.color || 'text-accent'} flex items-center gap-1.5`}
                      >
                        <Icon className="h-3 w-3" />
                        {artifactInfo?.label || artifact.type}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mb-6">
              {study.tools.slice(0, 6).map((tool, index) => (
                <Badge key={index} variant="secondary" className="text-xs opacity-70">
                  {tool}
                </Badge>
              ))}
            </div>

            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="font-semibold text-sm text-primary mb-2 uppercase tracking-wide">The Challenge</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {study.problem}
                </p>
              </div>

              {study.userVoice && (
                <div className="p-4 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                  <p className="text-sm italic text-foreground leading-relaxed">
                    "{study.userVoice}"
                  </p>
                  <span className="text-xs text-accent mt-2 block font-semibold">— User Interview Insight</span>
                </div>
              )}

              {study.metrics && study.metrics.length > 0 && (
                <div ref={ref} className="grid grid-cols-2 gap-3 mt-6">
                  {study.metrics.slice(0, 4).map((metric, index) => (
                    <AnimatedMetricCard 
                      key={index}
                      metric={metric} 
                      isInView={isInView}
                      index={index}
                    />
                  ))}
                </div>
              )}
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 group-hover:shadow-lg transition-all">
              View Full Case Study
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </TiltCard>
    </motion.div>
  );
};

// Medium Card Component
const MediumCard = ({ study, onNavigate, variants }: { 
  study: CaseStudy; 
  onNavigate: (id: number) => void;
  variants: any;
}) => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  // Get hero metric (first metric or create one from key outcome)
  const heroMetric = study.metrics && study.metrics.length > 0 
    ? study.metrics[0] 
    : { label: 'Impact', value: 'High' };

  const parseMetricValue = (value: string) => {
    const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { number: 0, suffix: value, prefix: '' };
    const [, prefix, numberStr, suffix] = match;
    return {
      number: parseFloat(numberStr),
      suffix: suffix.trim(),
      prefix: prefix.trim()
    };
  };

  const { number, suffix, prefix } = parseMetricValue(heroMetric.value);
  const animatedNumber = useCountUp({ 
    end: number, 
    duration: 1500, 
    isInView 
  });

  return (
    <motion.div variants={variants} className="md:col-span-1 md:row-span-1">
      <TiltCard className="h-full">
        <Card 
          className="h-full cursor-pointer group overflow-hidden relative border border-border/50 bg-card/80 backdrop-blur-md hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          onClick={() => onNavigate(study.id)}
        >
          <CardContent className="p-6 relative z-10 flex flex-col h-full">
            <Badge variant="outline" className="mb-3 w-fit text-xs">
              {study.myRole.title}
            </Badge>

            <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {study.title}
            </h3>

            {/* Research Methods (Priority) + Tools (Secondary) */}
            <div className="flex flex-wrap gap-2 mb-3">
              {study.artifacts && study.artifacts.slice(0, 2).map((artifact, index) => {
                const artifactInfo = artifactIconMap[artifact.type];
                const Icon = artifactInfo?.icon || FileText;
                return (
                  <Badge 
                    key={`artifact-${index}`}
                    variant="outline" 
                    className={`text-xs bg-accent/10 border-accent/30 ${artifactInfo?.color} flex items-center gap-1`}
                  >
                    <Icon className="h-3 w-3" />
                    {artifactInfo?.label}
                  </Badge>
                );
              })}
              {study.tools.slice(0, 2).map((tool, index) => (
                <Badge key={`tool-${index}`} variant="secondary" className="text-xs opacity-70">
                  {tool}
                </Badge>
              ))}
            </div>

            {/* Hero Metric */}
            <div ref={ref} className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 border border-primary/20">
              <div className="text-3xl font-bold text-primary">
                {prefix && <span>{prefix}</span>}
                {animatedNumber}
                {suffix && <span>{suffix}</span>}
              </div>
              <div className="text-xs text-muted-foreground mt-1 font-medium">
                {heroMetric.label}
              </div>
            </div>

            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-grow">
              {study.problem}
            </p>

            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button variant="outline" size="sm" className="w-full text-xs">
                View Details <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </TiltCard>
    </motion.div>
  );
};

// Wide Card Component (Horizontal)
const WideCard = ({ study, onNavigate, variants }: { 
  study: CaseStudy; 
  onNavigate: (id: number) => void;
  variants: any;
}) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <motion.div variants={variants} className="md:col-span-2 md:row-span-1">
      <TiltCard className="h-full">
        <Card 
          className="h-full cursor-pointer group overflow-hidden relative border border-border/50 bg-card/80 backdrop-blur-md hover:border-accent/30 hover:shadow-xl transition-all duration-300"
          onClick={() => onNavigate(study.id)}
        >
          <CardContent className="p-6 h-full flex flex-col md:flex-row gap-6">
            {/* Left side - Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="outline" className="text-xs">
                  {study.myRole.title}
                </Badge>
                {study.metrics && study.metrics.length > 0 && (
                  <Badge className="bg-success/20 text-success border-success/30 text-xs">
                    {study.metrics[0].value}
                  </Badge>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4 flex-grow">
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2 uppercase">Problem</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {truncateText(study.problem, 120)}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-primary mb-2 uppercase">Solution</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {truncateText(study.solution, 120)}
                  </p>
                </div>
              </div>

              {/* Research Methods (Priority) + Tools */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {study.artifacts?.slice(0, 2).map((artifact, index) => {
                  const artifactInfo = artifactIconMap[artifact.type];
                  const Icon = artifactInfo?.icon || FileText;
                  return (
                    <Badge 
                      key={`artifact-${index}`}
                      variant="outline" 
                      className={`text-xs bg-accent/10 border-accent/30 ${artifactInfo?.color} flex items-center gap-1`}
                    >
                      <Icon className="h-3 w-3" />
                      {artifactInfo?.label}
                    </Badge>
                  );
                })}
                {study.tools.slice(0, 3).map((tool, index) => (
                  <Badge key={`tool-${index}`} variant="secondary" className="text-xs opacity-70">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Right side - Key Outcome Callout */}
            {study.keyOutcomes.length > 0 && (
              <div className="md:w-48 flex-shrink-0 p-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg border border-accent/20 flex items-center">
                <div className="text-center w-full">
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2 font-semibold">
                    Key Impact
                  </div>
                  <p className="text-sm font-medium leading-tight">
                    {truncateText(study.keyOutcomes[0], 80)}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </TiltCard>
    </motion.div>
  );
};

// Animated Metric Card Component
const AnimatedMetricCard = ({ metric, isInView, index }: { 
  metric: { value: string; label: string }; 
  isInView: boolean;
  index: number;
}) => {
  const parseMetricValue = (value: string) => {
    const match = value.match(/^(.*?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { number: 0, suffix: value, prefix: '' };
    const [, prefix, numberStr, suffix] = match;
    return {
      number: parseFloat(numberStr),
      suffix: suffix.trim(),
      prefix: prefix.trim()
    };
  };

  const { number, suffix, prefix } = parseMetricValue(metric.value);
  const animatedNumber = useCountUp({ 
    end: number, 
    duration: 1500, 
    isInView 
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="text-center p-3 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg border border-primary/20"
    >
      <div className="text-2xl font-bold text-primary mb-1">
        {prefix && <span>{prefix}</span>}
        {animatedNumber}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-xs text-muted-foreground leading-tight">
        {metric.label}
      </div>
    </motion.div>
  );
};

export default BentoGridCaseStudies;
