import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroPortalBg from '@/assets/research-hub/hero-portal-bg.jpg';
import { useCountUp } from '@/hooks/useCountUp';
import { useInView } from '@/hooks/useInView';

const HolographicPortal = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const metric1 = useCountUp({ end: 200, duration: 1500, isInView });
  const metric2 = useCountUp({ end: 26, duration: 1500, isInView });
  const metric3 = useCountUp({ end: 90, duration: 1500, isInView });
  const metric4 = useCountUp({ end: 5200, duration: 1500, isInView });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const metricOrbs = [
    { value: metric1, suffix: '+', label: 'Users Researched' },
    { value: `${metric2}K`, suffix: '+', label: 'Hours Saved' },
    { value: metric3, suffix: '%', label: 'Error Reduction' },
    { value: metric4, suffix: '%', label: 'ROI Delivered' }
  ];

  return (
    <div ref={ref} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroPortalBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Animated Circuit Pattern Overlay */}
      <motion.div 
        className="absolute inset-0 z-[2] opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center px-6">
        {/* Title with Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            MARGERY FUNES
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl text-primary/90 font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            UX RESEARCHER & SYSTEMS DESIGNER
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          Transforming Complex Systems Into Human-Centered Experiences
          <br />
          <span className="text-primary font-semibold">Research-Driven Design • Military Precision • Innovation at Scale</span>
        </motion.p>

        {/* Floating Metric Orbs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {metricOrbs.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 border border-primary/30 hover:border-primary/60 transition-all"
              style={{
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {metric.value}{metric.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.button
            onClick={() => {
              document.getElementById('missions')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-primary/20 hover:bg-primary/30 border-2 border-primary rounded-lg text-primary font-semibold text-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Mission Briefing</span>
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </motion.div>
      </div>

      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 z-[3] pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HolographicPortal;
