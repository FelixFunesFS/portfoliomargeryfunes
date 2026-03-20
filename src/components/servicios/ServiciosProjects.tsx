import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import soulTrainHomepage from '@/assets/soul-train-homepage.png';
import elSalvadorImage from '@/assets/el-salvador-tourism.png';
import visionsOfHopeHero from '@/assets/visions-of-hope-hero.png';
import bbvawHero from '@/assets/bbvaw-hero.png';

const projects = [
  {
    title: "Soul Train's Eatery",
    description: "Plataforma de pedidos y gestión de eventos para empresa de catering en Charleston. Reducción del 40% en errores de pedido y 60% más rápido en procesamiento.",
    metric: "83% más rápido en cotizaciones",
    image: soulTrainHomepage,
    link: "https://train-catering-creations.lovable.app",
    tags: ["React", "Supabase", "Stripe"],
  },
  {
    title: "Discover El Salvador",
    description: "Plataforma de turismo con narrativa visual inmersiva para guía turístico personal. Aumento del 300% en reservas directas.",
    metric: "300% más reservas",
    image: elSalvadorImage,
    link: "https://discover-elsalvador.com",
    tags: ["React", "Mapbox", "SEO"],
  },
  {
    title: "Visions of Hope",
    description: "Sitio web profesional para organización de servicios juveniles en Chicago. Aumento del 200% en consultas y mejora en éxito de subvenciones.",
    metric: "200% más consultas",
    image: visionsOfHopeHero,
    link: "https://visionsofhope.ngo",
    tags: ["Webflow", "CMS", "Accesibilidad"],
  },
  {
    title: "Benefits Beyond the VA Wall",
    description: "Portal de recursos para veteranos navegando beneficios complejos. Más de 500 veteranos guiados con 80% de satisfacción.",
    metric: "500+ veteranos ayudados",
    image: bbvawHero,
    link: "https://bbvaw.us",
    tags: ["Webflow", "JavaScript", "APIs"],
  },
];

const ServiciosProjects = () => {
  return (
    <section id="proyectos" className="section bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Portafolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <span className="text-primary">Seleccionados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones reales con impacto medible para negocios y organizaciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 h-full bg-card">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                    <Badge className="bg-success/10 text-success border-success/30 text-xs font-bold">
                      {project.metric}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary">
                        Ver <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosProjects;
