import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Zap, Target, X, Search, Grid3x3, Map } from 'lucide-react';

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

// Use semantic design tokens
const CATEGORY_COLORS = {
  'UX Research & Design': 'hsl(var(--agile-primary))',
  'Design & Frontend Development': 'hsl(var(--systems-blue))',
  'Automation & Tools': 'hsl(var(--success))',
  'Leadership & Collaboration': 'hsl(var(--accent))',
  'AI & Modern Development': 'hsl(var(--military-accent))',
};

const PROFICIENCY_RINGS = {
  'Expert': { radius: 140, color: 'hsl(var(--primary))', label: 'Expert' },
  'Advanced': { radius: 220, color: 'hsl(var(--systems-blue))', label: 'Advanced' },
  'Foundational': { radius: 300, color: 'hsl(var(--muted-foreground))', label: 'Foundational' },
};

const PROFICIENCY_LEVELS: Array<'Expert' | 'Advanced' | 'Foundational'> = ['Expert', 'Advanced', 'Foundational'];

export default function InteractiveCapabilityMap({ skills }: CapabilityMapProps) {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProficiency, setSelectedProficiency] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'map' | 'grid'>('map');
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const mapRef = useRef<SVGSVGElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

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
    setFocusedIndex(-1);
  };

  const handleProficiencyFilter = (proficiency: string) => {
    setSelectedProficiency(selectedProficiency === proficiency ? null : proficiency);
    setSelectedSkill(null);
    setFocusedIndex(-1);
  };

  // Filter skills by search, category, and proficiency
  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || skill.category === selectedCategory;
    const matchesProficiency = !selectedProficiency || skill.proficiency === selectedProficiency;
    return matchesSearch && matchesCategory && matchesProficiency;
  });

  // Update filtered positions to use filtered skills
  const filteredPositionsCalculated = filteredSkills.map((skill) => {
    const skillsInRing = skillsByProficiency[skill.proficiency] || [];
    const indexInRing = skillsInRing.indexOf(skill);
    const position = getSkillPosition(skill, indexInRing, skillsInRing.length);
    return { skill, ...position };
  });

  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent, skill: Skill, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSkillClick(skill);
    } else if (e.key === 'Escape') {
      setSelectedSkill(null);
      setFocusedIndex(-1);
    } else if (viewMode === 'grid') {
      const cols = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
      let newIndex = index;
      
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        newIndex = Math.min(index + 1, filteredSkills.length - 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        newIndex = Math.max(index - 1, 0);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        newIndex = Math.min(index + cols, filteredSkills.length - 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        newIndex = Math.max(index - cols, 0);
      }
      
      if (newIndex !== index) {
        setFocusedIndex(newIndex);
        skillRefs.current[newIndex]?.focus();
      }
    }
  }, [filteredSkills.length, viewMode]);

  // Auto-focus on filtered skills
  useEffect(() => {
    if (focusedIndex >= 0 && skillRefs.current[focusedIndex]) {
      skillRefs.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  // Screen reader announcements
  const [announcement, setAnnouncement] = useState('');
  
  useEffect(() => {
    if (selectedSkill) {
      setAnnouncement(`Selected ${selectedSkill.name}. ${selectedSkill.proficiency} level. ${selectedSkill.description}`);
    } else if (filteredSkills.length > 0) {
      setAnnouncement(`Showing ${filteredSkills.length} skill${filteredSkills.length !== 1 ? 's' : ''}`);
    }
  }, [selectedSkill, filteredSkills.length]);

  return (
    <section 
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-accent/5 to-background"
      aria-labelledby="capability-map-heading"
    >
      {/* Screen reader announcements */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Interactive Visualization</span>
          </div>
          <h2 
            id="capability-map-heading"
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-systems-blue to-primary bg-clip-text text-transparent"
          >
            Capability Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''} available. Use keyboard to navigate.
          </p>
        </motion.div>

        {/* Search and View Toggle */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-base"
              aria-label="Search skills"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              onClick={() => setViewMode('map')}
              className="gap-2 min-w-[100px]"
              aria-label="Map view"
              aria-pressed={viewMode === 'map'}
            >
              <Map className="w-4 h-4" />
              <span className="hidden sm:inline">Map</span>
            </Button>
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="gap-2 min-w-[100px]"
              aria-label="Grid view"
              aria-pressed={viewMode === 'grid'}
            >
              <Grid3x3 className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-8">
          {/* Category Filters */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 text-center">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Category filters">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryFilter(category)}
                  className="transition-all duration-300 text-xs sm:text-sm"
                  aria-pressed={selectedCategory === category}
                  aria-label={`Filter by ${category}`}
                >
                  <span 
                    className="w-2 h-2 rounded-full mr-2 inline-block" 
                    style={{ backgroundColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] }}
                    aria-hidden="true"
                  />
                  {category}
                </Button>
              ))}
              {(selectedCategory || selectedProficiency) && (
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedProficiency(null);
                  }}
                  className="gap-2"
                  aria-label="Clear all filters"
                >
                  <X className="w-4 h-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Proficiency Filters */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3 text-center">Filter by Proficiency</h3>
            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Proficiency filters">
              {PROFICIENCY_LEVELS.map((level) => (
                <Button
                  key={level}
                  variant={selectedProficiency === level ? "default" : "outline"}
                  onClick={() => handleProficiencyFilter(level)}
                  className="transition-all duration-300"
                  aria-pressed={selectedProficiency === level}
                  aria-label={`Filter by ${level} proficiency`}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1fr,400px] gap-8 items-start">
          {/* Map or Grid View */}
          {viewMode === 'map' ? (
            <Card className="p-4 sm:p-8 bg-card/50 backdrop-blur-sm border-primary/20" role="region" aria-label="Skills capability map">
              <div className="relative">
                <svg
                  ref={mapRef}
                  viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                  className="w-full h-auto"
                  style={{ maxHeight: '600px' }}
                  role="img"
                  aria-label="Interactive capability map showing skills organized by proficiency level"
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
                  {filteredPositionsCalculated.map(({ skill, x, y }, index) => {
                    const isHovered = hoveredSkill?.name === skill.name;
                    const isSelected = selectedSkill?.name === skill.name;
                    const categoryColor = CATEGORY_COLORS[skill.category as keyof typeof CATEGORY_COLORS];

                    return (
                      <g
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        onClick={() => handleSkillClick(skill)}
                        className="cursor-pointer transition-all focus-visible:outline-none"
                        style={{ transition: 'all 0.3s ease' }}
                        role="button"
                        tabIndex={0}
                        aria-label={`${skill.name}. ${skill.proficiency} level. Click for details.`}
                        onKeyDown={(e: any) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleSkillClick(skill);
                          }
                        }}
                      >
                        {/* Glow effect for hover/selected */}
                        {(isHovered || isSelected) && (
                          <circle
                            cx={x}
                            cy={y}
                            r={20}
                            fill={categoryColor}
                            opacity="0.2"
                            aria-hidden="true"
                          />
                        )}
                        
                        {/* Main node circle */}
                        <circle
                          cx={x}
                          cy={y}
                          r={isHovered || isSelected ? 14 : 10}
                          fill={categoryColor}
                          stroke={isSelected ? 'hsl(var(--ring))' : categoryColor}
                          strokeWidth={isSelected ? 3 : 1}
                          opacity={1}
                        />

                        {/* Inner dot - pattern for colorblind accessibility */}
                        <circle
                          cx={x}
                          cy={y}
                          r={4}
                          fill="hsl(var(--background))"
                          opacity={0.9}
                        />

                        {/* Skill name label (always visible for accessibility) */}
                        <text
                          x={x}
                          y={y - 25}
                          textAnchor="middle"
                          className="fill-foreground text-[10px] sm:text-xs font-semibold pointer-events-none"
                          style={{
                            opacity: isHovered || isSelected ? 1 : 0.7,
                            textShadow: '0 0 4px hsl(var(--background)), 0 0 4px hsl(var(--background))',
                          }}
                        >
                          {skill.name.length > 20 ? skill.name.substring(0, 18) + '...' : skill.name}
                        </text>
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
                <div className="mt-6 flex flex-wrap gap-3 justify-center" role="list" aria-label="Category legend">
                  {Object.entries(CATEGORY_COLORS).map(([category, color]) => (
                    <div key={category} className="flex items-center gap-2" role="listitem">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                        aria-hidden="true"
                      />
                      <span className="text-xs text-muted-foreground">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ) : (
            /* Grid View */
            <div className="lg:col-span-2">
              <div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                role="list"
                aria-label="Skills grid"
              >
                {filteredSkills.map((skill, index) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  const categoryColor = CATEGORY_COLORS[skill.category as keyof typeof CATEGORY_COLORS];
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      role="listitem"
                    >
                      <Card
                        ref={(el) => (skillRefs.current[index] = el)}
                        className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                          isSelected ? 'ring-2 ring-ring shadow-lg' : ''
                        }`}
                        tabIndex={0}
                        role="button"
                        aria-label={`${skill.name}. ${skill.proficiency} level. ${skill.level}% proficiency. Click for details.`}
                        aria-pressed={isSelected}
                        onClick={() => handleSkillClick(skill)}
                        onKeyDown={(e) => handleKeyDown(e, skill, index)}
                        style={{
                          borderLeft: `4px solid ${categoryColor}`,
                        }}
                      >
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                            <Badge 
                              variant="outline" 
                              className="text-xs shrink-0"
                              style={{
                                borderColor: PROFICIENCY_RINGS[skill.proficiency].color,
                                color: PROFICIENCY_RINGS[skill.proficiency].color,
                              }}
                            >
                              {skill.proficiency}
                            </Badge>
                          </div>
                          
                          <Badge
                            variant="secondary"
                            className="text-xs"
                            style={{
                              backgroundColor: `${categoryColor}20`,
                              color: categoryColor,
                              borderColor: categoryColor,
                            }}
                          >
                            {skill.category}
                          </Badge>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">Proficiency</span>
                              <span className="font-semibold">{skill.level}%</span>
                            </div>
                            <Progress 
                              value={skill.level} 
                              className="h-2"
                              aria-label={`${skill.name} proficiency: ${skill.level}%`}
                            />
                          </div>

                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {skill.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Detail Panel - Only show in map view or when skill selected */}
          {(viewMode === 'map' || selectedSkill) && (
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
                    <Card 
                      className="p-6 bg-card/50 backdrop-blur-sm border-primary/20"
                      role="region"
                      aria-labelledby="skill-detail-heading"
                      aria-live="polite"
                    >
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
                          <h3 id="skill-detail-heading" className="text-2xl font-bold mb-2">{selectedSkill.name}</h3>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setSelectedSkill(null)}
                          aria-label="Close skill details"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="space-y-4">
                        {/* Proficiency */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-4 h-4 text-primary" aria-hidden="true" />
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
                          <Progress 
                            value={selectedSkill.level}
                            className="h-3"
                            aria-label={`${selectedSkill.name} proficiency: ${selectedSkill.level}%`}
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {selectedSkill.description}
                          </p>
                        </div>

                        {/* Outcomes */}
                        {selectedSkill.outcomes && selectedSkill.outcomes.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Key Outcomes</h4>
                            <ul className="space-y-2" role="list">
                              {selectedSkill.outcomes.map((outcome, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm" role="listitem">
                                  <span className="text-primary mt-1 shrink-0" aria-hidden="true">▸</span>
                                  <span>{outcome}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </Card>
                  </motion.div>
                ) : viewMode === 'map' ? (
                  <motion.div
                    key="instruction"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                      <div className="text-center py-8">
                        <Target className="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
                        <h3 className="text-xl font-bold mb-2">Explore Capabilities</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Click on skill nodes to view detailed information
                        </p>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <p><kbd className="px-2 py-1 bg-muted rounded">Tab</kbd> to navigate</p>
                          <p><kbd className="px-2 py-1 bg-muted rounded">Enter</kbd> to select</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
