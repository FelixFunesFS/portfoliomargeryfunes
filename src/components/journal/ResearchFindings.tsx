import React from 'react';
import { Progress } from '@/components/ui/progress';

const competencies = [
  {
    name: 'User Research & Testing',
    proficiency: 94,
    evidence: '50+ interviews | 200+ usability sessions',
    category: 'Research'
  },
  {
    name: 'Systems Analysis',
    proficiency: 98,
    evidence: '10+ enterprise systems | 10,000+ users impacted',
    category: 'Analysis'
  },
  {
    name: 'Journey Mapping & Personas',
    proficiency: 92,
    evidence: '25+ journey maps | 15+ persona sets created',
    category: 'Research'
  },
  {
    name: 'Wireframing & Prototyping',
    proficiency: 88,
    evidence: 'Figma, Adobe XD, Sketch | 30+ projects',
    category: 'Design'
  },
  {
    name: 'Frontend Development',
    proficiency: 85,
    evidence: 'React, TypeScript, Tailwind CSS',
    category: 'Development'
  },
  {
    name: 'Accessibility (WCAG)',
    proficiency: 90,
    evidence: 'AA/AAA compliance | Screen reader testing',
    category: 'Design'
  },
  {
    name: 'Data Analysis & Metrics',
    proficiency: 96,
    evidence: 'SQL, Excel, Analytics platforms',
    category: 'Analysis'
  },
  {
    name: 'Agile & Scrum Methodology',
    proficiency: 93,
    evidence: 'Certified Scrum Master | 20+ sprints led',
    category: 'Process'
  }
];

const ResearchFindings = () => {
  return (
    <section
      id="findings"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      aria-labelledby="findings-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 id="findings-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Key Findings: Core Competencies
          </h2>
          <div className="h-1 w-24 bg-primary" aria-hidden="true" />
        </div>

        {/* Competencies List */}
        <div className="space-y-8">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="border-b border-border pb-6 last:border-b-0"
            >
              {/* Competency Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {competency.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {competency.evidence}
                  </p>
                </div>
                <div className="flex items-center gap-3 sm:flex-shrink-0">
                  <span className="text-sm font-medium text-primary">
                    {competency.proficiency}% Proficiency
                  </span>
                  <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    {competency.category}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <Progress
                value={competency.proficiency}
                className="h-3"
                aria-label={`${competency.name} proficiency: ${competency.proficiency}%`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={competency.proficiency}
              />
            </div>
          ))}
        </div>

        {/* Summary Note */}
        <div className="mt-12 p-6 bg-muted/30 border border-border rounded-lg">
          <p className="text-sm text-muted-foreground italic">
            <strong className="text-foreground">Note:</strong> Proficiency ratings are based on
            self-assessment validated through project outcomes, user feedback, and peer reviews.
            Evidence citations reference documented work products and deliverables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchFindings;
