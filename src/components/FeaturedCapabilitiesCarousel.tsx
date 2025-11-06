import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CapabilityCluster {
  name: string;
  description: string;
  skills: string[];
  projectExample: string;
  outcome: string;
  metric: string;
  caseStudyId?: number;
  icon: string;
}

const capabilities: CapabilityCluster[] = [
  {
    name: "Automation Arsenal",
    description: "End-to-end automation solutions that eliminate manual processes",
    skills: ["VBA", "JavaScript", "SQL", "HTML Parsing"],
    projectExample: "DOD/Boeing GUI Data Entry Automation",
    outcome: "Automated 50+ screen daily data entry from 2.5 hours to 30 seconds",
    metric: "26,000 hours saved annually",
    caseStudyId: 5,
    icon: "⚡"
  },
  {
    name: "Systems Architecture",
    description: "Large-scale system design and implementation across global operations",
    skills: ["SharePoint", "Power Automate", "SQL", "CMS Design"],
    projectExample: "23-Base SharePoint Workspace System",
    outcome: "Unified document management and task visibility across global bases",
    metric: "90% faster document finding",
    caseStudyId: 4,
    icon: "🏗️"
  },
  {
    name: "UX Research & Strategy",
    description: "Evidence-based design through systematic user research",
    skills: ["User Interviews", "Empathy Mapping", "Journey Mapping", "Usability Testing"],
    projectExample: "F117 Engine Logistics Tracking System",
    outcome: "Modernized tracking process with streamlined UX and real-time dashboards",
    metric: "45% faster reporting",
    caseStudyId: 1,
    icon: "🔍"
  },
  {
    name: "Data Intelligence",
    description: "Transform complex data into actionable insights and automation",
    skills: ["SQL", "Tableau", "Excel VBA", "Data Visualization"],
    projectExample: "OQAR Data Extraction Automation",
    outcome: "Automated engine cycle data processing across 1200+ engines",
    metric: "$2M saved over 5 years",
    caseStudyId: 2,
    icon: "📊"
  },
  {
    name: "Rapid Prototyping",
    description: "Low-code solutions that deliver production-ready apps fast",
    skills: ["Lovable.dev", "Supabase", "React", "Figma"],
    projectExample: "Soul Train's Event Management App",
    outcome: "Centralized event tracking with intake forms and dashboards",
    metric: "83% faster response time",
    caseStudyId: 6,
    icon: "🚀"
  },
  {
    name: "Process Engineering",
    description: "Redesign workflows to eliminate inefficiency at scale",
    skills: ["C#", "JavaScript", "PowerPoint API", "Process Mapping"],
    projectExample: "Automated Weekly Engine Removal Slide Decks",
    outcome: "Auto-generated presentations for 23 global bases",
    metric: "98% faster process",
    caseStudyId: 3,
    icon: "⚙️"
  }
];

export default function FeaturedCapabilitiesCarousel() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Mission-Critical Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Skill Combinations That Deliver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven expertise clusters that solve complex problems and drive measurable impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {capabilities.map((capability, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur-sm h-full">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Icon & Name */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="text-4xl">{capability.icon}</div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {capability.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {capability.description}
                            </p>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {capability.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="secondary" 
                              className="text-xs bg-primary/10 text-primary border-primary/20"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Project Example */}
                        <div className="flex-1 space-y-3 mb-4">
                          <div className="p-3 rounded-lg bg-accent/30 border border-accent">
                            <p className="text-xs font-semibold text-muted-foreground mb-1">
                              PROJECT EXAMPLE
                            </p>
                            <p className="text-sm font-medium">
                              {capability.projectExample}
                            </p>
                          </div>

                          <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-xs font-semibold text-muted-foreground mb-1">
                              OUTCOME
                            </p>
                            <p className="text-sm mb-2">
                              {capability.outcome}
                            </p>
                            <div className="flex items-center gap-2">
                              <Zap className="w-4 h-4 text-primary" />
                              <span className="text-lg font-bold text-primary">
                                {capability.metric}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* CTA */}
                        {capability.caseStudyId && (
                          <Link to={`/case-studies#case-${capability.caseStudyId}`}>
                            <Button 
                              variant="outline" 
                              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                            >
                              View Case Study
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
