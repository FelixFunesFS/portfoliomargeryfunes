import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Code,
  Palette
} from 'lucide-react';

interface JourneyCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  bgColor: string;
  content: string;
  skills?: string[];
  type: 'main' | 'skill' | 'insight' | 'tool' | 'value';
}

const journeyCards: JourneyCard[] = [
  // Row 1 - Single card
  {
    id: 'overview',
    title: 'My Journey to User-Centered Design',
    subtitle: 'From military systems to enterprise solutions to user experience research',
    icon: TrendingUp,
    color: 'text-primary',
    borderColor: 'border-primary/20',
    bgColor: 'bg-primary/10',
    content: 'Each phase has built the unique perspective I bring to solving complex problems — combining systematic thinking, technical expertise, and human-centered design.',
    type: 'main'
  },
  // Row 2 - Left side
  {
    id: 'military',
    title: 'Military Foundation',
    subtitle: 'Systematic thinking and mission-critical reliability',
    icon: Shield,
    color: 'text-military-primary',
    borderColor: 'border-military-primary/20',
    bgColor: 'bg-military-primary/10',
    content: 'Developed systematic approaches to break down complex problems into manageable components with clear success metrics under high-pressure environments.',
    skills: ['Strategic Planning', 'Risk Management', 'Process Excellence'],
    type: 'main'
  },
  // Row 2 - Right top
  {
    id: 'skills',
    title: 'Core Skills',
    subtitle: 'Technical and leadership capabilities',
    icon: Database,
    color: 'text-systems-blue',
    borderColor: 'border-systems-blue/20',
    bgColor: 'bg-systems-blue/10',
    content: 'Systems analysis, stakeholder management, and agile methodologies form the foundation of my problem-solving approach.',
    skills: ['Systems Analysis', 'Team Leadership', 'Agile Methods'],
    type: 'skill'
  },
  // Row 2 - Right bottom
  {
    id: 'tools',
    title: 'Tools & Methods',
    subtitle: 'Research and design toolkit',
    icon: Wrench,
    color: 'text-accent',
    borderColor: 'border-accent/20',
    bgColor: 'bg-accent/10',
    content: 'From requirements analysis to user interviews, I leverage diverse tools to understand problems and validate solutions.',
    skills: ['User Research', 'Prototyping', 'Quality Assurance'],
    type: 'tool'
  },
  // Row 3 - Left top
  {
    id: 'enterprise',
    title: 'Enterprise Translation',
    subtitle: 'Technical requirements to business solutions',
    icon: GitBranch,
    color: 'text-systems-blue',
    borderColor: 'border-systems-blue/20',
    bgColor: 'bg-systems-blue/10',
    content: 'Created translation frameworks that convert technical complexity into business value propositions across diverse stakeholders.',
    skills: ['Solution Architecture', 'Stakeholder Alignment', 'Project Leadership'],
    type: 'main'
  },
  // Row 3 - Left bottom
  {
    id: 'ux',
    title: 'User-Centered Innovation',
    subtitle: 'Complex systems into intuitive experiences',
    icon: Brain,
    color: 'text-agile-primary',
    borderColor: 'border-agile-primary/20',
    bgColor: 'bg-agile-primary/10',
    content: 'Applied design thinking to create interfaces that hide complexity while preserving power, making advanced technology invisible to users.',
    skills: ['Design Thinking', 'User Research', 'Usability Testing'],
    type: 'main'
  },
  // Row 3 - Right
  {
    id: 'methodology',
    title: 'Design Methodology',
    subtitle: 'Human-centered problem solving',
    icon: Target,
    color: 'text-agile-primary',
    borderColor: 'border-agile-primary/20',
    bgColor: 'bg-agile-primary/10',
    content: 'Combining systematic analysis with user empathy to create solutions that are both technically sound and intuitively usable.',
    type: 'insight'
  },
  // Row 4 - Left
  {
    id: 'approach',
    title: 'Problem-Solving Approach',
    subtitle: 'Precision meets adaptability',
    icon: CheckCircle,
    color: 'text-success',
    borderColor: 'border-success/20',
    bgColor: 'bg-success/10',
    content: 'Precision and reliability are non-negotiable, but they must be balanced with adaptability and user needs.',
    type: 'value'
  },
  // Row 4 - Right
  {
    id: 'value',
    title: 'Value Proposition',
    subtitle: 'Bridging technical and human needs',
    icon: Users,
    color: 'text-primary',
    borderColor: 'border-primary/20',
    bgColor: 'bg-primary/10',
    content: 'The best technical solution is worthless if it doesn\'t solve real business problems and serve actual user needs.',
    type: 'value'
  },
  // Row 5 - Left
  {
    id: 'technical',
    title: 'Technical Excellence',
    subtitle: 'Systems thinking and innovation',
    icon: Code,
    color: 'text-systems-blue',
    borderColor: 'border-systems-blue/20',
    bgColor: 'bg-systems-blue/10',
    content: 'Deep technical understanding combined with systems thinking enables innovative solutions that scale.',
    type: 'skill'
  },
  // Row 5 - Right
  {
    id: 'design',
    title: 'Design Philosophy',
    subtitle: 'Innovation through simplicity',
    icon: Palette,
    color: 'text-agile-primary',
    borderColor: 'border-agile-primary/20',
    bgColor: 'bg-agile-primary/10',
    content: 'True innovation happens when advanced technology becomes invisible to the user through thoughtful design.',
    type: 'insight'
  }
];

export default function InteractiveJourney() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const renderCard = (card: JourneyCard, index: number) => {
    const Icon = card.icon;
    const isHovered = hoveredCard === card.id;
    
    return (
      <motion.div
        key={card.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        onMouseEnter={() => setHoveredCard(card.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <Card 
          className={`${card.borderColor} bg-card/60 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group h-full ${
            isHovered ? 'ring-2 ring-primary/20 shadow-xl' : 'hover:shadow-lg'
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-start space-x-4 mb-4">
              <motion.div 
                className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center flex-shrink-0`}
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <Icon className={`w-6 h-6 ${card.color}`} />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h3 className={`text-lg font-bold ${card.color} mb-1`}>
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.subtitle}
                </p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {card.content}
            </p>
            
            {card.skills && (
              <div className="flex flex-wrap gap-2">
                {card.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline" 
                    className={`${card.borderColor} ${card.color} hover:bg-primary/10 transition-colors text-xs`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-background/95 to-military-primary/5 relative overflow-hidden">
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

        {/* Grid-Based Layout */}
        <div className="space-y-8">
          {/* Row 1 - Single card */}
          <div className="grid grid-cols-1">
            {renderCard(journeyCards[0], 0)}
          </div>

          {/* Row 2 - 1 card left, 2 stacked cards right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="lg:flex lg:items-center">
              {renderCard(journeyCards[1], 1)}
            </div>
            <div className="space-y-4">
              {renderCard(journeyCards[2], 2)}
              {renderCard(journeyCards[3], 3)}
            </div>
          </div>

          {/* Row 3 - 2 stacked cards left, 1 card right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {renderCard(journeyCards[4], 4)}
              {renderCard(journeyCards[5], 5)}
            </div>
            <div className="lg:flex lg:items-center">
              {renderCard(journeyCards[6], 6)}
            </div>
          </div>

          {/* Row 4 - 2 columns with 1 card each */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {renderCard(journeyCards[7], 7)}
            {renderCard(journeyCards[8], 8)}
          </div>

          {/* Row 5 - 2 columns with 1 card each */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {renderCard(journeyCards[9], 9)}
            {renderCard(journeyCards[10], 10)}
          </div>
        </div>
      </div>
    </section>
  );
}