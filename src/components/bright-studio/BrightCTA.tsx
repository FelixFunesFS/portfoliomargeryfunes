import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrightCTA = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]" />
      
      {/* Animated Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 drop-shadow-lg">
            Ready to Collaborate?
          </h2>
          
          <p className="text-xl sm:text-2xl mb-12 text-white/90 drop-shadow max-w-2xl mx-auto leading-relaxed">
            Let's discuss how I can help solve your organization's UX challenges
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-white text-[#764ba2] hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 text-lg px-10 py-7 font-semibold"
              asChild
            >
              <a href="mailto:envision@mkqconsulting.com">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-[#764ba2] shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-10 py-7 font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <a
              href="mailto:envision@mkqconsulting.com"
              className="inline-flex items-center text-lg text-white/90 hover:text-white transition-colors duration-300 hover:underline"
            >
              <Mail className="mr-2 h-5 w-5" />
              envision@mkqconsulting.com
            </a>

            <div className="flex justify-center gap-6 pt-4">
              <a
                href="https://www.linkedin.com/in/felixfunes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
                <span className="text-base">LinkedIn</span>
              </a>
              
              <span className="text-white/50">•</span>
              
              <a
                href="https://github.com/felixfunesfs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
                <span className="text-base">GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrightCTA;
