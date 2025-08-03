import React, { useEffect, useState } from 'react';
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
import { useRef } from 'react';

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

  // Problem-Solution Matrix Data
  const problemSolutionMatrix = [
    {
      problem: "Legacy Systems Integration",
      solution: "Modern API Development",
      icon: Database,
      metrics: "26K+ hours saved",
      color: "systems"
    },
    {
      problem: "Manual Process Inefficiencies", 
      solution: "Automation & Workflow Design",
      icon: RefreshCw,
      metrics: "80-98% time reduction",
      color: "agile"
    },
    {
      problem: "Poor User Adoption",
      solution: "Human-Centered Design",
      icon: Users,
      metrics: "340% conversion increase",
      color: "success"
    },
    {
      problem: "Data Silos & Inconsistency",
      solution: "Enterprise Architecture",
      icon: Layers,
      metrics: "23 global bases unified",
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

  // Agile Research Toolkit
  const agileToolkit = [
    {
      phase: "Discovery Sprint",
      methods: ["User Interviews", "Systems Analysis", "Stakeholder Mapping"],
      deliverables: ["Problem Definition", "User Journey Maps", "Technical Requirements"],
      duration: "1-2 weeks",
      icon: Target
    },
    {
      phase: "Analysis Sprint", 
      methods: ["Data Analysis", "Workflow Mapping", "Solution Architecture"],
      deliverables: ["System Design", "Process Flows", "Technical Specifications"],
      duration: "1-2 weeks",
      icon: BarChart3
    },
    {
      phase: "Solution Sprint",
      methods: ["Rapid Prototyping", "Iterative Development", "User Testing"],
      deliverables: ["MVP", "Code Implementation", "User Feedback"],
      duration: "2-4 weeks", 
      icon: Code
    },
    {
      phase: "Validation Sprint",
      methods: ["A/B Testing", "Performance Metrics", "Retrospectives"],
      deliverables: ["Impact Report", "Optimization Plan", "Process Improvements"],
      duration: "1-2 weeks",
      icon: CheckCircle
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
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary-glow radar-animation"></div>
            <div className="absolute inset-8 rounded-full border border-primary-glow/50 radar-animation" style={{animationDelay: '1s'}}></div>
            <div className="absolute inset-16 rounded-full border border-primary-glow/30 radar-animation" style={{animationDelay: '2s'}}></div>
            <Radar className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-primary-glow" />
          </div>
        </motion.div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-6">
                <Badge variant="outline" className="mb-4 text-lg py-2 px-4 border-primary-glow text-primary-glow">
                  Systems Analyst • UX Researcher • Agile Problem Solver
                </Badge>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold mb-6 text-foreground"
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
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Military precision meets modern product development. I bridge the gap between 
                complex technical systems and user needs through systematic analysis and 
                iterative design methodologies.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow">
                  View Case Studies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10">
                  Download Resume
                </Button>
              </motion.div>

              {/* Key Metrics */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 text-center"
              >
                <div>
                  <div className="text-3xl font-bold text-primary-glow">26K+</div>
                  <div className="text-sm text-muted-foreground">Hours Saved Annually</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-agile-primary">23</div>
                  <div className="text-sm text-muted-foreground">Global Bases Unified</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">340%</div>
                  <div className="text-sm text-muted-foreground">Max Conversion Increase</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive Systems Diagram */}
            <motion.div variants={itemVariants} className="relative">
              <Card className="glass border-primary-glow/20 shadow-systems">
                <CardHeader>
                  <CardTitle className="text-center text-primary-glow">
                    Systems Analysis Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['User Problems', 'Systems Analysis', 'Agile Solutions', 'Measurable Results'].map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + 1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary-glow/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary-glow">{index + 1}</span>
                        </div>
                        <span className="text-foreground">{step}</span>
                        {index < 3 && (
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
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
              Problem-Solution Matrix
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Complex Problems, <span className="text-agile-primary">Systematic Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I specialize in identifying systemic issues and implementing scalable solutions 
              through agile methodologies and user-centered design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemSolutionMatrix.map((item, index) => (
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
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                        item.color === 'systems' ? 'bg-systems-blue/20' :
                        item.color === 'agile' ? 'bg-agile-primary/20' :
                        item.color === 'success' ? 'bg-success/20' :
                        'bg-accent/20'
                      }`}>
                        <item.icon className={`w-8 h-8 ${
                          item.color === 'systems' ? 'text-systems-blue' :
                          item.color === 'agile' ? 'text-agile-primary' :
                          item.color === 'success' ? 'text-success' :
                          'text-accent'
                        }`} />
                      </div>
                      <Badge variant="outline" className="text-xs text-muted-foreground mb-2">
                        PROBLEM
                      </Badge>
                      <h3 className="font-semibold text-foreground mb-4">{item.problem}</h3>
                      
                      <ArrowRight className="w-4 h-4 mx-auto text-muted-foreground mb-4" />
                      
                      <Badge variant="outline" className="text-xs text-primary-glow mb-2">
                        SOLUTION
                      </Badge>
                      <h4 className="font-semibold text-primary-glow mb-4">{item.solution}</h4>
                      
                      <div className={`text-2xl font-bold ${
                        item.color === 'systems' ? 'text-systems-blue' :
                        item.color === 'agile' ? 'text-agile-primary' :
                        item.color === 'success' ? 'text-success' :
                        'text-accent'
                      }`}>
                        {item.metrics}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Military to Agile Journey */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-success text-success">
              Professional Evolution
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              From Military Precision to <span className="text-agile-primary">Agile Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My journey from Air Force systems operations to agile UX research, 
              combining military discipline with modern product development methodologies.
            </p>
          </motion.div>

          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="glass border-none shadow-card hover:shadow-systems transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-4 gap-6 items-center">
                      <div className="text-center lg:text-left">
                        <div className="w-16 h-16 mx-auto lg:mx-0 rounded-full bg-primary-glow/20 flex items-center justify-center mb-4">
                          <milestone.icon className="w-8 h-8 text-primary-glow" />
                        </div>
                        <Badge variant="outline" className="border-primary-glow text-primary-glow">
                          {milestone.period}
                        </Badge>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {milestone.role}
                        </h3>
                        <p className="text-lg text-muted-foreground mb-4">
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
            <h2 className="text-4xl font-bold mb-6">
              Sprint-Based <span className="text-agile-primary">Problem Solving</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My systematic approach to UX research combines agile methodologies with 
              systems analysis for rapid, iterative problem solving.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agileToolkit.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="h-full"
              >
                <Card className="glass border-agile-primary/20 shadow-agile hover:shadow-agile/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-agile-primary/20 flex items-center justify-center mb-4">
                      <phase.icon className="w-6 h-6 text-agile-primary" />
                    </div>
                    <CardTitle className="text-agile-primary">{phase.phase}</CardTitle>
                    <Badge variant="outline" className="w-fit border-agile-secondary text-agile-secondary">
                      {phase.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
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
            <h2 className="text-4xl font-bold mb-6">
              From Military Precision to <span className="text-primary-glow">User-Centered Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              My unique journey positions me as a translator between technical complexity and human needs, 
              bridging the gap between military discipline, enterprise systems, and modern user experience.
            </p>
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
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-success via-primary-glow to-accent transform -translate-y-1/2 z-0"></div>
              
              {/* Bridge Pillars */}
              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {/* Military Foundation */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-center"
                >
                  <Card className="glass border-success/20 shadow-systems hover:shadow-success/30 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-success/20 flex items-center justify-center mb-6">
                        <Shield className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold text-success mb-4">Military Foundation</h3>
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
                    <CardContent className="p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-primary-glow/20 flex items-center justify-center mb-6">
                        <GitBranch className="w-10 h-10 text-primary-glow" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary-glow mb-4">Enterprise Translation</h3>
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
                    <CardContent className="p-8">
                      <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-6">
                        <Brain className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-accent mb-4">User-Centered Innovation</h3>
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
              <CardContent className="p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-copper/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-copper" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    The Bridge Effect
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Where technical expertise meets human understanding
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
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
            <div className="grid md:grid-cols-4 gap-6">
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
                  <CardContent className="p-6">
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
            <h2 className="text-4xl font-bold mb-6">
              Technical Expertise Meets <span className="text-accent">User Focus</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A unique combination of technical systems knowledge and user experience expertise, 
              honed through military service and enterprise development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsArsenal.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-accent" />
                        </div>
                        <CardTitle className="text-foreground">{category.category}</CardTitle>
                      </div>
                      <Badge variant="outline" className="border-accent text-accent">
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
              <CardContent className="p-12">
                <Badge variant="outline" className="mb-6 border-primary-glow text-primary-glow">
                  Mission Briefing
                </Badge>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Ready to solve your next <span className="text-primary-glow">complex challenge</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how systematic analysis and agile UX research can transform 
                  your user experience and business outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow">
                    Start a Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10">
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AltHome2;