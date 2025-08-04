import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Shield, 
  GitBranch, 
  Brain, 
  TrendingUp,
  Database,
  Users,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Target,
  Lightbulb,
  Wrench
} from 'lucide-react';

interface JourneyPhase {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  skills: string[];
  challenge: string;
  solution: string;
  keyInsight: string;
  tools: string[];
}

const journeyPhases: JourneyPhase[] = [
  {
    id: 'military',
    title: 'Military Foundation',
    subtitle: 'Systematic thinking, process optimization, and mission-critical reliability',
    icon: Shield,
    color: 'text-military-primary',
    borderColor: 'border-military-primary/20',
    bgColor: 'bg-military-primary/20',
    skills: ['Strategic Planning', 'Risk Management', 'Process Excellence'],
    challenge: 'Managing complex systems under high-pressure environments where failure wasn\'t an option.',
    solution: 'Developed systematic approaches to break down complex problems into manageable components with clear success metrics.',
    keyInsight: 'Precision and reliability are non-negotiable, but they must be balanced with adaptability.',
    tools: ['Systems Analysis', 'Quality Assurance', 'Team Leadership', 'Resource Management']
  },
  {
    id: 'enterprise',
    title: 'Enterprise Translation',
    subtitle: 'Converting complex technical requirements into scalable business solutions',
    icon: GitBranch,
    color: 'text-systems-blue',
    borderColor: 'border-systems-blue/20',
    bgColor: 'bg-systems-blue/20',
    skills: ['Systems Integration', 'Stakeholder Alignment', 'Technical Leadership'],
    challenge: 'Bridging the gap between technical possibilities and business requirements across diverse stakeholders.',
    solution: 'Created translation frameworks that convert technical complexity into business value propositions.',
    keyInsight: 'The best technical solution is worthless if it doesn\'t solve real business problems.',
    tools: ['Requirements Analysis', 'Solution Architecture', 'Stakeholder Management', 'Project Leadership']
  },
  {
    id: 'ux',
    title: 'User-Centered Innovation',
    subtitle: 'Transforming complex systems into intuitive, human-centered experiences',
    icon: Brain,
    color: 'text-agile-primary',
    borderColor: 'border-agile-primary/20',
    bgColor: 'bg-agile-primary/20',
    skills: ['Design Thinking', 'User Research', 'Agile Innovation'],
    challenge: 'Making powerful, complex systems accessible and intuitive for everyday users.',
    solution: 'Applied user research and design thinking to create interfaces that hide complexity while preserving power.',
    keyInsight: 'True innovation happens when advanced technology becomes invisible to the user.',
    tools: ['User Interviews', 'Prototyping', 'Usability Testing', 'Design Systems']
  }
];

export default function InteractiveJourney() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
  const [activePhase, setActivePhase] = useState<string>('military');

  const togglePhase = (phaseId: string) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  return (
    <section className="section bg-gradient-to-br from-background via-background/95 to-military-primary/5 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-military-primary text-military-primary backdrop-blur-sm bg-background/50">
            Evolution
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            My Journey to <span className="text-gradient bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary bg-clip-text text-transparent">User-Centered Design</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4 sm:px-0">
            From military systems to enterprise solutions to user experience research — each phase has built 
            the unique perspective I bring to solving complex problems.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary transform -translate-y-1/2 z-0 hidden md:block opacity-60"></div>
          
          {/* Progress Dots */}
          <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-10 hidden md:flex justify-between px-8">
            {journeyPhases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                  activePhase === phase.id 
                    ? `bg-${phase.color.split('-')[1]}-primary border-${phase.color.split('-')[1]}-primary` 
                    : 'bg-background border-muted-foreground/30 hover:border-muted-foreground/60'
                }`}
                aria-label={`Jump to ${phase.title}`}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-20">
            {journeyPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isExpanded = expandedPhase === phase.id;
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: index === 0 ? -50 : index === 2 ? 50 : 0, y: index === 1 ? 50 : 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * (index + 1), duration: 0.6 }}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <Collapsible open={isExpanded} onOpenChange={() => togglePhase(phase.id)}>
                    <Card className={`glass ${phase.borderColor} shadow-systems hover:shadow-${phase.color.split('-')[1]}-primary/30 transition-all duration-300 cursor-pointer`}>
                      <CollapsibleTrigger asChild>
                        <CardContent className="p-6 sm:p-8">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full ${phase.bgColor} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${phase.color}`} />
                          </div>
                          <h3 className={`text-xl sm:text-2xl font-bold ${phase.color} mb-3 sm:mb-4`}>
                            {phase.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            {phase.subtitle}
                          </p>
                          <div className="space-y-2 mb-4">
                            {phase.skills.map((skill, skillIndex) => (
                              <Badge 
                                key={skillIndex}
                                variant="outline" 
                                className={`${phase.borderColor} ${phase.color} mr-2 mb-2 hover:bg-${phase.color.split('-')[1]}-primary/10 transition-colors`}
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className={`flex items-center justify-center ${phase.color} text-sm font-medium`}>
                            {isExpanded ? (
                              <>
                                <ChevronDown className="w-4 h-4 mr-1" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronRight className="w-4 h-4 mr-1" />
                                Learn More
                              </>
                            )}
                          </div>
                        </CardContent>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-6 sm:px-8 pb-6 sm:pb-8"
                        >
                          <Separator className="mb-6" />
                          
                          <div className="space-y-6 text-left">
                            <div>
                              <h4 className={`font-semibold ${phase.color} mb-2 flex items-center`}>
                                <Target className="w-4 h-4 mr-2" />
                                Challenge
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                {phase.challenge}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className={`font-semibold ${phase.color} mb-2 flex items-center`}>
                                <Wrench className="w-4 h-4 mr-2" />
                                Solution
                              </h4>
                              <p className="text-muted-foreground text-sm">
                                {phase.solution}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className={`font-semibold ${phase.color} mb-2 flex items-center`}>
                                <Lightbulb className="w-4 h-4 mr-2" />
                                Key Insight
                              </h4>
                              <p className="text-muted-foreground text-sm italic">
                                "{phase.keyInsight}"
                              </p>
                            </div>
                            
                            <div>
                              <h4 className={`font-semibold ${phase.color} mb-3`}>
                                Tools & Methods
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {phase.tools.map((tool, toolIndex) => (
                                  <Badge 
                                    key={toolIndex}
                                    variant="secondary" 
                                    className="text-xs"
                                  >
                                    {tool}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <Card className="glass border-accent/20 shadow-accent">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  The Bridge Effect
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground">
                  Where technical expertise meets human understanding
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Database className="w-5 h-5 text-systems-blue mr-2" />
                    Technical Translation
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-systems-blue mt-0.5 mr-3 flex-shrink-0" />
                      <span>Convert complex technical requirements into user-friendly solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-systems-blue mt-0.5 mr-3 flex-shrink-0" />
                      <span>Bridge communication gaps between developers and end users</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-systems-blue mt-0.5 mr-3 flex-shrink-0" />
                      <span>Ensure technical solutions align with business objectives</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                    <Users className="w-5 h-5 text-agile-primary mr-2" />
                    Human-Centered Impact
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-agile-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Design with military precision but user empathy at the core</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-agile-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Create solutions that are both powerful and accessible</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-agile-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span>Deliver measurable results through systematic user research</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Separator className="my-8" />

              <div className="text-center">
                <p className="text-lg text-muted-foreground italic">
                  "I don't just build systems or design interfaces — I create bridges between 
                  complex technology and human needs, ensuring solutions are both technically 
                  sound and genuinely useful."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}