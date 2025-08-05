import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Download, FileText, Image, BarChart3 } from 'lucide-react';

interface ArtifactPreviewProps {
  storyId: number;
  artifacts: string[];
  onViewArtifact: (artifact: string) => void;
}

const ResearchArtifactPreview: React.FC<ArtifactPreviewProps> = ({ 
  storyId, 
  artifacts, 
  onViewArtifact 
}) => {
  const getArtifactIcon = (artifact: string) => {
    if (artifact.toLowerCase().includes('journey') || artifact.toLowerCase().includes('map')) {
      return Image;
    }
    if (artifact.toLowerCase().includes('persona') || artifact.toLowerCase().includes('documentation')) {
      return FileText;
    }
    if (artifact.toLowerCase().includes('test') || artifact.toLowerCase().includes('analysis')) {
      return BarChart3;
    }
    return FileText;
  };

  const getPreviewImage = (storyId: number) => {
    // Placeholder for artifact previews - in real implementation, these would be actual artifact images
    const previews = {
      1: "/api/placeholder/300/200", // Engine tracking journey map
      5: "/api/placeholder/300/200", // Automation analysis charts
      3: "/api/placeholder/300/200", // Process flow diagrams
      4: "/api/placeholder/300/200"  // Information architecture
    };
    return previews[storyId] || "/api/placeholder/300/200";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-4"
    >
      <Badge variant="outline" className="mb-3 text-xs">
        Research Artifacts Preview
      </Badge>
      
      <Card className="border border-primary/20 bg-primary/5">
        <CardContent className="p-3">
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="aspect-video bg-muted rounded overflow-hidden">
              <img 
                src={getPreviewImage(storyId)} 
                alt="Research artifact preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1">
              {artifacts.slice(0, 3).map((artifact, index) => {
                const IconComponent = getArtifactIcon(artifact);
                return (
                  <button
                    key={index}
                    onClick={() => onViewArtifact(artifact)}
                    className="flex items-center gap-2 p-1.5 hover:bg-primary/10 rounded text-left w-full text-xs"
                  >
                    <IconComponent className="w-3 h-3 text-primary" />
                    <span className="truncate">{artifact}</span>
                  </button>
                );
              })}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 text-xs"
              onClick={() => onViewArtifact('all')}
            >
              <Eye className="w-3 h-3 mr-1" />
              View All
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs"
            >
              <Download className="w-3 h-3" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResearchArtifactPreview;