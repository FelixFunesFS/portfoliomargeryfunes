import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Code, Brain, Wrench } from 'lucide-react';
import arsenalTimelineBg from '@/assets/research-hub/arsenal-timeline-bg.webp';

interface Tool {
  id: string;
  name: string;
  category: 'primary' | 'support' | 'technical';
  icon: React.ReactNode;
  description: string;
}

const ArsenalTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const tools: Tool[] = [
    // Primary Weapons (Larger cards)
    { 
      id: 'ux-design', 
      name: 'Google UX Design', 
      category: 'primary', 
      icon: <Award className="w-8 h-8" />,
      description: 'Professional Certificate • Design Thinking • Prototyping'
    },
    { 
      id: 'ux-research', 
      name: 'Google UX Research', 
      category: 'primary', 
      icon: <Award className="w-8 h-8" />,
      description: 'Professional Certificate • User Testing • Data Analysis'
    },
    
    // Support Tools
    { 
      id: 'devops', 
      name: 'IBM DevOps & Cloud', 
      category: 'support', 
      icon: <Wrench className="w-6 h-6" />,
      description: 'CI/CD • Cloud Infrastructure'
    },
    { 
      id: 'agile-scrum', 
      name: 'Agile & Scrum', 
      category: 'support', 
      icon: <Wrench className="w-6 h-6" />,
      description: 'Sprint Planning • Team Collaboration'
    },
    { 
      id: 'ai-dev', 
      name: 'IBM AI Developer', 
      category: 'support', 
      icon: <Brain className="w-6 h-6" />,
      description: 'Machine Learning • Model Training'
    },
    { 
      id: 'gen-ai', 
      name: 'Generative AI', 
      category: 'support', 
      icon: <Brain className="w-6 h-6" />,
      description: 'LLMs • Prompt Engineering'
    },
    
    // Technical Arsenal
    { 
      id: 'fullstack', 
      name: 'Full Stack Software Dev', 
      category: 'technical', 
      icon: <Code className="w-5 h-5" />,
      description: 'React • Node.js • Databases'
    },
    { 
      id: 'react', 
      name: 'React & TypeScript', 
      category: 'technical', 
      icon: <Code className="w-5 h-5" />,
      description: 'Modern Web Development'
    },
    { 
      id: 'python', 
      name: 'Python Automation', 
      category: 'technical', 
      icon: <Code className="w-5 h-5" />,
      description: 'Data Processing • Scripts'
    },
  ];

  const getCategorySize = (category: string) => {
    switch (category) {
      case 'primary': return 'w-80 h-64';
      case 'support': return 'w-64 h-48';
      case 'technical': return 'w-56 h-40';
      default: return 'w-64 h-48';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'primary': return 'border-primary/60 bg-primary/10';
      case 'support': return 'border-accent/60 bg-accent/10';
      case 'technical': return 'border-success/60 bg-success/10';
      default: return 'border-primary/60 bg-primary/10';
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen w-full py-20 overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${arsenalTimelineBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-[1]" />

      {/* Content */}
      <div className="relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 2px 4px rgba(0,0,0,0.8)' }}>
            Research Arsenal
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Advanced certifications and technical capabilities deployed in every mission
          </p>
        </motion.div>

        {/* Horizontal Scrolling Tool Rack */}
        <div className="overflow-hidden py-8">
          <motion.div 
            style={{ x }}
            className="flex gap-8 px-6"
          >
            {/* Duplicate for seamless loop effect */}
            {[...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.id}-${index}`}
                initial={{ opacity: 0, rotateY: -20 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  zIndex: 20,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`${getCategorySize(tool.category)} flex-shrink-0 glass rounded-xl p-6 border-2 ${getCategoryColor(tool.category)} hover:shadow-2xl transition-all cursor-pointer`}
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  backdropFilter: 'blur(10px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  {/* Icon */}
                  <div className="mb-4">
                    <motion.div
                      className="inline-block p-3 rounded-lg"
                      style={{
                        background: tool.category === 'primary' 
                          ? 'rgba(var(--primary), 0.2)' 
                          : tool.category === 'support'
                          ? 'rgba(var(--accent), 0.2)'
                          : 'rgba(var(--success), 0.2)',
                      }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {tool.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className={`font-bold mb-2 text-foreground ${
                      tool.category === 'primary' ? 'text-xl' : 'text-lg'
                    }`} style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                      {tool.name}
                    </h3>
                    <p className="text-sm text-foreground" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                      {tool.description}
                    </p>
                  </div>

                  {/* Badge */}
                  <div className="mt-4">
                    <span className={`text-xs px-2 py-1 rounded ${
                      tool.category === 'primary' 
                        ? 'bg-primary/20 text-primary border border-primary/40' 
                        : tool.category === 'support'
                        ? 'bg-accent/20 text-accent border border-accent/40'
                        : 'bg-success/20 text-success border border-success/40'
                    }`}>
                      {tool.category === 'primary' ? 'PRIMARY' : tool.category === 'support' ? 'SUPPORT' : 'TECHNICAL'}
                    </span>
                  </div>
                </div>

                {/* Holographic Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent 40%, ${
                      tool.category === 'primary' 
                        ? 'rgba(var(--primary), 0.1)' 
                        : tool.category === 'support'
                        ? 'rgba(var(--accent), 0.1)'
                        : 'rgba(var(--success), 0.1)'
                    } 50%, transparent 60%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground text-sm mt-8"
          style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}
        >
          Scroll to explore more tools • Hover to interact
        </motion.p>
      </div>
    </div>
  );
};

export default ArsenalTimeline;
