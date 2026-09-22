import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({
  tag = "Overview",
  title = "",
  subtitle = "",
  centered = false,
  theme = "dark"
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold text-apple-blue uppercase tracking-[0.12em] block mb-3"
        >
          {tag}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] max-w-3xl leading-[1.04] transition-colors ${
          isDark ? 'text-white' : 'text-apple-lightText'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-5 text-base md:text-xl font-normal max-w-2xl leading-relaxed transition-colors ${
            isDark ? 'text-apple-muted' : 'text-apple-lightMuted'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
