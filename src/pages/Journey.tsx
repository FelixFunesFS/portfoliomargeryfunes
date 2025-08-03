import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Users, Code, Zap, CheckCircle, Award, Brain, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

const Journey = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "My Journey into User Research | Margery Funes";
    window.scrollTo(0, 0);
  }, []);

  const journeyMilestones = [
    {
      title: "The Problem Recognition",
      icon: Target,
      description: "While serving in the U.S. Air Force and later at Boeing, I began noticing a recurring issue: the systems we relied on often didn't align with how people actually worked. Applications were clunky, workflows were inefficient, and users — myself included — were left adapting to tools that didn't fit their needs.",
      period: "2008-2018",
      color: "military"
    },
    {
      title: "Taking Action",
      icon: Code,
      description: "Rather than accept the status quo, I took action. I began learning automation, programming, and systems analysis to improve the processes I worked within. I built tools, streamlined workflows, and started bridging the gap between users and the technology they depended on.",
      period: "2012-2018",
      color: "technical"
    },
    {
      title: "Leadership Recognition",
      icon: Award,
      description: "Leadership took notice. Recognizing the value of my technical skills and user perspective, they began rotating me into new roles every six months — not to fill gaps, but to improve them. Each rotation became an opportunity to assess, modernize, and automate core systems.",
      period: "2015-2018",
      color: "leadership"
    },
    {
      title: "Process Improvement",
      icon: Zap,
      description: "Once every area had been optimized, I helped establish documentation and continuous improvement processes to ensure sustainable progress. This systematic approach to enhancement became my signature method.",
      period: "2016-2018",
      color: "systems"
    },
    {
      title: "The Deeper Problem",
      icon: Brain,
      description: "Through this work, I uncovered a deeper problem: most users couldn't clearly express their needs in technical terms, and development teams didn't always have access to the full context of daily operations. It wasn't a people problem — it was a communication and alignment problem.",
      period: "2018",
      color: "insight"
    },
    {
      title: "Formal Pursuit",
      icon: Users,
      description: "That realization led me to formally pursue User Research and Experience Design. I wanted to understand how people interact with technology, and how to ensure their experiences were not only efficient, but intuitive and empowering.",
      period: "2018-2020",
      color: "research"
    },
    {
      title: "Becoming the Translator",
      icon: Heart,
      description: "I earned certifications, refined my design practice, and expanded into full stack development — fully stepping into the role of a translator between users and developers. Today, I create research-driven, human-centered solutions that help teams build the right products — the first time.",
      period: "2020-Present",
      color: "current"
    }
  ];

  const coreValues = [
    {
      title: "Research-Driven Solutions",
      description: "Every decision backed by user insights and data",
      icon: Target
    },
    {
      title: "Human-Centered Design",
      description: "Technology that adapts to people, not the other way around",
      icon: Heart
    },
    {
      title: "Systems Thinking",
      description: "Understanding the bigger picture and interconnections",
      icon: Brain
    },
    {
      title: "Continuous Improvement",
      description: "Building sustainable processes for ongoing optimization",
      icon: CheckCircle
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.section 
        className="section gradient-subtle py-20 px-4 md:px-8 lg:px-16 border-b border-primary-glow/20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-custom max-w-4xl">
          <motion.div className="flex items-center gap-4 mb-8" variants={itemVariants}>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="glass border-primary-glow/30 text-primary-glow hover:bg-primary-glow/20 shadow-systems"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>
          
          <motion.div className="text-center" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              My Journey into{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-glow to-systems-blue bg-clip-text text-transparent">
                User Research
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bridging the Gap Between Users and Technology
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Timeline */}
      <motion.section 
        className="section bg-background py-20 px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-custom max-w-4xl">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              From recognizing problems to becoming the bridge between users and technology
            </p>
          </motion.div>

          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`glass border-none shadow-card hover:shadow-military transition-all duration-300 relative overflow-hidden border-l-4 ${
                  milestone.color === 'military' ? 'border-l-military-primary' :
                  milestone.color === 'technical' ? 'border-l-systems-blue' :
                  milestone.color === 'leadership' ? 'border-l-agile-primary' :
                  milestone.color === 'systems' ? 'border-l-primary-glow' :
                  milestone.color === 'insight' ? 'border-l-accent' :
                  milestone.color === 'research' ? 'border-l-systems-blue' :
                  'border-l-primary-glow'
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg ${
                        milestone.color === 'military' ? 'bg-military-primary/20 text-military-primary' :
                        milestone.color === 'technical' ? 'bg-systems-blue/20 text-systems-blue' :
                        milestone.color === 'leadership' ? 'bg-agile-primary/20 text-agile-primary' :
                        milestone.color === 'systems' ? 'bg-primary-glow/20 text-primary-glow' :
                        milestone.color === 'insight' ? 'bg-accent/20 text-accent' :
                        milestone.color === 'research' ? 'bg-systems-blue/20 text-systems-blue' :
                        'bg-primary-glow/20 text-primary-glow'
                      }`}>
                        <milestone.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl">{milestone.title}</CardTitle>
                          <Badge variant="secondary" className="text-xs border-primary-glow/30">
                            {milestone.period}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section 
        className="section gradient-subtle py-20 px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-custom max-w-4xl">
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide my approach to user research and design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass border-none shadow-card hover:shadow-systems transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary-glow/20 text-primary-glow">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg mb-2">{value.title}</CardTitle>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Current Mission */}
      <motion.section 
        className="section bg-background py-20 px-4 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-custom max-w-4xl">
          <motion.div variants={itemVariants}>
            <Card className="glass border-none shadow-card relative overflow-hidden bg-gradient-to-br from-primary-glow/10 to-systems-blue/10 border-primary-glow/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Today's Mission
                </CardTitle>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  I create research-driven, human-centered solutions that help teams build the right products — the first time. 
                  My unique blend of systems thinking, user empathy, and technical expertise allows me to translate between 
                  user needs and development capabilities, ensuring solutions that are both innovative and practical.
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="section gradient-subtle py-20 px-4 md:px-8 lg:px-16 border-t border-primary-glow/20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container-custom max-w-4xl text-center">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Bridge the Gap?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create user-centered solutions that solve real problems 
              and drive meaningful results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/case-studies')}
                className="bg-primary-glow hover:bg-primary-glow/90 text-primary-foreground shadow-glow"
              >
                View Case Studies
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/#contact')}
                className="border-primary-glow text-primary-glow hover:bg-primary-glow/20 shadow-systems"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Journey;