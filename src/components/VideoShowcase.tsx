import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, Video, Monitor, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface VideoItem {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  duration: string;
  type: 'demo' | 'walkthrough' | 'tutorial';
}

interface VideoShowcaseProps {
  videos: VideoItem[];
  className?: string;
}

const typeConfig = {
  demo: {
    label: 'Demo',
    icon: Monitor,
    color: 'bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
  },
  walkthrough: {
    label: 'Walkthrough',
    icon: Video,
    color: 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30',
  },
  tutorial: {
    label: 'Tutorial',
    icon: Smartphone,
    color: 'bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30',
  },
};

export const VideoShowcase = ({ videos, className }: VideoShowcaseProps) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Convert YouTube/Loom URLs to embed format
  const getEmbedUrl = (url: string): string => {
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s]+)/);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1`;
    }
    
    // Loom
    const loomMatch = url.match(/loom\.com\/share\/([^?]+)/);
    if (loomMatch) {
      return `https://www.loom.com/embed/${loomMatch[1]}?autoplay=1`;
    }
    
    // Direct video URL
    return url;
  };

  const isDirectVideo = (url: string): boolean => {
    return url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.mov');
  };

  if (videos.length === 0) {
    return (
      <div className={cn("p-8 rounded-lg border border-dashed border-border/50 bg-muted/20 text-center", className)}>
        <Video className="w-12 h-12 mx-auto mb-4 text-muted-foreground/50" />
        <p className="text-muted-foreground">
          Video walkthroughs coming soon
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          Record demos of the quote form, admin dashboard, and customer portal
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
        {videos.map((video, index) => {
          const config = typeConfig[video.type];
          const TypeIcon = config.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <TypeIcon className="w-16 h-16 text-primary/30" />
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>

                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <Badge variant="outline" className={cn("text-xs", config.color)}>
                    <TypeIcon className="w-3 h-3 mr-1" />
                    {config.label}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                  {video.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="aspect-video w-full bg-black">
            {selectedVideo && (
              isDirectVideo(selectedVideo.url) ? (
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={getEmbedUrl(selectedVideo.url)}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )
            )}
          </div>
          
          {selectedVideo && (
            <div className="p-4 pt-2">
              <p className="text-sm text-muted-foreground">
                {selectedVideo.description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
