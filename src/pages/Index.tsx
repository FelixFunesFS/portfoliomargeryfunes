
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CaseStudySummary from '@/components/CaseStudySummary';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Margery Funes | UX/UI Designer & Developer";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <CaseStudySummary />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
