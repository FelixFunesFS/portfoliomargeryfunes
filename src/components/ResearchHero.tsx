import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Target, BookOpen, Calendar } from 'lucide-react';
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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Parallax Tech Background Layers */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: layer1Y }}
      >
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: `url(${heroTechLayer1})` }}
        />
      </motion.div>
      
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: layer2Y }}
      >
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-screen"
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I solve{' '}
            <span className="text-primary">user problems</span>{' '}
            through systematic UX research, bridging{' '}
            <span className="text-primary">technical complexity</span>{' '}
            with{' '}
            <span className="text-accent">human needs</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Military precision meets human empathy. I transform complex systems into intuitive experiences through rigorous research, strategic design, and technical execution.
          </p>
        </motion.div>

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

export default ResearchHero;
