import React, { useState, useEffect } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar/Navbar';
import { SystemLoader } from './components/SystemLoader/SystemLoader';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Experience } from './sections/Experience/Experience';
import { Leadership } from './sections/Leadership/Leadership';
import { Projects } from './sections/Projects/Projects';
import { Skills } from './sections/Skills/Skills';
import { CSCore } from './sections/CSCore/CSCore';
import { Certifications } from './sections/Certifications/Certifications';
import { Recommendation } from './sections/Recommendation/Recommendation';
import { TerminalSection } from './sections/TerminalSection/TerminalSection';
import { Contact } from './sections/Contact/Contact';
import { Footer } from './sections/Footer/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'experience', 'aws', 'projects', 'skills', 'terminal', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <AnimatePresence mode="wait">
        {loading && (
          <SystemLoader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

          <main className="relative z-10">
            <Hero theme={theme} />
            <About theme={theme} />
            <Experience theme={theme} />
            <Leadership theme={theme} />
            <Projects theme={theme} />
            <Skills theme={theme} />
            <CSCore theme={theme} />
            <Certifications theme={theme} />
            <Recommendation theme={theme} />
            <TerminalSection theme={theme} />
            <Contact theme={theme} />
          </main>

          <Footer theme={theme} />
        </>
      )}
      </div>
    </MotionConfig>
  );
}
