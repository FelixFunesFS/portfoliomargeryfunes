
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Palette, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particles removed for cleaner background
    const particles: Particle[] = [];
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.speedX = 0;
        this.speedY = 0;
      }
      
      update() {
        // No animation needed
      }
      
      draw() {
        // No drawing needed
      }
    }
    
    const init = () => {
      // No particles to initialize
    };
    
    const connect = () => {
      // Line connections removed for cleaner look
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // No particles to animate
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
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
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
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
        repeatDelay: 3,
      },
    },
  };

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20 z-0"
      />
      
      {/* Animated Gradient Spots */}
      <motion.div
        className="absolute top-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.7, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-accent/25 to-primary/15 rounded-full blur-xl"
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.4, 0.6, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl"
        animate={{
          x: [0, -15, 25, 0],
          y: [0, 20, -25, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
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
          <motion.div
            variants={slideUpVariants}
            className="mb-4 sm:mb-6"
          >
            <span className="text-foreground/70 text-xs sm:text-sm tracking-wider uppercase">Portfolio</span>
          </motion.div>

          <motion.h1 
            variants={scaleVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-4 sm:mb-6 leading-tight tracking-tight"
          >
            Margery Funes
          </motion.h1>

          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gradient">
              UX/UI Designer & Developer
            </h2>
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Code</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Design</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">Research</span>
              </div>
            </div>
          </motion.div>

          <motion.p 
            variants={slideUpVariants}
            className="text-foreground/80 max-w-xl lg:max-w-2xl mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0 lg:px-0"
          >
            I bridge the gap between users and technology, creating research-driven digital 
            experiences that solve real problems through elegant design and thoughtful development.
          </motion.p>

          <motion.div 
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25" 
              asChild
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:scale-105 transition-all duration-300" 
              asChild
            >
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>

          <motion.div
            variants={slideUpVariants}
            className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-md sm:max-w-lg lg:max-w-none"
          >
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                5+
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                50+
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center lg:text-left">
              <motion.div 
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                100%
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Profile Picture */}
        <motion.div 
          className="flex-shrink-0 order-1 lg:order-2 relative"
          variants={scaleVariants}
        >
          <div className="relative">
            {/* Decorative Elements */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full blur-xl"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full"
              animate={{
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Profile Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                alt="Margery Funes - UX/UI Designer & Developer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 rounded-full" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute top-8 -right-4 w-4 h-4 bg-primary rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-12 -left-6 w-6 h-6 bg-accent rounded-full shadow-lg"
              animate={{
                y: [0, 8, 0],
                x: [0, -3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      <motion.a 
        href="#projects" 
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300"
        aria-label="Scroll to projects"
        variants={floatVariants}
        initial="hidden"
        animate="visible"
      >
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </motion.a>
    </section>
  );
};

export default Hero;
