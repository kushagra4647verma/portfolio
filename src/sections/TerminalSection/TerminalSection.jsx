import React from 'react';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Terminal } from '../../components/Terminal/Terminal';

export const TerminalSection = ({ theme = 'dark' }) => {
  const isDark = theme === 'dark';

  return (
    <section id="terminal" className={`py-24 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-apple-lightBg text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <SectionHeader
          tag="Interface"
          title="Interactive shell terminal."
          subtitle="Query system records, inspect technical skills, projects, and cloud metrics via command line."
          theme={theme}
        />

        <Terminal theme={theme} />
      </div>
    </section>
  );
};
