import { Target, BarChart3, Code, CheckCircle } from 'lucide-react';

export const researchToolkit = [{
  phase: "Discovery Sprint",
  methods: ["User Interviews", "Contextual Inquiry", "Stakeholder Mapping", "Journey Mapping"],
  deliverables: ["User Personas", "Journey Maps", "Problem Definition", "Research Plan"],
  duration: "1-2 weeks",
  icon: Target,
  insight: "Why are users struggling? What are their real needs vs. stated needs?"
}, {
  phase: "Analysis Sprint",
  methods: ["Affinity Mapping", "Behavioral Analysis", "Task Analysis", "Systems Thinking"],
  deliverables: ["Insight Synthesis", "Opportunity Map", "Design Principles", "Requirements"],
  duration: "1-2 weeks",
  icon: BarChart3,
  insight: "What patterns emerge? How do user needs connect to business goals?"
}, {
  phase: "Solution Sprint",
  methods: ["Co-design Sessions", "Rapid Prototyping", "Concept Testing", "Iterative Design"],
  deliverables: ["Validated Concepts", "Interactive Prototypes", "Test Results", "Design System"],
  duration: "2-4 weeks",
  icon: Code,
  insight: "Which solutions resonate? How do users actually interact with our ideas?"
}, {
  phase: "Validation Sprint",
  methods: ["Usability Testing", "A/B Testing", "Post-Launch Research", "Impact Measurement"],
  deliverables: ["Usability Report", "Impact Metrics", "Iteration Plan", "Success Stories"],
  duration: "1-2 weeks",
  icon: CheckCircle,
  insight: "Did we solve the right problem? What should we optimize next?"
}];
