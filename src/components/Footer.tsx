
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 md:px-8 lg:px-16 bg-charcoal text-white">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          © {currentYear} Jake Anderson. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#home" className="text-white/80 hover:text-purple transition-colors">Home</a>
          <a href="#projects" className="text-white/80 hover:text-purple transition-colors">Projects</a>
          <a href="#about" className="text-white/80 hover:text-purple transition-colors">About</a>
          <a href="#contact" className="text-white/80 hover:text-purple transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
