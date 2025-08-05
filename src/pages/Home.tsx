import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import ResearchMethodology from '@/components/ResearchMethodology';
import { Target, Zap, TrendingUp, Users, BarChart3, Layers, GitBranch, RefreshCw, CheckCircle, ArrowRight, Radar, Settings, Database, Code, LineChart, Shield, Rocket, Brain, Clock, Award, ChevronDown, Eye, MapPin, ExternalLink, Globe, Monitor, Smartphone, Heart, Home as HomeIcon, Trophy, GraduationCap, Lightbulb, Search, TestTube, Download, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import WebDesignCard from '@/components/WebDesignCard';
import DesignProcess from '@/components/DesignProcess';
import ProfessionalImpact from '@/components/ProfessionalImpact';
import SkillItem from '@/components/SkillItem';

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
    document.title = "UX Researcher | Systems Analyst | Human-Centered Problem Solver";
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
    reflection: "I'd conduct more cross-site usability testing to validate the interface earlier",
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
    reflection: "I'd include more stakeholders in the design process to ensure broader organizational buy-in",
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
    reflection: "I'd prototype multiple interface options to better understand user preferences",
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
    reflection: "I'd implement more iterative feedback loops during the workspace design phase",
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
  const skillCategories = {
    'UX Research & Design': [{
      name: 'User Research & Testing',
      level: 94,
      proficiency: 'Expert',
      description: 'Conducted 50+ user interviews, surveys, and usability testing sessions across military and civilian domains. Led journey mapping and persona development for enterprise systems.'
    }, {
      name: 'UX Design & Prototyping',
      level: 88,
      proficiency: 'Advanced',
      description: 'Created comprehensive design systems and interactive prototypes tested with 200+ users across multiple domains using Figma and modern design tools.'
    }, {
      name: 'Systems Analysis',
      level: 98,
      proficiency: 'Expert',
      description: 'Architected enterprise solutions serving 10,000+ users with complex workflow and data requirements'
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
      description: 'Streamlined operations reducing task completion time by 40% through systematic workflow analysis'
    }],
    'Design & Development': [{
      name: 'UX Design (Figma, Design Systems)',
      level: 88,
      proficiency: 'Advanced',
      description: 'Created comprehensive design systems and user interfaces for enterprise applications and military tools'
    }, {
      name: 'Prototyping (Interactive Flows, User Testing)',
      level: 85,
      proficiency: 'Advanced',
      description: 'Built high-fidelity prototypes and conducted iterative testing with 200+ users across multiple domains'
    }, {
      name: 'JavaScript/React',
      level: 85,
      proficiency: 'Advanced',
      description: 'Developed responsive web applications and component libraries using modern React patterns and TypeScript'
    }, {
      name: 'SharePoint Development',
      level: 90,
      proficiency: 'Expert',
      description: 'Built custom solutions, workflows, and integrations for enterprise environments serving thousands of users'
    }],
    'Automation & Tools': [{
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
    }],
    'Leadership & Collaboration': [{
      name: 'Military Leadership (Team Command, Operations)',
      level: 100,
      proficiency: 'Expert',
      description: 'Commanded teams of 50+ personnel in high-stakes operational environments with zero tolerance for failure'
    }, {
      name: 'Cross-functional Teams',
      level: 95,
      proficiency: 'Expert',
      description: 'Coordinated diverse teams across engineering, design, operations, and executive stakeholder groups'
    }, {
      name: 'Stakeholder Management (Executive Communication)',
      level: 90,
      proficiency: 'Expert',
      description: 'Presented strategic initiatives to C-suite executives and senior military leadership with measurable outcomes'
    }, {
      name: 'Remote Coordination',
      level: 88,
      proficiency: 'Advanced',
      description: 'Successfully managed distributed teams across multiple time zones and security clearance levels'
    }]
  };

  // Web Design Portfolio Data
  const webDesigns = [{
    title: "Soul Train's Eatery",
    client: "Charleston Catering Company",
    location: "Charleston, SC",
    platform: "Lovable",
    description: "Digital transformation for a local catering business, streamlining order management and customer experience.",
    challenge: "Manual order taking causing errors, missed orders, and inefficient kitchen workflow during peak catering seasons.",
    solution: "Intuitive ordering system with real-time inventory, automated notifications, and streamlined kitchen dashboard.",
    assumptions: "Mobile-first usage by customers, staff comfortable with digital tools, integration with existing POS systems.",
    limitations: "Limited budget for extensive customization, tight timeline for catering season launch, legacy payment system constraints.",
    outcomes: "40% reduction in order errors, 60% faster order processing, improved customer satisfaction and repeat business.",
    keyOutcomes: ["Automated catering operations, reducing order errors by 40% and processing time by 60%"],
    features: ["Online Ordering", "Inventory Management", "Customer Dashboard", "Mobile Optimization", "Payment Integration"],
    tools: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe"],
    category: "catering",
    icon: Smartphone,
    color: "emerald-500",
    image: "photo-1488590528505-98d2b5aba04b",
    link: "https://placeholder.com/website/soultrainseatery"
  }, {
    title: "Souls Feeding Souls",
    client: "Community Nonprofit",
    location: "North Charleston, SC",
    platform: "Lovable",
    description: "Volunteer coordination platform helping organize food distribution to underserved communities.",
    challenge: "Inefficient volunteer scheduling, food waste due to poor coordination, and lack of community impact visibility.",
    solution: "Comprehensive volunteer portal with scheduling, resource tracking, and impact metrics dashboard.",
    assumptions: "Volunteers have basic smartphone access, consistent internet connectivity, willingness to adopt new technology.",
    limitations: "Volunteer tech literacy varies, limited staff for training, dependency on donations for hosting costs.",
    outcomes: "75% improvement in volunteer coordination efficiency, 50% reduction in food waste, increased community engagement.",
    keyOutcomes: ["Streamlined volunteer coordination, improving efficiency by 75% and reducing food waste by 50%"],
    features: ["Volunteer Scheduling", "Resource Tracking", "Impact Dashboard", "Communication Tools", "Donation Management"],
    tools: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "SendGrid"],
    category: "nonprofit",
    icon: Heart,
    color: "rose-500",
    image: "photo-1498050108023-c5249f4df085",
    link: "https://placeholder.com/website/soulsfeedingsouls"
  }, {
    title: "Visions of Hope",
    client: "Youth Services Organization",
    location: "Chicago, IL",
    platform: "Webflow",
    description: "Professional website showcasing comprehensive services and group homes for underserved youth.",
    challenge: "Complex service offerings difficult to communicate, lack of professional online presence affecting funding opportunities.",
    solution: "Clear service architecture with client journey mapping, professional design building trust with stakeholders.",
    assumptions: "Professional appearance crucial for grant applications, staff need easy content management, mobile access important.",
    limitations: "Compliance requirements for youth services, content approval workflows, budget constraints for ongoing maintenance.",
    outcomes: "200% increase in service inquiries, improved grant application success rate, enhanced community trust and partnerships.",
    keyOutcomes: ["Professional redesign increased service inquiries by 200% and improved grant success rates"],
    features: ["Service Portfolios", "Staff Profiles", "Resource Center", "Contact Forms", "Accessibility Compliance"],
    tools: ["Webflow", "Custom CSS", "JavaScript", "Form Integrations", "CMS"],
    category: "youth-services",
    icon: HomeIcon,
    color: "blue-500",
    image: "photo-1483058712412-4245e9b90334",
    link: "https://placeholder.com/website/visionsofhope"
  }, {
    title: "Veteran's Benefits Beyond the VA Wall",
    client: "Veterans Support Services",
    location: "Worldwide",
    platform: "Webflow",
    description: "Comprehensive resource portal helping veterans navigate complex benefit systems beyond traditional VA services.",
    challenge: "Veterans struggling to find and access benefits due to complex bureaucracy and scattered information sources.",
    solution: "Intuitive resource portal with guided navigation, benefit calculators, and step-by-step application processes.",
    assumptions: "Veterans have varying tech comfort levels, mobile access important, need for clear simple language over jargon.",
    limitations: "Compliance with veteran service regulations, frequent policy changes requiring updates, limited marketing budget.",
    outcomes: "500+ veterans successfully guided to benefits, 80% user satisfaction rate, partnerships with 15+ veteran organizations.",
    keyOutcomes: ["Guided 500+ veterans to benefits with 80% user satisfaction through intuitive navigation"],
    features: ["Benefit Calculator", "Resource Library", "Application Guides", "Success Stories", "Community Forum"],
    tools: ["Webflow", "JavaScript", "API Integrations", "Form Processing", "Analytics"],
    category: "veterans",
    icon: Shield,
    color: "amber-500",
    image: "photo-1461749280684-dccba630e2f6",
    link: "https://placeholder.com/website/veteransbenefits"
  }, {
    title: "Discover El Salvador",
    client: "Personal Tour Guide Services",
    location: "El Salvador",
    platform: "Lovable",
    description: "Immersive travel experience platform showcasing personalized jungle and volcano beach adventures.",
    challenge: "Generic travel sites don't capture unique local experiences, difficulty communicating personalized tour value.",
    solution: "Visual storytelling platform with immersive galleries, custom itinerary builder, and authentic local experiences.",
    assumptions: "Visual appeal drives booking decisions, international travelers have good internet, social proof influences choices.",
    limitations: "Content updates needed from non-technical tour guides, seasonal booking patterns, weather-dependent activities.",
    outcomes: "300% increase in direct bookings, expanded international client base, featured in travel publications.",
    keyOutcomes: ["Immersive storytelling drove 300% increase in direct bookings for personalized tours"],
    features: ["Interactive Maps", "Photo Galleries", "Custom Itineraries", "Booking System", "Weather Integration"],
    tools: ["React", "TypeScript", "Mapbox", "Cloudinary", "Payment APIs"],
    category: "travel",
    icon: Globe,
    color: "teal-500",
    image: "photo-1487058792275-0ad4aaf24ca7",
    link: "https://placeholder.com/website/discoverelsalvador"
  }];
  return <div className="min-h-screen bg-background">
      {/* Radar Hero Section */}
      <motion.section ref={heroRef} initial="hidden" animate={isHeroInView ? "visible" : "hidden"} variants={containerVariants} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        {/* Animated Radar Background */}
        <motion.div variants={radarVariants} className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary-glow radar-animation"></div>
            <div className="absolute inset-4 sm:inset-8 rounded-full border border-primary-glow/50 radar-animation" style={{
            animationDelay: '1s'
          }}></div>
            <div className="absolute inset-8 sm:inset-16 rounded-full border border-primary-glow/30 radar-animation" style={{
            animationDelay: '2s'
          }}></div>
            <Radar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
          </div>
        </motion.div>

        <div className="container-custom relative z-10 px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Hero Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-3 sm:mb-4 lg:mb-6">
                 <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base py-1 sm:py-1.5 lg:py-2 px-2 sm:px-3 lg:px-4 border-primary-glow text-primary-glow">
                   UX Researcher • Systems Analyst • Human-Centered Problem Solver
                 </Badge>
              </motion.div>
              
               <motion.h1 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
                 I solve{' '}
                 <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                   user problems
                 </span>{' '}
                 through systematic UX research, bridging{' '}
                 <span className="bg-gradient-to-r from-agile-primary to-agile-secondary bg-clip-text text-transparent">
                   technical complexity with human needs
                 </span>
               </motion.h1>

               <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
                 Military precision meets human empathy. I bring systematic research methodologies 
                 to uncover deep user insights, then collaborate with teams to build solutions 
                 that truly serve human needs.
               </motion.p>

               <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 justify-center lg:justify-start">
                 <Button onClick={() => navigate('/case-studies')} size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                   Explore My Research Process
                   <ArrowRight className="ml-2 w-4 h-4" />
                 </Button>
                 <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                   <Download className="mr-2 w-4 h-4" />
                   Download Research Portfolio
                 </Button>
               </motion.div>

              {/* Key Metrics */}
              <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0">
                <div className="py-3 sm:py-4">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-primary-glow">26K+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Hours Saved Annually</div>
                </div>
                <div className="py-3 sm:py-4 border-x border-border/20">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-agile-primary">23</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Global Bases Unified</div>
                </div>
                <div className="py-3 sm:py-4">
                  <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-accent">340%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground leading-tight">Max Conversion Increase</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive Systems Diagram */}
            <motion.div variants={itemVariants} className="relative mt-6 lg:mt-0">
              <Card className="glass border-primary-glow/20 shadow-systems">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-center text-primary-glow text-lg sm:text-xl">
                    Systems Analysis Framework
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    {['User Problems', 'Systems Analysis', 'Agile Solutions', 'Measurable Results'].map((step, index) => <motion.div key={step} initial={{
                    opacity: 0,
                    x: 30
                  }} animate={{
                    opacity: 1,
                    x: 0
                  }} transition={{
                    delay: index * 0.2 + 1
                  }} className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-glow/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-primary-glow">{index + 1}</span>
                        </div>
                        <span className="text-sm sm:text-base text-foreground">{step}</span>
                        {index < 3 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground ml-auto" />}
                      </motion.div>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ChevronDown className="w-6 h-6 text-primary-glow animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Research Philosophy Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
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
        }} className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4 border-primary-glow text-primary-glow bg-primary-glow/5">
              Research Philosophy
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
              Methodology That Bridges 
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                {' '}Precision{' '}
              </span>
              and
              <span className="bg-gradient-to-r from-agile-primary to-agile-secondary bg-clip-text text-transparent">
                {' '}Empathy
              </span>
            </h2>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 lg:p-10 border border-primary-glow/20 shadow-glow">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4">
                My research methodology combines military precision with human empathy. I believe the best solutions emerge when we deeply understand both user needs and technical constraints, then iterate rapidly based on evidence.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <Search className="w-5 h-5 text-primary-glow" />
                <span className="text-sm text-primary-glow font-medium">Systematic • Evidence-Based • Human-Centered</span>
                <TestTube className="w-5 h-5 text-primary-glow" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Methodology Showcase */}
      <ResearchMethodology />

      {/* Problem-Solution Matrix */}
      <section className="section bg-background py-12 sm:py-16 lg:py-20">
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
        }} className="text-center mb-12 sm:mb-16">
            <Badge variant="outline" className="mb-3 sm:mb-4 border-agile-primary text-agile-primary text-xs sm:text-sm">
              Research Stories
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              User Problems, <span className="text-agile-primary">Research-Driven Solutions</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 leading-relaxed">
              Each project tells a story of user challenges, research insights, and meaningful impact. 
              Here's how I approach complex problems through systematic UX research.
            </p>
          </motion.div>

          {/* Research Stories Visual Intro */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="mb-12 relative overflow-hidden rounded-xl">
            <div className="relative h-48 sm:h-64 lg:h-80">
              <img src={researchDesk} alt="UX Research workspace with code and analysis" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent flex items-center">
                <div className="container-custom">
                  <div className="max-w-lg">
                    <Badge variant="outline" className="mb-3 border-primary-glow text-primary-glow">
                      Research Process
                    </Badge>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                      Where Analysis Meets <span className="text-primary-glow">Innovation</span>
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Every insight starts with systematic investigation and ends with meaningful user impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {researchStories.map((story, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} whileHover={{
            y: -10
          }} className="h-full">
                <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300 h-full flex flex-col overflow-hidden">
                  {/* Visual Preview */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src={story.visual} alt={`${story.title} preview`} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 leading-tight">
                        {story.title}
                      </h3>
                      <p className="text-sm text-white/90 leading-tight">
                        {story.briefSummary}
                      </p>
                    </div>
                    <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center ${story.color === 'systems' ? 'bg-systems-blue/20 backdrop-blur-sm' : story.color === 'agile' ? 'bg-agile-primary/20 backdrop-blur-sm' : story.color === 'success' ? 'bg-success/20 backdrop-blur-sm' : 'bg-accent/20 backdrop-blur-sm'}`}>
                      <story.icon className={`w-5 h-5 ${story.color === 'systems' ? 'text-systems-blue' : story.color === 'agile' ? 'text-agile-primary' : story.color === 'success' ? 'text-success' : 'text-accent'}`} />
                    </div>
                  </div>

                   <CardContent className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">

                     {/* User Problem */}
                     <div className="mb-3 sm:mb-4">
                       <Badge variant="outline" className="text-xs text-red-500 bg-red-50 border-red-200 mb-2">
                         USER PROBLEM
                       </Badge>
                       <p className="text-xs sm:text-sm text-foreground leading-tight mb-2 sm:mb-3">
                         {story.userProblem || story.challenge}
                       </p>
                     </div>

                     {/* User Voice Quote */}
                     {story.userVoice && <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-muted/50 rounded-lg border-l-4 border-primary-glow">
                         <Badge variant="outline" className="text-xs text-primary-glow mb-2">
                           USER VOICE
                         </Badge>
                         <p className="text-xs sm:text-sm text-muted-foreground italic leading-tight">
                           "{story.userVoice}"
                         </p>
                       </div>}

                    {/* Research Method */}
                    <div className="mb-3 sm:mb-4">
                      <Badge variant="outline" className="text-xs text-primary-glow mb-2">
                        RESEARCH METHOD
                      </Badge>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-tight mb-2 sm:mb-3">
                        {story.researchMethod}
                      </p>
                    </div>

                    {/* Key Insight */}
                    <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-accent/10 rounded-lg">
                      <Badge variant="outline" className="text-xs text-accent mb-2">
                        KEY INSIGHT
                      </Badge>
                      <p className="text-xs sm:text-sm text-accent font-medium leading-tight">
                        "{story.keyInsight}"
                      </p>
                    </div>

                     {/* Solution & Impact */}
                     <div className="mb-4">
                       <Badge variant="outline" className="text-xs text-success mb-2">
                         SOLUTION & IMPACT
                       </Badge>
                       <p className="text-sm text-foreground leading-tight mb-2">
                         {story.solution}
                       </p>
                       <p className="text-sm text-muted-foreground leading-tight mb-3">
                         {story.userImpact}
                       </p>
                       {/* Business Impact */}
                       <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                         <Badge variant="outline" className="text-xs text-success mb-2 bg-success/10">
                           BUSINESS IMPACT
                         </Badge>
                         <p className="text-xs text-success font-medium">
                           {story.caseStudyId === 1 && "Enhanced mission readiness and reduced operational risk across global defense operations"}
                           {story.caseStudyId === 5 && "ROI of 5,200% through automation. Enabled strategic focus shift from manual tasks to analysis"}
                           {story.caseStudyId === 3 && "Leadership gained 12+ weeks annually for strategic planning instead of manual reporting"}
                           {story.caseStudyId === 4 && "Improved organizational scalability enabling rapid team expansion without communication breakdown"}
                         </p>
                       </div>
                     </div>

                    {/* Metric */}
                    <div className={`text-center p-3 rounded-lg mb-4 ${story.color === 'systems' ? 'bg-systems-blue/10' : story.color === 'agile' ? 'bg-agile-primary/10' : story.color === 'success' ? 'bg-success/10' : 'bg-accent/10'}`}>
                      <div className={`text-lg sm:text-xl lg:text-2xl font-bold ${story.color === 'systems' ? 'text-systems-blue' : story.color === 'agile' ? 'text-agile-primary' : story.color === 'success' ? 'text-success' : 'text-accent'}`}>
                        {story.metric}
                      </div>
                    </div>

                     {/* Research Artifacts */}
                     <div className="mb-4">
                       <h4 className="text-xs font-semibold text-muted-foreground mb-2">RESEARCH ARTIFACTS</h4>
                       <div className="flex flex-wrap gap-1 mb-3">
                         {story.artifacts?.map((artifact, artifactIndex) => <Badge key={artifactIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                             {artifact}
                           </Badge>)}
                       </div>
                       <h4 className="text-xs font-semibold text-muted-foreground mb-2">TOOLS USED</h4>
                       <div className="flex flex-wrap gap-1">
                         {story.tools.map((tool, toolIndex) => <Badge key={toolIndex} variant="secondary" className="text-xs">
                             {tool}
                           </Badge>)}
                       </div>
                     </div>

                     {/* Stakeholder Testimonial */}
                     {story.stakeholderQuote && <div className="mb-4 p-3 bg-secondary/20 rounded-lg border-l-4 border-secondary">
                         <Badge variant="outline" className="text-xs text-secondary mb-2">
                           STAKEHOLDER FEEDBACK
                         </Badge>
                         <p className="text-xs text-secondary italic leading-tight">
                           "{story.stakeholderQuote}"
                         </p>
                       </div>}

                    {/* Reflection */}
                    <div className="border-t pt-3 mb-4">
                      <Badge variant="outline" className="text-xs text-copper mb-2">
                        WHAT I'D DO DIFFERENTLY
                      </Badge>
                      <p className="text-xs text-copper italic leading-tight">
                        {story.reflection}
                      </p>
                    </div>

                     {/* Action Buttons */}
                     <div className="mt-auto flex gap-2">
                       <Button onClick={() => navigate('/case-studies', {
                     state: {
                       selectedStudyId: story.caseStudyId
                     }
                   })} className={`flex-1 ${story.color === 'systems' ? 'bg-systems-blue hover:bg-systems-blue/90' : story.color === 'agile' ? 'bg-agile-primary hover:bg-agile-primary/90' : story.color === 'success' ? 'bg-success hover:bg-success/90' : 'bg-accent hover:bg-accent/90'} text-white shadow-sm`} size="sm">
                         <Eye className="w-4 h-4 mr-2" />
                         Case Study
                       </Button>
                       <Button variant="outline" size="sm" className="border-muted-foreground/20 text-muted-foreground hover:bg-muted-foreground/5">
                         <ExternalLink className="w-4 h-4" />
                       </Button>
                     </div>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>

          {/* Enhanced CTA Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-center mt-12 sm:mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <Button onClick={() => navigate('/case-studies')} size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow px-8 py-4">
                View All Research Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 px-8 py-4">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Research Consultation
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Ready to improve user experiences through systematic research?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section className="section gradient-subtle">
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
        }} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Skills Arsenal
            </Badge>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
               UX Research Excellence Meets <span className="text-accent">Technical Precision</span>
             </h2>
             <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
               A unique combination of systematic UX research methodologies and deep technical systems knowledge, 
               enabling solutions that are both human-centered and technically feasible.
             </p>
          </motion.div>

          {/* Skills Visual Intro */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-systems-blue text-systems-blue">
                Technical Arsenal
              </Badge>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Innovation Through <span className="text-systems-blue">Systematic Mastery</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                A comprehensive toolkit built through military precision, enterprise complexity, 
                and modern UX methodologies—each skill sharpened for maximum impact.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-accent text-accent">Research</Badge>
                <Badge variant="outline" className="border-accent text-accent">Analysis</Badge>
                <Badge variant="outline" className="border-accent text-accent">Strategy</Badge>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <div className="h-48 sm:h-64 lg:h-80">
                <img src={robotInnovation} alt="Innovation and futuristic technology representation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skillCategories).map(([category, skills], index) => <motion.div key={category} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }}>
                <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-foreground text-lg sm:text-xl mb-4">
                      {category}
                    </CardTitle>
                    <div className="space-y-3">
                      {skills.map((skill, skillIndex) => <SkillItem key={skill.name} name={skill.name} level={skill.level} proficiency={skill.proficiency} description={skill.description} delay={index * 100 + skillIndex * 50} />)}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* About Section - Mission Capabilities */}
      <About />

      {/* My Journey into User Research */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
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
        }} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-military-primary text-military-primary backdrop-blur-sm bg-background/50">
              Bridging Worlds
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From Military Precision to <span className="text-gradient bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary bg-clip-text text-transparent">User-Centered Innovation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">My Journey bridging the gap between technical complexity and human needs.</p>
          </motion.div>

          {/* Full-width introductory card */}
          

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

      {/* Design Process */}
      <DesignProcess />

      {/* Professional Impact */}
      <ProfessionalImpact />

      {/* Recent Work Section */}
      <section id="projects" className="section gradient-subtle py-12 sm:py-16 lg:py-20">
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
            <Badge variant="outline" className="mb-4 sm:mb-6 border-accent text-accent text-xs sm:text-sm">
              Web Development
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-foreground leading-tight">
              Proven results through <span className="text-accent">systematic UX research</span>
              <br className="hidden sm:block" />
              and digital solutions
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Real-world applications demonstrating how systematic analysis and agile methodologies 
              solve complex challenges and deliver measurable business impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {webDesigns.map((project, index) => <WebDesignCard key={index} project={project} index={index} onViewCaseStudy={() => handleViewCaseStudy(project.title)} />)}
          </div>
        </div>
      </section>



      {/* Journey: Bridging the Gap */}
      <section id="about" className="section bg-gradient-to-br from-background via-background/95 to-military-primary/5 relative overflow-hidden">
        <div className="container-custom">
          

          {/* Journey Timeline & Insights Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* Left Column: Milestone Timeline (60% on large screens) */}
            <div className="lg:col-span-3">
              <motion.div initial={{
              opacity: 0,
              x: -50
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-military-primary via-systems-blue to-agile-primary opacity-30 hidden sm:block"></div>
                
              </motion.div>
            </div>

            {/* Right Column: Key Insights (40% on large screens) */}
            
          </div>

        </div>
      </section>




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

      {/* Footer Section */}
      <footer className="section bg-muted/30 border-t border-border/20">
        <div className="container-custom">
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
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary-glow/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary-glow" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Professional Consultation</p>
                    <p className="text-xs text-muted-foreground">Schedule a strategic discussion</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-agile-primary/20 flex items-center justify-center">
                    <Settings className="w-4 h-4 text-agile-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Systems Analysis</p>
                    <p className="text-xs text-muted-foreground">Complex problem solving</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Brain className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">UX Research</p>
                    <p className="text-xs text-muted-foreground">User-centered solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Systems Analysis & Architecture
                </li>
                <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  UX Research & User Testing
                </li>
                <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Agile Process Implementation
                </li>
                <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Digital Transformation
                </li>
                <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Technical Documentation
                </li>
                <li className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  Stakeholder Alignment
                </li>
              </ul>
            </div>

            {/* Methodologies */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground mb-4">Methodologies</h3>
              <div className="space-y-3">
                <Badge variant="outline" className="w-full justify-start border-primary-glow text-primary-glow">
                  Sprint-Based Research
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-agile-primary text-agile-primary">
                  Agile Development
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-systems-blue text-systems-blue">
                  Systems Thinking
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-accent text-accent">
                  Design Thinking
                </Badge>
                <Badge variant="outline" className="w-full justify-start border-success text-success">
                  Military Precision
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground mb-4">Navigation</h3>
              <div className="space-y-3">
                <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                  Research Stories
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                  Military Journey
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                  Agile Toolkit
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                  Research Artifacts
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-sm text-muted-foreground hover:text-foreground">
                  Skills Arsenal
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="pt-8 border-t border-border/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-glow/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary-glow" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Systems Analyst & UX Researcher</p>
                  <p className="text-xs text-muted-foreground">Military Precision • Agile Innovation • User-Centered Design</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-primary-glow">26K+</div>
                  <div className="text-xs text-muted-foreground">Hours Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-agile-primary">23</div>
                  <div className="text-xs text-muted-foreground">Global Bases</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-accent">340%</div>
                  <div className="text-xs text-muted-foreground">Max Conversion</div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/10 text-center">
              <p className="text-xs text-muted-foreground">
                © 2024 Systems Analysis & UX Research Portfolio. Bridging military precision with modern innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>;
};
export default Home;