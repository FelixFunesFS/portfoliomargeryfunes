import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
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
  ChevronDown,
  Eye,
  MapPin,
  ExternalLink,
  Globe,
  Monitor,
  Smartphone,
  Heart,
  Home
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import WebDesignCard from '@/components/WebDesignCard';

// Import images
import codingWorkspace from '@/assets/coding-workspace.jpg';
import circuitBoard from '@/assets/circuit-board.jpg';
import robotInnovation from '@/assets/robot-innovation.jpg';
import researchDesk from '@/assets/research-desk.jpg';
import abstractNight from '@/assets/abstract-night.jpg';
import caseStudy1Dashboard from '@/assets/case-study-1-dashboard.jpg';
import caseStudy5Automation from '@/assets/case-study-5-automation.jpg';
import caseStudy3Slides from '@/assets/case-study-3-slides.jpg';
import caseStudy4Workspace from '@/assets/case-study-4-workspace.jpg';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const navigate = useNavigate();

  const handleViewCaseStudy = (projectTitle: string) => {
    // Map project titles to case study IDs
    const projectToCaseStudyMap: { [key: string]: number } = {
      "Soul Train's Eatery": 8,
      "Souls Feeding Souls": 9,
      "Visions of Hope": 10,
      "Veteran's Benefits Beyond the VA Wall": 11,
      "Discover El Salvador": 12
    };
    
    const caseStudyId = projectToCaseStudyMap[projectTitle];
    if (caseStudyId) {
      navigate('/case-studies', { state: { selectedStudyId: caseStudyId } });
    }
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="section bg-gradient relative overflow-hidden"
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Hero Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <Badge variant="outline" className="mb-6 border-military-primary text-military-primary">
                Systems • Research • Design
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Bridging{' '}
                <span className="text-gradient bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary bg-clip-text text-transparent">
                  Systems & Users
                </span>
                <br />
                with Precision
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I transform complex technical challenges into user-centered solutions, combining military precision 
                with agile innovation to deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-base px-8 py-3">
                  View Case Studies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base px-8 py-3 border-systems-blue text-systems-blue hover:bg-systems-blue/10">
                  Research Process
                </Button>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={circuitBoard} 
                  alt="Complex systems and technology" 
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
                
                {/* Floating metrics */}
                <div className="absolute top-6 right-6">
                  <Card className="glass border-none shadow-accent">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-agile-primary">98%</div>
                        <div className="text-xs text-muted-foreground">Faster Process</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="absolute bottom-6 left-6">
                  <Card className="glass border-none shadow-systems">
                    <CardContent className="p-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-systems-blue">45%</div>
                        <div className="text-xs text-muted-foreground">Error Reduction</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <section className="section bg-gradient-to-br from-background via-background/95 to-military-primary/5 relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-military-primary text-military-primary backdrop-blur-sm bg-background/50">
              Evolution
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              My Journey to <span className="text-gradient bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary bg-clip-text text-transparent">User-Centered Design</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">
              From military systems to enterprise solutions to user experience research — each phase has built 
              the unique perspective I bring to solving complex problems.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary transform -translate-y-1/2 z-0 hidden md:block opacity-60"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
              {/* Military Phase */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center"
              >
                <Card className="glass border-military-primary/20 shadow-systems hover:shadow-military-primary/30 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-military-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                      <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-military-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-military-primary mb-3 sm:mb-4">Military Foundation</h3>
                    <p className="text-muted-foreground mb-6">
                      Systematic thinking, process optimization, and mission-critical reliability
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-military-primary text-military-primary mr-2 mb-2">
                        Strategic Planning
                      </Badge>
                      <Badge variant="outline" className="border-military-primary text-military-primary mr-2 mb-2">
                        Risk Management
                      </Badge>
                      <Badge variant="outline" className="border-military-primary text-military-primary mr-2 mb-2">
                        Process Excellence
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enterprise Phase */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center"
              >
                <Card className="glass border-systems-blue/20 shadow-systems hover:shadow-systems-blue/30 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-systems-blue/20 flex items-center justify-center mb-4 sm:mb-6">
                      <GitBranch className="w-8 h-8 sm:w-10 sm:h-10 text-systems-blue" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-systems-blue mb-3 sm:mb-4">Enterprise Translation</h3>
                    <p className="text-muted-foreground mb-6">
                      Converting complex technical requirements into scalable business solutions
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-systems-blue text-systems-blue mr-2 mb-2">
                        Systems Integration
                      </Badge>
                      <Badge variant="outline" className="border-systems-blue text-systems-blue mr-2 mb-2">
                        Stakeholder Alignment
                      </Badge>
                      <Badge variant="outline" className="border-systems-blue text-systems-blue mr-2 mb-2">
                        Technical Leadership
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* UX Phase */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <Card className="glass border-agile-primary/20 shadow-systems hover:shadow-agile-primary/30 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-agile-primary/20 flex items-center justify-center mb-4 sm:mb-6">
                      <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-agile-primary" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-agile-primary mb-3 sm:mb-4">User-Centered Innovation</h3>
                    <p className="text-muted-foreground mb-6">
                      Transforming complex systems into intuitive, human-centered experiences
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="border-agile-primary text-agile-primary mr-2 mb-2">
                        Design Thinking
                      </Badge>
                      <Badge variant="outline" className="border-agile-primary text-agile-primary mr-2 mb-2">
                        User Research
                      </Badge>
                      <Badge variant="outline" className="border-agile-primary text-agile-primary mr-2 mb-2">
                        Agile Innovation
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 max-w-5xl mx-auto"
          >
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gradient-to-br from-background via-background/95 to-accent/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              Let's Connect
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Bridge <span className="text-accent">Complex Challenges</span>?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Whether you need systems analysis, user research, or technical leadership, 
              I'm here to help transform your complex challenges into user-centered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 py-3">
                Start a Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-3 border-accent text-accent hover:bg-accent/10">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;