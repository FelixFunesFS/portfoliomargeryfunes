import React from 'react';
import { Calendar, Users, FlaskConical } from 'lucide-react';

const ResearchQuestion = () => {
  return (
    <section
      id="research-question"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
      aria-labelledby="research-question-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Research Question */}
          <div className="lg:col-span-2">
            <h2
              id="research-question-heading"
              className="text-sm uppercase tracking-wider text-primary font-semibold mb-4"
            >
              The Research Question
            </h2>
            <div className="border-l-4 border-primary pl-6">
              <blockquote className="text-2xl sm:text-3xl text-foreground leading-relaxed font-light">
                How can a military analyst with systems thinking expertise transition into UX
                research while leveraging domain knowledge to solve complex human-centered
                problems?
              </blockquote>
            </div>
          </div>

          {/* Context Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-background border border-border rounded-lg p-6 space-y-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Study Context</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Study Duration</p>
                    <p className="text-sm text-muted-foreground">2018 - Present</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FlaskConical className="h-5 w-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Research Methods</p>
                    <p className="text-sm text-muted-foreground">
                      Self-ethnography, Portfolio analysis, User feedback
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sample Size</p>
                    <p className="text-sm text-muted-foreground">
                      10+ major projects, 500+ users impacted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchQuestion;
