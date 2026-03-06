
import { CaseStudy } from '@/types/caseStudy';

export const caseStudy6: CaseStudy = {
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
  userVoice: "I used to spend my whole morning calling caterers and waiting on hold. Now I submit a form from the parking lot at soccer practice and get a quote before pickup.",
  stakeholderQuote: "We went from losing 3-4 leads a week to capturing every single one. The app paid for itself in the first month. - Owner, Soul Train's Eatery",
  userProblem: "Event requests arrived via phone, text, email, and social media with no central system, causing missed leads, forgotten details, and double-booked dates",
  metrics: [
    { label: "Response Time", value: "83% faster", percentage: 83 },
    { label: "Lead Conversion", value: "40% improvement", percentage: 40 },
    { label: "Staff Coordination", value: "60% fewer errors", percentage: 60 },
    { label: "Double-Booking", value: "100% eliminated", percentage: 100 }
  ],
  researchMethods: [
    'User Interviews',
    'Empathy Mapping',
    'Journey Mapping',
    'User Flow Design',
    'Iterative Testing',
    'Stakeholder Workshops',
    'Competitive Analysis',
    'Usability Testing'
  ],
  researchScale: {
    interviews: 8,
    testSessions: 12,
    participants: 15,
    artifacts: 15
  },
  reflection: {
    whatWorkedWell: [
      "Mobile-first design meant owners could respond to quotes on-the-go during busy events",
      "Low-code approach allowed rapid iteration based on daily user feedback",
      "Dashboard visibility reduced miscommunication between kitchen and event coordination teams",
      "Structured intake form converted vague requests into actionable requirements, improving form completion from 60% to 95%",
      "Strategic use of conditional fields and helpful tooltips made the form feel like a conversation, not an interrogation"
    ],
    lessonsLearned: "Speed to market beats perfection in early-stage businesses. Launching with 70% of planned features and iterating weekly was more valuable than waiting 3 months for 100%. Forms need to feel like a conversation — conditional fields and contextual tooltips were key to driving completion rates from 60% to 95%.",
    wouldDoDifferently: [
      "Add SMS notifications alongside email for time-sensitive updates like same-day event changes",
      "Integrate calendar sync to prevent double-booking conflicts (happened 3x in first month)",
      "Build customer-facing status updates so clients can track quote/event progress",
      "Add a real-time cost estimator that updates as customers fill the quote form"
    ],
    potentialImpact: "SMS notifications and calendar integration could eliminate the remaining 4 hours of manual checking and prevent ~$5K in lost revenue from scheduling conflicts annually. A real-time cost estimator could increase quote acceptance by 20% (~$15K additional revenue/year)."
  },

  // Live Demo Link
  liveDemo: {
    url: "https://train-catering-creations.lovable.app",
    label: "View Live Application"
  },

  // 5 User Personas (3 Customers + 2 Internal)
  personas: [
    {
      id: 'corporate',
      name: 'The Efficient Executive',
      role: 'Corporate Event Planner',
      context: 'HR Manager at a Charleston tech startup planning quarterly team lunches and corporate events. Managing a budget and timeline while coordinating with leadership.',
      accentColor: 'blue',
      goals: [
        'Get quotes fast enough for same-day budget approval',
        'Professional invoices for expense reporting',
        'Track dietary restrictions across 50+ employees',
        'Recurring event scheduling for quarterly meetings'
      ],
      painPoints: [
        'No time for back-and-forth phone calls during workday',
        'Needs PDF quotes for CFO approval process',
        'Must accommodate multiple dietary restrictions',
        'Previous caterers were unreliable on timing'
      ],
      keyTasks: [
        'Submit detailed quote request with employee headcount',
        'Review and approve estimates quickly',
        'Process payment through corporate card',
        'Coordinate delivery logistics with building management'
      ],
      quote: "I need a quote I can forward to my CFO in 5 minutes, not 5 days."
    },
    {
      id: 'military',
      name: 'The Celebration Coordinator',
      role: 'Military Customer',
      context: 'Military spouse organizing homecoming celebration at Charleston Naval Base. Coordinating large-scale events with short notice and specific base requirements.',
      accentColor: 'green',
      goals: [
        'Plan parties for 100-150 guests on short notice',
        'Reliable vendor who understands military event needs',
        'Patriotic and formal catering options',
        'Flexible payment scheduling around deployment pay'
      ],
      painPoints: [
        'Homecoming dates often change with 72-hour notice',
        'Base access coordination for vendors',
        'Budget uncertainty until final headcount',
        'Communication delays when spouse is deployed'
      ],
      keyTasks: [
        'Request quote for large-scale event quickly',
        'Modify guest count as RSVPs come in',
        'Coordinate base access for catering team',
        'Split payment across multiple milestones'
      ],
      quote: "When my husband's ship comes in, I have 72 hours to plan a party for 150 people."
    },
    {
      id: 'family',
      name: 'The Family Juggler',
      role: 'Busy Charlestonian Parent',
      context: 'Working parent in Mt. Pleasant juggling career, kids activities, and planning a graduation party. Needs mobile-friendly, stress-free planning.',
      accentColor: 'purple',
      goals: [
        'Book catering without taking time off work',
        'Authentic Lowcountry cuisine for family gathering',
        'Flexible scheduling around unpredictable family calendar',
        'Simple process that doesn\'t add more stress'
      ],
      painPoints: [
        'No time to call during business hours',
        'Can\'t sit at computer to fill out long forms',
        'Needs to check with family before committing',
        'Previous experiences required too many follow-up calls'
      ],
      keyTasks: [
        'Submit quote request from phone during lunch break',
        'Share estimate link with spouse for approval',
        'Pay deposit quickly to secure date',
        'Receive reminders as event approaches'
      ],
      quote: "Between soccer practice and conference calls, I'm booking catering from a parking lot."
    },
    {
      id: 'admin',
      name: 'The Multitasking Caterer',
      role: 'Caterer Admin (Business Owner)',
      context: 'Soul Train\'s owner managing quotes, estimates, and events while simultaneously running active catering operations. Needs mobile access to business tools.',
      accentColor: 'amber',
      goals: [
        'Respond to quotes while at events',
        'Never miss a lead due to missed email',
        'Quick estimate creation with preset menu items',
        'Track payment milestones and outstanding balances'
      ],
      painPoints: [
        'Previously missed leads during busy catering days',
        'Paper-based tracking caused lost information',
        'No visibility into which quotes needed follow-up',
        'Payment tracking was scattered across systems'
      ],
      keyTasks: [
        'Review incoming quote requests on mobile',
        'Create estimates with line items and pricing',
        'Send estimates to customers with single tap',
        'Monitor event dashboard for upcoming events'
      ],
      quote: "I used to miss leads because I couldn't check emails during active catering events."
    },
    {
      id: 'staff',
      name: 'The Event Executor',
      role: 'Event Staff',
      context: 'On-site catering team member needing clear event details without accessing sensitive business information. Mobile-first access to logistics.',
      accentColor: 'teal',
      goals: [
        'Know event details (menu, headcount, location) at a glance',
        'Access schedule for the week ahead',
        'Add events to personal calendar',
        'Get reminders for upcoming assignments'
      ],
      painPoints: [
        'Event details were shared via text threads (easy to lose)',
        'Last-minute changes weren\'t communicated clearly',
        'No central place to see full weekly schedule',
        'Had to ask manager for details already shared'
      ],
      keyTasks: [
        'View upcoming events assigned to them',
        'Access event details (menu, guest count, location)',
        'Subscribe to iCal feed for calendar integration',
        'Check equipment and supply requirements'
      ],
      quote: "I need to know what we're serving and where without digging through texts."
    }
  ],

  // 6 User Flows
  userFlows: [
    {
      id: 'quote-request',
      name: 'Quote Request Flow',
      userType: 'customer',
      description: 'Complete 6-step wizard for customers to submit catering quote requests with all event details.',
      steps: [
        {
          step: 1,
          name: 'Contact Info',
          description: 'Capture customer contact details for follow-up',
          fields: ['Full Name', 'Email Address', 'Phone Number']
        },
        {
          step: 2,
          name: 'Event Details',
          description: 'Understand the scope and logistics of the event',
          fields: ['Event Name', 'Event Type', 'Date', 'Time', 'Guest Count', 'Location']
        },
        {
          step: 3,
          name: 'Service Type',
          description: 'Define the level of catering service needed',
          fields: ['Drop-off', 'Buffet', 'Full-Service', 'Chef Stations']
        },
        {
          step: 4,
          name: 'Menu Selection',
          description: 'Capture food preferences and restrictions',
          fields: ['Proteins', 'Sides', 'Dietary Restrictions', 'Special Requests']
        },
        {
          step: 5,
          name: 'Supplies & Details',
          description: 'Additional logistics and equipment needs',
          fields: ['Chafing Dishes', 'Serving Utensils', 'Plates/Napkins', 'Special Notes']
        },
        {
          step: 6,
          name: 'Review & Submit',
          description: 'Final review of all information before submission',
          fields: ['Summary View', 'Edit Links', 'Submit Button']
        }
      ],
      entryPoints: ['Homepage CTA', 'Mobile Action Bar', 'Navigation Menu'],
      exitStates: ['Success → Thank You Page + Confirmation Email', 'Abandoned → No Data Persisted']
    },
    {
      id: 'customer-portal',
      name: 'Customer Portal Flow',
      userType: 'customer',
      description: 'Token-based portal for customers to review estimates, approve, and make payments.',
      steps: [
        {
          step: 1,
          name: 'Receive Portal Link',
          description: 'Customer receives unique token-based URL via email',
          fields: ['Email with Portal Link']
        },
        {
          step: 2,
          name: 'Review Estimate',
          description: 'View detailed line items, pricing, and terms',
          fields: ['Line Items', 'Subtotal', 'Tax', 'Discount', 'Total']
        },
        {
          step: 3,
          name: 'Accept Terms',
          description: 'Review and accept Terms & Conditions (required)',
          fields: ['Terms & Conditions Checkbox', 'Service Agreement']
        },
        {
          step: 4,
          name: 'Approve Estimate',
          description: 'Formal approval triggers payment milestone generation',
          fields: ['Approve Button', 'Request Changes Option']
        },
        {
          step: 5,
          name: 'Make Payment',
          description: 'Pay deposit or milestone via Stripe integration',
          fields: ['Payment Amount', 'Stripe Checkout', 'Receipt']
        }
      ],
      entryPoints: ['Email Link with Token'],
      exitStates: ['Estimate Approved + Payment Initiated', 'Change Request Submitted', 'Session Expired']
    },
    {
      id: 'payment-milestones',
      name: 'Payment Milestones Flow',
      userType: 'customer',
      description: 'Three-stage payment structure ensuring commitment and cash flow for catering events.',
      steps: [
        {
          step: 1,
          name: 'Deposit Payment (10%)',
          description: 'Initial commitment to secure the event date',
          fields: ['10% of Total', 'Due Upon Approval', 'Stripe Checkout']
        },
        {
          step: 2,
          name: 'Booking Payment (50%)',
          description: 'Major payment to confirm final event details',
          fields: ['50% of Total', 'Due 30 Days Before Event', 'Payment Reminder Email']
        },
        {
          step: 3,
          name: 'Final Payment (40%)',
          description: 'Remaining balance before event execution',
          fields: ['40% of Total', 'Due 14 Days Before Event', 'Payment Confirmation']
        }
      ],
      entryPoints: ['Customer Portal After Approval'],
      exitStates: ['Fully Paid → Event Confirmed', 'Payment Overdue → Reminder Sequence', 'Payment Failed → Retry Prompt']
    },
    {
      id: 'admin-event-management',
      name: 'Admin Event Management Flow',
      userType: 'admin',
      description: 'Complete event lifecycle management from quote receipt to event completion.',
      steps: [
        {
          step: 1,
          name: 'Pending',
          description: 'New quote submission received and awaiting review',
          fields: ['Quote Details', 'Customer Info', 'Event Summary']
        },
        {
          step: 2,
          name: 'Under Review',
          description: 'Admin actively reviewing and preparing estimate',
          fields: ['Edit Customer Info', 'Verify Event Details', 'Check Availability']
        },
        {
          step: 3,
          name: 'Estimated',
          description: 'Estimate created and sent to customer',
          fields: ['Line Items', 'Pricing', 'Discount', 'Send Button']
        },
        {
          step: 4,
          name: 'Confirmed',
          description: 'Customer approved and payment received',
          fields: ['Payment Status', 'Staff Assignment', 'Event Prep Checklist']
        },
        {
          step: 5,
          name: 'In Progress',
          description: 'Event is actively being executed',
          fields: ['Staff Schedule', 'Equipment Checklist', 'Contact Info']
        },
        {
          step: 6,
          name: 'Completed',
          description: 'Event finished, ready for follow-up',
          fields: ['Final Invoice', 'Customer Feedback Request', 'Archive']
        }
      ],
      entryPoints: ['Admin Dashboard'],
      exitStates: ['Event Completed', 'Event Cancelled', 'Quote Expired']
    },
    {
      id: 'estimate-creation',
      name: 'Estimate Creation Flow',
      userType: 'admin',
      description: 'Process for creating detailed estimates with line items, pricing, and discounts.',
      steps: [
        {
          step: 1,
          name: 'Add Line Items',
          description: 'Select menu items and quantities from preset catalog',
          fields: ['Item Name', 'Description', 'Unit Price', 'Quantity']
        },
        {
          step: 2,
          name: 'Set Pricing',
          description: 'Adjust pricing based on event scope and customizations',
          fields: ['Per-Person Rate', 'Flat Fees', 'Equipment Rental']
        },
        {
          step: 3,
          name: 'Apply Discounts',
          description: 'Add percentage or fixed discounts for promotions or loyalty',
          fields: ['Discount Type', 'Discount Value', 'Government/Tax Exempt Toggle']
        },
        {
          step: 4,
          name: 'Generate PDF',
          description: 'Create professional estimate document for customer',
          fields: ['PDF Preview', 'Download Option']
        },
        {
          step: 5,
          name: 'Send to Customer',
          description: 'Email estimate with unique portal access link',
          fields: ['Customer Email', 'Send Button', 'Confirmation']
        }
      ],
      entryPoints: ['Event Detail Page'],
      exitStates: ['Estimate Sent → Awaiting Customer Response', 'Draft Saved']
    },
    {
      id: 'staff-schedule',
      name: 'Staff Schedule View Flow',
      userType: 'staff',
      description: 'Mobile-first dashboard for event staff to view assignments and event details.',
      steps: [
        {
          step: 1,
          name: 'View Calendar',
          description: 'See all upcoming events on weekly/monthly calendar',
          fields: ['Calendar Grid', 'Event Badges', 'Date Navigation']
        },
        {
          step: 2,
          name: 'Access Event Details',
          description: 'Tap event to see full logistics information',
          fields: ['Event Name', 'Date/Time', 'Location', 'Guest Count', 'Menu']
        },
        {
          step: 3,
          name: 'Check Assignments',
          description: 'View which staff members are assigned to event',
          fields: ['Staff List', 'Roles', 'Contact Info']
        },
        {
          step: 4,
          name: 'Add to Calendar',
          description: 'Export event to personal calendar app',
          fields: ['iCal Download', 'Calendar Subscription Link']
        }
      ],
      entryPoints: ['Staff Dashboard Login'],
      exitStates: ['Event Added to Personal Calendar', 'Details Viewed']
    }
  ],

  // 6 System Touchpoints
  systemTouchpoints: [
    {
      touchpoint: 'Public Website',
      userType: 'Customers',
      purpose: 'Discovery, menu browsing, quote initiation',
      channel: 'web'
    },
    {
      touchpoint: 'Quote Form Wizard',
      userType: 'Customers',
      purpose: 'Lead capture through 6-step form',
      channel: 'mobile'
    },
    {
      touchpoint: 'Customer Portal',
      userType: 'Customers',
      purpose: 'Estimate review, approvals, payments',
      channel: 'web'
    },
    {
      touchpoint: 'Admin Dashboard',
      userType: 'Admins',
      purpose: 'Operations management, quote processing',
      channel: 'web'
    },
    {
      touchpoint: 'Staff Dashboard',
      userType: 'Staff',
      purpose: 'Event logistics, schedule access',
      channel: 'mobile'
    },
    {
      touchpoint: 'Email Communications',
      userType: 'All Users',
      purpose: 'Transactional notifications, reminders',
      channel: 'email'
    }
  ],

  // 8 Automated Workflows
  automatedWorkflows: [
    {
      trigger: 'Quote submitted',
      emailType: 'Welcome/Confirmation',
      recipient: 'Customer + Admin',
      timing: 'Immediate'
    },
    {
      trigger: 'Estimate created',
      emailType: 'Estimate Ready',
      recipient: 'Customer',
      timing: 'On admin action'
    },
    {
      trigger: 'Estimate approved',
      emailType: 'Approval Confirmation',
      recipient: 'Customer + Admin',
      timing: 'Immediate'
    },
    {
      trigger: 'Payment received',
      emailType: 'Payment Confirmation',
      recipient: 'Customer',
      timing: 'Immediate'
    },
    {
      trigger: 'Payment overdue',
      emailType: 'Payment Reminder',
      recipient: 'Customer',
      timing: 'Automated with cooldown'
    },
    {
      trigger: 'Event approaching (3 days)',
      emailType: 'Event Reminder',
      recipient: 'Customer',
      timing: '3 days before event'
    },
    {
      trigger: 'Event approaching (1 day)',
      emailType: 'Final Reminder',
      recipient: 'Customer',
      timing: '1 day before event'
    },
    {
      trigger: 'Event completed',
      emailType: 'Follow-up Request',
      recipient: 'Customer',
      timing: 'Post-event'
    }
  ],

  // 4 Architecture Diagrams (Mermaid)
  architecture: [
    {
      diagramType: 'journey',
      title: 'Customer Journey Flow',
      description: 'Complete lifecycle from discovery to event completion',
      mermaidCode: `journey
    title Customer Journey: Quote to Event Completion
    section Discovery
      Visit website: 5: Customer
      Browse menu: 4: Customer
      View gallery/reviews: 4: Customer
    section Quote Request
      Select event type: 4: Customer
      Complete 6-step form: 3: Customer
      Submit quote: 5: Customer
      Receive confirmation email: 5: Customer, System
    section Estimate Review
      Receive estimate email: 5: Customer, System
      Access customer portal: 4: Customer
      Review line items: 4: Customer
      Request changes (optional): 3: Customer
      Accept terms: 4: Customer
      Approve estimate: 5: Customer
    section Payment
      Pay deposit (10%): 4: Customer
      Sign service agreement: 4: Customer
      Pay midpoint (50%): 4: Customer
      Pay final balance (40%): 4: Customer
    section Event
      Receive event reminders: 5: System
      Event day execution: 5: Staff
      Post-event follow-up: 4: System`
    },
    {
      diagramType: 'flow',
      title: 'Payment Milestone Flow',
      description: 'Stripe integration with webhook handling',
      mermaidCode: `flowchart TD
    A[Customer Approves Estimate] --> B[Milestones Generated]
    B --> C[Deposit Due - 10%]
    C --> D[Click Pay Button]
    D --> E[Stripe Checkout]
    E --> F{Payment Success?}
    F -->|Yes| G[Payment Success Page]
    F -->|No| H[Payment Canceled Page]
    G --> I[Webhook Updates DB]
    I --> J[Confirmation Email]
    J --> K[Return to Portal]
    K --> L{More Payments Due?}
    L -->|Yes| M[Show Next Milestone]
    L -->|No| N[Fully Paid Status]`
    },
    {
      diagramType: 'flow',
      title: 'Admin Event Lifecycle',
      description: 'Status transitions from pending to completed',
      mermaidCode: `flowchart LR
    subgraph New
        A[pending] --> B[under_review]
    end
    subgraph Processing
        B --> C[estimated]
        C --> D{Customer Response}
    end
    subgraph Active
        D -->|Approved| E[confirmed]
        D -->|Changes| F[revision_needed]
        F --> C
        E --> G[in_progress]
    end
    subgraph Complete
        G --> H[completed]
        D -->|Rejected| I[cancelled]
    end`
    },
    {
      diagramType: 'system',
      title: 'Multi-Portal Architecture',
      description: 'System touchpoints and user access patterns',
      mermaidCode: `flowchart TB
    subgraph Customer Touchpoints
        A[Public Website] --> B[Quote Form]
        B --> C[Customer Portal]
        C --> D[Stripe Checkout]
    end
    subgraph Admin Touchpoints
        E[Admin Dashboard] --> F[Event Management]
        F --> G[Estimate Builder]
        G --> H[Email System]
    end
    subgraph Staff Touchpoints
        I[Staff Dashboard] --> J[Schedule View]
        J --> K[iCal Export]
    end
    subgraph Shared Services
        L[(Supabase DB)]
        M[Email Service]
        N[Stripe API]
    end
    C --> L
    F --> L
    J --> L
    H --> M
    D --> N`
    }
  ],

  // Expanded Artifacts (15+)
  artifacts: [
    {
      type: 'persona',
      title: 'Corporate Event Planner Persona',
      description: 'HR manager needing fast, professional quotes for recurring team events with budget documentation',
      image: '/assets/research-desk.jpg',
      date: 'Week 1'
    },
    {
      type: 'persona',
      title: 'Military Customer Persona',
      description: 'Service member/spouse coordinating large celebrations with short notice and base access requirements',
      image: '/assets/research-desk.jpg',
      date: 'Week 1'
    },
    {
      type: 'persona',
      title: 'Busy Charlestonian Parent Persona',
      description: 'Working parent planning family gatherings via mobile between work and family obligations',
      image: '/assets/research-desk.jpg',
      date: 'Week 1'
    },
    {
      type: 'journey-map',
      title: 'Complete Customer Lifecycle',
      description: 'Discovery → Quote → Estimate → Payment → Event with emotional journey tracking',
      image: '/assets/case-study-5-automation.jpg',
      date: 'Week 1'
    },
    {
      type: 'journey-map',
      title: 'Corporate Quote Flow Analysis',
      description: 'How corporate planners experience the 6-step process with specific pain points and solutions',
      image: '/assets/case-study-5-automation.jpg',
      date: 'Week 2'
    },
    {
      type: 'flow-diagram',
      title: '6-Step Quote Wizard Flow',
      description: 'Entry points, form fields, validation rules, and exit states for complete quote submission',
      image: '/assets/coding-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'flow-diagram',
      title: 'Payment Milestone Flow',
      description: 'Deposit → Booking → Final with Stripe integration, webhook handling, and error states',
      image: '/assets/coding-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'flow-diagram',
      title: 'Admin Event Lifecycle',
      description: 'Status transitions diagram showing pending → under_review → estimated → confirmed → completed',
      image: '/assets/coding-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'wireframe',
      title: 'Customer Portal 3-Column Layout',
      description: 'Desktop estimate review experience with line items, totals, and action buttons',
      image: '/assets/case-study-4-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'wireframe',
      title: 'Admin Dashboard Event Cards',
      description: 'Mobile vs. desktop view comparison showing responsive card-based event management',
      image: '/assets/case-study-4-workspace.jpg',
      date: 'Week 2'
    },
    {
      type: 'prototype',
      title: 'Mobile Quote Form Prototype',
      description: 'Interactive prototype validated with restaurant owners during busy service hours',
      image: '/assets/case-study-4-workspace.jpg',
      date: 'Week 3'
    },
    {
      type: 'usability-test',
      title: 'Mobile Quote Form Test Results',
      description: 'Completion rates, drop-off analysis, and field-level error patterns from 12 test sessions',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Week 3'
    },
    {
      type: 'research-report',
      title: 'System Touchpoints Matrix',
      description: '6 touchpoints × 3 user types mapping all digital interactions in the platform',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Week 3'
    },
    {
      type: 'analytics',
      title: 'Response Time Metrics',
      description: '83% reduction visualization showing before (24-48 hours) vs. after (under 4 hours)',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Month 3'
    },
    {
      type: 'analytics',
      title: 'Automated Workflow Performance',
      description: 'Email open rates, payment conversion metrics, and reminder effectiveness data',
      image: '/assets/case-study-1-dashboard.jpg',
      date: 'Month 3'
    }
  ],

  researchProcess: [
    {
      phase: 'Discovery',
      activities: [
        'Conducted 8 interviews with restaurant owners and customers',
        'Created empathy maps for 3 customer personas',
        'Shadowed event coordination process during active events',
        'Identified mobile-first requirement as critical constraint'
      ],
      deliverables: ['5 Persona Cards', 'Customer Journey Maps', 'Requirements Document'],
      duration: '1 week'
    },
    {
      phase: 'Definition',
      activities: [
        'Mapped 6 distinct user flows with entry/exit points',
        'Documented system touchpoints matrix',
        'Defined automated workflow triggers',
        'Prioritized features for MVP launch'
      ],
      deliverables: ['User Flow Diagrams', 'System Architecture', 'Feature Prioritization Matrix'],
      duration: '1 week'
    },
    {
      phase: 'Design',
      activities: [
        'Sketched mobile-first intake forms',
        'Designed dashboard layouts for 3 user types',
        'Planned Supabase data structure',
        'Created interactive prototypes'
      ],
      deliverables: ['Wireframes', 'Prototypes', 'Database Schema'],
      duration: '1 week'
    },
    {
      phase: 'Development',
      activities: [
        'Built front-end in Lovable.dev',
        'Configured Supabase backend with RLS',
        'Implemented Stripe payment integration',
        'Daily iteration with user feedback'
      ],
      deliverables: ['Working MVP', 'Payment Flow', 'Admin Dashboard'],
      duration: '2 weeks'
    },
    {
      phase: 'Testing',
      activities: [
        'Conducted 12 usability test sessions',
        'Tested mobile experience during actual events',
        'Validated payment flow end-to-end',
        'Gathered stakeholder feedback'
      ],
      deliverables: ['Usability Test Reports', 'Bug Fixes', 'UI Refinements'],
      duration: '1 week'
    },
    {
      phase: 'Launch & Iteration',
      activities: [
        'Deployed with 70% of planned features',
        'Weekly feedback sessions with owners',
        'Iterative feature additions based on usage',
        'Measured response time improvements'
      ],
      deliverables: ['Production App', 'Analytics Dashboard', 'Iteration Roadmap'],
      duration: 'Ongoing'
    }
  ],

  // Video Walkthroughs
  videos: [
    {
      title: "Customer Quote Request Flow",
      description: "Complete walkthrough of the 6-step quote wizard from a customer's perspective. Shows mobile-first design, form validation, and confirmation experience.",
      url: "", // Add your Loom/YouTube URL here
      thumbnail: "", // Optional: add a thumbnail image path
      duration: "2:30",
      type: "demo" as const
    },
    {
      title: "Admin Dashboard Overview",
      description: "Tour of the admin dashboard showing event management, quote review process, estimate creation, and payment tracking features.",
      url: "", // Add your Loom/YouTube URL here
      thumbnail: "",
      duration: "4:15",
      type: "walkthrough" as const
    },
    {
      title: "Customer Portal Experience",
      description: "Demonstration of the customer portal where clients review estimates, accept terms, and process payments through Stripe integration.",
      url: "", // Add your Loom/YouTube URL here
      thumbnail: "",
      duration: "3:00",
      type: "demo" as const
    },
    {
      title: "Staff Schedule View",
      description: "Mobile-first staff dashboard showing upcoming events, assignment details, and calendar integration for on-site catering teams.",
      url: "", // Add your Loom/YouTube URL here
      thumbnail: "",
      duration: "1:45",
      type: "walkthrough" as const
    },
    {
      title: "Payment Flow & Stripe Integration",
      description: "End-to-end payment process showing milestone structure, Stripe checkout, webhook handling, and confirmation emails.",
      url: "", // Add your Loom/YouTube URL here
      thumbnail: "",
      duration: "2:15",
      type: "tutorial" as const
    }
  ]
};
