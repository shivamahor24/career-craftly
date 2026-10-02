import React, { useRef, useEffect, useLayoutEffect, useCallback } from "react";

/**
 * ParticleHeadline
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders a heading whose letters appear to be made of tiny black particles
 * that continuously drift between a scattered "noise/static" state and a clean,
 * resolved solid-letter state — a subtle ambient glitch / breathing look.
 *
 * Usage
 * ─────
 *   <ParticleHeadline
 *     text="CAREER CRAFTLY"
 *     className="mt-6 text-6xl md:text-7xl font-black tracking-tight text-neutral-900 text-center"
 *   />
 *
 * Props
 * ─────
 *   text        – The headline string to render.
 *   className   – Tailwind / CSS classes applied to the invisible <h1> (controls
 *                 font, size, spacing, colour — canvas mirrors these exactly).
 *   tag         – HTML element for the accessible text node (default: "h1").
 *   particleColor  – Dot fill colour (default: "#111111").
 *   maxParticles   – Hard cap on particle count (default: 2800).
 *   sampleStep     – Pixel stride when sampling the offscreen canvas (default: 2).
 *
 * Accessibility / SEO
 * ───────────────────
 *   The real text node is kept in the DOM at opacity:0 so screen-readers,
 *   search-engine crawlers, and text-selection all work normally.
 *   When prefers-reduced-motion is active the canvas is hidden and the real
 *   text is shown at full opacity — zero animation, zero canvas overhead.
 */

/* ─── easing ─────────────────────────────────────────────────────────────── */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/* ─── stable fast PRNG (mulberry32) ─────────────────────────────────────── */
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ─── read computed font shorthand from a real DOM element ───────────────── */
function getComputedFontShorthand(el) {
  const cs = window.getComputedStyle(el);
  const style = cs.fontStyle !== "normal" ? cs.fontStyle + " " : "";
  const variant = cs.fontVariant !== "normal" ? cs.fontVariant + " " : "";
  const weight = cs.fontWeight;
  const size = cs.fontSize;
  const family = cs.fontFamily;
  return `${style}${variant}${weight} ${size} ${family}`;
}

