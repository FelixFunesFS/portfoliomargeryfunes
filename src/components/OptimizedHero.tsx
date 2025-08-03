import React, { useEffect, useRef, Suspense, lazy } from 'react';
import { ArrowDown, Code, Palette, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load heavy components
const AnimatedCanvas = lazy(() => import('./AnimatedCanvas'));

const OptimizedHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const slideUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }
  };

  const floatVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 3
      }
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden px-2 sm:px-4 lg:px-6">{/* Enhanced mobile padding */}
      {/* Optimized Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20" />}>
        <AnimatedCanvas />
      </Suspense>
      
      {/* Animated Gradient Spots - Optimized */}
      <motion.div 
        className="absolute top-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.2, 0.8, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.7, 1.3, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="container-custom relative z-10 flex flex-col lg:flex-row items-center text-center lg:text-left max-w-7xl w-full gap-8 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="flex-1 order-2 lg:order-1">
          {/* Military Badge */}
          <motion.div variants={slideUpVariants} className="mb-4 sm:mb-6 flex justify-center lg:justify-start">
            <Badge variant="outline" className="px-4 py-2 text-primary border-primary/30 bg-primary/5">
              <Shield className="w-4 h-4 mr-2" />
              US Air Force Veteran
            </Badge>
          </motion.div>

          <motion.h1 
            variants={scaleVariants} 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-foreground mb-4 sm:mb-6 leading-tight tracking-tight font-medium"
          >
            Margery Funes
          </motion.h1>

          <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-primary">
              UX/UI Designer & Systems Analyst
            </h2>
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
          </motion.div>

          <motion.p 
            variants={slideUpVariants} 
            className="text-muted-foreground max-w-xl lg:max-w-2xl mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base lg:text-lg leading-relaxed px-2 sm:px-0"
          >
            Military-trained systems analyst and UX designer creating mission-critical digital solutions.
            I bring precision, leadership, and strategic thinking to every design challenge.
          </motion.p>

          <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8">
            <Button 
              className="bg-primary hover:bg-primary-light text-primary-foreground px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 focus-visible:ring-offset-2 min-h-[44px]" 
              asChild
            >
              <a href="#military-experience">View Military Projects</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg hover:scale-105 transition-all duration-300 focus-visible:ring-offset-2 min-h-[44px]" 
              asChild
            >
              <a href="#contact">Mission Brief</a>
            </Button>
          </motion.div>

          {/* Enhanced Stats with Military Context */}
          <motion.div variants={slideUpVariants} className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 xl:gap-8 w-full max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                8
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years Military</div>
            </div>
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                1200+
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Aircraft Systems</div>
            </div>
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                87%
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Error Reduction</div>
            </div>
          </motion.div>
        </div>

        {/* Profile Picture with Military Theme */}
        <motion.div className="flex-shrink-0 order-1 lg:order-2 relative" variants={scaleVariants}>
          <div className="relative">
            {/* Enhanced Decorative Elements */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full blur-xl"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full"
              animate={{ rotate: [360, 180, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Profile Image with Loading State */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <Suspense fallback={<Skeleton className="w-full h-full rounded-full" />}>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                  alt="Margery Funes - Military-trained UX Designer" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  loading="eager"
                  decoding="async"
                />
              </Suspense>
              
              {/* Military-themed overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-full" />
            </div>
            
            {/* Enhanced Floating Elements */}
            <motion.div 
              className="absolute top-8 -right-4 w-4 h-4 bg-primary rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-12 -left-6 w-6 h-6 bg-accent rounded-full shadow-lg"
              animate={{
                y: [0, 8, 0],
                x: [0, -3, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      <motion.a 
        href="#military-experience" 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300" 
        aria-label="Scroll to military experience"
        variants={floatVariants}
        initial="hidden"
        animate="visible"
      >
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </motion.a>
    </section>
  );
};

export default OptimizedHero;