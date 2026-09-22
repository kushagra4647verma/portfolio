import React from 'react';
import { motion } from 'framer-motion';

export const StatusPanel = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';
  const statusItems = [
    { label: "Systems", value: "Online", isBlue: true },
    { label: "Cloud", value: "AWS", isBlue: false },
    { label: "Frontend", value: "React / Next.js", isBlue: false },
    { label: "Backend", value: "Node.js", isBlue: false },
    { label: "Status", value: "Available for Hire", isBlue: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', bounce: 0, duration: 0.4, delay: 0.25 }}
      className={`w-full max-w-sm rounded-3xl p-6 shadow-apple-glass font-sans border backdrop-blur-2xl ${isDark ? 'bg-apple-card/90 border-white/10' : 'bg-white/90 border-black/10 shadow-apple-glass-light'}`}
    >
      <div className={`flex items-center justify-between border-b pb-4 mb-4 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
        <div>
          <h4 className={`text-sm font-semibold tracking-tight ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
            System Overview
          </h4>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
            Full-Stack Developer · Bengaluru, India
          </p>
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-apple-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-apple-blue"></span>
        </span>
      </div>

      <div className="space-y-3 text-xs">
        {statusItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <span className={`${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'} font-normal`}>{item.label}</span>
            <span
              className={`font-medium px-2.5 py-1 rounded-full text-xs ${
                item.isBlue
                  ? 'bg-apple-blue/15 text-apple-blue border border-apple-blue/30'
                  : isDark ? 'bg-white/5 text-white border border-white/10' : 'bg-black/5 text-apple-lightText border border-black/10'
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] ${isDark ? 'border-white/5 text-apple-muted' : 'border-black/5 text-apple-lightMuted'}`}>
        <span>B.E. CS 2027</span>
        <span>CGPA 8.88 / 10</span>
      </div>
    </motion.div>
  );
};
