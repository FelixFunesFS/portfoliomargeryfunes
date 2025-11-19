import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  BarChart3, 
  Clock, 
  Target, 
  Users, 
  Zap,
  Filter,
  Search,
  ChevronDown,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Database,
  Settings,
  RefreshCw,
  Shield,
  GitBranch
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { caseStudiesData } from '@/data/caseStudies';
import Footer from '@/components/Footer';
import { webDevelopmentStudies } from '@/data/caseStudies/webDevelopmentStudies';
import { CaseStudy } from '@/types/caseStudy';

const CaseStudies = () => {
  const location = useLocation();
  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);
  const allStudies = [...caseStudiesData, ...webDevelopmentStudies];
  const [filteredStudies, setFilteredStudies] = useState<CaseStudy[]>(allStudies);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.title = "Case Studies - Systems Analysis & Agile UX Research";
    window.scrollTo(0, 0);
    setIsLoaded(true);

    // Handle incoming navigation state for auto-selecting case study
    if (location.state?.selectedStudyId) {
      const studyId = location.state.selectedStudyId;
      setSelectedStudy(studyId);
      // Delay scroll to ensure the component is rendered
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  }, [location.state]);

  useEffect(() => {
    let filtered = allStudies;
    
    if (searchTerm) {
      filtered = filtered.filter(study => 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.tools.some(tool => tool.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (filterCategory !== 'all') {
      filtered = filtered.filter(study => {
        switch (filterCategory) {
          case 'automation':
            return study.tools.some(tool => 
              ['VBA', 'JavaScript', 'C#', 'SQL'].includes(tool)
            );
          case 'systems':
            return study.tools.some(tool => 
              ['SharePoint', 'SQL', 'Tableau', 'Power BI'].includes(tool)
            );
          case 'ux':
            return study.tools.some(tool => 
              ['Figma', 'Lovable.dev', 'Excel'].includes(tool)
            );
          case 'webdev':
            return study.tools.some(tool => 
              ['React', 'TypeScript', 'Webflow', 'Node.js'].includes(tool)
            );
          default:
            return true;
        }
      });
    }
    
    setFilteredStudies(filtered);
  }, [searchTerm, filterCategory, allStudies]);

  const handleStudySelect = (id: number) => {
    setSelectedStudy(id);
    window.scrollTo(0, 0);
  };

  const handleClose = () => {
    setSelectedStudy(null);
    window.scrollTo(0, 0);
  };

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

  // Dashboard metrics
  const dashboardMetrics = [
    {
      label: "Total Projects",
      value: allStudies.length.toString(),
      icon: Target,
      color: "primary"
    },
    {
      label: "Hours Saved",
      value: "26K+",
      icon: Clock,
      color: "agile"
    },
    {
      label: "Systems Unified",
      value: "23",
      icon: Database,
      color: "success"
    },
    {
      label: "Max ROI",
      value: "340%",
      icon: TrendingUp,
      color: "accent"
    }
  ];

  // Research methods library
  const researchMethods = [
    {
      method: "User Interviews",
      description: "In-depth conversations to understand user needs and pain points",
      icon: Users,
      applications: ["Requirements gathering", "Problem validation", "User journey mapping"]
    },
    {
      method: "Systems Analysis",
      description: "Comprehensive evaluation of existing workflows and technical architecture",
      icon: Settings,
      applications: ["Process optimization", "Integration planning", "Risk assessment"]
    },
    {
      method: "Agile Sprints", 
      description: "Iterative development cycles with continuous user feedback",
      icon: RefreshCw,
      applications: ["Rapid prototyping", "Feature validation", "Performance improvement"]
    },
    {
      method: "Data Analytics",
      description: "Quantitative analysis of user behavior and system performance",
      icon: BarChart3,
      applications: ["Impact measurement", "Trend identification", "Decision support"]
    }
  ];

  if (selectedStudy) {
    const study = allStudies.find(s => s.id === selectedStudy);
    if (!study) return null;

    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="section gradient-hero">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4 mb-8"
            >
              <Button
                variant="outline"
                onClick={handleClose}
                className="border-primary-glow text-primary-glow hover:bg-primary-glow/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Cases
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 border-agile-primary text-agile-primary">
                Case Study {study.id}
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
                {study.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {study.projectGoal}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Study Details */}
        <section className="section bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Problem Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Card className="glass border-none shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-foreground">
                        <Target className="w-5 h-5 text-destructive" />
                        <span>Problem Statement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.problem}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Solution Approach */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Card className="glass border-none shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-foreground">
                        <Zap className="w-5 h-5 text-primary-glow" />
                        <span>Solution Approach</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {study.solution}
                      </p>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-foreground">Key Outcomes:</h4>
                        <ul className="space-y-2">
                          {study.keyOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-success" />
                              <span className="text-muted-foreground">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* UX Impact */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Card className="glass border-none shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-foreground">
                        <TrendingUp className="w-5 h-5 text-success" />
                        <span>UX Impact & Results</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {study.uxImpact}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Process & Methodology */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Card className="glass border-none shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-foreground">
                        <GitBranch className="w-5 h-5 text-agile-primary" />
                        <span>Methodology & Constraints</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Assumptions</h4>
                        <p className="text-muted-foreground">{study.assumptions}</p>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Limitations</h4>
                        <p className="text-muted-foreground">{study.limitations}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Reflection & Continuous Improvement */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Card className="glass border-primary/20 shadow-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-foreground">
                        <RefreshCw className="w-5 h-5 text-primary" />
                        <span>Reflection & Continuous Improvement</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* What Worked Well */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          What Worked Well
                        </h4>
                        <ul className="space-y-2">
                          {study.reflection.whatWorkedWell.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-success mt-1">✓</span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      {/* Lessons Learned */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Key Lesson Learned
                        </h4>
                        <p className="text-muted-foreground italic bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                          "{study.reflection.lessonsLearned}"
                        </p>
                      </div>

                      <Separator />

                      {/* Would Do Differently */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-agile-primary" />
                          Would Do Differently
                        </h4>
                        <ul className="space-y-2">
                          {study.reflection.wouldDoDifferently.map((item, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-agile-primary mt-1">→</span>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      {/* Potential Impact */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-success" />
                          Potential Future Impact
                        </h4>
                        <p className="text-muted-foreground bg-success/5 p-4 rounded-lg border-l-4 border-success">
                          {study.reflection.potentialImpact}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Card className="glass border-agile-primary/20 shadow-agile">
                    <CardHeader>
                      <CardTitle className="text-agile-primary">Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">My Role</h4>
                        <Badge variant="outline" className="mb-2 border-agile-primary text-agile-primary">
                          {study.myRole.title}
                        </Badge>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {study.myRole.responsibilities.map((resp, index) => (
                            <li key={index}>• {resp}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.tools.map((tool, index) => (
                            <Badge key={index} variant="secondary">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Metrics */}
                {study.metrics && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Card className="glass border-success/20 shadow-systems">
                      <CardHeader>
                        <CardTitle className="text-success">Impact Metrics</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {study.metrics.map((metric, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">{metric.label}</span>
                              <span className="font-bold text-success">{metric.value}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min(metric.percentage, 100)}%` }}
                                transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                                className="bg-success h-2 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                )}

                {/* Navigation */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Card className="glass border-none shadow-card">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        {study.id > 1 && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const currentIndex = allStudies.findIndex(s => s.id === study.id);
                              if (currentIndex > 0) {
                                handleStudySelect(allStudies[currentIndex - 1].id);
                              }
                            }}
                            className="border-primary-glow text-primary-glow hover:bg-primary-glow/10"
                          >
                            <ArrowLeft className="w-4 h-4 mr-1" />
                            Previous
                          </Button>
                        )}
                        {study.id < allStudies[allStudies.length - 1].id && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              const currentIndex = allStudies.findIndex(s => s.id === study.id);
                              if (currentIndex < allStudies.length - 1) {
                                handleStudySelect(allStudies[currentIndex + 1].id);
                              }
                            }}
                            className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 ml-auto"
                          >
                            Next
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Main dashboard view
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="section gradient-hero"
      >
        <div className="container-custom">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary-glow text-primary-glow">
              Strategic Problem-Solving Documentation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Case Studies in <span className="text-primary-glow">Systems Analysis</span> & 
              <span className="text-agile-primary"> Agile UX</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Real-world applications of military precision, systems thinking, and agile methodologies 
              to solve complex user experience and technical challenges.
            </p>
          </motion.div>

          {/* Dashboard Metrics */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 mb-12">
            {dashboardMetrics.map((metric, index) => (
              <Card key={index} className="glass border-none shadow-card text-center">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                    metric.color === 'primary' ? 'bg-primary-glow/20' :
                    metric.color === 'agile' ? 'bg-agile-primary/20' :
                    metric.color === 'success' ? 'bg-success/20' :
                    'bg-accent/20'
                  }`}>
                    <metric.icon className={`w-6 h-6 ${
                      metric.color === 'primary' ? 'text-primary-glow' :
                      metric.color === 'agile' ? 'text-agile-primary' :
                      metric.color === 'success' ? 'text-success' :
                      'text-accent'
                    }`} />
                  </div>
                  <div className={`text-3xl font-bold mb-1 ${
                    metric.color === 'primary' ? 'text-primary-glow' :
                    metric.color === 'agile' ? 'text-agile-primary' :
                    metric.color === 'success' ? 'text-success' :
                    'text-accent'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Search and Filter */}
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass border-primary-glow/20"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full md:w-48 glass border-primary-glow/20">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="automation">Automation</SelectItem>
                <SelectItem value="systems">Systems</SelectItem>
                <SelectItem value="ux">UX Design</SelectItem>
                <SelectItem value="webdev">Web Development</SelectItem>
              </SelectContent>
            </Select>
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
      <section className="section bg-background">
        <div className="container-custom">
          <AnimatePresence>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="h-full cursor-pointer"
                  onClick={() => handleStudySelect(study.id)}
                >
                  <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300 h-full">
                    <div className="h-48 bg-gradient-to-br from-primary-glow/20 to-agile-primary/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold opacity-20 text-foreground">
                          {study.id}
                        </span>
                      </div>
                      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-background/90 to-transparent">
                        <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                          {study.title}
                        </h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tools.slice(0, 3).map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                        {study.tools.length > 3 && (
                          <Badge variant="outline">+{study.tools.length - 3}</Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {study.problem}
                      </p>
                      
                      {study.metrics && (
                        <div className="mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Key Impact:</span>
                            <span className="font-semibold text-success">
                              {study.metrics[0]?.value}
                            </span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-auto pt-4">
                        <span className="text-sm font-medium text-primary-glow">View Case Study</span>
                        <ArrowRight className="w-4 h-4 text-primary-glow" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Research Methods Library */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-agile-primary text-agile-primary">
              Research Methodologies
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              My <span className="text-agile-primary">Research Toolkit</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic approaches to understanding user needs, analyzing complex systems, 
              and delivering iterative solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none shadow-card hover:shadow-agile transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-agile-primary/20 flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-agile-primary" />
                      </div>
                      <CardTitle className="text-foreground">{method.method}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                    <ul className="space-y-1">
                      {method.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-agile-primary" />
                          <span className="text-sm text-muted-foreground">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;