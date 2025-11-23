import { motion } from 'framer-motion';
import { Code2, Database, Palette, Zap, Globe, GitBranch, Layers, Terminal, Cpu, Cloud } from 'lucide-react';

const techStack = [
  { name: 'React', icon: Code2, color: 'text-[#61DAFB]' },
  { name: 'TypeScript', icon: Terminal, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: Palette, color: 'text-[#06B6D4]' },
  { name: 'Supabase', icon: Database, color: 'text-[#3ECF8E]' },
  { name: 'Framer Motion', icon: Zap, color: 'text-[#FF0055]' },
  { name: 'Vite', icon: Layers, color: 'text-[#646CFF]' },
  { name: 'Node.js', icon: Globe, color: 'text-[#339933]' },
  { name: 'Git', icon: GitBranch, color: 'text-[#F05032]' },
  { name: 'Python', icon: Code2, color: 'text-[#3776AB]' },
  { name: 'AI/ML', icon: Cpu, color: 'text-[#FF6F00]' },
  { name: 'Cloud', icon: Cloud, color: 'text-[#4285F4]' },
];

const TechStackMarquee = () => {
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden py-8 bg-gradient-to-b from-background via-muted/5 to-background">
      {/* Top Row - Scroll Left */}
      <div className="relative mb-4">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1400],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Row - Scroll Right */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [-1400, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-accent/30 transition-all duration-300 group"
            >
              <tech.icon className={`w-5 h-5 ${tech.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default TechStackMarquee;
