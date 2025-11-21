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
    href: '/'
  }, {
    name: 'Case Studies',
    href: '/case-studies'
  }, {
    name: 'Developer Portfolio',
    href: '/developer'
  }, {
    name: 'Insights',
    href: '/insights'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-3 border-b border-border/50' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary hover:text-primary-light transition-colors">MF</h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className={`font-medium transition-all hover:text-primary ${isScrolled ? 'text-foreground' : 'text-background'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-2 py-1`}>
              {link.name}
            </a>)}
          <Button className="bg-primary text-primary-foreground hover:bg-primary-light focus-visible:ring-offset-2">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-background hover:text-background/80'} focus-visible:ring-offset-2`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md p-6 border-t border-border/50">
          <nav className="flex flex-col items-center gap-6 pt-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-foreground hover:text-primary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm px-3 py-2">
                {link.name}
              </a>)}
            <Button className="bg-primary text-primary-foreground hover:bg-primary-light mt-4 w-full focus-visible:ring-offset-2">
              Resume
            </Button>
          </nav>
        </div>}
    </header>;
};
export default Navbar;