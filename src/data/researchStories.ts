import caseStudy1Dashboard from '@/assets/case-study-1-dashboard.jpg';
import caseStudy5Automation from '@/assets/case-study-5-automation.jpg';
import caseStudy3Slides from '@/assets/case-study-3-slides.jpg';
import caseStudy4Workspace from '@/assets/case-study-4-workspace.jpg';
import { Database, Clock, TrendingUp, Users } from 'lucide-react';

export const researchStories = [
  {
    title: "Engine Logistics Tracking System",
    briefSummary: "Modernized tracking for F117 engines across 23 global bases with 45% faster reporting.",
    visual: caseStudy1Dashboard,
    userProblem: "Engine maintenance teams spent hours searching through multiple systems to track critical components",
    userVoice: "I spend more time hunting for engine data than actually maintaining aircraft. It's frustrating when mission readiness depends on information I can't quickly find.",
    stakeholderQuote: "This system transformed our global operations. We finally have real-time visibility into our most critical assets. - Operations Director, Boeing Defense",
    challenge: "Engine maintenance teams across 23 bases struggled with manual tracking systems",
    researchMethod: "Conducted 15+ user interviews and workflow observations across multiple sites",
    keyInsight: "Users needed familiar interfaces with minimal training, not complex new systems",
    solution: "Designed SharePoint CMS leveraging existing user mental models with Tableau dashboards",
    userImpact: "Teams could find engine data in seconds instead of hours, reducing stress and improving accuracy",
    metric: "45% faster reporting",
    icon: Database,
    tools: ["User Interviews", "Workflow Analysis", "SharePoint", "Tableau"],
    artifacts: ["User Journey Maps", "Persona Documentation", "Usability Test Results"],
    reflection: "I'd conduct more cross-site usability testing to validate the interface earlier",
    color: "systems",
    caseStudyId: 1
  },
  {
    title: "Data Entry Automation System",
    briefSummary: "Automated DOD/Boeing GUI systems saving 26,000+ hours annually with 90% error reduction.",
    visual: caseStudy5Automation,
    userProblem: "Data entry specialists faced exhaustion from repetitive 2.5-hour daily tasks leading to frequent errors",
    userVoice: "By hour two of data entry, my brain feels like mush. I know I'm making mistakes, but the system requires perfect accuracy for flight safety.",
    stakeholderQuote: "The ROI was immediate. Our analysts went from data entry zombies to strategic thinkers overnight. - Engineering Manager, Boeing",
    challenge: "Data entry specialists experienced fatigue and errors from repetitive 2.5-hour daily tasks",
    researchMethod: "Empathy mapping, task analysis, and error pattern identification with 12 users",
    keyInsight: "Errors occurred due to cognitive overload, not lack of skill or attention",
    solution: "Built VBA automation tool that preserved user control while eliminating repetition",
    userImpact: "Users shifted from monotonous data entry to strategic analysis work, boosting job satisfaction",
    metric: "80% time reduction, 90% error reduction",
    icon: Clock,
    tools: ["Task Analysis", "Empathy Mapping", "VBA", "SQL"],
    artifacts: ["Task Flow Diagrams", "Error Pattern Analysis", "User Satisfaction Surveys"],
    reflection: "I'd include more stakeholders in the design process to ensure broader organizational buy-in",
    color: "agile",
    caseStudyId: 5
  },
  {
    title: "Weekly Engine Removal Automation",
    briefSummary: "Automated slide deck generation saving 12+ weeks per year with 98% faster process.",
    visual: caseStudy3Slides,
    userProblem: "Analysts spent entire afternoons creating repetitive slide decks instead of strategic analysis",
    userVoice: "I became a PowerPoint expert when I should be an engine expert. Leadership needs these slides, but I'm not analyzing—I'm just formatting data.",
    stakeholderQuote: "Our analysts now focus on insights, not formatting. Decision-making speed has improved dramatically. - Operations Director",
    challenge: "Analysts spent 9.6 hours weekly creating repetitive slide decks, causing burnout",
    researchMethod: "Journey mapping and pain point analysis with operations teams",
    keyInsight: "Manual slide creation was a barrier to timely decision-making at leadership level",
    solution: "Designed form-driven automation that maintained presentation quality while saving time",
    userImpact: "Analysts could focus on analysis instead of formatting, improving strategic insights",
    metric: "98% faster process",
    icon: TrendingUp,
    tools: ["Journey Mapping", "C#", "JavaScript", "VBA"],
    artifacts: ["Process Journey Maps", "Pain Point Analysis", "Automation Workflows"],
    reflection: "I'd prototype multiple interface options to better understand user preferences",
    color: "success",
    caseStudyId: 3
  },
  {
    title: "SharePoint Workspace System",
    briefSummary: "Scaled team collaboration across 23 bases with 90% faster document finding.",
    visual: caseStudy4Workspace,
    userProblem: "Team members across global bases couldn't find critical documents or coordinate effectively",
    userVoice: "New team members spend their first week asking 'Where do I find this?' instead of contributing. It's chaos, and we're losing valuable time.",
    stakeholderQuote: "Onboarding went from weeks to days. Our global teams finally work as one unit. - Program Manager",
    challenge: "Growing teams faced communication breakdowns and document chaos",
    researchMethod: "Organizational analysis and collaborative workflow studies",
    keyInsight: "Information architecture needed to match team mental models and role hierarchies",
    solution: "Created role-based SharePoint workspaces with intuitive navigation structures",
    userImpact: "Team members could onboard faster and collaborate more effectively",
    metric: "90% faster document finding, 70% faster onboarding",
    icon: Users,
    tools: ["Information Architecture", "SharePoint", "Power Automate"],
    artifacts: ["IA Sitemaps", "Role-Based Workflows", "Collaboration Patterns"],
    reflection: "I'd implement more iterative feedback loops during the workspace design phase",
    color: "accent",
    caseStudyId: 4
  }
];