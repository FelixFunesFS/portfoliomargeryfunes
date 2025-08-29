
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 md:px-8 lg:px-16 bg-charcoal text-white">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          © {currentYear} Margery Funes. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#home" className="text-white/80 hover:text-purple transition-colors">Home</a>
          <Link to="/case-studies" className="text-white/80 hover:text-purple transition-colors">Case Studies</Link>
          <Link to="/insights" className="text-white/80 hover:text-purple transition-colors">Insights</Link>
          <a href="#about" className="text-white/80 hover:text-purple transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-purple transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
