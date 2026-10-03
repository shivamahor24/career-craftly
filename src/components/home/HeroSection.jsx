import React, { Suspense, lazy, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';
import FlowingStreakCanvas from './FlowingStreakCanvas';
import LogoFallback from './LogoFallback';

const Hero3DCanvas = lazy(() => import('./Hero3DCanvas'));

/* ─── 10 Official AI Tool Logos with exact positions ─── */
const TOOL_BUBBLES = [
  // ── Left Side (5 tools) ──
  {
    id: 'n8n',
    name: 'n8n',
    iconSrc: '/ai-logos/n8n.svg',
    x: 22,
    y: 20,
    floatDuration: '6.5s',
    floatDelay: '0s',
    tier: 'corner', // visible on tablet & mobile corners (top-left)
    mobileClass: 'top-24 left-4',
  },
  {
    id: 'make',
    name: 'Make',
    iconSrc: '/ai-logos/make.svg',
    x: 12,
    y: 41,
    floatDuration: '7.2s',
    floatDelay: '1.2s',
    tier: 'tablet', // visible >=900px
  },
  {
    id: 'openai',
    name: 'OpenAI',
    iconSrc: '/ai-logos/openai.svg',
    x: 25,
    y: 53,
    floatDuration: '5.8s',
    floatDelay: '0.5s',
    tier: 'tablet', // visible >=900px
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    iconSrc: '/ai-logos/gemini.svg',
    x: 8,
    y: 64,
    floatDuration: '7.6s',
    floatDelay: '1.8s',
    tier: 'desktop', // visible >=1200px
  },
  {
    id: 'langchain',
    name: 'LangChain',
    iconSrc: '/ai-logos/langchain.svg',
    x: 27,
    y: 80,
    floatDuration: '6.2s',
    floatDelay: '0.9s',
    tier: 'corner', // visible on tablet & mobile corners (bottom-left)
    mobileClass: 'bottom-20 left-4',
  },

  // ── Right Side (5 tools) ──
  {
    id: 'zapier',
    name: 'Zapier',
    iconSrc: '/ai-logos/zapier.svg',
    x: 78,
    y: 20,
    floatDuration: '6.0s',
    floatDelay: '0.3s',
    tier: 'corner', // visible on tablet & mobile corners (top-right)
    mobileClass: 'top-24 right-4',
  },
  {
    id: 'claude',
    name: 'Anthropic Claude',
    iconSrc: '/ai-logos/claude.svg',
    x: 87,
    y: 41,
    floatDuration: '7.4s',
    floatDelay: '1.5s',
    tier: 'tablet', // visible >=900px
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    iconSrc: '/ai-logos/huggingface.svg',
    x: 74,
    y: 53,
    floatDuration: '5.6s',
    floatDelay: '0.8s',
    tier: 'tablet', // visible >=900px
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    iconSrc: '/ai-logos/perplexity.svg',
    x: 92,
    y: 64,
    floatDuration: '7.8s',
    floatDelay: '2.1s',
    tier: 'desktop', // visible >=1200px
  },
  {
    id: 'airtable',
    name: 'Airtable',
    iconSrc: '/ai-logos/airtable.svg',
    x: 80,
    y: 81,
    floatDuration: '6.8s',
    floatDelay: '1.1s',
    tier: 'corner', // visible on tablet & mobile corners (bottom-right)
    mobileClass: 'bottom-20 right-4',
  },
];

const HeroSection = () => {
  const [shouldRender3D, setShouldRender3D] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isLowPower =
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
      (navigator.deviceMemory && navigator.deviceMemory <= 2);

    if (prefersReducedMotion || isLowPower) {
      setShouldRender3D(false);
    }
  }, []);

  // Motion container for initial entry sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const cardStackVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.12,
      },
    },
  };

  const singleCardVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="relative w-full h-[100svh] min-h-[680px] max-h-[1080px] flex flex-col justify-between items-center overflow-hidden bg-white select-none px-4 pt-[100px] pb-6"
      aria-label="Hero Section"
    >
      {/* ─── Flowing particle streak canvas background ─── */}
      <FlowingStreakCanvas />
      {/* ─── 5 Decorative Concentric Rings (Centered at 50% x, 46% y) ─── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          maskImage:
            'radial-gradient(circle at 50% 46%, rgba(0,0,0,1) 38%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0) 84%)',
          WebkitMaskImage:
            'radial-gradient(circle at 50% 46%, rgba(0,0,0,1) 38%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0) 84%)',
        }}
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
          {/* Ring 1 (560px) with subtle breathing */}
          <div className="absolute w-[560px] h-[560px] rounded-full border border-[#E4E6EE] ring-breathe" />

          {/* Ring 2 (820px) with subtle breathing */}
          <div className="absolute w-[820px] h-[820px] rounded-full border border-[#E4E6EE] ring-breathe" />

          {/* Ring 3 (1100px) + Traveling Arc (120s Clockwise) */}
          <div className="absolute w-[1100px] h-[1100px] rounded-full border border-[#E4E6EE]">
            <svg
              className="w-full h-full ring-arc-120"
              viewBox="0 0 1100 1100"
            >
              <circle
                cx="550"
                cy="550"
                r="549.5"
                fill="none"
                stroke="url(#ring-arc-grad-1)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="210 3240"
              />
              <defs>
                <linearGradient
                  id="ring-arc-grad-1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#5B5BF0" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ring 4 (1400px) + Traveling Arc (160s Counter-Clockwise) */}
          <div className="absolute w-[1400px] h-[1400px] rounded-full border border-[#E4E6EE]">
            <svg
              className="w-full h-full ring-arc-160"
              viewBox="0 0 1400 1400"
            >
              <circle
                cx="700"
                cy="700"
                r="699.5"
                fill="none"
                stroke="url(#ring-arc-grad-2)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="270 4120"
                strokeDashoffset="600"
              />
              <defs>
                <linearGradient
                  id="ring-arc-grad-2"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#5B5BF0" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Ring 5 (1760px) + Traveling Arc (200s Clockwise) */}
          <div className="absolute w-[1760px] h-[1760px] rounded-full border border-[#E4E6EE]">
            <svg
              className="w-full h-full ring-arc-200"
              viewBox="0 0 1760 1760"
            >
              <circle
                cx="880"
                cy="880"
                r="879.5"
                fill="none"
                stroke="url(#ring-arc-grad-3)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="340 5180"
                strokeDashoffset="1400"
              />
              <defs>
                <linearGradient
                  id="ring-arc-grad-3"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#5B5BF0" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Repeating Soft Ripple Ring (Every 7s) */}
          <div className="absolute rounded-full border border-[#5B5BF0]/30 ring-ripple pointer-events-none" />
        </div>
      </div>

      {/* ─── 10 Floating AI Tool Logos (Fixed percentage coordinates on desktop, never overlapping central column) ─── */}
      <div
        className="absolute inset-0 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        {TOOL_BUBBLES.map((bubble) => {
          // Responsive visibility classes
          const visibilityClass =
            bubble.tier === 'desktop'
              ? 'hidden min-[1200px]:flex'
              : bubble.tier === 'tablet'
              ? 'hidden min-[900px]:flex'
              : 'hidden min-[600px]:flex';

          return (
            <div
              key={bubble.id}
              className={`absolute ${visibilityClass} items-center justify-center pointer-events-auto bubble-float`}
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                transform: 'translate(-50%, -50%)',
                animationDuration: bubble.floatDuration,
                animationDelay: bubble.floatDelay,
              }}
            >
              <div
                className="group relative w-[60px] h-[60px] rounded-full bg-white border border-[#E8EAF0] shadow-[0_6px_20px_rgba(20,24,60,0.06)] hover:shadow-[0_10px_28px_rgba(91,91,240,0.18)] hover:border-[#DDE2FF] transition-all duration-200 hover:scale-[1.12] flex items-center justify-center cursor-pointer shrink-0"
                title={bubble.name}
              >
                <img
                  src={bubble.iconSrc}
                  alt={`${bubble.name} logo`}
                  className="w-7 h-7 object-contain p-0.5 pointer-events-none"
                  loading="eager"
                />

                {/* Micro Tooltip Pill on Hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#0F1222] text-white text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md z-50">
                  {bubble.name}
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile Corner Bubbles (<600px: 4 small 44px bubbles tucked into corners outside text) */}
        {TOOL_BUBBLES.filter((b) => b.tier === 'corner').map((bubble) => (
          <div
            key={`mobile-${bubble.id}`}
            className={`absolute min-[600px]:hidden ${bubble.mobileClass} pointer-events-auto bubble-float`}
            style={{
              animationDuration: bubble.floatDuration,
              animationDelay: bubble.floatDelay,
            }}
          >
            <div className="w-[44px] h-[44px] rounded-full bg-white border border-[#E8EAF0] shadow-[0_4px_14px_rgba(20,24,60,0.06)] flex items-center justify-center p-2.5">
              <img
                src={bubble.iconSrc}
                alt={`${bubble.name} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* ─── Hero Central Content (max-width 640px, fully visible in 100svh) ─── */}
      <div className="relative z-20 w-full max-w-[640px] mx-auto flex flex-col items-center text-center my-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          {/* 1. Trust Badges Row (32px tall, 13px text) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-3 mb-4 sm:mb-5 text-[13px] font-semibold text-[#5B6275]"
          >
            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-1.5 h-[32px] px-3.5 rounded-full bg-white border border-[#E8EAF0] shadow-[0_2px_8px_rgba(20,24,60,0.04)] hover:border-[#DDE2FF] transition-colors">
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.7 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.6c-.3 1.5-1.1 2.8-2.4 3.7v3h3.9c2.3-2.1 3.6-5.2 3.6-8.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.2 0 6-1.1 8-3l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.8-2.1-6.7-5H1.2v3.1C3.3 21.4 7.4 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.3 14.2c-.2-.7-.4-1.5-.4-2.2s.2-1.5.4-2.2V6.7H1.2C.4 8.3 0 10.1 0 12s.4 3.7 1.2 5.3l4.1-3.1z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.3 2.6 1.2 6.7l4.1 3.1c.9-2.9 3.6-5 6.7-5z"
                />
              </svg>
              <span>[RATING] Google</span>
            </div>

            {/* Clutch Rating Pill */}
            <div className="inline-flex items-center gap-1.5 h-[32px] px-3.5 rounded-full bg-white border border-[#E8EAF0] shadow-[0_2px_8px_rgba(20,24,60,0.04)] hover:border-[#DDE2FF] transition-colors">
              <Star size={13} className="text-[#FF5A5F] fill-[#FF5A5F]" />
              <span>[RATING] Clutch</span>
            </div>
          </motion.div>

          {/* 2. Headline (Forced exactly 2 lines, weight 600, #0F1222, -0.03em, 1.08 line-height) */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(36px,4.2vw,60px)] font-display font-semibold text-[#0F1222] tracking-[-0.03em] leading-[1.08] mb-3 max-w-[640px] text-center"
          >
            AI-powered systems
            <br />
            to grow your business
          </motion.h1>

          {/* 3. Subtext (2 lines max, 17px, #5B6275, max-width 520px) */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] sm:text-[17px] text-[#5B6275] leading-relaxed max-w-[520px] mx-auto mb-5 font-normal"
          >
            From quick automations to full software products, we build the AI, tech and marketing your team needs to keep moving forward.
          </motion.p>

          {/* 4. Two Buttons Side by Side (44px tall, 15px font, 20px padding, fully rounded, 12px gap) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto mb-8"
          >
            <a
              href="#contact"
              className="h-[44px] px-5 rounded-full bg-[#0F1222] text-white hover:bg-[#5B5BF0] font-semibold text-[15px] inline-flex items-center justify-center shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] focus-visible:ring-offset-2"
            >
              Book a call
            </a>

            <Link
              to="/case-studies"
              className="h-[44px] px-5 rounded-full bg-white border border-[#E8EAF0] text-[#0F1222] hover:border-[#5B5BF0] hover:text-[#5B5BF0] font-semibold text-[15px] inline-flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] focus-visible:ring-offset-2"
            >
              See our work
            </Link>
          </motion.div>

          {/* 5. Grounded 3D Extruded Logo (Centered at ~80% hero height under buttons, height min(26vh, 240px)) */}
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-[720px] mx-auto flex flex-col items-center justify-center pointer-events-auto mt-2"
          >
            {/* Soft Radial Lavender Halo Behind Logo (breathes slowly 5s) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] rounded-full pointer-events-none -z-10 animate-breathe-halo"
              style={{
                background:
                  'radial-gradient(circle, rgba(123, 91, 240, 0.22) 0%, rgba(123, 91, 240, 0) 70%)',
              }}
              aria-hidden="true"
            />

            {/* 3D Canvas & Fallback Container (min(26vh, 240px) desktop, 190px short screens, 150px mobile) */}
            <div className="relative w-full h-[190px] min-[760px]:h-[min(26vh,240px)] max-[600px]:h-[150px] flex items-center justify-center">
              {shouldRender3D ? (
                <Suspense fallback={<LogoFallback />}>
                  <Hero3DCanvas onFloatUpdate={setFloatYVal} />
                </Suspense>
              ) : (
                <LogoFallback />
              )}

              {/* 3 Flat HTML Pills OUTSIDE 3D Canvas (Hidden <900px, level with logo center) */}
              {/* Label 1: AI Automation (Left) */}
              <div className="hidden min-[900px]:flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-[#0F1222] bg-white border border-[#E8EAF0] rounded-full shadow-[0_8px_24px_rgba(20,24,60,0.08)] select-none whitespace-nowrap pointer-events-auto absolute left-2 lg:left-6 top-[42%] -translate-y-1/2 animate-bob-1">
                <span className="w-2 h-2 rounded-full bg-[#5B5BF0] shrink-0" />
                <span>AI Automation</span>
              </div>

              {/* Label 2: Software (Right) */}
              <div className="hidden min-[900px]:flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-[#0F1222] bg-white border border-[#E8EAF0] rounded-full shadow-[0_8px_24px_rgba(20,24,60,0.08)] select-none whitespace-nowrap pointer-events-auto absolute right-2 lg:right-6 top-[42%] -translate-y-1/2 animate-bob-2">
                <span className="w-2 h-2 rounded-full bg-[#5B5BF0] shrink-0" />
                <span>Software</span>
              </div>

              {/* Label 3: Marketing (Below-Left) */}
              <div className="hidden min-[900px]:flex items-center gap-2 px-3.5 py-2 text-[13px] font-semibold text-[#0F1222] bg-white border border-[#E8EAF0] rounded-full shadow-[0_8px_24px_rgba(20,24,60,0.08)] select-none whitespace-nowrap pointer-events-auto absolute left-6 lg:left-12 top-[78%] animate-bob-3">
                <span className="w-2 h-2 rounded-full bg-[#5B5BF0] shrink-0" />
                <span>Marketing</span>
              </div>
            </div>

            {/* Soft Elliptical Grounding Shadow Under Logo (shrinks/lightens on float up, grows/darkens on float down) */}
            <div
              className="relative -mt-2 sm:-mt-4 rounded-full pointer-events-none transition-all duration-200"
              style={{
                width: `${220 * shadowScale}px`,
                height: `${40 * shadowScale}px`,
                background: `rgba(107, 91, 240, ${0.35 * Math.max(0.4, shadowOpacity)})`,
                filter: 'blur(35px)',
              }}
              aria-hidden="true"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* ─── 6. Bottom "Trusted by" Tagline (24px from bottom, 13px #8A90A2) ─── */}
      <div className="relative z-20 text-[13px] text-[#8A90A2] font-medium text-center pb-2">
        Trusted by [NUMBER] businesses across India
      </div>

      {/* ─── CSS Animations for Rings, Arcs, Ripple, and Float ─── */}
      <style>{`
        .ring-arc-120 {
          animation: arc-spin-cw 120s linear infinite;
          transform-origin: center;
        }
        .ring-arc-160 {
          animation: arc-spin-ccw 160s linear infinite;
          transform-origin: center;
        }
        .ring-arc-200 {
          animation: arc-spin-cw 200s linear infinite;
          transform-origin: center;
        }

        @keyframes arc-spin-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes arc-spin-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .ring-breathe {
          animation: breathe-slow 8s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes breathe-slow {
          0% { transform: scale(1); }
          100% { transform: scale(1.012); }
        }

        .ring-ripple {
          width: 500px;
          height: 500px;
          animation: ripple-expand 7s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          transform-origin: center;
        }

        @keyframes ripple-expand {
          0% {
            transform: scale(0.6);
            opacity: 0.6;
          }
          70% {
            opacity: 0.2;
          }
          100% {
            transform: scale(2.6);
            opacity: 0;
          }
        }

        .bubble-float {
          animation: float-subtle ease-in-out infinite;
        }

        @keyframes float-subtle {
          0%, 100% {
            margin-top: -6px;
          }
          50% {
            margin-top: 6px;
          }
        }

        @keyframes breathe-halo {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.08);
            opacity: 1;
          }
        }
        .animate-breathe-halo {
          animation: breathe-halo 5s ease-in-out infinite;
        }

        .animate-bob-1 {
          animation: float-subtle 6s ease-in-out infinite 0s;
        }
        .animate-bob-2 {
          animation: float-subtle 6s ease-in-out infinite -2s;
        }
        .animate-bob-3 {
          animation: float-subtle 6s ease-in-out infinite -4s;
        }

        @media (prefers-reduced-motion: reduce) {
          .ring-arc-120,
          .ring-arc-160,
          .ring-arc-200,
          .ring-breathe,
          .ring-ripple,
          .bubble-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
