import { motion } from "framer-motion";
import { CaseStudySummaryCard } from "./CaseStudySummaryCard";
import { CaseStudyResearchPanel } from "./CaseStudyResearchPanel";
import { caseStudiesData } from "@/data/caseStudies";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";

interface ProcessStoryGridProps {
  className?: string;
  limit?: number;
  featuredId?: number;
}

export const ProcessStoryGrid = ({ className, limit, featuredId }: ProcessStoryGridProps) => {
  // Filter to only show case studies with research processes
  const researchCaseStudies = caseStudiesData.filter(
    study => study.researchProcess && study.researchProcess.length > 0
  );

  // Sort: featured first (if specified), then prioritize military/DoD work, then by ID
  const sortedStudies = [...researchCaseStudies].sort((a, b) => {
    // Featured study goes first
    if (featuredId) {
      if (a.id === featuredId) return -1;
      if (b.id === featuredId) return 1;
    }
    
    // Prioritize military/DoD case studies (IDs 1-5)
    const aMilitary = a.id <= 5;
    const bMilitary = b.id <= 5;
    
    if (aMilitary && !bMilitary) return -1;
    if (!aMilitary && bMilitary) return 1;
    
    // Otherwise sort by ID
    return a.id - b.id;
  });

  // Apply limit if specified
  const displayedStudies = limit ? sortedStudies.slice(0, limit) : sortedStudies;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [expandedStudyId, setExpandedStudyId] = useState<number | null>(null);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
      // Close panel when changing slides
      setExpandedStudyId(null);
    });
  }, [api]);

  return (
    <div className={className}>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {displayedStudies.map((caseStudy, index) => {
            const isFeatured = featuredId ? caseStudy.id === featuredId : index === 0;
            
            return (
              <CarouselItem key={caseStudy.id}>
                <CaseStudySummaryCard 
                  caseStudy={caseStudy} 
                  featured={isFeatured}
                  onExpandClick={() => {
                    if (expandedStudyId === caseStudy.id) {
                      setExpandedStudyId(null);
                    } else {
                      setExpandedStudyId(caseStudy.id);
                    }
                  }}
                  isExpanded={expandedStudyId === caseStudy.id}
                  className="h-full"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12 h-12 w-12" />
          <CarouselNext className="-right-12 h-12 w-12" />
        </div>
      </Carousel>

      {/* Research Detail Panel - Expands below carousel */}
      {expandedStudyId && (
        <CaseStudyResearchPanel
          caseStudy={displayedStudies.find(s => s.id === expandedStudyId)!}
          isOpen={true}
          onClose={() => setExpandedStudyId(null)}
        />
      )}

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              current === index 
                ? "bg-primary w-8" 
                : "bg-border hover:bg-border/80 w-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={current === index ? "true" : "false"}
          />
        ))}
      </div>

      {/* Show "View All Case Studies" button if limited */}
      {limit && displayedStudies.length < researchCaseStudies.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a 
            href="/case-studies" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
          >
            View All Case Studies
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      )}
    </div>
  );
};
