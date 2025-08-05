import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Target, Lightbulb, BookOpen, Code, Palette, Zap, ArrowRight, ChevronRight, TrendingUp, Award, Globe, Heart, Brain, Rocket, Shield, Star, CheckCircle } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AnimatedCounter from '@/components/AnimatedCounter';
import AnimatedMetric from '@/components/AnimatedMetric';
import useInView from '@/hooks/useInView';

interface TimelineEvent {
  year: string;
  location: string;
  title: string;
  description: string;
}

interface KeyInsight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface UniqueValueMetric {
  value: number;
  label: string;
  description: string;
  suffix?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2008',
    location: 'San Diego, CA',
    title: 'US Navy Service',
    description: 'Served as a Nuclear Electrician, maintaining complex electrical systems and ensuring operational readiness.'
  },
  {
    year: '2014',
    location: 'San Diego, CA',
    title: 'Software Engineer',
    description: 'Transitioned to software development, focusing on web applications and database management.'
  },
  {
    year: '2018',
    location: 'Remote',
    title: 'Full-Stack Developer',
    description: 'Developed and deployed full-stack applications, emphasizing scalability and user experience.'
  },
  {
    year: 'Present',
    location: 'Global',
    title: 'Bridging Worlds',
    description: 'Combining technical expertise with creative vision to deliver innovative solutions for clients worldwide.'
  }
];

const keyInsights: KeyInsight[] = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Technical Mastery',
    description: 'Deep understanding of software architecture, cloud computing, and modern development practices.'
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'Creative Problem-Solving',
    description: 'Ability to approach challenges from multiple angles, finding innovative and effective solutions.'
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Strategic Execution',
    description: 'Focused on delivering results that align with business goals, ensuring projects are completed on time and within budget.'
  }
];

const uniqueValueMetrics: UniqueValueMetric[] = [
  {
    value: 15,
    label: 'Years of Experience',
    description: 'Proven track record in software development and technical leadership',
    suffix: '+'
  },
  {
    value: 50,
    label: 'Projects Completed',
    description: 'Successfully delivered solutions for diverse clients and industries',
    suffix: '+'
  },
  {
    value: 99,
    label: 'Client Satisfaction',
    description: 'Commitment to exceeding expectations and building long-term partnerships',
    suffix: '%'
  },
  {
    value: 3,
    label: 'Industry Awards',
    description: 'Recognized for innovation, design excellence, and technical achievement',
    suffix: '+'
  }
];

