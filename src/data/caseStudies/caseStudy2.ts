
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy2: CaseStudy = {
  id: 2,
  title: "OQAR Data Extraction Automation",
  projectGoal: "Automate engine cycle data processing from Optical Quick Access Recorder (OQAR) files across 1200+ engines.",
  myRole: {
    title: "Full-Stack Developer, UX Designer, Debugging Lead",
    responsibilities: [
      "Built automation tools using JavaScript and VBA",
      "Redesigned workflows and validated user needs",
      "Handled all debugging, testing, and error resolution"
    ]
  },
  tools: ["JavaScript", "Excel VBA", "Access", "SharePoint"],
  problem: "Manual data entry led to inaccuracies and delays in engine cycle tracking, affecting leasing agreements and engine longevity.",
  solution: "Created a parsing and processing tool that extracted OQAR data, auto-calculated cycles, and populated tracking systems.",
  keyOutcomes: [
    "62% faster processing",
    "25% accuracy improvement",
    "80% reduction in manual entries",
    "$2M saved over 5 years"
  ],
  assumptions: "Needed to work offline with existing legacy systems.",
  limitations: "Could not integrate third-party tools due to security constraints.",
  uxImpact: "Improved trust in data, reduced rework, and empowered users with automation.",
  metrics: [
    { label: "Processing Speed", value: "62% faster", percentage: 62 },
    { label: "Accuracy Improvement", value: "25%", percentage: 25 },
    { label: "Manual Entry Reduction", value: "80%", percentage: 80 }
  ]
};
