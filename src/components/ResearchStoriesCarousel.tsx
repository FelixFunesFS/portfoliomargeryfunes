import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, Lightbulb, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ResearchArtifactPreview from '@/components/ResearchArtifactPreview';
import PortfolioDownload from '@/components/PortfolioDownload';
interface ResearchStory {
  title: string;
  briefSummary: string;
  visual: string;
  userProblem: string;
  userVoice: string;
  stakeholderQuote: string;
  challenge: string;
  researchMethod: string;
  keyInsight: string;
  solution: string;
  userImpact: string;
  metric: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  tools: string[];
  artifacts: string[];
  reflection: {
    whatWorkedWell: string[];
    lessonsLearned: string;
    wouldDoDifferently: string[];
    potentialImpact: string;
  };
  color: string;
  caseStudyId: number;
}
interface ResearchStoriesCarouselProps {
  stories: ResearchStory[];
}
const ResearchStoriesCarousel: React.FC<ResearchStoriesCarouselProps> = ({
  stories
}) => {
  const navigate = useNavigate();
  const getMetricPercentage = (metric: string): number => {
    const numMatch = metric.match(/(\d+)%/);
    return numMatch ? parseInt(numMatch[1]) : 75;
  };
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'systems':
        return {
          bg: 'bg-systems-blue',
          text: 'text-systems-blue',
          bgLight: 'bg-systems-blue/10',
          border: 'border-systems-blue/20'
        };
      case 'agile':
        return {
          bg: 'bg-agile-primary',
          text: 'text-agile-primary',
          bgLight: 'bg-agile-primary/10',
          border: 'border-agile-primary/20'
        };
      case 'success':
        return {
          bg: 'bg-success',
          text: 'text-success',
          bgLight: 'bg-success/10',
          border: 'border-success/20'
        };
      default:
        return {
          bg: 'bg-accent',
          text: 'text-accent',
          bgLight: 'bg-accent/10',
          border: 'border-accent/20'
        };
    }
  };
  return <div className="py-0">
      <div className="max-w-[95vw] mx-auto">
        {/* Header */}
        

        {/* Dashboard Carousel */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {stories.map((story, index) => {
              const colors = getColorClasses(story.color);
              const metricPercentage = getMetricPercentage(story.metric);
              return <CarouselItem key={index} className="basis-full">
                    <motion.div initial={{
                  opacity: 0,
                  scale: 0.95
                }} whileInView={{
                  opacity: 1,
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  delay: index * 0.1,
                  duration: 0.6
                }} className="px-2 lg:px-4">
                      <Card className="overflow-hidden border-none bg-card/50 backdrop-blur-sm shadow-xl">
                        {/* Hero Metric Section */}
                        <div className={`relative ${colors.bgLight} ${colors.border} border-b`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-background/30 to-transparent" />
                          <div className="relative p-8 lg:p-12">
                            <div className="grid lg:grid-cols-3 gap-8 items-center">
                              {/* Metric Display */}
                              <div className="text-center lg:text-left">
                                <div className="flex items-center justify-center lg:justify-start mb-4">
                                  <div className={`p-3 rounded-full ${colors.bgLight} mr-4`}>
                                    <story.icon className={`w-8 h-8 ${colors.text}`} />
                                  </div>
                                  <Badge variant="outline" className={`${colors.text} bg-background/80`}>
                                    {story.color.toUpperCase()}
                                  </Badge>
                                </div>
                                <div className={`text-5xl lg:text-6xl font-bold ${colors.text} mb-2`}>
                                  {story.metric}
                                </div>
                                <p className="text-sm text-muted-foreground uppercase tracking-wide font-medium">
                                  Impact Achieved
                                </p>
                                {/* Progress Bar */}
                                <div className="mt-4 w-full bg-muted/30 rounded-full h-2">
                                  <motion.div className={`h-2 rounded-full ${colors.bg}`} initial={{
                                width: 0
                              }} whileInView={{
                                width: `${metricPercentage}%`
                              }} transition={{
                                duration: 1.5,
                                delay: 0.5
                              }} />
                                </div>
                              </div>

                              {/* Title & Summary */}
                              <div className="lg:col-span-2">
                                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 leading-tight">
                                  {story.title}
                                </h3>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                  {story.briefSummary}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {story.tools.slice(0, 4).map((tool, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                                      {tool}
                                    </Badge>)}
                                  {story.tools.length > 4 && <Badge variant="outline" className="text-xs">
                                      +{story.tools.length - 4} more
                                    </Badge>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <CardContent className="p-6 lg:p-8">
                          {/* Problem vs Solution Grid */}
                          <div className="grid lg:grid-cols-2 gap-6 mb-8">
                            {/* Problem */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                <h4 className="font-semibold text-foreground uppercase tracking-wide text-sm">
                                  Challenge
                                </h4>
                              </div>
                              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/30 rounded-lg p-6">
                                <p className="text-foreground leading-relaxed">
                                  {story.userProblem || story.challenge}
                                </p>
                                {story.userVoice && <div className="mt-4 pt-4 border-t border-red-200 dark:border-red-800/30">
                                    <p className="text-sm italic text-red-700 dark:text-red-300">
                                      "{story.userVoice}"
                                    </p>
                                  </div>}
                              </div>
                            </div>

                            {/* Solution */}
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-success" />
                                <h4 className="font-semibold text-foreground uppercase tracking-wide text-sm">
                                  Solution & Impact
                                </h4>
                              </div>
                              <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                                <p className="text-foreground leading-relaxed mb-4">
                                  {story.solution}
                                </p>
                                <div className="pt-4 border-t border-success/20">
                                  <p className="text-sm text-success font-medium">
                                    {story.userImpact}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Key Insight Callout */}
                          <div className={`${colors.bgLight} ${colors.border} border rounded-xl p-6 mb-6`}>
                            <div className="flex items-start gap-4">
                              <div className={`p-2 rounded-lg ${colors.bg}/20`}>
                                <div className={`w-2 h-2 rounded-full ${colors.bg}`} />
                              </div>
                              <div>
                                <h4 className={`font-semibold ${colors.text} mb-2 uppercase tracking-wide text-sm`}>
                                  Key Insight
                                </h4>
                                <p className="text-foreground font-medium text-lg leading-relaxed">
                                  {story.keyInsight}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* What I Learned - Growth Mindset Section */}
                          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 rounded-xl p-6 mb-6">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="p-2 rounded-lg bg-amber-500/20">
                                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3 uppercase tracking-wide text-sm">
                                  What I Learned
                                </h4>
                                <p className="text-foreground font-medium leading-relaxed mb-4 italic">
                                  {story.reflection.lessonsLearned}
                                </p>
                                
                                {/* What I'd Do Differently */}
                                {story.reflection.wouldDoDifferently && story.reflection.wouldDoDifferently.length > 0 && (
                                  <div className="space-y-2">
                                    <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                                      What I'd Do Differently:
                                    </p>
                                    <ul className="space-y-2">
                                      {story.reflection.wouldDoDifferently.slice(0, 2).map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                          <ArrowRight className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Research Method & Business Impact */}
                          <div className="grid lg:grid-cols-2 gap-6 mb-6">
                            <div className="bg-muted/30 rounded-lg p-6">
                              <h4 className="font-semibold text-foreground mb-3 uppercase tracking-wide text-sm">
                                Research Method
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {story.researchMethod}
                              </p>
                            </div>
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                              <h4 className="font-semibold text-primary mb-3 uppercase tracking-wide text-sm">
                                Business Impact
                              </h4>
                              <p className="text-primary font-medium leading-relaxed">
                                {story.caseStudyId === 1 && "Enhanced mission readiness and reduced operational risk across global defense operations"}
                                {story.caseStudyId === 5 && "ROI of 5,200% through automation. Enabled strategic focus shift from manual tasks to analysis"}
                                {story.caseStudyId === 3 && "Leadership gained 12+ weeks annually for strategic planning instead of manual reporting"}
                                {story.caseStudyId === 4 && "Improved organizational scalability enabling rapid team expansion without communication breakdown"}
                              </p>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                            <Button onClick={() => navigate('/case-studies', {
                          state: {
                            selectedStudyId: story.caseStudyId
                          }
                        })} className={`${colors.bg} hover:opacity-90 text-white flex-1 h-12`} size="lg">
                              <Eye className="w-5 h-5 mr-2" />
                              View Full Case Study
                            </Button>
                            <PortfolioDownload variant="button" className="sm:w-auto w-full h-12 bg-muted hover:bg-muted/80 text-foreground" />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>;
            })}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:-left-16 w-12 h-12 bg-background/80 backdrop-blur-sm border-2" />
            <CarouselNext className="right-2 lg:-right-16 w-12 h-12 bg-background/80 backdrop-blur-sm border-2" />
          </Carousel>
        </div>
      </div>
    </div>;
};
export default ResearchStoriesCarousel;