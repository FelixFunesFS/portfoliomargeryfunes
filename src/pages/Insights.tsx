import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Search, 
  Users, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Database,
  PenTool,
  Zap,
  Clock,
  CheckCircle,
  Download,
  Code,
  Palette,
  Layout,
  Navigation,
  Image,
  FileText,
  MousePointer,
  Shield,
  Server,
  Key,
  Globe,
  Monitor,
  Cloud,
  Activity,
  Settings
} from 'lucide-react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import circuitBoard from '@/assets/circuit-board.jpg';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Insights = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroSectionVariants = [
    {
      title: "Full-Width Background Image/Video",
      description: "Immersive full-screen hero with video/image background and overlay text",
      characteristics: ["Cinematic appeal", "High visual impact", "Overlay text for readability", "Call-to-action prominence"],
      useCases: ["Brand storytelling", "Product launches", "Event promotion", "Creative portfolios"],
      codePreview: `<div className="relative h-screen bg-cover bg-center" style={{backgroundImage: 'url(/hero-bg.jpg)'}}>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
    <div>
      <h1 className="text-5xl font-bold mb-4">Your Story Starts Here</h1>
      <p className="text-xl mb-8">Discover amazing experiences</p>
      <button className="bg-primary px-8 py-3 rounded-lg">Get Started</button>
    </div>
  </div>
</div>`,
      mockup: "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500"
    },
    {
      title: "Split Layout",
      description: "Clean two-column layout with content on one side and visual on the other",
      characteristics: ["Balanced composition", "Clean typography", "Image/content harmony", "Responsive design"],
      useCases: ["SaaS platforms", "Professional services", "B2B websites", "Corporate landing pages"],
      codePreview: `<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
  <div className="flex items-center justify-center p-8">
    <div className="max-w-md">
      <h1 className="text-4xl font-bold mb-4">Innovation Meets Excellence</h1>
      <p className="text-lg text-muted-foreground mb-6">Transform your business with our cutting-edge solutions</p>
      <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md">Learn More</button>
    </div>
  </div>
  <div className="bg-muted flex items-center justify-center">
    <img src="/hero-image.jpg" alt="Hero" className="max-w-full h-auto" />
  </div>
</div>`,
      mockup: "bg-gradient-to-r from-slate-100 to-slate-200 border-l-4 border-primary"
    },
    {
      title: "Minimalist/Typography-Focused",
      description: "Clean, text-centric design emphasizing typography and white space",
      characteristics: ["Typography hierarchy", "Generous white space", "Subtle accents", "Content focus"],
      useCases: ["Editorial sites", "Blogs", "Portfolios", "Minimalist brands"],
      codePreview: `<div className="min-h-screen flex items-center justify-center bg-white">
  <div className="text-center max-w-3xl px-8">
    <h1 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
      Less is <em className="font-bold">More</em>
    </h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Discover the power of simplicity in design and communication
    </p>
    <div className="w-24 h-0.5 bg-gray-900 mx-auto mb-8"></div>
    <button className="text-gray-900 border border-gray-900 px-8 py-3 hover:bg-gray-900 hover:text-white transition-colors">
      Explore
    </button>
  </div>
</div>`,
      mockup: "bg-white border border-gray-200 relative"
    },
    {
      title: "Carousel/Slider",
      description: "Dynamic rotating content with navigation controls and multiple messages",
      characteristics: ["Multiple content slides", "Navigation controls", "Auto-play option", "Transition effects"],
      useCases: ["E-commerce", "Multi-product showcase", "News sites", "Portfolio galleries"],
      codePreview: `<div className="relative h-screen overflow-hidden">
  <div className="flex transition-transform duration-500" style={{transform: 'translateX(0%)'}}>
    <div className="w-full flex-shrink-0 bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Slide One</h1>
        <p className="text-xl">First amazing feature</p>
      </div>
    </div>
  </div>
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
    <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
    <div className="w-3 h-3 bg-white rounded-full"></div>
  </div>
</div>`,
      mockup: "bg-gradient-to-r from-red-400 to-pink-400 relative"
    },
    {
      title: "Geometric/Abstract Background",
      description: "Modern geometric shapes and patterns creating visual interest",
      characteristics: ["Geometric shapes", "Abstract patterns", "Modern aesthetic", "Color gradients"],
      useCases: ["Tech startups", "Design agencies", "Creative studios", "Modern brands"],
      codePreview: `<div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 overflow-hidden">
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full opacity-20"></div>
    <div className="absolute top-40 right-32 w-20 h-20 bg-yellow-400 transform rotate-45 opacity-30"></div>
    <div className="absolute bottom-32 left-1/3 w-24 h-24 bg-pink-400 rounded-full opacity-25"></div>
  </div>
  <div className="relative z-10 flex items-center justify-center min-h-screen text-center text-white px-8">
    <div>
      <h1 className="text-5xl font-bold mb-4">Creative Solutions</h1>
      <p className="text-xl mb-8">Where innovation meets imagination</p>
      <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold">Start Creating</button>
    </div>
  </div>
</div>`,
      mockup: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
    },
    {
      title: "Interactive Elements",
      description: "Engaging hover effects, animations, and interactive components",
      characteristics: ["Hover animations", "Interactive buttons", "Micro-interactions", "Engaging transitions"],
      useCases: ["Gaming sites", "Interactive portfolios", "Entertainment", "Creative agencies"],
      codePreview: `<div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
  <div className="text-center">
    <h1 className="text-5xl font-bold mb-4 hover:text-cyan-400 transition-colors cursor-pointer">
      Interactive Design
    </h1>
    <p className="text-xl mb-8 text-gray-300">Hover and explore the possibilities</p>
    <div className="flex gap-4 justify-center">
      <button className="group bg-cyan-500 px-6 py-3 rounded-lg transform hover:scale-105 transition-all">
        <span className="group-hover:hidden">Hover Me</span>
        <span className="hidden group-hover:inline">Amazing!</span>
      </button>
      <button className="bg-transparent border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors">
        Interactive
      </button>
    </div>
  </div>
</div>`,
      mockup: "bg-gray-800 border border-cyan-400 relative"
    }
  ];

  const researchToolkit = [
    {
      phase: "Discover",
      duration: "Week 1", 
      icon: Search,
      insight: "What are users really trying to accomplish, and what's blocking them?",
      methods: [
        "Stakeholder interviews",
        "User journey mapping", 
        "Competitive analysis",
        "Data analysis review"
      ],
      deliverables: [
        "Research plan",
        "User personas", 
        "Problem statements",
        "Opportunity matrix"
      ]
    },
    {
      phase: "Define",
      duration: "Week 2",
      icon: Target,
      insight: "How can we frame the problem to create the most impactful solution?",
      methods: [
        "Affinity mapping",
        "How Might We sessions",
        "Priority matrix creation",
        "Success metrics definition"
      ],
      deliverables: [
        "Problem definition",
        "Design requirements",
        "Success criteria", 
        "Scope boundaries"
      ]
    },
    {
      phase: "Design", 
      duration: "Week 3",
      icon: PenTool,
      insight: "What interaction patterns will feel most natural and effective for users?",
      methods: [
        "Rapid prototyping",
        "Design system integration",
        "Accessibility review",
        "Technical feasibility check"
      ],
      deliverables: [
        "Low-fi wireframes",
        "Interactive prototypes",
        "Design specifications",
        "Component library"
      ]
    },
    {
      phase: "Validate",
      duration: "Week 4",
      icon: CheckCircle,
      insight: "Does our solution actually solve the problem better than existing approaches?",
      methods: [
        "Usability testing",
        "A/B testing",
        "Performance benchmarking",
        "Accessibility testing"
      ],
      deliverables: [
        "Test results",
        "Iteration recommendations",
        "Launch readiness report",
        "Performance metrics"
      ]
    }
  ];

  const researchMethods = [
    {
      title: "Military-Grade User Research",
      description: "Systematic observation and analysis techniques adapted from intelligence gathering",
      icon: <Search className="w-6 h-6" />,
      techniques: ["Structured interviews", "Behavioral observation", "Task analysis", "Performance metrics"]
    },
    {
      title: "Systems Analysis Approach", 
      description: "Understanding complex interconnections between users, technology, and business goals",
      icon: <Database className="w-6 h-6" />,
      techniques: ["Process mapping", "Stakeholder analysis", "Risk assessment", "Impact analysis"]
    },
    {
      title: "Agile Research Methods",
      description: "Rapid, iterative research cycles that adapt to changing requirements",
      icon: <Zap className="w-6 h-6" />,
      techniques: ["Sprint planning", "Daily standups", "Retrospectives", "Continuous testing"]
    },
    {
      title: "Data-Driven Insights",
      description: "Combining qualitative insights with quantitative validation",
      icon: <BarChart3 className="w-6 h-6" />,
      techniques: ["Analytics review", "A/B testing", "Heat mapping", "Conversion analysis"]
    }
  ];

  const skillsArsenal = [
    {
      category: "Research & Analysis",
      skills: ["User Interviews", "Usability Testing", "Data Analysis", "Competitive Research", "Journey Mapping"],
      icon: <Search className="w-8 h-8" />
    },
    {
      category: "Design & Prototyping", 
      skills: ["Wireframing", "Prototyping", "Design Systems", "Interaction Design", "Visual Design"],
      icon: <PenTool className="w-8 h-8" />
    },
    {
      category: "Collaboration & Communication",
      skills: ["Stakeholder Management", "Workshop Facilitation", "Presentation Design", "Technical Documentation"],
      icon: <Users className="w-8 h-8" />
    },
    {
      category: "Technical Implementation",
      skills: ["Front-end Development", "System Architecture", "Performance Optimization", "Quality Assurance"],
      icon: <Database className="w-8 h-8" />
    }
  ];

  const aiCollaborationComponents = [
    {
      title: "Hero Sections",
      variants: 6,
      icon: <Layout className="w-6 h-6" />,
      description: "Full-width backgrounds, split layouts, minimalist typography, carousels, geometric patterns, interactive elements",
      keywords: "immersive, cinematic, brand-focused, balanced, structured"
    },
    {
      title: "Navigation",
      variants: 6,
      icon: <Navigation className="w-6 h-6" />,
      description: "Horizontal menus, hamburger menus, fixed navigation, mega menus, breadcrumbs, sidebar navigation",
      keywords: "classic, mobile-first, persistent, comprehensive, contextual"
    },
    {
      title: "Image Galleries",
      variants: 6,
      icon: <Image className="w-6 h-6" />,
      description: "Grid layouts, masonry, lightbox modals, thumbnail carousels, before/after sliders, parallax scrolling",
      keywords: "organized, dynamic, immersive, comparative, depth-creating"
    },
    {
      title: "Forms",
      variants: 6,
      icon: <FileText className="w-6 h-6" />,
      description: "Standard labeled fields, floating labels, Material Design, card-based forms, multi-step, validation states",
      keywords: "accessible, modern, interactive, segmented, feedback-oriented"
    },
    {
      title: "Footers",
      variants: 5,
      icon: <Target className="w-6 h-6" />,
      description: "Minimalist copyright, detailed multi-column, fat footer sitemaps, newsletter signups, back-to-top buttons",
      keywords: "unobtrusive, comprehensive, exhaustive, engagement-focused"
    },
    {
      title: "CTA Buttons",
      variants: 5,
      icon: <MousePointer className="w-6 h-6" />,
      description: "Primary/secondary/tertiary hierarchy, ghost buttons, icon buttons, hover states, multiple sizes",
      keywords: "hierarchical, subtle, compact, interactive, scalable"
    },
    {
      title: "Typography",
      variants: 5,
      icon: <Code className="w-6 h-6" />,
      description: "Heading hierarchy (H1-H6), paragraph text, blockquotes, lists, link states",
      keywords: "hierarchical, readable, emphatic, structured, navigational"
    },
    {
      title: "Card Components",
      variants: 5,
      icon: <Palette className="w-6 h-6" />,
      description: "Basic info cards, product cards, article cards, user profiles, interactive hover reveals",
      keywords: "modular, conversion-focused, content-oriented, personal, engaging"
    }
  ];

  const backendComponents = [
    {
      title: "Authentication & Authorization",
      icon: <Key className="w-6 h-6" />,
      description: "JWT tokens, OAuth2, RBAC, session management, password policies",
      technologies: ["JWT", "OAuth2", "RBAC", "Sessions"],
      keywords: "secure, scalable, standards-compliant"
    },
    {
      title: "API Design & Development",
      icon: <Globe className="w-6 h-6" />,
      description: "RESTful APIs, GraphQL, documentation, versioning, rate limiting",
      technologies: ["REST", "GraphQL", "OpenAPI", "Swagger"],
      keywords: "scalable, documented, efficient"
    },
    {
      title: "Database Architecture",
      icon: <Database className="w-6 h-6" />,
      description: "Schema design, optimization, migrations, indexing, relationships",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
      keywords: "performant, normalized, scalable"
    },
    {
      title: "Real-time Features",
      icon: <Zap className="w-6 h-6" />,
      description: "WebSockets, push notifications, live updates, event streaming",
      technologies: ["WebSockets", "Socket.io", "SSE", "WebRTC"],
      keywords: "responsive, real-time, interactive"
    },
    {
      title: "Security & Validation",
      icon: <Shield className="w-6 h-6" />,
      description: "Input sanitization, CORS, rate limiting, OWASP compliance",
      technologies: ["Helmet", "CORS", "Joi", "OWASP"],
      keywords: "secure, validated, protected"
    },
    {
      title: "Deployment & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      description: "Cloud providers, containers, CI/CD, serverless functions",
      technologies: ["AWS", "Docker", "GitHub Actions", "Vercel"],
      keywords: "automated, scalable, reliable"
    },
    {
      title: "Monitoring & Analytics",
      icon: <Activity className="w-6 h-6" />,
      description: "Logging, error tracking, performance monitoring, metrics",
      technologies: ["Winston", "Sentry", "DataDog", "New Relic"],
      keywords: "observable, measurable, actionable"
    },
    {
      title: "Integration Services",
      icon: <Settings className="w-6 h-6" />,
      description: "Payment gateways, third-party APIs, file storage, email services",
      technologies: ["Stripe", "AWS S3", "SendGrid", "Twilio"],
      keywords: "connected, extensible, reliable"
    }
  ];

  const handleDownloadStyleGuide = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Web Design Style Guide for AI Full-Stack Developer Collaboration",
                  bold: true,
                  size: 32,
                }),
              ],
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "A Collaborative Reference for UX Design & AI-Powered Development",
                  italics: true,
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 600 }
            }),

            // Objective Section
            new Paragraph({
              children: [new TextRun({ text: "Objective", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "This document serves as a comprehensive visual and descriptive guide to diverse web design styles for key components. It's intended to facilitate efficient and precise collaboration between UX designers and AI Full-Stack Developers, ensuring consistent design language and accelerating the iteration process."
                })
              ],
              spacing: { after: 300 }
            }),

            // Target Audience
            new Paragraph({
              children: [new TextRun({ text: "Target Audience", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• UX Designers: For inspiration, establishing visual direction, and communicating design intent." })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• AI Full-Stack Developers: For understanding design characteristics, translating styles into code, and generating appropriate web components." })],
              spacing: { after: 400 }
            }),

            // Component Sections
            ...aiCollaborationComponents.map(component => [
              new Paragraph({
                children: [new TextRun({ text: `${component.title} (${component.variants} Variants)`, bold: true, size: 20 })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Description: ${component.description}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Keywords: ${component.keywords}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: "Use Cases: Modern web applications, responsive designs, user-focused interfaces" })],
                spacing: { after: 300 }
              })
            ]).flat(),

            // Implementation Guidelines
            new Paragraph({
              children: [new TextRun({ text: "Implementation Guidelines", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Always consider responsive design across all screen sizes" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Maintain accessibility standards (WCAG 2.1 AA)" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Use semantic HTML structure" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Implement proper focus states and keyboard navigation" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Test across multiple browsers and devices" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Follow established design system tokens and variables" })],
              spacing: { after: 300 }
            }),

            // Best Practices
            new Paragraph({
              children: [new TextRun({ text: "Best Practices", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Prioritize user experience over visual complexity" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Ensure fast loading times and optimal performance" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Use progressive enhancement for advanced features" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Maintain consistency across similar components" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Document component variants and usage guidelines" })],
              spacing: { after: 400 }
            }),

            new Paragraph({
              children: [
                new TextRun({ text: `Generated on: ${new Date().toLocaleDateString()}`, italics: true }),
                new TextRun({ text: " | Version: 1.0", italics: true })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { before: 400 }
            }),
          ],
        },
      ],
    });

    try {
      const buffer = await Packer.toBlob(doc);
      const url = URL.createObjectURL(buffer);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-UX-Collaboration-Style-Guide.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating Word document:', error);
      // Fallback to text file
      const content = "Web Design Style Guide for AI Full-Stack Developer Collaboration - Error generating Word document. Please try again.";
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-UX-Collaboration-Style-Guide.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleDownloadBackendGuide = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "AI Backend Generation Prompt for PWAs & Mobile Apps",
                  bold: true,
                  size: 32,
                }),
              ],
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Generating Scalable and Secure Backend Infrastructure from UX Designs",
                  italics: true,
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 600 }
            }),

            // Objective Section
            new Paragraph({
              children: [new TextRun({ text: "Objective", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "To generate the backend infrastructure, APIs, and database schemas necessary to support the functionality of a Progressive Web App (PWA) and/or Standalone Mobile Application, based on provided UX design specifications. The goal is to produce a secure, scalable, and maintainable backend that integrates seamlessly with the front-end designs generated by the UX AI."
                })
              ],
              spacing: { after: 300 }
            }),

            // Target Audience
            new Paragraph({
              children: [new TextRun({ text: "Target Audience", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• AI Full-Stack Developer: Interpreting UX design requirements to generate backend code, database structures, and deployment configurations." })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Human Developers/Reviewers: Reviewing, refining, and extending the AI-generated backend code." })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• UX Designer: (Implicitly) Relying on the AI's ability to create a functional backend that supports their design." })],
              spacing: { after: 400 }
            }),

            // Backend Components
            ...backendComponents.map(component => [
              new Paragraph({
                children: [new TextRun({ text: component.title, bold: true, size: 20 })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Description: ${component.description}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Technologies: ${component.technologies.join(', ')}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Keywords: ${component.keywords}` })],
                spacing: { after: 300 }
              })
            ]).flat(),

            // Technical Requirements
            new Paragraph({
              children: [new TextRun({ text: "Core Technical Requirements", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• User Management: Registration, login, authentication (JWT, OAuth2), password reset, user profile management, role-based access control" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Data Management: CRUD operations for specific entities, anticipated data models, database optimization" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Real-time Capabilities: Chat, notifications, live updates requiring WebSockets or similar technologies" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• External Integrations: Payment gateways, third-party APIs, maps, weather, social media logins" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• File Storage: User avatars, product images, document uploads with proper security" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Search & Filtering: Backend logic for robust search capabilities and filtering options" })],
              spacing: { after: 300 }
            }),

            // Security Considerations
            new Paragraph({
              children: [new TextRun({ text: "Security & Best Practices", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Input Validation: Comprehensive validation and sanitization of all user inputs" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• CORS Policies: Proper cross-origin resource sharing configuration" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Rate Limiting: API rate limiting to prevent abuse and ensure fair usage" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• OWASP Top 10: Mitigation strategies for common security vulnerabilities" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Secure Credential Handling: Proper encryption and storage of sensitive data" })],
              spacing: { after: 300 }
            }),

            // Implementation Guidelines
            new Paragraph({
              children: [new TextRun({ text: "Implementation Guidelines", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Generate well-organized project structure with clear separation of concerns" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Produce clean, well-commented, and idiomatic code following best practices" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Create comprehensive API documentation (OpenAPI/Swagger specification)" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Include basic unit tests and integration tests for critical endpoints" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Provide deployment scripts and configuration files for chosen cloud provider" })],
              spacing: { after: 400 }
            }),

            new Paragraph({
              children: [
                new TextRun({ text: `Generated on: ${new Date().toLocaleDateString()}`, italics: true }),
                new TextRun({ text: " | Version: 1.0", italics: true })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { before: 400 }
            }),
          ],
        },
      ],
    });

    try {
      const buffer = await Packer.toBlob(doc);
      const url = URL.createObjectURL(buffer);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-Backend-Generation-Guide.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating Word document:', error);
      // Fallback to text file
      const content = "AI Backend Generation Prompt for PWAs & Mobile Apps - Error generating Word document. Please try again.";
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-Backend-Generation-Guide.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="insights-hero" className="section pt-24 pb-16 gradient-hero">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Research Methodologies & Insights
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Deep Dive into <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">Research & Design</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Explore the methodologies, tools, and insights that drive user-centered design decisions. 
              From military precision to agile innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sprint-Based Problem Solving */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-agile-primary text-agile-primary">
              Agile Research Methodology
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Sprint-Based <span className="text-agile-primary">Problem Solving</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              My systematic approach to UX research combines agile methodologies with 
              systems analysis for rapid, iterative problem solving.
            </p>
          </motion.div>

          {/* Agile Methodology Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
          >
            <div className="relative overflow-hidden rounded-xl order-2 lg:order-1">
              <div className="h-48 sm:h-64 lg:h-80">
                <img 
                  src={circuitBoard} 
                  alt="Complex systems and interconnected processes" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 border-agile-primary text-agile-primary">
                Systematic Approach
              </Badge>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Precision in <span className="text-agile-primary">Every Sprint</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Just like complex circuit boards require methodical design, every research sprint follows 
                a structured approach to ensure reliable, actionable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Plan</Badge>
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Research</Badge>
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Analyze</Badge>
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Iterate</Badge>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {researchToolkit.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="glass border-agile-primary/20 shadow-agile hover:shadow-agile/50 transition-all duration-300 h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-agile-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                      <phase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-agile-primary" />
                    </div>
                    <CardTitle className="text-agile-primary text-lg sm:text-xl">{phase.phase}</CardTitle>
                    <Badge variant="outline" className="w-fit border-agile-secondary text-agile-secondary text-xs sm:text-sm">
                      {phase.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Key Research Question */}
                      <div className="bg-agile-primary/10 p-3 rounded-lg">
                        <h4 className="font-semibold text-agile-primary mb-2 text-sm">Key Question</h4>
                        <p className="text-sm text-agile-primary font-medium italic">
                          {phase.insight}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Methods</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.methods.map((method, methodIndex) => (
                            <li key={methodIndex}>• {method}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Deliverables</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex}>• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methods Deep Dive */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Research Methodology
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Research <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Methods & Approaches</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit combining military precision, systems thinking, and agile methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {researchMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {method.techniques.map((technique, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-success text-success">
              Technical Expertise
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Skills <span className="text-gradient bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning research, design, development, and systems analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillsArsenal.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-success text-success">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Military to UX Journey Timeline */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-military-primary text-military-primary">
              Career Evolution
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From <span className="text-military-primary">Military Precision</span> to <span className="text-agile-primary">UX Innovation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A unique journey that bridges tactical excellence with user-centered design thinking.
            </p>
          </motion.div>

          <div className="relative">
            <Card className="glass border-none">
              <CardContent className="p-8">
                <div className="text-center">
                  <Lightbulb className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Bridging Two Worlds</h3>
                  <p className="text-muted-foreground">
                    My military background provides unmatched discipline and systems thinking, 
                    while my UX expertise ensures every solution is human-centered and accessible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Collaboration Framework */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              AI Collaboration
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From Design Concept to <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Code Implementation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive style guide that bridges the gap between UX design vision and AI-powered development, 
              ensuring consistent, efficient, and precise collaboration.
            </p>
          </motion.div>

          {/* Framework Overview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="glass border-accent/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Code className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Design-to-Code Efficiency</h3>
                    <p className="text-sm text-muted-foreground">
                      Accelerates development by 60% through clear visual examples and AI-friendly descriptors
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Consistent Design Language</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensures visual and functional consistency across all AI-generated components
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Rapid Iteration</h3>
                    <p className="text-sm text-muted-foreground">
                      Enables quick design variations and A/B testing through standardized component patterns
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Component Categories Grid */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Component Style Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiCollaborationComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => {
                    if (component.title === "Hero Sections") {
                      setSelectedComponent("Hero Sections");
                      setIsModalOpen(true);
                    }
                  }}
                >
                  <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          {component.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{component.title}</h4>
                        <Badge variant="outline" className="mb-3 border-accent text-accent text-xs">
                          {component.variants} Variants
                        </Badge>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                          {component.description}
                        </p>
                        <div className="text-xs text-accent font-medium">
                          {component.keywords}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="glass border-primary/20 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Download className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Complete Style Guide</h3>
                  <p className="text-muted-foreground mb-6">
                    Download the comprehensive Web Design Style Guide for AI Full-Stack Developer Collaboration. 
                    Includes detailed descriptions, use cases, and AI integration keywords for all component categories.
                  </p>
                </div>
                <button
                  onClick={handleDownloadStyleGuide}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Style Guide
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  A comprehensive reference for UX designers and AI developers
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AI Backend Generation Framework */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Backend Development
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From UX Requirements to <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">Scalable Architecture</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-powered backend generation framework that transforms UX design specifications into secure, 
              scalable infrastructure for PWAs and mobile applications.
            </p>
          </motion.div>

          {/* Framework Overview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="glass border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Server className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Infrastructure Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically generates database schemas, APIs, and deployment configurations from UX specifications
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Security by Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in security best practices including authentication, validation, and OWASP compliance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cloud-Ready Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready for AWS, Google Cloud, Azure with containerization and CI/CD pipeline support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Components Grid */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Backend Architecture Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {component.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{component.title}</h4>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                          {component.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3 justify-center">
                          {component.technologies.slice(0, 2).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-primary text-primary text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-xs text-primary font-medium">
                          {component.keywords}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="glass border-primary/20 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Download className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">AI Backend Generation Guide</h3>
                  <p className="text-muted-foreground mb-6">
                    Download the comprehensive AI Backend Generation Prompt for PWAs & Mobile Apps. 
                    Includes technical requirements, security considerations, and implementation guidelines for scalable backend infrastructure.
                  </p>
                </div>
                <button
                  onClick={handleDownloadBackendGuide}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Backend Guide
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  Complete framework for AI-powered backend development
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Hero Sections Variants Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Hero Section Variants
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {heroSectionVariants.map((variant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-muted">
                  <CardContent className="p-6">
                    {/* Visual Mockup */}
                    <div className={`w-full h-32 rounded-lg mb-4 ${variant.mockup} flex items-center justify-center relative overflow-hidden`}>
                      {variant.title === "Minimalist/Typography-Focused" && (
                        <div className="text-center">
                          <div className="text-sm font-light text-gray-600">Less is</div>
                          <div className="text-lg font-bold text-gray-900">More</div>
                        </div>
                      )}
                      {variant.title === "Carousel/Slider" && (
                        <>
                          <div className="text-white text-center">
                            <div className="text-sm font-bold">Slide 1</div>
                          </div>
                          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                          </div>
                        </>
                      )}
                      {variant.title === "Geometric/Abstract Background" && (
                        <>
                          <div className="absolute top-2 left-2 w-6 h-6 bg-cyan-300 rounded-full opacity-60"></div>
                          <div className="absolute top-4 right-4 w-4 h-4 bg-yellow-300 transform rotate-45 opacity-70"></div>
                          <div className="absolute bottom-3 left-1/3 w-5 h-5 bg-pink-300 rounded-full opacity-50"></div>
                          <div className="text-white text-center">
                            <div className="text-sm font-bold">Creative</div>
                          </div>
                        </>
                      )}
                      {variant.title === "Interactive Elements" && (
                        <div className="text-center">
                          <div className="text-cyan-300 text-sm font-bold mb-1">Interactive</div>
                          <div className="w-12 h-6 bg-cyan-500 rounded text-xs flex items-center justify-center text-white">
                            Hover
                          </div>
                        </div>
                      )}
                      {(variant.title === "Full-Width Background Image/Video" || variant.title === "Split Layout") && (
                        <div className="text-white text-center">
                          <div className="text-sm font-bold">{variant.title.includes("Full-Width") ? "Hero Title" : "Innovation"}</div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-2">{variant.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{variant.description}</p>
                    
                    {/* Characteristics */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Key Characteristics:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {variant.characteristics.map((char, charIndex) => (
                          <div key={charIndex} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                            {char}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Best Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {variant.useCases.map((useCase, caseIndex) => (
                          <Badge key={caseIndex} variant="outline" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Code Preview */}
                    <details className="group-hover:bg-muted/20 p-2 rounded transition-colors">
                      <summary className="text-sm font-medium cursor-pointer text-primary">
                        View Code Example
                      </summary>
                      <pre className="text-xs bg-muted p-3 rounded mt-2 overflow-x-auto">
                        <code>{variant.codePreview}</code>
                      </pre>
                    </details>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Insights;
