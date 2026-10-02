import React from 'react';
import { ArrowRight, Compass, Layers, Zap, Rocket, Radio, Play } from 'lucide-react';

const HowWeWorkSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Systems Audit & Strategy Design',
      desc: 'We analyze your current manual workflows, existing tech stack, and high-impact revenue bottlenecks to create a high-precision execution blueprint.',
      deliverable: 'Deliverable: Architectural Blueprint & ROI Model',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Architecture & Rapid Prototyping',
      desc: 'Our senior architects design tailored LLM agent chains, backend schema models, and high-fidelity interfaces with 5-day feedback turnaround.',
      deliverable: 'Deliverable: Interactive Prototype & Tech Roadmap',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Production Engineering & Integration',
      desc: 'We construct production-ready codebases, clean APIs, resilient database layers, and automated event triggers with continuous CI/CD testing.',
      deliverable: 'Deliverable: Production Build & Security Hardening',
      icon: Zap,
    },
    {
      num: '04',
      title: 'Deployment, Training & Scale',
      desc: 'We launch into production, train your team with recorded walkthrough documentation, and monitor telemetry for frictionless long-term compounding.',
      deliverable: 'Deliverable: Live Systems & Ongoing Support',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-we-work" className="saas-section bg-[#F7F8FB] relative border-t border-[#E8EAF0]">
      <div className="saas-container relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-[820px]">
          <span className="saas-badge mb-3">
            Our 4-Step Framework
          </span>
          <h2 className="headline-section text-[#0F1222] mb-4">
            How We Work. We Build Yours.
          </h2>
          <p className="text-[#5B6275] text-base md:text-lg font-normal">
            A battle-tested engineering sprint framework designed to take you from ambiguous problem to live production systems in weeks, not quarters.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="saas-card p-6 md:p-8 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-bold text-3xl md:text-4xl text-[#5B5BF0]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] border border-[#DDE2FF] flex items-center justify-center text-[#5B5BF0] group-hover:scale-110 transition-transform">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="card-title text-lg md:text-xl text-[#0F1222] mb-3 group-hover:text-[#5B5BF0] transition-colors leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5B6275] leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Deliverable badge */}
                <div className="pt-4 border-t border-[#E8EAF0]">
                  <span className="text-xs font-semibold text-[#5B5BF0] block">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Owned Media Block in clean white SaaS styling */}
        <div className="saas-card p-8 md:p-12 relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5B5BF0] bg-[#EEF0FF] border border-[#DDE2FF] mb-4">
                <Radio size={14} className="text-[#5B5BF0]" />
                Career Craftly Intelligence · Dispatch
              </div>

              <h3 className="card-title text-2xl md:text-3xl text-[#0F1222] mb-3">
                The Systems Blueprint Newsletter &amp; Channel
              </h3>

              <p className="text-[#5B6275] text-base leading-relaxed mb-6 max-w-xl">
                Every Friday, we break down real AI architecture blueprints, automation teardowns, and engineering frameworks powering India&apos;s fastest-growing firms.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="bg-white border border-[#E8EAF0] rounded-full px-5 py-3 text-sm text-[#0F1222] placeholder-[#5B6275]/60 focus:outline-none focus:border-[#5B5BF0] shadow-sm transition-colors"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Newsletter subscription registered! (Demo placeholder)');
                  }}
                  className="btn-saas-primary text-sm whitespace-nowrap"
                >
                  Join 4,200+ Leaders
                </button>
              </div>
            </div>

            {/* Video preview simulation */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#F7F8FB] border border-[#E8EAF0] p-6 text-center flex flex-col items-center justify-center relative overflow-hidden group/thumb hover:border-[#DDE2FF] hover:bg-white transition-all shadow-sm">
                <div className="w-14 h-14 rounded-full bg-[#EEF0FF] text-[#5B5BF0] flex items-center justify-center mb-3 group-hover/thumb:scale-110 group-hover/thumb:bg-[#5B5BF0] group-hover/thumb:text-white transition-all">
                  <Play size={22} className="ml-1 fill-current" />
                </div>
                <span className="text-xs font-bold text-[#0F1222] mb-1">
                  EP #14: Deploying Multi-Agent Workflows at Scale
                </span>
                <span className="text-[11px] text-[#5B6275]">
                  [PODCAST / CHANNEL VIDEO PREVIEW PLACEHOLDER]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
