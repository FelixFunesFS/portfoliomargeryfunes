import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { Clock, TrendingUp, Award } from 'lucide-react';

const metrics = [
  { icon: Clock, value: '26,000+', label: 'Hours Saved Annually', desc: 'Through automation & optimization', color: 'hsl(190,75%,45%)' },
  { icon: TrendingUp, value: '90%', label: 'Error Reduction', desc: 'In data-intensive workflows', color: 'hsl(140,50%,55%)' },
  { icon: Award, value: '5,200%', label: 'Average ROI', desc: 'From user-centered solutions', color: 'hsl(25,90%,55%)' },
];

export default function ImpactSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[hsl(190,75%,45%)] text-[20px] font-medium tracking-[0.15em] uppercase mb-4">Measurable Impact</p>
          <h2 className="text-[56px] font-bold mb-16">
            <span className="text-white">Impact-Driven </span>
            <span className="text-[hsl(215,85%,55%)]">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-12">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className="text-center p-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: `${m.color}20` }}>
                  <m.icon className="w-10 h-10" style={{ color: m.color }} />
                </div>
              </div>
              <div className="text-[64px] font-bold mb-2" style={{ color: m.color }}>{m.value}</div>
              <div className="text-[22px] font-semibold text-white mb-2">{m.label}</div>
              <div className="text-[16px] text-white/50">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
