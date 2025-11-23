import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    <section className="relative py-20 bg-gradient-to-b from-background via-background to-muted/10 overflow-hidden">
      {/* Code Snippet Marquee Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-marquee whitespace-nowrap text-xs font-mono text-muted-foreground">
            <span className="inline-block px-8">const research = async () =&gt; &#123; &#125;</span>
            <span className="inline-block px-8">interface User &#123; id: string; needs: string[]; &#125;</span>
            <span className="inline-block px-8">useEffect(() =&gt; &#123; analyzeData(); &#125;, [data])</span>
            <span className="inline-block px-8">const findings = await synthesize(insights)</span>
            <span className="inline-block px-8">type Skill = &#123; name: string; level: number; &#125;</span>
            <span className="inline-block px-8">return optimizedSolution;</span>
            <span className="inline-block px-8">const research = async () =&gt; &#123; &#125;</span>
            <span className="inline-block px-8">interface User &#123; id: string; needs: string[]; &#125;</span>
            <span className="inline-block px-8">useEffect(() =&gt; &#123; analyzeData(); &#125;, [data])</span>
            <span className="inline-block px-8">const findings = await synthesize(insights)</span>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center top-1/3">
          <div className="animate-marquee-reverse whitespace-nowrap text-xs font-mono text-muted-foreground">
            <span className="inline-block px-8">SELECT * FROM users WHERE persona_match = true</span>
            <span className="inline-block px-8">git commit -m "implement user feedback"</span>
            <span className="inline-block px-8">npm run build &amp;&amp; deploy --production</span>
            <span className="inline-block px-8">function validateAccessibility(component) &#123; &#125;</span>
            <span className="inline-block px-8">const metrics = &#123; nps: 85, csat: 92 &#125;</span>
            <span className="inline-block px-8">import &#123; research, design, implement &#125; from 'process'</span>
            <span className="inline-block px-8">SELECT * FROM users WHERE persona_match = true</span>
            <span className="inline-block px-8">git commit -m "implement user feedback"</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              <span className="text-foreground">Technical </span>
              <span className="bg-gradient-to-r from-primary via-systems-cyan to-accent bg-clip-text text-transparent">
                Capabilities
              </span>
              <span className="text-foreground"> & Implementation</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl">
              Comprehensive technical skills refined through 20+ years of hands-on experience across research, development, and systems optimization.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleExport} className="gap-2 self-start sm:self-auto">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Export Skills</span>
            <span className="sm:hidden">Export</span>
          </Button>
        </div>

        <Tabs defaultValue="UX Research" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-auto p-1 mb-8 bg-muted/50">
            <TabsTrigger 
              value="UX Research" 
              className="gap-2 py-3 data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
            >
              <span className="text-base sm:text-lg">🔬</span>
              <span className="text-xs sm:text-sm font-medium">UX Research</span>
            </TabsTrigger>
            <TabsTrigger 
              value="Full Stack Development" 
              className="gap-2 py-3 data-[state=active]:bg-chart-2/10 data-[state=active]:text-chart-2"
            >
              <span className="text-base sm:text-lg">💻</span>
              <span className="text-xs sm:text-sm font-medium">Full Stack Dev</span>
            </TabsTrigger>
            <TabsTrigger 
              value="AI Development & Automation" 
              className="gap-2 py-3 data-[state=active]:bg-success/10 data-[state=active]:text-success"
            >
              <span className="text-base sm:text-lg">🤖</span>
              <span className="text-xs sm:text-sm font-medium">AI/Automation</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const categoryIcon = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
            const categoryColor = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS];
            
            // Sort skills by proficiency (Expert → Advanced → Foundational)
            const sortedSkills = [...categorySkills].sort((a, b) => {
              const order = { Expert: 0, Advanced: 1, Foundational: 2 };
              return order[a.proficiency] - order[b.proficiency];
            });

            return (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div 
                  className="space-y-5"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Glassmorphic Skill Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
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
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
