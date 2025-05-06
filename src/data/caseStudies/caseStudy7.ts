
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy7: CaseStudy = {
  id: 7,
  title: "Improving Customer Communication for Catering Events",
  projectGoal: "Reduce miscommunication and lost revenue due to vague or incomplete event requests.",
  myRole: {
    title: "UX Researcher, Form Designer",
    responsibilities: [
      "Conducted empathy mapping and interviews",
      "Designed structured intake forms",
      "Built feedback loop for continuous improvement"
    ]
  },
  tools: ["Lovable.dev", "Supabase", "Figma", "Excel"],
  problem: "Inconsistent requests led to missing items, late deliveries, and misunderstandings on event day.",
  solution: "Created a comprehensive customer intake form to capture all event details upfront.",
  keyOutcomes: [
    "60–70% reduction in event-day miscommunication",
    "25% revenue savings from fewer mistakes",
    "30% improvement in customer satisfaction"
  ],
  assumptions: "Customers needed a simple, mobile-accessible solution",
  limitations: "Frequent menu/event changes required ongoing form updates",
  uxImpact: "Clearer expectations, fewer errors, and smoother event execution with continuous iteration.",
  metrics: [
    { label: "Miscommunication Reduction", value: "65%", percentage: 65 },
    { label: "Revenue Saved", value: "25%", percentage: 25 },
    { label: "Customer Satisfaction", value: "30% increase", percentage: 30 }
  ]
};
