import React, { useEffect, useCallback, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DeckNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  onGoTo: (index: number) => void;
}

export default function DeckNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
}: DeckNavigationProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [hideTimer, setHideTimer] = useState<NodeJS.Timeout | null>(null);

  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer) clearTimeout(hideTimer);
    const timer = setTimeout(() => setShowControls(false), 3000);
    setHideTimer(timer);
  }, [hideTimer]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        onPrev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'Escape' && isFullscreen) {
        document.exitFullscreen?.();
      }
      resetHideTimer();
    };

    const handleMove = () => resetHideTimer();
    const handleFsChange = () => setIsFullscreen(!!document.fullscreenElement);

    window.addEventListener('keydown', handleKey);
    window.addEventListener('mousemove', handleMove);
    document.addEventListener('fullscreenchange', handleFsChange);

    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('mousemove', handleMove);
      document.removeEventListener('fullscreenchange', handleFsChange);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [onNext, onPrev, isFullscreen, resetHideTimer, hideTimer]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[hsl(215,85%,35%)] to-[hsl(190,75%,45%)]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Side click zones */}
            <button
              onClick={onPrev}
              className="fixed left-0 top-0 w-20 h-full z-40 cursor-pointer opacity-0 hover:opacity-100 transition-opacity flex items-center justify-start pl-4"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-8 h-8 text-white/60" />
            </button>
            <button
              onClick={onNext}
              className="fixed right-0 top-0 w-20 h-full z-40 cursor-pointer opacity-0 hover:opacity-100 transition-opacity flex items-center justify-end pr-4"
              aria-label="Next slide"
            >
              <ChevronRight className="w-8 h-8 text-white/60" />
            </button>

            {/* Bottom bar */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-4 py-2">
              {/* Dots */}
              <div className="flex gap-1.5">
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onGoTo(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <span className="text-white/50 text-xs font-mono ml-2">
                {currentSlide + 1}/{totalSlides}
              </span>

              {/* Fullscreen */}
              <button
                onClick={toggleFullscreen}
                className="ml-2 text-white/50 hover:text-white transition-colors"
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
