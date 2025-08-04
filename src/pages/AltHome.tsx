import React from 'react';
import { ArrowRight, Search, Users, Lightbulb, Target, CheckCircle, Mail, ExternalLink, Zap, TrendingUp, Shield, 
         Plane, Building2, MapPin, Clock, Award, BarChart3, FileText, Eye, TestTube, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AltHome = () => {
  const journeySteps = [
    {
      phase: "Military Foundation",
      location: "U.S. Air Force",
      timeline: "2008-2012",
      problem: "Complex military systems with poor user interfaces causing operational delays",
      insight: "Technology fails when it doesn't serve the user's real needs",
      skills: ["Systems Analysis", "Process Optimization", "User Training"],
      icon: <Plane className="h-6 w-6" />,
      color: "bg-primary/10 text-primary"
    },
    {
      phase: "Corporate Systems",
      location: "Boeing",
      timeline: "2012-2018",
      problem: "Enterprise software that engineers avoided using, leading to inefficiencies",
      insight: "User adoption depends on solving real workflow problems, not just features",
      skills: ["Enterprise UX", "Stakeholder Management", "Change Management"],
      icon: <Building2 className="h-6 w-6" />,
      color: "bg-accent/10 text-accent"
    },
    {
      phase: "UX Research Focus",
      location: "Freelance & Agencies",
      timeline: "2018-Present",
      problem: "Businesses making product decisions without understanding user behavior",
      insight: "Data-driven UX research eliminates guesswork and drives measurable results",
      skills: ["User Research", "Behavioral Analysis", "Conversion Optimization"],
      icon: <Search className="h-6 w-6" />,
      color: "bg-coral/10 text-coral"
    }
  ];

  const militaryTransferableSkills = [
    {
      skill: "Mission-Critical Problem Solving",
      description: "Trained to identify root causes quickly and implement solutions under pressure",
      uxApplication: "Rapid user problem diagnosis and systematic solution development",
      icon: <Target className="h-5 h-5" />
    },
    {
      skill: "Systems Thinking",
      description: "Understanding how complex systems interact and affect each other",
      uxApplication: "Mapping user journeys across touchpoints and identifying friction points",
      icon: <BarChart3 className="h-5 h-5" />
    },
    {
      skill: "Attention to Detail",
      description: "Military precision in documentation and process adherence",
      uxApplication: "Thorough user research documentation and data analysis",
      icon: <FileText className="h-5 h-5" />
    },
    {
      skill: "User Training & Communication",
      description: "Teaching complex technical concepts to diverse audiences",
      uxApplication: "Translating user insights into actionable business recommendations",
      icon: <Users className="h-5 h-5" />
    }
  ];

  const detailedCaseStudies = [
    {
      title: "Military Training Platform Redesign",
      client: "Defense Contractor",
      problem: "90% of new recruits failed to complete online training modules, causing delays in deployment readiness",
      researchMethods: ["User Interviews", "Task Analysis", "Cognitive Load Testing"],
      keyFindings: [
        "Information overload in single sessions",
        "No progress tracking or motivation",
        "Technical jargon without context"
      ],
      solution: "Microlearning approach with gamification and progressive skill building",
      metrics: {
        before: "10% completion rate",
        after: "87% completion rate",
        impact: "6 weeks faster deployment readiness"
      },
      tags: ["Government", "Training", "Behavioral Design"],
      timeline: "3 months"
    },
    {
      title: "Enterprise Software Adoption Crisis",
      client: "Fortune 500 Manufacturing",
      problem: "New ERP system had 23% adoption rate after 6 months, costing $2M in lost productivity",
      researchMethods: ["Shadowing Sessions", "Workflow Analysis", "Stakeholder Interviews"],
      keyFindings: [
        "Software didn't match actual work processes",
        "No training for edge cases",
        "Fear of making mistakes in new system"
      ],
      solution: "Contextual help system and workflow-based interface redesign",
      metrics: {
        before: "23% adoption rate",
        after: "91% adoption rate", 
        impact: "$2.3M productivity recovery"
      },
      tags: ["Enterprise", "Change Management", "Productivity"],
      timeline: "4 months"
    },
    {
      title: "Healthcare Patient Portal Crisis",
      client: "Regional Health System",
      problem: "Patients couldn't access test results, leading to 40% increase in support calls",
      researchMethods: ["Usability Testing", "Accessibility Audit", "Patient Journey Mapping"],
      keyFindings: [
        "Complex navigation for stressed patients",
        "Medical terminology without explanations", 
        "Poor mobile experience for older adults"
      ],
      solution: "Simplified information architecture with plain language and mobile-first design",
      metrics: {
        before: "40% increase in support calls",
        after: "65% reduction in support calls",
        impact: "4.8/5 patient satisfaction score"
      },
      tags: ["Healthcare", "Accessibility", "Mobile-first"],
      timeline: "5 months"
    }
  ];

  const problemSolutions = [
    {
      problem: "Users abandon your product after first use",
      solution: "Deep user research & onboarding optimization",
      impact: "87% reduction in churn",
      icon: <Users className="h-6 w-6" />,
      color: "bg-primary/10 text-primary"
    },
    {
      problem: "Low conversion rates on key pages",
      solution: "Data-driven UX audits & A/B testing",
      impact: "340% conversion increase",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-accent/10 text-accent"
    },
    {
      problem: "Complex workflows confuse users",
      solution: "User journey mapping & interaction design",
      impact: "65% faster task completion",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-coral/10 text-coral"
    }
  ];

  const researchMethods = [
    {
      method: "User Interviews",
      description: "Deep 1:1 conversations to uncover real user needs and pain points",
      when: "Discovery phase, problem validation"
    },
    {
      method: "Usability Testing",
      description: "Observe real users interacting with your product to identify friction points",
      when: "Before launch, continuous optimization"
    },
    {
      method: "Analytics Deep-Dive",
      description: "Data analysis to understand user behavior patterns and drop-off points",
      when: "Ongoing optimization, problem identification"
    },
    {
      method: "Competitive Analysis",
      description: "Study industry patterns and identify opportunities for differentiation",
      when: "Strategy phase, feature planning"
    }
  ];

  const caseStudyPreview = [
    {
      title: "Healthcare Portal Redesign",
      problem: "Patients couldn't find critical health information quickly",
      solution: "Information architecture redesign & personalized dashboards",
      result: "78% reduction in support calls, 4.8/5 user satisfaction",
      tags: ["Healthcare", "Enterprise", "Accessibility"]
    },
    {
      title: "E-commerce Checkout Flow",
      problem: "60% cart abandonment during checkout process",
      solution: "Streamlined multi-step flow with progress indicators",
      result: "45% increase in completed purchases",
      tags: ["E-commerce", "Conversion", "Mobile-first"]
    },
    {
      title: "SaaS Dashboard Optimization",
      problem: "Users overwhelmed by data, low feature adoption",
      solution: "Progressive disclosure & contextual help system",
      result: "2x feature usage, 35% reduction in training time",
      tags: ["SaaS", "Data Visualization", "Onboarding"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            <div className="text-xl font-semibold text-foreground">
              Margery Funes
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#problems" className="text-muted-foreground hover:text-foreground transition-colors">
                Problems I Solve
              </a>
              <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                My Process
              </a>
              <a href="#results" className="text-muted-foreground hover:text-foreground transition-colors">
                Results
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Work Together
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero - Problem-Focused */}
      <section className="py-20 lg:py-32 bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              UX Researcher & Problem Solver
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              I solve user problems<br />
              <span className="text-gradient">that hurt your business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Through deep user research and data-driven design, I identify why users struggle 
              with your product and create solutions that drive measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Search className="mr-2 h-4 w-4" />
                Diagnose My Product Issues
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                See Problem-Solving Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problems I Solve */}
      <section id="problems" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Common Problems I Solve
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These are the user experience issues that cost businesses millions in lost revenue
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {problemSolutions.map((item, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:shadow-elegant group">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-6`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    Problem: {item.problem}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Solution:</strong> {item.solution}
                  </p>
                  <div className="flex items-center text-success font-semibold">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {item.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section id="process" className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My Research-Driven Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every solution starts with understanding the real user problems through proven research methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchMethods.map((method, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">{method.method}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm">
                    {method.description}
                  </p>
                  <Badge variant="outline" className="text-xs">
                    {method.when}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="border-0 bg-primary/5 backdrop-blur-sm max-w-3xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">My Research Philosophy</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  "I don't guess what users want—I discover what they actually need through systematic research. 
                  Every design decision is backed by user data, behavioral insights, and measurable outcomes. 
                  This approach turns assumptions into validated solutions that users love and businesses profit from."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Section - Problem-Solving Evolution */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My Problem-Solving Evolution
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From military systems to enterprise software to user research—each phase taught me 
              new ways to identify and solve complex user problems
            </p>
          </div>

          <div className="space-y-8">
            {journeySteps.map((step, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-2">
                      <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                        {step.icon}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {step.timeline}
                      </Badge>
                    </div>
                    
                    <div className="md:col-span-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.phase}</h3>
                      <p className="text-muted-foreground mb-4 flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {step.location}
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-medium text-destructive mb-1">Problem Encountered:</p>
                          <p className="text-sm text-muted-foreground">{step.problem}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-primary mb-1">Key Insight:</p>
                          <p className="text-sm text-muted-foreground">{step.insight}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:col-span-4">
                      <p className="text-sm font-medium text-foreground mb-3">Skills Developed:</p>
                      <div className="flex flex-wrap gap-2">
                        {step.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Military & Boeing Problem-Solving Foundation */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Military & Aerospace Foundation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How military precision and aerospace systems thinking shaped my approach to solving user problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {militaryTransferableSkills.map((item, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mt-1">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{item.skill}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="border-l-2 border-primary/20 pl-4">
                        <p className="text-sm text-primary font-medium">UX Application:</p>
                        <p className="text-sm text-muted-foreground">{item.uxApplication}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">The Military Advantage in UX Research</h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Military training taught me that user error is often system error. When a pilot makes a mistake, 
                we don't blame the pilot—we redesign the interface. This mindset is invaluable in UX research: 
                when users struggle with your product, the problem is usually in the design, not the user.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Deep-Dive Problem-Solving Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdowns of complex user problems and the research-driven solutions that delivered results
            </p>
          </div>

          <div className="space-y-12">
            {detailedCaseStudies.map((study, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {study.timeline}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-foreground mb-2">{study.title}</h3>
                      <p className="text-muted-foreground mb-6">{study.client}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-destructive mb-2 flex items-center">
                            <Target className="h-4 w-4 mr-2" />
                            The Problem
                          </h4>
                          <p className="text-muted-foreground">{study.problem}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2 flex items-center">
                            <Eye className="h-4 w-4 mr-2" />
                            Research Methods Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.researchMethods.map((method, methodIndex) => (
                              <Badge key={methodIndex} variant="outline" className="text-xs">
                                {method}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-accent mb-2 flex items-center">
                            <Lightbulb className="h-4 w-4 mr-2" />
                            Key Research Findings
                          </h4>
                          <ul className="space-y-1">
                            {study.keyFindings.map((finding, findingIndex) => (
                              <li key={findingIndex} className="text-sm text-muted-foreground flex items-start">
                                <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                                {finding}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <Rocket className="h-4 w-4 mr-2" />
                            Solution Implemented
                          </h4>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-4">
                      <Card className="border-0 bg-success/5">
                        <CardHeader>
                          <CardTitle className="text-lg text-success flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            Measured Impact
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Before:</p>
                              <p className="font-semibold text-destructive">{study.metrics.before}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">After:</p>
                              <p className="font-semibold text-success">{study.metrics.after}</p>
                            </div>
                            <div className="pt-4 border-t border-border">
                              <p className="text-sm text-muted-foreground">Business Impact:</p>
                              <p className="font-semibold text-foreground">{study.metrics.impact}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Button variant="outline" className="w-full mt-4 group">
                        <TestTube className="mr-2 h-4 w-4" />
                        View Full Research Report
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Case Studies */}
      <section id="results" className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Real Problems, Real Solutions, Real Results
            </h2>
            <p className="text-muted-foreground">
              Case studies showing how UX research identified problems and delivered measurable business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudyPreview.map((study, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all hover:shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{study.title}</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-destructive mb-1">Problem Identified:</p>
                      <p className="text-sm text-muted-foreground">{study.problem}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">Research-Based Solution:</p>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-success mb-1">Measured Result:</p>
                      <p className="text-sm text-success font-semibold">{study.result}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-primary hover:text-primary/80 transition-colors mt-4 pt-4 border-t border-border">
                    <span className="text-sm font-medium">Read Full Case Study</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Research Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Why User Research Is Your Secret Weapon
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Reduce Risk</h3>
                <p className="text-sm text-muted-foreground">
                  Validate ideas before expensive development cycles
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Faster Solutions</h3>
                <p className="text-sm text-muted-foreground">
                  Skip guessing and get to the right solution quickly
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-coral" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Measurable ROI</h3>
                <p className="text-sm text-muted-foreground">
                  Track the business impact of every design decision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Solve Your User Problems?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's start with a free UX audit to identify what's causing users to struggle with your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4" />
                Get Free UX Audit
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Research Call
              </Button>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              Free 30-minute consultation • No commitment required • Actionable insights guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Margery Funes • UX Researcher & Problem Solver
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Case Studies
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Research Blog
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AltHome;