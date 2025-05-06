
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CaseStudy } from '@/types/caseStudy';

interface CaseStudyCardProps {
  study: CaseStudy;
  onClick: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="overflow-hidden h-full cursor-pointer glass border-none hover:shadow-lg transition-shadow"
        onClick={onClick}
      >
        <div className="h-56 bg-purple/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple/40 to-blue/40 flex items-center justify-center">
            <span className="text-6xl text-white font-bold opacity-30">
              {study.id}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-charcoal/80 to-transparent">
            <h3 className="text-xl font-semibold text-white line-clamp-2">{study.title}</h3>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tools.slice(0, 3).map((tool, index) => (
              <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
                {tool}
              </Badge>
            ))}
            {study.tools.length > 3 && (
              <Badge variant="outline">+{study.tools.length - 3}</Badge>
            )}
          </div>
          
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {study.problem}
          </p>
          
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-sm font-medium text-purple">View Case Study</span>
            <ArrowRight size={16} className="text-purple" />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CaseStudyCard;
