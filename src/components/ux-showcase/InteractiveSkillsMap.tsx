import { useState } from 'react';
import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Skill {
  id: string;
  name: string;
  proficiency: number;
  color: string;
  category: 'research' | 'development' | 'ai' | 'systems';
  x: number;
  y: number;
  connections: string[];
}

const InteractiveSkillsMap = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const skills: Skill[] = [
    { id: 'user-research', name: 'User Research', proficiency: 94, color: 'hsl(var(--primary))', category: 'research', x: 20, y: 30, connections: ['journey-maps', 'personas'] },
    { id: 'journey-maps', name: 'Journey Mapping', proficiency: 90, color: 'hsl(var(--primary))', category: 'research', x: 35, y: 45, connections: ['user-research', 'personas', 'wireframes'] },
    { id: 'personas', name: 'Persona Development', proficiency: 88, color: 'hsl(var(--primary))', category: 'research', x: 50, y: 35, connections: ['user-research', 'journey-maps'] },
    { id: 'usability', name: 'Usability Testing', proficiency: 92, color: 'hsl(var(--primary))', category: 'research', x: 65, y: 50, connections: ['prototyping', 'ab-testing'] },
    
    { id: 'systems', name: 'Systems Analysis', proficiency: 98, color: 'hsl(var(--systems-cyan))', category: 'systems', x: 25, y: 65, connections: ['process-opt', 'automation'] },
    { id: 'process-opt', name: 'Process Optimization', proficiency: 95, color: 'hsl(var(--systems-cyan))', category: 'systems', x: 40, y: 75, connections: ['systems', 'agile', 'automation'] },
    { id: 'agile', name: 'Agile Methodologies', proficiency: 93, color: 'hsl(var(--agile-primary))', category: 'systems', x: 55, y: 70, connections: ['process-opt', 'fullstack'] },
    
    { id: 'prototyping', name: 'Prototyping', proficiency: 85, color: 'hsl(var(--success))', category: 'development', x: 75, y: 35, connections: ['wireframes', 'usability', 'fullstack'] },
    { id: 'wireframes', name: 'Wireframing', proficiency: 87, color: 'hsl(var(--success))', category: 'development', x: 60, y: 20, connections: ['journey-maps', 'prototyping'] },
    { id: 'fullstack', name: 'Full Stack Dev', proficiency: 75, color: 'hsl(var(--success))', category: 'development', x: 70, y: 60, connections: ['prototyping', 'agile', 'ai-integration'] },
    
    { id: 'automation', name: 'Automation', proficiency: 90, color: 'hsl(var(--agile-secondary))', category: 'ai', x: 30, y: 90, connections: ['systems', 'process-opt', 'ai-integration'] },
    { id: 'ai-integration', name: 'AI Integration', proficiency: 80, color: 'hsl(var(--agile-secondary))', category: 'ai', x: 50, y: 85, connections: ['automation', 'fullstack'] },
    { id: 'ab-testing', name: 'A/B Testing', proficiency: 86, color: 'hsl(var(--primary))', category: 'research', x: 80, y: 45, connections: ['usability', 'analytics'] },
    { id: 'analytics', name: 'Data Analysis', proficiency: 84, color: 'hsl(var(--systems-cyan))', category: 'systems', x: 85, y: 65, connections: ['ab-testing'] },
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

  const getSize = (proficiency: number) => {
    if (proficiency >= 90) return 'w-24 h-24';
    if (proficiency >= 80) return 'w-20 h-20';
    return 'w-16 h-16';
  };

  return (
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            My Research & Design Toolkit
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            An interconnected ecosystem of skills that deliver comprehensive solutions
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'research', 'systems', 'development', 'ai'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                    : 'bg-card border border-border text-card-foreground hover:border-primary'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Constellation */}
        <div className="relative w-full h-[600px] bg-card rounded-2xl border border-border shadow-lg overflow-hidden">
          <TooltipProvider>
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {filteredSkills.map((skill) =>
                skill.connections.map((connId) => {
                  const connectedSkill = filteredSkills.find((s) => s.id === connId);
                  if (!connectedSkill) return null;
                  
                  const isHighlighted = hoveredSkill === skill.id || hoveredSkill === connId;
                  
                  return (
                    <motion.line
                      key={`${skill.id}-${connId}`}
                      x1={`${skill.x}%`}
                      y1={`${skill.y}%`}
                      x2={`${connectedSkill.x}%`}
                      y2={`${connectedSkill.y}%`}
                      stroke={isHighlighted ? skill.color : 'hsl(var(--border))'}
                      strokeWidth={isHighlighted ? 2 : 1}
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: isHighlighted ? 0.6 : 0.3 } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  );
                })
              )}
            </svg>

            {filteredSkills.map((skill) => (
              <Tooltip key={skill.id}>
                <TooltipTrigger asChild>
                  <motion.button
                    className={`absolute ${getSize(skill.proficiency)} rounded-full border-4 bg-background flex items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:scale-110`}
                    style={{
                      left: `${skill.x}%`,
                      top: `${skill.y}%`,
                      transform: 'translate(-50%, -50%)',
                      borderColor: skill.color,
                      boxShadow: hoveredSkill === skill.id ? `0 0 30px ${skill.color}` : 'none',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onMouseEnter={() => setHoveredSkill(skill.id)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onFocus={() => setHoveredSkill(skill.id)}
                    onBlur={() => setHoveredSkill(null)}
                    aria-label={`${skill.name}: ${skill.proficiency}% proficiency`}
                  >
                    <span className="text-xs font-bold text-center px-2" style={{ color: skill.color }}>
                      {skill.proficiency}%
                    </span>
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">{skill.proficiency}% Proficiency</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'hsl(var(--primary))' }} />
            <span className="text-sm text-muted-foreground">UX Research</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'hsl(var(--systems-cyan))' }} />
            <span className="text-sm text-muted-foreground">Systems Design</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'hsl(var(--success))' }} />
            <span className="text-sm text-muted-foreground">Development</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'hsl(var(--agile-secondary))' }} />
            <span className="text-sm text-muted-foreground">AI & Automation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillsMap;
