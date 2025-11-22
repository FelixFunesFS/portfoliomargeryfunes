import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface Skill {
  id: string;
  name: string;
  proficiency: number;
  color: string;
  category: 'ux' | 'dev' | 'systems';
  x: number;
  y: number;
  connections: string[];
}

const SkillsConstellation = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'ux' | 'dev' | 'systems'>('all');

  const skills: Skill[] = [
    { id: 'research', name: 'User Research', proficiency: 94, color: '#8B5CF6', category: 'ux', x: 20, y: 25, connections: ['testing', 'journey'] },
    { id: 'systems', name: 'Systems Analysis', proficiency: 98, color: '#3B82F6', category: 'systems', x: 50, y: 15, connections: ['research', 'agile'] },
    { id: 'proto', name: 'Prototyping', proficiency: 85, color: '#8B5CF6', category: 'ux', x: 75, y: 30, connections: ['wireframe', 'testing'] },
    { id: 'fullstack', name: 'Full Stack Dev', proficiency: 75, color: '#10B981', category: 'dev', x: 80, y: 65, connections: ['proto', 'agile'] },
    { id: 'agile', name: 'Agile Methods', proficiency: 95, color: '#3B82F6', category: 'systems', x: 50, y: 50, connections: ['systems', 'fullstack', 'research'] },
    { id: 'testing', name: 'Usability Testing', proficiency: 92, color: '#8B5CF6', category: 'ux', x: 25, y: 60, connections: ['research', 'journey'] },
    { id: 'journey', name: 'Journey Mapping', proficiency: 88, color: '#8B5CF6', category: 'ux', x: 15, y: 80, connections: ['testing', 'research'] },
    { id: 'wireframe', name: 'Wireframing', proficiency: 87, color: '#8B5CF6', category: 'ux', x: 65, y: 75, connections: ['proto', 'testing'] },
  ];

  const filteredSkills = filter === 'all' ? skills : skills.filter(s => s.category === filter);

  const getSize = (proficiency: number) => {
    return 60 + (proficiency / 100) * 60; // 60px to 120px
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            My Research & Design Toolkit
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] mx-auto rounded-full mb-8" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { value: 'all', label: 'All Skills' },
              { value: 'ux', label: 'UX Research' },
              { value: 'systems', label: 'Systems' },
              { value: 'dev', label: 'Development' },
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setFilter(btn.value as any)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === btn.value
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-900'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Constellation Container */}
        <div className="relative w-full h-[600px] bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-inner overflow-hidden">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
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
                    stroke={isHighlighted ? skill.color : '#E5E7EB'}
                    strokeWidth={isHighlighted ? 3 : 2}
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: isInView ? 1 : 0,
                      opacity: isInView ? (isHighlighted ? 0.8 : 0.3) : 0,
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                );
              })
            )}
          </svg>

          {/* Skill Bubbles */}
          {filteredSkills.map((skill, index) => {
            const size = getSize(skill.proficiency);
            const isHovered = hoveredSkill === skill.id;
            const isConnected = hoveredSkill && 
              (skill.connections.includes(hoveredSkill) || 
               filteredSkills.find(s => s.id === hoveredSkill)?.connections.includes(skill.id));

            return (
              <motion.button
                key={skill.id}
                className="absolute group cursor-pointer"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: isInView ? 1 : 0,
                  opacity: isInView ? 1 : 0,
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.15 }}
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                onFocus={() => setHoveredSkill(skill.id)}
                onBlur={() => setHoveredSkill(null)}
                aria-label={`${skill.name}, ${skill.proficiency}% proficiency`}
              >
                {/* Bubble */}
                <div
                  className="rounded-full bg-white shadow-lg transition-all duration-300 flex items-center justify-center border-4"
                  style={{
                    width: size,
                    height: size,
                    borderColor: isHovered || isConnected ? skill.color : '#E5E7EB',
                    boxShadow: isHovered ? `0 8px 30px ${skill.color}40` : '0 4px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  <div className="text-center px-2">
                    <div className="font-bold text-gray-900 text-sm leading-tight">{skill.name}</div>
                    <div className="text-xs font-semibold mt-1" style={{ color: skill.color }}>
                      {skill.proficiency}%
                    </div>
                  </div>
                </div>

                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10 shadow-xl"
                  >
                    Click to filter case studies
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#8B5CF6]" />
            <span className="text-gray-700">UX Research</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#3B82F6]" />
            <span className="text-gray-700">Systems Design</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#10B981]" />
            <span className="text-gray-700">Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsConstellation;
