
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
  ],
  reflection: {
    whatWorkedWell: [
      "Comprehensive error logging caught edge cases during testing that would have caused production failures",
      "Created validation checkpoints that users could verify before committing data",
      "Modular code structure made debugging and updates efficient across 1200+ engines"
    ],
    lessonsLearned: "Building trust in automation requires transparency. Users need to see what's happening behind the scenes, not just get results. The validation checkpoints were the key to adoption.",
    wouldDoDifferently: [
      "Add real-time progress indicators for long-running processes to reduce anxiety",
      "Build a 'dry run' mode for users to test without affecting live data",
      "Implement automated alerts for data anomalies instead of relying on manual spot-checks"
    ],
    potentialImpact: "Dry run mode and automated alerts could reduce quality assurance time by 50% (~120 hours/year) and catch errors 2 days earlier on average."
  },
  userVoice: "The manual process was mind-numbing. After entering data for hundreds of engines, you start questioning if you got the numbers right.",
  stakeholderQuote: "The automation eliminated our biggest source of data quality issues. Worth every penny of development time. - Program Manager",
  userProblem: "Manual data entry led to inaccuracies and delays in engine cycle tracking, affecting critical leasing agreements",
  researchMethods: [
    'User Interviews',
    'Workflow Analysis',
    'Edge Case Testing',
    'User Acceptance Testing',
    'Data Quality Analysis'
  ],
  artifacts: [
    {
      type: 'flow-diagram',
      title: 'OQAR Data Extraction Logic Flow',
      description: 'Technical documentation showing parsing logic, validation checkpoints, and data transformation rules for 1200+ engines',
      image: '/assets/circuit-board.jpg',
      date: 'Week 1'
    },
    {
      type: 'wireframe',
      title: 'Validation Interface Mockups',
      description: 'User-friendly validation screens allowing analysts to verify extracted data before committing to production systems',
      image: '/assets/coding-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'usability-test',
      title: 'Edge Case Testing Documentation',
      description: 'Comprehensive error logging and edge case scenarios discovered during testing phase with 50+ sample OQAR files',
      image: '/assets/research-desk.jpg',
      date: 'Week 3'
    },
    {
      type: 'analytics',
      title: 'Pre/Post Automation Metrics Analysis',
      description: 'Data quality metrics showing 25% accuracy improvement and 62% processing speed increase across 6-month period',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Month 6'
    }
  ],
  researchProcess: [
    {
      phase: 'Discovery',
      activities: [
        'Interviewed analysts about manual data entry pain points',
        'Analyzed OQAR file formats and data structures',
        'Documented existing workflow and error patterns',
        'Identified automation opportunities'
      ],
      deliverables: ['Pain point analysis', 'Technical requirements', 'OQAR format documentation'],
      duration: '1 week'
    },
    {
      phase: 'Design',
      activities: [
        'Designed parsing algorithm and validation logic',
        'Created user validation interface wireframes',
        'Planned error handling and edge case scenarios',
        'Defined success metrics and KPIs'
      ],
      deliverables: ['Algorithm design', 'Wireframes', 'Error handling matrix'],
      duration: '1 week'
    },
    {
      phase: 'Development',
      activities: [
        'Built JavaScript/VBA parsing tool',
        'Implemented validation checkpoints',
        'Created comprehensive error logging',
        'Developed user interface for data verification'
      ],
      deliverables: ['Working automation tool', 'Validation interface', 'Error logs'],
      duration: '3 weeks'
    },
    {
      phase: 'Testing & Refinement',
      activities: [
        'Tested with 50+ sample OQAR files',
        'Caught and fixed edge cases',
        'User acceptance testing with analysts',
        'Iterative refinement based on feedback'
      ],
      deliverables: ['Test results', 'Bug fixes', 'Final validated tool'],
      duration: '2 weeks'
    }
  ]
};
