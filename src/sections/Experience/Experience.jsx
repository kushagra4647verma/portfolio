import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { experienceData } from '../../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cpu } from 'lucide-react';

export const Experience = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-apple-surface text-white' : 'bg-white text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeader
          tag="Career"
          title="Production experience."
          subtitle="Engineering robust web systems, dynamic pricing engines, mobile apps, and enterprise software."
          theme={theme}
        />

        <div className={`relative pl-6 md:pl-10 border-l space-y-12 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className={`absolute -left-[31px] md:-left-[47px] top-0 p-2 rounded-full border shadow-md ${
                isDark ? 'bg-black border-white/20 text-white' : 'bg-white border-black/20 text-black'
              }`}>
                <Briefcase className="w-4 h-4" />
              </div>

              <GlassCard theme={theme} className="p-8">
                <div className={`flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b pb-4 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      {exp.company}
                    </h3>
                    <p className="text-sm font-medium text-apple-blue mt-0.5 flex items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.isUpcoming && (
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-apple-blue/15 text-apple-blue font-semibold border border-apple-blue/30">
                          Incoming
                        </span>
                      )}
                    </p>
                  </div>

                  <div className={`flex flex-wrap items-center gap-3 text-xs ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                      <Calendar className="w-3.5 h-3.5 text-apple-blue" />
                      {exp.period}
                    </span>
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                      <MapPin className="w-3.5 h-3.5 text-apple-blue" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    Key Deliverables & Impact
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((item, itemIdx) => (
                      <div key={itemIdx} className={`flex items-start gap-2.5 text-sm ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                        <CheckCircle2 className="w-4 h-4 text-apple-blue shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {exp.highlightProject && (
                  <div className={`p-6 rounded-2xl border space-y-4 ${
                    isDark ? 'bg-black/60 border-white/10' : 'bg-apple-lightBg border-black/10'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 text-xs font-semibold tracking-tight ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                        <Cpu className="w-4 h-4 text-apple-blue" />
                        <span>Featured System // {exp.highlightProject.name}</span>
                      </div>
                      <span className={`text-xs uppercase ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                        Real-time Metrics
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      {exp.highlightProject.metrics.map((m, mIdx) => (
                        <div key={mIdx} className={`p-3 rounded-xl border ${isDark ? 'bg-apple-surface border-white/10' : 'bg-white border-black/10'}`}>
                          <p className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                            {m.value}
                          </p>
                          <p className={`text-[11px] mt-0.5 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
