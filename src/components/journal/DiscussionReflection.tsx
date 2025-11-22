import React from 'react';
import { CheckCircle2, Lightbulb, TrendingUp } from 'lucide-react';

const DiscussionReflection = () => {
  return (
    <section
      id="discussion"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      aria-labelledby="discussion-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 id="discussion-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Discussion & Reflection
          </h2>
          <div className="h-1 w-24 bg-primary" aria-hidden="true" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What Worked Well */}
          <div className="bg-muted/30 border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">What Worked Well</h3>
            </div>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Systems thinking foundation</strong> from military analysis translated
                  seamlessly into understanding complex user ecosystems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Data-driven approach</strong> to research gave credibility with
                  stakeholders and enabled measurable impact metrics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Technical implementation skills</strong> allowed for rapid prototyping
                  and validation without handoff delays
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Agile methodology adoption</strong> enabled iterative improvement and
                  continuous user feedback integration
                </span>
              </li>
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="bg-muted/30 border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Lessons Learned</h3>
            </div>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>User empathy requires practice</strong> - transitioning from systems to
                  humans meant learning to prioritize emotional needs alongside functional ones
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Qualitative data is equally valuable</strong> - early focus on metrics
                  sometimes overshadowed rich user stories and contextual insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Accessibility cannot be an afterthought</strong> - WCAG compliance and
                  inclusive design must be integrated from discovery phase
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span className="text-foreground leading-relaxed">
                  <strong>Collaboration skills are critical</strong> - technical expertise alone
                  isn't enough; effective facilitation and communication drive project success
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Future Research Directions */}
        <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Future Research Directions</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-base font-semibold text-foreground mb-3">
                AI-Augmented Research Methods
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Exploring how AI tools can accelerate synthesis and pattern recognition in
                qualitative research while maintaining rigor and human insight
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-foreground mb-3">
                Accessibility-First Design Systems
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developing component libraries and design patterns that make WCAG AAA compliance
                the default, not an enhancement
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-foreground mb-3">
                Cross-Cultural UX Research
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Investigating methodological adaptations needed for effective research across
                diverse cultural contexts and user populations
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-foreground mb-3">
                Metrics for Design Impact
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developing frameworks to quantify and communicate UX research ROI to business
                stakeholders in measurable terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussionReflection;
