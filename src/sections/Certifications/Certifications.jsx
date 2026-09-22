import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { certificationsData } from '../../data/certifications';
import { Award, ShieldCheck } from 'lucide-react';

export const Certifications = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader
          tag="Credentials"
          title="Verified certifications."
          subtitle="Industry-recognized technical certifications across full-stack engineering, APIs, Java, Python, and AWS storage."
          theme={theme}
        />

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-apple-card">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="min-w-[280px] sm:min-w-[340px] flex-shrink-0"
            >
              <GlassCard theme={theme} className="p-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                      <Award className="w-6 h-6 text-apple-blue" />
                    </div>
                    <span className="flex items-center gap-1 text-xs text-apple-blue font-medium">
                      <ShieldCheck className="w-4 h-4" />
                      Verified
                    </span>
                  </div>

                  <div>
                    <h3 className={`font-semibold text-lg leading-snug ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      {cert.title}
                    </h3>
                    <p className="text-xs text-apple-blue font-medium mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  <p className={`text-xs ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    Category: {cert.category}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-mono ${
                  isDark ? 'border-white/10 text-apple-muted' : 'border-black/10 text-apple-lightMuted'
                }`}>
                  <span>{cert.code}</span>
                  <span className="w-2 h-2 rounded-full bg-apple-blue" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
