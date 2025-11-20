
export interface CaseStudy {
  id: number;
  title: string;
  projectGoal: string;
  myRole: {
    title: string;
    responsibilities: string[];
  };
  tools: string[];
  problem: string;
  solution: string;
  keyOutcomes: string[];
  assumptions: string;
  limitations: string;
  uxImpact: string;
  metrics?: {
    label: string;
    value: string;
    percentage: number;
  }[];
  reflection: {
    whatWorkedWell: string[];
    lessonsLearned: string;
    wouldDoDifferently: string[];
    potentialImpact: string;
  };
  userVoice?: string;
  stakeholderQuote?: string;
  userProblem?: string;
  artifacts?: {
    type: 'journey-map' | 'persona' | 'wireframe' | 'prototype' | 'usability-test' | 'flow-diagram' | 'research-report' | 'analytics';
    title: string;
    description: string;
    image?: string;
    date?: string;
  }[];
  researchProcess?: {
    phase: string;
    activities: string[];
    deliverables: string[];
    duration: string;
  }[];
}
