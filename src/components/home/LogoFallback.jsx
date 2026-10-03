import React from 'react';

/**
 * LogoFallback
 * Renders a clean static image of the Career Craftly logo with soft glowing effects
 * for low-power devices, reduced motion settings, or loading states.
 */
const LogoFallback = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      {/* Soft Radial Backlight Glow */}
      <div
        className="absolute w-[240px] h-[240px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(91, 91, 240, 0.28) 0%, rgba(129, 140, 248, 0.12) 50%, rgba(255,255,255,0) 75%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Static Glass Disk Container */}
      <div className="relative w-[180px] h-[180px] rounded-full bg-white/80 backdrop-blur-md border border-[#E8EAF0] shadow-[0_20px_50px_rgba(91,91,240,0.18)] flex items-center justify-center p-6 transition-transform">
        <img
          src="/assets/loadingpagelogo.png"
          alt="Career Craftly Logo 3D Fallback"
          className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(91,91,240,0.25)]"
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.parentElement) {
              e.target.parentElement.innerHTML =
                '<span class="font-bold text-5xl text-[#5B5BF0] tracking-tight">CC</span>';
            }
          }}
        />

        {/* Floating Chips */}
        <span className="absolute -left-10 top-4 px-3 py-1 text-[11px] font-semibold text-[#0F1222] bg-white border border-[#E8EAF0] rounded-full shadow-md">
          AI Automation
        </span>
        <span className="absolute -right-12 top-20 px-3 py-1 text-[11px] font-semibold text-[#0F1222] bg-white border border-[#E8EAF0] rounded-full shadow-md">
          Software
        </span>
        <span className="absolute left-2 -bottom-3 px-3 py-1 text-[11px] font-semibold text-[#0F1222] bg-white border border-[#E8EAF0] rounded-full shadow-md">
          Growth
        </span>
      </div>
    </div>
  );
};

export default LogoFallback;
