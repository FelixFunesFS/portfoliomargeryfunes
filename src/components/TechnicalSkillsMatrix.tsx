import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Download } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  proficiency: 'Expert' | 'Advanced' | 'Foundational';
  description: string;
  category: string;
}

interface TechnicalSkillsMatrixProps {
  skills: Skill[];
}

const CATEGORY_ORDER = [
  'UX Research & Design',
  'Full Stack Development',
  'AI Development & Automation'
];

const CATEGORY_COLORS = {
  'UX Research & Design': 'hsl(var(--primary))',
  'Full Stack Development': 'hsl(var(--chart-2))',
  'AI Development & Automation': 'hsl(var(--success))'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function TechnicalSkillsMatrix({ skills }: TechnicalSkillsMatrixProps) {

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert':
        return 'hsl(var(--success))';
      case 'Advanced':
        return 'hsl(var(--primary))';
      case 'Foundational':
        return 'hsl(var(--muted-foreground))';
      default:
        return 'hsl(var(--muted-foreground))';
    }
  };

  const groupedSkills = CATEGORY_ORDER.reduce((acc, category) => {
    const categorySkills = skills.filter(skill => skill.category === category);
    if (categorySkills.length > 0) {
      acc[category] = categorySkills;
    }
    return acc;
  }, {} as Record<string, Skill[]>);

  const getCategoryStats = (categorySkills: Skill[]) => {
    const expert = categorySkills.filter(s => s.proficiency === 'Expert').length;
    const advanced = categorySkills.filter(s => s.proficiency === 'Advanced').length;
    const foundational = categorySkills.filter(s => s.proficiency === 'Foundational').length;
    return { expert, advanced, foundational, total: categorySkills.length };
  };


  const handleExport = () => {
    const csvContent = [
      ['Skill', 'Category', 'Proficiency', 'Level', 'Description'],
      ...skills.map(skill => [
        skill.name,
        skill.category,
        skill.proficiency,
        skill.level.toString(),
        skill.description
      ])
    ]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'skills-matrix.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  const totalStats = {
    expert: skills.filter(s => s.proficiency === 'Expert').length,
    advanced: skills.filter(s => s.proficiency === 'Advanced').length,
    foundational: skills.filter(s => s.proficiency === 'Foundational').length
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Technical Skills Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dynamic showcase of technical capabilities across UX research, development, and AI automation
          </p>
        </motion.div>

        {/* Compact Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">{skills.length}</span>
              <span className="text-sm text-muted-foreground">Skills</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getProficiencyColor('Expert') }} />
              <span className="text-sm"><span className="font-bold" style={{ color: getProficiencyColor('Expert') }}>{totalStats.expert}</span> Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getProficiencyColor('Advanced') }} />
              <span className="text-sm"><span className="font-bold" style={{ color: getProficiencyColor('Advanced') }}>{totalStats.advanced}</span> Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getProficiencyColor('Foundational') }} />
              <span className="text-sm"><span className="font-bold" style={{ color: getProficiencyColor('Foundational') }}>{totalStats.foundational}</span> Foundational</span>
            </div>
            <div className="h-6 w-px bg-border hidden md:block" />
            <Button variant="ghost" size="sm" onClick={handleExport} className="gap-2">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </Button>
          </div>
        </motion.div>

        {/* Badge Gallery - Tag Cloud Layout */}
        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] }}
                />
                <h3 className="text-2xl font-bold text-foreground">
                  {category}
                </h3>
                <div 
                  className="h-px flex-1 opacity-20"
                  style={{ backgroundColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] }}
                />
              </div>

              {/* Tag Cloud Pills */}
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, skillIndex) => {
                  const proficiencyColor = getProficiencyColor(skill.proficiency);
                  const categoryColor = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS];
                  
                  // Size based on proficiency
                  const sizeClasses = skill.proficiency === 'Expert' 
                    ? 'px-6 py-3 text-base font-bold' 
                    : skill.proficiency === 'Advanced'
                    ? 'px-5 py-2.5 text-sm font-semibold'
                    : 'px-4 py-2 text-sm font-medium';

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button
                            className={`
                              ${sizeClasses}
                              rounded-full border-2 
                              transition-all duration-200 
                              hover:scale-105 hover:shadow-lg
                              cursor-pointer
                              backdrop-blur-sm
                              group
                            `}
                            style={{
                              backgroundColor: `${categoryColor}15`,
                              borderColor: proficiencyColor,
                              color: proficiencyColor,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = `${proficiencyColor}20`;
                              e.currentTarget.style.boxShadow = `0 8px 16px ${proficiencyColor}30`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = `${categoryColor}15`;
                              e.currentTarget.style.boxShadow = 'none';
                            }}
                          >
                            <span className="flex items-center gap-2">
                              {skill.name}
                              <span className="text-xs opacity-70 font-normal">
                                {skill.level}%
                              </span>
                            </span>
                          </button>
                        </HoverCardTrigger>
                        
                        <HoverCardContent className="w-80" side="top">
                          <div className="space-y-3">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h4 className="font-bold text-base mb-1">{skill.name}</h4>
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant="outline"
                                    className="text-xs"
                                    style={{
                                      backgroundColor: `${proficiencyColor}20`,
                                      borderColor: proficiencyColor,
                                      color: proficiencyColor
                                    }}
                                  >
                                    {skill.proficiency}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">{skill.level}% proficiency</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {skill.description}
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
