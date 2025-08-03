
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

    const particles: Particle[] = [];
    const particleCount = 60; // Reduced for subtlety
    const connectionDistance = 120; // Smaller connections
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5; // Smaller particles
        this.speedX = Math.random() * 0.8 - 0.4; // Slower movement
        this.speedY = Math.random() * 0.8 - 0.4;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'hsl(var(--primary) / 0.15)'; // More subtle
        ctx.fill();
      }
    }
    
    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const connect = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            ctx.strokeStyle = `hsl(var(--primary) / ${opacity * 0.1})`; // Much more subtle
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      
      connect();
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

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20 z-0"
      />
      
      <div className="container-custom relative z-10 flex flex-col items-center md:items-start text-center md:text-left max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="h-px w-12 bg-primary/60"></div>
          <span className="text-foreground/70 text-sm tracking-wider uppercase">Portfolio</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
        >
          Margery Funes
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap items-center gap-6 mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-primary">
            UX/UI Designer & Developer
          </h2>
          <div className="hidden md:flex gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="w-5 h-5" />
              <span className="text-sm">Frontend</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Palette className="w-5 h-5" />
              <span className="text-sm">Design</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span className="text-sm">Research</span>
            </div>
          </div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="text-foreground/80 max-w-2xl mb-10 text-lg md:text-xl leading-relaxed"
        >
          I bridge the gap between users and technology, creating research-driven digital 
          experiences that solve real problems through elegant design and thoughtful development.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg hover:scale-105 transition-all duration-300" 
            asChild
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg hover:scale-105 transition-all duration-300" 
            asChild
          >
            <a href="#contact">Let's Connect</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mt-16 grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
      
      <motion.a 
        href="#projects" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary/60 hover:text-primary transition-colors duration-300"
        aria-label="Scroll to projects"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;
