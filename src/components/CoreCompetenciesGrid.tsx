import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Palette, 
  Code, 
  BarChart3, 
  Users, 
  Zap,
  Target,
  Layers
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CoreCompetency {
  name: string;
  icon: LucideIcon;
  proficiency: 'Expert' | 'Advanced';
  impactStatement: string;
  yearsExperience: number;
  highlightMetric: string;
  color: string;
}

const coreCompetencies: CoreCompetency[] = [
  {
    name: 'UX Research',
    icon: Search,
    proficiency: 'Expert',
    impactStatement: 'Led 50+ user studies across military and civilian domains',
    yearsExperience: 8,
    highlightMetric: '15+ studies',
    color: 'hsl(var(--primary))'
  },
  {
    name: 'Systems Analysis',
    icon: Layers,
    proficiency: 'Expert',
    impactStatement: 'Architected enterprise solutions for 10,000+ users',
    yearsExperience: 10,
    highlightMetric: '10k+ users',
    color: 'hsl(var(--systems-blue))'
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    proficiency: 'Advanced',
    impactStatement: 'Created design systems tested with 200+ users',
    yearsExperience: 6,
    highlightMetric: '8+ apps designed',
    color: 'hsl(var(--accent))'
  },
  {
    name: 'Data Analysis',
    icon: BarChart3,
    proficiency: 'Expert',
    impactStatement: 'Analyzed 500+ hours of user behavior data',
    yearsExperience: 8,
    highlightMetric: '500+ hours',
    color: 'hsl(var(--military-accent))'
  },
  {
    name: 'Strategic Planning',
    icon: Target,
    proficiency: 'Expert',
    impactStatement: 'Developed multi-year roadmaps for enterprise initiatives',
    yearsExperience: 10,
    highlightMetric: 'Multi-year roadmaps',
    color: 'hsl(var(--agile-primary))'
  },
  {
    name: 'Leadership',
    icon: Users,
    proficiency: 'Expert',
    impactStatement: 'Led cross-functional teams of 20+ members',
    yearsExperience: 12,
    highlightMetric: '50+ personnel',
    color: 'hsl(var(--accent))'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export default function CoreCompetenciesGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">Core</span> <span className="text-systems-blue">Competencies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top capabilities that drive measurable impact across research, design, and development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coreCompetencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <motion.div key={competency.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="p-3 rounded-lg bg-muted/50"
                        style={{ 
                          backgroundColor: `${competency.color}20`
                        }}
                      >
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: competency.color }}
                        />
                      </div>
                      <Badge 
                        variant={competency.proficiency === 'Expert' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {competency.proficiency}
                      </Badge>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {competency.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      {competency.impactStatement}
                    </p>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        {competency.yearsExperience}+ years
                      </span>
                      <span 
                        className="font-semibold"
                        style={{ color: competency.color }}
                      >
                        {competency.highlightMetric}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
