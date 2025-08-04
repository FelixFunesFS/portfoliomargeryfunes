import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  GitBranch, 
  Brain, 
  TrendingUp,
  Database,
  Users,
  CheckCircle,
  Target,
  Lightbulb,
  Wrench,
  ArrowDown,
  Play
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
  const [activePhase, setActivePhase] = useState<string>('military');
  const [hoveredPhase, setHoveredPhase] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');
  const [detailPhase, setDetailPhase] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handlePhaseClick = (phaseId: string) => {
    setActivePhase(phaseId);
    if (viewMode === 'overview') {
      setDetailPhase(phaseId);
      setViewMode('detailed');
    } else if (detailPhase === phaseId) {
      setViewMode('overview');
      setDetailPhase(null);
    } else {
      setDetailPhase(phaseId);
    }
  };

  const scrollToPhase = (phaseId: string) => {
    setActivePhase(phaseId);
    const element = document.getElementById(`phase-${phaseId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-br from-background via-background/95 to-military-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <Badge variant="outline" className="mb-4 border-military-primary text-military-primary backdrop-blur-sm bg-background/50">
            Evolution
          </Badge>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
            My Journey to <span className="text-gradient bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary bg-clip-text text-transparent">User-Centered Design</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            From military systems to enterprise solutions to user experience research — each phase has built 
            the unique perspective I bring to solving complex problems.
          </p>
        </motion.div>

        {/* Enhanced Timeline Navigation */}
        <div className="hidden lg:flex justify-center mb-8">
          <div className="flex items-center space-x-8 bg-card/60 backdrop-blur-sm rounded-full p-2 border">
            {journeyPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;
              
              return (
                <motion.button
                  key={phase.id}
                  onClick={() => scrollToPhase(phase.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive 
                      ? `bg-gradient-to-r ${phase.bgColor} ${phase.color} shadow-lg scale-105` 
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                  }`}
                  whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium hidden xl:block">{phase.title}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Optimized Desktop Layout */}
        <div className="relative">
          {/* Background Progress Line */}
          <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-military-primary/20 via-systems-blue/20 to-agile-primary/20 hidden lg:block"></div>
          <motion.div
            className="absolute top-24 left-0 h-0.5 bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary hidden lg:block"
            initial={{ width: 0 }}
            animate={{ 
              width: activePhase === 'military' ? '33%' : activePhase === 'enterprise' ? '66%' : '100%' 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Asymmetrical Grid Layout */}
          <div className="space-y-8 lg:space-y-16">
            {journeyPhases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;
              const isDetailed = detailPhase === phase.id && viewMode === 'detailed';
              const isRight = index % 2 === 1;
              
              return (
                <motion.div
                  key={phase.id}
                  id={`phase-${phase.id}`}
                  initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  className={`relative ${isRight ? 'lg:ml-auto lg:max-w-5xl' : 'lg:mr-auto lg:max-w-5xl'}`}
                  onMouseEnter={() => setHoveredPhase(phase.id)}
                  onMouseLeave={() => setHoveredPhase(null)}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className={`hidden lg:block absolute top-6 w-6 h-6 rounded-full border-4 border-background shadow-lg z-10 ${
                      isRight ? '-left-3' : '-right-3'
                    } ${phase.bgColor}`}
                    animate={{
                      scale: isActive ? 1.3 : hoveredPhase === phase.id ? 1.1 : 1,
                      boxShadow: isActive ? `0 0 20px ${phase.color.replace('text-', '')}` : '0 4px 8px rgba(0,0,0,0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className={`w-3 h-3 ${phase.color} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                  </motion.div>

                  <motion.div
                    layout
                    className={`grid gap-6 ${
                      isDetailed 
                        ? 'lg:grid-cols-5' 
                        : isRight 
                          ? 'lg:grid-cols-3 lg:text-right' 
                          : 'lg:grid-cols-3'
                    }`}
                    animate={{
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Main Phase Card */}
                    <motion.div 
                      className={`${
                        isDetailed 
                          ? 'lg:col-span-2' 
                          : isRight 
                            ? 'lg:col-span-2 lg:order-2' 
                            : 'lg:col-span-2'
                      }`}
                      whileHover={{ y: -4 }}
                    >
                      <Card 
                        className={`${phase.borderColor} bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 cursor-pointer group ${
                          isActive ? 'ring-2 ring-primary/20 shadow-2xl' : 'hover:shadow-xl'
                        }`}
                        onClick={() => handlePhaseClick(phase.id)}
                      >
                        <CardContent className="p-6 lg:p-8">
                          <div className="flex items-start space-x-4">
                            <motion.div 
                              className={`w-16 h-16 rounded-full ${phase.bgColor} flex items-center justify-center flex-shrink-0`}
                              whileHover={{ rotate: 5, scale: 1.05 }}
                            >
                              <Icon className={`w-8 h-8 ${phase.color}`} />
                            </motion.div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className={`text-2xl font-bold ${phase.color} mb-2`}>
                                {phase.title}
                              </h3>
                              <p className="text-muted-foreground mb-4 leading-relaxed">
                                {phase.subtitle}
                              </p>
                              
                              <div className="flex flex-wrap gap-2 mb-4">
                                {phase.skills.map((skill, skillIndex) => (
                                  <Badge 
                                    key={skillIndex}
                                    variant="outline" 
                                    className={`${phase.borderColor} ${phase.color} hover:bg-primary/10 transition-colors`}
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              
                              <motion.button
                                className={`flex items-center space-x-2 ${phase.color} text-sm font-medium group-hover:underline`}
                                whileHover={{ x: 4 }}
                              >
                                <Play className="w-4 h-4" />
                                <span>{isDetailed ? 'Show Overview' : 'Explore Details'}</span>
                              </motion.button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>

                    {/* Phase Number */}
                    <motion.div 
                      className={`hidden lg:flex items-center justify-center ${
                        isDetailed ? 'lg:col-span-1' : isRight ? 'lg:order-1' : ''
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <div className={`w-20 h-20 rounded-full ${phase.bgColor} flex items-center justify-center border-2 ${phase.borderColor}`}>
                        <span className={`text-3xl font-bold ${phase.color}`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </motion.div>

                    {/* Detailed View Panel */}
                    <AnimatePresence>
                      {isDetailed && (
                        <motion.div
                          initial={{ opacity: 0, x: 50, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 50, scale: 0.9 }}
                          transition={{ duration: 0.5 }}
                          className="lg:col-span-2"
                        >
                          <Card className="bg-muted/50 backdrop-blur-sm border-muted">
                            <CardContent className="p-6 space-y-6">
                              <div>
                                <h4 className={`font-semibold ${phase.color} mb-2 flex items-center`}>
                                  <Target className="w-4 h-4 mr-2" />
                                  Challenge
                                </h4>
                                <p className="text-muted-foreground">
                                  {phase.challenge}
                                </p>
                              </div>
                              
                              <div>
                                <h4 className={`font-semibold ${phase.color} mb-2 flex items-center`}>
                                  <Wrench className="w-4 h-4 mr-2" />
                                  Solution
                                </h4>
                                <p className="text-muted-foreground">
                                  {phase.solution}
                                </p>
                              </div>
                              
                              <div>
                                <h4 className={`font-semibold ${phase.color} mb-2 flex items-center`}>
                                  <Lightbulb className="w-4 h-4 mr-2" />
                                  Key Insight
                                </h4>
                                <p className="text-muted-foreground italic">
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
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Compact Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 lg:mt-20"
        >
          <Card className="bg-gradient-to-r from-military-primary/5 via-systems-blue/5 to-agile-primary/5 border-primary/10 backdrop-blur-sm">
            <CardContent className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <motion.div 
                  className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-military-primary via-systems-blue to-agile-primary flex items-center justify-center mb-4"
                  whileHover={{ rotate: 180, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <TrendingUp className="w-8 h-8 text-background" />
                </motion.div>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  The Bridge Effect
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Where technical expertise meets human understanding — creating solutions that are both powerful and accessible.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ y: -4 }}
                >
                  <Database className="w-12 h-12 text-systems-blue mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Technical Translation
                  </h4>
                  <p className="text-muted-foreground">
                    Convert complex requirements into user-friendly solutions that align with business objectives.
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ y: -4 }}
                >
                  <Users className="w-12 h-12 text-agile-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Human-Centered Impact
                  </h4>
                  <p className="text-muted-foreground">
                    Design with military precision while keeping user empathy and accessibility at the core.
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ y: -4 }}
                >
                  <CheckCircle className="w-12 h-12 text-military-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    Measurable Results
                  </h4>
                  <p className="text-muted-foreground">
                    Deliver solutions backed by systematic research and proven methodologies.
                  </p>
                </motion.div>
              </div>

              <Separator className="my-8" />

              <div className="text-center">
                <p className="text-xl text-muted-foreground italic max-w-4xl mx-auto">
                  "I create bridges between complex technology and human needs, ensuring solutions are both technically sound and genuinely useful."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}