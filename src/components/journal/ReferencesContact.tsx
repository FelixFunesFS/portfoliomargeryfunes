import React from 'react';
import { Mail, Linkedin, Github, Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certifications = [
  { name: 'Google UX Design Professional Certificate', issuer: 'Google / Coursera', year: '2024' },
  { name: 'Google UX Research Professional Certificate', issuer: 'Google / Coursera', year: '2024' },
  { name: 'IBM Full Stack Software Developer', issuer: 'IBM', year: '2024' },
  { name: 'IBM DevOps and Software Engineering', issuer: 'IBM', year: '2024' },
  { name: 'Agile Development and Scrum', issuer: 'IBM', year: '2024' },
  { name: 'IBM AI Developer Professional Certificate', issuer: 'IBM', year: '2024' },
  { name: 'Generative AI for Software Development', issuer: 'IBM', year: '2024' }
];

const ReferencesContact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 border-t-4 border-primary/20"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* References & Credentials */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Award className="h-5 w-5 text-primary" aria-hidden="true" />
            </div>
            <h2 id="contact-heading" className="text-2xl sm:text-3xl font-bold text-foreground">
              References & Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-lg p-4 hover:border-primary transition-colors"
              >
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-border pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              For Collaboration Inquiries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to UX research roles, full-stack development projects, and consulting opportunities
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <a
                href="mailto:envision@mkqconsulting.com"
                className="flex items-center gap-2"
                aria-label="Email Margery Funes"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>envision@mkqconsulting.com</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <a
                href="https://www.linkedin.com/in/felixfunes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span>LinkedIn</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <a
                href="https://github.com/felixfunesfs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" aria-hidden="true" />
                <span>GitHub</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2024 Margery Funes. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Portfolio designed with WCAG AAA accessibility standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesContact;
