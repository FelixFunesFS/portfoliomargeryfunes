import React, { Suspense, lazy } from 'react';
import { motion, useScroll } from 'framer-motion';
import HolographicPortal from '@/components/research-hub/HolographicPortal';
import CommandNavigation from '@/components/research-hub/CommandNavigation';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ScanlineOverlay from '@/components/research-hub/ScanlineOverlay';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load zones for better performance
const MissionDossierGrid = lazy(() => import('@/components/research-hub/MissionDossierGrid'));
const SkillsConstellation = lazy(() => import('@/components/research-hub/SkillsConstellation'));
const ArsenalTimeline = lazy(() => import('@/components/research-hub/ArsenalTimeline'));
const JourneyWormhole = lazy(() => import('@/components/research-hub/JourneyWormhole'));

// Loading skeleton component
const ZoneSkeleton = () => (
  <div className="relative min-h-screen w-full py-20 flex items-center justify-center">
    <div className="container-custom px-6 space-y-8">
      <Skeleton className="h-12 w-64 mx-auto" />
      <Skeleton className="h-6 w-96 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-80 w-full" />
        ))}
      </div>
    </div>
  </div>
);

const ResearchHub = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden">
      <ScanlineOverlay />
      <ScrollProgressIndicator />
      <CommandNavigation scrollProgress={scrollYProgress} />
      
      {/* Zone 1: Holographic Portal */}
      <section id="portal" className="relative">
        <HolographicPortal />
      </section>

      {/* Zone 2: Mission Dossier Grid */}
      <section id="missions" className="relative">
        <Suspense fallback={<ZoneSkeleton />}>
          <MissionDossierGrid />
        </Suspense>
      </section>

      {/* Zone 3: Skills Constellation */}
      <section id="constellation" className="relative">
        <Suspense fallback={<ZoneSkeleton />}>
          <SkillsConstellation />
        </Suspense>
      </section>

      {/* Zone 4: Arsenal Timeline */}
      <section id="arsenal" className="relative">
        <Suspense fallback={<ZoneSkeleton />}>
          <ArsenalTimeline />
        </Suspense>
      </section>

      {/* Zone 5: Journey Wormhole */}
      <section id="journey" className="relative">
        <Suspense fallback={<ZoneSkeleton />}>
          <JourneyWormhole />
        </Suspense>
      </section>
    </div>
  );
};

export default ResearchHub;
