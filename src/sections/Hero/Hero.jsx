import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { Hero3D } from '../../components/Hero3D/Hero3D';
import { StatusPanel } from '../../components/StatusPanel/StatusPanel';

export const Hero = ({ theme = 'dark' }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <section id="hero" className={`relative min-h-screen w-full flex items-center justify-center pt-20 pb-16 overflow-hidden font-sans ${isDark ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-medium ${
              isDark
                ? 'bg-apple-card border-white/10 text-apple-muted'
                : 'bg-white border-black/10 text-apple-lightMuted shadow-sm'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-apple-blue animate-pulse" />
            <span>Developer Profile · Bengaluru, India</span>
          </motion.div>

          {/* Large Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.45, delay: 0.05 }}
            className="space-y-2"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-none">
              <span className={isDark ? 'text-white' : 'text-apple-lightText'}>Kushagra</span> <br />
              <span className="apple-text-gradient">Verma.</span>
            </h1>
          </motion.div>

          {/* Slogans */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4, delay: 0.1 }}
            className={`text-lg md:text-2xl font-normal tracking-tight space-y-1 ${
              isDark ? 'text-apple-muted' : 'text-apple-lightMuted'
            }`}
          >
            {personalInfo.slogans.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </motion.div>

          {/* Supporting paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4, delay: 0.15 }}
            className={`text-base md:text-lg max-w-xl leading-relaxed ${
              isDark ? 'text-apple-muted' : 'text-apple-lightMuted'
            }`}
          >
            {personalInfo.heroSupportingText}
          </motion.p>

          {/* Metadata Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-1 text-xs"
          >
            <span className={`px-3 py-1 rounded-full border ${
              isDark ? 'bg-apple-card border-white/10 text-white' : 'bg-white border-black/10 text-black shadow-sm'
            }`}>
              BENGALURU, INDIA
            </span>
            <span className={`px-3 py-1 rounded-full border ${
              isDark ? 'bg-apple-card border-white/10 text-white' : 'bg-white border-black/10 text-black shadow-sm'
            }`}>
              CS ENGINEERING · 2027
            </span>
            <span className="px-3 py-1 bg-apple-blue/15 border border-apple-blue/30 rounded-full text-apple-blue font-medium">
              CGPA 8.88
            </span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-apple-blue text-white font-medium text-xs tracking-tight hover:bg-apple-blueHover transition-colors shadow-md"
            >
              <span>View Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full border font-medium text-xs tracking-tight transition-all ${
                isDark
                  ? 'bg-white/10 border-white/15 text-white hover:bg-white hover:text-black'
                  : 'bg-black/5 border-black/10 text-black hover:bg-black hover:text-white'
              }`}
            >
              <span>Get in Touch</span>
            </button>

            <div className="flex items-center gap-3 pl-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-full border transition-all ${
                  isDark ? 'bg-apple-card border-white/10 text-apple-muted hover:text-white' : 'bg-white border-black/10 text-apple-lightMuted hover:text-black shadow-sm'
                }`}
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-full border transition-all ${
                  isDark ? 'bg-apple-card border-white/10 text-apple-muted hover:text-white' : 'bg-white border-black/10 text-apple-lightMuted hover:text-black shadow-sm'
                }`}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Visual: Floating Translucent Glass Orb & Status */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
          <Hero3D theme={theme} />
          <div className="w-full flex justify-center -mt-6 relative z-20">
          <StatusPanel theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};
