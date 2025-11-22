import React from 'react';
import { motion, useScroll } from 'framer-motion';
import HolographicPortal from '@/components/research-hub/HolographicPortal';
import MissionDossierGrid from '@/components/research-hub/MissionDossierGrid';
import SkillsConstellation from '@/components/research-hub/SkillsConstellation';
import ArsenalTimeline from '@/components/research-hub/ArsenalTimeline';
import JourneyWormhole from '@/components/research-hub/JourneyWormhole';
import CommandNavigation from '@/components/research-hub/CommandNavigation';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';

const ResearchHub = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <ScrollProgressIndicator />
      <CommandNavigation scrollProgress={scrollYProgress} />
      
      {/* Zone 1: Holographic Portal */}
      <section id="portal" className="relative">
        <HolographicPortal />
      </section>

      {/* Zone 2: Mission Dossier Grid */}
      <section id="missions" className="relative">
        <MissionDossierGrid />
      </section>

      {/* Zone 3: Skills Constellation */}
      <section id="constellation" className="relative">
        <SkillsConstellation />
      </section>

      {/* Zone 4: Arsenal Timeline */}
      <section id="arsenal" className="relative">
        <ArsenalTimeline />
      </section>

      {/* Zone 5: Journey Wormhole */}
      <section id="journey" className="relative">
        <JourneyWormhole />
      </section>
    </div>
  );
};

export default ResearchHub;
