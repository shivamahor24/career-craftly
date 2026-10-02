import React from 'react';
import {
  ArrowRight,
  Cpu,
  Code2,
  LineChart,
  FileCheck2,
  CheckCircle2,
  Clock,
  Check,
  TrendingUp,
  UserCheck,
  Sparkles,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'ai-automation',
      title: 'AI Automation',
      headlineClaim: 'Autonomous Workflows. Zero Bottlenecks.',
      desc: 'Custom AI agents, intelligent LLM pipelines, and automated customer routing that eliminate 40+ manual hours every week.',
      metric: '[40+ Hours Saved / Week]',
      icon: Cpu,
      tag: 'Core Intelligence',
      deliverables: [
        'Autonomous customer support & triage agents',
        'Multi-model LLM integrations (Claude, GPT, Gemini)',
        'CRM, ERP & database event-driven triggers',
        'Automated lead qualification & outbound nurture',
      ],
      mockup: {
        taskName: 'Customer Inbound Triage Agent',
        status: 'Completed',
        statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
        progress: 100,
        progressLabel: 'Auto-resolved 48 inquiries today',
        checklist: [
          'Intent classification & routing',
          'Calendar booking synced to CRM',
          'Executive briefing summary generated',
        ],
        assignees: ['AI', 'SM'],
      },
    },
    {
      id: 'software-development',
      title: 'Software Development',
      headlineClaim: 'Production Systems. Built To Scale.',
      desc: 'High-performance web applications, resilient backend architectures, and mobile interfaces engineered for ultra-fast response times.',
      metric: '[99.9% Uptime Architecture]',
      icon: Code2,
      tag: 'Full-Stack Engineering',
      deliverables: [
        'Modern React, Next.js & TypeScript frontends',
        'Scalable Node.js & Python backend microservices',
        'PostgreSQL, Supabase & cloud native data layers',
        'Custom enterprise portals & internal tooling',
      ],
      mockup: {
        taskName: 'Cloud SaaS Application Core',
        status: 'In Production',
        statusColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
        progress: 96,
        progressLabel: 'Sub-80ms API response latency',
        checklist: [
          'CI/CD deployment automated',
          'Enterprise role-based access control',
          'Database indexing & auto-scaling',
        ],
        assignees: ['DEV', 'AK'],
      },
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      headlineClaim: 'Predictable Inbound. Compounding ROI.',
      desc: 'Data-driven performance acquisition campaigns, algorithmic SEO architecture, and conversion rate optimization that scale client pipeline.',
      metric: '[3.2x Lead Multiplier]',
      icon: LineChart,
      tag: 'Growth Engine',
      deliverables: [
        'Conversion-optimized funnel architecture',
        'Technical SEO & automated programmatic landing pages',
        'Targeted paid acquisition across Google & LinkedIn',
        'Multi-touch attribution & revenue tracking',
      ],
      mockup: {
        taskName: 'Performance Acquisition Campaign',
        status: 'Optimized',
        statusColor: 'bg-purple-50 text-purple-600 border-purple-200',
        progress: 88,
        progressLabel: '62% lower cost per acquisition',
        checklist: [
          'High-intent search keyword rankings',
          'Landing page A/B variant winning +34%',
          'Automated nurture sequence live',
        ],
        assignees: ['MKT', 'JD'],
      },
    },
    {
      id: 'brand-documents',
      title: 'Brand & Documents',
      headlineClaim: 'Enterprise Credibility. Deal-Ready Precision.',
      desc: 'High-stakes investor pitch decks, institutional proposals, bulletproof SOWs, and cohesive corporate brand design systems.',
      metric: '[100% Deal-Ready Output]',
      icon: FileCheck2,
      tag: 'Executive Collateral',
      deliverables: [
        'Investor pitch decks & financial storyboards',
        'Enterprise sales proposals, RFPs & master SOWs',
        'Modern design tokens, typography & brand kits',
        'Executive presentation templates & sales enablement',
      ],
      mockup: {
        taskName: 'Institutional Investor Pitch Deck',
        status: 'Delivered',
        statusColor: 'bg-blue-50 text-blue-600 border-blue-200',
        progress: 100,
        progressLabel: 'Ready for funding round submission',
        checklist: [
          'Financial model charts formatted',
          'Executive narrative & traction slide',
          'Print & digital Figma tokens bundled',
        ],
        assignees: ['DES', 'CC'],
      },
    },
  ];

  return (
    <section id="services" className="saas-section bg-[#F7F8FB] relative">
      <div className="saas-container relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-[820px]">
          <span className="saas-badge mb-3">
            Our Core Capabilities
          </span>
          <h2 className="headline-section text-[#0F1222] mb-4">
            Full-Stack Execution. We Build Yours.
          </h2>
          <p className="text-[#5B6275] text-base md:text-lg font-normal">
            From autonomous workflow engines to enterprise-grade web applications, we turn operational friction into compounding growth.
          </p>
        </div>

        {/* 4 Large Alternating Feature Cards */}
        <div className="space-y-10 md:space-y-14">
          {services.map((service, index) => {
            const isEven = index % 2 === 1;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="saas-card p-6 md:p-10 lg:p-12 transition-all duration-300 group"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Tag & Icon on Tinted Rounded Square */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] border border-[#DDE2FF] flex items-center justify-center text-[#5B5BF0]">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5BF0] px-3 py-1 rounded-full bg-[#EEF0FF]">
                        {service.tag}
                      </span>
                    </div>

                    {/* Card Title & Headline Claim */}
                    <h3 className="card-title text-[#0F1222] mb-1 group-hover:text-[#5B5BF0] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#5B5BF0] mb-3">
                      {service.headlineClaim}
                    </p>

                    {/* One-Line Description */}
                    <p className="text-[#5B6275] text-base leading-relaxed mb-6 font-normal">
                      {service.desc}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2
                            size={16}
                            className="text-[#5B5BF0] shrink-0 mt-1"
                          />
                          <span className="text-xs text-[#0F1222]/80 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Footer: Live Metric + Learn More Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#E8EAF0]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                        <span className="text-xs font-semibold text-[#5B6275]">
                          Impact:{' '}
                          <span className="text-[#0F1222] font-bold">
                            {service.metric}
                          </span>
                        </span>
                      </div>

                      <a
                        href="#contact"
                        className="inline-flex items-center text-sm font-semibold text-[#0F1222] group-hover:text-[#5B5BF0] transition-colors gap-1.5 focus-visible:outline-none"
                      >
                        Learn more
                        <ArrowRight
                          size={15}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Clean White Product-UI Mockup Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="rounded-2xl bg-white border border-[#E8EAF0] p-5 md:p-6 shadow-[0_8px_30px_rgba(20,24,60,0.06)] group-hover:shadow-[0_12px_40px_rgba(91,91,240,0.12)] group-hover:border-[#DDE2FF] transition-all">
                      {/* Top Header Card */}
                      <div className="flex items-start justify-between mb-4 pb-3 border-b border-[#E8EAF0]">
                        <div>
                          <span className="text-[11px] font-semibold text-[#5B6275] uppercase tracking-wider block mb-1">
                            Active Deliverable
                          </span>
                          <h4 className="text-sm font-bold text-[#0F1222]">
                            {service.mockup.taskName}
                          </h4>
                        </div>
                        <span
                          className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${service.mockup.statusColor}`}
                        >
                          {service.mockup.status}
                        </span>
                      </div>

                      {/* Progress Bar & Label */}
                      <div className="mb-5">
                        <div className="flex justify-between items-center text-xs font-semibold text-[#5B6275] mb-1.5">
                          <span>Execution Progress</span>
                          <span className="text-[#0F1222] font-bold">
                            {service.mockup.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-[#F7F8FB] border border-[#E8EAF0] h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#5B5BF0] h-full rounded-full transition-all duration-700"
                            style={{ width: `${service.mockup.progress}%` }}
                          />
                        </div>
                        <span className="text-[11px] text-[#5B6275] mt-1 block">
                          {service.mockup.progressLabel}
                        </span>
                      </div>

                      {/* Checklist */}
                      <div className="space-y-2 mb-5">
                        {service.mockup.checklist.map((task, tidx) => (
                          <div
                            key={tidx}
                            className="flex items-center gap-2 text-xs text-[#0F1222] p-2 rounded-lg bg-[#F7F8FB] border border-[#E8EAF0]"
                          >
                            <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                              <Check size={11} strokeWidth={3} />
                            </div>
                            <span className="truncate">{task}</span>
                          </div>
                        ))}
                      </div>

                      {/* Avatars & Team Signoff */}
                      <div className="flex items-center justify-between pt-3 border-t border-[#E8EAF0] text-xs text-[#5B6275]">
                        <span className="flex items-center gap-1.5">
                          <UserCheck size={13} className="text-[#5B5BF0]" />
                          Verified Milestone
                        </span>
                        <div className="flex -space-x-1 overflow-hidden">
                          {service.mockup.assignees.map((user, uidx) => (
                            <span
                              key={uidx}
                              className="inline-block h-6 w-6 rounded-full bg-[#EEF0FF] text-[#5B5BF0] border-2 border-white text-[10px] font-bold flex items-center justify-center"
                            >
                              {user}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
