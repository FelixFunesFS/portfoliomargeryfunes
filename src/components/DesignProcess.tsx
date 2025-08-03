import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Users, PenTool, TestTube, Rocket, RotateCcw } from 'lucide-react';
import useInView from '@/hooks/useInView';

const DesignProcess = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const slideUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      phase: "01",
      title: "Research & Discovery",
      description: "Military-precision user research and stakeholder interviews to understand real operational needs",
      deliverables: ["User Personas", "Journey Maps", "Requirements Analysis", "Competitive Research"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      phase: "02", 
      title: "Alignment & Strategy",
      description: "Bridging the communication gap between users and development teams through clear documentation",
      deliverables: ["Stakeholder Workshops", "Technical Specifications", "Success Metrics", "Project Roadmap"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      phase: "03",
      title: "Design & Prototyping", 
      description: "Creating intuitive interfaces with systems thinking and attention to detail",
      deliverables: ["Wireframes", "High-Fidelity Prototypes", "Design Systems", "Interaction Models"],
      color: "bg-success/10 text-success"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      phase: "04",
      title: "Testing & Validation",
      description: "Rigorous testing methodology ensuring solutions work under real-world conditions",
      deliverables: ["Usability Testing", "A/B Testing", "Performance Metrics", "User Feedback"],
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      phase: "05",
      title: "Implementation & Launch",
      description: "Supporting development teams with technical expertise and quality assurance",
      deliverables: ["Development Support", "Quality Assurance", "Launch Strategy", "Training Materials"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      phase: "06",
      title: "Iteration & Optimization",
      description: "Continuous improvement based on real user data and performance metrics",
      deliverables: ["Analytics Review", "User Feedback Integration", "Performance Optimization", "Feature Enhancement"],
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section ref={ref} id="design-process" className="section bg-gradient-to-br from-muted/20 via-background to-accent/10">
      <motion.div 
        className="container-custom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={slideUpVariants} className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary">
            My Design Process
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
            A systematic, military-informed approach to user-centered design that ensures every solution 
            is built for real-world effectiveness and long-term success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={slideUpVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="glass border-none h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${step.color}`}>
                      {step.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.phase}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-xs sm:text-sm">{step.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-xs sm:text-sm text-foreground">Key Deliverables:</h4>
                    <div className="flex flex-wrap gap-1">
                      {step.deliverables.map((deliverable, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Philosophy */}
        <motion.div variants={slideUpVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="glass border-none">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Research-Driven</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Every decision is backed by real user data and operational context, not assumptions.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-none">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Collaborative</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Bringing together stakeholders, users, and developers for aligned solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="glass border-none">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TestTube className="w-6 h-6 sm:w-8 sm:h-8 text-success" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">Iterative</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Continuous testing and refinement ensure optimal performance and user satisfaction.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DesignProcess;