import { motion } from 'framer-motion';
import { Award, Code, Brain } from 'lucide-react';
import useInView from '@/hooks/useInView';

const ResearchCredentials = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const certifications = [
    {
      title: 'Google UX Design Professional Certificate',
      issuer: 'Google',
      year: '2024',
      icon: Award,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      primary: true,
    },
    {
      title: 'Google UX Research Professional Certificate',
      issuer: 'Google',
      year: '2024',
      icon: Award,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      primary: true,
    },
    {
      title: 'IBM Full Stack Software Developer',
      issuer: 'IBM',
      year: '2024',
      icon: Code,
      color: 'text-success',
      bgColor: 'bg-success/10',
    },
    {
      title: 'IBM AI Developer Professional Certificate',
      issuer: 'IBM',
      year: '2024',
      icon: Brain,
      color: 'text-agile-secondary',
      bgColor: 'bg-agile-secondary/10',
    },
  ];

  const tools = [
    { category: 'Research', items: ['UserTesting', 'Maze', 'Optimal Workshop', 'Lookback', 'Dovetail'] },
    { category: 'Design', items: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro'] },
    { category: 'Development', items: ['React', 'TypeScript', 'Node.js', 'Python', 'SQL'] },
    { category: 'AI/Automation', items: ['LangChain', 'OpenAI API', 'Zapier', 'Make', 'n8n'] },
  ];

  return (
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Credentials & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and technical expertise
          </p>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className={`p-6 rounded-xl bg-card border-2 ${
                  cert.primary ? 'border-primary/40' : 'border-border'
                } shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${cert.bgColor}`}>
                    <cert.icon className={`w-6 h-6 ${cert.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1 text-card-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                    {cert.primary && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                        Primary Expertise
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((toolGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="p-6 rounded-xl bg-card border border-border shadow-md"
              >
                <h4 className="text-lg font-semibold mb-4 text-card-foreground">{toolGroup.category}</h4>
                <ul className="space-y-2">
                  {toolGroup.items.map((tool, toolIdx) => (
                    <li key={toolIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchCredentials;
