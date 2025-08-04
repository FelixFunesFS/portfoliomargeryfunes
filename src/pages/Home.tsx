import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Margery Funes | UX Researcher & Systems Analyst";
    window.scrollTo(0, 0);
  }, []);

  const handleViewCaseStudies = () => {
    navigate('/case-studies');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section pt-32 pb-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
              UX Researcher &<br />Systems Analyst
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transforming complex problems into user-centered solutions through strategic research, 
              systems thinking, and agile methodologies. From military precision to enterprise innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={handleViewCaseStudies}
                className="group"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Let's Connect
              </Button>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center p-6 rounded-lg bg-card border">
              <Target className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">User Satisfaction</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border">
              <Users className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-card border">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">40%</div>
              <div className="text-sm text-muted-foreground">Efficiency Improvement</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              From Military Precision to User-Centered Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey from military systems analysis to UX research has equipped me with a unique 
              perspective on solving complex problems. I combine analytical rigor with empathetic 
              design thinking to create solutions that truly serve users and drive business success.
            </p>
            <Button onClick={handleViewCaseStudies} variant="outline">
              Explore My Work
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;