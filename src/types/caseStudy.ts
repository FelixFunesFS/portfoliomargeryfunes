
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
  researchScale?: {
    interviews?: number;
    testSessions?: number;
    participants?: number;
    artifacts?: number;
  };
  researchMethods?: string[];

  // Enhanced fields for comprehensive case studies
  personas?: {
    id: string;
    name: string;
    role: string;
    context: string;
    image?: string;
    accentColor?: 'blue' | 'green' | 'purple' | 'amber' | 'teal';
    goals: string[];
    painPoints: string[];
    keyTasks: string[];
    quote: string;
  }[];

  userFlows?: {
    id: string;
    name: string;
    userType: 'customer' | 'admin' | 'staff';
    description: string;
    steps: {
      step: number;
      name: string;
      description: string;
      fields?: string[];
    }[];
    entryPoints?: string[];
    exitStates?: string[];
  }[];

  systemTouchpoints?: {
    touchpoint: string;
    userType: string;
    purpose: string;
    channel: 'web' | 'email' | 'mobile' | 'pdf';
  }[];

  automatedWorkflows?: {
    trigger: string;
    emailType: string;
    recipient: string;
    timing: string;
  }[];

  architecture?: {
    diagramType: 'journey' | 'flow' | 'sequence' | 'er' | 'system';
    title: string;
    description: string;
    mermaidCode: string;
  }[];

  videos?: {
    title: string;
    description: string;
    url: string;
    thumbnail?: string;
    duration: string;
    type: 'demo' | 'walkthrough' | 'tutorial';
  }[];

  liveDemo?: {
    url: string;
    label: string;
  };
}
