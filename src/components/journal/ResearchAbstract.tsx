import React from 'react';
import { Mail, MapPin, FileDown, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResearchAbstract = () => {
  return (
    <section
      id="abstract"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
      aria-labelledby="abstract-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Professional Headshot Placeholder */}
        <div className="mb-8 flex justify-center">
          <div
            className="w-40 h-40 rounded-full bg-muted border-4 border-primary/20 flex items-center justify-center"
            role="img"
            aria-label="Professional headshot of Margery Funes, UX Researcher"
          >
            <span className="text-6xl font-bold text-primary">MF</span>
          </div>
        </div>

        {/* Name and Title */}
        <h1 id="abstract-heading" className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Margery Funes
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
          UX Researcher & Systems Designer
        </p>

        {/* Research Statement */}
        <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-12 max-w-3xl mx-auto border-l-4 border-primary pl-6 italic">
          "A longitudinal study of transitioning military systems analysis expertise into
          human-centered design practice"
        </blockquote>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-12 text-sm sm:text-base">
          <a
            href="mailto:envision@mkqconsulting.com"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-3 py-2"
            aria-label="Email Margery Funes"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            <span>Contact</span>
          </a>
          <span className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" aria-hidden="true" />
            <span>Charleston, SC</span>
          </span>
          <a
            href="https://www.linkedin.com/in/felixfunes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-3 py-2"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-5 w-5" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/felixfunesfs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-3 py-2"
            aria-label="GitHub profile"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Research Credentials */}
        <div className="bg-muted/30 border border-border rounded-lg p-8 mb-12">
          <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-6">
            Research Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl" aria-hidden="true">•</span>
              <span className="text-foreground">50+ User Interviews Conducted</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl" aria-hidden="true">•</span>
              <span className="text-foreground">200+ Usability Testing Sessions</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl" aria-hidden="true">•</span>
              <span className="text-foreground">25+ Journey Maps Created</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl" aria-hidden="true">•</span>
              <span className="text-foreground">2 Google UX Certifications</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          size="lg"
          className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => {
            const element = document.getElementById('research-question');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore the Research
          <span className="ml-2" aria-hidden="true">↓</span>
        </Button>
      </div>
    </section>
  );
};

export default ResearchAbstract;
