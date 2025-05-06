
import React from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  caseStudyUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  caseStudyUrl,
}) => {
  return (
    <Card className="overflow-hidden hover:-translate-y-2 transition-transform duration-300 glass border-none">
      <div className="relative overflow-hidden group h-60 bg-charcoal rounded-t-xl">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full hover:bg-purple hover:text-white transition-colors"
              aria-label="View live project"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {caseStudyUrl && (
            <a 
              href={caseStudyUrl}
              className="bg-white p-3 rounded-full hover:bg-purple hover:text-white transition-colors"
              aria-label="View case study"
            >
              <Eye size={20} />
            </a>
          )}
        </div>
      </div>
      
      <CardContent className="pt-6 pb-3">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
