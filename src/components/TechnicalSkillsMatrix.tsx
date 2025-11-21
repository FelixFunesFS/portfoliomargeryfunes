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

  const getBorderWidth = (proficiency: string) => {
    switch (proficiency) {
      case 'Expert': return '3px';
      case 'Advanced': return '2px';
      case 'Foundational': return '1px';
      default: return '1px';
    }
  };

  return (
    <section className="py-20 bg-background">
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
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div
              key={category}
            >
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-foreground">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => {
                  const proficiencyColor = getProficiencyColor(skill.proficiency);
                  const categoryColor = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS];
                  const borderWidth = getBorderWidth(skill.proficiency);

                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                    >
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <button
                            className="px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 hover:shadow-md cursor-pointer"
                            style={{
                              backgroundColor: `${categoryColor}15`,
                              color: proficiencyColor,
                              borderLeft: `${borderWidth} solid ${proficiencyColor}`
                            }}
                          >
                            {skill.name}
                          </button>
                        </HoverCardTrigger>
                        
                        <HoverCardContent className="w-72" side="top">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm">{skill.name}</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
