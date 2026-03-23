import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

interface CaseStudySlideProps {
  label: string;
  title: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  quote?: string;
  quoteAttribution?: string;
  accentColor: string;
  liveLink?: string;
}

export default function CaseStudySlide({
  label,
  title,
  problem,
  solution,
  metrics,
  quote,
  quoteAttribution,
  accentColor,
  liveLink,
}: CaseStudySlideProps) {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[20px] font-medium tracking-[0.15em] uppercase mb-4" style={{ color: accentColor }}>{label}</p>
          <h2 className="text-[44px] font-bold text-white mb-10 leading-tight max-w-[1200px]">{title}</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-16 mb-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="text-[20px] font-semibold text-white/60 uppercase tracking-wider mb-3">Problem</h3>
            <p className="text-[18px] text-white/80 leading-relaxed">{problem}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <h3 className="text-[20px] font-semibold text-white/60 uppercase tracking-wider mb-3">Solution</h3>
            <p className="text-[18px] text-white/80 leading-relaxed">{solution}</p>
          </motion.div>
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-8 mb-8"
        >
          {metrics.map((m) => (
            <div key={m.label} className="px-8 py-5 rounded-xl border border-white/10 bg-white/5 text-center flex-1">
              <div className="text-[36px] font-bold mb-1" style={{ color: accentColor }}>{m.value}</div>
              <div className="text-[15px] text-white/50 uppercase tracking-wider">{m.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        {quote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="border-l-4 pl-6 max-w-[1000px]"
            style={{ borderColor: accentColor }}
          >
            <p className="text-[18px] text-white/70 italic leading-relaxed">"{quote}"</p>
            {quoteAttribution && (
              <p className="text-[14px] mt-2" style={{ color: accentColor }}>{quoteAttribution}</p>
            )}
          </motion.div>
        )}

        {liveLink && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[16px] underline" style={{ color: accentColor }}>
              View Live →
            </a>
          </motion.div>
        )}
      </div>
    </SlideLayout>
  );
}
