
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
  researchMethods: [
    'User Interviews',
    'Empathy Mapping',
    'Journey Mapping',
    'User Flow Design',
    'Iterative Testing'
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
  },
  artifacts: [
    {
      type: 'journey-map',
      title: 'Event Request to Execution Flow - Current State',
      description: 'Mapped the complete catering event lifecycle from initial inquiry through post-event follow-up, identifying 6 major bottlenecks',
      image: '/assets/case-study-5-automation.jpg',
      date: 'Week 1'
    },
    {
      type: 'persona',
      title: 'Restaurant Owner During Catering Events',
      description: 'Empathy map capturing pain points of managing quotes while running active catering events',
      image: '/assets/research-desk.jpg',
      date: 'Week 1'
    },
    {
      type: 'wireframe',
      title: 'Mobile-First Event Intake Form Designs',
      description: 'Low-fidelity wireframes optimized for mobile use during busy events, validated with owners',
      image: '/assets/coding-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'prototype',
      title: 'Interactive Dashboard Prototype (Lovable.dev)',
      description: 'Functional prototype built with Supabase backend, allowing real-time event tracking and quote management',
      image: '/assets/case-study-4-workspace.jpg',
      date: 'Week 3'
    },
    {
      type: 'analytics',
      title: 'Response Time Metrics - Before/After',
      description: 'Data showing 83% reduction in quote response time, from 24-48 hours down to under 4 hours',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Month 3'
    }
  ],
  researchProcess: [
    {
      phase: 'Discovery',
      activities: [
        'Conducted interviews with restaurant owners',
        'Created empathy maps of pain points during events',
        'Shadowed event coordination process',
        'Identified mobile-first requirement'
      ],
      deliverables: ['Empathy maps', 'Journey maps', 'Requirements document'],
      duration: '1 week'
    },
    {
      phase: 'Design',
      activities: [
        'Sketched mobile-first intake forms',
        'Designed dashboard layouts',
        'Planned Supabase data structure',
        'Created user flows'
      ],
      deliverables: ['Wireframes', 'User flows', 'Database schema'],
      duration: '1 week'
    },
    {
      phase: 'Development',
      activities: [
        'Built front-end in Lovable.dev',
        'Configured Supabase backend',
        'Implemented event tracking features',
        'Daily iteration with user feedback'
      ],
      deliverables: ['Working MVP', 'Supabase backend', 'Mobile-responsive UI'],
      duration: '2 weeks'
    },
    {
      phase: 'Launch & Iteration',
      activities: [
        'Deployed with 70% of planned features',
        'Weekly feedback sessions',
        'Iterative feature additions',
        'Measured response time improvements'
      ],
      deliverables: ['Production app', 'Analytics dashboard', 'Iteration roadmap'],
      duration: 'Ongoing'
    }
  ]
};
