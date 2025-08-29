import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ResearchMethodology from '@/components/ResearchMethodology';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import WebDesignCard from '@/components/WebDesignCard';
import DesignProcess from '@/components/DesignProcess';
import ProfessionalImpact from '@/components/ProfessionalImpact';
import SkillItem from '@/components/SkillItem';
import ResearchImpactGlance from '@/components/ResearchImpactGlance';
import ResearchConsultationCTA from '@/components/ResearchConsultationCTA';
import PortfolioDownload from '@/components/PortfolioDownload';
import ResearchStoriesCarousel from '@/components/ResearchStoriesCarousel';

// Import data
import { researchStories } from '@/data/researchStories';
import { skillCategories } from '@/data/skills';
import { webDesigns } from '@/data/webProjects';

// Import animations
import { containerVariants, itemVariants } from '@/lib/animations';

const Home = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, {
    once: true
  });
  const navigate = useNavigate();
  
  const handleViewCaseStudy = (projectTitle: string) => {
    // Map project titles to case study IDs
    const projectToCaseStudyMap: {
      [key: string]: number;
    } = {
      "Soul Train's Eatery": 8,
      "Souls Feeding Souls": 9,
      "Visions of Hope": 10,
      "Veteran's Benefits Beyond the VA Wall": 11,
      "Discover El Salvador": 12
    };
    const caseStudyId = projectToCaseStudyMap[projectTitle];
    if (caseStudyId) {
      navigate('/case-studies', {
        state: {
          selectedStudyId: caseStudyId
        }
      });
    }
  };
  
  useEffect(() => {
    document.title = "UX Researcher | Systems Analyst | Human-Centered Problem Solver";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Research Stories Section */}
      <section id="research-stories" className="section bg-background">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary"
            >
              Research-First Success Stories
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-foreground/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
            >
              Real user problems solved through systematic research and human-centered design.
              Each project demonstrates how understanding users first leads to better outcomes.
            </motion.p>
          </motion.div>

          <ResearchStoriesCarousel stories={researchStories} />
        </div>
      </section>

      {/* Research Methodology Section */}
      <ResearchMethodology />

      {/* Skills Arsenal Section */}
      <section id="skills" className="section bg-gradient">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary"
            >
              Skills Arsenal
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-foreground/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
            >
              A comprehensive toolkit spanning user research, design systems, automation, and leadership.
              Each skill has been battle-tested in high-stakes environments.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-8 lg:gap-12"
          >
            {Object.entries(skillCategories).map(([category, skills], index) => (
              <motion.div key={category} variants={itemVariants}>
                <Card className="glass overflow-hidden">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-foreground">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skills.map((skill, skillIndex) => (
                      <SkillItem 
                        key={skillIndex} 
                        name={skill.name}
                        level={skill.level}
                        proficiency={skill.proficiency}
                        description={skill.description}
                        delay={skillIndex * 100}
                      />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Web Design Portfolio Section */}
      <section id="web-portfolio" className="section bg-background">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-primary"
            >
              Web Design Portfolio
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-foreground/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg"
            >
              User-centered web solutions that drive real business results.
              From catering systems to nonprofit platforms, each project solves real problems.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {webDesigns.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <WebDesignCard 
                  project={project} 
                  index={index}
                  onViewCaseStudy={() => handleViewCaseStudy(project.title)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Design Process Section */}
      <DesignProcess />

      {/* Professional Impact Section */}
      <ProfessionalImpact />

      {/* About Section */}
      <About />

      {/* Research Impact at a Glance */}
      <ResearchImpactGlance />

      {/* Research Consultation CTA */}
      <ResearchConsultationCTA />

      {/* Portfolio Download Section */}
      <PortfolioDownload />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;