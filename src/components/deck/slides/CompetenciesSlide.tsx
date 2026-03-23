import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';
import { Search, Layers, Palette, BarChart3, Target, Users } from 'lucide-react';

const competencies = [
  { name: 'UX Research', icon: Search, years: 8, metric: '15+ studies', color: 'hsl(215,85%,55%)', subtitle: 'Structured interviews, testing & behavioral analysis', methods: ['User Interviews', 'Usability Testing', 'Journey Mapping'] },
  { name: 'Systems Analysis', icon: Layers, years: 10, metric: '10k+ users', color: 'hsl(215,85%,35%)', subtitle: 'Mapping workflows to find inefficiencies', methods: ['Workflow Analysis', 'Requirements Gathering', 'Process Mapping'] },
  { name: 'UI/UX Design', icon: Palette, years: 6, metric: '8+ apps', color: 'hsl(25,90%,55%)', subtitle: 'Research-driven interfaces people want to use', methods: ['Wireframing', 'Prototyping', 'Design Systems'] },
  { name: 'Data Analysis', icon: BarChart3, years: 8, metric: '500+ hours', color: 'hsl(190,75%,45%)', subtitle: 'Turning behavior data into actionable insights', methods: ['Behavioral Analytics', 'Pattern Recognition', 'Statistical Analysis'] },
  { name: 'Strategic Planning', icon: Target, years: 10, metric: 'Multi-year roadmaps', color: 'hsl(262,83%,65%)', subtitle: 'Aligning product roadmaps with business goals', methods: ['Roadmap Development', 'Stakeholder Alignment', 'OKR Frameworks'] },
  { name: 'Leadership', icon: Users, years: 12, metric: '50+ personnel', color: 'hsl(140,50%,55%)', subtitle: 'Guiding cross-functional teams to deliver results', methods: ['Team Building', 'Mentorship', 'Cross-functional Coordination'] },
];

export default function CompetenciesSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[hsl(190,75%,45%)] text-[20px] font-medium tracking-[0.15em] uppercase mb-4">What I Bring</p>
          <h2 className="text-[52px] font-bold mb-12">
            <span className="text-white">Core </span>
            <span className="text-[hsl(215,85%,55%)]">Competencies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {competencies.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 flex items-start gap-5"
            >
              <div className="p-3 rounded-lg shrink-0" style={{ backgroundColor: `${c.color}20` }}>
                <c.icon className="w-7 h-7" style={{ color: c.color }} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[20px] font-semibold text-white mb-0.5">{c.name}</h3>
                <p className="text-[13px] text-white/50 mb-2 leading-snug">{c.subtitle}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {c.methods.map((m) => (
                    <span key={m} className="text-[11px] px-2 py-0.5 rounded-full border border-white/10 text-white/60">{m}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-white/35">{c.years}+ yrs</span>
                  <span className="text-[14px] font-medium" style={{ color: c.color }}>{c.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
