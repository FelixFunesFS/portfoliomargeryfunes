import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import DeckNavigation from '@/components/deck/DeckNavigation';
import TitleSlide from '@/components/deck/slides/TitleSlide';
import ImpactSlide from '@/components/deck/slides/ImpactSlide';
import CompetenciesSlide from '@/components/deck/slides/CompetenciesSlide';
import ResearchSkillsSlide from '@/components/deck/slides/ResearchSkillsSlide';
import CaseStudySlide from '@/components/deck/slides/CaseStudySlide';
import WebPortfolioSlide from '@/components/deck/slides/WebPortfolioSlide';
import TechStackSlide from '@/components/deck/slides/TechStackSlide';
import CertificationsSlide from '@/components/deck/slides/CertificationsSlide';
import ClosingSlide from '@/components/deck/slides/ClosingSlide';

const slides = [
  { id: 'title', component: <TitleSlide /> },
  { id: 'impact', component: <ImpactSlide /> },
  { id: 'competencies', component: <CompetenciesSlide /> },
  { id: 'skills', component: <ResearchSkillsSlide /> },
  {
    id: 'cs-boeing',
    component: (
      <CaseStudySlide
        label="Case Study"
        title="UX Optimization for Boeing F117 Engine Logistics Tracking System"
        problem="Manual tracking systems were inefficient and outdated, causing delays and inconsistent reporting across global bases."
        solution="Designed a streamlined UX system combining SharePoint CMS and Tableau dashboards, connected to real-time SQL data."
        metrics={[
          { label: 'Faster Reporting', value: '45%' },
          { label: 'Manual Steps Reduced', value: '65%' },
          { label: 'Analysts Shadowed', value: '12' },
        ]}
        quote="This system transformed our global operations. We finally have real-time visibility into our most critical assets."
        quoteAttribution="Operations Director, Boeing Defense"
        accentColor="hsl(215,85%,55%)"
      />
    ),
  },
  {
    id: 'cs-automation',
    component: (
      <CaseStudySlide
        label="Case Study"
        title="Data Entry Automation for DOD/Boeing GUI Systems"
        problem="Users manually entered identical data across 50+ screens daily (~2.5 hours/day), leading to frequent errors and fatigue."
        solution="Built a VBA tool that populated GUI screens in under 30 seconds using SQL data and HTML mapping."
        metrics={[
          { label: 'Time Reduction', value: '80%' },
          { label: 'Error Reduction', value: '90%' },
          { label: 'Hours Saved/Year', value: '26,000' },
        ]}
        quote="The ROI was immediate. Our analysts went from data entry zombies to strategic thinkers overnight."
        quoteAttribution="Engineering Manager, Boeing"
        accentColor="hsl(190,75%,45%)"
      />
    ),
  },
  {
    id: 'cs-soultrain',
    component: (
      <CaseStudySlide
        label="Case Study"
        title="Event Management App for Soul Train's Eatery"
        problem="Event requests tracked manually via phone, text, email, and social media — causing missed leads, forgotten details, and double-booked dates."
        solution="Developed an app with intake forms, dashboards, and event tracking to centralize operations."
        metrics={[
          { label: 'Faster Response', value: '83%' },
          { label: 'Lead Conversion', value: '+40%' },
          { label: 'Double-Booking', value: '0' },
        ]}
        quote="We went from losing 3-4 leads a week to capturing every single one. The app paid for itself in the first month."
        quoteAttribution="Owner, Soul Train's Eatery"
        accentColor="hsl(25,90%,55%)"
        liveLink="https://train-catering-creations.lovable.app"
      />
    ),
  },
  { id: 'web', component: <WebPortfolioSlide /> },
  { id: 'tech', component: <TechStackSlide /> },
  { id: 'certs', component: <CertificationsSlide /> },
  { id: 'close', component: <ClosingSlide /> },
];

export default function CapabilitiesDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    document.title = 'Capabilities Deck | Margery Funes';
  }, []);

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(Math.max(0, Math.min(slides.length - 1, index)));
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Touch swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    setTouchStart(null);
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden bg-[hsl(217,91%,4%)] select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 60 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="w-full h-full"
        >
          {slides[current].component}
        </motion.div>
      </AnimatePresence>

      <DeckNavigation
        currentSlide={current}
        totalSlides={slides.length}
        onNext={next}
        onPrev={prev}
        onGoTo={goTo}
      />
    </div>
  );
}
