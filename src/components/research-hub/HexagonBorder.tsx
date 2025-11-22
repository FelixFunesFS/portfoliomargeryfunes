import React from 'react';
import { motion } from 'framer-motion';

interface HexagonBorderProps {
  isHovered: boolean;
  color?: string;
}

const HexagonBorder: React.FC<HexagonBorderProps> = ({ isHovered, color = 'hsl(var(--primary))' }) => {
  // Hexagon path coordinates
  const hexPath = "M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z";
  
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      <motion.path
        d={hexPath}
        fill="none"
        stroke="url(#hexGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: isHovered ? 1 : 0.3,
          opacity: isHovered ? 1 : 0.4,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformOrigin: 'center' }}
      />
      
      {isHovered && (
        <motion.path
          d={hexPath}
          fill="none"
          stroke={color}
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            filter: `drop-shadow(0 0 10px ${color})`,
          }}
        />
      )}
    </svg>
  );
};

export default HexagonBorder;
