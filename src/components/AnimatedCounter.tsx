
import React, { useState, useEffect } from 'react';
import { useInView } from '@/hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  delay?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  delay = 0,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    if (isInView) {
      setTimeout(() => {
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);
          
          setCount(Math.floor(percentage * end));
          
          if (progress < duration) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        
        animationFrame = requestAnimationFrame(animate);
      }, delay);
    }
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration, delay]);

  return (
    <div ref={ref as any} className={className}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
