import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import journeyMilitary from '@/assets/research-hub/journey-military.webp';
import journeyTransition from '@/assets/research-hub/journey-transition.webp';
import journeyRecognition from '@/assets/research-hub/journey-recognition.webp';
import journeyProblem from '@/assets/research-hub/journey-problem.webp';
import journeyFuture from '@/assets/research-hub/journey-future.webp';

interface JourneyStage {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

const JourneyWormhole = () => {
  const { scrollYProgress } = useScroll();

  const stages: JourneyStage[] = [
    {
      id: 'military',
      title: 'Military Analyst',
      subtitle: '2016-2018 • US Air Force',
      description: 'Building foundation in systems analysis and precision operations',
      image: journeyMilitary,
      color: 'hsl(var(--primary))',
      icon: '🎖️',
    },
    {
      id: 'transition',
      title: 'Taking Action',
      subtitle: '2018-2021 • Learning & Growing',
      description: 'Recognizing the power of automation and user-centered design',
      image: journeyTransition,
      color: 'hsl(var(--accent))',
      icon: '⚡',
    },
    {
      id: 'recognition',
      title: 'Leadership Recognition',
      subtitle: '2021 • Breaking Barriers',
      description: 'Becoming first woman to earn the Joint Service Achievement Medal',
      image: journeyRecognition,
      color: 'hsl(149 50% 50%)',
      icon: '🏆',
    },
    {
      id: 'problem',
      title: 'The Real Problem',
      subtitle: '2021-2022 • Discovery',
      description: 'Understanding that design shapes human experience and outcomes',
      image: journeyProblem,
      color: 'hsl(0 70% 60%)',
      icon: '🎯',
    },
    {
      id: 'future',
      title: "Today's Mission",
      subtitle: '2023-Present • UX Research',
      description: 'Transforming complex systems into intuitive, human-centered experiences',
      image: journeyFuture,
      color: 'hsl(180 70% 60%)',
      icon: '🚀',
    },
  ];

  return (
    <div className="relative w-full">
      {stages.map((stage, index) => {
        const targetScale = 1 - ((stages.length - index) * 0.05);
        const scale = useTransform(
          scrollYProgress,
          [index / stages.length, (index + 1) / stages.length],
          [1, targetScale]
        );

        return (
          <motion.div
            key={stage.id}
            style={{ scale }}
            className="sticky top-0 min-h-screen w-full flex items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${stage.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-[1]" />

            {/* Vignette Effect */}
            <div 
              className="absolute inset-0 z-[2]"
              style={{
                background: `radial-gradient(circle, transparent 30%, ${stage.color}20 100%)`,
              }}
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative z-10 container-custom px-6 text-center"
            >
              {/* Icon */}
              <motion.div
                className="text-6xl md:text-8xl mb-6"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {stage.icon}
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-4"
                style={{ color: stage.color }}
              >
                {stage.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl text-foreground font-semibold mb-6"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.9)' }}
              >
                {stage.subtitle}
              </motion.p>

              {/* Description */}
              <motion.p 
                className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed"
                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
              >
                {stage.description}
              </motion.p>

              {/* Progress Bar */}
              <motion.div
                className="mt-12 max-w-md mx-auto h-1 bg-white/20 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full"
                  style={{
                    background: `linear-gradient(to right, ${stage.color}, transparent)`,
                    width: `${((index + 1) / stages.length) * 100}%`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${((index + 1) / stages.length) * 100}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.div>

              {/* Stage Counter */}
              <motion.div
                className="mt-6 text-sm text-foreground font-medium"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
              >
                Stage {index + 1} of {stages.length}
              </motion.div>
            </motion.div>

            {/* Particle Effects */}
            <div className="absolute inset-0 z-[3] pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: stage.color,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default JourneyWormhole;
