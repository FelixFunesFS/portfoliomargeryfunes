
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 md:px-8 lg:px-16 bg-charcoal text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:felix.funes@example.com" 
                className="flex items-center gap-2 text-white/80 hover:text-purple transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>felix.funes@example.com</span>
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Charleston, SC</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="space-y-3">
              <a 
                href="https://www.linkedin.com/in/felix-funes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-purple transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn Profile</span>
              </a>
              <a 
                href="https://github.com/felix-funes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-purple transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>GitHub Portfolio</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigate</h3>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-white/80 hover:text-purple transition-colors">Home</a>
              <a href="#about" className="text-white/80 hover:text-purple transition-colors">About</a>
              <Link to="/case-studies" className="text-white/80 hover:text-purple transition-colors">Case Studies</Link>
              <Link to="/insights" className="text-white/80 hover:text-purple transition-colors">Insights</Link>
              <a href="#contact" className="text-white/80 hover:text-purple transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Felix M. Funes. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            UX Engineer & Systems Designer | Charleston, SC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
