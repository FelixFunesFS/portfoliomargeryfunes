import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Target, BookOpen, Calendar, Users, TestTube, Map } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import heroTechLayer1 from '@/assets/hero-tech-layer-1.jpg';
import heroTechLayer2 from '@/assets/hero-tech-layer-2.jpg';

const ResearchHero = () => {
  // Parallax effect for background layers
  const { scrollY } = useScroll();
  
  // Parallax for tech background layers (slower movement for depth)
  const layer1Y = useTransform(scrollY, [0, 500], [0, -80]);
  const layer2Y = useTransform(scrollY, [0, 500], [0, -120]);

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleSkillsOverview = () => {
    const skillsSection = document.getElementById('skills-section');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewCaseStudies = () => {
    const caseStudiesSection = document.getElementById('case-studies-section');
    caseStudiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleConsultation = () => {
    window.open('https://calendly.com/your-link', '_blank');
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Parallax Tech Background Layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: layer1Y }}
      >
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroTechLayer1})` }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: layer2Y }}
      >
        <div 
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-screen"
          style={{ backgroundImage: `url(${heroTechLayer2})` }}
        />
      </motion.div>


      {/* Content */}
      <div className="relative z-10 container-custom px-6 py-16 space-y-8">
        {/* Top CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            onClick={handleDownloadResume}
            variant="default"
            size="lg"
            className="gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
          <Button
            onClick={handleSkillsOverview}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Target className="w-4 h-4" />
            Skills Overview
          </Button>
        </motion.div>

        {/* Badge */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge 
            variant="outline" 
            className="px-6 py-2 text-sm font-medium border-2 border-primary/30 bg-primary/5 text-foreground"
          >
            UX Researcher • Systems Analyst • Human-Centered Problem Solver
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.8)]">
            I solve{' '}
            <span className="text-primary">user problems</span>{' '}
            through systematic UX research, bridging{' '}
            <span className="text-primary">technical complexity</span>{' '}
            with{' '}
            <span className="text-accent">human needs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.6)]">
            Military precision meets human empathy. I transform complex systems into intuitive experiences through rigorous research, strategic design, and technical execution.
          </p>
        </motion.div>

        {/* Research Credentials Stats Bar */}
        <ResearchCredentialsBar />

        {/* Bottom CTAs */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleViewCaseStudies}
            variant="default"
            size="lg"
            className="gap-2"
          >
            <BookOpen className="w-4 h-4" />
            View Research Case Studies
          </Button>
          <Button
            onClick={handleScheduleConsultation}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Schedule Research Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const ResearchCredentialsBar = () => {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  
  const interviewCount = useCountUp({ end: 50, duration: 2000, isInView });
  const testCount = useCountUp({ end: 200, duration: 2000, isInView });
  const journeyCount = useCountUp({ end: 25, duration: 2000, isInView });

  const credentials = [
    {
      icon: Users,
      count: interviewCount,
      label: 'User Interviews',
      description: 'Conducted',
      colorScheme: {
        iconBg: 'bg-primary/10',
        iconColor: 'text-primary',
        countColor: 'text-primary',
        hoverBorder: 'hover:border-primary/30'
      }
    },
    {
      icon: TestTube,
      count: testCount,
      label: 'Usability Tests',
      description: 'Sessions',
      colorScheme: {
        iconBg: 'bg-accent/10',
        iconColor: 'text-accent',
        countColor: 'text-accent',
        hoverBorder: 'hover:border-accent/30'
      }
    },
    {
      icon: Map,
      count: journeyCount,
      label: 'Journey Maps',
      description: 'Created',
      colorScheme: {
        iconBg: 'bg-success/10',
        iconColor: 'text-success',
        countColor: 'text-success',
        hoverBorder: 'hover:border-success/30'
      }
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {credentials.map((cred, index) => {
          const Icon = cred.icon;
          return (
            <motion.div
              key={cred.label}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <div className={`relative backdrop-blur-sm bg-card/30 border border-border/50 rounded-lg p-4 hover:bg-card/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${cred.colorScheme.hoverBorder}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${cred.colorScheme.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${cred.colorScheme.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-2xl font-bold ${cred.colorScheme.countColor}`}>
                        {cred.count}+
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {cred.label}
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      {cred.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ResearchHero;
