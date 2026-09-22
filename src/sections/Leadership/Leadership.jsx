import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { awsLeadershipData } from '../../data/leadership';
import { Cloud, Flag } from 'lucide-react';

export const Leadership = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="aws" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <SectionHeader
          tag="AWS Community"
          title={awsLeadershipData.title}
          subtitle="Mobilizing technical communities, leading hands-on workshops, and expanding cloud access."
          theme={theme}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <GlassCard theme={theme} className="p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className={`p-4 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                  <Cloud className="w-8 h-8 text-apple-blue" />
                </div>
                <div>
                  <h3 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                    {awsLeadershipData.role}
                  </h3>
                  <p className={`text-sm mt-0.5 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    {awsLeadershipData.institution} · {awsLeadershipData.period}
                  </p>
                </div>
              </div>

              <span className="px-4 py-1.5 rounded-full bg-apple-blue/15 text-apple-blue text-xs font-medium text-center">
                AWS Student Builder Group
              </span>
            </div>

            <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 pt-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              {awsLeadershipData.metrics.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-4 rounded-2xl border text-center space-y-1 ${
                    isDark ? 'bg-apple-surface border-white/10' : 'bg-apple-lightBg border-black/10'
                  }`}
                >
                  <p className={`text-2xl md:text-3xl font-semibold ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                    {m.value}
                  </p>
                  <p className={`text-xs uppercase tracking-wider ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        <div className="space-y-4">
          <h4 className={`text-xs font-semibold uppercase tracking-wider flex items-center gap-2 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
            <Flag className="w-4 h-4 text-apple-blue" />
            Mission Log Phases
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {awsLeadershipData.missionLog.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <GlassCard theme={theme} className="p-6 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-2xl text-apple-blue">
                        {item.id}
                      </span>
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${
                        isDark ? 'bg-white/5 border-white/10 text-apple-muted' : 'bg-black/5 border-black/10 text-apple-lightMuted'
                      }`}>
                        Phase
                      </span>
                    </div>

                    <h5 className={`font-semibold text-base ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      {item.title}
                    </h5>

                    <p className={`text-xs leading-relaxed ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
