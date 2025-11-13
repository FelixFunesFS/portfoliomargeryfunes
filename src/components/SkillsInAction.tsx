import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, TrendingUp, CheckCircle, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SkillInAction {
  skillName: string;
  icon: typeof Target;
  proficiency: 'Expert' | 'Advanced';
  applied: string[];
  impact: {
    metric: string;
    description: string;
  }[];
  caseStudyIds: number[];
  color: string;
}

const featuredSkills: SkillInAction[] = [
  {
    skillName: 'Usability Testing',
    icon: Target,
    proficiency: 'Expert',
    applied: [
      '15+ research studies conducted',
      '300+ user sessions analyzed',
      'Cross-domain testing (military & civilian)'
    ],
    impact: [
      {
        metric: '45% reduction',
        description: 'in user errors across tested interfaces'
      },
      {
        metric: '67% faster',
        description: 'task completion after implementing recommendations'
      },
      {
        metric: '200+ users',
        description: 'tested across multiple domains'
      }
    ],
    caseStudyIds: [1, 2, 3],
    color: 'hsl(var(--primary))'
  },
  {
    skillName: 'Systems Analysis',
    icon: Zap,
    proficiency: 'Expert',
    applied: [
      '10,000+ users supported',
      'Enterprise-scale architecture',
      'Complex data relationship mapping'
    ],
    impact: [
      {
        metric: '40% faster',
        description: 'task completion through process optimization'
      },
      {
        metric: '95% satisfaction',
        description: 'from stakeholders on solution design'
      },
      {
        metric: '5 departments',
        description: 'coordinated for unified solution'
      }
    ],
    caseStudyIds: [4, 5],
    color: 'hsl(var(--systems-blue))'
  },
  {
    skillName: 'Frontend Development',
    icon: CheckCircle,
    proficiency: 'Advanced',
    applied: [
      '20+ interfaces built',
      'Modern React ecosystem',
      'Responsive design systems'
    ],
    impact: [
      {
        metric: '100% responsive',
        description: 'across mobile, tablet, and desktop'
      },
      {
        metric: '8+ apps',
        description: 'designed and developed end-to-end'
      },
      {
        metric: 'Modern stack',
        description: 'React, TypeScript, Tailwind CSS'
      }
    ],
    caseStudyIds: [6, 7],
    color: 'hsl(var(--success))'
  },
  {
    skillName: 'Strategic Planning',
    icon: TrendingUp,
    proficiency: 'Expert',
    applied: [
      'Multi-year roadmaps developed',
      'Vision documents for enterprise initiatives',
      'Cross-functional alignment'
    ],
    impact: [
      {
        metric: '3 organizations',
        description: 'adopted strategic frameworks'
      },
      {
        metric: '100+ stakeholders',
        description: 'aligned through strategic planning'
      },
      {
        metric: 'Multi-year',
        description: 'roadmaps successfully executed'
      }
    ],
    caseStudyIds: [1, 4, 5],
    color: 'hsl(var(--agile-primary))'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export default function SkillsInAction() {
  const navigate = useNavigate();

  const handleViewCaseStudies = () => {
    navigate('/case-studies');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Featured Skills
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world application of core skills with measurable outcomes and impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {featuredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.skillName} variants={itemVariants}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden group">
                  <div 
                    className="h-2 transition-all duration-300 group-hover:h-3"
                    style={{ backgroundColor: skill.color }}
                  />
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div 
                        className="p-4 rounded-xl bg-muted/50 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${skill.color}15` }}
                      >
                        <Icon 
                          className="w-8 h-8" 
                          style={{ color: skill.color }}
                        />
                      </div>
                      <Badge 
                        variant={skill.proficiency === 'Expert' ? 'default' : 'secondary'}
                        className="text-sm"
                      >
                        {skill.proficiency}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {skill.skillName}
                    </h3>

                    <div className="space-y-6">
                      {/* Applied Section */}
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                          Applied in:
                        </h4>
                        <ul className="space-y-2">
                          {skill.applied.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                              <span 
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: skill.color }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Impact Section */}
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                          Measurable Impact:
                        </h4>
                        <div className="grid gap-3">
                          {skill.impact.map((impact, idx) => (
                            <div 
                              key={idx} 
                              className="p-3 rounded-lg bg-muted/50 border border-border/50"
                            >
                              <div 
                                className="text-lg font-bold mb-1"
                                style={{ color: skill.color }}
                              >
                                {impact.metric}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {impact.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            onClick={handleViewCaseStudies}
            className="gap-2 group"
          >
            View Full Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
