import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { caseStudiesData } from '@/data/caseStudies';

const OptimizedCaseStudySummary = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Filter to prioritize military-related case studies
  const militaryFirst = [...caseStudiesData].sort((a, b) => {
    const aMilitary = a.title.includes('F117') || a.title.includes('DOD') || a.title.includes('Boeing');
    const bMilitary = b.title.includes('F117') || b.title.includes('DOD') || b.title.includes('Boeing');
    if (aMilitary && !bMilitary) return -1;
    if (!aMilitary && bMilitary) return 1;
    return 0;
  });

  const currentStudy = militaryFirst[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % militaryFirst.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + militaryFirst.length) % militaryFirst.length);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <section id="case-studies" className="section bg-gradient-to-br from-muted/20 via-background to-accent/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Mission-Critical Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world solutions combining military precision with innovative design thinking
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Case Study Content */}
              <Card className="glass border-none">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                        {currentStudy.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {currentStudy.myRole.title}
                      </p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="ml-4 flex-shrink-0 text-primary border-primary/30"
                    >
                      Case Study {activeIndex + 1}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {currentStudy.tools.slice(0, 4).map((tool, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {currentStudy.tools.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{currentStudy.tools.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">THE CHALLENGE</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {truncateText(currentStudy.problem, 150)}
                      </p>
                      
                      {/* User Voice Quote */}
                      {currentStudy.userVoice && (
                        <div className="mt-3 p-3 bg-accent/10 border-l-2 border-accent rounded-r">
                          <p className="text-xs italic text-muted-foreground">
                            "{currentStudy.userVoice}"
                          </p>
                          <span className="text-xs text-accent mt-1 block">— User Interview Insight</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">THE SOLUTION & IMPACT</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {truncateText(currentStudy.solution, 150)}
                      </p>
                      
                      {/* Stakeholder Quote */}
                      {currentStudy.stakeholderQuote && (
                        <div className="mt-3 p-3 bg-success/10 border-l-2 border-success rounded-r">
                          <p className="text-xs italic text-muted-foreground">
                            "{currentStudy.stakeholderQuote}"
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="/case-studies" className="flex items-center justify-center gap-2">
                      View Full Case Study
                      <ExternalLink size={16} />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Impact Metrics */}
              <div className="space-y-6">
                <Card className="glass border-none">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-primary">KEY OUTCOMES</h4>
                    <div className="space-y-3">
                      {currentStudy.keyOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {currentStudy.metrics && (
                  <Card className="glass border-none">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4 text-primary">IMPACT METRICS</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {currentStudy.metrics.map((metric, index) => (
                          <div key={index} className="text-center p-4 bg-accent/20 rounded-lg">
                            <div className="text-2xl font-bold text-primary mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card className="glass border-none">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-2 text-primary">UX IMPACT</h4>
                    <p className="text-sm text-muted-foreground">
                      {currentStudy.uxImpact}
                    </p>
                  </CardContent>
                </Card>

                {/* Reflection & Growth */}
                {currentStudy.reflection && (
                  <Card className="glass border-none">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-4 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                        <span>GROWTH & REFLECTION</span>
                      </h4>
                      
                      <div className="space-y-4">
                        {/* What Worked Well */}
                        <div>
                          <h5 className="text-xs font-semibold text-primary mb-2">What Worked Well</h5>
                          <ul className="space-y-1">
                            {currentStudy.reflection.whatWorkedWell.slice(0, 2).map((item, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex gap-2">
                                <span className="text-success flex-shrink-0">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Lessons Learned */}
                        <div>
                          <h5 className="text-xs font-semibold text-primary mb-2">Key Learning</h5>
                          <p className="text-xs text-muted-foreground italic">
                            {truncateText(currentStudy.reflection.lessonsLearned, 120)}
                          </p>
                        </div>
                        
                        {/* Would Do Differently */}
                        {currentStudy.reflection.wouldDoDifferently.length > 0 && (
                          <div>
                            <h5 className="text-xs font-semibold text-primary mb-2">Future Improvements</h5>
                            <p className="text-xs text-muted-foreground">
                              {truncateText(currentStudy.reflection.wouldDoDifferently[0], 100)}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrev}
              className="flex items-center gap-2"
            >
              <ChevronLeft size={16} />
              Previous
            </Button>

            <div className="flex gap-2">
              {militaryFirst.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedCaseStudySummary;