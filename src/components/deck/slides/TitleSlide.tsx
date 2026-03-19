import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import googleLogo from '@/assets/brands/google-logo.png';
import ibmLogo from '@/assets/brands/ibm-logo.png';
import boeingLogo from '@/assets/brands/boeing-logo.png';
import usafLogo from '@/assets/brands/usaf-logo.png';
import marineCorpsLogo from '@/assets/brands/marine-corps-logo.webp';

const logos = [
  { src: boeingLogo, alt: 'Boeing' },
  { src: usafLogo, alt: 'US Air Force' },
  { src: googleLogo, alt: 'Google' },
  { src: ibmLogo, alt: 'IBM' },
  { src: marineCorpsLogo, alt: 'US Marine Corps' },
];

export default function TitleSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center items-center h-full px-20 relative">
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(hsl(215 85% 35% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(215 85% 35% / 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <p className="text-[hsl(190,75%,45%)] text-[28px] font-medium tracking-[0.2em] uppercase mb-6">
            Capabilities Deck
          </p>
          <h1 className="text-[80px] font-bold leading-[1.05] mb-6">
            <span className="text-white">Margery </span>
            <span className="text-[hsl(215,85%,55%)]">Funes</span>
          </h1>
          <p className="text-[32px] text-white/80 font-light mb-4">
            UX Researcher & Human-Centered Designer
          </p>
          <p className="text-[22px] text-white/50 max-w-[900px] mx-auto leading-relaxed">
            Bridging Military Precision and User-Centered Innovation
          </p>
        </motion.div>

        {/* Brand logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-16 flex items-center gap-12"
        >
          {logos.map((logo) => (
            <div key={logo.alt} className="w-16 h-16 flex items-center justify-center opacity-40">
              <img src={logo.src} alt={logo.alt} className="max-w-full max-h-full object-contain brightness-0 invert" />
            </div>
          ))}
        </motion.div>
      </div>
    </SlideLayout>
  );
}
