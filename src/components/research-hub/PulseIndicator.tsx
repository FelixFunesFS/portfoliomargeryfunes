import React from 'react';
import { motion } from 'framer-motion';

interface PulseIndicatorProps {
  status: 'active' | 'completed';
  className?: string;
}

const PulseIndicator: React.FC<PulseIndicatorProps> = ({ status, className = '' }) => {
  const color = status === 'active' ? 'hsl(var(--success))' : 'hsl(var(--primary))';
  const shouldPulse = status === 'active';
  
  return (
    <div className={`relative ${className}`} role="status" aria-label={`Mission ${status}`}>
      {/* Core Circle */}
      <motion.div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
        animate={shouldPulse ? {
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Expanding Ring 1 */}
      {shouldPulse && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `2px solid ${color}`,
          }}
          animate={{
            scale: [1, 2.5],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
      
      {/* Expanding Ring 2 */}
      {shouldPulse && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${color}`,
          }}
          animate={{
            scale: [1, 3.5],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5
          }}
        />
      )}
      
      {/* Glow Shadow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 20px ${color}`,
        }}
        animate={shouldPulse ? {
          opacity: [0.5, 0.8, 0.5],
        } : { opacity: 0.3 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default PulseIndicator;
