import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
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
  'UX Research',
  'Full Stack Development',
  'AI Development & Automation'
];

const CATEGORY_COLORS = {
  'UX Research': 'hsl(var(--primary))',
  'Full Stack Development': 'hsl(var(--chart-2))',
  'AI Development & Automation': 'hsl(var(--success))'
};

const CATEGORY_ICONS: Record<string, string> = {
  'UX Research': '🔬',
  'Full Stack Development': '💻',
  'AI Development & Automation': '🤖'
};

const PROFICIENCY_GRADIENTS = {
  'Expert': 'linear-gradient(135deg, hsl(var(--success)) 0%, hsl(var(--success)) 100%)',
  'Advanced': 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)',
  'Foundational': 'linear-gradient(135deg, hsl(var(--muted-foreground)) 0%, hsl(var(--muted-foreground)) 100%)'
};

const PROFICIENCY_ICONS = {
  'Expert': '⚡',
  'Advanced': '★',
  'Foundational': '●'
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

  return (
    <section className="py-20 bg-gradient-to-b from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Technical Skills
            </h2>
            <p className="text-sm text-muted-foreground">
              Hover to learn more
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleExport} className="gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export</span>
          </Button>
        </div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const categoryIcon = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
            const categoryColor = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS];
            
            // Sort skills by proficiency (Expert → Advanced → Foundational)
            const sortedSkills = [...categorySkills].sort((a, b) => {
              const order = { Expert: 0, Advanced: 1, Foundational: 2 };
              return order[a.proficiency] - order[b.proficiency];
            });

            return (
              <div key={category} className="space-y-5">
                {/* Category Header with Icon + Gradient Underline */}
                <div className="relative pb-3">
                  <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 tracking-tight">
                    <span className="text-3xl">{categoryIcon}</span>
                    {category}
                  </h3>
                  <div 
                    className="absolute bottom-0 left-0 h-0.5 w-full opacity-30"
                    style={{
                      background: `linear-gradient(90deg, ${categoryColor} 0%, transparent 100%)`
                    }}
                  />
                </div>

                {/* Glassmorphic Skill Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sortedSkills.map((skill) => {
                    const proficiencyGradient = PROFICIENCY_GRADIENTS[skill.proficiency];
                    const proficiencyIcon = PROFICIENCY_ICONS[skill.proficiency];
                    const proficiencyColor = getProficiencyColor(skill.proficiency);

                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="group"
                      >
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <div
                              className="relative p-4 rounded-xl backdrop-blur-sm border border-border/50 
                                         hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 
                                         cursor-pointer bg-card/30"
                            >
                              {/* Skill Name */}
                              <h4 className="text-base font-semibold text-foreground mb-3 leading-tight">
                                {skill.name}
                              </h4>
                              
                              {/* Progress Bar */}
                              <div className="relative w-full h-2 bg-muted/30 rounded-full overflow-hidden mb-2">
                                <motion.div
                                  className="absolute inset-y-0 left-0 rounded-full"
                                  style={{
                                    background: proficiencyGradient,
                                    width: `${skill.level}%`
                                  }}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                              </div>
                              
                              {/* Percentage + Badge */}
                              <div className="flex items-center justify-between">
                                <span 
                                  className="text-sm font-bold tabular-nums"
                                  style={{ color: proficiencyColor }}
                                >
                                  {skill.level}%
                                </span>
                                <span className="text-xs font-medium px-2 py-1 rounded-md flex items-center gap-1"
                                  style={{ 
                                    background: `${proficiencyColor}15`,
                                    color: proficiencyColor 
                                  }}
                                >
                                  {skill.proficiency} {proficiencyIcon}
                                </span>
                              </div>
                            </div>
                          </HoverCardTrigger>
                          
                          <HoverCardContent className="w-80" side="top">
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="font-semibold text-base leading-tight">{skill.name}</h4>
                                <span 
                                  className="text-xs font-medium px-2 py-1 rounded-md whitespace-nowrap flex items-center gap-1"
                                  style={{ 
                                    background: `${proficiencyColor}15`,
                                    color: proficiencyColor 
                                  }}
                                >
                                  {skill.proficiency} {proficiencyIcon}
                                </span>
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
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
