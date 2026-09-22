import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { skillsData } from '../../data/skills';
import { CheckCircle2 } from 'lucide-react';

export const CSCore = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-20 relative overflow-hidden font-sans border-y transition-colors duration-300 ${
      isDark ? 'bg-apple-surface border-white/10 text-white' : 'bg-white border-black/10 text-apple-lightText'
    }`}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeader
          tag="Foundations"
          title="Under the frameworks."
          subtitle="Fundamental Computer Science engineering principles guiding architecture and algorithms."
          theme={theme}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.csCore.map((module, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border flex items-center justify-between transition-all ${
                isDark ? 'bg-apple-card border-white/10' : 'bg-apple-lightBg border-black/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-apple-blue font-semibold text-xs">0{idx + 1}</span>
                <h4 className={`font-semibold text-base ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                  {module}
                </h4>
              </div>

              <div className="flex items-center gap-2 text-xs text-apple-blue font-medium">
                <CheckCircle2 className="w-4 h-4 text-apple-blue" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
