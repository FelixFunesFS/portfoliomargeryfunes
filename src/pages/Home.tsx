import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OptimizedHero from '@/components/OptimizedHero';
import InteractiveJourney from '@/components/InteractiveJourney';
import OptimizedCaseStudySummary from '@/components/OptimizedCaseStudySummary';
import About from '@/components/About';
import MilitaryExperience from '@/components/MilitaryExperience';
import Contact from '@/components/Contact';

const Home = () => {
  useEffect(() => {
    document.title = "Margery Funes | Military-Trained Systems Analyst & UX Researcher";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <OptimizedHero />
      <About />
      <MilitaryExperience />
      <InteractiveJourney />
      <OptimizedCaseStudySummary />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;