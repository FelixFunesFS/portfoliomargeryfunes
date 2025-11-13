import { CaseStudy } from '@/types/caseStudy';
import { Smartphone, Heart, Home, Shield, Globe } from 'lucide-react';

export const webDevelopmentStudies: CaseStudy[] = [
  {
    id: 8,
    title: "Soul Train's Eatery Website & App",
    projectGoal: "Create a unified digital ordering platform for a growing catering business to eliminate manual order errors and streamline operations",
    myRole: {
      title: "UX Designer & Full-Stack Developer",
      responsibilities: [
        "Conducted user research with customers and kitchen staff",
        "Designed intuitive ordering workflow and kitchen dashboard",
        "Developed responsive web application with real-time features",
        "Integrated payment processing and inventory management"
      ]
    },
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Lovable.dev"],
    problem: "Manual order taking was causing a 40% error rate during peak catering seasons, leading to missed orders, incorrect deliveries, and inefficient kitchen workflow. Customers had no way to track orders or access previous order history.",
    solution: "Developed an intuitive digital ordering system with real-time inventory tracking, automated kitchen notifications, customer order history, and streamlined payment processing. The solution included a customer-facing app and internal kitchen dashboard.",
    keyOutcomes: [
      "Automated catering operations, reducing order errors by 40% and processing time by 60%",
      "Improved customer satisfaction scores from 3.2 to 4.8/5",
      "Increased repeat business by 35% through order history feature",
      "Enabled scalable growth during peak catering seasons"
    ],
    assumptions: "Customers would prefer mobile-first experience, kitchen staff would adapt to digital workflow, existing POS system could be integrated",
    limitations: "Limited budget required rapid development using low-code platform, tight timeline for catering season launch, constraints with legacy payment processing system",
    uxImpact: "Streamlined ordering process eliminated friction points and reduced cognitive load for customers while providing kitchen staff with clear order management workflows",
    metrics: [
      {
        label: "Order Error Reduction",
        value: "40%",
        percentage: 40
      },
      {
        label: "Processing Speed Improvement",
        value: "60%",
        percentage: 60
      },
      {
        label: "Customer Satisfaction",
        value: "4.8/5",
        percentage: 96
      }
    ],
    reflection: {
      whatWorkedWell: [
        "Real-time inventory integration prevented overselling during peak catering events",
        "Customer order history feature drove 35% repeat business - people love reordering favorites",
        "Kitchen dashboard reduced miscommunication between front-of-house and prep staff by 70%"
      ],
      lessonsLearned: "Mobile-first wasn't just a design principle - it was critical to success. 80% of orders came from mobile devices during events, and the kitchen staff used tablets exclusively. Desktop-first would have failed.",
      wouldDoDifferently: [
        "Add real-time order tracking notifications for customers - 'Your food is being prepared' would reduce anxiety calls by ~40%",
        "Build dietary restriction filters earlier - came up in 60% of catering orders and had to be added post-launch",
        "Create preset menu packages instead of à la carte only - analysis showed 70% of orders fit 3 common patterns"
      ],
      potentialImpact: "Order tracking and preset packages could reduce customer service calls by 50% (~8 hours/week) and increase average order value by 25% through strategic upselling."
    }
  },
  {
    id: 9,
    title: "Souls Feeding Souls Volunteer Platform",
    projectGoal: "Build a comprehensive volunteer coordination platform to organize food distribution efforts and maximize community impact",
    myRole: {
      title: "UX Designer & Frontend Developer",
      responsibilities: [
        "Interviewed volunteers and coordinators to understand workflow pain points",
        "Designed volunteer scheduling and resource tracking interfaces",
        "Developed impact dashboard with real-time metrics",
        "Implemented communication tools for volunteer coordination"
      ]
    },
    tools: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "SendGrid", "Lovable.dev"],
    problem: "Inefficient volunteer scheduling was causing 50% food waste due to poor coordination. Community impact was invisible to stakeholders, making fundraising difficult. Manual processes created communication gaps between volunteers.",
    solution: "Created a comprehensive platform with volunteer scheduling, resource tracking, impact metrics dashboard, and integrated communication tools. The system provided real-time visibility into operations and automated coordination workflows.",
    keyOutcomes: [
      "Streamlined volunteer coordination, improving efficiency by 75% and reducing food waste by 50%",
      "Increased volunteer retention by 40% through better communication",
      "Enhanced fundraising success with visible impact metrics",
      "Eliminated coordination bottlenecks during peak distribution periods"
    ],
    assumptions: "Volunteers have basic smartphone access, consistent internet connectivity available, willingness to adopt new technology for community benefit",
    limitations: "Volunteer tech literacy varies significantly, limited staff time for training, dependency on donations for hosting and maintenance costs",
    uxImpact: "Simplified volunteer experience reduced no-shows while providing coordinators with clear oversight and impact visibility for stakeholders",
    metrics: [
      {
        label: "Coordination Efficiency",
        value: "75%",
        percentage: 75
      },
      {
        label: "Food Waste Reduction",
        value: "50%",
        percentage: 50
      },
      {
        label: "Volunteer Retention",
        value: "40%",
        percentage: 40
      }
    ],
    reflection: {
      whatWorkedWell: [
        "Impact dashboard made volunteers feel connected to mission - seeing '2,500 meals served' drove 40% retention boost",
        "Automated shift reminders reduced no-shows from 30% to 8% - simple SMS made huge difference",
        "Volunteer forum created peer support network that coordinators didn't have to manage"
      ],
      lessonsLearned: "Volunteers aren't just looking for logistics - they want to feel the impact of their work. The metrics dashboard wasn't about tracking efficiency; it was about creating emotional connection to the mission.",
      wouldDoDifferently: [
        "Add gamification/recognition system - volunteers mentioned wanting to see their individual impact (meals served, hours contributed)",
        "Build skill-based matching earlier - discovered 20% volunteer turnover from poor role fit",
        "Create emergency shift coverage feature - last-minute cancellations caused 80% of coordination stress"
      ],
      potentialImpact: "Recognition system and emergency coverage features could increase volunteer retention to 90% (from 70%) and reduce coordinator stress hours by 60% (~5 hours/week saved)."
    }
  },
  {
    id: 10,
    title: "Visions of Hope Youth Services Website",
    projectGoal: "Create a professional website showcasing comprehensive youth services to build trust with stakeholders and improve funding opportunities",
    myRole: {
      title: "UX Designer & Web Developer",
      responsibilities: [
        "Conducted stakeholder interviews with staff and funding partners",
        "Designed service architecture and client journey mapping",
        "Developed responsive website with accessibility compliance",
        "Implemented content management system for staff updates"
      ]
    },
    tools: ["Webflow", "Custom CSS", "JavaScript", "Form Integrations", "CMS"],
    problem: "Complex service offerings were difficult to communicate online, lack of professional web presence was affecting grant application success rates. Stakeholders couldn't easily understand the organization's impact and service scope.",
    solution: "Designed a professional website with clear service architecture, client journey mapping, staff profiles, and impact stories. Implemented easy content management for ongoing updates and compliance requirements.",
    keyOutcomes: [
      "Professional redesign increased service inquiries by 200% and improved grant success rates",
      "Improved grant application success rate from 30% to 65%",
      "Enhanced community trust measured through partnership growth",
      "Streamlined intake process reducing administrative time by 25%"
    ],
    assumptions: "Professional appearance crucial for funding decisions, staff need simple content management, mobile access important for community members",
    limitations: "Strict compliance requirements for youth services content, complex approval workflows for updates, limited budget for ongoing maintenance",
    uxImpact: "Clear service navigation and professional presentation built trust with stakeholders while making services more accessible to families in need",
    metrics: [
      {
        label: "Service Inquiries",
        value: "200%",
        percentage: 100
      },
      {
        label: "Grant Success Rate",
        value: "65%",
        percentage: 65
      },
      {
        label: "Admin Time Savings",
        value: "25%",
        percentage: 25
      }
    ],
    reflection: {
      whatWorkedWell: [
        "Impact stories with real photos/testimonials (anonymized) made abstract services tangible for funders",
        "Clear service architecture helped families understand 'what do you actually do?' - reduced confused intake calls by 60%",
        "Staff-managed CMS empowered non-technical team to keep content fresh without IT dependency"
      ],
      lessonsLearned: "Grant success wasn't just about looking professional - it was about making it easy for funders to write about us. We included pre-written summary paragraphs and stat cards they could copy directly into applications.",
      wouldDoDifferently: [
        "Add a 'For Funders' portal with downloadable impact reports and statistics - currently manual process taking 4 hours per grant",
        "Build automated compliance documentation generator for youth services regulations",
        "Create intake form integration to capture 'how did you hear about us?' data for measuring web impact"
      ],
      potentialImpact: "Funder portal could save 200+ hours/year in grant prep and increase applications submitted by 40%. Intake tracking would quantify web conversion rates for future optimization."
    }
  },
  {
    id: 11,
    title: "Veteran's Benefits Resource Portal",
    projectGoal: "Create a comprehensive resource portal helping veterans navigate complex benefit systems beyond traditional VA services",
    myRole: {
      title: "UX Researcher & Frontend Developer",
      responsibilities: [
        "Conducted user research with 50+ veterans across different demographics",
        "Designed guided navigation system for complex benefit information",
        "Developed benefit calculators and step-by-step application guides",
        "Implemented community forum for peer support"
      ]
    },
    tools: ["Webflow", "JavaScript", "API Integrations", "Form Processing", "Analytics"],
    problem: "Veterans were struggling to find and access benefits due to complex bureaucracy, scattered information sources, and confusing application processes. Many eligible veterans were missing out on available support.",
    solution: "Built an intuitive resource portal with guided navigation, benefit calculators, step-by-step application processes, and community support features. Used plain language and clear visual hierarchy to reduce cognitive load.",
    keyOutcomes: [
      "Guided 500+ veterans to benefits with 80% user satisfaction through intuitive navigation",
      "Partnerships established with 15+ veteran organizations",
      "Average benefit application success rate increased by 45%",
      "Created trusted resource that veterans recommend to peers"
    ],
    assumptions: "Veterans have varying tech comfort levels, mobile access critical, need for clear simple language over bureaucratic jargon",
    limitations: "Compliance requirements with veteran service regulations, frequent policy changes requiring updates, limited marketing budget for outreach",
    uxImpact: "Simplified navigation and plain language approach removed barriers to benefit access while community features provided peer support and validation",
    metrics: [
      {
        label: "Veterans Helped",
        value: "500+",
        percentage: 100
      },
      {
        label: "User Satisfaction",
        value: "80%",
        percentage: 80
      },
      {
        label: "Application Success",
        value: "45%",
        percentage: 45
      }
    ],
    reflection: {
      whatWorkedWell: [
        "Plain language approach tested with actual veterans - eliminated bureaucratic jargon that caused 70% abandonment",
        "Step-by-step guided processes broke overwhelming applications into manageable 5-minute chunks",
        "Community forum became most valuable feature - peer validation more trusted than official guidance"
      ],
      lessonsLearned: "Accessibility isn't just about screen readers - it's about cognitive load. Veterans dealing with PTSD, TBI, or high stress needed information architecture that didn't overwhelm. Breaking applications into tiny steps was more important than the visual design.",
      wouldDoDifferently: [
        "Add benefit eligibility screener upfront - 40% of users spent time on benefits they weren't eligible for",
        "Build SMS/email checkpoints for long applications - discovered many started applications but forgot to finish",
        "Create printable checklists for offline document gathering - many veterans don't have consistent internet"
      ],
      potentialImpact: "Eligibility screener and application reminders could increase completion rates from 55% to 80% (helping 225 additional veterans/year) and reduce frustrated support inquiries by 60%."
    }
  },
  {
    id: 12,
    title: "Discover El Salvador Travel Platform",
    projectGoal: "Create an immersive travel experience platform showcasing personalized jungle and volcano beach adventures to attract international tourists",
    myRole: {
      title: "UX Designer & Full-Stack Developer",
      responsibilities: [
        "Conducted user research with international travelers and local guides",
        "Designed visual storytelling interface with immersive galleries",
        "Developed custom itinerary builder and booking system",
        "Integrated weather and mapping APIs for real-time information"
      ]
    },
    tools: ["React", "TypeScript", "Mapbox", "Cloudinary", "Payment APIs", "Lovable.dev"],
    problem: "Generic travel sites couldn't capture unique local experiences, making it difficult to communicate the value of personalized tours. International travelers had no way to understand or book authentic local adventures.",
    solution: "Developed a visual storytelling platform with immersive photo galleries, interactive maps, custom itinerary builder, and integrated booking system. Emphasized authentic local experiences through compelling visual narrative.",
    keyOutcomes: [
      "Immersive storytelling drove 300% increase in direct bookings for personalized tours",
      "Expanded international client base from 3 to 15 countries",
      "Featured in 5 major travel publications",
      "Average booking value increased by 150% through upselling"
    ],
    assumptions: "Visual appeal drives booking decisions, international travelers have good internet connectivity, social proof significantly influences travel choices",
    limitations: "Content updates needed from non-technical tour guides, seasonal booking patterns affect revenue consistency, weather-dependent activities require flexible planning",
    uxImpact: "Immersive visual experience and personalized itinerary building created emotional connection with destination while streamlined booking reduced decision friction",
    metrics: [
      {
        label: "Direct Bookings",
        value: "300%",
        percentage: 100
      },
      {
        label: "International Reach",
        value: "15 Countries",
        percentage: 100
      },
      {
        label: "Booking Value",
        value: "150%",
        percentage: 100
      }
    ],
    reflection: {
      whatWorkedWell: [
        "High-quality visual storytelling created emotional connection before price discussion - 80% who viewed galleries booked",
        "Custom itinerary builder let travelers feel in control while subtly guiding them toward profitable tour combinations",
        "Social proof from travel publications gave instant credibility for first-time international bookers"
      ],
      lessonsLearned: "Luxury travel isn't about features - it's about selling the transformation. The most successful pages didn't list amenities; they showed the feeling of standing at a waterfall or watching sunset from a volcano. The itinerary builder was less about customization and more about storytelling.",
      wouldDoDifferently: [
        "Add live chat during high-traffic hours (8-11pm EST when Americans research) - lost ~15% of interested visitors who had questions",
        "Build weather-based dynamic pricing - rainy season had 40% capacity but same fixed pricing",
        "Create referral program earlier - 30% of bookings came from word-of-mouth but no incentive system"
      ],
      potentialImpact: "Live chat during peak hours could capture additional $50K/year in bookings. Dynamic pricing would increase rainy season bookings by 25% (~$30K). Referral program could drive 40% more bookings through existing satisfied customers."
    }
  }
];