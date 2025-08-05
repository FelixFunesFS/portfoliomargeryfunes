import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  MousePointer
} from 'lucide-react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import circuitBoard from '@/assets/circuit-board.jpg';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Insights = () => {
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

      <Footer />
    </div>
  );
};

export default Insights;
