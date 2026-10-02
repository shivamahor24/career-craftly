import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

// Single counter component that animates up from 0 to target value once in view
const CounterItem = ({ target, suffix = '', prefix = '', label, subtext, placeholderTag }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    if (!isInView) return;

    let startTime = null;
    const duration = 1800; // ms

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 md:p-8">
      {/* Large display-font number */}
      <div className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#0F1222] tracking-tight mb-2 flex items-center justify-center">
        <span className="text-[#5B5BF0]">{prefix}</span>
        <span>{count}</span>
        <span className="text-[#5B5BF0]">{suffix}</span>
      </div>

      {/* Clearly marked placeholder indicator */}
      <span className="text-xs font-semibold text-[#5B5BF0] uppercase tracking-wider mb-2 px-3 py-0.5 rounded-full bg-[#EEF0FF] border border-[#DDE2FF]">
        {placeholderTag}
      </span>

      {/* Small muted label underneath (one-line label) */}
      <p className="text-sm md:text-base text-[#5B6275] font-medium max-w-[280px] mx-auto mt-1">
        {label}
      </p>
      {subtext && (
        <span className="text-xs text-[#5B6275]/70 mt-1 font-medium">
          {subtext}
        </span>
      )}
    </div>
  );
};

const NumbersBand = () => {
  return (
    <section
      id="proof"
      className="relative py-20 md:py-24 bg-[#FFFFFF] border-y border-[#E8EAF0]"
    >
      <div className="saas-container relative z-10">
        {/* 3 big animated counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E8EAF0]">
          <CounterItem
            target={200}
            suffix="+"
            prefix=""
            placeholderTag="[METRIC 01]"
            label="Client systems and teams scaled across India"
            subtext="AI & Software Deployments"
          />

          <CounterItem
            target={98}
            suffix="%"
            prefix=""
            placeholderTag="[METRIC 02]"
            label="On-time delivery and milestone satisfaction rate"
            subtext="Verified Delivery Standards"
          />

          <CounterItem
            target={4}
            suffix="x"
            prefix=""
            placeholderTag="[METRIC 03]"
            label="Average client efficiency and ROI gain"
            subtext="Automated Operational Leverage"
          />
        </div>
      </div>
    </section>
  );
};

export default NumbersBand;
