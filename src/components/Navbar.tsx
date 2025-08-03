import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1 className="text-2xl font-bold text-gradient">MF</h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className="font-medium text-gradient hover:opacity-80 transition-all">
              {link.name}
            </a>)}
          <Button className="bg-gradient hover:opacity-90 transition-opacity">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-charcoal' : 'text-white'}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 top-16 z-40 bg-white/95 backdrop-blur-md p-6">
          <nav className="flex flex-col items-center gap-6 pt-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-gradient hover:opacity-80 transition-all">
                {link.name}
              </a>)}
            <Button className="bg-gradient hover:opacity-90 transition-opacity mt-4 w-full">
              Resume
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Navbar;