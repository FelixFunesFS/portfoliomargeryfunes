import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { webDevelopmentStudies } from '@/data/caseStudies/webDevelopmentStudies';
import useInView from '@/hooks/useInView';
import soulTrainImage from '@/assets/soul-train-homepage.png';
import visionsImage from '@/assets/visions-of-hope-hero.png';
import bbvawImage from '@/assets/bbvaw-hero.png';
import elSalvadorImage from '@/assets/el-salvador-tourism.png';

const FeaturedProjects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const projects = [
    {
      ...webDevelopmentStudies[0],
      image: soulTrainImage,
      url: 'https://train-catering-creations.lovable.app',
    },
    {
      ...webDevelopmentStudies[2],
      image: visionsImage,
      url: '#',
    },
    {
      ...webDevelopmentStudies[3],
      image: bbvawImage,
      url: '#',
    },
    {
      ...webDevelopmentStudies[4],
      image: elSalvadorImage,
      url: '#',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 sm:px-8 lg:px-12 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Featured Web Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-systems-cyan mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack applications built with research insights and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  {/* External Link Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Metric Badge */}
                  {project.metrics && project.metrics[0] && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-3">
                      <span className="text-lg font-bold text-success">{project.metrics[0].value}</span>
                      <span className="text-xs text-muted-foreground">{project.metrics[0].label}</span>
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.solution}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.slice(0, 4).map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
