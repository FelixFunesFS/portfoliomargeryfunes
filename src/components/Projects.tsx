
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Layout, PenTool, Smartphone, Code, FileText } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'All', icon: <Layout size={18} /> },
    { id: 'ui', label: 'UI Design', icon: <PenTool size={18} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={18} /> },
    { id: 'web', label: 'Web', icon: <Code size={18} /> },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'Financial App Redesign',
      description: 'Complete redesign of a personal finance tracking app with improved usability.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
      tags: ['UI Design', 'Mobile', 'Fintech'],
      category: 'ui',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'Modern e-commerce platform with a focus on product discovery and checkout experience.',
      image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80',
      tags: ['UI/UX', 'Web', 'E-commerce'],
      category: 'web',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 3,
      title: 'Travel Companion App',
      description: 'Mobile app that helps travelers plan and navigate their journeys seamlessly.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80',
      tags: ['Mobile', 'UI Design', 'Maps'],
      category: 'mobile',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 4,
      title: 'Health & Fitness Dashboard',
      description: 'Data visualization dashboard for tracking personal health and fitness metrics.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80',
      tags: ['UI/UX', 'Web', 'Dashboard'],
      category: 'web',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 5,
      title: 'Smart Home Control Interface',
      description: 'User interface for controlling connected home devices with intuitive controls.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
      tags: ['UI Design', 'IoT', 'Mobile'],
      category: 'ui',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
    {
      id: 6,
      title: 'Educational Platform',
      description: 'Learning management system designed for both educators and students.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80',
      tags: ['Web', 'UI/UX', 'Education'],
      category: 'web',
      liveUrl: '#',
      caseStudyUrl: '#',
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my best work across UI/UX design, mobile applications, and web development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                filter === category.id ? 'bg-purple hover:bg-purple-dark' : ''
              }`}
              onClick={() => setFilter(category.id)}
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              caseStudyUrl={project.caseStudyUrl}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/case-studies">
            <Button className="bg-purple hover:bg-purple-light transition-colors px-8 py-6 flex items-center gap-2">
              <FileText size={20} />
              View Detailed Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
