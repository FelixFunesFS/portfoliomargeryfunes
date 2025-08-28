import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
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
  icon: React.ComponentType<{ className?: string }>;
  tools: string[];
  artifacts: string[];
  reflection: string;
  color: string;
  caseStudyId: number;
}

interface ResearchStoriesCarouselProps {
  stories: ResearchStory[];
}

const ResearchStoriesCarousel: React.FC<ResearchStoriesCarouselProps> = ({ stories }) => {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }} 
          className="mb-12 relative overflow-hidden rounded-xl"
        >
          <div className="relative h-48 sm:h-64 lg:h-80">
            <img 
              src={stories[0]?.visual || ''} 
              alt="UX Research workspace with code and analysis" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent flex items-center">
              <div className="container-custom">
                <div className="max-w-lg">
                  <Badge variant="outline" className="mb-3 border-primary-glow text-primary-glow">
                    Research Process
                  </Badge>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    Where Analysis Meets <span className="text-primary-glow">Innovation</span>
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Every insight starts with systematic investigation and ends with meaningful user impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative lg:px-10 mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {stories.map((story, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="h-full px-2"
                  >
                    <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300 h-full flex flex-col overflow-hidden">
                      {/* Visual Preview */}
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img 
                          src={story.visual} 
                          alt={`${story.title} preview`} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                            {story.title}
                          </h3>
                          <p className="text-sm text-white/90 leading-tight">
                            {story.briefSummary}
                          </p>
                        </div>
                        <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${
                          story.color === 'systems' ? 'bg-systems-blue/20 backdrop-blur-sm' : 
                          story.color === 'agile' ? 'bg-agile-primary/20 backdrop-blur-sm' : 
                          story.color === 'success' ? 'bg-success/20 backdrop-blur-sm' : 
                          'bg-accent/20 backdrop-blur-sm'
                        }`}>
                          <story.icon className={`w-5 h-5 ${
                            story.color === 'systems' ? 'text-systems-blue' : 
                            story.color === 'agile' ? 'text-agile-primary' : 
                            story.color === 'success' ? 'text-success' : 
                            'text-accent'
                          }`} />
                        </div>
                      </div>

                      <CardContent className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
                        {/* User Problem */}
                        <div className="mb-3 sm:mb-4">
                          <Badge variant="outline" className="text-xs text-red-500 bg-red-50 border-red-200 mb-2">
                            USER PROBLEM
                          </Badge>
                          <p className="text-xs sm:text-sm text-foreground leading-tight mb-2 sm:mb-3">
                            {story.userProblem || story.challenge}
                          </p>
                        </div>

                        {/* User Voice Quote */}
                        {story.userVoice && (
                          <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-muted/50 rounded-lg border-l-4 border-primary-glow">
                            <Badge variant="outline" className="text-xs text-primary-glow mb-2">
                              USER VOICE
                            </Badge>
                            <p className="text-xs sm:text-sm text-muted-foreground italic leading-tight">
                              "{story.userVoice}"
                            </p>
                          </div>
                        )}

                        {/* Research Method */}
                        <div className="mb-3 sm:mb-4">
                          <Badge variant="outline" className="text-xs text-primary-glow mb-2">
                            RESEARCH METHOD
                          </Badge>
                          <p className="text-xs sm:text-sm text-muted-foreground leading-tight mb-2 sm:mb-3">
                            {story.researchMethod}
                          </p>
                        </div>

                        {/* Key Insight */}
                        <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-accent/10 rounded-lg">
                          <Badge variant="outline" className="text-xs text-accent mb-2">
                            KEY INSIGHT
                          </Badge>
                          <p className="text-xs sm:text-sm text-accent font-medium leading-tight">
                            "{story.keyInsight}"
                          </p>
                        </div>

                        {/* Solution & Impact */}
                        <div className="mb-4">
                          <Badge variant="outline" className="text-xs text-success mb-2">
                            SOLUTION & IMPACT
                          </Badge>
                          <p className="text-sm text-foreground leading-tight mb-2">
                            {story.solution}
                          </p>
                          <p className="text-sm text-muted-foreground leading-tight mb-3">
                            {story.userImpact}
                          </p>
                          {/* Business Impact */}
                          <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                            <Badge variant="outline" className="text-xs text-success mb-2 bg-success/10">
                              BUSINESS IMPACT
                            </Badge>
                            <p className="text-xs text-success font-medium">
                              {story.caseStudyId === 1 && "Enhanced mission readiness and reduced operational risk across global defense operations"}
                              {story.caseStudyId === 5 && "ROI of 5,200% through automation. Enabled strategic focus shift from manual tasks to analysis"}
                              {story.caseStudyId === 3 && "Leadership gained 12+ weeks annually for strategic planning instead of manual reporting"}
                              {story.caseStudyId === 4 && "Improved organizational scalability enabling rapid team expansion without communication breakdown"}
                            </p>
                          </div>
                        </div>

                        {/* Metric */}
                        <div className={`text-center p-3 rounded-lg mb-4 ${
                          story.color === 'systems' ? 'bg-systems-blue/10' : 
                          story.color === 'agile' ? 'bg-agile-primary/10' : 
                          story.color === 'success' ? 'bg-success/10' : 
                          'bg-accent/10'
                        }`}>
                          <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                            story.color === 'systems' ? 'text-systems-blue' : 
                            story.color === 'agile' ? 'text-agile-primary' : 
                            story.color === 'success' ? 'text-success' : 
                            'text-accent'
                          }`}>
                            {story.metric}
                          </div>
                        </div>

                        {/* Research Artifacts Preview */}
                        <ResearchArtifactPreview 
                          storyId={story.caseStudyId} 
                          artifacts={story.artifacts || []}
                          onViewArtifact={(artifact) => console.log('View artifact:', artifact)}
                        />

                        {/* Tools Used */}
                        <div className="mb-4">
                          <h4 className="text-xs font-semibold text-muted-foreground mb-2">TOOLS USED</h4>
                          <div className="flex flex-wrap gap-1">
                            {story.tools.map((tool, toolIndex) => (
                              <Badge key={toolIndex} variant="secondary" className="text-xs">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Stakeholder Testimonial */}
                        {story.stakeholderQuote && (
                          <div className="mb-4 p-3 bg-secondary/20 rounded-lg border-l-4 border-secondary">
                            <Badge variant="outline" className="text-xs text-secondary mb-2">
                              STAKEHOLDER FEEDBACK
                            </Badge>
                            <p className="text-xs text-secondary italic leading-tight">
                              "{story.stakeholderQuote}"
                            </p>
                          </div>
                        )}

                        {/* Reflection */}
                        <div className="border-t pt-3 mb-4">
                          <Badge variant="outline" className="text-xs text-copper mb-2">
                            WHAT I'D DO DIFFERENTLY
                          </Badge>
                          <p className="text-xs text-copper italic leading-tight">
                            {story.reflection}
                          </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-auto flex gap-2">
                          <Button 
                            onClick={() => navigate('/case-studies', {
                              state: { selectedStudyId: story.caseStudyId }
                            })} 
                            className={`flex-1 ${
                              story.color === 'systems' ? 'bg-systems-blue hover:bg-systems-blue/90' : 
                              story.color === 'agile' ? 'bg-agile-primary hover:bg-agile-primary/90' : 
                              story.color === 'success' ? 'bg-success hover:bg-success/90' : 
                              'bg-accent hover:bg-accent/90'
                            } text-white shadow-sm`} 
                            size="sm"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Full Case Study
                          </Button>
                          <PortfolioDownload variant="button" className="shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="lg:-left-5 left-2" />
            <CarouselNext className="lg:-right-5 right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ResearchStoriesCarousel;