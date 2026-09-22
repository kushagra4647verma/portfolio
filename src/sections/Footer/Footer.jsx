import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Coffee,
  ArrowUpRight,
  ArrowUp,
  MapPin,
  GraduationCap,
} from 'lucide-react';
import { personalInfo } from '../../data/personal';

const NAV_LINKS = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'aws', label: 'AWS Leadership' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'terminal', label: 'Terminal' },
  { id: 'contact', label: 'Contact' },
];

export const Footer = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  const scrollTo = (id) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      label: 'GitHub',
      href: personalInfo.github,
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      icon: Linkedin,
    },
    {
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      label: 'Buy Me a Coffee',
      href: personalInfo.buyMeACoffee,
      icon: Coffee,
    },
  ];

  return (
    <footer
      className={`
        relative overflow-hidden
        border-t
        transition-colors duration-500
        ${
          isDark
            ? 'bg-[#050505] border-white/[0.08] text-white'
            : 'bg-[#f5f5f7] border-black/[0.08] text-[#1d1d1f]'
        }
      `}
    >

      {/* ------------------------------------------------ */}
      {/* SUBTLE BACKGROUND GRADIENT                      */}
      {/* ------------------------------------------------ */}

      <div
        className={`
          pointer-events-none absolute
          -right-40 -top-40
          h-[500px] w-[500px]
          rounded-full
          blur-[100px]
          opacity-30
          ${
            isDark
              ? 'bg-blue-500/10'
              : 'bg-blue-400/10'
          }
        `}
      />

      <div
        className={`
          pointer-events-none absolute
          left-[35%] bottom-0
          h-[300px] w-[300px]
          rounded-full
          blur-[120px]
          opacity-20
          ${
            isDark
              ? 'bg-cyan-400/5'
              : 'bg-blue-300/10'
          }
        `}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">

        {/* ================================================= */}
        {/* MAIN FOOTER                                       */}
        {/* ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-16
            py-20
            md:py-24
            lg:grid-cols-12
            lg:gap-10
            lg:py-28
          "
        >

          {/* ================================================= */}
          {/* LEFT — MAIN CTA                                   */}
          {/* ================================================= */}

          <div className="lg:col-span-6">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">

              <span
                className="
                  h-2 w-2
                  rounded-full
                  bg-[#2997ff]
                  shadow-[0_0_12px_rgba(41,151,255,0.55)]
                "
              />

              <span
                className={`
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  ${
                    isDark
                      ? 'text-white/45'
                      : 'text-black/45'
                  }
                `}
              >
                Let's stay in touch
              </span>

            </div>


            {/* Main heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: '-80px',
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                max-w-[650px]
                text-[clamp(3.4rem,6vw,6rem)]
                font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                ${
                  isDark
                    ? 'text-white'
                    : 'text-[#1d1d1f]'
                }
              `}
            >
              Build the
              <br />
              next{' '}
              <span
                className={
                  isDark
                    ? 'text-white/35'
                    : 'text-black/35'
                }
              >
                together.
              </span>
            </motion.h2>


            {/* Description */}
            <p
              className={`
                mt-8
                max-w-[520px]
                text-base
                leading-7
                md:text-lg
                md:leading-8
                ${
                  isDark
                    ? 'text-white/45'
                    : 'text-[#6e6e73]'
                }
              `}
            >
              I'm always open to discussing new opportunities,
              interesting projects, or just having a conversation
              about technology, cloud, and ideas.
            </p>


            {/* CTA + Social */}
            <div className="mt-10 flex flex-wrap items-center gap-3">

              {/* Social buttons */}
              {socialLinks.map(
                ({ label, href, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={
                      href.startsWith('http')
                        ? '_blank'
                        : undefined
                    }
                    rel={
                      href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    aria-label={label}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      ${
                        isDark
                          ? `
                            border-white/10
                            bg-white/[0.04]
                            text-white/70
                            hover:border-white/20
                            hover:bg-white/[0.08]
                            hover:text-white
                          `
                          : `
                            border-black/[0.08]
                            bg-white
                            text-[#1d1d1f]
                            shadow-[0_2px_8px_rgba(0,0,0,0.04)]
                            hover:border-black/15
                            hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
                          `
                      }
                    `}
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </motion.a>
                )
              )}


              {/* Divider */}
              <div
                className={`
                  mx-2
                  hidden
                  h-7
                  w-px
                  sm:block
                  ${
                    isDark
                      ? 'bg-white/10'
                      : 'bg-black/10'
                  }
                `}
              />


              {/* Main CTA */}
              <motion.button
                whileHover={{
                  y: -2,
                  scale: 1.01,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => scrollTo('contact')}
                className={`
                  group
                  flex
                  h-12
                  items-center
                  gap-3
                  rounded-full
                  px-6
                  text-sm
                  font-medium
                  transition-all
                  ${
                    isDark
                      ? `
                        bg-white
                        text-black
                        hover:bg-[#2997ff]
                        hover:text-white
                      `
                      : `
                        bg-[#1d1d1f]
                        text-white
                        hover:bg-[#2997ff]
                      `
                  }
                `}
              >
                <span>Get in Touch</span>

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.button>

            </div>

          </div>


          {/* ================================================= */}
          {/* RIGHT — NAVIGATION + CURRENTLY                   */}
          {/* ================================================= */}

          <div className="lg:col-span-6">

            <div
              className="
                grid
                grid-cols-2
                gap-x-10
                gap-y-14
                sm:grid-cols-3
              "
            >

              {/* Navigation */}
              <div>

                <h3
                  className={`
                    mb-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    ${
                      isDark
                        ? 'text-white/35'
                        : 'text-black/40'
                    }
                  `}
                >
                  Navigation
                </h3>

                <div className="space-y-3">

                  {NAV_LINKS.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`
                        group
                        block
                        text-left
                        text-sm
                        transition-colors
                        ${
                          isDark
                            ? `
                              text-white/55
                              hover:text-white
                            `
                            : `
                              text-[#6e6e73]
                              hover:text-[#1d1d1f]
                            `
                        }
                      `}
                    >
                      <span className="relative">

                        {item.label}

                        <span
                          className="
                            absolute
                            -bottom-1
                            left-0
                            h-px
                            w-0
                            bg-current
                            transition-all
                            duration-300
                            group-hover:w-full
                          "
                        />

                      </span>
                    </button>
                  ))}

                </div>

              </div>


              {/* Resources */}
              <div>

                <h3
                  className={`
                    mb-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    ${
                      isDark
                        ? 'text-white/35'
                        : 'text-black/40'
                    }
                  `}
                >
                  Elsewhere
                </h3>

                <div className="space-y-3">

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group
                      flex
                      items-center
                      gap-1.5
                      text-sm
                      ${
                        isDark
                          ? 'text-white/55 hover:text-white'
                          : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                      }
                    `}
                  >
                    GitHub
                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-40
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>


                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group
                      flex
                      items-center
                      gap-1.5
                      text-sm
                      ${
                        isDark
                          ? 'text-white/55 hover:text-white'
                          : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                      }
                    `}
                  >
                    LinkedIn
                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-40
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>


                  <a
                    href={`mailto:${personalInfo.email}`}
                    className={`
                      group
                      flex
                      items-center
                      gap-1.5
                      text-sm
                      ${
                        isDark
                          ? 'text-white/55 hover:text-white'
                          : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                      }
                    `}
                  >
                    Email
                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-40
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>

                  <a
                    href={personalInfo.buyMeACoffee}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group
                      flex
                      items-center
                      gap-1.5
                      text-sm
                      ${
                        isDark
                          ? 'text-white/55 hover:text-white'
                          : 'text-[#6e6e73] hover:text-[#1d1d1f]'
                      }
                    `}
                  >
                    Buy Me a Coffee
                    <ArrowUpRight
                      size={13}
                      className="
                        opacity-40
                        transition-transform
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>

                </div>

              </div>


              {/* Currently */}
              <div className="col-span-2 sm:col-span-1">

                <h3
                  className={`
                    mb-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    ${
                      isDark
                        ? 'text-white/35'
                        : 'text-black/40'
                    }
                  `}
                >
                  Currently
                </h3>


                {/* Availability */}
                <div className="mb-7 flex items-center gap-2">

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#2997ff]
                      shadow-[0_0_10px_rgba(41,151,255,0.5)]
                    "
                  />

                  <span
                    className={`
                      text-sm
                      font-medium
                      ${
                        isDark
                          ? 'text-white'
                          : 'text-[#1d1d1f]'
                      }
                    `}
                  >
                    Open to Opportunities
                  </span>

                </div>


                {/* Details */}
                <div
                  className={`
                    space-y-4
                    border-t
                    pt-5
                    text-sm
                    ${
                      isDark
                        ? 'border-white/10 text-white/50'
                        : 'border-black/10 text-[#6e6e73]'
                    }
                  `}
                >

                  <div className="flex items-center gap-3">
                    <MapPin
                      size={15}
                      className="text-[#2997ff]"
                    />
                    <span>Bengaluru, India</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <GraduationCap
                      size={15}
                      className="text-[#2997ff]"
                    />
                    <span>CS Engineering · 2027</span>
                  </div>

                  <div
                    className={`
                      pl-7
                      text-xs
                      ${
                        isDark
                          ? 'text-white/30'
                          : 'text-black/35'
                      }
                    `}
                  >
                    CGPA 8.88 / 10
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================================================= */}
        {/* BOTTOM BAR                                        */}
        {/* ================================================= */}

        <div
          className={`
            flex
            flex-col
            gap-6
            border-t
            py-7
            md:flex-row
            md:items-center
            md:justify-between
            ${
              isDark
                ? 'border-white/[0.08]'
                : 'border-black/[0.08]'
            }
          `}
        >

          {/* Identity */}
          <div>

            <p
              className={`
                text-sm
                font-medium
                ${
                  isDark
                    ? 'text-white'
                    : 'text-[#1d1d1f]'
                }
              `}
            >
              Kushagra Verma
            </p>

            <p
              className={`
                mt-1
                text-xs
                ${
                  isDark
                    ? 'text-white/35'
                    : 'text-[#6e6e73]'
                }
              `}
            >
              Full-Stack Developer · Bengaluru, India
            </p>

          </div>


          {/* System status */}
          <div
            className={`
              order-3
              flex
              items-center
              gap-2
              text-xs
              md:order-2
              ${
                isDark
                  ? 'text-white/40'
                  : 'text-[#6e6e73]'
              }
            `}
          >

    

          </div>


          {/* Copyright + top */}
          <div
            className="
              flex
              items-center
              gap-5
              md:order-3
            "
          >

            <div
              className={`
                text-right
                text-[11px]
                ${
                  isDark
                    ? 'text-white/30'
                    : 'text-[#86868b]'
                }
              `}
            >
              <p>© 2026 Kushagra Verma</p>

              <p className="mt-1 font-mono tracking-[0.12em]">
                BUILT WITH CODE & CURIOSITY
              </p>
            </div>


            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.92,
              }}
              aria-label="Back to top"
              className={`
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                transition-all
                ${
                  isDark
                    ? `
                      border-white/10
                      bg-white/[0.04]
                      text-white/60
                      hover:bg-white
                      hover:text-black
                    `
                    : `
                      border-black/[0.08]
                      bg-white
                      text-[#1d1d1f]
                      shadow-sm
                      hover:bg-[#1d1d1f]
                      hover:text-white
                    `
                }
              `}
            >
              <ArrowUp size={16} />
            </motion.button>

          </div>

        </div>

      </div>

    </footer>
  );
};
