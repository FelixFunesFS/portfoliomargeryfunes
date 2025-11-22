import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ResearchMethodologyAndProcess from '@/components/ResearchMethodologyAndProcess';
import ResearchHero from '@/components/ResearchHero';
import BrandMarquee from '@/components/BrandMarquee';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import { ProcessStoryGrid } from '@/components/ProcessStoryGrid';
import { Target, Zap, TrendingUp, Users, BarChart3, Layers, GitBranch, RefreshCw, CheckCircle, ArrowRight, Radar, Settings, Database, Code, LineChart, Shield, Rocket, Brain, Clock, Award, ChevronDown, Eye, MapPin, ExternalLink, Globe, Monitor, Smartphone, Heart, Home as HomeIcon, Trophy, GraduationCap, Lightbulb, Search, TestTube, Download, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import WebDesignCard from '@/components/WebDesignCard';

import UnifiedImpactMetrics from '@/components/UnifiedImpactMetrics';
import CareerProgression from '@/components/CareerProgression';
import SkillItem from '@/components/SkillItem';
import CoreCompetenciesGrid from '@/components/CoreCompetenciesGrid';
import SoftSkillsShowcase from '@/components/SoftSkillsShowcase';
import { TrainingCertifications } from '@/components/TrainingCertifications';
import TechnicalSkillsMatrix from '@/components/TechnicalSkillsMatrix';
import ResearchArtifactPreview from '@/components/ResearchArtifactPreview';
import PortfolioDownload from '@/components/PortfolioDownload';
import Footer from '@/components/Footer';
import elSalvadorImage from '@/assets/el-salvador-tourism.png';
import soulTrainHomepage from '@/assets/soul-train-homepage.png';
import visionsOfHopeHero from '@/assets/visions-of-hope-hero.png';
import bbvawHero from '@/assets/bbvaw-hero.png';

// Import images
import circuitBoard from '@/assets/circuit-board.jpg';
import robotInnovation from '@/assets/robot-innovation.jpg';
import researchDesk from '@/assets/research-desk.jpg';
import abstractNight from '@/assets/abstract-night.jpg';
import caseStudy1Dashboard from '@/assets/case-study-1-dashboard.jpg';
import caseStudy5Automation from '@/assets/case-study-5-automation.jpg';
import caseStudy3Slides from '@/assets/case-study-3-slides.jpg';
import caseStudy4Workspace from '@/assets/case-study-4-workspace.jpg';
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, {
    once: true
  });
  const navigate = useNavigate();
  const handleViewCaseStudy = (projectTitle: string) => {
    // Map project titles to case study IDs
    const projectToCaseStudyMap: {
      [key: string]: number;
    } = {
      "Soul Train's Eatery": 8,
      "Souls Feeding Souls": 9,
      "Visions of Hope": 10,
      "Veteran's Benefits Beyond the VA Wall": 11,
      "Discover El Salvador": 12
    };
    const caseStudyId = projectToCaseStudyMap[projectTitle];
    if (caseStudyId) {
      navigate('/case-studies', {
        state: {
          selectedStudyId: caseStudyId
        }
      });
    }
  };
  useEffect(() => {
    document.title = "UX Researcher & Human-Centered Designer | Margery Funes";
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const radarVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  // Research Stories Data
  const researchStories = [{
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
    reflection: {
      whatWorkedWell: ["User-centered design approach - shadowed 12 analysts to understand real workflows", "Iterative prototyping with weekly feedback loops kept stakeholders engaged", "Leveraging existing SharePoint infrastructure reduced training overhead"],
      lessonsLearned: "Starting with the 'why' behind manual processes revealed hidden automation opportunities I initially missed. Users often work around broken systems rather than report them.",
      wouldDoDifferently: ["Conduct cross-base user testing earlier to catch regional workflow variations", "Build in mobile-first design from day one - 40% of users needed field access", "Create video tutorials alongside rollout - would have reduced support tickets by ~60%"],
      potentialImpact: "With mobile optimization and video training, could have achieved 60% faster adoption and saved an additional 200 hours in support time."
    },
    color: "systems",
    caseStudyId: 1
  }, {
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
    reflection: {
      whatWorkedWell: ["HTML parsing approach was resilient - worked across multiple GUI system updates without breaking", "SQL data integration eliminated 90% of manual typing by pre-filling common entries", "Simple Excel interface meant zero learning curve for 50+ non-technical users"],
      lessonsLearned: "Understanding the psychology of repetitive work was critical. Users weren't just making mistakes - they were developing unhealthy coping mechanisms (copying data to sticky notes) that introduced more errors.",
      wouldDoDifferently: ["Add batch processing for multiple records simultaneously - some users handled 10+ entries/day", "Build error recovery features for network interruptions during GUI interaction", "Create audit logs to track which entries were automated vs manual for quality control"],
      potentialImpact: "Batch processing could save an additional 30 minutes/day per heavy user (~130 hours/year) and audit logs would provide compliance documentation worth ~$50K in audit costs."
    },
    color: "agile",
    caseStudyId: 5
  }, {
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
    reflection: {
      whatWorkedWell: ["Form-driven UI made complex data entry feel simple - eliminated 23 fields of manual work", "Template-based approach ensured brand consistency across all 23 bases automatically", "Built-in data validation prevented formatting errors before they reached PowerPoint"],
      lessonsLearned: "The biggest time-saver wasn't the automation itself - it was eliminating decision fatigue. Users spent 40% of their time just deciding which template to use and where to put data.",
      wouldDoDifferently: ["Add a 'preview before generate' feature to catch mistakes earlier in the workflow", "Create preset configurations for common scenarios to reduce form fields by 60%", "Build version control into the tool - users often needed to regenerate previous weeks"],
      potentialImpact: "Preview mode and presets could reduce the 5-minute process to under 2 minutes, saving an additional 90 hours/year across all analysts."
    },
    color: "success",
    caseStudyId: 3
  }, {
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
    reflection: {
      whatWorkedWell: ["Role-based access controls prevented information overload - users only saw what they needed", "CMS-driven architecture let non-technical staff update content without IT support", "Integrated dashboards eliminated need to switch between 5+ different tools"],
      lessonsLearned: "Scalability isn't just about handling more users - it's about maintaining simplicity as complexity grows. The modular workspace design was crucial for this.",
      wouldDoDifferently: ["Implement search functionality from day one - users still relied on folder navigation too much", "Add usage analytics to identify underutilized features and confusing workflows", "Create interactive onboarding tours instead of static documentation - would boost retention"],
      potentialImpact: "Search functionality and analytics could reduce onboarding time to 2-3 days (from current 1 week) and identify 15-20 workflow improvements within the first month."
    },
    color: "accent",
    caseStudyId: 4
  }];

  // Research-First Agile Toolkit
  const researchToolkit = [{
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

  // Skills Arsenal with detailed breakdown and descriptions
  const filterCategories = ['All', 'UX Research', 'Full Stack Development', 'AI Development & Automation'];
  const skillCategories = {
    'UX Research': [{
      name: 'User Research & Testing',
      level: 94,
      proficiency: 'Expert',
      description: 'Conducted 50+ user interviews, surveys, and usability testing sessions across military and civilian domains. Led journey mapping and persona development for enterprise systems.'
    }, {
      name: 'UX Design (Figma, Design Systems)',
      level: 88,
      proficiency: 'Advanced',
      description: 'Created comprehensive design systems and user interfaces for enterprise applications and military tools'
    }, {
      name: 'Systems Analysis',
      level: 98,
      proficiency: 'Expert',
      description: 'Architected enterprise solutions through systematic logical frameworks, mapping complex data relationships and user workflows for 10,000+ users'
    }, {
      name: 'Strategic Planning (Vision & Roadmaps)',
      level: 95,
      proficiency: 'Expert',
      description: 'Developed multi-year roadmaps and vision documents for complex military and enterprise initiatives'
    }, {
      name: 'Agile Methodologies (Scrum, Kanban, Lean)',
      level: 95,
      proficiency: 'Expert',
      description: 'Led Scrum ceremonies, sprint planning, and backlog grooming for cross-functional teams of 20+ members'
    }, {
      name: 'Process Optimization',
      level: 95,
      proficiency: 'Expert',
      description: 'Applied structured logical analysis to streamline operations, creating decision trees and automated workflows that reduced task completion time by 40%'
    }],
    'Full Stack Development': [{
      name: 'Prototyping (Interactive Flows, User Testing)',
      level: 85,
      proficiency: 'Advanced',
      description: 'Built high-fidelity prototypes and conducted iterative testing with 200+ users across multiple domains'
    }, {
      name: 'HTML (Semantic & Accessible)',
      level: 80,
      proficiency: 'Foundational',
      description: 'Built semantic, accessible web structures using modern HTML5 standards and ARIA guidelines for enterprise applications'
    }, {
      name: 'CSS & Modern Styling (Tailwind, Grid, Flexbox)',
      level: 77,
      proficiency: 'Foundational',
      description: 'Crafted responsive layouts using CSS Grid, Flexbox, Tailwind utility-first approach, and modern CSS techniques including custom properties and animations'
    }, {
      name: 'JavaScript/React',
      level: 75,
      proficiency: 'Foundational',
      description: 'Developed interactive web applications using modern JavaScript ES6+ and React component architecture for complex user interfaces'
    }, {
      name: 'SEO (Search Engine Optimization)',
      level: 82,
      proficiency: 'Advanced',
      description: 'Implemented comprehensive SEO strategies including technical optimization, semantic HTML, meta tags, structured data, performance optimization, and analytics tracking to improve search visibility and user experience'
    }, {
      name: 'TypeScript',
      level: 70,
      proficiency: 'Foundational',
      description: 'Enhanced JavaScript applications with TypeScript for improved code reliability, developer experience, and maintainable codebases'
    }, {
      name: 'Version Control/Git',
      level: 78,
      proficiency: 'Foundational',
      description: 'Managed collaborative development workflows using Git branching strategies, code reviews, and deployment pipelines'
    }, {
      name: 'API Integration/REST',
      level: 85,
      proficiency: 'Advanced',
      description: 'Connected frontend applications to backend services through RESTful APIs, including authentication, data management, and error handling'
    }, {
      name: 'SharePoint Development',
      level: 90,
      proficiency: 'Expert',
      description: 'Built custom solutions, workflows, and integrations for enterprise environments serving thousands of users'
    }],
    'AI Development & Automation': [{
      name: 'AI-Augmented Development (Prompting, Prototyping, Code Gen)',
      level: 82,
      proficiency: 'Advanced',
      description: 'Leveraged AI tools like ChatGPT, Claude, and GitHub Copilot to accelerate development workflows, craft effective prompts for problem-solving, generate optimized code solutions, and rapidly prototype component variations'
    }, {
      name: 'No-Code/Low-Code Development',
      level: 88,
      proficiency: 'Advanced',
      description: 'Built responsive websites and applications using Webflow, Wix, Squarespace, and Elementor for rapid deployment and client solutions'
    }, {
      name: 'Continuous Learning & Adaptation',
      level: 90,
      proficiency: 'Expert',
      description: 'Actively exploring emerging technologies, staying current with AI advancements, and adapting development workflows to leverage cutting-edge tools'
    }, {
      name: 'VBA/Automation',
      level: 88,
      proficiency: 'Advanced',
      description: 'Automated complex data processing tasks, reducing manual effort by 80% for financial and operational reporting'
    }, {
      name: 'SQL/Database',
      level: 82,
      proficiency: 'Advanced',
      description: 'Designed and optimized database structures for mission-critical applications with complex data relationships'
    }, {
      name: 'Tableau/Analytics',
      level: 80,
      proficiency: 'Advanced',
      description: 'Created executive dashboards and data visualizations supporting strategic decision-making for leadership teams'
    }, {
      name: 'Power Platform',
      level: 85,
      proficiency: 'Advanced',
      description: 'Developed end-to-end business solutions using Power Apps, Power Automate, and Power BI for enterprise workflows'
    }]
  };

  // Flatten skills for filtering
  const allSkills = Object.entries(skillCategories).flatMap(([category, skills]) => skills.map(skill => ({
    ...skill,
    category,
    proficiency: skill.proficiency as 'Expert' | 'Advanced' | 'Foundational'
  })));
  const filteredSkillCategories = selectedFilter === 'All' ? skillCategories : {
    [selectedFilter]: skillCategories[selectedFilter as keyof typeof skillCategories]
  };

  // Web Design Portfolio Data
  const webDesigns = [{
    title: "Soul Train's Eatery",
    client: "Charleston Catering Company",
    location: "Charleston, SC",
    platform: "Lovable",
    description: "User research revealed catering clients struggled with unclear menu options and complex ordering. Designed intuitive system prioritizing visual menu discovery and simplified ordering flow.",
    challenge: "Manual order taking causing errors, missed orders, and inefficient kitchen workflow during peak catering seasons.",
    solution: "Research-informed ordering system with real-time inventory, automated notifications, and streamlined kitchen dashboard based on user workflow analysis.",
    assumptions: "Mobile-first usage by customers, staff comfortable with digital tools, integration with existing POS systems.",
    limitations: "Limited budget for extensive customization, tight timeline for catering season launch, legacy payment system constraints.",
    outcomes: "40% reduction in order errors, 60% faster order processing, improved customer satisfaction and repeat business.",
    keyOutcomes: ["User research insights drove 40% reduction in order errors and 60% faster processing"],
    features: ["Online Ordering", "Inventory Management", "Customer Dashboard", "Mobile Optimization", "Payment Integration"],
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    category: "catering",
    icon: Smartphone,
    color: "emerald-500",
    image: soulTrainHomepage,
    link: "https://train-catering-creations.lovable.app"
  }, {
    title: "Discover El Salvador",
    client: "Personal Tour Guide Services",
    location: "El Salvador",
    platform: "Lovable",
    description: "Research showed travelers wanted authentic local experiences beyond generic tours. Designed immersive storytelling platform highlighting personalized jungle and volcano beach adventures.",
    challenge: "Generic travel sites don't capture unique local experiences, difficulty communicating personalized tour value.",
    solution: "Visual storytelling platform informed by traveler preference research, featuring immersive galleries and custom itinerary builder for authentic experiences.",
    assumptions: "Visual appeal drives booking decisions, international travelers have good internet, social proof influences choices.",
    limitations: "Content updates needed from non-technical tour guides, seasonal booking patterns, weather-dependent activities.",
    outcomes: "300% increase in direct bookings, expanded international client base, featured in travel publications.",
    keyOutcomes: ["Research-driven storytelling increased direct bookings by 300%"],
    features: ["Interactive Maps", "Photo Galleries", "Custom Itineraries", "Booking System", "Weather Integration"],
    tools: ["React", "TypeScript", "Mapbox", "Cloudinary", "Payment APIs"],
    category: "travel",
    icon: Globe,
    color: "teal-500",
    image: elSalvadorImage,
    link: "https://discover-elsalvador.com"
  }, {
    title: "Benefits Beyond the VA Wall",
    client: "Veterans Support Services",
    location: "Worldwide",
    platform: "Webflow",
    description: "Discovered veterans struggled with complex benefit bureaucracy through user interviews. Designed intuitive resource portal with guided navigation based on veteran mental models.",
    challenge: "Veterans struggling to find and access benefits due to complex bureaucracy and scattered information sources.",
    solution: "User research-informed portal with intuitive navigation, benefit calculators, and step-by-step processes matching veteran comprehension patterns.",
    assumptions: "Veterans have varying tech comfort levels, mobile access important, need for clear simple language over jargon.",
    limitations: "Compliance with veteran service regulations, frequent policy changes requiring updates, limited marketing budget.",
    outcomes: "500+ veterans successfully guided to benefits, 80% user satisfaction rate, partnerships with 15+ veteran organizations.",
    keyOutcomes: ["User-centered design guided 500+ veterans to benefits with 80% satisfaction"],
    features: ["Benefit Calculator", "Resource Library", "Application Guides", "Success Stories", "Community Forum"],
    tools: ["Webflow", "JavaScript", "API Integrations", "Form Processing", "Analytics"],
    category: "veterans",
    icon: Shield,
    color: "amber-500",
    image: bbvawHero,
    link: "https://bbvaw.us"
  }, {
    title: "Visions of Hope",
    client: "Youth Services Organization",
    location: "Chicago, IL",
    platform: "Webflow",
    description: "Stakeholder research identified need for professional credibility to secure funding. Mapped client journeys to create clear service architecture building trust with grantors.",
    challenge: "Complex service offerings difficult to communicate, lack of professional online presence affecting funding opportunities.",
    solution: "Research-backed information architecture with client journey mapping and professional design informed by stakeholder needs analysis.",
    assumptions: "Professional appearance crucial for grant applications, staff need easy content management, mobile access important.",
    limitations: "Compliance requirements for youth services, content approval workflows, budget constraints for ongoing maintenance.",
    outcomes: "200% increase in service inquiries, improved grant application success rate, enhanced community trust and partnerships.",
    keyOutcomes: ["Research-informed redesign increased inquiries by 200% and grant success"],
    features: ["Service Portfolios", "Staff Profiles", "Resource Center", "Contact Forms", "Accessibility Compliance"],
    tools: ["Webflow", "Custom CSS", "JavaScript", "Form Integrations", "CMS"],
    category: "youth-services",
    icon: HomeIcon,
    color: "blue-500",
    image: visionsOfHopeHero,
    link: "https://visionsofhope.ngo"
  }];
  return <div className="min-h-screen bg-background">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Research Hero Section */}
      <ResearchHero />

      {/* Unified Impact Metrics */}
      <UnifiedImpactMetrics />

      {/* Case Studies - PRIMARY EXPERTISE */}
      <section className="section bg-gradient-to-br from-muted/20 via-background to-accent/10 py-12 sm:py-16 lg:py-20 border-t-4 border-primary/20">
        <div className="container-custom px-3 sm:px-4 lg:px-6">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-4 sm:mb-6">
            <Badge variant="outline" className="mb-3 sm:mb-4 px-4 py-2 text-primary border-primary/30 bg-primary/5 text-xs sm:text-sm">Primary Expertise</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-primary">Research-Driven</span> <span className="text-accent">Case Studies</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 leading-relaxed">
              Each project begins with deep user research to uncover real needs. 
              Here's how I translate insights into meaningful impact through systematic discovery, synthesis, and validation.
            </p>
          </motion.div>

          <ProcessStoryGrid limit={4} featuredId={1} className="max-w-[1400px] mx-auto" />
        </div>
      </section>

      {/* Research Methodology & Design Process - PRIMARY EXPERTISE */}
      <section className="border-t-4 border-primary/20">
        <ResearchMethodologyAndProcess />
      </section>

      {/* Core Competencies - PRIMARY EXPERTISE */}
      <section className="border-t-4 border-primary/20">
        <CoreCompetenciesGrid />
      </section>

      {/* Soft Skills & Leadership - PRIMARY EXPERTISE */}
      <section className="border-t-4 border-primary/20">
        <SoftSkillsShowcase />
      </section>

      {/* Training & Certifications - PRIMARY EXPERTISE */}
      <section className="border-t-4 border-primary/20">
        <TrainingCertifications />
      </section>

      {/* Technical Capabilities - SUPPORTING CAPABILITY */}
      <section className="border-t-2 border-accent/20 bg-gradient-to-br from-background via-muted/10 to-background">
        <div className="container-custom py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent/30 bg-accent/5">
              Supporting Capability
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              <span className="bg-gradient-to-r from-systems-blue to-systems-cyan bg-clip-text text-transparent">Technical Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              From Research to Implementation: Technical skills that bring user insights to life
            </p>
          </motion.div>
          <TechnicalSkillsMatrix skills={allSkills} />
        </div>
      </section>

      {/* Journey: Bridging the Gap */}
      <section id="about" className="section bg-gradient-to-br from-accent/30 via-background to-muted/20 py-16 lg:py-20">
        <div className="container-custom">
          {/* Header */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-military-primary text-military-primary backdrop-blur-sm bg-background/50">
              Bridging Worlds
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From Military Precision to <span className="text-gradient bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary bg-clip-text text-transparent">User-Centered Innovation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">My Journey bridging the gap between technical complexity and human needs.</p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Journey Steps Timeline */}
            <div className="relative">
              <h3 className="text-xl font-semibold mb-6 text-primary">Journey Steps</h3>
              
              {/* Timeline Container */}
              <div className="relative pl-8">
                {/* Continuous vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-3">
                  {/* Identifying the Problem */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.1
                }} className="relative">
                    {/* Timeline node */}
                    <div className="absolute -left-4 top-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                    {/* Content */}
                    <div className="pl-6">
                      <h4 className="font-semibold mb-1">Identifying the Problem</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                          U.S. Air Force & Boeing
                        </Badge>
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Noticed systems didn't align with how people actually worked. Applications were clunky, workflows inefficient.
                      </p>
                    </div>
                  </motion.div>

                  {/* Taking Action */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.2
                }} className="relative">
                    {/* Timeline node */}
                    <div className="absolute -left-4 top-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    {/* Content */}
                    <div className="pl-6">
                      <h4 className="font-semibold mb-1">Taking Action</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                          Learning & Building
                        </Badge>
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Began learning automation, programming, and systems analysis to improve processes and bridge the user-technology gap.
                      </p>
                    </div>
                  </motion.div>

                  {/* Leadership Recognition */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.3
                }} className="relative">
                    {/* Timeline node */}
                    <div className="absolute -left-4 top-2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent/30">
                      <Trophy className="w-5 h-5 text-accent" />
                    </div>
                    {/* Content */}
                    <div className="pl-6">
                      <h4 className="font-semibold mb-1">Leadership Recognition</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                          Continuous Improvement
                        </Badge>
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">Recognizing the value of my technical skills and user perspective, my superiors began rotating me into new roles to assess, modernize, and automate core systems.</p>
                      <div className="mt-2 bg-accent/10 p-3 rounded-lg border-l-4 border-accent">
                         <p className="text-base text-primary font-medium leading-relaxed italic">
                           "Known for making the seemingly impossible impossible!"
                         </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* The Real Problem */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.4
                }} className="relative">
                    {/* Timeline node */}
                    <div className="absolute -left-4 top-2 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center border-2 border-accent/30">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    {/* Content */}
                    <div className="pl-6">
                      <h4 className="font-semibold mb-1">The Real Problem</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                          Communication & Alignment
                        </Badge>
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Discovered the gap between users who couldn't express technical needs and developers lacking operational context.
                      </p>
                    </div>
                  </motion.div>

                  {/* Formal Pursuit */}
                  <motion.div initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.6,
                  delay: 0.5
                }} className="relative">
                    {/* Timeline node */}
                    <div className="absolute -left-4 top-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    {/* Content */}
                    <div className="pl-6">
                      <h4 className="font-semibold mb-1">Formal Pursuit</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                          User Research & Experience Design
                        </Badge>
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Earned certifications, refined design practice, and expanded into full stack development.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Column - Insight Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-accent">Key Insights</h3>
              
              {/* The Realization */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <Card className="bg-background border border-accent/30 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold text-primary">The Realization</h4>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">
                      The key insight was that successful technology solutions required someone who could understand both worlds — the technical possibilities and the human reality. Most users couldn't clearly express their needs in technical terms, and development teams didn't always have access to the full context of daily operations.
                    </p>
                    <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                      <p className="text-base text-primary font-medium leading-relaxed">
                        It wasn't a people problem — it was a communication and alignment problem. This led me to pursue formal UX education and begin my transition into user research.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Today's Mission */}
              <motion.div initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }}>
                <Card className="bg-background border border-primary/30 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Rocket className="w-4 h-4 text-primary" />
                      </div>
                      <h4 className="font-semibold text-primary">Today's Mission</h4>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed mb-3">
                      I create research-driven, human-centered solutions that help teams build the right 
                      products — the first time. My military background brings systematic rigor to UX research, 
                      while my technical skills ensure feasible, implementable solutions.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                        Google UX Design
                      </Badge>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                        Google UX Research & Test Early Designs
                      </Badge>
                      <Badge variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                        IBM DevOps, Cloud and Agile Foundations
                      </Badge>
                      <Badge variant="outline" className="text-xs border-accent/30 text-accent bg-accent/5">
                        Google Prompting Essentials
                      </Badge>
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary bg-primary/5">
                        Agile Development & Scrum
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>


          {/* Quote Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.7
        }} className="text-center mt-16">
            <Card className="bg-muted/50 border border-border/30 shadow-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <blockquote className="text-lg font-medium text-foreground italic">
                  "I don't just build systems or design interfaces — I create bridges between complex technology and human needs, ensuring solutions are both technically sound and genuinely useful."
                </blockquote>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Military Precision + UX Innovation</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bridge Effect Card - moved here after translator quote */}
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.9,
          duration: 0.6
        }} className="max-w-5xl mx-auto mt-16">
            <Card className="glass border-accent/20 shadow-accent">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-3 sm:mb-4">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                    The Bridge Effect
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground">
                    Where technical expertise meets human understanding
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Database className="w-5 h-5 text-systems-blue mr-2" />
                      Technical Translation
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-systems-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span>Convert complex technical requirements into user-friendly solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-systems-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span>Bridge communication gaps between developers and end users</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-systems-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span>Ensure technical solutions align with business objectives</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Users className="w-5 h-5 text-agile-primary mr-2" />
                      Human-Centered Impact
                    </h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-agile-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span>Design with military precision but user empathy at the core</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-agile-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span>Create solutions that are both powerful and accessible</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-agile-primary mt-0.5 mr-3 flex-shrink-0" />
                        <span>Deliver measurable results through systematic user research</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-8" />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      

      {/* Recent Work - SUPPORTING CAPABILITY */}
      <section id="projects" className="section gradient-subtle py-12 sm:py-16 lg:py-20 border-t-2 border-accent/20">
        <div className="container-custom px-3 sm:px-4 lg:px-6">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-4 sm:mb-6 px-4 py-2 text-accent border-accent/30 bg-accent/5 text-xs sm:text-sm">
              Supporting Capability
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
              <span className="text-primary">Research-to-Reality:</span> <span className="text-accent">Implementation Projects</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Technical implementations grounded in user research findings. Each project demonstrates how research insights 
              translate into functional solutions that solve real user problems and deliver measurable outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {webDesigns.map((project, index) => <WebDesignCard key={index} project={project} index={index} />)}
          </div>
        </div>
      </section>

      {/* Enhanced Leadership Testimonial */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-systems-blue/10"></div>
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary-glow/20 blur-3xl" animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}></motion.div>
          <motion.div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-systems-cyan/20 blur-3xl" animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4]
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}></motion.div>
        </div>

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          y: 0,
          scale: 1
        }} transition={{
          duration: 0.8,
          ease: "easeOut"
        }} viewport={{
          once: true
        }} className="text-center">
            {/* Professional Badge */}
            <motion.div initial={{
            opacity: 0,
            y: -10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Leadership Testimonial</span>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            </motion.div>

            {/* Enhanced Testimonial Card */}
            <motion.div className="glass relative group" style={{
            background: "linear-gradient(135deg, hsl(var(--card) / 0.8), hsl(var(--card) / 0.6))",
            backdropFilter: "blur(20px)",
            border: "1px solid hsl(var(--primary) / 0.2)",
            boxShadow: "var(--shadow-glow), inset 0 1px 0 hsl(var(--card) / 0.3)"
          }} whileHover={{
            scale: 1.02,
            boxShadow: "var(--shadow-glow), 0 0 60px hsl(var(--primary-glow) / 0.4), inset 0 1px 0 hsl(var(--card) / 0.3)"
          }} transition={{
            duration: 0.3,
            ease: "easeOut"
          }}>
              <CardContent className="p-10 sm:p-16 relative">
                {/* Floating Quote Icon */}
                <motion.div className="absolute -top-6 left-1/2 transform -translate-x-1/2" initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }} viewport={{
                once: true
              }}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-glow group-hover:shadow-[0_0_40px_hsl(var(--primary-glow)_/_0.6)] transition-all duration-300">
                    <motion.svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24" animate={{
                    rotate: [0, 5, -5, 0]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}>
                      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.738.406-1.091.746-.363.332-.738.696-1.032 1.15-.309.435-.542.942-.638 1.43-.094.52-.007.95.247 1.263.27.318.743.496 1.257.496.732 0 1.325-.593 1.325-1.325S7.232 10 6.5 10zm8 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.738.406-1.091.746-.363.332-.738.696-1.032 1.15-.309.435-.542.942-.638 1.43-.094.52-.007.95.247 1.263.27.318.743.496 1.257.496.732 0 1.325-.593 1.325-1.325S15.232 10 14.5 10z" />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Quote Text with Staggered Animation */}
                <motion.blockquote className="text-xl sm:text-2xl text-foreground leading-relaxed mb-10 relative z-10" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                duration: 0.8,
                delay: 0.6
              }} viewport={{
                once: true
              }}>
                  <motion.span initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.6,
                  delay: 0.8
                }} viewport={{
                  once: true
                }}>
                    "Margery is amazing at{" "}
                    <span className="bg-gradient-to-r from-primary to-systems-blue bg-clip-text text-transparent font-semibold">
                      bridging user research and technical development
                    </span>
                    . She has a way of understanding exactly what users need and translating that into logical, error-proof systems. Her ability to collaborate with development teams ensures the final product is{" "}
                    <span className="bg-gradient-to-r from-systems-cyan to-mint bg-clip-text text-transparent font-semibold">
                      intuitive, efficient, and user-centered
                    </span>
                    . Thanks to her strong command of computational logic, she helps reduce errors before they ever reach the end user. Working with her is always inspiring, she{" "}
                    <span className="bg-gradient-to-r from-accent to-copper bg-clip-text text-transparent font-semibold">
                      delivers clarity where others get stuck
                    </span>
                    ."
                  </motion.span>
                </motion.blockquote>

                {/* Professional Attribution with Boeing Styling */}
                <motion.div className="relative" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.6,
                delay: 1.0
              }} viewport={{
                once: true
              }}>
                  <div className="flex items-center justify-center gap-4 pt-8 border-t border-gradient-to-r from-transparent via-primary/20 to-transparent">
                    {/* Aviation Icon */}
                    <motion.div className="w-10 h-10 rounded-full bg-gradient-to-br from-systems-blue to-primary flex items-center justify-center shadow-lg" whileHover={{
                    scale: 1.1,
                    rotate: 5
                  }} transition={{
                    duration: 0.2
                  }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21,16V14L13,9V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V9L2,14V16L10,13.5V19L8,20.5V22L11.5,21L15,22V20.5L13,19V13.5L21,16Z" />
                      </svg>
                    </motion.div>

                    <div className="text-center">
                      <p className="font-bold text-lg text-foreground">Steve Bautista</p>
                      <div className="flex items-center justify-center gap-2 mt-1">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        <p className="text-sm font-medium text-primary">Senior Manager</p>
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 font-medium">
                        The Boeing Company
                      </p>
                      <p className="text-xs text-muted-foreground/80 mt-0.5">
                        Base Level Engine Management (BLEM)
                      </p>
                    </div>

                    {/* Verification Badge */}
                    <motion.div className="w-10 h-10 rounded-full bg-gradient-to-br from-success to-mint flex items-center justify-center shadow-lg" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.2
                  }}>
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Subtle Floating Elements */}
                <motion.div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30" animate={{
                y: [-5, 5, -5],
                opacity: [0.3, 0.7, 0.3]
              }} transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}></motion.div>
                <motion.div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-systems-cyan/40" animate={{
                y: [5, -5, 5],
                opacity: [0.4, 0.8, 0.4]
              }} transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}></motion.div>
              </CardContent>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Mission Briefing CTA */}
      <section id="contact" className="section bg-background">
        <div className="container-custom">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center">
            <Card className="glass border-primary-glow/20 shadow-glow max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <Badge variant="outline" className="mb-4 sm:mb-6 border-primary-glow text-primary-glow text-xs sm:text-sm">
                  Mission Briefing
                </Badge>
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                  Ready to solve your next <span className="text-primary-glow">complex challenge</span>?
                </h2>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                  Let's discuss how systematic analysis and agile UX research can transform 
                  your user experience and business outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;