import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { projectsData } from '../../data/projects';
import { awsLeadershipData } from '../../data/leadership';

const INITIAL_HISTORY = [
  { type: 'system', content: 'Kushagra Verma OS Terminal v1.0 [Type "help" for commands]' }
];

export const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', content: cmd }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: `Available commands:\n  help        - List all commands\n  about       - Summary of developer profile\n  skills      - Engineering technologies & languages\n  experience  - Industry experience\n  projects    - Production projects\n  aws         - AWS Student Builder Group community stats\n  contact     - Email & social links\n  github      - Open GitHub\n  linkedin    - Open LinkedIn\n  clear       - Clear screen`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          content: `${personalInfo.name} — ${personalInfo.positioning}\nLocation: ${personalInfo.location}\nEducation: ${personalInfo.education.degree} (${personalInfo.education.years})\nInstitution: ${personalInfo.education.institution}\nCGPA: ${personalInfo.education.cgpa} (${personalInfo.education.status})`
        });
        break;

      case 'skills':
        {
          const allSkills = skillsData.categories.flatMap(c => c.skills);
          newHistory.push({
            type: 'output',
            content: allSkills.join('\n')
          });
        }
        break;

      case 'experience':
        {
          const expText = experienceData.map(e => `${e.company} | ${e.role} (${e.period})\n- ${e.achievements.join('\n- ')}`).join('\n\n');
          newHistory.push({
            type: 'output',
            content: expText
          });
        }
        break;

      case 'projects':
        {
          const projText = projectsData.map(p => `[${p.title}] — ${p.category}\nTech: ${p.tech.join(', ')}\n${p.description}`).join('\n\n');
          newHistory.push({
            type: 'output',
            content: projText
          });
        }
        break;

      case 'aws':
        {
          const awsText = `${awsLeadershipData.role}\nInstitution: ${awsLeadershipData.institution}\nMetrics:\n${awsLeadershipData.metrics.map(m => ` - ${m.label}: ${m.value}`).join('\n')}`;
          newHistory.push({
            type: 'output',
            content: awsText
          });
        }
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`
        });
        break;

      case 'github':
        window.open(personalInfo.github, '_blank');
        newHistory.push({ type: 'output', content: `Opening GitHub (${personalInfo.github})...` });
        break;

      case 'linkedin':
        window.open(personalInfo.linkedin, '_blank');
        newHistory.push({ type: 'output', content: `Opening LinkedIn (${personalInfo.linkedin})...` });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'output',
          content: `Command not recognized: "${cmd}". Type "help" for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="w-full bg-apple-card border border-white/10 rounded-3xl overflow-hidden font-mono shadow-apple-glass">
      {/* macOS Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-apple-surface border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block" />
          <span className="text-xs text-apple-muted font-mono ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-apple-blue" />
            kushagra@macbook-pro:~
          </span>
        </div>
        <span className="text-[11px] font-mono text-apple-muted">zsh</span>
      </div>

      {/* Output Console */}
      <div className="p-5 h-72 overflow-y-auto space-y-3 text-xs md:text-sm text-apple-muted">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === 'user' && (
              <div className="flex items-center gap-2 text-white">
                <span className="text-apple-blue font-semibold">kushagra@macbook-pro:~$</span>
                <span className="font-semibold">{item.content}</span>
              </div>
            )}
            {item.type === 'system' && (
              <div className="text-apple-muted italic">
                {item.content}
              </div>
            )}
            {item.type === 'output' && (
              <pre className="whitespace-pre-wrap font-mono text-apple-offWhite leading-relaxed pl-4 border-l border-white/10">
                {item.content}
              </pre>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Prompt Form */}
      <form onSubmit={handleCommand} className="flex items-center gap-2 px-4 py-3 bg-black/40 border-t border-white/10">
        <span className="text-apple-blue text-xs font-semibold whitespace-nowrap">
          kushagra@macbook-pro:~$
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type 'help'..."
          className="flex-1 bg-transparent border-none outline-none text-white text-xs md:text-sm font-mono placeholder:text-apple-muted/50"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-apple-blue/15 text-apple-blue hover:bg-apple-blue hover:text-white transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
