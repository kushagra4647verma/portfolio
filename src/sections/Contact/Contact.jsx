import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { GlassCard } from '../../components/GlassCard/GlassCard';
import { personalInfo } from '../../data/personal';
import { Mail, Github, Linkedin, Coffee, Send, CheckCircle2 } from 'lucide-react';

export const Contact = ({ theme = 'dark' }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const isDark = theme === 'dark';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subject = `Portfolio inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className={`py-24 relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? 'bg-apple-surface text-white' : 'bg-white text-apple-lightText'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <SectionHeader
          tag="Communication"
          title="Let's build something."
          subtitle="Get in touch for engineering projects, cloud architecture, or technical collaboration."
          theme={theme}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <GlassCard theme={theme} className="p-8">
              <h4 className={`text-sm font-semibold mb-6 border-b pb-3 ${isDark ? 'text-white border-white/10' : 'text-apple-lightText border-black/10'}`}>
                Send a Message
              </h4>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                  role="status"
                >
                  <CheckCircle2 className="w-12 h-12 text-apple-blue mx-auto" />
                  <h4 className={`font-semibold text-xl ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                    Your email draft is ready
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                    Your preferred email app should open with your message filled in. Send it there to complete the request.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-full border text-xs font-medium transition-colors text-apple-blue border-apple-blue/30 hover:bg-apple-blue/10"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-medium block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name..."
                      className={`w-full border rounded-2xl px-4 py-3 text-sm focus:border-apple-blue focus:outline-none transition-all ${
                        isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-apple-lightBg border-black/10 text-black'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-medium block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email..."
                      className={`w-full border rounded-2xl px-4 py-3 text-sm focus:border-apple-blue focus:outline-none transition-all ${
                        isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-apple-lightBg border-black/10 text-black'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-medium block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Enter your message..."
                      className={`w-full border rounded-2xl px-4 py-3 text-sm focus:border-apple-blue focus:outline-none transition-all resize-none ${
                        isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-apple-lightBg border-black/10 text-black'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-apple-blue text-white font-medium text-xs tracking-tight hover:bg-apple-blueHover transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </GlassCard>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <GlassCard theme={theme} className="p-8 space-y-6">
              <h4 className={`font-semibold text-lg border-b pb-3 ${isDark ? 'text-white border-white/10' : 'text-apple-lightText border-black/10'}`}>
                Direct Channels
              </h4>

              <div className="space-y-4 text-xs">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`p-4 border rounded-2xl flex items-center gap-4 hover:border-apple-blue transition-all group ${
                    isDark ? 'bg-black/50 border-white/10' : 'bg-apple-lightBg border-black/10'
                  }`}
                >
                  <div className={`p-3 rounded-2xl border transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white group-hover:text-apple-blue' : 'bg-black/5 border-black/10 text-black group-hover:text-apple-blue'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>EMAIL</span>
                    <span className={`font-medium text-sm group-hover:text-apple-blue transition-colors ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-2xl flex items-center gap-4 hover:border-apple-blue transition-all group ${
                    isDark ? 'bg-black/50 border-white/10' : 'bg-apple-lightBg border-black/10'
                  }`}
                >
                  <div className={`p-3 rounded-2xl border transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white group-hover:text-apple-blue' : 'bg-black/5 border-black/10 text-black group-hover:text-apple-blue'
                  }`}>
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>GITHUB</span>
                    <span className={`font-medium text-sm group-hover:text-apple-blue transition-colors ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      github.com/kushagra4647verma
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-2xl flex items-center gap-4 hover:border-apple-blue transition-all group ${
                    isDark ? 'bg-black/50 border-white/10' : 'bg-apple-lightBg border-black/10'
                  }`}
                >
                  <div className={`p-3 rounded-2xl border transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white group-hover:text-apple-blue' : 'bg-black/5 border-black/10 text-black group-hover:text-apple-blue'
                  }`}>
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>LINKEDIN</span>
                    <span className={`font-medium text-sm group-hover:text-apple-blue transition-colors ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      linkedin.com/in/kushagra4647verma
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.buyMeACoffee}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 border rounded-2xl flex items-center gap-4 hover:border-apple-blue transition-all group ${
                    isDark ? 'bg-black/50 border-white/10' : 'bg-apple-lightBg border-black/10'
                  }`}
                >
                  <div className={`p-3 rounded-2xl border transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white group-hover:text-apple-blue' : 'bg-black/5 border-black/10 text-black group-hover:text-apple-blue'
                  }`}>
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <span className={`text-[10px] uppercase block ${isDark ? 'text-apple-muted' : 'text-apple-lightMuted'}`}>BUY ME A COFFEE</span>
                    <span className={`font-medium text-sm group-hover:text-apple-blue transition-colors ${isDark ? 'text-white' : 'text-apple-lightText'}`}>
                      Support my work
                    </span>
                  </div>
                </a>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
