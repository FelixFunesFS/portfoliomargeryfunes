
import { CaseStudy } from '@/types/caseStudy';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 1,
    title: "UX Optimization for Boeing F117 Engine Logistics Tracking System",
    projectGoal: "Modernize and automate the tracking process for F117 aircraft engines to improve visibility, reduce manual labor, and increase data accuracy.",
    myRole: {
      title: "Lead UX Researcher & Systems Analyst",
      responsibilities: [
        "Conducted user research and stakeholder interviews",
        "Built SharePoint CMS Lists, programmed SQL logic",
        "Developed Tableau dashboards"
      ]
    },
    tools: ["SharePoint", "SQL", "Tableau", "Excel"],
    problem: "Manual tracking systems were inefficient and outdated, causing delays and inconsistent reporting across global bases. Employees spent excessive time on redundant manual steps.",
    solution: "Designed a streamlined UX system combining SharePoint CMS and Tableau dashboards, connected to real-time SQL data.",
    keyOutcomes: [
      "45% faster reporting",
      "65% reduction in manual steps",
      "Real-time global engine visibility"
    ],
    assumptions: "Users required a familiar interface with minimal training.",
    limitations: "Constraints on third-party tools and integration due to DoD policies.",
    uxImpact: "Increased efficiency, improved accuracy, and enhanced global coordination.",
    metrics: [
      { label: "Reporting Speed", value: "45% faster", percentage: 45 },
      { label: "Manual Steps Reduction", value: "65%", percentage: 65 }
    ]
  },
  {
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
  },
  {
    id: 3,
    title: "Automating Weekly Engine Removal Slide Decks",
    projectGoal: "Reduce time and errors in generating weekly engine removal slide presentations for 23 global bases.",
    myRole: {
      title: "UX Designer, Developer, Automator",
      responsibilities: [
        "Conducted empathy interviews",
        "Prototyped a streamlined UI",
        "Built an app using C#, JavaScript, and VBA"
      ]
    },
    tools: ["C#", "JavaScript", "Excel VBA", "PowerPoint"],
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
  },
  {
    id: 4,
    title: "SharePoint Workspace System for 23 Bases",
    projectGoal: "Scale document access, task management, and visibility across 23 bases using SharePoint.",
    myRole: {
      title: "UX Architect, SharePoint Developer",
      responsibilities: [
        "Designed modular CMS-driven workspaces",
        "Created dashboards, role-based access controls",
        "Integrated tools for better workflow"
      ]
    },
    tools: ["SharePoint", "Power Automate", "Excel Services", "Power BI"],
    problem: "Fragmented documentation, miscommunication, and lack of task visibility caused inefficiencies as the team scaled.",
    solution: "Built synchronized SharePoint workspaces with CMS lists, role-filtered access, and real-time dashboards.",
    keyOutcomes: [
      "90% reduction in time spent finding documents",
      "70% faster onboarding",
      "Full organizational visibility from top to bottom"
    ],
    assumptions: "Needed simple UX for a diverse user base",
    limitations: "No third-party integrations; existing Microsoft ecosystem only",
    uxImpact: "Scalable system that improved productivity, transparency, and training.",
    metrics: [
      { label: "Document Finding", value: "90% faster", percentage: 90 },
      { label: "Onboarding Speed", value: "70% faster", percentage: 70 }
    ]
  },
  {
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
  },
  {
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
  },
  {
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
  }
];
