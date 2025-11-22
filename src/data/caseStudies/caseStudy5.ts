
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
  ],
  reflection: {
    whatWorkedWell: [
      "HTML parsing approach was resilient - worked across multiple GUI system updates without breaking",
      "SQL data integration eliminated 90% of manual typing by pre-filling common entries",
      "Simple Excel interface meant zero learning curve for 50+ non-technical users"
    ],
    lessonsLearned: "Understanding the psychology of repetitive work was critical. Users weren't just making mistakes - they were developing unhealthy coping mechanisms (copying data to sticky notes) that introduced more errors.",
    wouldDoDifferently: [
      "Add batch processing for multiple records simultaneously - some users handled 10+ entries/day",
      "Build error recovery features for network interruptions during GUI interaction",
      "Create audit logs to track which entries were automated vs manual for quality control"
    ],
    potentialImpact: "Batch processing could save an additional 30 minutes/day per heavy user (~130 hours/year) and audit logs would provide compliance documentation worth ~$50K in audit costs."
  },
  userVoice: "By hour two of data entry, my brain feels like mush. I know I'm making mistakes, but the system requires perfect accuracy for flight safety.",
  stakeholderQuote: "The ROI was immediate. Our analysts went from data entry zombies to strategic thinkers overnight. - Engineering Manager, Boeing",
  userProblem: "Data entry specialists faced exhaustion from repetitive 2.5-hour daily tasks leading to frequent errors",
  artifacts: [
    {
      type: 'persona',
      title: 'Data Entry Specialist - High-Volume User',
      description: 'Primary user persona representing 50+ analysts performing 2.5 hours of manual data entry daily',
      date: 'Week 1'
    },
    {
      type: 'journey-map',
      title: 'Data Entry Workflow - Pain Point Analysis',
      description: 'Mapped existing manual process across 50+ screens, identifying fatigue points and error patterns',
      date: 'Week 1-2'
    },
    {
      type: 'usability-test',
      title: 'Excel Input Form - Task Completion Testing',
      description: 'Tested form interface with 12 users to validate zero-learning-curve design',
      date: 'Week 3'
    },
    {
      type: 'flow-diagram',
      title: 'VBA Automation Logic - HTML Parsing Workflow',
      description: 'Technical flow showing SQL → VBA → HTML mapping → GUI interaction',
      date: 'Week 3'
    }
  ]
};
