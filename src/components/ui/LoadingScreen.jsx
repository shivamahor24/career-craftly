import React, { useEffect, useState } from 'react';

const ORBIT_BUBBLES = [
  {
    id: 'bubble-1',
    tool: 'OpenAI',
    iconSrc: '/ai-logos/openai.svg',
    ring: 'inner', // Ring 2 (radius 280px)
    radius: 280,
    startAngle: 20,
  },
  {
    id: 'bubble-2',
    tool: 'Claude',
    iconSrc: '/ai-logos/claude.svg',
    ring: 'inner', // Ring 2 (radius 280px)
    radius: 280,
    startAngle: 200,
  },
  {
    id: 'bubble-3',
    tool: 'Gemini',
    iconSrc: '/ai-logos/gemini.svg',
    ring: 'outer', // Ring 3 (radius 410px) / Ring 4 (radius 560px)
    radius: 410,
    startAngle: 140,
  },
  {
    id: 'bubble-4',
    tool: 'n8n',
    iconSrc: '/ai-logos/n8n.svg',
    ring: 'outer',
    radius: 560,
    startAngle: 320,
  },
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isBarFading, setIsBarFading] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Lock body scroll while loader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Smooth realistic progress counter
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 2;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        // Sequence exit transition
        // Step 1: Progress bar and text fade out in 200ms
        setTimeout(() => {
          setIsBarFading(true);
        }, 150);

        // Step 2: Overlay fades out and scales up slightly over 600ms
        setTimeout(() => {
          setIsExiting(true);
        }, 350);

        // Step 3: Remove loader from DOM and trigger hero entrance
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 950);
      } else {
        setProgress(current);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden select-none transition-all duration-600 ease-out ${
        isExiting
          ? 'opacity-0 scale-[1.04] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        height: '100svh',
        width: '100vw',
        willChange: 'transform, opacity',
        fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading Career Craftly"
    >
      {/* ─── 4 Concentric Orbit Rings (Decorative, aria-hidden) ─── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{
          maskImage:
            'radial-gradient(circle at center, rgba(0,0,0,1) 38%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0) 84%)',
          WebkitMaskImage:
            'radial-gradient(circle at center, rgba(0,0,0,1) 38%, rgba(0,0,0,0.85) 62%, rgba(0,0,0,0) 84%)',
        }}
        aria-hidden="true"
      >
        {/* Soft Expanding Ripple (every 5s) */}
        <div className="absolute rounded-full border border-[rgba(91,91,240,0.35)] loader-ripple-ring pointer-events-none" />

        {/* Ring 1 (Diameter 340px) + 14s Clockwise Arc */}
        <div className="absolute w-[340px] h-[340px] rounded-full border border-[#E6E8F0] flex items-center justify-center">
          <svg
            className="w-full h-full loader-arc-cw-14"
            viewBox="0 0 340 340"
            style={{ willChange: 'transform' }}
          >
            <circle
              cx="170"
              cy="170"
              r="169.25"
              fill="none"
              stroke="url(#loader-arc-grad-1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="66 1000"
            />
            <defs>
              <linearGradient
                id="loader-arc-grad-1"
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

        {/* Ring 2 (Diameter 560px) */}
        <div className="absolute w-[560px] h-[560px] rounded-full border border-[#E6E8F0]" />

        {/* Ring 3 (Diameter 820px) + 22s Counter-Clockwise Arc (Hidden <600px) */}
        <div className="hidden min-[600px]:flex absolute w-[820px] h-[820px] rounded-full border border-[#E6E8F0] items-center justify-center">
          <svg
            className="w-full h-full loader-arc-ccw-22"
            viewBox="0 0 820 820"
            style={{ willChange: 'transform' }}
          >
            <circle
              cx="410"
              cy="410"
              r="409.25"
              fill="none"
              stroke="url(#loader-arc-grad-2)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="160 2410"
              strokeDashoffset="300"
            />
            <defs>
              <linearGradient
                id="loader-arc-grad-2"
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

        {/* Ring 4 (Diameter 1120px) (Hidden <600px) */}
        <div className="hidden min-[600px]:block absolute w-[1120px] h-[1120px] rounded-full border border-[#E6E8F0]" />

        {/* ─── 4 Orbiting White Bubbles with AI Tool Logos ─── */}
        {ORBIT_BUBBLES.map((bubble) => {
          const isOuter = bubble.ring === 'outer';
          return (
            <div
              key={bubble.id}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                isOuter ? 'hidden min-[600px]:block' : 'block'
              }`}
              style={{
                width: `${bubble.radius * 2}px`,
                height: `${bubble.radius * 2}px`,
              }}
            >
              {/* Rotating Container (26s full circle) */}
              <div
                className="w-full h-full loader-orbit-rotate"
                style={{
                  transform: `rotate(${bubble.startAngle}deg)`,
                  animationDuration: '26s',
                }}
              >
                {/* Bubble Placed on the Orbit Perimeter */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full bg-white border border-[#E8EAF0] shadow-[0_8px_24px_rgba(20,24,60,0.08)] flex items-center justify-center p-2.5"
                  title={bubble.tool}
                >
                  {/* Counter-rotate icon to keep upright */}
                  <div
                    className="w-full h-full flex items-center justify-center loader-orbit-counter-rotate"
                    style={{
                      transform: `rotate(-${bubble.startAngle}deg)`,
                      animationDuration: '26s',
                    }}
                  >
                    <img
                      src={bubble.iconSrc}
                      alt={bubble.tool}
                      className="w-5 h-5 object-contain pointer-events-none"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ─── Center Column: Logo Orb, Title, Tagline, Progress Bar ─── */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-[500px]">
        {/* Logo Orb with 8px 5s ease-in-out Float */}
        <div className="relative loader-orb-float">
          <div
            className="w-[116px] h-[116px] max-[900px]:w-[96px] max-[900px]:h-[96px] rounded-full flex items-center justify-center relative border border-white"
            style={{
              background: 'radial-gradient(circle at center, #FFFFFF 0%, #F1F3FB 100%)',
              boxShadow:
                '0 24px 60px rgba(91,91,240,0.18), inset 0 -8px 20px rgba(91,91,240,0.08)',
            }}
          >
            <img
              src="/assets/loadingpagelogo.png"
              alt="Career Craftly"
              className="w-[56px] h-[56px] max-[900px]:w-[46px] max-[900px]:h-[46px] object-contain drop-shadow-[0_4px_12px_rgba(91,91,240,0.15)]"
              loading="eager"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-[34px] text-[28px] max-[600px]:text-[24px] font-bold text-[#0F1222] tracking-[-0.02em] leading-tight">
          Career Craftly
        </h1>

        {/* Tagline */}
        <p className="mt-[8px] text-[16px] max-[600px]:text-[14px] text-[#5B6275] max-w-[420px] font-normal leading-relaxed">
          Where intelligent automation meets real-world execution
        </p>

        {/* Progress Bar & Percentage (Fades out 200ms before overlay scale-fade exit) */}
        <div
          className={`flex flex-col items-center transition-opacity duration-200 ease-out ${
            isBarFading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {/* Progress Track */}
          <div
            className="w-[240px] h-[6px] bg-[#EEF0F8] rounded-full overflow-hidden mt-[26px] relative shadow-inner"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full transition-all duration-150 ease-out bg-gradient-to-r from-[#8FA2FF] to-[#5B5BF0]"
              style={{
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(91,91,240,0.4)',
              }}
            />
          </div>

          {/* Percentage Text */}
          <span className="text-[13px] text-[#8A90A2] font-mono tabular-nums mt-2.5 font-medium tracking-tight">
            {progress}%
          </span>
        </div>
      </div>

      {/* ─── Scoped Keyframes & Performance CSS ─── */}
      <style>{`
        @keyframes loader-orb-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes loader-ripple {
          0% {
            width: 120px;
            height: 120px;
            opacity: 0.8;
            transform: scale(0.9);
          }
          100% {
            width: 1400px;
            height: 1400px;
            opacity: 0;
            transform: scale(1.1);
          }
        }

        @keyframes loader-spin-cw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-spin-ccw {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        .loader-orb-float {
          animation: loader-orb-float 5s ease-in-out infinite;
          will-change: transform;
        }

        .loader-ripple-ring {
          animation: loader-ripple 5s cubic-bezier(0.1, 0.4, 0.2, 1) infinite;
          will-change: transform, opacity;
        }

        .loader-arc-cw-14 {
          animation: loader-spin-cw 14s linear infinite;
          transform-origin: center;
        }

        .loader-arc-ccw-22 {
          animation: loader-spin-ccw 22s linear infinite;
          transform-origin: center;
        }

        .loader-orbit-rotate {
          animation: loader-spin-cw 26s linear infinite;
          transform-origin: center;
          will-change: transform;
        }

        .loader-orbit-counter-rotate {
          animation: loader-spin-ccw 26s linear infinite;
          transform-origin: center;
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-orb-float,
          .loader-ripple-ring,
          .loader-arc-cw-14,
          .loader-arc-ccw-22,
          .loader-orbit-rotate,
          .loader-orbit-counter-rotate {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
