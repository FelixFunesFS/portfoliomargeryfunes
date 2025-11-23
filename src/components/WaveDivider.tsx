import { motion } from 'framer-motion';

interface WaveDividerProps {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
}

const WaveDivider = ({ 
  topColor = 'hsl(var(--background))', 
  bottomColor = 'hsl(var(--muted))',
  flip = false 
}: WaveDividerProps) => {
  return (
    <div className={`relative w-full h-16 md:h-24 ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,60 C240,90 480,90 720,60 C960,30 1200,30 1440,60 L1440,120 L0,120 Z"
          fill="url(#waveGradient)"
          initial={{ d: "M0,60 C240,90 480,90 720,60 C960,30 1200,30 1440,60 L1440,120 L0,120 Z" }}
          animate={{ 
            d: [
              "M0,60 C240,90 480,90 720,60 C960,30 1200,30 1440,60 L1440,120 L0,120 Z",
              "M0,50 C240,80 480,80 720,50 C960,20 1200,20 1440,50 L1440,120 L0,120 Z",
              "M0,60 C240,90 480,90 720,60 C960,30 1200,30 1440,60 L1440,120 L0,120 Z",
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
