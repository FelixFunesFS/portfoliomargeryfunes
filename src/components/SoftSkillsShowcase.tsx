import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  MessageSquare, 
  Brain, 
  Target,
  Lightbulb,
  Zap,
  Shield,
  GitBranch,
  LucideIcon
} from 'lucide-react';

interface SoftSkill {
  category: 'Leadership' | 'Communication' | 'Problem-Solving' | 'Collaboration';
  name: string;
  icon: LucideIcon;
  metric?: string;
  description: string;
  examples: string[];
}

const softSkills: SoftSkill[] = [
  {
    category: 'Leadership',
    name: 'Military Leadership',
    icon: Shield,
    metric: '50+ personnel',
    description: 'Led teams through complex operations requiring clear communication and decisive action',
    examples: [
      'Managed cross-functional teams of 50+ personnel',
      'Developed junior leaders through mentorship programs',
      'Created training curricula adopted across 3 organizations'
    ]
  },
  {
    category: 'Communication',
    name: 'Stakeholder Communication',
    icon: MessageSquare,
    metric: '100+ briefings',
    description: 'Bridge technical and non-technical audiences with clear, actionable insights',
    examples: [
      'Presented research findings to C-suite executives',
      'Translated technical requirements for non-technical teams',
      'Facilitated workshops with diverse stakeholder groups'
    ]
  },
  {
    category: 'Problem-Solving',
    name: 'Systems Thinking',
    icon: GitBranch,
    metric: 'Expert',
    description: 'Understand interconnections and anticipate downstream impacts',
    examples: [
      'Mapped complex system relationships for 10,000+ users',
      'Identified leverage points for maximum impact',
      'Prevented unintended consequences through holistic analysis'
    ]
  },
  {
    category: 'Collaboration',
    name: 'Cross-functional Collaboration',
    icon: Users,
    metric: '10+ projects',
    description: 'Unite diverse teams toward shared goals through empathy and coordination',
    examples: [
      'Coordinated research initiatives across 5 departments',
      'Built consensus among stakeholders with competing priorities',
      'Established collaborative workflows reducing friction by 35%'
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export default function SoftSkillsShowcase() {
  const leadershipSkills = softSkills.filter(s => 
    s.category === 'Leadership' || s.category === 'Communication'
  );
  const problemSolvingSkills = softSkills.filter(s => 
    s.category === 'Problem-Solving' || s.category === 'Collaboration'
  );

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Soft Skills & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Essential human-centered capabilities for effective leadership and collaboration
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Leadership & Communication Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-accent" />
              Leadership & Communication
            </h3>
            {leadershipSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-accent/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-accent/10">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-foreground">
                              {skill.name}
                            </h4>
                            {skill.metric && (
                              <span className="text-sm font-semibold text-accent">
                                {skill.metric}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {skill.description}
                          </p>
                          <ul className="space-y-1">
                            {skill.examples.map((example, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-accent mt-1">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Problem-Solving & Adaptability Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" />
              Problem-Solving & Collaboration
            </h3>
            {problemSolvingSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="hover:shadow-lg transition-all duration-300 border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-foreground">
                              {skill.name}
                            </h4>
                            {skill.metric && (
                              <span className="text-sm font-semibold text-primary">
                                {skill.metric}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">
                            {skill.description}
                          </p>
                          <ul className="space-y-1">
                            {skill.examples.map((example, idx) => (
                              <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
