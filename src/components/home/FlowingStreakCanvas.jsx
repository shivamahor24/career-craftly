import React, { useEffect, useRef } from 'react';

/**
 * FlowingStreakCanvas
 * Renders an ambient, soft particle streak flow behind the hero section.
 * - Pauses when off-screen or when prefers-reduced-motion is active.
 * - Uses soft lavender and blue stroke colors on a clean white canvas.
 */
const FlowingStreakCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let animId = null;
    let isVisible = true;
    let t = 0;
    let width = 0;
    let height = 0;
    let particles = [];

    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Re-seed particle positions
      const particleCount = Math.round(
        Math.min(800, (width * height) / 1800)
      );
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        v: 0.6 + Math.random() * 1.4,
        h: Math.random(),
      }));

      // Initial clean white paint
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
    };

    handleResize();

    const getAngle = (x, y) => {
      return (
        -0.55 +
        Math.sin(y * 0.0042 + t * 0.25) * 0.45 +
        Math.cos(x * 0.0031 - t * 0.2) * 0.35 +
        (x / (width || 1) - 0.5) * 0.5
      );
    };

    const renderFrame = () => {
      if (!isVisible || prefersReducedMotion) return;

      // Soft trail clearing
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = getAngle(p.x, p.y);
        const nx = p.x + Math.cos(angle) * p.v * 2.2;
        const ny = p.y + Math.sin(angle) * p.v * 2.2;

        const color =
          p.h < 0.5
            ? '91,91,240'
            : p.h < 0.85
            ? '79,160,255'
            : '196,150,255';

        ctx.strokeStyle = `rgba(${color}, ${0.12 + p.h * 0.3})`;
        ctx.lineWidth = 0.95;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;

        if (p.x > width + 20 || p.y < -20 || p.y > height + 20 || p.x < -20) {
          p.x = Math.random() * width * 0.7 - 20;
          p.y = height * (0.2 + Math.random() * 0.9);
        }
      }

      t += 0.012;
      animId = requestAnimationFrame(renderFrame);
    };

    // IntersectionObserver to pause off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isVisible = entry.isIntersecting;
        if (isVisible && !prefersReducedMotion && !animId) {
          animId = requestAnimationFrame(renderFrame);
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    if (!prefersReducedMotion) {
      animId = requestAnimationFrame(renderFrame);
    } else {
      // Draw static single frame for reduced motion
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};

export default FlowingStreakCanvas;
