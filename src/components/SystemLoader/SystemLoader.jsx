import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Command } from 'lucide-react';

export const SystemLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 20;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-white font-sans"
    >
      <div className="flex flex-col items-center space-y-8 max-w-xs text-center">
        {/* Apple style icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white"
        >
          <Command className="w-8 h-8 text-white" />
        </motion.div>

        {/* Minimal Progress Line */}
        <div className="w-48 space-y-3">
          <div className="w-full h-1 bg-apple-card rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <p className="text-xs text-apple-muted font-medium tracking-tight">
            Welcome!
          </p>
        </div>
      </div>
    </motion.div>
  );
};
