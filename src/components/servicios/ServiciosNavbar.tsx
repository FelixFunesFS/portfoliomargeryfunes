import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiciosNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Certificaciones', href: '#certificaciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-3 border-b border-border/50' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#inicio" className="flex items-center">
          <h1 className="text-2xl font-bold text-primary hover:text-primary-glow transition-colors">MF</h1>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-all hover:text-primary ${isScrolled ? 'text-foreground' : 'text-background'} rounded-sm px-2 py-1`}
            >
              {link.name}
            </a>
          ))}
          <Link to="/" className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <Globe className="w-4 h-4" />
            English
          </Link>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#contacto">Hablemos</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${isScrolled ? 'text-foreground hover:text-primary' : 'text-background hover:text-background/80'}`}
            aria-expanded={isMenuOpen}
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-background/95 backdrop-blur-md p-6 border-t border-border/50">
          <nav className="flex flex-col items-center gap-6 pt-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-foreground hover:text-primary transition-all rounded-sm px-3 py-2">
                {link.name}
              </a>
            ))}
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              <Globe className="w-4 h-4" /> English Site
            </Link>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full">
              <a href="#contacto" onClick={() => setIsMenuOpen(false)}>Hablemos</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default ServiciosNavbar;