const Home = () => {
  const [heroInView, setHeroInView] = useState(false);
  const [bridgingWorldsInView, setBridgingWorldsInView] = useState(false);
  const [aboutMeInView, setAboutMeInView] = useState(false);
  const [projectsInView, setProjectsInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  const heroRef = useInView(setHeroInView);
  const bridgingWorldsRef = useInView(setBridgingWorldsInView);
  const aboutMeRef = useInView(setAboutMeInView);
  const projectsRef = useInView(setProjectsInView);
  const contactRef = useInView(setContactInView);

  useEffect(() => {
    document.title = "Home | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section ref={heroRef} className="py-32 md:py-48 bg-gradient-to-br from-blue-100 to-indigo-200">
        <div className="container-custom">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Crafting Digital Experiences
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-12">
              I am a full-stack developer passionate about creating innovative and user-centric web solutions.
              With a blend of technical expertise and creative vision, I bring ideas to life, delivering exceptional
              digital experiences.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Explore Projects</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridging Worlds Section */}
      <section ref={bridgingWorldsRef} className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={bridgingWorldsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bridging Worlds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where technical precision meets creative vision, I create solutions that transcend traditional boundaries
            </p>
          </motion.div>

          {/* Full-width Introductory Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bridgingWorldsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none shadow-2xl">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">The Intersection of Innovation</h3>
                <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
                  My unique perspective comes from standing at the crossroads of technology and creativity, 
                  military precision and artistic vision, strategic thinking and hands-on execution.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Code className="h-8 w-8 mx-auto mb-3 text-blue-200" />
                    <h4 className="font-semibold mb-2">Technical Mastery</h4>
                    <p className="text-sm opacity-80">15+ years of development expertise</p>
                  </div>
                  <div className="text-center">
                    <Palette className="h-8 w-8 mx-auto mb-3 text-purple-200" />
                    <h4 className="font-semibold mb-2">Creative Vision</h4>
                    <p className="text-sm opacity-80">Award-winning design solutions</p>
                  </div>
                  <div className="text-center">
                    <Shield className="h-8 w-8 mx-auto mb-3 text-indigo-200" />
                    <h4 className="font-semibold mb-2">Strategic Leadership</h4>
                    <p className="text-sm opacity-80">Military-trained precision</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Journey Timeline and Key Insights Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={bridgingWorldsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                My Journey
              </h3>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                      {index < timelineEvents.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-300 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {event.year}
                        </Badge>
                        <span className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {event.location}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Key Insights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={bridgingWorldsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Lightbulb className="h-6 w-6 mr-3 text-yellow-500" />
                Key Insights
              </h3>

              <div className="space-y-6">
                {keyInsights.map((insight, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="text-blue-600">
                        {insight.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{insight.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* "I am a translator" Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bridgingWorldsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <Card className="p-8 bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-none shadow-2xl">
              <div className="text-center max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-light italic mb-6 leading-relaxed">
                  "I am a translator between the language of possibility and the dialect of reality."
                </blockquote>
                <div className="w-24 h-1 bg-white/30 mx-auto mb-6"></div>
                <p className="text-lg opacity-90 leading-relaxed">
                  Every project is an opportunity to bridge the gap between what clients envision 
                  and what technology can deliver, creating solutions that exceed expectations while 
                  remaining grounded in practical execution.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Bridge Effect Card - Moved here after translator quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bridgingWorldsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-16"
          >
            <Card className="p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white border-none shadow-2xl overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="grid grid-cols-8 grid-rows-8 w-full h-full gap-1">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="bg-white/20 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mb-6">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">The Bridge Effect</h3>
                  <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                    How I transform complex challenges into elegant solutions through strategic synthesis
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Analytical Thinking</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Breaking down complex problems into manageable components while maintaining sight of the bigger picture
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Palette className="h-6 w-6 text-purple-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Creative Synthesis</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Combining technical constraints with creative possibilities to discover innovative pathways forward
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-green-400" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Practical Execution</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Translating visionary concepts into tangible results through methodical implementation
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h5 className="text-lg font-semibold mb-4 text-center">The Process in Action</h5>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-center flex-1">
                      <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">1</span>
                      </div>
                      <span className="text-gray-300">Understand</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                    <div className="text-center flex-1">
                      <div className="w-8 h-8 bg-purple-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">2</span>
                      </div>
                      <span className="text-gray-300">Synthesize</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                    <div className="text-center flex-1">
                      <div className="w-8 h-8 bg-green-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">3</span>
                      </div>
                      <span className="text-gray-300">Execute</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                    <div className="text-center flex-1">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">4</span>
                      </div>
                      <span className="text-gray-300">Deliver</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Unique Value Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bridgingWorldsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="grid md:grid-cols-4 gap-6">
              {uniqueValueMetrics.map((metric, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter 
                      end={metric.value} 
                      duration={2000}
                      delay={index * 200}
                      suffix={metric.suffix}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.label}</h4>
                  <p className="text-sm text-gray-600">{metric.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={aboutMeRef} className="py-20 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-100">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutMeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A brief overview of my background, skills, and passions that drive my work.
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={aboutMeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80"
                alt="About Me"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Right Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={aboutMeInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                My Story
              </h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                From my early days tinkering with computers to my current role as a full-stack developer,
                I've always been driven by a passion for technology and a desire to create.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                My background in the military instilled in me a strong work ethic, attention to detail,
                and the ability to perform under pressure. These qualities, combined with my technical skills,
                allow me to approach complex projects with confidence and deliver exceptional results.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I am committed to continuous learning and staying up-to-date with the latest industry trends.
                I believe that the best solutions are born from collaboration, and I thrive in team environments
                where I can share my knowledge and learn from others.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 bg-gradient-to-br from-yellow-50 via-lime-50 to-green-100">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of my most impactful projects, showcasing my skills and expertise.
            </p>
          </motion.div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="Project 1"
                  className="rounded-t-md h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Title 1</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A brief description of the project, highlighting its key features and technologies used.
                  </p>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </Card>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14f9da67817f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="Project 2"
                  className="rounded-t-md h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Title 2</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Another project description, showcasing different skills and technologies.
                  </p>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </Card>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e0e321c5d0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="Project 3"
                  className="rounded-t-md h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Title 3</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A third project example, demonstrating versatility and problem-solving abilities.
                  </p>
                  <Button variant="secondary">Learn More</Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-100">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's connect and discuss how I can help bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Message"
                  />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100 border-t">
        <div className="container-custom text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
