import React from 'react';
import { motion } from 'framer-motion';
import { Search, Palette, Code, Settings, Brain, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    icon: Search,
    title: 'Investigación UX',
    description: 'Entrevistas con usuarios, pruebas de usabilidad, mapeo de recorridos y desarrollo de personas. Descubro qué necesitan tus usuarios antes de construir.',
    highlights: ['Entrevistas de Usuario', 'Pruebas de Usabilidad', 'Mapeo de Recorrido'],
  },
  {
    icon: Palette,
    title: 'Diseño de Interfaces',
    description: 'Prototipos de alta fidelidad, sistemas de diseño y experiencias visuales que convierten visitantes en clientes.',
    highlights: ['Prototipos en Figma', 'Sistemas de Diseño', 'Diseño Responsivo'],
  },
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web y aplicaciones modernas con React, TypeScript y plataformas low-code. Rápido, accesible y optimizado para SEO.',
    highlights: ['React / TypeScript', 'Webflow / Low-Code', 'SEO Técnico'],
  },
  {
    icon: Settings,
    title: 'Automatización de Procesos',
    description: 'Elimino tareas repetitivas con herramientas de automatización. He ahorrado más de 26,000 horas anuales en proyectos anteriores.',
    highlights: ['VBA / Python', 'Power Platform', 'Flujos de Trabajo'],
  },
  {
    icon: Brain,
    title: 'Consultoría con IA',
    description: 'Integración de herramientas de inteligencia artificial para acelerar el desarrollo, generar contenido y optimizar procesos de negocio.',
    highlights: ['Desarrollo con IA', 'Prompting Avanzado', 'Automatización Inteligente'],
  },
  {
    icon: BarChart3,
    title: 'Estrategia de Producto',
    description: 'Análisis de datos, hojas de ruta y planificación estratégica para productos digitales con impacto medible.',
    highlights: ['Análisis de Datos', 'Tableau / Dashboards', 'Planificación Ágil'],
  },
];

const ServiciosGrid = () => {
  return (
    <section id="servicios" className="section bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Lo Que Ofrezco
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Servicios</span> Profesionales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Soluciones digitales completas — desde la investigación inicial hasta el producto final — con enfoque en resultados medibles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.highlights.map(h => (
                      <Badge key={h} variant="secondary" className="text-xs">{h}</Badge>
                    ))}
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

export default ServiciosGrid;
