import React from 'react';

/**
 * LogoFallback Component
 * Displays a rich static render of the Career Craftly brand gradient logo with halo and grounding shadow
 * for WebGL-unavailable environments, low-power devices, or prefers-reduced-motion settings.
 */
const LogoFallback = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      {/* Soft Radial Lavender Halo Behind Logo */}
      <div
        className="absolute w-[340px] h-[340px] rounded-full pointer-events-none -z-10 opacity-75"
        style={{
          background:
            'radial-gradient(circle, rgba(123, 91, 240, 0.22) 0%, rgba(123, 91, 240, 0) 70%)',
        }}
      />

      {/* Static Brand Gradient Logo Render */}
      <div className="relative w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] flex items-center justify-center">
        <img
          src="/assets/loadingpagelogo.png"
          alt="Career Craftly 3D Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(107,91,240,0.35)]"
          onError={(e) => {
            e.target.style.display = 'none';
            if (e.target.parentElement) {
              e.target.parentElement.innerHTML =
                '<span class="font-bold text-6xl text-[#6B5BF0] tracking-tight">CC</span>';
            }
          }}
        />
      </div>

      {/* Soft Elliptical Grounding Shadow Under Logo */}
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{
          width: '200px',
          height: '36px',
          background: 'rgba(107, 91, 240, 0.32)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
};

export default LogoFallback;
