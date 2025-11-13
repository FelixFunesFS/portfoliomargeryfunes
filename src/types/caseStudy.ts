
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
}
