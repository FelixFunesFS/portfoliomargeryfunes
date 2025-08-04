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
import InteractiveJourney from '@/components/InteractiveJourney';

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

      <InteractiveJourney />

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