import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { caseStudiesData } from '@/data/caseStudies';
const OptimizedCaseStudySummary = () => {
  const navigate = useNavigate();
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
    setActiveIndex(prev => (prev + 1) % militaryFirst.length);
  };
  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + militaryFirst.length) % militaryFirst.length);
  };
  const handleViewFullCaseStudy = () => {
    navigate('/case-studies', {
      state: {
        selectedStudyId: currentStudy.id
      }
    });
  };
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  // Filter out outcomes that are already represented in metrics to avoid redundancy
  const isNumericOutcome = (outcome: string): boolean => {
    const hasPercent = outcome.includes('%');
    const hasNumber = /\d+/.test(outcome);
    return (hasPercent || hasNumber) && currentStudy.metrics && currentStudy.metrics.length > 0;
  };
  return <div className="container-custom">
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Case Study Content */}
              <div className="p-6 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-2 line-clamp-2">
                      {currentStudy.title}
                    </h3>
                    <p className="text-muted-foreground text-base mb-4">
                      {currentStudy.myRole.title}
                    </p>
                  </div>
                  <Badge variant="outline" className="ml-4 flex-shrink-0 text-primary border-primary/30">
                    Case Study {activeIndex + 1}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {currentStudy.tools.slice(0, 4).map((tool, index) => <Badge key={index} variant="secondary" className="text-sm">
                      {tool}
                    </Badge>)}
                  {currentStudy.tools.length > 4 && <Badge variant="outline" className="text-sm">
                      +{currentStudy.tools.length - 4}
                    </Badge>}
                </div>

                <div className="space-y-3 mb-5">
                  <div>
                    <h4 className="font-semibold text-base text-primary mb-2">THE CHALLENGE</h4>
                    <p className="text-base text-muted-foreground mb-3">
                      {truncateText(currentStudy.problem, 150)}
                    </p>
                    
                    {/* User Voice Quote */}
                    {currentStudy.userVoice && <div className="mt-3 p-4 bg-accent/10 border-l-2 border-accent rounded-r">
                        <p className="text-sm italic text-muted-foreground">
                          "{currentStudy.userVoice}"
                        </p>
                        <span className="text-sm text-accent mt-1 block">— User Interview Insight</span>
                      </div>}
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-primary mb-2">THE SOLUTION & IMPACT</h4>
                    <p className="text-base text-muted-foreground mb-3">
                      {truncateText(currentStudy.solution, 150)}
                    </p>
                    
                    {/* Stakeholder Quote */}
                    {currentStudy.stakeholderQuote && <div className="mt-3 p-4 bg-success/10 border-l-2 border-success rounded-r">
                        <p className="text-sm italic text-muted-foreground">
                          "{currentStudy.stakeholderQuote}"
                        </p>
                      </div>}
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 flex items-center justify-center gap-2" onClick={handleViewFullCaseStudy}>
                  View Full Case Study
                  <ExternalLink size={16} />
                </Button>
              </div>

              {/* Impact & Outcomes - Consolidated */}
              <div className="space-y-6">
                <Card className="glass border-none">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-5 text-primary">IMPACT & OUTCOMES</h4>
                    
                    {/* Quantitative Metrics - Big Visual Cards */}
                    {currentStudy.metrics && currentStudy.metrics.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        {currentStudy.metrics.map((metric, index) => (
                          <div key={index} className="text-center p-4 bg-accent/20 rounded-lg">
                            <div className="text-3xl font-bold text-primary mb-1">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground leading-tight">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Subtle Divider (only if both sections exist) */}
                    {currentStudy.metrics && currentStudy.metrics.length > 0 && 
                     currentStudy.keyOutcomes.some(outcome => !isNumericOutcome(outcome)) && (
                      <div className="border-t border-border/30 mb-5" />
                    )}
                    
                    {/* Qualitative Outcomes - Bullet List */}
                    <div className="space-y-3">
                      {currentStudy.keyOutcomes
                        .filter(outcome => !isNumericOutcome(outcome))
                        .map((outcome, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
                            <span className="text-sm">{outcome}</span>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass border-none">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg mb-3 text-primary">UX IMPACT</h4>
                    <p className="text-base text-muted-foreground">
                      {currentStudy.uxImpact}
                    </p>
                  </CardContent>
                </Card>

                {/* Reflection & Growth */}
                {currentStudy.reflection && <Card className="glass border-none">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-4 text-amber-600 dark:text-amber-400 flex items-center gap-2">
                        <span>GROWTH & REFLECTION</span>
                      </h4>
                      
                      <div className="space-y-4">
                        {/* What Worked Well */}
                        <div>
                          <h5 className="text-sm font-semibold text-primary mb-3">What Worked Well</h5>
                          <ul className="space-y-2">
                            {currentStudy.reflection.whatWorkedWell.slice(0, 2).map((item, idx) => <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                                <span className="text-success flex-shrink-0">✓</span>
                                <span>{item}</span>
                              </li>)}
                          </ul>
                        </div>
                        
                        {/* Lessons Learned */}
                        <div>
                          <h5 className="text-sm font-semibold text-primary mb-3">Key Learning</h5>
                          <p className="text-sm text-muted-foreground italic">
                            {truncateText(currentStudy.reflection.lessonsLearned, 120)}
                          </p>
                        </div>
                        
                        {/* Would Do Differently */}
                        {currentStudy.reflection.wouldDoDifferently.length > 0 && <div>
                            <h5 className="text-sm font-semibold text-primary mb-3">Future Improvements</h5>
                            <p className="text-sm text-muted-foreground">
                              {truncateText(currentStudy.reflection.wouldDoDifferently[0], 100)}
                            </p>
                          </div>}
                      </div>
                    </CardContent>
                  </Card>}
              </div>
            </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <Button variant="outline" size="sm" onClick={handlePrev} className="flex items-center gap-2">
              <ChevronLeft size={16} />
              Previous
            </Button>

            <div className="flex gap-2">
              {militaryFirst.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary scale-125' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} aria-label={`Go to case study ${index + 1}`} />)}
            </div>

            <Button variant="outline" size="sm" onClick={handleNext} className="flex items-center gap-2">
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </div>;
};
export default OptimizedCaseStudySummary;