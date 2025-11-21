import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, TestTube, MapPin, BarChart3, Search, Brain, PenTool, Rocket, RotateCcw, Clock } from 'lucide-react';

const ResearchMethodologyAndProcess = () => {
  // Part 1: Research Toolkit
  const researchMethods = [
    {
      name: "User Interviews",
      description: "In-depth conversations to understand user motivations, pain points, and mental models",
      icon: Users,
      count: "50+ conducted",
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Usability Testing",
      description: "Observing real users interact with systems to identify friction points",
      icon: TestTube,
      count: "200+ sessions",
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "Journey Mapping",
      description: "Visualizing end-to-end user experiences to identify optimization opportunities",
      icon: MapPin,
      count: "25+ journeys",
      color: "bg-accent/10 text-accent"
    },
    {
      name: "Data Analysis",
      description: "Quantitative analysis to validate insights and measure impact",
      icon: BarChart3,
      count: "Multi-year datasets",
      color: "bg-muted text-muted-foreground"
    }
  ];

  // Part 2: End-to-End Process (6 phases)
  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      phase: "01",
      title: "Empathy & Discovery",
      description: "Deep user research through interviews, observations, and data analysis to understand real problems and mental models",
      keyQuestion: "Why are users struggling? What are their real needs vs. their stated needs?",
      deliverables: ["User Interviews (50+)", "Journey Maps", "Mental Models", "Pain Point Analysis"],
      color: "bg-primary/10 text-primary",
      methods: ["User Interviews", "Contextual Inquiry", "Analytics Review", "Stakeholder Mapping"],
      timeline: "1-2 weeks"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      phase: "02", 
      title: "Synthesis & Insights",
      description: "Pattern recognition and opportunity identification through systematic analysis of research findings",
      keyQuestion: "What patterns are emerging, and what opportunities can we prioritize for maximum impact?",
      deliverables: ["Research Synthesis", "Opportunity Map", "User Personas", "Success Metrics"],
      color: "bg-accent/10 text-accent",
      methods: ["Affinity Mapping", "Thematic Analysis", "Persona Development", "Jobs-to-be-Done"],
      timeline: "1 week"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      phase: "03",
      title: "Solution Design", 
      description: "Evidence-based solutions aligned with user needs, creating intuitive interfaces with systems thinking",
      keyQuestion: "Which solutions resonate, and how do users actually interact with our ideas?",
      deliverables: ["Wireframes", "Prototypes", "Design Systems", "Interaction Models"],
      color: "bg-success/10 text-success",
      methods: ["Co-design Sessions", "Rapid Prototyping", "Design Systems", "Information Architecture"],
      timeline: "2-3 weeks"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      phase: "04",
      title: "Validation & Iteration",
      description: "Testing and refining based on user feedback through rigorous usability testing methodology",
      keyQuestion: "Did we solve the right problem? What should we optimize based on real user behavior?",
      deliverables: ["Usability Testing (200+ sessions)", "A/B Testing", "Validation Report", "Iteration Plan"],
      color: "bg-destructive/10 text-destructive",
      methods: ["Moderated Testing", "Unmoderated Testing", "A/B Testing", "Analytics Validation"],
      timeline: "1-2 weeks"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      phase: "05",
      title: "Implementation & Launch",
      description: "Supporting development teams with technical expertise, quality assurance, and launch strategy",
      keyQuestion: "How do we ensure the solution is technically sound, scalable, and ready for real-world use?",
      deliverables: ["Development Support", "QA Testing", "Launch Strategy", "Training Materials"],
      color: "bg-primary/10 text-primary",
      methods: ["Design QA", "Developer Handoff", "Launch Planning", "Team Training"],
      timeline: "2-4 weeks"
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      phase: "06",
      title: "Measurement & Growth",
      description: "Continuous improvement based on real user data, performance metrics, and ongoing research",
      keyQuestion: "What are feedback and data telling us post-launch? How can we drive continued improvement?",
      deliverables: ["Analytics Review", "User Feedback Integration", "Performance Report", "Growth Roadmap"],
      color: "bg-accent/10 text-accent",
      methods: ["Analytics Monitoring", "Continuous Feedback", "Performance Optimization", "Feature Enhancement"],
      timeline: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Primary Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research Methodology & Design Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive, evidence-based approach combining systematic research methods with agile delivery. 
            Every solution is grounded in real user needs and validated through rigorous testing.
          </p>
        </motion.div>

        {/* Part 1: Research Toolkit */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Research Toolkit & Methods
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Systematic approaches to understanding users and validating solutions
            </p>
          </motion.div>

          {/* Research Methods Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center mx-auto mb-3`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{method.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {method.count}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center">
                      {method.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part 2: End-to-End Design Process */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-foreground mb-3">
              End-to-End Design Process
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From discovery to ongoing measurement, a complete research-driven workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                    
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground">{step.title}</h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {step.timeline}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-xs sm:text-sm">{step.description}</p>
                    
                    {step.keyQuestion && (
                      <div className="mb-4 p-3 rounded-lg bg-muted/30 border-l-4 border-primary">
                        <p className="text-xs sm:text-sm font-medium text-foreground italic">
                          💡 Key Question: <span className="text-primary">{step.keyQuestion}</span>
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-medium text-xs sm:text-sm text-foreground mb-2">Research Methods:</h5>
                        <div className="flex flex-wrap gap-1">
                          {step.methods.map((method, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="font-medium text-xs sm:text-sm text-foreground mb-2">Key Deliverables:</h5>
                        <div className="flex flex-wrap gap-1">
                          {step.deliverables.map((deliverable, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchMethodologyAndProcess;
