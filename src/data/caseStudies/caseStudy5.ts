
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy5: CaseStudy = {
  id: 5,
  title: "Data Entry Automation for DOD/Boeing GUI Systems",
  projectGoal: "Automate repetitive, error-prone data entry into legacy GUI systems.",
  myRole: {
    title: "UX Designer, VBA Developer, Automation Engineer",
    responsibilities: [
      "Designed user-friendly Excel input form",
      "Built a VBA tool that automated data entry",
      "Connected SQL data to pre-fill entries"
    ]
  },
  tools: ["VBA", "SQL", "HTML Parsing", "Excel"],
  problem: "Users had to manually enter identical data across 50+ screens daily (~2.5 hours/day), leading to frequent errors.",
  solution: "Built a VBA tool that populated GUI screens in under 30 seconds using SQL data and HTML mapping.",
  keyOutcomes: [
    "80% time reduction",
    "~2 hours/day saved per user",
    "90% reduction in errors",
    "26,000 hours saved annually across 50 users"
  ],
  assumptions: "Must work offline with no APIs available",
  limitations: "Legacy system constraints, limited access to source code",
  uxImpact: "Eliminated fatigue, reduced errors, and boosted productivity significantly.",
  metrics: [
    { label: "Time Saved", value: "80%", percentage: 80 },
    { label: "Error Reduction", value: "90%", percentage: 90 }
  ]
};
