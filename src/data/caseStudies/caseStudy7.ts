
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy7: CaseStudy = {
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
  ],
  researchMethods: [
    'Empathy Mapping',
    'User Interviews',
    'Form Usability Testing',
    'Iterative Testing',
    'Feedback Loop Analysis'
  ],
  reflection: {
    whatWorkedWell: [
      "Structured intake form converted vague requests into actionable requirements",
      "Photo upload feature eliminated 'I thought you meant...' conversations about setup",
      "Iterative approach meant we could add fields as new edge cases emerged"
    ],
    lessonsLearned: "Forms need to feel like a conversation, not an interrogation. Strategic use of conditional fields and helpful tooltips increased completion rates from 60% to 95%.",
    wouldDoDifferently: [
      "Add a cost estimator that updates in real-time as customers fill the form",
      "Include examples/photos for ambiguous fields (what does 'elegant' vs 'casual' mean?)",
      "Send confirmation summary immediately after submission to catch errors early"
    ],
    potentialImpact: "Real-time cost estimator could increase quote acceptance by 20% (~$15K additional revenue/year) and reduce pricing negotiation back-and-forth by 50%."
  },
  researchProcess: [
    {
      phase: 'Discovery',
      activities: [
        'Conducted empathy mapping sessions with catering staff',
        'Analyzed existing vague customer requests',
        'Identified communication breakdown patterns',
        'Documented missing information types'
      ],
      deliverables: ['Empathy maps', 'Communication gap analysis', 'Requirements list'],
      duration: '1 week'
    },
    {
      phase: 'Design',
      activities: [
        'Designed structured intake form fields',
        'Created conditional field logic',
        'Planned photo upload feature',
        'Developed tooltip content strategy'
      ],
      deliverables: ['Form wireframes', 'Field validation rules', 'Tooltip content'],
      duration: '1 week'
    },
    {
      phase: 'Development',
      activities: [
        'Built intake form in Lovable.dev',
        'Integrated Supabase for data storage',
        'Implemented photo upload functionality',
        'Added conditional field logic'
      ],
      deliverables: ['Working form', 'Supabase integration', 'Photo storage'],
      duration: '2 weeks'
    },
    {
      phase: 'Iteration',
      activities: [
        'Gathered feedback from catering team',
        'Added new fields for edge cases',
        'Improved completion rate from 60% to 95%',
        'Measured reduction in miscommunication'
      ],
      deliverables: ['Refined form', 'Completion metrics', 'Impact analysis'],
      duration: 'Ongoing'
    }
  ]
};
