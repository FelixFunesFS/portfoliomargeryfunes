import { useState, useEffect } from 'react';

interface CountUpOptions {
  end: number;
  duration?: number; // in milliseconds
  isInView: boolean;
}

export const useCountUp = ({ end, duration = 2000, isInView }: CountUpOptions) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation (easeOutCubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return count;
};
