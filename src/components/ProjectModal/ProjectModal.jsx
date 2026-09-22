import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, LockKeyhole } from 'lucide-react';

export const ProjectModal = ({ project, theme = 'dark', onClose }) => {
  if (!project) return null;
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`fixed inset-0 backdrop-blur-md ${isDark ? 'bg-black/85' : 'bg-black/40'}`}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-3xl rounded-3xl p-6 md:p-8 border shadow-2xl z-10 max-h-[90vh] overflow-y-auto font-sans transition-colors ${
            isDark ? 'bg-apple-card border-white/15 text-white' : 'bg-white border-black/15 text-apple-lightText'
          }`}
        >
          <button
            onClick={onClose}
            className={`absolute top-6 right-6 p-2 rounded-full border transition-all ${
              isDark ? 'bg-white/5 border-white/10 text-apple-muted hover:text-white' : 'bg-black/5 border-black/10 text-apple-lightMuted hover:text-black'
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-apple-blue/15 text-apple-blue font-medium text-xs mb-3">
            {project.category}
          </span>

          <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
            {project.title}
          </h2>

          <p className={`text-base font-normal leading-relaxed mb-6 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
            {project.description}
          </p>

          {project.highlights && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
                  }`}
                >
                  {h}
                </span>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-apple-surface border-white/10' : 'bg-apple-lightBg border-black/10'}`}>
              <h4 className="text-xs font-semibold text-red-500 uppercase tracking-wider">
                Problem Statement
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                {project.problem || "Solving production environment workflow challenges."}
              </p>
            </div>

            <div className={`p-5 rounded-2xl border space-y-2 ${isDark ? 'bg-apple-surface border-apple-blue/30' : 'bg-apple-lightBg border-apple-blue/30'}`}>
              <h4 className="text-xs font-semibold text-apple-blue uppercase tracking-wider">
                Architectural Solution
              </h4>
              <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                {project.solution || "Engineered scalable modular components and optimized pipelines."}
              </p>
            </div>
          </div>

          {project.architecture && (
            <div className={`p-5 rounded-2xl border mb-6 space-y-2 ${isDark ? 'bg-black/50 border-white/10' : 'bg-apple-lightBg border-black/10'}`}>
              <h4 className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'text-white' : 'text-black'}`}>
                <Layers className="w-4 h-4 text-apple-blue" />
                System Architecture
              </h4>
              <p className={`text-xs md:text-sm font-mono leading-relaxed ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                {project.architecture}
              </p>
            </div>
          )}

          <div className="mb-6 space-y-3">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
              Key Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className={`flex items-center gap-2 text-xs ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                  <CheckCircle2 className="w-4 h-4 text-apple-blue shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8 space-y-3">
            <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
              Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs ${isDark ? 'bg-white/5 border border-white/10 text-white' : 'bg-black/5 border border-black/10 text-black'}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {project.accessNote && (
            <div className={`mb-6 flex gap-3 rounded-2xl border p-4 ${
              isDark ? 'border-white/10 bg-white/5 text-apple-muted' : 'border-black/10 bg-apple-lightBg text-apple-lightMuted'
            }`}>
              <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-apple-blue" />
              <div>
                <p className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-apple-lightText'}`}>Availability</p>
                <p className="mt-1 text-xs leading-relaxed">{project.accessNote}</p>
              </div>
            </div>
          )}

          {(project.github || project.demo) && (
            <div className={`flex flex-wrap items-center gap-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-xs font-medium transition-all ${
                  isDark ? 'bg-white/10 border-white/15 text-white hover:bg-white hover:text-black' : 'bg-black/5 border-black/10 text-black hover:bg-black hover:text-white'
                }`}
              >
                <Github className="w-4 h-4" />
                GitHub Repository ↗
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-apple-blue text-white font-medium text-xs hover:bg-apple-blueHover transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo ↗
              </a>
            )}
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
