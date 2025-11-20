
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy1: CaseStudy = {
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
  ],
  reflection: {
    whatWorkedWell: [
      "User-centered design approach - shadowed 12 analysts to understand real workflows",
      "Iterative prototyping with weekly feedback loops kept stakeholders engaged",
      "Leveraging existing SharePoint infrastructure reduced training overhead"
    ],
    lessonsLearned: "Starting with the 'why' behind manual processes revealed hidden automation opportunities I initially missed. Users often work around broken systems rather than report them.",
    wouldDoDifferently: [
      "Conduct cross-base user testing earlier to catch regional workflow variations",
      "Build in mobile-first design from day one - 40% of users needed field access",
      "Create video tutorials alongside rollout - would have reduced support tickets by ~60%"
    ],
    potentialImpact: "With mobile optimization and video training, could have achieved 60% faster adoption and saved an additional 200 hours in support time."
  },
  userVoice: "I spend more time hunting for engine data than actually maintaining aircraft. It's frustrating when mission readiness depends on information I can't quickly find.",
  stakeholderQuote: "This system transformed our global operations. We finally have real-time visibility into our most critical assets. - Operations Director, Boeing Defense",
  userProblem: "Engine maintenance teams spent hours searching through multiple systems to track critical components",
  artifacts: [
    {
      type: 'journey-map',
      title: 'Engine Maintenance Workflow - Current State Analysis',
      description: 'Mapped existing workflows of 12 analysts across global bases, identifying 8 major pain points and 14 redundant manual steps',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Week 1-2'
    },
    {
      type: 'persona',
      title: 'Senior Aircraft Maintenance Analyst - Global Operations',
      description: 'Primary user persona representing 40+ analysts managing F117 engine data across multiple time zones',
      image: '/assets/research-desk.jpg',
      date: 'Week 2'
    },
    {
      type: 'wireframe',
      title: 'SharePoint Dashboard - Initial Interface Sketches',
      description: 'Low-fidelity wireframes tested with 8 analysts to validate information architecture and navigation patterns',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Week 3'
    },
    {
      type: 'flow-diagram',
      title: 'Automated Reporting Logic - SQL Integration Flow',
      description: 'Technical flow diagram showing data connections between SharePoint CMS, SQL database, and Tableau dashboards',
      image: '/assets/circuit-board.jpg',
      date: 'Week 4'
    },
    {
      type: 'usability-test',
      title: 'Navigation Testing Results with Base Analysts',
      description: 'Task completion testing with 8 analysts revealed 3 critical navigation issues, all resolved before launch',
      image: '/assets/research-desk.jpg',
      date: 'Week 5'
    }
  ],
  researchProcess: [
    {
      phase: 'Discovery',
      activities: [
        'Shadowed 12 analysts across 4 global bases',
        'Conducted stakeholder interviews with operations directors',
        'Mapped existing workflows and pain points',
        'Analyzed legacy system data and error logs'
      ],
      deliverables: ['Journey maps', 'Pain point analysis', 'User personas', 'Opportunity matrix'],
      duration: '2 weeks'
    },
    {
      phase: 'Synthesis',
      activities: [
        'Pattern analysis across regional workflows',
        'Prioritization workshops with stakeholders',
        'Technical feasibility assessment',
        'Automation opportunity identification'
      ],
      deliverables: ['Insight report', 'Prioritization matrix', 'Technical requirements'],
      duration: '1 week'
    },
    {
      phase: 'Design & Development',
      activities: [
        'Wireframe creation and iterative refinement',
        'SharePoint CMS configuration',
        'SQL logic programming',
        'Tableau dashboard development'
      ],
      deliverables: ['Wireframes', 'Working prototype', 'SQL scripts', 'Dashboards'],
      duration: '3 weeks'
    },
    {
      phase: 'Validation',
      activities: [
        'Usability testing with 8 base analysts',
        'Task completion rate measurement',
        'Navigation pattern analysis',
        'Iterative refinement based on feedback'
      ],
      deliverables: ['Usability test results', 'Refined interface', 'Training materials'],
      duration: '1 week'
    }
  ]
};
