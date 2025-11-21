import React from 'react';
import { ArrowDown, Code, Palette, Users, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const OptimizedHero = () => {
  return <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden px-2 sm:px-4 lg:px-6">
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />
      
      {/* Static Gradient Spots */}
      <div className="absolute top-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />

      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center text-center lg:text-left max-w-7xl w-full gap-8 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Military Badge */}
          <div className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/30 bg-primary/5">
              <Shield className="w-4 h-4 mr-2" />
              US Air Force Veteran
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground mb-4 sm:mb-6 leading-tight tracking-tight font-medium">
            Margery Funes
          </h1>

          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-primary mb-2">
            UX Researcher & Human-Centered Designer
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground font-medium mb-3">
            20+ Years Experience | Aerospace & Defense | Bilingual (English/Spanish)
          </p>
          
          {/* Research Credentials Badge */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
            <Badge variant="secondary" className="px-3 py-1.5 bg-primary/10 text-primary border-primary/20">
              50+ User Interviews
            </Badge>
            <Badge variant="secondary" className="px-3 py-1.5 bg-primary/10 text-primary border-primary/20">
              200+ Usability Sessions
            </Badge>
            <Badge variant="secondary" className="px-3 py-1.5 bg-primary/10 text-primary border-primary/20">
              25+ Journey Maps
            </Badge>
          </div>

          <div className="mt-4 sm:mt-6 mb-6 sm:mb-8">
            <div className="flex justify-center lg:justify-start gap-2 sm:gap-3 flex-wrap">
              <div className="flex items-center gap-1 text-muted-foreground bg-muted/30 px-2 py-1 rounded-full text-xs sm:text-sm">
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Systems</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground bg-muted/30 px-2 py-1 rounded-full text-xs sm:text-sm">
                <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Design</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground bg-muted/30 px-2 py-1 rounded-full text-xs sm:text-sm">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Leadership</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground max-w-xl lg:max-w-2xl mb-6 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0">
            Military-trained systems analyst and UX designer creating mission-critical digital solutions.
            I bring precision, leadership, and strategic thinking to every design challenge.
          </p>

          {/* What I Solve For You */}
          <div className="mb-6 sm:mb-8 lg:mb-10 px-2 sm:px-0">
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">What I Solve For You</h3>
            <ul className="space-y-2 sm:space-y-3 max-w-xl lg:max-w-2xl">
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Workflow Optimization:</strong> Streamline complex processes and reduce operational bottlenecks through systems-level analysis</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Human-Centered Design:</strong> Create intuitive interfaces that reduce cognitive load and improve user satisfaction</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong className="text-foreground">Automation & Integration:</strong> Leverage AI and low-code platforms to deliver scalable, efficient solutions</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
            <Button className="bg-primary hover:bg-primary-light text-primary-foreground px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 focus-visible:ring-offset-2 min-h-[44px]" asChild>
              <a href="/resume.pdf" target="_blank">Download Resume</a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 focus-visible:ring-offset-2 min-h-[44px]" asChild>
              <a href="#about">Skills Overview</a>
            </Button>
          </div>

          {/* Enhanced Stats with Military Context */}
          
        </div>

        {/* Profile Picture with Military Theme */}
        <div className="flex-shrink-0 order-1 lg:order-2 relative">
          <div className="relative">
            {/* Static Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full blur-xl" />
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full" />
            
            {/* Profile Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" alt="Margery Funes - Military-trained UX Designer" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out" loading="eager" decoding="async" />
              
              {/* Military-themed overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-full" />
            </div>
            
            {/* Static Floating Elements */}
            <div className="absolute top-8 -right-4 w-4 h-4 bg-primary rounded-full shadow-lg" />
            <div className="absolute bottom-12 -left-6 w-6 h-6 bg-accent rounded-full shadow-lg" />
          </div>
        </div>
      </div>
      
      <a href="#military-experience" className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300" aria-label="Scroll to military experience">
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </a>
    </section>;
};
export default OptimizedHero;