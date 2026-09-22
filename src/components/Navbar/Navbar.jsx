import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, Sun, Moon } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'aws', label: 'AWS Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar = ({ activeSection = 'hero', theme = 'dark', onToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 apple-glass-header transition-all duration-300">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl h-14 flex items-center justify-between font-sans text-xs">
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 font-semibold tracking-tight hover:text-apple-blue transition-colors"
          >
            <Command className={`w-4 h-4 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`} />
            <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
              Kushagra Verma
            </span>
          </button>

          <nav aria-label="Primary navigation" className="hidden xl:flex items-center gap-5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 transition-colors text-xs font-normal tracking-tight after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-current after:transition-transform ${
                    isActive
                      ? isDark ? 'text-white font-medium after:scale-x-100' : 'text-black font-semibold after:scale-x-100'
                      : isDark ? 'text-apple-muted hover:text-white after:scale-x-0' : 'text-apple-lightMuted hover:text-black after:scale-x-0'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label="Toggle Light / Dark Mode"
              className={`p-1.5 rounded-full border transition-all ${
                isDark
                  ? 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                  : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-apple-blue" />}
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="hidden xl:block px-3.5 py-1.5 rounded-full bg-apple-blue text-white text-xs font-medium hover:bg-apple-blueHover transition-colors shadow-sm"
            >
              Get in Touch
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 xl:hidden ${isDark ? 'text-apple-muted hover:text-white' : 'text-apple-lightMuted hover:text-black'}`}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className={`fixed inset-0 top-14 z-30 backdrop-blur-2xl px-6 py-8 xl:hidden flex flex-col justify-between ${
              isDark ? 'bg-black/95 text-white' : 'bg-white/95 text-black'
            }`}
          >
            <div className="space-y-4">
              <span className={`text-xs font-medium uppercase tracking-wider block mb-2 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                Navigation
              </span>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`w-full text-left py-2 text-lg font-medium tracking-tight border-b ${
                    isDark ? 'border-white/5' : 'border-black/5'
                  } ${
                    activeSection === item.id
                      ? isDark ? 'text-white' : 'text-black'
                      : isDark ? 'text-apple-muted' : 'text-apple-lightMuted'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-6">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3 rounded-full bg-apple-blue text-white font-medium text-sm text-center shadow-md"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
