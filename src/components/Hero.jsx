import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParticleHeadline from "./ParticleHeadline";

/**
 * Interactive hero orb for CareerCraftly.
 * - The chrome sphere tilts and its highlight shifts toward the cursor (parallax).
 * - Clicking anywhere sends out a ripple, echoing the water-ring background.
 * - CTAs get a soft magnetic lift on hover.
 *
 * Drop this in as your hero section. Replace the gradient background
 * with your actual water/ripple image if you have one as an asset.
 */

function ChromeOrb() {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, hx: 50, hy: 35 });

  const handleMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({
      rx: (py - 0.5) * -10, // rotateX
      ry: (px - 0.5) * 10, // rotateY
      hx: 30 + px * 40, // highlight position
      hy: 20 + py * 30,
    });
  };

  const reset = () => setTilt({ rx: 0, ry: 0, hx: 50, hy: 35 });

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative w-[360px] h-[360px] mx-auto motion-reduce:!transform-none cursor-pointer"
      style={{ perspective: "900px" }}
    >
      <div
        className="w-full h-full rounded-full motion-reduce:transform-none"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 200ms ease-out",
          background: `
            radial-gradient(circle at ${tilt.hx}% ${tilt.hy}%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.25) 12%, transparent 28%),
            radial-gradient(circle at 65% 70%, rgba(0,0,0,0.15) 0%, transparent 45%),
            linear-gradient(145deg, #e9e9ec 0%, #c9cad0 35%, #f2f2f4 55%, #b7b8bd 80%, #e2e3e6 100%)
          `,
          boxShadow: "0 30px 60px -20px rgba(0,0,0,0.35), inset 0 0 40px rgba(255,255,255,0.4)",
        }}
      />
    </div>
  );
}

function RippleField({ children }) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((r) => [...r, { id, x, y }]);
    setTimeout(() => {
      setRipples((r) => r.filter((rp) => rp.id !== id));
    }, 1200);
  };

  return (
    <div onClick={addRipple} className="relative w-full h-full overflow-hidden">
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full border border-neutral-400/50 motion-reduce:hidden"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            animation: "ripple-expand 1.2s ease-out forwards",
          }}
        />
      ))}
      <style>{`
        @keyframes ripple-expand {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(40); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function MagneticCTA({ children, variant = "light", onClick }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
  };
  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    "px-6 py-3 rounded-full text-sm font-semibold transition-transform duration-150 ease-out motion-reduce:!transform-none cursor-pointer";
  const styles =
    variant === "light"
      ? "bg-white/80 text-neutral-800 border border-neutral-200 hover:shadow-md"
      : "bg-neutral-100/70 text-neutral-800 border border-neutral-200 hover:shadow-md";

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`${base} ${styles}`}
    >
      {children}
    </button>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300">
      <RippleField>
        <div className="flex flex-col items-center justify-center pt-28 pb-20 px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 border border-neutral-200 px-4 py-2 text-xs font-semibold tracking-wide text-neutral-600 shadow-sm">
            <span>✨</span> AI Solutions for Modern Businesses
          </div>

          <ChromeOrb />

          <ParticleHeadline
            text="CAREER CRAFTLY"
            fontSize={110}
            color="#0f0f0f"
          />
          <p className="mt-4 text-lg text-neutral-600 text-center max-w-xl">
            Where intelligent automation meets real-world execution
          </p>

          <div className="mt-8 flex gap-4">
            <MagneticCTA variant="light" onClick={() => navigate('/contact')}>
              ✨ Get Started
            </MagneticCTA>
            <MagneticCTA variant="muted" onClick={() => navigate('/services')}>
              Explore Services
            </MagneticCTA>
          </div>

          <p className="mt-16 text-xs text-neutral-400">Click anywhere for a ripple</p>
        </div>
      </RippleField>
    </div>
  );
}
