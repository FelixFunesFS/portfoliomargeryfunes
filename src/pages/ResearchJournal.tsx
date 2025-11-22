import React from 'react';
import JournalNavigation from '@/components/journal/JournalNavigation';
import ResearchAbstract from '@/components/journal/ResearchAbstract';
import ResearchQuestion from '@/components/journal/ResearchQuestion';
import MethodologyMap from '@/components/journal/MethodologyMap';
import CaseStudyDossier from '@/components/journal/CaseStudyDossier';
import ResearchFindings from '@/components/journal/ResearchFindings';
import EvidenceGallery from '@/components/journal/EvidenceGallery';
import DiscussionReflection from '@/components/journal/DiscussionReflection';
import ReferencesContact from '@/components/journal/ReferencesContact';

const ResearchJournal = () => {
  return (
    <div className="min-h-screen bg-background">
      <JournalNavigation />
      
      <main id="main-content" className="pt-16">
        <ResearchAbstract />
        <ResearchQuestion />
        <MethodologyMap />
        <CaseStudyDossier />
        <ResearchFindings />
        <EvidenceGallery />
        <DiscussionReflection />
        <ReferencesContact />
      </main>
    </div>
  );
};

export default ResearchJournal;
