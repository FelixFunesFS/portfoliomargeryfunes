import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  const [expandedCategories, setExpandedCategories] = useState<string[]>(CATEGORY_ORDER);

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

  const toggleAllCategories = () => {
    setExpandedCategories(prev => 
      prev.length === CATEGORY_ORDER.length ? [] : CATEGORY_ORDER
    );
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Technical Skills Matrix
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of technical capabilities across research, design, and development
          </p>
        </motion.div>

        {/* At-a-Glance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-accent/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-foreground mb-2">{skills.length}</div>
                  <div className="text-sm text-muted-foreground">Total Skills</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: getProficiencyColor('Expert') }}>
                    {totalStats.expert}
                  </div>
                  <div className="text-sm text-muted-foreground">Expert Level</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: getProficiencyColor('Advanced') }}>
                    {totalStats.advanced}
                  </div>
                  <div className="text-sm text-muted-foreground">Advanced Level</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: getProficiencyColor('Foundational') }}>
                    {totalStats.foundational}
                  </div>
                  <div className="text-sm text-muted-foreground">Foundational</div>
                </div>
              </div>
              <div className="flex gap-4 justify-center mt-6">
                <Button variant="outline" size="sm" onClick={toggleAllCategories}>
                  {expandedCategories.length === CATEGORY_ORDER.length ? 'Collapse All' : 'Expand All'}
                </Button>
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Accordion by Category */}
        <Accordion
          type="multiple" 
          value={expandedCategories}
          onValueChange={setExpandedCategories}
          className="space-y-4"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const stats = getCategoryStats(categorySkills);
            
            return (
              <AccordionItem 
                key={category} 
                value={category}
                className="border rounded-lg border-border bg-card"
              >
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-4">
                      <div 
                        className="h-8 w-1 rounded-full" 
                        style={{ backgroundColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] }}
                      />
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-foreground">
                          {category}
                        </h3>
                        <div className="flex gap-3 mt-1 text-xs">
                          {stats.expert > 0 && (
                            <span style={{ color: getProficiencyColor('Expert') }} className="font-medium">
                              ● Expert: {stats.expert}
                            </span>
                          )}
                          {stats.advanced > 0 && (
                            <span style={{ color: getProficiencyColor('Advanced') }} className="font-medium">
                              ● Advanced: {stats.advanced}
                            </span>
                          )}
                          {stats.foundational > 0 && (
                            <span className="text-muted-foreground font-medium">
                              ● Foundational: {stats.foundational}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="ml-auto mr-4"
                      style={{ 
                        borderColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS],
                        color: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS]
                      }}
                    >
                      {stats.total} skills
                    </Badge>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-6 pb-4">
                  <div className="grid gap-3 pt-4">
                    {categorySkills.map((skill) => (
                      <Card key={skill.name} className="hover:shadow-md transition-shadow duration-300 border-l-4" style={{ borderLeftColor: getProficiencyColor(skill.proficiency) }}>
                        <CardContent className="p-5">
                          <div className="grid md:grid-cols-[1fr,auto] gap-4 items-start">
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <div 
                                  className="w-2 h-2 rounded-full flex-shrink-0" 
                                  style={{ backgroundColor: getProficiencyColor(skill.proficiency) }}
                                />
                                <h4 className="text-lg font-semibold text-foreground">
                                  {skill.name}
                                </h4>
                                <Badge
                                  className="text-xs font-semibold px-2 py-1"
                                  style={{
                                    backgroundColor: getProficiencyColor(skill.proficiency) + '20',
                                    borderColor: getProficiencyColor(skill.proficiency),
                                    color: getProficiencyColor(skill.proficiency),
                                    border: '1px solid'
                                  }}
                                >
                                  {skill.proficiency}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {skill.description}
                              </p>
                            </div>
                            
                            <div className="md:w-32 space-y-2 md:text-right">
                              <div className="text-3xl font-bold" style={{ color: getProficiencyColor(skill.proficiency) }}>
                                {skill.level}%
                              </div>
                              <Progress 
                                value={skill.level} 
                                className="h-2 md:w-full w-32"
                                style={{
                                  '--progress-background': getProficiencyColor(skill.proficiency)
                                } as React.CSSProperties}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
