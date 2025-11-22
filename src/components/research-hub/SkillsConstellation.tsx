import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import skillsConstellationBg from '@/assets/research-hub/skills-constellation-bg.webp';

interface SkillNode {
  id: string;
  name: string;
  category: 'research' | 'development' | 'ai';
  proficiency: number;
  x: number;
  y: number;
  connections: string[];
}

const SkillsConstellation = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillNodes: SkillNode[] = [
    // Research Skills (Blue)
    { id: 'user-research', name: 'User Research', category: 'research', proficiency: 94, x: 20, y: 30, connections: ['systems-analysis', 'agile'] },
    { id: 'systems-analysis', name: 'Systems Analysis', category: 'research', proficiency: 92, x: 35, y: 45, connections: ['user-research', 'process-optimization'] },
    { id: 'agile', name: 'Agile Methodologies', category: 'research', proficiency: 95, x: 30, y: 65, connections: ['user-research', 'prototyping'] },
    { id: 'strategic-planning', name: 'Strategic Planning', category: 'research', proficiency: 90, x: 15, y: 50, connections: ['systems-analysis'] },
    
    // Development Skills (Green)
    { id: 'fullstack', name: 'Full Stack Development', category: 'development', proficiency: 88, x: 65, y: 40, connections: ['react', 'python'] },
    { id: 'react', name: 'React/TypeScript', category: 'development', proficiency: 90, x: 75, y: 25, connections: ['fullstack', 'prototyping'] },
    { id: 'python', name: 'Python', category: 'development', proficiency: 85, x: 80, y: 55, connections: ['fullstack', 'data-automation'] },
    { id: 'databases', name: 'SQL/NoSQL', category: 'development', proficiency: 82, x: 70, y: 70, connections: ['python'] },
    
    // AI/Automation Skills (Purple)
    { id: 'ai-integration', name: 'AI Integration', category: 'ai', proficiency: 88, x: 50, y: 20, connections: ['data-automation', 'react'] },
    { id: 'data-automation', name: 'Data Automation', category: 'ai', proficiency: 90, x: 55, y: 50, connections: ['ai-integration', 'python', 'process-optimization'] },
    { id: 'process-optimization', name: 'Process Optimization', category: 'ai', proficiency: 92, x: 45, y: 75, connections: ['data-automation', 'systems-analysis'] },
    { id: 'prototyping', name: 'Rapid Prototyping', category: 'ai', proficiency: 87, x: 40, y: 35, connections: ['agile', 'react'] },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'research': return 'hsl(var(--primary))';
      case 'development': return 'hsl(var(--success))';
      case 'ai': return 'hsl(var(--accent))';
      default: return 'hsl(var(--primary))';
    }
  };

  return (
    <div className="relative min-h-screen w-full py-20 overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${skillsConstellationBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 container-custom px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.5), 0 2px 4px rgba(0,0,0,0.8)' }}>
            Skills Constellation
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            An interconnected galaxy of expertise spanning research, development, and innovation
          </p>
        </motion.div>

        {/* Constellation Map */}
        <div className="relative w-full max-w-6xl mx-auto aspect-video">
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {/* Connection Lines */}
            {skillNodes.map((node) =>
              node.connections.map((connId) => {
                const connNode = skillNodes.find((n) => n.id === connId);
                if (!connNode) return null;
                
                const isHighlighted = hoveredSkill === node.id || hoveredSkill === connId;
                
                return (
                  <motion.line
                    key={`${node.id}-${connId}`}
                    x1={`${node.x}%`}
                    y1={`${node.y}%`}
                    x2={`${connNode.x}%`}
                    y2={`${connNode.y}%`}
                    stroke={isHighlighted ? getCategoryColor(node.category) : 'rgba(255, 255, 255, 0.2)'}
                    strokeWidth={isHighlighted ? 2 : 1}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                );
              })
            )}
          </svg>

          {/* Skill Nodes */}
          {skillNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              onHoverStart={() => setHoveredSkill(node.id)}
              onHoverEnd={() => setHoveredSkill(null)}
              onFocus={() => setHoveredSkill(node.id)}
              onBlur={() => setHoveredSkill(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setHoveredSkill(hoveredSkill === node.id ? null : node.id);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${node.name} skill at ${node.proficiency}% proficiency`}
              className="absolute cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredSkill === node.id ? 20 : 10,
              }}
            >
              {/* Node Circle */}
              <motion.div
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center"
                style={{
                  background: `radial-gradient(circle, ${getCategoryColor(node.category)}, transparent)`,
                  border: `2px solid ${getCategoryColor(node.category)}`,
                }}
                animate={{
                  boxShadow: [
                    `0 0 20px ${getCategoryColor(node.category)}`,
                    `0 0 40px ${getCategoryColor(node.category)}`,
                    `0 0 20px ${getCategoryColor(node.category)}`,
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-xs md:text-sm font-bold text-white text-center px-1">
                  {node.proficiency}%
                </div>
              </motion.div>

              {/* Label - Always visible on desktop, show on hover on mobile */}
              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 rounded-lg whitespace-nowrap text-xs md:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'rgba(0, 0, 0, 0.9)',
                  border: `1px solid ${getCategoryColor(node.category)}`,
                  color: getCategoryColor(node.category),
                }}
              >
                {node.name}
              </motion.div>

              {/* Glow Effect */}
              {hoveredSkill === node.id && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    background: `radial-gradient(circle, ${getCategoryColor(node.category)}, transparent)`,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: 'hsl(var(--primary))' }} aria-hidden="true" />
            <span className="text-sm text-foreground font-medium">UX Research & Design</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: 'hsl(var(--success))' }} aria-hidden="true" />
            <span className="text-sm text-foreground font-medium">Full Stack Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ background: 'hsl(var(--accent))' }} aria-hidden="true" />
            <span className="text-sm text-foreground font-medium">AI & Automation</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsConstellation;
