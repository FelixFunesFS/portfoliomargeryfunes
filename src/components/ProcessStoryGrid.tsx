import { motion } from "framer-motion";
import { ProcessStoryCard } from "./ProcessStoryCard";
import { caseStudiesData } from "@/data/caseStudies";
import { CaseStudy } from "@/types/caseStudy";

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

  return (
    <div className={className}>
      <div className="space-y-8">
        {displayedStudies.map((caseStudy, index) => {
          const isFeatured = featuredId ? caseStudy.id === featuredId : index === 0;
          
          return (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProcessStoryCard 
                caseStudy={caseStudy} 
                featured={isFeatured}
              />
            </motion.div>
          );
        })}
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
