import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { Mail, Globe, Download } from 'lucide-react';

export default function ClosingSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center items-center h-full px-20 relative">
        {/* Radial glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[800px] h-[800px] rounded-full opacity-10" style={{
            background: 'radial-gradient(circle, hsl(215,85%,55%) 0%, transparent 70%)',
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h2 className="text-[64px] font-bold mb-6">
            <span className="text-white">Let's Build </span>
            <span className="text-[hsl(215,85%,55%)]">Something Together</span>
          </h2>
          <p className="text-[24px] text-white/60 max-w-[800px] mx-auto mb-14 leading-relaxed">
            Research-driven design and development that delivers measurable business impact.
          </p>

          <div className="flex items-center justify-center gap-10 mb-14">
            <motion.a
              href="mailto:margeryfunes@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6 text-[hsl(215,85%,55%)]" />
              <span className="text-[18px] text-white">margeryfunes@gmail.com</span>
            </motion.a>
            <motion.a
              href="/"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Globe className="w-6 h-6 text-[hsl(190,75%,45%)]" />
              <span className="text-[18px] text-white">Portfolio</span>
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[16px] text-white/30"
          >
            Available for contract, collaboration, and full-time opportunities
          </motion.p>
        </motion.div>
      </div>
    </SlideLayout>
  );
}
