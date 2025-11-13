import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Search, Filter, Download, X } from 'lucide-react';

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
  'Design & Frontend Development',
  'Automation & Tools',
  'Leadership & Collaboration',
  'AI & Modern Development'
];

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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProficiency, setSelectedProficiency] = useState<string | null>(null);

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

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || skill.category === selectedCategory;
    const matchesProficiency = !selectedProficiency || skill.proficiency === selectedProficiency;
    
    return matchesSearch && matchesCategory && matchesProficiency;
  });

  const groupedSkills = CATEGORY_ORDER.reduce((acc, category) => {
    const categorySkills = filteredSkills.filter(skill => skill.category === category);
    if (categorySkills.length > 0) {
      acc[category] = categorySkills;
    }
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = [...new Set(skills.map(s => s.category))];
  const proficiencyLevels = ['Expert', 'Advanced', 'Foundational'];

  const handleExport = () => {
    const csvContent = [
      ['Skill', 'Category', 'Proficiency', 'Level', 'Description'],
      ...filteredSkills.map(skill => [
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

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={handleExport}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Categories:
            </span>
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Proficiency Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Proficiency:</span>
            <Button
              variant={selectedProficiency === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedProficiency(null)}
            >
              All
            </Button>
            {proficiencyLevels.map(level => (
              <Button
                key={level}
                variant={selectedProficiency === level ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedProficiency(selectedProficiency === level ? null : level)}
              >
                {level}
              </Button>
            ))}
          </div>

          {/* Active Filters Summary */}
          {(selectedCategory || selectedProficiency || searchQuery) && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Active filters:</span>
              {searchQuery && (
                <Badge variant="secondary" className="gap-2">
                  Search: "{searchQuery}"
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-foreground"
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              {selectedCategory && (
                <Badge variant="secondary" className="gap-2">
                  {selectedCategory}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-foreground"
                    onClick={() => setSelectedCategory(null)}
                  />
                </Badge>
              )}
              {selectedProficiency && (
                <Badge variant="secondary" className="gap-2">
                  {selectedProficiency}
                  <X
                    className="w-3 h-3 cursor-pointer hover:text-foreground"
                    onClick={() => setSelectedProficiency(null)}
                  />
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Showing {filteredSkills.length} of {skills.length} skills
        </div>

        {/* Skills Grid by Category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground mb-4 border-l-4 border-primary pl-4">
                {category}
              </h3>
              <div className="grid gap-4">
                {categorySkills.map((skill) => (
                  <Card key={skill.name} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-[1fr,auto,auto] gap-4 items-center">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <h4 className="text-lg font-semibold text-foreground">
                              {skill.name}
                            </h4>
                            <Badge
                              variant="outline"
                              style={{
                                borderColor: getProficiencyColor(skill.proficiency),
                                color: getProficiencyColor(skill.proficiency)
                              }}
                            >
                              {skill.proficiency}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                        
                        <div className="md:w-48 space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Proficiency</span>
                            <span className="font-semibold">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                            style={{
                              '--progress-background': getProficiencyColor(skill.proficiency)
                            } as React.CSSProperties}
                          />
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-bold" style={{ color: getProficiencyColor(skill.proficiency) }}>
                            {skill.level}
                          </div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No skills found matching your filters.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
                setSelectedProficiency(null);
              }}
              className="mt-4"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
