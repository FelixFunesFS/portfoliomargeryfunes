
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
  ],
  reflection: {
    whatWorkedWell: [
      "Mobile-first design meant owners could respond to quotes on-the-go during busy events",
      "Low-code approach allowed rapid iteration based on daily user feedback",
      "Dashboard visibility reduced miscommunication between kitchen and event coordination teams"
    ],
    lessonsLearned: "Speed to market beats perfection in early-stage businesses. Launching with 70% of planned features and iterating weekly was more valuable than waiting 3 months for 100%.",
    wouldDoDifferently: [
      "Add automated email notifications for new event requests instead of manual checking",
      "Integrate calendar sync to prevent double-booking conflicts (happened 3x in first month)",
      "Build customer-facing status updates so clients can track quote/event progress"
    ],
    potentialImpact: "Email automation and calendar integration could eliminate the remaining 4 hours of manual checking and prevent ~$5K in lost revenue from scheduling conflicts annually."
  }
};