/* ─── component ──────────────────────────────────────────────────────────── */
export default function ParticleHeadline({
  text = "CAREER CRAFTLY",
  className = "",
  tag: Tag = "h1",
  particleColor = "#111111",
  maxParticles = 2800,
  sampleStep = 2,
}) {
  const textRef = useRef(null);
  const canvasRef = useRef(null);
  const stateRef = useRef({
    particles: [],
    rafId: null,
    clusters: [],
    nextClusterAt: 0,
    lastWidth: 0,
    lastHeight: 0,
  });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const buildParticles = useCallback(() => {
    const textEl = textRef.current;
    const canvas = canvasRef.current;
    if (!textEl || !canvas) return;

    const rect = textEl.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const W = Math.round(rect.width);
    const H = Math.round(rect.height);
    if (W === 0 || H === 0) return;

    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    const state = stateRef.current;
    state.lastWidth = W;
    state.lastHeight = H;

    const off = document.createElement("canvas");
    off.width = W * dpr;
    off.height = H * dpr;
    const octx = off.getContext("2d");
    octx.scale(dpr, dpr);

    const font = getComputedFontShorthand(textEl);
    const cs = window.getComputedStyle(textEl);
    const letterSpacing = parseFloat(cs.letterSpacing) || 0;

    octx.font = font;
    octx.fillStyle = "#000000";
    octx.textBaseline = "middle";

    const chars = Array.from(text);
    let totalW = 0;
    const advances = chars.map((ch) => {
      const adv = octx.measureText(ch).width + letterSpacing;
      totalW += adv;
      return adv;
    });
    totalW -= letterSpacing;

    let cx = (W - totalW) / 2;
    chars.forEach((ch, i) => {
      octx.fillText(ch, cx, H / 2);
      cx += advances[i];
    });

    const imgData = octx.getImageData(0, 0, off.width, off.height);
    const pixels = imgData.data;
    const stride = sampleStep * dpr;

    const points = [];
    for (let py = 0; py < off.height; py += stride) {
      for (let px = 0; px < off.width; px += stride) {
        const idx = (py * off.width + px) * 4;
        if (pixels[idx + 3] > 128) {
          points.push({ x: px / dpr, y: py / dpr });
        }
      }
    }

    const ratio = points.length > maxParticles ? maxParticles / points.length : 1;
    const rng = mulberry32(0xdeadbeef);

    const particles = [];
    for (const pt of points) {
      if (rng() <= ratio) {
        particles.push({
          tx: pt.x,
          ty: pt.y,
          cx: pt.x,
          cy: pt.y,
          ox: pt.x,
          oy: pt.y,
          sx: pt.x,
          sy: pt.y,
          t: 1,
          inCluster: false,
          phase: "idle",
          holdUntil: 0,
          returnStart: 0,
          returnDuration: 500,
          size: 1 + rng() * 0.5,
        });
      }
    }

    state.particles = particles;
    state.clusters = [];
    state.nextClusterAt = performance.now() + 300;
  }, [text, maxParticles, sampleStep]);

  const animate = useCallback(
    (now) => {
      const state = stateRef.current;
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      const dpr = window.devicePixelRatio || 1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = particleColor;

      /* ── spawn new disturbance clusters ───────────────────────────────── */
      if (now >= state.nextClusterAt && state.particles.length > 0) {
        const rng = mulberry32((now * 0.001) | 0);
        const numClusters = 1 + Math.floor(rng() * 3);

        for (let c = 0; c < numClusters; c++) {
          const available = state.particles.filter((p) => !p.inCluster);
          if (available.length === 0) break;

          const anchor = available[Math.floor(rng() * available.length)];
          const radius = 30 + rng() * 50;

          const cluster = state.particles.filter(
            (p) =>
              !p.inCluster &&
              Math.hypot(p.tx - anchor.tx, p.ty - anchor.ty) <= radius
          );
          if (cluster.length === 0) continue;

          const holdMs = 150 + rng() * 150;
          const returnMs = 400 + rng() * 200;
          const scatterStart = now;
          const holdUntil = now + holdMs;
          const returnStart = holdUntil;

          for (const p of cluster) {
            p.inCluster = true;
            const angle = rng() * Math.PI * 2;
            const dist = 4 + rng() * 11;
            p.sx = p.tx + Math.cos(angle) * dist;
            p.sy = p.ty + Math.sin(angle) * dist;
            p.ox = p.cx;
            p.oy = p.cy;
            p.phase = "scatter";
            p.scatterStart = scatterStart;
            p.holdUntil = holdUntil;
            p.returnStart = returnStart;
            p.returnDuration = returnMs;
          }
        }

        state.nextClusterAt = now + 600 + mulberry32((now * 0.001) | 0)() * 1200;
      }

      /* ── update & draw ────────────────────────────────────────────────── */
      ctx.beginPath();

      for (const p of state.particles) {
        if (p.phase === "scatter") {
          // Snap to scattered position over 80ms
          const t = Math.min((now - p.scatterStart) / 80, 1);
          p.cx = p.ox + (p.sx - p.ox) * easeOutCubic(t);
          p.cy = p.oy + (p.sy - p.oy) * easeOutCubic(t);

          if (now >= p.holdUntil) {
            p.phase = "return";
            p.ox = p.cx;
            p.oy = p.cy;
          }
        } else if (p.phase === "return") {
          const elapsed = now - p.returnStart;
          const rawT = Math.min(elapsed / p.returnDuration, 1);
          p.cx = p.ox + (p.tx - p.ox) * easeOutCubic(rawT);
          p.cy = p.oy + (p.ty - p.oy) * easeOutCubic(rawT);

          if (rawT >= 1) {
            p.cx = p.tx;
            p.cy = p.ty;
            p.phase = "idle";
            p.inCluster = false;
          }
        }

        ctx.rect(
          Math.round(p.cx * dpr - (p.size * dpr) / 2),
          Math.round(p.cy * dpr - (p.size * dpr) / 2),
          Math.ceil(p.size * dpr),
          Math.ceil(p.size * dpr)
        );
      }

      ctx.fill();

      state.rafId = requestAnimationFrame(animate);
    },
    [particleColor]
  );

  /* ── build particles once fonts/layout are ready ───────────────────────── */
  useLayoutEffect(() => {
    if (prefersReduced) return;

    let built = false;
    const tryBuild = () => {
      if (built) return;
      const el = textRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0) return;
      built = true;
      buildParticles();
    };

    const raf = requestAnimationFrame(tryBuild);
    const t1 = setTimeout(tryBuild, 120);
    const t2 = setTimeout(tryBuild, 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [buildParticles, prefersReduced]);

  /* ── RAF loop ──────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (prefersReduced) return;

    const state = stateRef.current;
    state.rafId = requestAnimationFrame(animate);

    return () => {
      if (state.rafId) cancelAnimationFrame(state.rafId);
    };
  }, [animate, prefersReduced]);

  /* ── resize ────────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (prefersReduced) return;

    let debounce;
    const onResize = () => {
      clearTimeout(debounce);
      debounce = setTimeout(buildParticles, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(debounce);
    };
  }, [buildParticles, prefersReduced]);

  /* ── reduced-motion fallback ───────────────────────────────────────────── */
  if (prefersReduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <div
      className="relative"
      style={{ display: "inline-block", lineHeight: 0 }}
    >
      {/* Invisible real text — layout anchor, SEO, screen-reader */}
      <Tag
        ref={textRef}
        className={className}
        style={{
          opacity: 0,
          userSelect: "none",
          pointerEvents: "none",
          display: "block",
        }}
        aria-label={text}
      >
        {text}
      </Tag>

      {/* Canvas overlay — transparent bg so sphere shows through */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          background: "transparent",
        }}
        aria-hidden="true"
      />
    </div>
  );
}
