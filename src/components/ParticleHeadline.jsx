import { useEffect, useRef } from "react";

export default function ParticleHeadline({
  text = "CAREER CRAFTLY",
  fontSize = 110,
  fontFamily = "'Fraunces', serif",
  fontWeight = 900,
  color = "#0f0f0f",
  className = "",
}) {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const parent = canvas.parentElement;
    const width = parent.offsetWidth;
    const height = fontSize * 1.4;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.scale(dpr, dpr);

    ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = color;
    ctx.fillText(text, 0, height / 2);

    const imageData = ctx.getImageData(0, 0, width, height).data;
    ctx.clearRect(0, 0, width, height);

    const gap = 3;
    const particles = [];
    for (let y = 0; y < height; y += gap) {
      for (let x = 0; x < width; x += gap) {
        const a = imageData[(y * width + x) * 4 + 3];
        if (a > 128) particles.push({ tx: x, ty: y, x, y, jx: 0, jy: 0 });
      }
    }

    const RADIUS = 90;
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouse.current.x, my = mouse.current.y;

      particles.forEach((p) => {
        const dx = p.tx - mx, dy = p.ty - my;
        const dist = Math.hypot(dx, dy);

        if (dist < RADIUS) {
          const force = 1 - dist / RADIUS;
          p.jx += (Math.random() - 0.5) * 6 * force;
          p.jy += (Math.random() - 0.5) * 6 * force;
        }
        p.jx *= 0.9;
        p.jy *= 0.9;
        p.x = p.tx + p.jx;
        p.y = p.ty + p.jy;

        ctx.fillStyle = color;
        ctx.fillRect(p.x, p.y, 1.5, 1.5);
      });

      raf = requestAnimationFrame(animate);
    };

    if (reduceMotion) {
      particles.forEach((p) => ctx.fillRect(p.tx, p.ty, 1.5, 1.5));
    } else {
      animate();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [text, fontSize, fontFamily, fontWeight, color]);

  return <canvas ref={canvasRef} className={className} />;
}
