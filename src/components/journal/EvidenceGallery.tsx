import React, { useState } from 'react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Placeholder artifacts - in production, these would be actual research images
const artifacts = [
  {
    id: 1,
    title: 'User Journey Map - F117 Fighter Jet Data System',
    description: 'Comprehensive journey mapping session documenting pilot workflows and pain points',
    category: 'Journey Map',
    image: '/placeholder.svg'
  },
  {
    id: 2,
    title: 'Workshop Session - Benefits Platform',
    description: 'Collaborative whiteboard session with stakeholders identifying user needs',
    category: 'Workshop',
    image: '/placeholder.svg'
  },
  {
    id: 3,
    title: 'Persona Set - Veterans Benefits Users',
    description: 'Detailed persona development from 15+ veteran interviews',
    category: 'Personas',
    image: '/placeholder.svg'
  },
  {
    id: 4,
    title: 'Wireframe Iterations - El Salvador Tourism',
    description: 'Low to high-fidelity wireframe progression over 3 design sprints',
    category: 'Wireframes',
    image: '/placeholder.svg'
  },
  {
    id: 5,
    title: 'Usability Testing Setup',
    description: 'Remote usability testing session with 8 participants',
    category: 'Testing',
    image: '/placeholder.svg'
  },
  {
    id: 6,
    title: 'Before/After Interface Comparison',
    description: 'Data entry interface showing 45% efficiency improvement',
    category: 'Results',
    image: '/placeholder.svg'
  }
];

const EvidenceGallery = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<typeof artifacts[0] | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (artifact: typeof artifacts[0]) => {
    setSelectedArtifact(artifact);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedArtifact(null);
  };

  const navigateArtifact = (direction: 'prev' | 'next') => {
    if (!selectedArtifact) return;
    
    const currentIndex = artifacts.findIndex(a => a.id === selectedArtifact.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : artifacts.length - 1;
    } else {
      newIndex = currentIndex < artifacts.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedArtifact(artifacts[newIndex]);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'ArrowLeft') navigateArtifact('prev');
      if (e.key === 'ArrowRight') navigateArtifact('next');
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedArtifact]);

  return (
    <section
      id="evidence"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20"
      aria-labelledby="evidence-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 id="evidence-heading" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Evidence Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Visual documentation of research artifacts, deliverables, and collaborative work products
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <button
              key={artifact.id}
              onClick={() => openLightbox(artifact)}
              className="group relative overflow-hidden rounded-lg border-2 border-border bg-background hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-left"
              aria-label={`View ${artifact.title}`}
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <img
                  src={artifact.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-background">
                <div className="mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                    {artifact.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {artifact.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {artifact.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
          <DialogContent className="max-w-5xl p-0" aria-describedby="lightbox-description">
            {selectedArtifact && (
              <div className="relative">
                {/* Close Button */}
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                    aria-label="Close lightbox"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogClose>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateArtifact('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                  aria-label="Previous artifact"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => navigateArtifact('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                  aria-label="Next artifact"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                {/* Image */}
                <div className="bg-muted">
                  <img
                    src={selectedArtifact.image}
                    alt={selectedArtifact.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                </div>

                {/* Caption */}
                <div className="p-6 bg-background" id="lightbox-description">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                      {selectedArtifact.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {selectedArtifact.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedArtifact.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default EvidenceGallery;
