import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Zap, Github, Mail, Linkedin, ExternalLink, CheckCircle, Award, Terminal, Layers, Rocket, Brain, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TechnicalSkillsMatrix from '@/components/TechnicalSkillsMatrix';
import { webDevelopmentStudies } from '@/data/caseStudies/webDevelopmentStudies';
import soulTrainHomepage from '@/assets/soul-train-homepage.png';
import visionsOfHopeHero from '@/assets/visions-of-hope-hero.png';
import bbvawHero from '@/assets/bbvaw-hero.png';
import elSalvadorImage from '@/assets/el-salvador-tourism.png';

const DeveloperPortfolio = () => {
  const [typedCode, setTypedCode] = useState('');
  const codeSnippet = `const DeveloperProfile = () => {\n  return {\n    name: "Margery Funes",\n    role: "Full-Stack Developer",\n    superpower: "UX Research DNA"\n  };\n};`;

  useEffect(() => {
    document.title = "Full-Stack Developer & AI Engineer | Margery Funes";
    window.scrollTo(0, 0);

    // Typewriter effect
    let index = 0;
    const interval = setInterval(() => {
      if (index <= codeSnippet.length) {
        setTypedCode(codeSnippet.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { name: 'React', category: 'Frontend', icon: Code, proficiency: 95 },
    { name: 'TypeScript', category: 'Frontend', icon: Code, proficiency: 90 },
    { name: 'Tailwind CSS', category: 'Frontend', icon: Layers, proficiency: 95 },
    { name: 'Node.js', category: 'Backend', icon: Database, proficiency: 85 },
    { name: 'Python', category: 'Backend', icon: Database, proficiency: 80 },
    { name: 'PostgreSQL', category: 'Backend', icon: Database, proficiency: 85 },
    { name: 'Supabase', category: 'Backend', icon: Cloud, proficiency: 90 },
    { name: 'AI/ML APIs', category: 'AI', icon: Brain, proficiency: 85 },
    { name: 'Git', category: 'DevOps', icon: Terminal, proficiency: 90 },
    { name: 'REST APIs', category: 'Backend', icon: Zap, proficiency: 90 },
  ];

  const certifications = [
    {
      name: 'IBM Full Stack Software Developer',
      issuer: 'IBM',
      category: 'primary',
      description: 'Comprehensive full-stack development training covering front-end, back-end, databases, and deployment',
      learned: 'Mastered end-to-end MERN stack development and RESTful API design'
    },
    {
      name: 'IBM AI Developer',
      issuer: 'IBM',
      category: 'primary',
      description: 'Advanced AI integration, machine learning models, and AI-powered application development',
      learned: 'Built production-ready AI features using OpenAI, LangChain, and prompt engineering'
    },
    {
      name: 'IBM DevOps, Cloud and Agile Foundations',
      issuer: 'IBM',
      category: 'primary',
      description: 'CI/CD pipelines, cloud infrastructure, and agile development methodologies',
      learned: 'Implemented automated deployment workflows and cloud-native architecture patterns'
    },
    {
      name: 'Cloud Application Development Foundations',
      issuer: 'IBM',
      category: 'supporting',
      scope: 'Cloud-native architecture, microservices, scalability'
    },
    {
      name: 'Generative AI for Software Developers',
      issuer: 'Various',
      category: 'supporting',
      scope: 'Prompt engineering, AI-assisted development'
    },
    {
      name: 'Google Prompting Essentials',
      issuer: 'Google',
      category: 'supporting',
      scope: 'Advanced prompt design and AI interaction'
    },
    {
      name: 'Agile Development & Scrum',
      issuer: 'Various',
      category: 'supporting',
      scope: 'Scrum framework, sprint planning, team collaboration'
    },
  ];

  const projectImages: { [key: number]: string } = {
    8: soulTrainHomepage,
    10: visionsOfHopeHero,
    11: bbvawHero,
    12: elSalvadorImage,
  };

  const philosophy = [
    {
      title: 'User-Centered Code',
      icon: Shield,
      description: 'I write code that serves real users, not just requirements. My UX research background ensures every component solves actual user needs.'
    },
    {
      title: 'Clean & Maintainable',
      icon: CheckCircle,
      description: 'I prioritize readable, documented code and component reusability. Your team will thank you during code reviews.'
    },
    {
      title: 'Continuous Learning',
      icon: Rocket,
      description: 'Active learner staying current with modern frameworks, AI tools, and best practices. 10+ certifications completed in 2 years.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Terminal className="w-3 h-3 mr-1" />
              Full-Stack Developer & AI Engineer
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Building Scalable Applications
              <span className="block text-primary mt-2">with User-Centered Design DNA</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Combining technical expertise with UX research insights to build applications that users actually love to use
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              {[
                { icon: Rocket, label: '5+ Apps Deployed', value: 'Production' },
                { icon: Award, label: '10+ Certifications', value: 'IBM + Google' },
                { icon: Brain, label: 'AI-Augmented', value: 'Development' },
                { icon: Code, label: 'Modern Stack', value: 'React + Node' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all">
                    <CardContent className="p-4 text-center">
                      <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-semibold text-foreground">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
              <Button size="lg" variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Projects
              </Button>
            </div>
          </motion.div>

          {/* Animated Code Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-card/90 backdrop-blur-sm border-primary/20 overflow-hidden">
              <div className="bg-muted/50 px-4 py-2 flex items-center gap-2 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                  <div className="w-3 h-3 rounded-full bg-success/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">DeveloperProfile.tsx</span>
              </div>
              <CardContent className="p-6 bg-muted/20">
                <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                  <code>{typedCode}<span className="animate-pulse">|</span></code>
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Layers className="w-3 h-3 mr-1" />
              Technical Stack
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technologies I Work With
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern, production-ready stack optimized for scalable web applications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {techStack.map((tech, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="group bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <tech.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground mb-1">{tech.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{tech.category}</p>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.proficiency}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-success/10 text-success border-success/20">
              <Rocket className="w-3 h-3 mr-1" />
              Featured Development Projects
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Production Applications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full-stack applications built from architecture to deployment
            </p>
          </motion.div>

          <div className="space-y-12">
            {webDevelopmentStudies.filter(study => [8, 10, 11, 12].includes(study.id)).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Project Image */}
                    <div className="relative overflow-hidden group">
                      <img
                        src={projectImages[project.id]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                        <Button className="bg-primary text-primary-foreground">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Button>
                      </div>
                    </div>

                    {/* Project Details */}
                    <CardContent className="p-6 lg:p-8">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.slice(0, 4).map((tool, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                      
                      {/* Technical Challenge */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          Technical Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">{project.problem}</p>
                      </div>

                      {/* Implementation */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-success mb-2 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Implementation
                        </h4>
                        <p className="text-sm text-muted-foreground">{project.solution}</p>
                      </div>

                      {/* UX Advantage */}
                      <div className="mb-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-accent mb-2">🎯 UX Advantage</h4>
                        <p className="text-sm text-muted-foreground">{project.uxImpact}</p>
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 gap-3">
                          {project.metrics.slice(0, 2).map((metric, i) => (
                            <div key={i} className="text-center p-3 bg-muted/30 rounded-lg border border-border/50">
                              <p className="text-2xl font-bold text-primary">{metric.value}</p>
                              <p className="text-xs text-muted-foreground">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Award className="w-3 h-3 mr-1" />
              Certifications & Training
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Professional Development
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formal training backing technical implementation capabilities
            </p>
          </motion.div>

          {/* Primary Certifications */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-primary/20" />
              <span>PRIMARY DEVELOPER CREDENTIALS</span>
              <div className="h-px flex-1 bg-primary/20" />
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.filter(cert => cert.category === 'primary').map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start gap-3 mb-2">
                        <Award className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="text-lg mb-1">{cert.name}</CardTitle>
                          <Badge variant="outline" className="text-xs">{cert.issuer}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                      {cert.learned && (
                        <div className="p-3 bg-primary/5 border border-primary/10 rounded-lg">
                          <p className="text-xs font-medium text-primary mb-1">What I Learned:</p>
                          <p className="text-xs text-muted-foreground italic">{cert.learned}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Supporting Certifications */}
          <div>
            <h3 className="text-sm font-semibold text-accent mb-4 flex items-center gap-2">
              <div className="h-px flex-1 bg-accent/20" />
              <span>SUPPORTING CAPABILITIES</span>
              <div className="h-px flex-1 bg-accent/20" />
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.filter(cert => cert.category === 'supporting').map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card className="h-full bg-card/30 backdrop-blur-sm border-accent/20 hover:border-accent/40 transition-all">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-sm text-foreground mb-1">{cert.name}</h4>
                      <Badge variant="outline" className="text-xs mb-2">{cert.issuer}</Badge>
                      <p className="text-xs text-muted-foreground">{cert.scope}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Deep Dive */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Code className="w-3 h-3 mr-1" />
              Technical Expertise
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Skill Matrix
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technical capabilities with proficiency levels
            </p>
          </motion.div>

          <TechnicalSkillsMatrix
            skills={[
              // Full Stack Development (Primary)
              { name: 'React & TypeScript', level: 95, proficiency: 'Expert', description: 'Building complex UIs with type-safe component architecture', category: 'Full Stack Development' },
              { name: 'Node.js & Express', level: 85, proficiency: 'Advanced', description: 'RESTful API development and server-side logic', category: 'Full Stack Development' },
              { name: 'PostgreSQL & Supabase', level: 85, proficiency: 'Advanced', description: 'Database design, queries, and real-time subscriptions', category: 'Full Stack Development' },
              { name: 'Tailwind CSS', level: 95, proficiency: 'Expert', description: 'Modern utility-first styling and responsive design', category: 'Full Stack Development' },
              { name: 'Git & Version Control', level: 90, proficiency: 'Expert', description: 'Branching strategies, PRs, and collaborative workflows', category: 'Full Stack Development' },

              // AI Development & Automation
              { name: 'OpenAI API Integration', level: 85, proficiency: 'Advanced', description: 'Building AI-powered features and chatbots', category: 'AI Development & Automation' },
              { name: 'Prompt Engineering', level: 90, proficiency: 'Expert', description: 'Optimizing AI responses and context management', category: 'AI Development & Automation' },
              { name: 'AI-Assisted Development', level: 85, proficiency: 'Advanced', description: 'Leveraging Cursor, Claude, and GitHub Copilot', category: 'AI Development & Automation' },
              { name: 'Automation & Scripting', level: 80, proficiency: 'Advanced', description: 'Python and JavaScript automation workflows', category: 'AI Development & Automation' },

              // UX Research & Design (Differentiator)
              { name: 'User Research & Testing', level: 95, proficiency: 'Expert', description: 'Conducting interviews, usability tests, and synthesis', category: 'UX Research & Design' },
              { name: 'Systems Analysis', level: 90, proficiency: 'Expert', description: 'Breaking down complex workflows and identifying pain points', category: 'UX Research & Design' },
              { name: 'Figma & Prototyping', level: 85, proficiency: 'Advanced', description: 'Wireframing, prototyping, and design systems', category: 'UX Research & Design' },
              { name: 'Component Architecture', level: 90, proficiency: 'Expert', description: 'Building reusable, accessible component libraries', category: 'UX Research & Design' },
            ]}
          />
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              My Development Approach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How I approach building software that scales and delights users
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-lg transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-success/5 border-primary/20">
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Let's Build Something
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Looking for a developer who combines technical expertise with user-centered thinking? Let's connect.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="w-4 h-4 mr-2" />
                    envision@mkqconsulting.com
                  </Button>
                  <Button size="lg" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    View GitHub
                  </Button>
                  <Button size="lg" variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground">
                  📍 Charleston, SC • Available for remote opportunities
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeveloperPortfolio;
