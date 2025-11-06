import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Target, X } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  proficiency: 'Expert' | 'Advanced' | 'Foundational';
  description: string;
  category: string;
  outcomes?: string[];
  caseStudyIds?: number[];
}

interface CapabilityMapProps {
  skills: Skill[];
}

const CATEGORY_COLORS = {
  'UX Research & Design': '#8b5cf6', // purple
  'Design & Frontend Development': '#3b82f6', // blue
  'Automation & Tools': '#10b981', // green
  'Leadership & Collaboration': '#f59e0b', // amber
  'AI & Modern Development': '#ec4899', // pink
};

const PROFICIENCY_RINGS = {
  'Expert': { radius: 140, color: '#8b5cf6', label: 'Expert' },
  'Advanced': { radius: 220, color: '#3b82f6', label: 'Advanced' },
  'Foundational': { radius: 300, color: '#64748b', label: 'Foundational' },
};

export default function InteractiveCapabilityMap({ skills }: CapabilityMapProps) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const mapRef = useRef<SVGSVGElement>(null);

  const centerX = 400;
  const centerY = 400;
  const viewBoxSize = 800;

  // Group skills by proficiency and calculate positions
  const getSkillPosition = (skill: Skill, index: number, totalInRing: number) => {
    const ring = PROFICIENCY_RINGS[skill.proficiency];
    const angle = (index / totalInRing) * Math.PI * 2 - Math.PI / 2; // Start from top
    
    return {
      x: centerX + ring.radius * Math.cos(angle),
      y: centerY + ring.radius * Math.sin(angle),
      angle,
    };
  };

  // Group skills by proficiency level
  const skillsByProficiency = skills.reduce((acc, skill) => {
    if (!acc[skill.proficiency]) acc[skill.proficiency] = [];
    acc[skill.proficiency].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Calculate positions for all skills
  const skillPositions = skills.map((skill) => {
    const skillsInRing = skillsByProficiency[skill.proficiency];
    const indexInRing = skillsInRing.indexOf(skill);
    const position = getSkillPosition(skill, indexInRing, skillsInRing.length);
    
    return { skill, ...position };
  });

  // Filter skills by category if selected
  const filteredPositions = selectedCategory
    ? skillPositions.filter(sp => sp.skill.category === selectedCategory)
    : skillPositions;

  const categories = Object.keys(CATEGORY_COLORS);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(selectedSkill?.name === skill.name ? null : skill);
    setHoveredSkill(null);
  };

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedSkill(null);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Visualization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Capability Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skills organized by proficiency level. Hover to explore, click to see details.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryFilter(category)}
              className="transition-all duration-300"
              style={{
                borderColor: selectedCategory === category ? CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] : undefined,
                backgroundColor: selectedCategory === category ? CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] : undefined,
              }}
            >
              {category}
            </Button>
          ))}
          {selectedCategory && (
            <Button
              variant="ghost"
              onClick={() => setSelectedCategory(null)}
              className="gap-2"
            >
              <X className="w-4 h-4" />
              Clear Filter
            </Button>
          )}
        </div>

        {/* Map Container */}
        <div className="grid lg:grid-cols-[1fr,400px] gap-8 items-start">
          {/* SVG Map */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
            <div className="relative">
              <svg
                ref={mapRef}
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                className="w-full h-auto"
                style={{ maxHeight: '600px' }}
              >
                {/* Center Circle */}
                <circle
                  cx={centerX}
                  cy={centerY}
                  r={60}
                  fill="url(#centerGradient)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                <text
                  x={centerX}
                  y={centerY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary text-sm font-bold"
                >
                  Core
                </text>
                <text
                  x={centerX}
                  y={centerY + 20}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary text-xs"
                >
                  Capabilities
                </text>

                {/* Proficiency Rings */}
                {Object.entries(PROFICIENCY_RINGS).map(([level, ring]) => (
                  <g key={level}>
                    <circle
                      cx={centerX}
                      cy={centerY}
                      r={ring.radius}
                      fill="none"
                      stroke={ring.color}
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      opacity="0.3"
                    />
                    {/* Ring Label */}
                    <text
                      x={centerX}
                      y={centerY - ring.radius - 10}
                      textAnchor="middle"
                      className="fill-muted-foreground text-xs font-semibold"
                    >
                      {ring.label}
                    </text>
                  </g>
                ))}

                {/* Connection Lines (for hovered/selected skills) */}
                {(hoveredSkill || selectedSkill) && (
                  <line
                    x1={centerX}
                    y1={centerY}
                    x2={
                      filteredPositions.find(
                        sp => sp.skill.name === (hoveredSkill || selectedSkill)?.name
                      )?.x || centerX
                    }
                    y2={
                      filteredPositions.find(
                        sp => sp.skill.name === (hoveredSkill || selectedSkill)?.name
                      )?.y || centerY
                    }
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                    opacity="0.5"
                  />
                )}

                {/* Skill Nodes */}
                {filteredPositions.map(({ skill, x, y }) => {
                  const isHovered = hoveredSkill?.name === skill.name;
                  const isSelected = selectedSkill?.name === skill.name;
                  const categoryColor = CATEGORY_COLORS[skill.category as keyof typeof CATEGORY_COLORS];

                  return (
                    <g
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => handleSkillClick(skill)}
                      className="cursor-pointer transition-all"
                      style={{ transition: 'all 0.3s ease' }}
                    >
                      {/* Glow effect for hover/selected */}
                      {(isHovered || isSelected) && (
                        <circle
                          cx={x}
                          cy={y}
                          r={20}
                          fill={categoryColor}
                          opacity="0.2"
                        />
                      )}
                      
                      {/* Main node circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered || isSelected ? 14 : 10}
                        fill={categoryColor}
                        stroke={isSelected ? 'hsl(var(--primary))' : categoryColor}
                        strokeWidth={isSelected ? 3 : 1}
                        opacity={selectedCategory && skill.category !== selectedCategory ? 0.2 : 1}
                      />

                      {/* Inner dot */}
                      <circle
                        cx={x}
                        cy={y}
                        r={4}
                        fill="white"
                        opacity={0.8}
                      />

                      {/* Skill name label (shown on hover) */}
                      {(isHovered || isSelected) && (
                        <text
                          x={x}
                          y={y - 25}
                          textAnchor="middle"
                          className="fill-foreground text-xs font-semibold"
                          style={{
                            textShadow: '0 0 4px hsl(var(--background)), 0 0 4px hsl(var(--background))',
                          }}
                        >
                          {skill.name}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Gradient Definitions */}
                <defs>
                  <radialGradient id="centerGradient">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Legend */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {Object.entries(CATEGORY_COLORS).map(([category, color]) => (
                  <div key={category} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-muted-foreground">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Detail Panel */}
          <div className="lg:sticky lg:top-4">
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key="skill-detail"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <Badge
                          variant="secondary"
                          className="mb-2"
                          style={{
                            backgroundColor: CATEGORY_COLORS[selectedSkill.category as keyof typeof CATEGORY_COLORS] + '20',
                            color: CATEGORY_COLORS[selectedSkill.category as keyof typeof CATEGORY_COLORS],
                            borderColor: CATEGORY_COLORS[selectedSkill.category as keyof typeof CATEGORY_COLORS],
                          }}
                        >
                          {selectedSkill.category}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSelectedSkill(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-4">
                      {/* Proficiency */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-muted-foreground">
                            Proficiency Level
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-lg font-bold"
                          style={{
                            borderColor: PROFICIENCY_RINGS[selectedSkill.proficiency].color,
                            color: PROFICIENCY_RINGS[selectedSkill.proficiency].color,
                          }}
                        >
                          {selectedSkill.proficiency} ({selectedSkill.level}%)
                        </Badge>
                      </div>

                      {/* Progress Bar */}
                      <div>
                        <div className="h-2 bg-accent rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${selectedSkill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{
                              backgroundColor: CATEGORY_COLORS[selectedSkill.category as keyof typeof CATEGORY_COLORS],
                            }}
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {selectedSkill.description}
                        </p>
                      </div>

                      {/* Outcomes */}
                      {selectedSkill.outcomes && selectedSkill.outcomes.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Key Outcomes</h4>
                          <ul className="space-y-2">
                            {selectedSkill.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <span className="text-primary mt-1">▸</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="instruction"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                    <div className="text-center py-8">
                      <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Explore Capabilities</h3>
                      <p className="text-sm text-muted-foreground">
                        Hover over nodes to see skill names, click to view detailed information
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
