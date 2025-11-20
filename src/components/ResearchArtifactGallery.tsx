import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Users, 
  Layout, 
  Layers, 
  TestTube, 
  GitBranch, 
  FileText, 
  BarChart3,
  X,
  ZoomIn
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Artifact {
  type: 'journey-map' | 'persona' | 'wireframe' | 'prototype' | 'usability-test' | 'flow-diagram' | 'research-report' | 'analytics';
  title: string;
  description: string;
  image?: string;
  date?: string;
}

interface ResearchArtifactGalleryProps {
  artifacts: Artifact[];
}

const ResearchArtifactGallery: React.FC<ResearchArtifactGalleryProps> = ({ artifacts }) => {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [filterType, setFilterType] = useState<string>('all');

  const getArtifactIcon = (type: string) => {
    const iconMap = {
      'journey-map': MapPin,
      'persona': Users,
      'wireframe': Layout,
      'prototype': Layers,
      'usability-test': TestTube,
      'flow-diagram': GitBranch,
      'research-report': FileText,
      'analytics': BarChart3
    };
    const Icon = iconMap[type as keyof typeof iconMap] || FileText;
    return <Icon className="w-4 h-4" />;
  };

  const getArtifactColor = (type: string) => {
    const colorMap = {
      'journey-map': 'border-primary text-primary',
      'persona': 'border-accent text-accent',
      'wireframe': 'border-muted-foreground text-muted-foreground',
      'prototype': 'border-primary-glow text-primary-glow',
      'usability-test': 'border-success text-success',
      'flow-diagram': 'border-agile-primary text-agile-primary',
      'research-report': 'border-foreground text-foreground',
      'analytics': 'border-chart-1 text-chart-1'
    };
    return colorMap[type as keyof typeof colorMap] || 'border-foreground text-foreground';
  };

  const formatArtifactType = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const filteredArtifacts = filterType === 'all' 
    ? artifacts 
    : artifacts.filter(a => a.type === filterType);

  const uniqueTypes = Array.from(new Set(artifacts.map(a => a.type)));

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      {uniqueTypes.length > 1 && (
        <div className="flex flex-wrap gap-2">
          <Button
            variant={filterType === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilterType('all')}
            className="text-xs"
          >
            All Artifacts ({artifacts.length})
          </Button>
          {uniqueTypes.map((type) => (
            <Button
              key={type}
              variant={filterType === type ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterType(type)}
              className="text-xs"
            >
              {getArtifactIcon(type)}
              <span className="ml-1">{formatArtifactType(type)}</span>
            </Button>
          ))}
        </div>
      )}

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArtifacts.map((artifact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-muted hover:border-primary/50 overflow-hidden"
              onClick={() => setSelectedArtifact(artifact)}
            >
              {/* Image Preview */}
              {artifact.image && (
                <div className="relative h-40 overflow-hidden bg-muted">
                  <img 
                    src={artifact.image} 
                    alt={artifact.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-primary" />
                  </div>
                </div>
              )}

              <CardContent className="p-4 space-y-2">
                {/* Type Badge */}
                <Badge 
                  variant="outline" 
                  className={`${getArtifactColor(artifact.type)} text-xs`}
                >
                  {getArtifactIcon(artifact.type)}
                  <span className="ml-1">{formatArtifactType(artifact.type)}</span>
                </Badge>

                {/* Title */}
                <h4 className="font-semibold text-sm text-foreground line-clamp-2">
                  {artifact.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {artifact.description}
                </p>

                {/* Date */}
                {artifact.date && (
                  <p className="text-xs text-muted-foreground/70">
                    {artifact.date}
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedArtifact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedArtifact(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-card rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                onClick={() => setSelectedArtifact(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Image */}
              {selectedArtifact.image && (
                <div className="w-full h-96 bg-muted">
                  <img 
                    src={selectedArtifact.image} 
                    alt={selectedArtifact.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-4">
                <Badge 
                  variant="outline" 
                  className={`${getArtifactColor(selectedArtifact.type)}`}
                >
                  {getArtifactIcon(selectedArtifact.type)}
                  <span className="ml-1">{formatArtifactType(selectedArtifact.type)}</span>
                </Badge>

                <h3 className="text-2xl font-bold text-foreground">
                  {selectedArtifact.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedArtifact.description}
                </p>

                {selectedArtifact.date && (
                  <p className="text-sm text-muted-foreground/70">
                    Created: {selectedArtifact.date}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResearchArtifactGallery;
