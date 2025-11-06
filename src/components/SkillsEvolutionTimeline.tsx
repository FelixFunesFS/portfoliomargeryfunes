import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Wrench, Rocket, Sparkles, Award, TrendingUp } from 'lucide-react';

interface TimelineEra {
  period: string;
  title: string;
  organization: string;
  icon: React.ElementType;
  color: string;
  bgGradient: string;
  skillsAcquired: string[];
  keyAchievements: string[];
  impactMetric: string;
}

const timelineEras: TimelineEra[] = [
  {
    period: '2016-2018',
    title: 'Aircraft Systems Specialist',
    organization: 'United States Air Force',
    icon: Shield,
    color: '#3b82f6', // blue
    bgGradient: 'from-blue-500/20 to-blue-600/20',
    skillsAcquired: [
      'Military Leadership',
      'Systems Analysis',
      'Process Documentation',
      'Technical Writing',
      'Quality Control',
      'Team Command'
    ],
    keyAchievements: [
      'Led 50+ personnel in mission-critical operations',
      'Maintained 100% mission readiness rate',
      'Developed foundational systems thinking approach',
      'Established precision and attention to detail standards'
    ],
    impactMetric: 'Zero-defect operational record'
  },
  {
    period: '2018-2021',
    title: 'Senior Systems Analyst',
    organization: 'Boeing Defense',
    icon: Wrench,
    color: '#8b5cf6', // purple
    bgGradient: 'from-purple-500/20 to-purple-600/20',
    skillsAcquired: [
      'SQL & Database Design',
      'SharePoint Development',
      'Tableau Analytics',
      'User Research',
      'Journey Mapping',
      'Stakeholder Management'
    ],
    keyAchievements: [
      'Designed F117 engine tracking system for 23 global bases',
      'Reduced reporting time by 45%',
      'Conducted 50+ user interviews',
      'Created enterprise-scale dashboards'
    ],
    impactMetric: '65% reduction in manual steps'
  },
  {
    period: '2021-2023',
    title: 'UX Designer & Automation Lead',
    organization: 'Boeing Defense',
    icon: Rocket,
    color: '#10b981', // green
    bgGradient: 'from-green-500/20 to-green-600/20',
    skillsAcquired: [
      'VBA Automation',
      'JavaScript Development',
      'C# Programming',
      'UX Design (Figma)',
      'Empathy Mapping',
      'Prototyping'
    ],
    keyAchievements: [
      'Automated data entry saving 26,000+ hours annually',
      'Reduced errors by 90%',
      'Built slide automation (98% faster)',
      'Saved $2M+ over 5 years'
    ],
    impactMetric: '80% time reduction on repetitive tasks'
  },
  {
    period: '2023-Present',
    title: 'UX/UI Designer',
    organization: 'Independent Practice',
    icon: Sparkles,
    color: '#ec4899', // pink
    bgGradient: 'from-pink-500/20 to-pink-600/20',
    skillsAcquired: [
      'React & TypeScript',
      'Modern CSS/Tailwind',
      'Lovable.dev',
      'Supabase',
      'AI-Assisted Development',
      'Rapid Prototyping',
      'SEO Optimization'
    ],
    keyAchievements: [
      'Built full-stack event management app (83% faster response)',
      'Reduced miscommunication by 65%',
      'Created low-code solutions for small businesses',
      'Integrated AI tools into development workflow'
    ],
    impactMetric: 'Rapid delivery with maximum impact'
  }
];

export default function SkillsEvolutionTimeline() {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Evolution Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Skills Evolution Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From military precision to enterprise systems to modern UX—a journey of continuous learning and adaptation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-400 to-primary transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-24">
            {timelineEras.map((era, index) => {
              const Icon = era.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={era.period}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="relative"
                    >
                      {/* Outer glow */}
                      <div 
                        className="absolute inset-0 rounded-full blur-xl opacity-50"
                        style={{ backgroundColor: era.color }}
                      />
                      {/* Main dot */}
                      <div 
                        className="relative w-16 h-16 rounded-full flex items-center justify-center border-4 border-background shadow-lg"
                        style={{ backgroundColor: era.color }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-[calc(50%-4rem)] ${isEven ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'}`}>
                    <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all duration-300"
                      style={{ borderColor: era.color + '40' }}
                    >
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${era.bgGradient} p-6 border-b-2`}
                        style={{ borderBottomColor: era.color + '40' }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Mobile Icon */}
                          <div 
                            className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: era.color }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>

                          <div className="flex-1">
                            <Badge 
                              variant="outline" 
                              className="mb-2 font-semibold"
                              style={{ 
                                borderColor: era.color,
                                color: era.color 
                              }}
                            >
                              {era.period}
                            </Badge>
                            <h3 className="text-2xl font-bold mb-1">{era.title}</h3>
                            <p className="text-muted-foreground font-medium">{era.organization}</p>
                          </div>
                        </div>

                        {/* Impact Metric Badge */}
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border"
                          style={{ borderColor: era.color + '60' }}
                        >
                          <Award className="w-4 h-4" style={{ color: era.color }} />
                          <span className="text-sm font-semibold" style={{ color: era.color }}>
                            {era.impactMetric}
                          </span>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Skills Acquired */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                            SKILLS ACQUIRED
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {era.skillsAcquired.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="text-xs font-medium"
                                style={{
                                  backgroundColor: era.color + '15',
                                  color: era.color,
                                  borderColor: era.color + '30'
                                }}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                            KEY ACHIEVEMENTS
                          </h4>
                          <ul className="space-y-2">
                            {era.keyAchievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                                className="flex items-start gap-3"
                              >
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: era.color }}
                                />
                                <span className="text-sm leading-relaxed">{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline End Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border-2 border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">
                Continuous Learning & Evolution
              </span>
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </motion.div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Years Experience', value: '8+', color: '#3b82f6' },
            { label: 'Skills Mastered', value: '30+', color: '#8b5cf6' },
            { label: 'Career Phases', value: '4', color: '#10b981' },
            { label: 'Industries', value: '3', color: '#ec4899' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-2 hover:shadow-lg transition-all"
                style={{ borderColor: stat.color + '40' }}
              >
                <div 
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
