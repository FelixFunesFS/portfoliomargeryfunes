
import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import OptimizedHero from '@/components/OptimizedHero';
import MilitaryExperience from '@/components/MilitaryExperience';
import Journey from '@/components/Journey';
import DesignProcess from '@/components/DesignProcess';
import OptimizedCaseStudySummary from '@/components/OptimizedCaseStudySummary';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load less critical components for better performance
const Projects = lazy(() => import('@/components/Projects'));

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Margery Funes | UX/UI Designer & Developer";
  }, []);

  return (
    <div className="min-h-screen" style={{ scrollBehavior: 'auto' }}>
      <div style={{ animation: 'none' }}>
        <Navbar />
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <OptimizedHero />
        </div>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <MilitaryExperience />
        </div>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <Journey />
        </div>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <DesignProcess />
        </div>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <OptimizedCaseStudySummary />
        </div>
        <Suspense fallback={
          <section className="section">
            <div className="container-custom">
              <div className="h-8 w-64 mx-auto mb-8 bg-muted rounded" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }, (_, i) => (
                  <div key={i} className="h-64 w-full bg-muted rounded" />
                ))}
              </div>
            </div>
          </section>
        }>
          <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
            <Projects />
          </div>
        </Suspense>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <About />
        </div>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <Contact />
        </div>
        <div style={{ animation: 'none', transform: 'none', opacity: '1' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
