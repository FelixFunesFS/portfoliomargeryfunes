
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy6: CaseStudy = {
  id: 6,
  title: "Event Management App for Soul Train's Eatery",
  projectGoal: "Centralize event management for a growing catering business using a low-code solution.",
  myRole: {
    title: "UX Designer, Low-Code Developer",
    responsibilities: [
      "Conducted interviews and empathy mapping",
      "Designed user flows and forms",
      "Built front-end in Lovable.dev with Supabase backend"
    ]
  },
  tools: ["Lovable.dev", "Supabase", "Figma", "Notion"],
  problem: "Event requests were tracked manually, causing delays, missed leads, and confusion among staff.",
  solution: "Developed an app with intake forms, dashboards, and event tracking to streamline operations.",
  keyOutcomes: [
    "Quote response time reduced from 24–48 hours to under 4 hours",
    "Fewer dropped leads",
    "More organized event prep"
  ],
  assumptions: "App needed to work on mobile with low technical overhead",
  limitations: "No budget for a fully custom system; needed fast turnaround",
  uxImpact: "Improved customer satisfaction, faster response times, better internal coordination.",
  metrics: [
    { label: "Response Time", value: "83% faster", percentage: 83 }
  ]
};
