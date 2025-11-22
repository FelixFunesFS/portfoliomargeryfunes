import React, { useState } from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Home, Briefcase, Network, Wrench, Route, FileText, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommandNavigationProps {
  scrollProgress: MotionValue<number>;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const CommandNavigation: React.FC<CommandNavigationProps> = ({ scrollProgress }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { id: 'portal', label: 'Portal', icon: <Home className="w-5 h-5" />, href: '#portal' },
    { id: 'missions', label: 'Missions', icon: <Briefcase className="w-5 h-5" />, href: '#missions' },
    { id: 'constellation', label: 'Skills', icon: <Network className="w-5 h-5" />, href: '#constellation' },
    { id: 'arsenal', label: 'Arsenal', icon: <Wrench className="w-5 h-5" />, href: '#arsenal' },
    { id: 'journey', label: 'Journey', icon: <Route className="w-5 h-5" />, href: '#journey' },
    { id: 'insights', label: 'Intel', icon: <FileText className="w-5 h-5" />, href: '/insights' },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.href.startsWith('#')) {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(item.href);
    }
  };

  return (
    <>
      {/* Fixed Navigation Sidebar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      >
        <div 
          className="glass rounded-2xl p-4 border border-primary/30"
          style={{
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item)}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-12 h-12 flex items-center justify-center rounded-xl border border-primary/20 hover:border-primary/60 transition-all"
                style={{
                  background: hoveredItem === item.id ? 'rgba(var(--primary), 0.2)' : 'transparent',
                }}
              >
                {item.icon}
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredItem === item.id ? 1 : 0,
                    x: hoveredItem === item.id ? 0 : -10,
                  }}
                  className="absolute left-full ml-4 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold pointer-events-none"
                  style={{
                    background: 'rgba(0, 0, 0, 0.9)',
                    border: '1px solid hsl(var(--primary))',
                    color: 'hsl(var(--primary))',
                  }}
                >
                  {item.label}
                </motion.div>

                {/* Glow Effect */}
                {hoveredItem === item.id && (
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    style={{
                      background: 'radial-gradient(circle, hsl(var(--primary)), transparent)',
                      filter: 'blur(10px)',
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
      >
        <div 
          className="glass border-t border-primary/30 px-4 py-3"
          style={{
            background: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex justify-around items-center max-w-lg mx-auto">
            {navItems.slice(0, 5).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item)}
                whileTap={{ scale: 0.9 }}
                className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <div className="text-primary">{item.icon}</div>
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Scroll Progress Ring (Top Right) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed top-6 right-6 z-50 hidden md:block"
      >
        <div className="relative w-16 h-16">
          {/* Background Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="4"
              fill="none"
            />
            {/* Progress Circle */}
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{
                pathLength: scrollProgress,
                strokeDasharray: "0 1",
              }}
            />
          </svg>
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Network className="w-4 h-4 text-primary" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* View Toggle Button (Top Left) */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 left-6 z-50 px-4 py-2 glass rounded-lg border border-primary/30 hover:border-primary/60 transition-all text-sm font-semibold text-primary"
        style={{
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(20px)',
        }}
      >
        ← Classic View
      </motion.button>
    </>
  );
};

export default CommandNavigation;
