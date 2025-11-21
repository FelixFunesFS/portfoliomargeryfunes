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
              <div className="flex justify-center mt-6">
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const stats = getCategoryStats(categorySkills);
            
            return (
              <Card 
                key={category}
                className="border-2 overflow-hidden"
                style={{ borderTopColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] }}
              >
                {/* Category Header */}
                <div 
                  className="p-4 border-b"
                  style={{ 
                    backgroundColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] + '10',
                    borderBottomColor: CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS] + '30'
                  }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {category}
                  </h3>
                  <div className="flex gap-2 text-xs flex-wrap">
                    {stats.expert > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {stats.expert} Expert
                      </Badge>
                    )}
                    {stats.advanced > 0 && (
                      <Badge variant="outline" className="text-xs">
                        {stats.advanced} Advanced
                      </Badge>
                    )}
                    {stats.foundational > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {stats.foundational} Foundational
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Skills List */}
                <CardContent className="p-4 space-y-4">
                  {categorySkills.map((skill) => (
                    <HoverCard key={skill.name}>
                      <HoverCardTrigger asChild>
                        <div className="space-y-2 cursor-pointer hover:bg-accent/5 p-2 -m-2 rounded transition-colors">
                          {/* Skill Name + Proficiency Badge */}
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-sm font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <Badge
                              variant="outline"
                              className="text-xs px-1.5 py-0"
                              style={{
                                borderColor: getProficiencyColor(skill.proficiency),
                                color: getProficiencyColor(skill.proficiency)
                              }}
                            >
                              {skill.proficiency.charAt(0)}
                            </Badge>
                          </div>
                          
                          {/* Progress Bar + Level */}
                          <div className="flex items-center gap-2">
                            <Progress 
                              value={skill.level} 
                              className="h-1.5 flex-1"
                            />
                            <span 
                              className="text-xs font-bold tabular-nums w-8 text-right"
                              style={{ color: getProficiencyColor(skill.proficiency) }}
                            >
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      
                      <HoverCardContent className="w-72" side="top">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold text-sm">{skill.name}</h4>
                            <Badge
                              variant="outline"
                              className="text-xs"
                              style={{
                                backgroundColor: getProficiencyColor(skill.proficiency) + '20',
                                borderColor: getProficiencyColor(skill.proficiency),
                                color: getProficiencyColor(skill.proficiency)
                              }}
                            >
                              {skill.proficiency}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
