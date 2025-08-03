import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Layers, 
  GitBranch, 
  RefreshCw,
  CheckCircle,
  ArrowRight,
  Radar,
  Settings,
  Database,
  Code,
  LineChart,
  Shield,
  Rocket,
  Brain,
  Clock,
  Award,
  ChevronDown
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Import images
import codingWorkspace from '@/assets/coding-workspace.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
import robotInnovation from '@/assets/robot-innovation.jpg';
import researchDesk from '@/assets/research-desk.jpg';
import abstractNight from '@/assets/abstract-night.jpg';

const AltHome2 = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    document.title = "Systems Analyst | UX Researcher | Agile Problem Solver";
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.8 },
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
  const researchStories = [
    {
      challenge: "Engine maintenance teams across 23 bases struggled with manual tracking systems",
      researchMethod: "Conducted 15+ user interviews and workflow observations across multiple sites",
      keyInsight: "Users needed familiar interfaces with minimal training, not complex new systems",
      solution: "Designed SharePoint CMS leveraging existing user mental models with Tableau dashboards",
      userImpact: "Teams could find engine data in seconds instead of hours, reducing stress and improving accuracy",
      metric: "45% faster reporting",
      icon: Database,
      tools: ["User Interviews", "Workflow Analysis", "SharePoint", "Tableau"],
      reflection: "I'd conduct more cross-site usability testing to validate the interface earlier",
      color: "systems"
    },
    {
      challenge: "Data entry specialists experienced fatigue and errors from repetitive 2.5-hour daily tasks",
      researchMethod: "Empathy mapping, task analysis, and error pattern identification with 12 users",
      keyInsight: "Errors occurred due to cognitive overload, not lack of skill or attention",
      solution: "Built VBA automation tool that preserved user control while eliminating repetition",
      userImpact: "Users shifted from monotonous data entry to strategic analysis work, boosting job satisfaction",
      metric: "80% time reduction, 90% error reduction",
      icon: Clock,
      tools: ["Task Analysis", "Empathy Mapping", "VBA", "SQL"],
      reflection: "I'd include more stakeholders in the design process to ensure broader organizational buy-in",
      color: "agile"
    },
    {
      challenge: "Analysts spent 9.6 hours weekly creating repetitive slide decks, causing burnout",
      researchMethod: "Journey mapping and pain point analysis with operations teams",
      keyInsight: "Manual slide creation was a barrier to timely decision-making at leadership level",
      solution: "Designed form-driven automation that maintained presentation quality while saving time",
      userImpact: "Analysts could focus on analysis instead of formatting, improving strategic insights",
      metric: "98% faster process",
      icon: TrendingUp,
      tools: ["Journey Mapping", "C#", "JavaScript", "VBA"],
      reflection: "I'd prototype multiple interface options to better understand user preferences",
      color: "success"
    },
    {
      challenge: "Growing teams faced communication breakdowns and document chaos",
      researchMethod: "Organizational analysis and collaborative workflow studies",
      keyInsight: "Information architecture needed to match team mental models and role hierarchies",
      solution: "Created role-based SharePoint workspaces with intuitive navigation structures",
      userImpact: "Team members could onboard faster and collaborate more effectively",
      metric: "90% faster document finding, 70% faster onboarding",
      icon: Users,
      tools: ["Information Architecture", "SharePoint", "Power Automate"],
      reflection: "I'd implement more iterative feedback loops during the workspace design phase",
      color: "accent"
    }
  ];

  // Military to Agile Journey
  const journeyMilestones = [
    {
      period: "2008-2012",
      role: "US Air Force Systems Operations",
      focus: "Mission-Critical Systems Management",
      skills: ["F117 Engine Logistics", "Multi-Base Coordination", "Risk Management"],
      icon: Shield
    },
    {
      period: "2012-2018", 
      role: "Boeing Enterprise Systems Analyst",
      focus: "Large-Scale Process Optimization",
      skills: ["SharePoint Architecture", "SQL Development", "Workflow Automation"],
      icon: Settings
    },
    {
      period: "2018-Present",
      role: "Agile UX Research & Systems Design",
      focus: "User-Centered Problem Solving",
      skills: ["Sprint Planning", "User Research", "Technical Implementation"],
      icon: Rocket
    }
  ];

  // Research-First Agile Toolkit
  const researchToolkit = [
    {
      phase: "Discovery Sprint",
      methods: ["User Interviews", "Contextual Inquiry", "Stakeholder Mapping", "Journey Mapping"],
      deliverables: ["User Personas", "Journey Maps", "Problem Definition", "Research Plan"],
      duration: "1-2 weeks",
      icon: Target,
      insight: "Why are users struggling? What are their real needs vs. stated needs?"
    },
    {
      phase: "Analysis Sprint", 
      methods: ["Affinity Mapping", "Behavioral Analysis", "Task Analysis", "Systems Thinking"],
      deliverables: ["Insight Synthesis", "Opportunity Map", "Design Principles", "Requirements"],
      duration: "1-2 weeks",
      icon: BarChart3,
      insight: "What patterns emerge? How do user needs connect to business goals?"
    },
    {
      phase: "Solution Sprint",
      methods: ["Co-design Sessions", "Rapid Prototyping", "Concept Testing", "Iterative Design"],
      deliverables: ["Validated Concepts", "Interactive Prototypes", "Test Results", "Design System"],
      duration: "2-4 weeks", 
      icon: Code,
      insight: "Which solutions resonate? How do users actually interact with our ideas?"
    },
    {
      phase: "Validation Sprint",
      methods: ["Usability Testing", "A/B Testing", "Post-Launch Research", "Impact Measurement"],
      deliverables: ["Usability Report", "Impact Metrics", "Iteration Plan", "Success Stories"],
      duration: "1-2 weeks",
      icon: CheckCircle,
      insight: "Did we solve the right problem? What should we optimize next?"
    }
  ];

  // Research Artifacts Showcase
  const researchArtifacts = [
    {
      title: "User Journey Maps",
      description: "End-to-end visualization of user experiences, pain points, and opportunities",
      tools: ["Miro", "Figma", "User Research"],
      icon: Target,
      color: "agile"
    },
    {
      title: "Affinity Diagrams", 
      description: "Pattern identification and insight synthesis from user research data",
      tools: ["Post-it Clustering", "Thematic Analysis", "Insight Extraction"],
      icon: Brain,
      color: "accent"
    },
    {
      title: "Systems Architecture",
      description: "Technical flow diagrams connecting user needs to system capabilities",
      tools: ["Lucidchart", "Systems Analysis", "Information Architecture"],
      icon: Database,
      color: "systems"
    },
    {
      title: "Usability Test Reports",
      description: "Structured findings with actionable recommendations and design implications",
      tools: ["User Testing", "Video Analysis", "Behavioral Metrics"],
      icon: CheckCircle,
      color: "success"
    }
  ];

  // Skills Arsenal
  const skillsArsenal = [
    {
      category: "Systems Analysis",
      skills: ["Enterprise Architecture", "Database Design", "API Development", "Legacy Integration"],
      icon: Database,
      proficiency: 95
    },
    {
      category: "UX Research",
      skills: ["User Interviews", "Behavioral Analysis", "Journey Mapping", "Usability Testing"],
      icon: Users,
      proficiency: 90
    },
    {
      category: "Agile Methodologies",
      skills: ["Scrum Master", "Sprint Planning", "Backlog Management", "Retrospectives"],
      icon: RefreshCw,
      proficiency: 88
    },
    {
      category: "Technical Development",
      skills: ["React/JavaScript", "SQL/NoSQL", "VBA/Automation", "SharePoint"],
      icon: Code,
      proficiency: 92
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Radar Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero"
      >
        {/* Animated Radar Background */}
        <motion.div 
          variants={radarVariants}
          className="absolute inset-0 flex items-center justify-center opacity-10"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary-glow radar-animation"></div>
            <div className="absolute inset-4 sm:inset-8 rounded-full border border-primary-glow/50 radar-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute inset-8 sm:inset-16 rounded-full border border-primary-glow/30 radar-animation" style={{animationDelay: '2s'}}></div>
            <Radar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
          </div>
        </motion.div>

        <div className="container-custom relative z-10 px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Hero Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-3 sm:mb-4 lg:mb-6">
                <Badge variant="outline" className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base py-1 sm:py-1.5 lg:py-2 px-2 sm:px-3 lg:px-4 border-primary-glow text-primary-glow">
                  Systems Analyst • UX Researcher • Agile Problem Solver
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 text-foreground leading-tight"
              >
                I analyze{' '}
                <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                  complex systems
                </span>{' '}
                and solve user problems through{' '}
                <span className="bg-gradient-to-r from-agile-primary to-agile-secondary bg-clip-text text-transparent">
                  Agile UX research
                </span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
              >
                Military precision meets modern product development. I bridge the gap between 
                complex technical systems and user needs through systematic analysis and 
                iterative design methodologies.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                  View Case Studies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                  Download Resume
                </Button>
              </motion.div>

              {/* Key Metrics */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center max-w-sm sm:max-w-md lg:max-w-none mx-auto lg:mx-0"
              >
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
                    {['User Problems', 'Systems Analysis', 'Agile Solutions', 'Measurable Results'].map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 1 }}
                        className="flex items-center space-x-2 sm:space-x-3"
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-glow/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs sm:text-sm font-bold text-primary-glow">{index + 1}</span>
                        </div>
                        <span className="text-sm sm:text-base text-foreground">{step}</span>
                        {index < 3 && (
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground ml-auto" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary-glow animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Problem-Solution Matrix */}
      <section className="section bg-background py-12 sm:py-16 lg:py-20">
        <div className="container-custom px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative overflow-hidden rounded-xl"
          >
            <div className="relative h-48 sm:h-64 lg:h-80">
              <img 
                src={researchDesk} 
                alt="UX Research workspace with code and analysis" 
                className="w-full h-full object-cover"
              />
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
            {researchStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-5 lg:p-6">
                    {/* Research Story Header */}
                    <div className="text-center mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto rounded-full flex items-center justify-center mb-3 ${
                        story.color === 'systems' ? 'bg-systems-blue/20' :
                        story.color === 'agile' ? 'bg-agile-primary/20' :
                        story.color === 'success' ? 'bg-success/20' :
                        'bg-accent/20'
                      }`}>
                        <story.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${
                          story.color === 'systems' ? 'text-systems-blue' :
                          story.color === 'agile' ? 'text-agile-primary' :
                          story.color === 'success' ? 'text-success' :
                          'text-accent'
                        }`} />
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-3 sm:mb-4">
                      <Badge variant="outline" className="text-xs text-muted-foreground mb-2">
                        USER CHALLENGE
                      </Badge>
                      <p className="text-xs sm:text-sm text-foreground leading-tight mb-2 sm:mb-3">
                        {story.challenge}
                      </p>
                    </div>

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
                      <p className="text-sm text-muted-foreground leading-tight">
                        {story.userImpact}
                      </p>
                    </div>

                    {/* Metric */}
                    <div className={`text-center p-3 rounded-lg mb-4 ${
                      story.color === 'systems' ? 'bg-systems-blue/10' :
                      story.color === 'agile' ? 'bg-agile-primary/10' :
                      story.color === 'success' ? 'bg-success/10' :
                      'bg-accent/10'
                    }`}>
                      <div className={`text-lg font-bold ${
                        story.color === 'systems' ? 'text-systems-blue' :
                        story.color === 'agile' ? 'text-agile-primary' :
                        story.color === 'success' ? 'text-success' :
                        'text-accent'
                      }`}>
                        {story.metric}
                      </div>
                    </div>

                    {/* Tools Used */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-2">TOOLS USED</h4>
                      <div className="flex flex-wrap gap-1">
                        {story.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Reflection */}
                    <div className="border-t pt-3">
                      <Badge variant="outline" className="text-xs text-copper mb-2">
                        WHAT I'D DO DIFFERENTLY
                      </Badge>
                      <p className="text-xs text-copper italic leading-tight">
                        {story.reflection}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Military to Agile Journey */}
      <section className="section gradient-subtle py-12 sm:py-16 lg:py-20">
        <div className="container-custom px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <Badge variant="outline" className="mb-3 sm:mb-4 border-success text-success text-xs sm:text-sm">
              Professional Evolution
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
              From Military Precision to <span className="text-agile-primary">Agile Innovation</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4 lg:px-0 leading-relaxed">
              My passion for understanding how people interact with complex systems began in the Air Force, 
              where I witnessed the gap between technical capabilities and user needs. This drives my systematic 
              approach to UX research, always asking "Why?" before building "What."
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="glass border-none shadow-card hover:shadow-systems transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
                      <div className="text-center lg:text-left">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto lg:mx-0 rounded-full bg-primary-glow/20 flex items-center justify-center mb-3 sm:mb-4">
                          <milestone.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-glow" />
                        </div>
                        <Badge variant="outline" className="border-primary-glow text-primary-glow text-xs sm:text-sm">
                          {milestone.period}
                        </Badge>
                      </div>
                      
                      <div className="lg:col-span-2 text-center lg:text-left">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 leading-tight">
                          {milestone.role}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                          {milestone.focus}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Skills</h4>
                        <div className="space-y-2">
                          {milestone.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="mr-2 mb-2">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agile Research Toolkit */}
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

      {/* Research Artifacts Showcase */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Research Artifacts
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Visualizing <span className="text-accent">User Insights</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              From user interviews to system architecture, I create visual artifacts that communicate 
              complex insights and drive informed design decisions.
            </p>
          </motion.div>

          {/* Artifacts Visual Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="h-48 sm:h-64">
                    <img 
                      src={codingWorkspace} 
                      alt="Code analysis and data visualization workspace" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/30"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Badge variant="outline" className="border-accent text-accent">
                  Visual Communication
                </Badge>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  From Data to <span className="text-accent">Decision</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Complex user research findings transformed into clear, actionable visual artifacts 
                  that drive strategic design decisions.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {researchArtifacts.map((artifact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className="glass border-none shadow-card hover:shadow-accent/20 transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                        artifact.color === 'systems' ? 'bg-systems-blue/20' :
                        artifact.color === 'agile' ? 'bg-agile-primary/20' :
                        artifact.color === 'success' ? 'bg-success/20' :
                        'bg-accent/20'
                      }`}>
                        <artifact.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${
                          artifact.color === 'systems' ? 'text-systems-blue' :
                          artifact.color === 'agile' ? 'text-agile-primary' :
                          artifact.color === 'success' ? 'text-success' :
                          'text-accent'
                        }`} />
                      </div>
                      
                      <h3 className="font-semibold text-sm sm:text-base text-foreground mb-2 sm:mb-3 leading-tight">
                        {artifact.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                        {artifact.description}
                      </p>
                      
                      {/* Tools Used */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-muted-foreground">CREATED WITH</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {artifact.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="secondary" className="text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Research Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="glass border-accent/20 shadow-card">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-6">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Research Philosophy
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
                    "Every artifact tells a story. Whether it's a journey map revealing user pain points 
                    or a systems diagram showing technical constraints, I believe in making the invisible visible. 
                    Good research isn't just about gathering data—it's about creating shared understanding 
                    that transforms how teams think about problems."
                  </p>
                  <div className="mt-6">
                    <Badge variant="outline" className="border-accent text-accent">
                      Always ask "Why?" before "How?"
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Journey: Bridging the Gap */}
      <section className="section bg-background relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-copper text-copper">
              Bridging Worlds
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From Military Precision to <span className="text-primary-glow">User-Centered Innovation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">
              My unique journey positions me as a translator between technical complexity and human needs, 
              bridging the gap between military discipline, enterprise systems, and modern user experience.
            </p>
          </motion.div>

          {/* Bridge Visual Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 relative overflow-hidden rounded-2xl"
          >
            <div className="relative h-64 sm:h-80 lg:h-96">
              <img 
                src={abstractNight} 
                alt="Starry night representing vast possibilities and connections" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center max-w-2xl px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Badge variant="outline" className="mb-4 border-primary-glow text-primary-glow bg-background/50 backdrop-blur-sm">
                      Bridging Infinite Possibilities
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      Connecting <span className="text-primary-glow">Complex Systems</span> with Human Needs
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Every challenge is an opportunity to create meaningful connections between technology and users.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bridge Visual Metaphor */}
          <div className="relative mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Bridge Connection Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-success via-primary-glow to-accent transform -translate-y-1/2 z-0 hidden md:block"></div>
              
              {/* Bridge Pillars */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                {/* Military Foundation */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <Card className="glass border-success/20 shadow-systems hover:shadow-success/30 transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-success/20 flex items-center justify-center mb-4 sm:mb-6">
                        <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-success" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-success mb-3 sm:mb-4">Military Foundation</h3>
                      <p className="text-muted-foreground mb-6">
                        Systematic thinking, process optimization, and mission-critical reliability
                      </p>
                      <div className="space-y-2">
                        <Badge variant="outline" className="border-success text-success mr-2 mb-2">
                          Strategic Planning
                        </Badge>
                        <Badge variant="outline" className="border-success text-success mr-2 mb-2">
                          Risk Management
                        </Badge>
                        <Badge variant="outline" className="border-success text-success mr-2 mb-2">
                          Process Excellence
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Enterprise Bridge */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-center"
                >
                  <Card className="glass border-primary-glow/20 shadow-systems hover:shadow-primary-glow/30 transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-primary-glow/20 flex items-center justify-center mb-4 sm:mb-6">
                        <GitBranch className="w-8 h-8 sm:w-10 sm:h-10 text-primary-glow" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary-glow mb-3 sm:mb-4">Enterprise Translation</h3>
                      <p className="text-muted-foreground mb-6">
                        Converting complex technical requirements into scalable business solutions
                      </p>
                      <div className="space-y-2">
                        <Badge variant="outline" className="border-primary-glow text-primary-glow mr-2 mb-2">
                          Systems Integration
                        </Badge>
                        <Badge variant="outline" className="border-primary-glow text-primary-glow mr-2 mb-2">
                          Stakeholder Alignment
                        </Badge>
                        <Badge variant="outline" className="border-primary-glow text-primary-glow mr-2 mb-2">
                          Technical Leadership
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* User Experience Innovation */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-center"
                >
                  <Card className="glass border-accent/20 shadow-systems hover:shadow-accent/30 transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-6">
                        <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4">User-Centered Innovation</h3>
                      <p className="text-muted-foreground mb-6">
                        Transforming complex systems into intuitive, human-centered experiences
                      </p>
                      <div className="space-y-2">
                        <Badge variant="outline" className="border-accent text-accent mr-2 mb-2">
                          Design Thinking
                        </Badge>
                        <Badge variant="outline" className="border-accent text-accent mr-2 mb-2">
                          User Research
                        </Badge>
                        <Badge variant="outline" className="border-accent text-accent mr-2 mb-2">
                          Agile Innovation
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* The Bridge Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Card className="glass border-copper/20 shadow-military">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-copper/20 flex items-center justify-center mb-3 sm:mb-4">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-copper" />
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

                <div className="text-center">
                  <p className="text-lg text-muted-foreground italic">
                    "I don't just build systems or design interfaces — I create bridges between 
                    complex technology and human needs, ensuring solutions are both technically 
                    sound and genuinely useful."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Unique Value Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { 
                  metric: "3 Domains", 
                  label: "Military • Enterprise • UX", 
                  icon: Shield,
                  color: "success"
                },
                { 
                  metric: "15+ Years", 
                  label: "Systems Experience", 
                  icon: Clock,
                  color: "primary-glow"
                },
                { 
                  metric: "100%", 
                  label: "User Adoption Rate", 
                  icon: Target,
                  color: "agile-primary"
                },
                { 
                  metric: "∞", 
                  label: "Translation Capability", 
                  icon: GitBranch,
                  color: "accent"
                }
              ].map((item, index) => (
                <Card key={index} className="glass border-none shadow-card text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      item.color === 'success' ? 'bg-success/20' :
                      item.color === 'primary-glow' ? 'bg-primary-glow/20' :
                      item.color === 'agile-primary' ? 'bg-agile-primary/20' :
                      'bg-accent/20'
                    }`}>
                      <item.icon className={`w-6 h-6 ${
                        item.color === 'success' ? 'text-success' :
                        item.color === 'primary-glow' ? 'text-primary-glow' :
                        item.color === 'agile-primary' ? 'text-agile-primary' :
                        'text-accent'
                      }`} />
                    </div>
                    <div className={`text-3xl font-bold mb-1 ${
                      item.color === 'success' ? 'text-success' :
                      item.color === 'primary-glow' ? 'text-primary-glow' :
                      item.color === 'agile-primary' ? 'text-agile-primary' :
                      'text-accent'
                    }`}>
                      {item.metric}
                    </div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Skills Arsenal
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Technical Expertise Meets <span className="text-accent">User Focus</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              A unique combination of technical systems knowledge and user experience expertise, 
              honed through military service and enterprise development.
            </p>
          </motion.div>

          {/* Skills Visual Intro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
          >
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
                <img 
                  src={robotInnovation} 
                  alt="Innovation and futuristic technology representation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {skillsArsenal.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        </div>
                        <CardTitle className="text-foreground text-lg sm:text-xl">{category.category}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent self-start sm:self-auto text-xs sm:text-sm">
                        {category.proficiency}%
                      </Badge>
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="w-full bg-muted rounded-full h-2 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                        className="bg-accent h-2 rounded-full"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
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

      {/* Mission Briefing CTA */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8"
          >
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-8 border-t border-border/20"
          >
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
    </div>
  );
};

export default AltHome2;