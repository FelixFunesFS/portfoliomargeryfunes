import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Users, GitBranch, Zap, TrendingUp, Quote, Lightbulb, CheckCircle2, RefreshCw, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PersonaGallery } from "@/components/PersonaGallery";
import { UserFlowStepper } from "@/components/UserFlowStepper";
import { MermaidDiagram } from "@/components/MermaidDiagram";
import { SystemTouchpointsMatrix } from "@/components/SystemTouchpointsMatrix";
import { AutomatedWorkflowsTimeline } from "@/components/AutomatedWorkflowsTimeline";
import { VideoShowcase } from "@/components/VideoShowcase";
import ResearchArtifactGallery from "@/components/ResearchArtifactGallery";
import { ResearchProcessTimeline } from "@/components/ResearchProcessTimeline";
import { caseStudy6 } from "@/data/caseStudies/caseStudy6";
import { cn } from "@/lib/utils";

const SoulTrainsCaseStudy = () => {
  const caseStudy = caseStudy6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Back Button */}
          <Link to="/case-studies">
            <Button variant="ghost" size="sm" className="mb-6 gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              Full Case Study
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl">
              {caseStudy.projectGoal}
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-4 pt-4">
              {caseStudy.personas && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {caseStudy.personas.length} User Personas
                  </span>
                </div>
              )}
              {caseStudy.userFlows && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/30">
                  <GitBranch className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {caseStudy.userFlows.length} User Flows
                  </span>
                </div>
              )}
              {caseStudy.automatedWorkflows && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  <span className="font-semibold text-amber-600 dark:text-amber-400">
                    {caseStudy.automatedWorkflows.length} Automated Workflows
                  </span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            {caseStudy.liveDemo && (
              <div className="flex gap-4 pt-4">
                <a href={caseStudy.liveDemo.url} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    {caseStudy.liveDemo.label}
                  </Button>
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenge */}
            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader>
                <div className="flex items-center gap-2 text-destructive">
                  <div className="w-1 h-6 bg-destructive rounded-full" />
                  <CardTitle className="text-lg uppercase tracking-wider">The Challenge</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{caseStudy.problem}</p>
                {caseStudy.userVoice && (
                  <div className="relative p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                    <Quote className="absolute top-2 left-2 w-4 h-4 text-destructive/40" />
                    <p className="text-sm italic text-foreground/90 pl-5">"{caseStudy.userVoice}"</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="border-green-500/30 bg-green-500/5">
              <CardHeader>
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                  <div className="w-1 h-6 bg-green-600 dark:bg-green-400 rounded-full" />
                  <CardTitle className="text-lg uppercase tracking-wider">The Solution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{caseStudy.solution}</p>
                {caseStudy.stakeholderQuote && (
                  <div className="relative p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Quote className="absolute top-2 left-2 w-4 h-4 text-green-500/40" />
                    <p className="text-sm italic text-foreground/90 pl-5">"{caseStudy.stakeholderQuote}"</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Key Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {caseStudy.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-green-500/10 border border-green-500/20 text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* User Personas */}
      {caseStudy.personas && caseStudy.personas.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
                User Research
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who We Designed For
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                5 distinct personas representing the diverse user base of Charleston's catering market
              </p>
            </motion.div>

            <PersonaGallery personas={caseStudy.personas} />
          </div>
        </section>
      )}

      {/* User Flows */}
      {caseStudy.userFlows && caseStudy.userFlows.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30">
                User Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                User Journeys
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Interactive step-by-step visualization of {caseStudy.userFlows.length} key user flows
              </p>
            </motion.div>

            <UserFlowStepper flows={caseStudy.userFlows} />
          </div>
        </section>
      )}

      {/* System Architecture */}
      {caseStudy.architecture && caseStudy.architecture.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                Technical Design
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                System Architecture
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Visual documentation of the multi-user platform architecture
              </p>
            </motion.div>

            <div className="space-y-8">
              {caseStudy.architecture.map((diagram, index) => (
                <MermaidDiagram
                  key={index}
                  code={diagram.mermaidCode}
                  title={diagram.title}
                  description={diagram.description}
                  diagramType={diagram.diagramType}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* System Touchpoints */}
      {caseStudy.systemTouchpoints && caseStudy.systemTouchpoints.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/30">
                Digital Ecosystem
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                System Touchpoints
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {caseStudy.systemTouchpoints.length} digital touchpoints across multiple channels
              </p>
            </motion.div>

            <SystemTouchpointsMatrix touchpoints={caseStudy.systemTouchpoints} />
          </div>
        </section>
      )}

      {/* Automated Workflows */}
      {caseStudy.automatedWorkflows && caseStudy.automatedWorkflows.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
                Automation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Automated Workflows
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {caseStudy.automatedWorkflows.length} system-triggered communications ensuring seamless operations
              </p>
            </motion.div>

            <AutomatedWorkflowsTimeline workflows={caseStudy.automatedWorkflows} />
          </div>
        </section>
      )}

      {/* Research Process */}
      {caseStudy.researchProcess && caseStudy.researchProcess.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-primary/10 text-primary border-primary/30">
                Methodology
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Research Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Systematic approach from discovery through launch and iteration
              </p>
            </motion.div>

            <ResearchProcessTimeline phases={caseStudy.researchProcess} />
          </div>
        </section>
      )}

      {/* Research Artifacts */}
      {caseStudy.artifacts && caseStudy.artifacts.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30">
                Deliverables
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Research Artifacts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {caseStudy.artifacts.length}+ documented research outputs and design deliverables
              </p>
            </motion.div>

            <ResearchArtifactGallery artifacts={caseStudy.artifacts} />
          </div>
        </section>
      )}

      {/* Reflection & Growth */}
      {caseStudy.reflection && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge variant="outline" className="mb-4 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30">
                Growth Mindset
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Reflection & Lessons Learned
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* What Worked Well */}
                {caseStudy.reflection.whatWorkedWell && caseStudy.reflection.whatWorkedWell.length > 0 && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-5 h-5" />
                        <CardTitle className="text-base uppercase tracking-wide">What Worked Well</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 pl-6 text-sm text-muted-foreground">
                        {caseStudy.reflection.whatWorkedWell.map((item, index) => (
                          <li key={index} className="list-disc">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}

                {/* Would Do Differently */}
                {caseStudy.reflection.wouldDoDifferently && caseStudy.reflection.wouldDoDifferently.length > 0 && (
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                        <RefreshCw className="w-5 h-5" />
                        <CardTitle className="text-base uppercase tracking-wide">Future Optimizations</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 pl-6 text-sm text-muted-foreground">
                        {caseStudy.reflection.wouldDoDifferently.map((item, index) => (
                          <li key={index} className="list-disc">{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Right Column - Key Lesson */}
              <Card className="bg-primary/5 border-primary/30">
                <CardHeader>
                  <div className="flex items-center gap-2 text-primary">
                    <Lightbulb className="w-5 h-5" />
                    <CardTitle className="text-base uppercase tracking-wide">Key Lesson</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-foreground leading-relaxed">
                    {caseStudy.reflection.lessonsLearned}
                  </p>
                  {caseStudy.reflection.potentialImpact && (
                    <div className="mt-6 pt-6 border-t border-primary/20">
                      <h4 className="text-sm font-semibold text-primary mb-2">Potential Impact</h4>
                      <p className="text-sm text-muted-foreground">
                        {caseStudy.reflection.potentialImpact}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Video Walkthroughs Section */}
      {caseStudy.videos && caseStudy.videos.length > 0 && (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <Video className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <Badge variant="outline" className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30">
                  Video Demos
                </Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Video Walkthroughs
              </h2>
              <p className="text-muted-foreground mt-2">
                See the application in action with these recorded demonstrations
              </p>
            </motion.div>

            <VideoShowcase videos={caseStudy.videos.filter(v => v.url)} />
            
            {/* Show placeholder if no videos have URLs yet */}
            {caseStudy.videos.every(v => !v.url) && (
              <VideoShowcase videos={[]} />
            )}
          </div>
        </section>
      )}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground">
              I bring the same systematic research approach and attention to detail to every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {caseStudy.liveDemo && (
                <a href={caseStudy.liveDemo.url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Live Application
                  </Button>
                </a>
              )}
              <Link to="/case-studies">
                <Button size="lg" variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoulTrainsCaseStudy;
