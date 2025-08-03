
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Map, Linkedin, Twitter, Dribbble, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here

    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-purple" />,
      label: 'Email',
      value: 'hello@jakeanderson.com',
      link: 'mailto:hello@jakeanderson.com',
    },
    {
      icon: <Phone className="w-5 h-5 text-purple" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <Map className="w-5 h-5 text-purple" />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: '#',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      link: '#',
    },
    {
      icon: <Dribbble className="w-5 h-5" />,
      label: 'Dribbble',
      link: '#',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="section bg-gradient">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass p-4 sm:p-6 lg:p-8 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-white/20 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full sm:w-auto bg-white text-purple hover:bg-white/90 transition-colors min-h-[44px]"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="glass p-4 sm:p-6 lg:p-8 rounded-2xl mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/20 p-2 rounded-full">{item.icon}</div>
                    <div>
                      <p className="text-white/80 text-sm">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-white hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass p-4 sm:p-6 lg:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Follow Me</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-2.5 sm:p-3 rounded-full text-white hover:bg-white/30 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
