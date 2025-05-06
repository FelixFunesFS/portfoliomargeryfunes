
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
  ]
};
