import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Search, 
  Users, 
  Target, 
  BarChart3, 
  Lightbulb, 
  Database,
  PenTool,
  Zap,
  Clock,
  CheckCircle,
  Download,
  Code,
  Palette,
  Layout,
  Navigation,
  Image,
  FileText,
  MousePointer,
  Shield,
  Server,
  Key,
  Globe,
  Monitor,
  Cloud,
  Activity,
  Settings
} from 'lucide-react';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import circuitBoard from '@/assets/circuit-board.jpg';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Insights = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCodeVariant, setSelectedCodeVariant] = useState<any | null>(null);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const heroSectionVariants = [
    {
      title: "Full-Width Background Video/Image",
      description: "Immersive hero with stunning background media and elegant overlay content",
      characteristics: ["Cinematic background", "Overlay text with blur backdrop", "Parallax scrolling", "Auto-playing video"],
      useCases: ["Brand storytelling", "Creative portfolios", "Event promotion", "Premium experiences"],
      stockImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="relative w-full h-72 overflow-hidden rounded-lg group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=2071&auto=format&fit=crop" 
            alt="Mountain landscape"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white transform transition-all duration-500 group-hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Epic Adventures Await</h3>
              <p className="text-sm opacity-90 mb-3">Discover breathtaking experiences</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300 text-xs">
                Explore Now
              </button>
            </div>
          </div>
          <div className="absolute bottom-2 left-2 text-white text-xs opacity-75">
            🎥 Auto-playing background video
          </div>
        </div>
      ),
      codePreview: `<div className="relative min-h-screen overflow-hidden">
  <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
    <source src="hero-video.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
    <div className="text-center text-white max-w-4xl px-4">
      <h1 className="text-6xl font-bold mb-6 animate-fade-in">Epic Adventures Await</h1>
      <p className="text-xl opacity-90 mb-8">Discover breathtaking experiences around the world</p>
      <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/30 transition-all duration-300">
        Explore Now
      </button>
    </div>
  </div>
</div>`,
      mockup: "bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500"
    },
    {
      title: "Split Layout Design",
      description: "Perfectly balanced layout showcasing content and technology harmoniously",
      characteristics: ["50/50 split design", "Professional imagery", "Responsive stacking", "Clean typography"],
      useCases: ["SaaS platforms", "Tech companies", "Professional services", "B2B websites"],
      stockImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-72 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex h-full">
            <div className="flex-1 p-4 flex flex-col justify-center text-white">
              <h3 className="text-lg font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2">
                Revolutionary Code Platform
              </h3>
              <p className="text-xs opacity-90 mb-3">Build faster with intelligent development tools</p>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-blue-600 rounded text-xs hover:bg-blue-500 transition-colors">
                  Get Started
                </button>
                <button className="px-3 py-1 border border-white/30 rounded text-xs hover:bg-white/10 transition-colors">
                  Demo
                </button>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
                alt="Programming interface"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/50"></div>
            </div>
          </div>
        </div>
      ),
      codePreview: `<div className="min-h-screen flex items-center">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Revolutionary Code Platform
        </h1>
        <p className="text-xl text-gray-600">
          Build faster with intelligent development tools and streamlined workflows
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get Started
          </button>
          <button className="px-8 py-4 border border-gray-300 rounded-lg hover:bg-gray-50">
            View Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <img src="platform-demo.jpg" alt="Platform Demo" className="rounded-lg shadow-2xl" />
      </div>
    </div>
  </div>
</div>`,
      mockup: "bg-gradient-to-r from-slate-100 to-slate-200 border-l-4 border-primary"
    },
    {
      title: "Minimalist Typography-Focused",
      description: "Elegant design emphasizing beautiful typography and thoughtful whitespace",
      characteristics: ["Large, expressive typography", "Minimal visual elements", "Strategic whitespace", "Elegant simplicity"],
      useCases: ["Editorial sites", "Personal brands", "Blogs", "Content-focused sites"],
      stockImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-72 bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 flex flex-col justify-center group cursor-pointer border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="text-center transform transition-all duration-500 group-hover:scale-105">
            <h3 className="text-3xl font-light text-gray-900 mb-1 tracking-tight">
              Simple.
            </h3>
            <h4 className="text-xl font-medium text-gray-700 mb-3">
              Beautiful.
            </h4>
            <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
              Clean design that speaks volumes through thoughtful typography
            </p>
            <div className="mt-3 w-8 h-px bg-gray-300 mx-auto transform transition-all duration-300 group-hover:w-16"></div>
          </div>
        </div>
      ),
      codePreview: `<div className="min-h-screen flex items-center justify-center bg-gray-50">
  <div className="text-center max-w-4xl px-4">
    <h1 className="text-8xl font-light text-gray-900 mb-4 tracking-tight">
      Simple.
    </h1>
    <h2 className="text-5xl font-medium text-gray-700 mb-8">
      Beautiful.
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Clean design that speaks volumes through thoughtful typography and purposeful spacing
    </p>
    <div className="mt-12 w-24 h-px bg-gray-300 mx-auto"></div>
  </div>
</div>`,
      mockup: "bg-white border border-gray-200 relative"
    },
    {
      title: "Interactive Carousel/Slider",
      description: "Dynamic hero showcasing multiple features with smooth transitions and navigation",
      characteristics: ["Multiple content slides", "Smooth transitions", "Navigation controls", "Auto-play with pause"],
      useCases: ["E-commerce", "Multi-product showcase", "Portfolio galleries", "Feature highlights"],
      stockImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-72 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
            alt="Colorful code"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-lg font-bold mb-2 transform transition-transform duration-300 group-hover:scale-105">
                Slide 1: Innovation Hub
              </h3>
              <p className="text-xs opacity-90 mb-3">Cutting-edge development environment</p>
            </div>
          </div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer text-lg">
            ‹
          </div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white opacity-75 hover:opacity-100 transition-opacity cursor-pointer text-lg">
            ›
          </div>
        </div>
      ),
      codePreview: `<div className="relative min-h-screen overflow-hidden">
  <div className="carousel-container">
    <div className="slide active">
      <img src="slide1.jpg" className="slide-bg" />
      <div className="slide-content">
        <h1>Innovation Hub</h1>
        <p>Cutting-edge development environment</p>
        <button>Explore Features</button>
      </div>
    </div>
  </div>
  <div className="carousel-navigation">
    <button className="nav-dot active"></button>
    <button className="nav-dot"></button>
    <button className="nav-dot"></button>
  </div>
  <button className="carousel-prev">‹</button>
  <button className="carousel-next">›</button>
</div>`,
      mockup: "bg-gradient-to-r from-red-400 to-pink-400 relative"
    },
    {
      title: "Geometric/Abstract Patterns",
      description: "Modern tech-inspired design with dynamic geometric elements and circuit aesthetics",
      characteristics: ["Geometric animations", "Circuit board patterns", "Modern tech aesthetic", "Dynamic shapes"],
      useCases: ["Tech startups", "AI companies", "Design agencies", "Innovative brands"],
      stockImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-72 bg-gradient-to-br from-gray-900 to-blue-900 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            alt="Circuit board"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0">
            <div className="absolute top-6 left-6 w-12 h-12 border-2 border-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-purple-500/30 transform rotate-45 animate-bounce"></div>
            <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-green-400/50 rounded-full transform transition-transform duration-1000 group-hover:scale-150"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white transform transition-all duration-500 group-hover:scale-105">
              <h3 className="text-lg font-bold mb-2 tracking-wide">
                NEURAL NETWORK
              </h3>
              <p className="text-xs opacity-90 font-mono">AI • INNOVATION • FUTURE</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `<div className="relative min-h-screen bg-gray-900 overflow-hidden">
  <div className="geometric-bg">
    <div className="floating-shape circle"></div>
    <div className="floating-shape triangle"></div>
    <div className="floating-shape hexagon"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold tracking-wide mb-4">
        NEURAL NETWORK
      </h1>
      <p className="text-xl font-mono opacity-90 mb-8">
        AI • INNOVATION • FUTURE
      </p>
      <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
        INITIALIZE
      </button>
    </div>
  </div>
</div>`,
      mockup: "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden"
    },
    {
      title: "Interactive AI Experience",
      description: "Futuristic hero with AI elements, animations, and engaging user interactions",
      characteristics: ["AI-themed visuals", "Hover animations", "Interactive elements", "Futuristic design"],
      useCases: ["AI companies", "Robotics", "Gaming sites", "Tech innovation"],
      stockImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-72 bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg overflow-hidden relative group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img 
            src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
            alt="White robot"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white transform transition-all duration-500 group-hover:scale-105">
              <h3 className="text-lg font-bold mb-2 animate-pulse">
                AI REVOLUTION
              </h3>
              <p className="text-xs opacity-90 mb-3">Experience the future of intelligence</p>
              <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 text-xs">
                Activate AI
              </button>
            </div>
          </div>
          <div className="absolute top-3 right-3 flex gap-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping animation-delay-200"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping animation-delay-500"></div>
          </div>
        </div>
      ),
      codePreview: `<div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
  <div className="ai-particles">
    <div className="particle"></div>
    <div className="particle"></div>
    <div className="particle"></div>
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        AI REVOLUTION
      </h1>
      <p className="text-xl opacity-90 mb-8">Experience the future of artificial intelligence</p>
      <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105">
        <span className="group-hover:animate-pulse">Activate AI</span>
      </button>
    </div>
  </div>
</div>`,
      mockup: "bg-gray-800 border border-cyan-400 relative"
    }
  ];

  const navigationVariants = [
    {
      title: "Horizontal Menu Bar",
      description: "Classic desktop navigation with dropdown menus and hover effects",
      characteristics: ["Horizontal layout", "Dropdown menus", "Hover states", "Desktop-first"],
      useCases: ["Corporate websites", "Professional services", "E-commerce", "Business portals"],
      stockImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer">
          <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-8">
              <div className="text-white font-bold text-lg">BRANDNAME</div>
              <nav className="hidden md:flex gap-6">
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <div key={item} className="relative group/item">
                    <button className="text-white hover:text-blue-300 transition-colors duration-200 py-2 px-1">
                      {item}
                    </button>
                    {item === 'Services' && (
                      <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 group-hover/item:opacity-100 transform scale-95 group-hover/item:scale-100 transition-all duration-200 z-10">
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Web Development</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Mobile Apps</a>
                        <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Consulting</a>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm">
              Get Started
            </button>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Classic Horizontal Navigation</h3>
              <p className="text-sm text-gray-600">Professional, familiar, desktop-optimized</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `<nav className="bg-slate-900 px-6 py-4">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-8">
      <div className="text-white font-bold text-xl">BRANDNAME</div>
      <div className="hidden md:flex gap-6">
        <a href="#" className="text-white hover:text-blue-300 transition-colors">Home</a>
        <div className="relative group">
          <button className="text-white hover:text-blue-300 transition-colors">
            Services
          </button>
          <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 opacity-0 group-hover:opacity-100 transition-all">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Development</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mobile Apps</a>
          </div>
        </div>
        <a href="#" className="text-white hover:text-blue-300 transition-colors">About</a>
        <a href="#" className="text-white hover:text-blue-300 transition-colors">Contact</a>
      </div>
    </div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
</nav>`,
      mockup: "bg-gradient-to-r from-slate-100 to-slate-200 border-l-4 border-primary"
    },
    {
      title: "Mobile Hamburger Menu",
      description: "Responsive navigation with slide-out drawer and smooth animations",
      characteristics: ["Mobile-first design", "Hamburger icon animation", "Slide-out drawer", "Touch-friendly"],
      useCases: ["Mobile applications", "Responsive websites", "Progressive web apps", "Touch interfaces"],
      stockImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="bg-indigo-600 px-4 py-3 flex items-center justify-between">
            <div className="text-white font-bold text-lg">MobileApp</div>
            <button className="text-white hover:bg-indigo-700 p-2 rounded transition-colors group">
              <div className="w-6 h-5 relative">
                <span className="block w-full h-0.5 bg-white mb-1 transition-transform group-hover:rotate-45 group-hover:translate-y-2"></span>
                <span className="block w-full h-0.5 bg-white mb-1 transition-opacity group-hover:opacity-0"></span>
                <span className="block w-full h-0.5 bg-white transition-transform group-hover:-rotate-45 group-hover:-translate-y-2"></span>
              </div>
            </button>
          </div>
          <div className="absolute top-14 right-0 w-64 h-48 bg-white shadow-xl transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-10">
            <div className="p-4 space-y-3">
              {['Dashboard', 'Profile', 'Settings', 'Help', 'Logout'].map((item, index) => (
                <a key={item} href="#" className="block py-2 px-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Mobile Hamburger Menu</h3>
              <p className="text-sm text-gray-600">Touch-optimized, space-efficient navigation</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `<header className="bg-indigo-600 px-4 py-3 flex items-center justify-between">
  <div className="text-white font-bold text-lg">MobileApp</div>
  <button onClick={toggleMenu} className="text-white p-2 rounded">
    <div className="w-6 h-5 relative">
      <span className={\`block w-full h-0.5 bg-white mb-1 transition-transform \${isOpen ? 'rotate-45 translate-y-2' : ''}\`}></span>
      <span className={\`block w-full h-0.5 bg-white mb-1 transition-opacity \${isOpen ? 'opacity-0' : ''}\`}></span>
      <span className={\`block w-full h-0.5 bg-white transition-transform \${isOpen ? '-rotate-45 -translate-y-2' : ''}\`}></span>
    </div>
  </button>
</header>

<div className={\`fixed top-14 right-0 w-64 h-screen bg-white shadow-xl transform transition-transform duration-300 z-50 \${isOpen ? 'translate-x-0' : 'translate-x-full'}\`}>
  <nav className="p-4 space-y-3">
    {menuItems.map((item) => (
      <a key={item} href="#" className="block py-2 px-3 text-gray-700 hover:bg-indigo-50 rounded">
        {item}
      </a>
    ))}
  </nav>
</div>`,
      mockup: "bg-gradient-to-r from-indigo-100 to-purple-100 border-l-4 border-indigo-500"
    },
    {
      title: "Fixed/Sticky Navigation",
      description: "Navigation that stays visible during scroll with dynamic styling",
      characteristics: ["Fixed positioning", "Scroll detection", "Dynamic styling", "Performance optimized"],
      useCases: ["Long-form content", "Single page applications", "Documentation sites", "Blogs"],
      stockImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-gray-900 font-bold text-lg">StickyNav</div>
                <nav className="hidden md:flex gap-4">
                  {['Home', 'Features', 'Pricing', 'About'].map((item) => (
                    <a key={item} href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors text-sm font-medium">
                Sign Up
              </button>
            </div>
          </div>
          <div className="p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="w-full h-2 bg-gray-200 rounded"></div>
            <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
            <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Sticky Navigation</h3>
              <p className="text-sm text-gray-600">Always accessible, scroll-aware navigation</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `import { useState, useEffect } from 'react';

function StickyNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={\`fixed top-0 w-full z-50 transition-all duration-300 \${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }\`}>
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg">StickyNav</div>
        <div className="hidden md:flex gap-4">
          {['Home', 'Features', 'Pricing'].map((item) => (
            <a key={item} href="#" className="hover:text-gray-900 transition-colors">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </nav>
  );
}`,
      mockup: "bg-gradient-to-r from-green-100 to-emerald-100 border-l-4 border-green-500"
    },
    {
      title: "Mega Menu",
      description: "Multi-column dropdown navigation with rich content and imagery",
      characteristics: ["Multi-column layout", "Rich content", "Category organization", "Visual hierarchy"],
      useCases: ["E-commerce sites", "Large content catalogs", "Enterprise applications", "Product showcases"],
      stockImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer">
          <div className="bg-gray-900 px-6 py-4 flex items-center gap-8">
            <div className="text-white font-bold text-lg">MEGASTORE</div>
            <nav className="hidden md:flex gap-6">
              {['Products', 'Solutions', 'Resources', 'About'].map((item, index) => (
                <div key={item} className="relative group/item">
                  <button className="text-white hover:text-blue-300 transition-colors duration-200 py-2">
                    {item}
                  </button>
                  {item === 'Products' && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-6 w-96 opacity-0 group-hover/item:opacity-100 transform scale-95 group-hover/item:scale-100 transition-all duration-300 z-10">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
                          <div className="space-y-2">
                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Electronics</a>
                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Clothing</a>
                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Home & Garden</a>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Featured</h4>
                          <div className="space-y-2">
                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">New Arrivals</a>
                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Best Sellers</a>
                            <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Sale Items</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="p-6 bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Mega Menu Navigation</h3>
              <p className="text-sm text-gray-600">Organized, content-rich dropdown menus</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `<nav className="bg-gray-900 px-6 py-4">
  <div className="flex items-center gap-8">
    <div className="text-white font-bold text-lg">MEGASTORE</div>
    <div className="hidden md:flex gap-6">
      <div className="relative group">
        <button className="text-white hover:text-blue-300 transition-colors">
          Products
        </button>
        <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg p-6 w-96 opacity-0 group-hover:opacity-100 transition-all">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Electronics</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Clothing</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Home & Garden</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Featured</h4>
              <div className="space-y-2">
                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">New Arrivals</a>
                <a href="#" className="block text-sm text-gray-600 hover:text-gray-900">Best Sellers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`,
      mockup: "bg-gradient-to-r from-blue-100 to-cyan-100 border-l-4 border-blue-500"
    },
    {
      title: "Breadcrumb Navigation",
      description: "Hierarchical navigation showing user location with interactive segments",
      characteristics: ["Hierarchical structure", "Clickable segments", "Path indication", "Responsive design"],
      useCases: ["E-commerce navigation", "Documentation sites", "File systems", "Multi-level applications"],
      stockImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Home</a>
              <span className="text-gray-400">/</span>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Electronics</a>
              <span className="text-gray-400">/</span>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Laptops</a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-700 font-medium">MacBook Pro</span>
            </nav>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">MacBook Pro 16"</h3>
                <p className="text-sm text-gray-600 mt-1">Powerful laptop for professionals</p>
                <p className="text-lg font-bold text-green-600 mt-2">$2,399</p>
              </div>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Breadcrumb Navigation</h3>
              <p className="text-sm text-gray-600">Clear path indication and easy backtracking</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `function BreadcrumbNavigation({ path }) {
  const pathSegments = path.split('/').filter(Boolean);
  
  return (
    <nav className="bg-gray-50 border-b border-gray-200 px-6 py-3">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <a href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
            Home
          </a>
        </li>
        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          
          return (
            <li key={segment} className="flex items-center space-x-2">
              <span className="text-gray-400">/</span>
              {isLast ? (
                <span className="text-gray-700 font-medium capitalize">
                  {segment.replace('-', ' ')}
                </span>
              ) : (
                <a href={href} className="text-blue-600 hover:text-blue-800 transition-colors capitalize">
                  {segment.replace('-', ' ')}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}`,
      mockup: "bg-gradient-to-r from-amber-100 to-orange-100 border-l-4 border-amber-500"
    },
    {
      title: "Sidebar Navigation",
      description: "Vertical navigation with collapsible sections and hierarchical structure",
      characteristics: ["Vertical layout", "Collapsible sections", "Nested navigation", "Icon support"],
      useCases: ["Admin dashboards", "Application interfaces", "Documentation sites", "Complex workflows"],
      stockImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop",
      interactive: true,
      preview: (
        <div className="w-full h-64 bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="w-64 bg-gray-900 p-4">
            <div className="text-white font-bold text-lg mb-6">Dashboard</div>
            <nav className="space-y-2">
              {[
                { name: 'Overview', icon: '📊', active: true },
                { name: 'Analytics', icon: '📈', active: false },
                { name: 'Settings', icon: '⚙️', active: false, hasSubmenu: true },
                { name: 'Users', icon: '👥', active: false },
                { name: 'Reports', icon: '📄', active: false }
              ].map((item, index) => (
                <div key={item.name}>
                  <a 
                    href="#" 
                    className={`flex items-center gap-3 px-3 py-2 rounded transition-colors ${
                      item.active 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                    {item.hasSubmenu && (
                      <span className="ml-auto text-xs">▼</span>
                    )}
                  </a>
                  {item.hasSubmenu && item.name === 'Settings' && (
                    <div className="ml-6 mt-2 space-y-1">
                      <a href="#" className="block px-3 py-1 text-xs text-gray-400 hover:text-gray-200">Profile</a>
                      <a href="#" className="block px-3 py-1 text-xs text-gray-400 hover:text-gray-200">Security</a>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
          <div className="flex-1 p-6 bg-gray-50">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Sidebar Navigation</h3>
              <p className="text-sm text-gray-600">Organized, hierarchical menu structure</p>
            </div>
          </div>
        </div>
      ),
      codePreview: `function SidebarNavigation() {
  const [expandedItems, setExpandedItems] = useState([]);
  
  const menuItems = [
    { name: 'Overview', icon: '📊', path: '/overview' },
    { name: 'Analytics', icon: '📈', path: '/analytics' },
    { 
      name: 'Settings', 
      icon: '⚙️', 
      submenu: [
        { name: 'Profile', path: '/settings/profile' },
        { name: 'Security', path: '/settings/security' }
      ]
    },
    { name: 'Users', icon: '👥', path: '/users' },
    { name: 'Reports', icon: '📄', path: '/reports' }
  ];

  return (
    <aside className="w-64 bg-gray-900 p-4">
      <div className="text-white font-bold text-lg mb-6">Dashboard</div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <div key={item.name}>
            <a
              href={item.path || '#'}
              className="flex items-center gap-3 px-3 py-2 rounded text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
              onClick={() => item.submenu && toggleExpanded(item.name)}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
              {item.submenu && <span className="ml-auto text-xs">▼</span>}
            </a>
            {item.submenu && expandedItems.includes(item.name) && (
              <div className="ml-6 mt-2 space-y-1">
                {item.submenu.map((subItem) => (
                  <a key={subItem.name} href={subItem.path} className="block px-3 py-1 text-xs text-gray-400 hover:text-gray-200">
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}`,
      mockup: "bg-gradient-to-r from-gray-100 to-slate-100 border-l-4 border-gray-500"
    }
  ];

  const researchToolkit = [
    {
      phase: "Discover",
      duration: "Week 1", 
      icon: Search,
      insight: "What are users really trying to accomplish, and what's blocking them?",
      methods: [
        "Stakeholder interviews",
        "User journey mapping", 
        "Competitive analysis",
        "Data analysis review"
      ],
      deliverables: [
        "Research plan",
        "User personas", 
        "Problem statements",
        "Opportunity matrix"
      ]
    },
    {
      phase: "Define",
      duration: "Week 2",
      icon: Target,
      insight: "How can we frame the problem to create the most impactful solution?",
      methods: [
        "Affinity mapping",
        "How Might We sessions",
        "Priority matrix creation",
        "Success metrics definition"
      ],
      deliverables: [
        "Problem definition",
        "Design requirements",
        "Success criteria", 
        "Scope boundaries"
      ]
    },
    {
      phase: "Design", 
      duration: "Week 3",
      icon: PenTool,
      insight: "What interaction patterns will feel most natural and effective for users?",
      methods: [
        "Rapid prototyping",
        "Design system integration",
        "Accessibility review",
        "Technical feasibility check"
      ],
      deliverables: [
        "Low-fi wireframes",
        "Interactive prototypes",
        "Design specifications",
        "Component library"
      ]
    },
    {
      phase: "Validate",
      duration: "Week 4",
      icon: CheckCircle,
      insight: "Does our solution actually solve the problem better than existing approaches?",
      methods: [
        "Usability testing",
        "A/B testing",
        "Performance benchmarking",
        "Accessibility testing"
      ],
      deliverables: [
        "Test results",
        "Iteration recommendations",
        "Launch readiness report",
        "Performance metrics"
      ]
    }
  ];

  const researchMethods = [
    {
      title: "Military-Grade User Research",
      description: "Systematic observation and analysis techniques adapted from intelligence gathering",
      icon: <Search className="w-6 h-6" />,
      techniques: ["Structured interviews", "Behavioral observation", "Task analysis", "Performance metrics"]
    },
    {
      title: "Systems Analysis Approach", 
      description: "Understanding complex interconnections between users, technology, and business goals",
      icon: <Database className="w-6 h-6" />,
      techniques: ["Process mapping", "Stakeholder analysis", "Risk assessment", "Impact analysis"]
    },
    {
      title: "Agile Research Methods",
      description: "Rapid, iterative research cycles that adapt to changing requirements",
      icon: <Zap className="w-6 h-6" />,
      techniques: ["Sprint planning", "Daily standups", "Retrospectives", "Continuous testing"]
    },
    {
      title: "Data-Driven Insights",
      description: "Combining qualitative insights with quantitative validation",
      icon: <BarChart3 className="w-6 h-6" />,
      techniques: ["Analytics review", "A/B testing", "Heat mapping", "Conversion analysis"]
    }
  ];

  const skillsArsenal = [
    {
      category: "Research & Analysis",
      skills: ["User Interviews", "Usability Testing", "Data Analysis", "Competitive Research", "Journey Mapping"],
      icon: <Search className="w-8 h-8" />
    },
    {
      category: "Design & Prototyping", 
      skills: ["Wireframing", "Prototyping", "Design Systems", "Interaction Design", "Visual Design"],
      icon: <PenTool className="w-8 h-8" />
    },
    {
      category: "Collaboration & Communication",
      skills: ["Stakeholder Management", "Workshop Facilitation", "Presentation Design", "Technical Documentation"],
      icon: <Users className="w-8 h-8" />
    },
    {
      category: "Technical Implementation",
      skills: ["Front-end Development", "System Architecture", "Performance Optimization", "Quality Assurance"],
      icon: <Database className="w-8 h-8" />
    }
  ];

  const aiCollaborationComponents = [
    {
      title: "Hero Sections",
      variants: 6,
      icon: <Layout className="w-6 h-6" />,
      description: "Full-width backgrounds, split layouts, minimalist typography, carousels, geometric patterns, interactive elements",
      keywords: "immersive, cinematic, brand-focused, balanced, structured"
    },
    {
      title: "Navigation",
      variants: 6,
      icon: <Navigation className="w-6 h-6" />,
      description: "Horizontal menus, hamburger menus, fixed navigation, mega menus, breadcrumbs, sidebar navigation",
      keywords: "classic, mobile-first, persistent, comprehensive, contextual"
    },
    {
      title: "Image Galleries",
      variants: 6,
      icon: <Image className="w-6 h-6" />,
      description: "Grid layouts, masonry, lightbox modals, thumbnail carousels, before/after sliders, parallax scrolling",
      keywords: "organized, dynamic, immersive, comparative, depth-creating"
    },
    {
      title: "Forms",
      variants: 6,
      icon: <FileText className="w-6 h-6" />,
      description: "Standard labeled fields, floating labels, Material Design, card-based forms, multi-step, validation states",
      keywords: "accessible, modern, interactive, segmented, feedback-oriented"
    },
    {
      title: "Footers",
      variants: 5,
      icon: <Target className="w-6 h-6" />,
      description: "Minimalist copyright, detailed multi-column, fat footer sitemaps, newsletter signups, back-to-top buttons",
      keywords: "unobtrusive, comprehensive, exhaustive, engagement-focused"
    },
    {
      title: "CTA Buttons",
      variants: 5,
      icon: <MousePointer className="w-6 h-6" />,
      description: "Primary/secondary/tertiary hierarchy, ghost buttons, icon buttons, hover states, multiple sizes",
      keywords: "hierarchical, subtle, compact, interactive, scalable"
    },
    {
      title: "Typography",
      variants: 5,
      icon: <Code className="w-6 h-6" />,
      description: "Heading hierarchy (H1-H6), paragraph text, blockquotes, lists, link states",
      keywords: "hierarchical, readable, emphatic, structured, navigational"
    },
    {
      title: "Card Components",
      variants: 5,
      icon: <Palette className="w-6 h-6" />,
      description: "Basic info cards, product cards, article cards, user profiles, interactive hover reveals",
      keywords: "modular, conversion-focused, content-oriented, personal, engaging"
    }
  ];

  const backendComponents = [
    {
      title: "Authentication & Authorization",
      icon: <Key className="w-6 h-6" />,
      description: "JWT tokens, OAuth2, RBAC, session management, password policies",
      technologies: ["JWT", "OAuth2", "RBAC", "Sessions"],
      keywords: "secure, scalable, standards-compliant"
    },
    {
      title: "API Design & Development",
      icon: <Globe className="w-6 h-6" />,
      description: "RESTful APIs, GraphQL, documentation, versioning, rate limiting",
      technologies: ["REST", "GraphQL", "OpenAPI", "Swagger"],
      keywords: "scalable, documented, efficient"
    },
    {
      title: "Database Architecture",
      icon: <Database className="w-6 h-6" />,
      description: "Schema design, optimization, migrations, indexing, relationships",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
      keywords: "performant, normalized, scalable"
    },
    {
      title: "Real-time Features",
      icon: <Zap className="w-6 h-6" />,
      description: "WebSockets, push notifications, live updates, event streaming",
      technologies: ["WebSockets", "Socket.io", "SSE", "WebRTC"],
      keywords: "responsive, real-time, interactive"
    },
    {
      title: "Security & Validation",
      icon: <Shield className="w-6 h-6" />,
      description: "Input sanitization, CORS, rate limiting, OWASP compliance",
      technologies: ["Helmet", "CORS", "Joi", "OWASP"],
      keywords: "secure, validated, protected"
    },
    {
      title: "Deployment & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      description: "Cloud providers, containers, CI/CD, serverless functions",
      technologies: ["AWS", "Docker", "GitHub Actions", "Vercel"],
      keywords: "automated, scalable, reliable"
    },
    {
      title: "Monitoring & Analytics",
      icon: <Activity className="w-6 h-6" />,
      description: "Logging, error tracking, performance monitoring, metrics",
      technologies: ["Winston", "Sentry", "DataDog", "New Relic"],
      keywords: "observable, measurable, actionable"
    },
    {
      title: "Integration Services",
      icon: <Settings className="w-6 h-6" />,
      description: "Payment gateways, third-party APIs, file storage, email services",
      technologies: ["Stripe", "AWS S3", "SendGrid", "Twilio"],
      keywords: "connected, extensible, reliable"
    }
  ];

  const handleDownloadStyleGuide = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Web Design Style Guide for AI Full-Stack Developer Collaboration",
                  bold: true,
                  size: 32,
                }),
              ],
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "A Collaborative Reference for UX Design & AI-Powered Development",
                  italics: true,
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 600 }
            }),

            // Objective Section
            new Paragraph({
              children: [new TextRun({ text: "Objective", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "This document serves as a comprehensive visual and descriptive guide to diverse web design styles for key components. It's intended to facilitate efficient and precise collaboration between UX designers and AI Full-Stack Developers, ensuring consistent design language and accelerating the iteration process."
                })
              ],
              spacing: { after: 300 }
            }),

            // Target Audience
            new Paragraph({
              children: [new TextRun({ text: "Target Audience", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• UX Designers: For inspiration, establishing visual direction, and communicating design intent." })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• AI Full-Stack Developers: For understanding design characteristics, translating styles into code, and generating appropriate web components." })],
              spacing: { after: 400 }
            }),

            // Component Sections
            ...aiCollaborationComponents.map(component => [
              new Paragraph({
                children: [new TextRun({ text: `${component.title} (${component.variants} Variants)`, bold: true, size: 20 })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Description: ${component.description}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Keywords: ${component.keywords}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: "Use Cases: Modern web applications, responsive designs, user-focused interfaces" })],
                spacing: { after: 300 }
              })
            ]).flat(),

            // Implementation Guidelines
            new Paragraph({
              children: [new TextRun({ text: "Implementation Guidelines", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Always consider responsive design across all screen sizes" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Maintain accessibility standards (WCAG 2.1 AA)" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Use semantic HTML structure" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Implement proper focus states and keyboard navigation" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Test across multiple browsers and devices" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Follow established design system tokens and variables" })],
              spacing: { after: 300 }
            }),

            // Best Practices
            new Paragraph({
              children: [new TextRun({ text: "Best Practices", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Prioritize user experience over visual complexity" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Ensure fast loading times and optimal performance" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Use progressive enhancement for advanced features" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Maintain consistency across similar components" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Document component variants and usage guidelines" })],
              spacing: { after: 400 }
            }),

            new Paragraph({
              children: [
                new TextRun({ text: `Generated on: ${new Date().toLocaleDateString()}`, italics: true }),
                new TextRun({ text: " | Version: 1.0", italics: true })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { before: 400 }
            }),
          ],
        },
      ],
    });

    try {
      const buffer = await Packer.toBlob(doc);
      const url = URL.createObjectURL(buffer);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-UX-Collaboration-Style-Guide.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating Word document:', error);
      // Fallback to text file
      const content = "Web Design Style Guide for AI Full-Stack Developer Collaboration - Error generating Word document. Please try again.";
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-UX-Collaboration-Style-Guide.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const handleDownloadBackendGuide = async () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "AI Backend Generation Prompt for PWAs & Mobile Apps",
                  bold: true,
                  size: 32,
                }),
              ],
              heading: HeadingLevel.TITLE,
              alignment: AlignmentType.CENTER,
              spacing: { after: 400 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "Generating Scalable and Secure Backend Infrastructure from UX Designs",
                  italics: true,
                  size: 24,
                }),
              ],
              alignment: AlignmentType.CENTER,
              spacing: { after: 600 }
            }),

            // Objective Section
            new Paragraph({
              children: [new TextRun({ text: "Objective", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "To generate the backend infrastructure, APIs, and database schemas necessary to support the functionality of a Progressive Web App (PWA) and/or Standalone Mobile Application, based on provided UX design specifications. The goal is to produce a secure, scalable, and maintainable backend that integrates seamlessly with the front-end designs generated by the UX AI."
                })
              ],
              spacing: { after: 300 }
            }),

            // Target Audience
            new Paragraph({
              children: [new TextRun({ text: "Target Audience", bold: true, size: 24 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• AI Full-Stack Developer: Interpreting UX design requirements to generate backend code, database structures, and deployment configurations." })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Human Developers/Reviewers: Reviewing, refining, and extending the AI-generated backend code." })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• UX Designer: (Implicitly) Relying on the AI's ability to create a functional backend that supports their design." })],
              spacing: { after: 400 }
            }),

            // Backend Components
            ...backendComponents.map(component => [
              new Paragraph({
                children: [new TextRun({ text: component.title, bold: true, size: 20 })],
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Description: ${component.description}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Technologies: ${component.technologies.join(', ')}` })],
                spacing: { after: 100 }
              }),
              new Paragraph({
                children: [new TextRun({ text: `Keywords: ${component.keywords}` })],
                spacing: { after: 300 }
              })
            ]).flat(),

            // Technical Requirements
            new Paragraph({
              children: [new TextRun({ text: "Core Technical Requirements", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• User Management: Registration, login, authentication (JWT, OAuth2), password reset, user profile management, role-based access control" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Data Management: CRUD operations for specific entities, anticipated data models, database optimization" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Real-time Capabilities: Chat, notifications, live updates requiring WebSockets or similar technologies" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• External Integrations: Payment gateways, third-party APIs, maps, weather, social media logins" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• File Storage: User avatars, product images, document uploads with proper security" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Search & Filtering: Backend logic for robust search capabilities and filtering options" })],
              spacing: { after: 300 }
            }),

            // Security Considerations
            new Paragraph({
              children: [new TextRun({ text: "Security & Best Practices", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Input Validation: Comprehensive validation and sanitization of all user inputs" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• CORS Policies: Proper cross-origin resource sharing configuration" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Rate Limiting: API rate limiting to prevent abuse and ensure fair usage" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• OWASP Top 10: Mitigation strategies for common security vulnerabilities" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Secure Credential Handling: Proper encryption and storage of sensitive data" })],
              spacing: { after: 300 }
            }),

            // Implementation Guidelines
            new Paragraph({
              children: [new TextRun({ text: "Implementation Guidelines", bold: true, size: 20 })],
              heading: HeadingLevel.HEADING_1,
              spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Generate well-organized project structure with clear separation of concerns" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Produce clean, well-commented, and idiomatic code following best practices" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Create comprehensive API documentation (OpenAPI/Swagger specification)" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Include basic unit tests and integration tests for critical endpoints" })],
              spacing: { after: 100 }
            }),
            new Paragraph({
              children: [new TextRun({ text: "• Provide deployment scripts and configuration files for chosen cloud provider" })],
              spacing: { after: 400 }
            }),

            new Paragraph({
              children: [
                new TextRun({ text: `Generated on: ${new Date().toLocaleDateString()}`, italics: true }),
                new TextRun({ text: " | Version: 1.0", italics: true })
              ],
              alignment: AlignmentType.CENTER,
              spacing: { before: 400 }
            }),
          ],
        },
      ],
    });

    try {
      const buffer = await Packer.toBlob(doc);
      const url = URL.createObjectURL(buffer);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-Backend-Generation-Guide.docx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating Word document:', error);
      // Fallback to text file
      const content = "AI Backend Generation Prompt for PWAs & Mobile Apps - Error generating Word document. Please try again.";
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'AI-Backend-Generation-Guide.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="insights-hero" className="section pt-24 pb-16 gradient-hero">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-6 border-primary text-primary">
              Research Methodologies & Insights
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Deep Dive into <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">Research & Design</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Explore the methodologies, tools, and insights that drive user-centered design decisions. 
              From military precision to agile innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sprint-Based Problem Solving */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-agile-primary text-agile-primary">
              Agile Research Methodology
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Sprint-Based <span className="text-agile-primary">Problem Solving</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              My systematic approach to UX research combines agile methodologies with 
              systems analysis for rapid, iterative problem solving.
            </p>
          </motion.div>

          {/* Agile Methodology Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center"
          >
            <div className="relative overflow-hidden rounded-xl order-2 lg:order-1">
              <div className="h-48 sm:h-64 lg:h-80">
                <img 
                  src={circuitBoard} 
                  alt="Complex systems and interconnected processes" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 border-agile-primary text-agile-primary">
                Systematic Approach
              </Badge>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Precision in <span className="text-agile-primary">Every Sprint</span>
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground mb-6">
                Just like complex circuit boards require methodical design, every research sprint follows 
                a structured approach to ensure reliable, actionable insights.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Plan</Badge>
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Research</Badge>
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Analyze</Badge>
                <Badge variant="outline" className="border-agile-primary text-agile-primary">Iterate</Badge>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
            {researchToolkit.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="h-full"
              >
                <Card className="glass border-agile-primary/20 shadow-agile hover:shadow-agile/50 transition-all duration-300 h-full">
                  <CardHeader className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-agile-primary/20 flex items-center justify-center mb-3 sm:mb-4">
                      <phase.icon className="w-5 h-5 sm:w-6 sm:h-6 text-agile-primary" />
                    </div>
                    <CardTitle className="text-agile-primary text-lg sm:text-xl">{phase.phase}</CardTitle>
                    <Badge variant="outline" className="w-fit border-agile-secondary text-agile-secondary text-xs sm:text-sm">
                      {phase.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Key Research Question */}
                      <div className="bg-agile-primary/10 p-3 rounded-lg">
                        <h4 className="font-semibold text-agile-primary mb-2 text-sm">Key Question</h4>
                        <p className="text-sm text-agile-primary font-medium italic">
                          {phase.insight}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Methods</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.methods.map((method, methodIndex) => (
                            <li key={methodIndex}>• {method}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Deliverables</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <li key={deliverableIndex}>• {deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methods Deep Dive */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Research Methodology
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Research <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Methods & Approaches</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit combining military precision, systems thinking, and agile methodologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {researchMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {method.techniques.map((technique, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Arsenal */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-success text-success">
              Technical Expertise
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Skills <span className="text-gradient bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">Arsenal</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set spanning research, design, development, and systems analysis.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {skillsArsenal.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="glass border-none h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center text-success">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="border-success text-success">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Military to UX Journey Timeline */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-military-primary text-military-primary">
              Career Evolution
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From <span className="text-military-primary">Military Precision</span> to <span className="text-agile-primary">UX Innovation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              A unique journey that bridges tactical excellence with user-centered design thinking.
            </p>
          </motion.div>

          <div className="relative">
            <Card className="glass border-none">
              <CardContent className="p-8">
                <div className="text-center">
                  <Lightbulb className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Bridging Two Worlds</h3>
                  <p className="text-muted-foreground">
                    My military background provides unmatched discipline and systems thinking, 
                    while my UX expertise ensures every solution is human-centered and accessible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Collaboration Framework */}
      <section className="section bg-background">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-accent text-accent">
              AI Collaboration
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From Design Concept to <span className="text-gradient bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Code Implementation</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A comprehensive style guide that bridges the gap between UX design vision and AI-powered development, 
              ensuring consistent, efficient, and precise collaboration.
            </p>
          </motion.div>

          {/* Framework Overview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="glass border-accent/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Code className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Design-to-Code Efficiency</h3>
                    <p className="text-sm text-muted-foreground">
                      Accelerates development by 60% through clear visual examples and AI-friendly descriptors
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Target className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Consistent Design Language</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensures visual and functional consistency across all AI-generated components
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Rapid Iteration</h3>
                    <p className="text-sm text-muted-foreground">
                      Enables quick design variations and A/B testing through standardized component patterns
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Component Categories Grid */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Component Style Categories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiCollaborationComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => {
                    if (component.title === "Hero Sections") {
                      setSelectedComponent("Hero Sections");
                      setIsModalOpen(true);
                    } else if (component.title === "Navigation") {
                      setSelectedComponent("Navigation");
                      setIsModalOpen(true);
                    }
                  }}
                >
                  <Card className="glass border-accent/20 hover:border-accent/40 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                          {component.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{component.title}</h4>
                        <Badge variant="outline" className="mb-3 border-accent text-accent text-xs">
                          {component.variants} Variants
                        </Badge>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                          {component.description}
                        </p>
                        <div className="text-xs text-accent font-medium">
                          {component.keywords}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="glass border-primary/20 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Download className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Complete Style Guide</h3>
                  <p className="text-muted-foreground mb-6">
                    Download the comprehensive Web Design Style Guide for AI Full-Stack Developer Collaboration. 
                    Includes detailed descriptions, use cases, and AI integration keywords for all component categories.
                  </p>
                </div>
                <button
                  onClick={handleDownloadStyleGuide}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Style Guide
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  A comprehensive reference for UX designers and AI developers
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AI Backend Generation Framework */}
      <section className="section gradient-subtle">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Backend Development
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              From UX Requirements to <span className="text-gradient bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">Scalable Architecture</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-powered backend generation framework that transforms UX design specifications into secure, 
              scalable infrastructure for PWAs and mobile applications.
            </p>
          </motion.div>

          {/* Framework Overview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="glass border-primary/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Server className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Infrastructure Generation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically generates database schemas, APIs, and deployment configurations from UX specifications
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Security by Design</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in security best practices including authentication, validation, and OWASP compliance
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Cloud className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Cloud-Ready Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                      Ready for AWS, Google Cloud, Azure with containerization and CI/CD pipeline support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Backend Components Grid */}
          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Backend Architecture Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {backendComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                >
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {component.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{component.title}</h4>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                          {component.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-3 justify-center">
                          {component.technologies.slice(0, 2).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="border-primary text-primary text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="text-xs text-primary font-medium">
                          {component.keywords}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="glass border-primary/20 shadow-lg max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Download className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">AI Backend Generation Guide</h3>
                  <p className="text-muted-foreground mb-6">
                    Download the comprehensive AI Backend Generation Prompt for PWAs & Mobile Apps. 
                    Includes technical requirements, security considerations, and implementation guidelines for scalable backend infrastructure.
                  </p>
                </div>
                <button
                  onClick={handleDownloadBackendGuide}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Backend Guide
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  Complete framework for AI-powered backend development
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Hero Sections Variants Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[98vw] w-full max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-6">
              {selectedComponent === "Hero Sections" ? "Hero Section Variants Gallery" : "Navigation Variants Gallery"}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-8 max-h-[75vh] overflow-y-auto pr-4">
            {selectedComponent === "Hero Sections" && heroSectionVariants.map((variant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-primary/20 bg-card/95 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row">
                    {/* Full-Width Hero Preview */}
                    <div className="relative flex-1 h-64 lg:h-80 overflow-hidden">
                      {variant.preview || (
                        <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
                          
                          {/* Mock Hero Section Content */}
                          <div className="relative h-full flex flex-col justify-center items-center p-8 text-center">
                            <div className="max-w-4xl mx-auto space-y-6">
                              {/* Navigation Mock */}
                              <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                  <div className="w-8 h-8 bg-primary/30 rounded-lg"></div>
                                  <div className="hidden md:flex space-x-4">
                                    {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                      <div key={item} className="w-12 h-3 bg-primary/20 rounded"></div>
                                    ))}
                                  </div>
                                </div>
                                <div className="w-20 h-8 bg-primary/40 rounded"></div>
                              </div>

                              {/* Hero Content */}
                              <div className="space-y-4 mt-16">
                                <div className="space-y-2">
                                  <div className="w-3/4 h-6 bg-primary/40 rounded mx-auto"></div>
                                  <div className="w-1/2 h-6 bg-primary/30 rounded mx-auto"></div>
                                </div>
                                <div className="space-y-2">
                                  <div className="w-5/6 h-4 bg-muted/60 rounded mx-auto"></div>
                                  <div className="w-2/3 h-4 bg-muted/50 rounded mx-auto"></div>
                                </div>
                                <div className="flex justify-center space-x-4 pt-4">
                                  <div className="w-24 h-10 bg-primary/50 rounded-lg"></div>
                                  <div className="w-24 h-10 bg-secondary/40 rounded-lg border border-primary/30"></div>
                                </div>
                              </div>

                              {/* Features/Stats Mock */}
                              <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-8">
                                {[1, 2, 3].map((i) => (
                                  <div key={i} className="text-center space-y-1">
                                    <div className="w-12 h-4 bg-accent/40 rounded mx-auto"></div>
                                    <div className="w-16 h-3 bg-muted/40 rounded mx-auto"></div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Overlay with variant info */}
                            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                              <h4 className="font-semibold text-sm">{variant.title}</h4>
                              <p className="text-xs text-muted-foreground">Interactive Preview</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Code Preview Panel */}
                    <div className="lg:w-96 border-t lg:border-t-0 lg:border-l border-border/50">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{variant.title}</h3>
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedCodeVariant(variant);
                              setIsCodeModalOpen(true);
                            }}
                            className="gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Full Code
                          </Button>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {variant.description}
                        </p>

                        {/* Code Preview */}
                        <div className="bg-muted/30 rounded-lg p-3 text-xs font-mono overflow-hidden">
                          <div className="text-primary">&lt;section className="hero"&gt;</div>
                          <div className="pl-2 text-muted-foreground">&lt;div className="container"&gt;</div>
                          <div className="pl-4 text-foreground">&lt;h1&gt;{variant.title.split(' ')[0]}&lt;/h1&gt;</div>
                          <div className="pl-4 text-muted-foreground">...</div>
                          <div className="pl-2 text-muted-foreground">&lt;/div&gt;</div>
                          <div className="text-primary">&lt;/section&gt;</div>
                        </div>

                        {/* Characteristics */}
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-medium text-muted-foreground">Characteristics:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {variant.characteristics.slice(0, 4).map((char, i) => (
                                <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {char}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-xs font-medium text-muted-foreground">Best For:</span>
                            <p className="text-xs mt-1">{typeof variant.useCases === 'string' ? variant.useCases : variant.useCases.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}

            {selectedComponent === "Navigation" && navigationVariants.map((variant, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-primary/20 bg-card/95 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row">
                    {/* Full-Width Navigation Preview */}
                    <div className="relative flex-1 h-64 lg:h-80 overflow-hidden">
                      <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20" />
                        
                        {/* Navigation Preview Content */}
                        <div className="relative h-full flex items-center justify-center p-8">
                          <div className="w-full max-w-4xl">
                            {variant.preview}
                          </div>
                          
                          {/* Overlay with variant info */}
                          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                            <h4 className="font-semibold text-sm">{variant.title}</h4>
                            <p className="text-xs text-muted-foreground">Interactive Preview</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Code Preview Panel */}
                    <div className="lg:w-96 border-t lg:border-t-0 lg:border-l border-border/50">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-lg">{variant.title}</h3>
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedCodeVariant(variant);
                              setIsCodeModalOpen(true);
                            }}
                            className="gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                            Full Code
                          </Button>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {variant.description}
                        </p>

                        {/* Code Preview */}
                        <div className="bg-muted/30 rounded-lg p-3 text-xs font-mono overflow-hidden">
                          <div className="text-primary">&lt;nav className="navigation"&gt;</div>
                          <div className="pl-2 text-muted-foreground">&lt;div className="nav-container"&gt;</div>
                          <div className="pl-4 text-foreground">&lt;ul&gt;{variant.title.split(' ')[0]}&lt;/ul&gt;</div>
                          <div className="pl-4 text-muted-foreground">...</div>
                          <div className="pl-2 text-muted-foreground">&lt;/div&gt;</div>
                          <div className="text-primary">&lt;/nav&gt;</div>
                        </div>

                        {/* Characteristics */}
                        <div className="space-y-3">
                          <div>
                            <span className="text-xs font-medium text-muted-foreground">Characteristics:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {variant.characteristics.slice(0, 4).map((char, i) => (
                                <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                  {char}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <span className="text-xs font-medium text-muted-foreground">Best For:</span>
                            <p className="text-xs mt-1">{typeof variant.useCases === 'string' ? variant.useCases : variant.useCases.join(', ')}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Full-Width Code Modal */}
      <Dialog open={isCodeModalOpen} onOpenChange={setIsCodeModalOpen}>
        <DialogContent className="max-w-[95vw] w-full max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold mb-4">
              {selectedCodeVariant?.title} - Implementation Code
            </DialogTitle>
          </DialogHeader>
          
          {selectedCodeVariant && (
            <div className="space-y-6">
              {/* Preview Section */}
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                  Live Preview
                </h3>
                <div className="bg-background rounded border">
                  {selectedCodeVariant.preview}
                </div>
              </div>

              {/* Code Section */}
              <div className="bg-slate-950 rounded-lg overflow-hidden">
                <div className="bg-slate-800 px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-slate-300 text-sm ml-2">component.jsx</span>
                  </div>
                  <button 
                    onClick={() => navigator.clipboard.writeText(selectedCodeVariant.codePreview)}
                    className="text-slate-400 hover:text-slate-200 text-sm px-3 py-1 hover:bg-slate-700 rounded transition-colors"
                  >
                    Copy Code
                  </button>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm text-slate-100 leading-relaxed">
                    <code className="language-jsx">
                      {selectedCodeVariant.codePreview}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Implementation Details */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                  Implementation Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Characteristics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedCodeVariant.characteristics.map((char, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Best Used For</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {selectedCodeVariant.useCases.map((useCase, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Insights;
