import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Users, PenTool, TestTube, Rocket, RotateCcw, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DesignProcess = () => {

  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      phase: "01",
      title: "Research & Discovery",
      description: "Military-precision user research and stakeholder interviews to understand real operational needs",
      keyQuestion: "Why are users struggling? What are their real needs vs. their stated needs?",
      deliverables: ["User Personas", "Journey Maps", "Requirements Analysis", "Competitive Research"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Users className="w-8 h-8" />,
      phase: "02", 
      title: "Alignment & Strategy",
      description: "Bridging the communication gap between users and development teams through clear documentation",
      keyQuestion: "What patterns are emerging, and how do user needs connect to business goals?",
      deliverables: ["Stakeholder Workshops", "Technical Specifications", "Success Metrics", "Project Roadmap"],
      color: "bg-accent/10 text-accent"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      phase: "03",
      title: "Design & Prototyping", 
      description: "Creating intuitive interfaces with systems thinking and attention to detail",
      keyQuestion: "Which solutions resonate, and how do users actually interact with our ideas?",
      deliverables: ["Wireframes", "High-Fidelity Prototypes", "Design Systems", "Interaction Models"],
      color: "bg-success/10 text-success"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      phase: "04",
      title: "Testing & Validation",
      description: "Rigorous testing methodology ensuring solutions work under real-world conditions",
      keyQuestion: "Did we solve the right problem? What should we optimize next?",
      deliverables: ["Usability Testing", "A/B Testing", "Performance Metrics", "User Feedback"],
      color: "bg-destructive/10 text-destructive"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      phase: "05",
      title: "Implementation & Launch",
      description: "Supporting development teams with technical expertise and quality assurance",
      keyQuestion: "How do we ensure the solution is technically sound, scalable, and ready for real-world use?",
      deliverables: ["Development Support", "Quality Assurance", "Launch Strategy", "Training Materials"],
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      phase: "06",
      title: "Iteration & Optimization",
      description: "Continuous improvement based on real user data and performance metrics",
      keyQuestion: "What are feedback and data telling us post-launch? How can we improve performance and user satisfaction?",
      deliverables: ["Analytics Review", "User Feedback Integration", "Performance Optimization", "Feature Enhancement"],
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="design-process" className="section bg-gradient-to-br from-muted/20 via-background to-accent/10">
      <div className="container-custom">
        {/* Research Philosophy Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Research Philosophy & Methodology
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            From Discovery to <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">Deployment</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-base sm:text-lg text-muted-foreground italic leading-relaxed mb-6">
              "Every artifact tells a story. Whether it's a journey map revealing user pain points 
              or a systems diagram showing technical constraints, I believe in making the invisible visible. 
              Good research isn't just about gathering data—it's about creating shared understanding 
              that transforms how teams think about problems."
            </p>
            <Badge variant="outline" className="border-accent text-accent mb-6">
              Always ask "Why?" before "How?"
            </Badge>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              A systematic, military-informed approach to user-centered design that ensures every solution 
              is built for real-world effectiveness and long-term success.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {processSteps.map((step, index) => (
            <div key={index}>
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
                  
                  {step.keyQuestion && (
                    <div className="mb-4 p-3 rounded-lg bg-muted/30 border-l-4 border-primary">
                      <p className="text-xs sm:text-sm font-medium text-foreground italic">
                        💡 Key Question: <span className="text-primary">{step.keyQuestion}</span>
                      </p>
                    </div>
                  )}
                  
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
              </div>
            ))}
           </div>

          {/* Research Toolkit CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.6, duration: 0.6 }} 
            className="mt-12 max-w-4xl mx-auto"
          >
            <Card className="glass border-accent/20 shadow-card">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-6">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                    Deep-Dive Research Toolkit
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Explore the comprehensive research methods, tools, and systematic approaches that drive effective user-centered design. 
                    From sprint-based problem solving to research artifacts and impact measurement.
                  </p>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.location.href = '/insights'}>
                    Explore Research Insights <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

      </div>
    </section>
  );
};

export default DesignProcess;