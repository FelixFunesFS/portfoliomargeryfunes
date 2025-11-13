import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

// Import all unused components
import OptimizedHero from '@/components/OptimizedHero';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import FeaturedCapabilitiesCarousel from '@/components/FeaturedCapabilitiesCarousel';
import CaseStudyCard from '@/components/CaseStudyCard';
import CaseStudyDetails from '@/components/CaseStudyDetails';
import CaseStudySummary from '@/components/CaseStudySummary';
import OptimizedCaseStudySummary from '@/components/OptimizedCaseStudySummary';
import ProjectCard from '@/components/ProjectCard';
import AnimatedCanvas from '@/components/AnimatedCanvas';
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedMetric from '@/components/AnimatedMetric';
import ProfessionalImpact from '@/components/ProfessionalImpact';
import ProfessionalImpactMetrics from '@/components/ProfessionalImpactMetrics';
import MilitaryExperience from '@/components/MilitaryExperience';
import ResearchImpactGlance from '@/components/ResearchImpactGlance';
import ResearchConsultationCTA from '@/components/ResearchConsultationCTA';

// Import sample data
import { caseStudiesData } from '@/data/caseStudies';

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState('hero');

  // Mock data for components
  const mockProject = {
    title: "Sample Project",
    description: "A comprehensive user research initiative that transformed military logistics operations through data-driven insights.",
    image: "/lovable-uploads/69ba1007-5e56-40a3-bd19-02ba0bca7d95.png",
    tags: ["UX Research", "Data Analysis", "Process Optimization"],
    link: "#"
  };

  const sampleCaseStudy = caseStudiesData[0];

  const categories = [
    { id: 'hero', label: 'Hero Sections', count: 2 },
    { id: 'sections', label: 'Full Sections', count: 4 },
    { id: 'cards', label: 'Cards & Details', count: 5 },
    { id: 'animations', label: 'Animations', count: 3 },
    { id: 'metrics', label: 'Metrics & Impact', count: 5 }
  ];

  const ComponentCard = ({ 
    name, 
    type, 
    description, 
    children, 
    filePath,
    props 
  }: { 
    name: string; 
    type: string; 
    description: string; 
    children: React.ReactNode;
    filePath: string;
    props?: string;
  }) => (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{name}</CardTitle>
          <Badge variant="secondary">{type}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
        <div className="text-xs text-muted-foreground mt-2">
          <code className="bg-muted px-2 py-1 rounded">{filePath}</code>
        </div>
        {props && (
          <div className="text-xs text-muted-foreground mt-1">
            <span className="font-medium">Props: </span>{props}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="border border-border rounded-lg p-4 bg-muted/20">
          {children}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container-custom pt-24 pb-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Component Showcase
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive library of all unused components in the portfolio. 
            Explore 19 components organized by category and functionality.
          </p>
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {categories.map((cat) => (
            <Card key={cat.id} className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">{cat.count}</div>
                <div className="text-sm text-muted-foreground">{cat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Tabbed Component Display */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Hero Sections Tab */}
          <TabsContent value="hero" className="space-y-8">
            <ComponentCard
              name="OptimizedHero"
              type="Hero Section"
              description="Static hero section with military context metrics and professional introduction"
              filePath="src/components/OptimizedHero.tsx"
              props="None required"
            >
              <OptimizedHero />
            </ComponentCard>

            <ComponentCard
              name="Hero"
              type="Hero Section"
              description="Animated hero with particle canvas background and dynamic typing effect"
              filePath="src/components/Hero.tsx"
              props="None required"
            >
              <Hero />
            </ComponentCard>
          </TabsContent>

          {/* Full Sections Tab */}
          <TabsContent value="sections" className="space-y-8">
            <ComponentCard
              name="About"
              type="Full Section"
              description="Mission statement and capability cards showcasing expertise areas"
              filePath="src/components/About.tsx"
              props="None required"
            >
              <About />
            </ComponentCard>

            <ComponentCard
              name="Contact"
              type="Full Section"
              description="Contact form with validation and direct communication options"
              filePath="src/components/Contact.tsx"
              props="None required"
            >
              <Contact />
            </ComponentCard>

            <ComponentCard
              name="Projects"
              type="Full Section"
              description="Filterable project grid with category-based navigation"
              filePath="src/components/Projects.tsx"
              props="None required"
            >
              <Projects />
            </ComponentCard>

            <ComponentCard
              name="FeaturedCapabilitiesCarousel"
              type="Carousel Section"
              description="Interactive carousel showcasing key professional capabilities"
              filePath="src/components/FeaturedCapabilitiesCarousel.tsx"
              props="None required"
            >
              <FeaturedCapabilitiesCarousel />
            </ComponentCard>
          </TabsContent>

          {/* Cards & Details Tab */}
          <TabsContent value="cards" className="space-y-8">
            <ComponentCard
              name="CaseStudyCard"
              type="Card Component"
              description="Individual case study card with hover effects and link"
              filePath="src/components/CaseStudyCard.tsx"
              props="study: CaseStudy, onClick: () => void"
            >
              <CaseStudyCard study={sampleCaseStudy} onClick={() => {}} />
            </ComponentCard>

            <ComponentCard
              name="CaseStudyDetails"
              type="Detail View"
              description="Comprehensive case study detail page with methodology and outcomes"
              filePath="src/components/CaseStudyDetails.tsx"
              props="study: CaseStudy, onClose: () => void"
            >
              <div className="max-h-96 overflow-auto">
                <CaseStudyDetails study={sampleCaseStudy} onClose={() => {}} />
              </div>
            </ComponentCard>

            <ComponentCard
              name="CaseStudySummary"
              type="Carousel Component"
              description="Case study carousel with navigation and detailed cards"
              filePath="src/components/CaseStudySummary.tsx"
              props="None required"
            >
              <CaseStudySummary />
            </ComponentCard>

            <ComponentCard
              name="OptimizedCaseStudySummary"
              type="Carousel Component"
              description="Performance-optimized version of case study carousel"
              filePath="src/components/OptimizedCaseStudySummary.tsx"
              props="None required"
            >
              <OptimizedCaseStudySummary />
            </ComponentCard>

            <ComponentCard
              name="ProjectCard"
              type="Card Component"
              description="Project showcase card with image, tags, and description"
              filePath="src/components/ProjectCard.tsx"
              props="title, description, image, tags, link"
            >
              <ProjectCard {...mockProject} />
            </ComponentCard>
          </TabsContent>

          {/* Animations Tab */}
          <TabsContent value="animations" className="space-y-8">
            <ComponentCard
              name="AnimatedCanvas"
              type="Background Animation"
              description="Particle system background with interactive mouse effects"
              filePath="src/components/AnimatedCanvas.tsx"
              props="None required"
            >
              <div className="h-64 relative">
                <AnimatedCanvas />
              </div>
            </ComponentCard>

            <ComponentCard
              name="AnimatedCounter"
              type="Number Animation"
              description="Smooth number counter with intersection observer trigger"
              filePath="src/components/AnimatedCounter.tsx"
              props="end: number, duration?: number, suffix?: string"
            >
              <div className="text-center space-y-4">
                <div>
                  <div className="text-4xl font-bold text-primary">
                    <AnimatedCounter end={1250} duration={2000} />
                  </div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">
                    <AnimatedCounter end={98} duration={1500} suffix="%" />
                  </div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>
            </ComponentCard>

            <ComponentCard
              name="AnimatedMetric"
              type="Progress Animation"
              description="Animated progress bar with label and value display"
              filePath="src/components/AnimatedMetric.tsx"
              props="label: string, value: string, percentage: number, delay?: number"
            >
              <div className="space-y-4">
                <AnimatedMetric 
                  label="UX Research" 
                  value="Expert Level" 
                  percentage={95} 
                />
                <AnimatedMetric 
                  label="Data Analysis" 
                  value="Advanced" 
                  percentage={88} 
                  delay={200}
                />
                <AnimatedMetric 
                  label="Frontend Development" 
                  value="Proficient" 
                  percentage={82} 
                  delay={400}
                />
              </div>
            </ComponentCard>
          </TabsContent>

          {/* Metrics & Impact Tab */}
          <TabsContent value="metrics" className="space-y-8">
            <ComponentCard
              name="ProfessionalImpact"
              type="Timeline Section"
              description="Career progression timeline with key achievements"
              filePath="src/components/ProfessionalImpact.tsx"
              props="None required"
            >
              <ProfessionalImpact />
            </ComponentCard>

            <ComponentCard
              name="ProfessionalImpactMetrics"
              type="Metrics Grid"
              description="Grid display of key professional impact metrics"
              filePath="src/components/ProfessionalImpactMetrics.tsx"
              props="None required"
            >
              <ProfessionalImpactMetrics />
            </ComponentCard>

            <ComponentCard
              name="MilitaryExperience"
              type="Experience Section"
              description="Military background and achievements showcase"
              filePath="src/components/MilitaryExperience.tsx"
              props="None required"
            >
              <MilitaryExperience />
            </ComponentCard>

            <ComponentCard
              name="ResearchImpactGlance"
              type="Stats Section"
              description="Quick overview of research impact with icon metrics"
              filePath="src/components/ResearchImpactGlance.tsx"
              props="None required"
            >
              <ResearchImpactGlance />
            </ComponentCard>

            <ComponentCard
              name="ResearchConsultationCTA"
              type="CTA Component"
              description="Call-to-action card for research consultation services"
              filePath="src/components/ResearchConsultationCTA.tsx"
              props="None required"
            >
              <ResearchConsultationCTA />
            </ComponentCard>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ComponentShowcase;