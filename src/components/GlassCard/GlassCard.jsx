import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  theme = 'dark',
  onClick
}) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -3, transition: { type: 'spring', bounce: 0, duration: 0.3 } } : {}}
      whileTap={onClick ? { scale: 0.99 } : undefined}
      transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
      className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
        isDark
          ? 'bg-apple-card border border-white/10 shadow-apple-subtle hover:border-white/20 hover:shadow-apple-glass'
          : 'bg-white border border-black/10 shadow-apple-subtle-light hover:border-black/20 hover:shadow-apple-glass-light'
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};
