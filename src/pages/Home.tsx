import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Target, Zap, Users, ArrowRight, Radar, Settings, Brain, ChevronDown, Eye, Trophy, GraduationCap, Search, TestTube, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import WebDesignCard from '@/components/WebDesignCard';
import SkillItem from '@/components/SkillItem';
import ResearchImpactGlance from '@/components/ResearchImpactGlance';
import ResearchConsultationCTA from '@/components/ResearchConsultationCTA';
import ResearchStoriesCarousel from '@/components/ResearchStoriesCarousel';

// Import data
import { researchStories } from '@/data/researchStories';
import { skillCategories } from '@/data/skills';
import { webDesigns } from '@/data/webProjects';

// Import animations
import { containerVariants, itemVariants, radarVariants } from '@/lib/animations';

// Import images
import robotInnovation from '@/assets/robot-innovation.jpg';
import researchDesk from '@/assets/research-desk.jpg';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const navigate = useNavigate();
  
  const handleViewCaseStudy = (projectTitle: string) => {
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
    document.title = "UX Researcher | Systems Analyst | Human-Centered Problem Solver";
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

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
        <motion.div variants={radarVariants} className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-primary-glow radar-animation"></div>
            <div className="absolute inset-4 sm:inset-8 rounded-full border border-primary-glow/50 radar-animation" style={{ animationDelay: '1s' }}></div>
            <div className="absolute inset-8 sm:inset-16 rounded-full border border-primary-glow/30 radar-animation" style={{ animationDelay: '2s' }}></div>
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
                  View Research Case Studies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-glow text-primary-glow hover:bg-primary-glow/10 min-h-[48px] md:min-h-[52px] lg:min-h-[56px] text-sm md:text-base lg:text-lg px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-4 w-full sm:w-auto">
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule Research Consultation
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
                        {index < 3 && <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground ml-auto" />}
                      </motion.div>
                    ))}
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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
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

      {/* Research Impact at a Glance */}
      <ResearchImpactGlance />

      {/* Research Stories Section */}
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

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 relative overflow-hidden rounded-xl"
          >
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

          <ResearchStoriesCarousel stories={researchStories} />
          <ResearchConsultationCTA />
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
              Core UX Research Skills
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Research Methods & <span className="text-accent">Technical Expertise</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              A systematic approach to user research combining proven methodologies with technical implementation capabilities.
            </p>
          </motion.div>

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
                <img src={robotInnovation} alt="Innovation and futuristic technology representation" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-background/90 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none shadow-card hover:shadow-military transition-all duration-300">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-foreground text-lg sm:text-xl mb-4">
                      {category}
                    </CardTitle>
                    <div className="space-y-3">
                      {skills.map((skill, skillIndex) => (
                        <SkillItem 
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          proficiency={skill.proficiency}
                          description={skill.description}
                          delay={index * 100 + skillIndex * 50}
                        />
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Web Development Projects */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">
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
            {webDesigns.map((project, index) => (
              <WebDesignCard 
                key={index}
                project={project}
                index={index}
                onViewCaseStudy={() => handleViewCaseStudy(project.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
