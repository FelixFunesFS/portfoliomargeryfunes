import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { caseStudiesData } from '@/data/caseStudies';

const CaseStudyDossier = () => {
  const navigate = useNavigate();
  
  // Filter to show only research-focused case studies (1-5)
  const featuredStudies = caseStudiesData.filter(study => study.id >= 1 && study.id <= 5).slice(0, 6);

  return (
    <section
      id="case-studies"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="case-studies-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Case Study Dossiers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Documented research investigations demonstrating systematic methodology and measurable impact
          </p>
        </div>

        {/* Case Study Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredStudies.map((study) => (
            <article
              key={study.id}
              className="bg-background border-2 border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
            >
              {/* Artifact Image Header */}
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                {study.artifacts && study.artifacts.length > 0 && study.artifacts[0].image ? (
                  <img
                    src={study.artifacts[0].image}
                    alt={`Research artifacts for ${study.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="text-6xl text-muted-foreground/20" aria-hidden="true">
                    📊
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {study.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Challenge:</p>
                  <p className="text-sm text-foreground leading-relaxed line-clamp-3">
                    {study.userProblem || study.problem}
                  </p>
                </div>

                {/* Method */}
                {study.researchMethods && study.researchMethods.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Methods:</p>
                    <div className="flex flex-wrap gap-2">
                      {study.researchMethods.slice(0, 3).map((method, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {method}
                        </Badge>
                      ))}
                      {study.researchMethods.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{study.researchMethods.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                {/* Impact */}
                {study.metrics && study.metrics.length > 0 && (
                  <div className="mb-4 p-3 bg-primary/5 border border-primary/20 rounded-md">
                    <p className="text-sm font-semibold text-primary mb-1">Key Impact:</p>
                    <p className="text-sm text-foreground font-medium">
                      {study.metrics[0].value} {study.metrics[0].label}
                    </p>
                  </div>
                )}

                {/* User Quote (if available) */}
                {study.userVoice && (
                  <blockquote className="mb-4 border-l-2 border-primary pl-3 italic text-sm text-muted-foreground">
                    "{study.userVoice}"
                  </blockquote>
                )}

                {/* Read More Button */}
                <Button
                  variant="outline"
                  className="w-full group focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onClick={() => navigate('/case-studies', { state: { selectedStudyId: study.id } })}
                >
                  Read Full Study
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            onClick={() => navigate('/case-studies')}
            className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDossier;
