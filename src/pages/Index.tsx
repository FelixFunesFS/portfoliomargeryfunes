
import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import OptimizedHero from '@/components/OptimizedHero';
import MilitaryExperience from '@/components/MilitaryExperience';
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
    <div className="min-h-screen">
      <Navbar />
      <OptimizedHero />
      <MilitaryExperience />
      <OptimizedCaseStudySummary />
      <Suspense fallback={
        <section className="section">
          <div className="container-custom">
            <Skeleton className="h-8 w-64 mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }, (_, i) => (
                <Skeleton key={i} className="h-64 w-full" />
              ))}
            </div>
          </div>
        </section>
      }>
        <Projects />
      </Suspense>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
