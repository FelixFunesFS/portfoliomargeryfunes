
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy3: CaseStudy = {
  id: 3,
  title: "Automating Weekly Engine Removal Slide Decks",
  projectGoal: "Reduce time and errors in generating weekly engine removal slide presentations for 23 global bases.",
  myRole: {
    title: "UX Designer, Developer, Automator",
    responsibilities: [
      "Conducted empathy interviews",
      "Prototyped a streamlined UI",
      "Built an app using C#, JavaScript, and VBA",
      "Developed with Visual Studio for IDE and debugging"
    ]
  },
  tools: ["C#", "JavaScript", "Excel VBA", "PowerPoint", "Visual Studio"],
  problem: "Slide decks took ~25 minutes each to update manually (totaling ~9.6 hours/week). Manual entry often caused errors and delays.",
  solution: "Created a form-driven app to auto-generate PowerPoint slides with real-time event data.",
  keyOutcomes: [
    "Reduced 9.6 hours/week to 5 minutes",
    "98% faster process",
    "Over 12 weeks/year of time saved for analysts"
  ],
  assumptions: "Users needed consistent formatting and fast access.",
  limitations: "Tools needed to run on secure DoD systems with no cloud access.",
  uxImpact: "Massive time savings, reduced frustration, and consistent slide quality.",
  metrics: [
    { label: "Time Reduction", value: "98% faster", percentage: 98 }
  ]
};
