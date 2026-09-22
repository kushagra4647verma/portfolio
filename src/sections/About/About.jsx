import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { personalInfo } from '../../data/personal';
import { Code2, Brain, Server } from 'lucide-react';

const ABOUT_COLUMNS = [
  {
    icon: Code2,
    title: "Build",
    subtitle: "Frontend & Mobile",
    description: "Designing responsive, user-first client applications across web and mobile platforms with high performance.",
    items: ["React", "Next.js", "Node.js", "Express", "Flutter"]
  },
  {
    icon: Brain,
    title: "Think",
    subtitle: "Engineering Principles",
    description: "Applying robust theoretical computer science fundamentals to solve complex software engineering problems.",
    items: ["DSA", "OOP", "DBMS", "Operating Systems", "SDLC"]
  },
  {
    icon: Server,
    title: "Deploy",
    subtitle: "Cloud & Infrastructure",
    description: "Architecting cloud infrastructure, API gateways, and automated deployment pipelines for continuous delivery.",
    items: ["AWS", "EC2", "S3", "REST APIs", "CI/CD"]
  }
];

export const About = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader
          tag="Capability"
          title="A developer who builds across the stack."
          theme={theme}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`mb-16 p-8 md:p-12 rounded-3xl border transition-colors ${
            isDark ? 'bg-apple-card border-white/10 shadow-apple-glass' : 'bg-white border-black/10 shadow-apple-glass-light'
          }`}
        >
          <span className="text-xs font-semibold text-apple-blue uppercase tracking-wider block mb-4">
            Philosophy
          </span>
          <p className={`text-2xl md:text-4xl font-semibold tracking-tight leading-relaxed ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
            "{personalInfo.editorialStatement}"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_COLUMNS.map((col, idx) => {
            const Icon = col.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <GlassCard theme={theme} className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-xs font-medium ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                        0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-2xl font-semibold tracking-tight ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                        {col.title}
                      </h3>
                      <p className="text-xs text-apple-blue font-medium mt-0.5">
                        {col.subtitle}
                      </p>
                    </div>

                    <p className={`text-sm leading-relaxed ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                      {col.description}
                    </p>
                  </div>

                  <div className={`mt-8 pt-4 border-t flex flex-wrap gap-2 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                    {col.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isDark ? 'bg-white/5 border border-white/10 text-white' : 'bg-black/5 border border-black/10 text-black'
                        }`}
                      >
                        {item}
                      </span>
                    ))}
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
