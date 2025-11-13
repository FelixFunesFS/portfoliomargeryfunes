
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
  ],
  reflection: {
    whatWorkedWell: [
      "Form-driven UI made complex data entry feel simple - eliminated 23 fields of manual work",
      "Template-based approach ensured brand consistency across all 23 bases automatically",
      "Built-in data validation prevented formatting errors before they reached PowerPoint"
    ],
    lessonsLearned: "The biggest time-saver wasn't the automation itself - it was eliminating decision fatigue. Users spent 40% of their time just deciding which template to use and where to put data.",
    wouldDoDifferently: [
      "Add a 'preview before generate' feature to catch mistakes earlier in the workflow",
      "Create preset configurations for common scenarios to reduce form fields by 60%",
      "Build version control into the tool - users often needed to regenerate previous weeks"
    ],
    potentialImpact: "Preview mode and presets could reduce the 5-minute process to under 2 minutes, saving an additional 90 hours/year across all analysts."
  }
};
