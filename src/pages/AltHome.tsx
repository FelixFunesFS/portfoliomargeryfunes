import React from 'react';
import { ArrowRight, Code, Palette, Users, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MilitaryExperience from '@/components/MilitaryExperience';
import Journey from '@/components/Journey';
import DesignProcess from '@/components/DesignProcess';
import OptimizedCaseStudySummary from '@/components/OptimizedCaseStudySummary';
import About from '@/components/About';

const AltHome = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            <div className="text-xl font-semibold text-foreground">
              Margery Funes
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">
                Work
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              UX/UI Designer &<br />
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              I craft digital experiences that bridge beautiful design with functional development. 
              Specializing in user-centered solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="work" className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining design thinking with technical expertise to create meaningful digital experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">UX/UI Design</h3>
                <p className="text-muted-foreground">
                  User research, wireframing, prototyping, and visual design that puts users first
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Modern web applications built with React, TypeScript, and cutting-edge technologies
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Product Strategy</h3>
                <p className="text-muted-foreground">
                  Strategic thinking to align design decisions with business goals and user needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground">
              A selection of recent projects showcasing design and development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">E-Commerce Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Complete redesign and development of a modern shopping experience
                </p>
                <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group cursor-pointer border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all">
              <div className="aspect-video bg-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-card rounded-lg flex items-center justify-center mx-auto mb-4">
                      <ExternalLink className="h-8 w-8 text-secondary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Project Preview</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">SaaS Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Data visualization and user interface for a productivity application
                </p>
                <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                  <span className="text-sm font-medium">View Case Study</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <Journey />

      {/* Military Experience Section */}
      <MilitaryExperience />

      {/* Design Process Section */}
      <DesignProcess />

      {/* Case Studies Section */}
      <OptimizedCaseStudySummary />

      {/* About Section with UX/Systems Analysis Info */}
      <About />

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ready to bring your digital vision to life? I'd love to hear about your project.
            </p>
            <Button size="lg" className="group">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © 2024 Margery Funes. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AltHome;