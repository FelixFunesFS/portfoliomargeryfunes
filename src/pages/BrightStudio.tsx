import { useEffect } from 'react';
import AnimatedHero from '@/components/bright-studio/AnimatedHero';
import SkillsMarquee from '@/components/bright-studio/SkillsMarquee';
import ProcessCards from '@/components/bright-studio/ProcessCards';
import VisualCaseStudies from '@/components/bright-studio/VisualCaseStudies';
import SkillsConstellation from '@/components/bright-studio/SkillsConstellation';
import ImpactCounters from '@/components/bright-studio/ImpactCounters';
import JourneyTimeline from '@/components/bright-studio/JourneyTimeline';
import BrightCTA from '@/components/bright-studio/BrightCTA';
import ScrollProgress from '@/components/bright-studio/ScrollProgress';

const BrightStudio = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <ScrollProgress />
      
      <main>
        <AnimatedHero />
        <SkillsMarquee />
        <ProcessCards />
        <VisualCaseStudies />
        <SkillsConstellation />
        <ImpactCounters />
        <JourneyTimeline />
        <BrightCTA />
      </main>
    </div>
  );
};

export default BrightStudio;
