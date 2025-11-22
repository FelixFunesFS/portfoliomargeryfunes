import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTAWithProof = () => {
  return (
    <section className="relative py-20 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-systems-cyan opacity-90" />
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Collaborate?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss how I can help solve your organization's UX challenges through systematic research and user-centered design
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-base font-semibold bg-white text-primary hover:bg-white/90 shadow-lg"
              asChild
            >
              <a href="mailto:envision@mkqconsulting.com">
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base font-semibold bg-white/10 text-white border-2 border-white hover:bg-white/20 backdrop-blur-sm"
              asChild
            >
              <a href="/resume.pdf" download>
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
              <a
                href="mailto:envision@mkqconsulting.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>envision@mkqconsulting.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Charleston, SC</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/felixfunes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <span className="text-white/50">•</span>
              <a
                href="https://github.com/felixfunesfs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAWithProof;
