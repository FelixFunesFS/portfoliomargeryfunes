import React from 'react';
import { Search, Lightbulb, Palette, CheckCircle2, Code, RotateCw } from 'lucide-react';

const phases = [
  {
    id: 'discovery',
    name: 'Discovery',
    icon: Search,
    methods: [
      'Stakeholder interviews',
      'Contextual inquiry',
      'Competitive analysis',
      'User surveys'
    ],
    deliverable: 'Research Report',
    duration: '2-3 weeks'
  },
  {
    id: 'synthesis',
    name: 'Synthesis',
    icon: Lightbulb,
    methods: [
      'Affinity mapping',
      'Persona development',
      'Journey mapping',
      'Problem framing'
    ],
    deliverable: 'User Personas & Journey Maps',
    duration: '1-2 weeks'
  },
  {
    id: 'design',
    name: 'Design',
    icon: Palette,
    methods: [
      'Wireframing',
      'Prototyping',
      'Design systems',
      'Interaction design'
    ],
    deliverable: 'High-Fidelity Prototypes',
    duration: '3-4 weeks'
  },
  {
    id: 'validation',
    name: 'Validation',
    icon: CheckCircle2,
    methods: [
      'Usability testing',
      'A/B testing',
      'Accessibility audits',
      'Expert reviews'
    ],
    deliverable: 'Validation Report',
    duration: '1-2 weeks'
  },
  {
    id: 'implementation',
    name: 'Implementation',
    icon: Code,
    methods: [
      'Frontend development',
      'Design QA',
      'Component libraries',
      'Documentation'
    ],
    deliverable: 'Production-Ready Code',
    duration: '4-6 weeks'
  },
  {
    id: 'iteration',
    name: 'Iteration',
    icon: RotateCw,
    methods: [
      'Analytics review',
      'User feedback',
      'Performance monitoring',
      'Continuous improvement'
    ],
    deliverable: 'Optimization Plan',
    duration: 'Ongoing'
  }
];

const MethodologyMap = () => {
  return (
    <section
      id="methodology"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      aria-labelledby="methodology-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 id="methodology-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Methodology Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to user-centered design, from discovery to continuous improvement
          </p>
        </div>

        {/* Timeline Visualization */}
        <div className="relative">
          {/* Horizontal line connecting phases (desktop only) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" aria-hidden="true" />

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              return (
                <article
                  key={phase.id}
                  className="bg-background border-2 border-border rounded-lg p-6 hover:border-primary transition-colors relative focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
                  tabIndex={0}
                  aria-labelledby={`phase-${phase.id}-name`}
                >
                  {/* Phase Number */}
                  <div className="absolute -top-4 left-6 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 mt-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Phase Name */}
                  <h3 id={`phase-${phase.id}-name`} className="text-xl font-bold text-foreground mb-4">
                    {phase.name}
                  </h3>

                  {/* Methods */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Key Methods:</p>
                    <ul className="space-y-1 text-sm text-foreground" role="list">
                      {phase.methods.map((method, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1" aria-hidden="true">•</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverable */}
                  <div className="mb-2">
                    <p className="text-sm font-medium text-muted-foreground">Deliverable:</p>
                    <p className="text-sm text-foreground font-medium">{phase.deliverable}</p>
                  </div>

                  {/* Duration */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Duration:</p>
                    <p className="text-sm text-foreground">{phase.duration}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyMap;
