
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy4: CaseStudy = {
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
  ],
  reflection: {
    whatWorkedWell: [
      "Role-based access controls prevented information overload - users only saw what they needed",
      "CMS-driven architecture let non-technical staff update content without IT support",
      "Integrated dashboards eliminated need to switch between 5+ different tools"
    ],
    lessonsLearned: "Scalability isn't just about handling more users - it's about maintaining simplicity as complexity grows. The modular workspace design was crucial for this.",
    wouldDoDifferently: [
      "Implement search functionality from day one - users still relied on folder navigation too much",
      "Add usage analytics to identify underutilized features and confusing workflows",
      "Create interactive onboarding tours instead of static documentation - would boost retention"
    ],
    potentialImpact: "Search functionality and analytics could reduce onboarding time to 2-3 days (from current 1 week) and identify 15-20 workflow improvements within the first month."
  },
  userVoice: "Before the workspace system, I wasted hours just trying to find the right document version. Now everything is instantly accessible.",
  stakeholderQuote: "This platform became the operational backbone for 23 bases. Best ROI we've seen on any SharePoint deployment. - IT Director",
  userProblem: "Teams across 23 bases struggled with fragmented documentation and lack of visibility into tasks",
  artifacts: [
    {
      type: 'research-report',
      title: 'Cross-Base User Research - 23 Locations',
      description: 'Conducted interviews and workflow observations across all 23 bases to understand documentation fragmentation',
      date: 'Week 1-2'
    },
    {
      type: 'persona',
      title: 'Multi-Role User Personas - Leadership to Operators',
      description: 'Created 4 personas representing different role types and information needs across organizational hierarchy',
      date: 'Week 2'
    },
    {
      type: 'wireframe',
      title: 'Role-Based Dashboard Mockups',
      description: 'Interface mockups showing customized views for different user roles and permission levels',
      date: 'Week 3'
    },
    {
      type: 'flow-diagram',
      title: 'Information Architecture - Document Taxonomy Design',
      description: 'IA diagram showing modular workspace structure and role-filtered navigation',
      date: 'Week 3'
    },
    {
      type: 'usability-test',
      title: 'Navigation & Search Testing - 15 Users',
      description: 'Task-based usability testing across 3 user roles to validate findability',
      date: 'Week 4'
    }
  ]
};
