import { useEffect } from 'react';
import EnhancedHero from '@/components/ux-showcase/EnhancedHero';
import DualMarquee from '@/components/ux-showcase/DualMarquee';
import ResearchProcess from '@/components/ux-showcase/ResearchProcess';
import VisualCaseStudiesGrid from '@/components/ux-showcase/VisualCaseStudiesGrid';
import InteractiveSkillsMap from '@/components/ux-showcase/InteractiveSkillsMap';
import ResearchCredentials from '@/components/ux-showcase/ResearchCredentials';
import AnimatedMetrics from '@/components/ux-showcase/AnimatedMetrics';
import CareerJourney from '@/components/ux-showcase/CareerJourney';
import FeaturedProjects from '@/components/ux-showcase/FeaturedProjects';
import CTAWithProof from '@/components/ux-showcase/CTAWithProof';
import ScrollProgress from '@/components/bright-studio/ScrollProgress';

const UXShowcase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <ScrollProgress />
      
      <main>
        <EnhancedHero />
        <DualMarquee />
        <ResearchProcess />
        <VisualCaseStudiesGrid />
        <InteractiveSkillsMap />
        <ResearchCredentials />
        <AnimatedMetrics />
        <CareerJourney />
        <FeaturedProjects />
        <CTAWithProof />
      </main>
    </div>
  );
};

export default UXShowcase;
