import { motion } from 'framer-motion';
import SlideLayout from '../SlideLayout';

const categories = [
  {
    title: 'Full Stack Development',
    color: 'hsl(215,85%,55%)',
    skills: ['HTML/CSS', 'JavaScript/React', 'TypeScript', 'Tailwind CSS', 'API/REST', 'Git', 'SharePoint', 'SEO'],
  },
  {
    title: 'AI & Automation',
    color: 'hsl(262,83%,65%)',
    skills: ['Python', 'AI-Augmented Dev', 'No-Code/Low-Code', 'VBA/Automation', 'SQL/Database', 'Power Platform', 'Tableau', 'Prompt Engineering'],
  },
  {
    title: 'Design & Research',
    color: 'hsl(25,90%,55%)',
    skills: ['Figma', 'Adobe XD', 'Usability Testing', 'Journey Mapping', 'Persona Development', 'Design Systems', 'Wireframing', 'Prototyping'],
  },
];

export default function TechStackSlide() {
  return (
    <SlideLayout>
      <div className="flex flex-col justify-center h-full px-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-[hsl(190,75%,45%)] text-[20px] font-medium tracking-[0.15em] uppercase mb-4">Technical Toolkit</p>
          <h2 className="text-[52px] font-bold mb-14">
            <span className="text-white">Technical Stack </span>
            <span className="text-[hsl(215,85%,55%)]">& AI</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + ci * 0.15 }}
              className="p-8 rounded-xl border border-white/10 bg-white/5"
            >
              <h3 className="text-[22px] font-semibold mb-6" style={{ color: cat.color }}>{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-[15px] border"
                    style={{
                      borderColor: `${cat.color}40`,
                      color: cat.color,
                      backgroundColor: `${cat.color}10`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
