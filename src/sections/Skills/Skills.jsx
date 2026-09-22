import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { skillsData } from '../../data/skills';
import { Cpu, Code, Database, Cloud, Terminal, Wrench } from 'lucide-react';

const CATEGORY_ICONS = {
  LANGUAGES: Code,
  FRONTEND: Cpu,
  BACKEND: Terminal,
  DATABASE: Database,
  CLOUD: Cloud,
  TOOLS: Wrench
};

export const Skills = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="skills" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader
          tag="Stack"
          title="Technology constellation."
          subtitle="A connected architecture of languages, frameworks, cloud services, and production toolkits."
          theme={theme}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.title] || Code;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard theme={theme} className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className={`flex items-center justify-between border-b pb-3 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                          <Icon className="w-5 h-5 text-apple-blue" />
                        </div>
                        <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                          {cat.title}
                        </h3>
                      </div>
                      <span className={`text-xs font-medium ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                        Node 0{idx + 1}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-2 border transition-all ${
                            isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
