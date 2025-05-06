
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Layout, PenTool, Code, User, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'UI Design', level: 95 },
    { name: 'UX Research', level: 85 },
    { name: 'Interaction Design', level: 90 },
    { name: 'Figma', level: 98 },
    { name: 'HTML & CSS', level: 88 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
  ];
  
  const services = [
    {
      icon: <Layout className="w-10 h-10 text-purple" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that enhance user experience.',
    },
    {
      icon: <PenTool className="w-10 h-10 text-purple" />,
      title: 'Brand Identity',
      description: 'Developing cohesive brand identities that communicate your values and messaging.',
    },
    {
      icon: <Code className="w-10 h-10 text-purple" />,
      title: 'Frontend Development',
      description: 'Implementing responsive and performant web interfaces using modern technologies.',
    },
    {
      icon: <Users className="w-10 h-10 text-purple" />,
      title: 'User Research',
      description: 'Conducting research to understand user behavior and inform design decisions.',
    },
  ];

  return (
    <section id="about" className="section bg-accent/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate UX/UI designer with over 5 years of experience creating digital products that users love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="mb-4 text-muted-foreground">
              With a background in both design and development, I bring a holistic approach to creating 
              digital experiences. My journey began in visual design, but I quickly became fascinated 
              with the psychology behind user interactions.
            </p>
            <p className="mb-4 text-muted-foreground">
              I've collaborated with startups, agencies, and enterprise companies to design and develop 
              products that not only look beautiful but function intuitively and solve real user problems.
            </p>
            <p className="text-muted-foreground">
              My process involves deep research, iterative design, and continuous testing to ensure 
              the final product exceeds both user needs and business goals.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-8 text-center">Services I Offer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="glass border-none hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
