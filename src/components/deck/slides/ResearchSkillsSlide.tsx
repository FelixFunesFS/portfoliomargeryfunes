import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

const researchSkills = [
  { name: 'User Research & Testing', level: 94 },
  { name: 'Systems Analysis', level: 98 },
  { name: 'Strategic Planning', level: 95 },
  { name: 'Agile Methodologies', level: 95 },
  { name: 'Process Optimization', level: 95 },
];

const designSkills = [
  { name: 'Prototyping (Figma, Adobe XD)', level: 90 },
  { name: 'Visual Design & UI', level: 85 },
  { name: 'Interaction Design', level: 82 },
  { name: 'Design Systems', level: 80 },
];

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-5"
    >
      <div className="flex justify-between mb-2">
        <span className="text-[18px] text-white/90">{name}</span>
        <span className="text-[16px] font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: delay + 0.2, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function ResearchSkillsSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[hsl(190,75%,45%)] text-[20px] font-medium tracking-[0.15em] uppercase mb-4">Skill Proficiency</p>
          <h2 className="text-[52px] font-bold mb-12">
            <span className="text-white">UX Research </span>
            <span className="text-[hsl(215,85%,55%)]">& Design</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-[24px] font-semibold text-[hsl(215,85%,55%)] mb-6">Research & Strategy</h3>
            {researchSkills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={0.2 + i * 0.1} color="hsl(215,85%,55%)" />
            ))}
          </div>
          <div>
            <h3 className="text-[24px] font-semibold text-[hsl(25,90%,55%)] mb-6">Design & Prototyping</h3>
            {designSkills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={0.2 + i * 0.1} color="hsl(25,90%,55%)" />
            ))}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
