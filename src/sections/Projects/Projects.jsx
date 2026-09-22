import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { ProjectModal } from '../../components/ProjectModal/ProjectModal';
import { projectsData } from '../../data/projects';
import { ExternalLink, Github, TrendingUp, Layers } from 'lucide-react';

export const Projects = ({ theme = 'dark' }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-apple-surface text-white' : 'bg-white text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <SectionHeader
          tag="Portfolio"
          title="Featured production projects."
          subtitle="Explore selected web platforms, dynamic pricing engines, cross-platform mobile apps, and enterprise implementations."
          theme={theme}
        />

        <div className="grid grid-cols-12 gap-6">
          {projectsData.map((project, idx) => {
            const isOrion = project.id === 'orion-diamonds';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={project.colSpan}
              >
                <GlassCard
                  theme={theme}
                  onClick={() => setSelectedProject(project)}
                  className="p-8 h-full flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-apple-blue/15 text-apple-blue rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                      <span className={`text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                        View Specs <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-apple-blue transition-colors ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                      {project.description}
                    </p>

                    {isOrion && (
                      <div className={`mt-4 p-5 rounded-2xl border space-y-3 ${
                        isDark ? 'bg-black/60 border-white/10' : 'bg-apple-lightBg border-black/10'
                      }`}>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-apple-blue font-semibold flex items-center gap-1.5">
                            <TrendingUp className="w-4 h-4" />
                            Live Spot Gold Rate Engine
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-apple-blue/15 text-apple-blue border border-apple-blue/30 text-[10px]">
                            Automated
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                          {project.highlights.map((h, hIdx) => (
                            <div key={hIdx} className={`p-2 rounded-xl border font-medium ${
                              isDark ? 'bg-apple-surface border-white/10 text-white' : 'bg-white border-black/10 text-apple-lightText'
                            }`}>
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.id === 'erpnext-implementation' && (
                      <div className={`mt-4 p-5 rounded-2xl border space-y-2 text-xs ${
                        isDark ? 'bg-black/60 border-white/10' : 'bg-apple-lightBg border-black/10'
                      }`}>
                        <div className="flex items-center gap-2 text-apple-blue font-semibold">
                          <Layers className="w-4 h-4" />
                          <span>ERPNext v15 Upgrade</span>
                        </div>
                        <div className={`space-y-1 font-mono text-[11px] ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                          <p>├── Version & custom app migration</p>
                          <p>├── Stock & batch reconciliation</p>
                          <p>└── Reports, invoices & print formats</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className={`mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className={`px-2.5 py-0.5 rounded-full text-xs ${
                            isDark ? 'bg-white/5 border border-white/10 text-apple-muted' : 'bg-black/5 border border-black/10 text-apple-lightMuted'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.accessLabel && (
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-medium border ${
                          isDark ? 'bg-white/5 border-white/10 text-apple-muted' : 'bg-black/5 border-black/10 text-apple-lightMuted'
                        }`}>
                          {project.accessLabel}
                        </span>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="GitHub Repository"
                          className={`p-2 rounded-full border transition-all ${
                            isDark ? 'bg-white/5 border-white/10 text-apple-muted hover:text-white' : 'bg-black/5 border-black/10 text-apple-lightMuted hover:text-black'
                          }`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        theme={theme}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
