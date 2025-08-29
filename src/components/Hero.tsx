import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowDown, Code, Palette, Users, Sparkles, Zap, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Interactive3DParticles } from './Interactive3DParticles';
import { TypewriterText } from './TypewriterText';
import { ParallaxElement } from './ParallaxElement';
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    hidden: {
      opacity: 0,
      y: 20
    },
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
  return <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6">
      <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20 z-0" />
      
      {/* Interactive 3D Particles */}
      {isLoaded && <Interactive3DParticles mousePosition={mousePosition} />}
      
      {/* Enhanced Animated Gradient Spots with Parallax */}
      <ParallaxElement speed={0.3} direction="up">
        <motion.div 
          className="absolute top-20 left-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-accent/40 to-accent/10 rounded-full blur-3xl" 
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 180, 360]
          }} 
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
      </ParallaxElement>
      <ParallaxElement speed={0.4} direction="down">
        <motion.div 
          className="absolute bottom-32 right-1/4 w-24 h-24 sm:w-36 sm:h-36 bg-gradient-to-br from-primary/30 to-accent/25 rounded-full blur-2xl" 
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.6, 1.4, 1],
            rotate: [360, 180, 0]
          }} 
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }} 
        />
      </ParallaxElement>
      <motion.div className="absolute top-1/2 right-10 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-accent/25 to-primary/15 rounded-full blur-xl" animate={{
      x: [0, 20, -30, 0],
      y: [0, -30, 20, 0],
      scale: [1, 1.4, 0.6, 1]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} />
      <motion.div className="absolute top-1/3 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl" animate={{
      x: [0, -15, 25, 0],
      y: [0, 20, -25, 0],
      scale: [1, 0.8, 1.2, 1]
    }} transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }} />
      
      <motion.div className="container-custom relative z-10 flex flex-col lg:flex-row items-center text-center lg:text-left max-w-7xl w-full gap-8 lg:gap-16" variants={containerVariants} initial="hidden" animate="visible">
        {/* Left Content */}
        <div className="flex-1 order-2 lg:order-1">
          <motion.div variants={slideUpVariants} className="mb-4 sm:mb-6">
            <span className="text-foreground/70 text-xs sm:text-sm tracking-wider uppercase">Portfolio</span>
          </motion.div>

          <motion.h1 variants={scaleVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-4 sm:mb-6 leading-tight tracking-tight font-medium xl:text-8xl">
            <TypewriterText text="Margery Funes" delay={800} speed={120} />
          </motion.h1>

          <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gradient">
              <TypewriterText text="UX/UI Designer & Developer" delay={2000} speed={80} />
            </h2>
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4">
              <motion.div 
                className="flex items-center gap-1.5 text-muted-foreground bg-muted/40 backdrop-blur-sm px-3 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all cursor-pointer group"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'hsl(var(--primary) / 0.1)',
                  boxShadow: '0 4px 20px hsl(var(--primary) / 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors" />
                <span className="text-xs sm:text-sm group-hover:text-primary transition-colors">Code</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1.5 text-muted-foreground bg-muted/40 backdrop-blur-sm px-3 py-2 rounded-full border border-accent/20 hover:border-accent/40 transition-all cursor-pointer group"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'hsl(var(--accent) / 0.1)',
                  boxShadow: '0 4px 20px hsl(var(--accent) / 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Palette className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-accent transition-colors" />
                <span className="text-xs sm:text-sm group-hover:text-accent transition-colors">Design</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-1.5 text-muted-foreground bg-muted/40 backdrop-blur-sm px-3 py-2 rounded-full border border-success/20 hover:border-success/40 transition-all cursor-pointer group"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'hsl(var(--success) / 0.1)',
                  boxShadow: '0 4px 20px hsl(var(--success) / 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Users className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-success transition-colors" />
                <span className="text-xs sm:text-sm group-hover:text-success transition-colors">Research</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={slideUpVariants} className="text-foreground/80 max-w-xl lg:max-w-2xl mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0 lg:px-0">
            I bridge the gap between users and technology, creating research-driven digital 
            experiences that solve real problems through elegant design and thoughtful development.
          </motion.p>

          <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25" asChild>
              <a href="/case-studies">View My Work</a>
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg hover:scale-105 transition-all duration-300" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </motion.div>

          <motion.div variants={slideUpVariants} className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-md sm:max-w-lg lg:max-w-none">
            <div className="text-center lg:text-left">
              <motion.div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary" whileHover={{
              scale: 1.1
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                5+
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Years Experience</div>
            </div>
            <div className="text-center lg:text-left">
              <motion.div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary" whileHover={{
              scale: 1.1
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                50+
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Projects Delivered</div>
            </div>
            <div className="text-center lg:text-left">
              <motion.div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary" whileHover={{
              scale: 1.1
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                100%
              </motion.div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Profile Picture Section */}
        <motion.div className="flex-shrink-0 order-1 lg:order-2 relative" variants={scaleVariants}>
          <ParallaxElement speed={0.2} direction="up">
            <div className="relative">
              {/* Enhanced Decorative Elements */}
              <motion.div 
                className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 rounded-full blur-2xl" 
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }} 
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }} 
              />
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full blur-lg" 
                animate={{
                  rotate: [360, 180, 0],
                  scale: [1.1, 0.9, 1.1]
                }} 
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear"
                }} 
              />
              
              {/* Profile Image with Enhanced Effects */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face" 
                  alt="Margery Funes - UX/UI Designer & Developer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-accent/15 rounded-full group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-gradient-to-r from-primary to-accent transition-opacity duration-300" />
              </div>
              
              {/* Enhanced Floating Elements with Icons */}
              <motion.div 
                className="absolute top-8 -right-6 w-8 h-8 bg-primary rounded-full shadow-lg flex items-center justify-center text-primary-foreground"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 8, 0],
                  rotate: [0, 360]
                }} 
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-12 -left-8 w-10 h-10 bg-accent rounded-full shadow-lg flex items-center justify-center text-accent-foreground"
                animate={{
                  y: [0, 12, 0],
                  x: [0, -5, 0],
                  rotate: [360, 0]
                }} 
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Zap className="w-5 h-5" />
              </motion.div>
              
              <motion.div 
                className="absolute top-1/3 -left-4 w-6 h-6 bg-success rounded-full shadow-lg flex items-center justify-center text-success-foreground"
                animate={{
                  y: [0, -8, 0],
                  x: [0, -3, 0],
                  scale: [1, 1.2, 1]
                }} 
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Target className="w-3 h-3" />
              </motion.div>
            </div>
          </ParallaxElement>
        </motion.div>
      </motion.div>
      
      <motion.a href="#about" className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300" aria-label="Scroll to about" variants={floatVariants} initial="hidden" animate="visible">
        <ArrowDown size={20} className="sm:w-6 sm:h-6" />
      </motion.a>
    </section>;
};
export default Hero;