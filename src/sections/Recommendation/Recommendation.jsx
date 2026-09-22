import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { recommendationData } from '../../data/testimonial';
import { FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Recommendation = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="recommendation" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-apple-surface text-white' : 'bg-white text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeader
          tag="Endorsement"
          title="Executive recommendation."
          subtitle="Official recommendation document issued by Neural Pulse executive leadership."
          theme={theme}
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard theme={theme} className="p-8 md:p-12">
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between border-b pb-6 mb-8 gap-4 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                  <FileText className="w-6 h-6 text-apple-blue" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                    Neural Pulse Executive Letter
                  </h3>
                  <p className={`text-xs font-mono ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    {recommendationData.documentRef}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-apple-blue/15 border border-apple-blue/30 text-apple-blue text-xs font-medium">
                <ShieldCheck className="w-4 h-4" />
                Official Recommendation
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className={`text-lg md:text-2xl font-normal leading-relaxed italic border-l-2 border-apple-blue pl-6 ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                "{recommendationData.summaryQuote}"
              </p>
            </div>

            <div className="space-y-3 mb-10">
              <h4 className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                Verified Core Competencies & Attributes
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {recommendationData.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-2xl border flex items-center gap-2 text-xs ${
                      isDark ? 'bg-black/50 border-white/10 text-white' : 'bg-apple-lightBg border-black/10 text-black'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-apple-blue shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-6 border-t flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-semibold text-lg ${
                  isDark ? 'bg-white/10 border-white/15 text-white' : 'bg-black/5 border-black/10 text-black'
                }`}>
                  VJ
                </div>
                <div>
                  <h4 className={`font-semibold text-base ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                    {recommendationData.author}
                  </h4>
                  <p className="text-xs text-apple-blue">
                    {recommendationData.title}, {recommendationData.organization}
                  </p>
                </div>
              </div>

              <div className={`text-xs italic max-w-xs sm:text-right ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                {recommendationData.officialNote}
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
