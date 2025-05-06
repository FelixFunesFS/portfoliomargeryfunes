
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
  ]
};
