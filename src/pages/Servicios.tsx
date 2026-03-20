import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Award, CheckCircle, Globe, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import ServiciosNavbar from '@/components/servicios/ServiciosNavbar';
import ServiciosHero from '@/components/servicios/ServiciosHero';
import ServiciosGrid from '@/components/servicios/ServiciosGrid';
import ServiciosProjects from '@/components/servicios/ServiciosProjects';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';

const Servicios = () => {
  useEffect(() => {
    document.title = "Servicios de Diseño UX & Desarrollo Web | Margery Funes";
    window.scrollTo(0, 0);
  }, []);

  const differentiators = [
    {
      icon: Globe,
      title: 'Bilingüe Nativo',
      description: 'Comunicación fluida en inglés y español. Entiendo las necesidades de negocios que operan en mercados bilingües y multiculturales.',
    },
    {
      icon: Shield,
      title: 'Precisión Militar',
      description: 'Metodología forjada en proyectos DOD/Boeing. Enfoque sistemático y orientado a resultados para cada proyecto.',
    },
    {
      icon: TrendingUp,
      title: 'ROI Medible',
      description: 'Cada solución incluye métricas de éxito claras. Promedio de 5,200% de retorno de inversión en proyectos completados.',
    },
  ];

  const certifications = [
    { name: 'Google UX Design Professional Certificate', issuer: 'Google', year: '2023' },
    { name: 'Google UX Design Specialization', issuer: 'Google', year: '2023' },
    { name: 'IBM Full Stack Software Developer', issuer: 'IBM', year: '2024' },
    { name: 'IBM AI Developer Professional Certificate', issuer: 'IBM', year: '2024' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressIndicator />
      <ServiciosNavbar />
      <ServiciosHero />
      <ServiciosGrid />

      {/* Why Work With Me */}
      <section className="section bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Ventaja Competitiva
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por Qué <span className="text-primary">Trabajar Conmigo</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="h-full text-center border-border/50 bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServiciosProjects />

      {/* Certifications */}
      <section id="certificaciones" className="section bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Credenciales
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Certificaciones</span> Profesionales
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 bg-card hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-5 text-center">
                    <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-sm font-semibold text-card-foreground mb-1">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer} · {cert.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contacto" className="section bg-gradient-to-br from-primary via-primary/90 to-primary-glow">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Hablemos
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                ¿Tienes un proyecto en mente? Ofrezco una consulta inicial gratuita para entender 
                tus necesidades y cómo puedo ayudarte a alcanzar tus objetivos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8">
                  <a href="mailto:envision@mkqconsulting.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Enviar Correo
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/70 text-sm">
                <a href="mailto:envision@mkqconsulting.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" /> envision@mkqconsulting.com
                </a>
                <a href="https://www.linkedin.com/in/felixfunes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a href="https://github.com/felixfunesfs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Charleston, SC
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container-custom text-center">
          <p className="text-muted-foreground/70 text-sm">
            © {new Date().getFullYear()} Margery Funes. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            Ingeniera UX & Diseñadora de Sistemas | Charleston, SC
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Servicios;
