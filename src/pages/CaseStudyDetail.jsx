import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Cpu,
  TrendingUp,
  Building2,
  Quote,
} from 'lucide-react';
import Navbar from '../components/home/Navbar';
import FooterSection from '../components/home/FooterSection';
import { getCaseStudyBySlug, getNextCaseStudy } from '../data/caseStudies';

import NotFound from './NotFound';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const caseStudy = getCaseStudyBySlug(slug || '');
  const nextStudy = slug ? getNextCaseStudy(slug) : null;

  useEffect(() => {
    if (caseStudy) {
      document.title = `${caseStudy.title} — Case Study | Career Craftly LLP`;
      window.scrollTo(0, 0);
    }
  }, [slug, caseStudy]);

  if (!caseStudy) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-white text-[#0F1222] selection:bg-[#5B5BF0] selection:text-white flex flex-col">
      {/* 1. Floating Pill Navbar */}
      <Navbar />

      <main className="flex-grow pt-28 pb-24">
        {/* ─── Top Header & Breadcrumbs ─── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-semibold text-[#5B6275] mb-6 overflow-x-auto whitespace-nowrap"
          >
            <Link to="/" className="hover:text-[#0F1222] transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-[#8A90A2]" />
            <Link to="/case-studies" className="hover:text-[#0F1222] transition-colors">
              Case Studies
            </Link>
            <ChevronRight size={13} className="text-[#8A90A2]" />
            <span className="text-[#0F1222] truncate">{caseStudy.title}</span>
          </nav>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF0FF] border border-[#DDE2FF] text-[#5B5BF0] text-xs font-semibold mb-4">
            <Sparkles size={12} />
            <span>{caseStudy.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-[32px] sm:text-[44px] md:text-[52px] font-display font-bold text-[#0F1222] tracking-tight leading-[1.12] mb-4">
            {caseStudy.title}
          </h1>

          {/* Subtitle / Narrative Summary */}
          <p className="text-[17px] sm:text-[19px] text-[#5B6275] leading-relaxed max-w-[800px] font-normal mb-8">
            {caseStudy.summary}
          </p>

          {/* Client & Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 py-4 px-6 rounded-2xl bg-[#F7F8FB] border border-[#E8EAF0] text-xs sm:text-sm font-medium text-[#5B6275]">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-[#5B5BF0]" />
              <span>
                <strong className="text-[#0F1222] font-semibold">Client:</strong> {caseStudy.client}
              </span>
            </div>
            <div className="h-4 w-px bg-[#E8EAF0] hidden sm:block" />
            <div>
              <strong className="text-[#0F1222] font-semibold">Industry:</strong> {caseStudy.category}
            </div>
            <div className="h-4 w-px bg-[#E8EAF0] hidden sm:block" />
            <div className="flex items-center gap-1.5 text-[#5B5BF0] font-semibold">
              <TrendingUp size={15} />
              <span>Key Impact: {caseStudy.metrics[0]?.value} {caseStudy.metrics[0]?.label}</span>
            </div>
          </div>
        </section>

        {/* ─── Hero Visual Graphic ─── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="relative rounded-[24px] overflow-hidden border border-[#E8EAF0] bg-[#F7F8FB] shadow-[0_12px_40px_rgba(20,24,60,0.06)] p-4 sm:p-6 flex items-center justify-center">
            <img
              src={caseStudy.image}
              alt={`${caseStudy.title} system overview`}
              className="w-full max-h-[440px] object-contain rounded-[16px]"
              loading="eager"
            />
          </div>
        </section>

        {/* ─── Metrics Grid (3 to 4 metrics) ─── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {caseStudy.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-[20px] bg-white border border-[#E8EAF0] shadow-[0_8px_30px_rgba(20,24,60,0.04)] text-center flex flex-col justify-center"
              >
                <div className="text-[28px] sm:text-[36px] font-display font-bold text-[#5B5BF0] tracking-tight leading-none mb-2">
                  {metric.value}
                </div>
                <div className="text-[12px] sm:text-[13px] text-[#5B6275] font-medium leading-tight">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Deep Dive Content: Challenge, Solution, Results (max-width 720px) ─── */}
        <section className="max-w-[760px] mx-auto px-4 sm:px-6 mb-16 space-y-14">
          {/* Section 1: The Challenge */}
          <div className="border-b border-[#E8EAF0] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EA580C] uppercase tracking-wider mb-3">
              <AlertCircle size={14} />
              <span>The Problem &amp; Challenge</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-display font-bold text-[#0F1222] tracking-tight mb-5">
              The Obstacles Facing the Team
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[#5B6275] leading-[1.7] font-normal mb-6">
              {caseStudy.challenge.narrative}
            </p>
            <div className="space-y-3 pt-2">
              {caseStudy.challenge.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#3A4054]">
                  <div className="w-5 h-5 rounded-full bg-[#FFF1ED] text-[#EA580C] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: The Solution */}
          <div className="border-b border-[#E8EAF0] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B5BF0] uppercase tracking-wider mb-3">
              <Cpu size={14} />
              <span>Engineered Architecture</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-display font-bold text-[#0F1222] tracking-tight mb-5">
              How Career Craftly Solved It
            </h2>
            {caseStudy.solution.narrative && (
              <p className="text-[17px] sm:text-[18px] text-[#5B6275] leading-[1.7] font-normal mb-8">
                {caseStudy.solution.narrative}
              </p>
            )}

            {/* Feature Cards */}
            <div className="space-y-4">
              {caseStudy.solution.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-[20px] bg-[#F7F8FB] border border-[#E8EAF0] flex flex-col gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#5B5BF0] shrink-0" />
                    <h3 className="text-[17px] font-display font-bold text-[#0F1222]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[14px] sm:text-[15px] text-[#5B6275] leading-relaxed pl-6 font-normal">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: The Results */}
          <div className="border-b border-[#E8EAF0] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] uppercase tracking-wider mb-3">
              <TrendingUp size={14} />
              <span>Measurable Impact</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-display font-bold text-[#0F1222] tracking-tight mb-5">
              Results &amp; Ongoing Performance
            </h2>
            {caseStudy.results.narrative && (
              <p className="text-[17px] sm:text-[18px] text-[#5B6275] leading-[1.7] font-normal mb-6">
                {caseStudy.results.narrative}
              </p>
            )}
            {caseStudy.results.points && (
              <div className="space-y-3 pt-2">
                {caseStudy.results.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#3A4054]">
                    <CheckCircle2 size={18} className="text-[#10B981] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Section 4: Tech Stack */}
          <div>
            <h3 className="text-xs font-bold text-[#5B6275] uppercase tracking-wider mb-4">
              Technologies &amp; Frameworks Deployed
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {caseStudy.tech.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 rounded-full bg-white border border-[#E8EAF0] text-xs sm:text-sm font-semibold text-[#0F1222] shadow-xs hover:border-[#DDE2FF] transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote (if present) */}
          {caseStudy.testimonial && (
            <div className="relative p-8 rounded-[24px] bg-[#F7F8FB] border border-[#E8EAF0] mt-8">
              <Quote size={32} className="text-[#5B5BF0]/20 absolute top-6 right-6" />
              <p className="text-[16px] sm:text-[17px] text-[#0F1222] italic leading-relaxed mb-4">
                "{caseStudy.testimonial.quote}"
              </p>
              <div className="text-xs font-bold text-[#0F1222]">
                {caseStudy.testimonial.author}
              </div>
              <div className="text-xs text-[#5B6275]">
                {caseStudy.testimonial.role}
              </div>
            </div>
          )}
        </section>

        {/* ─── Next Case Study Card ─── */}
        {nextStudy && (
          <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <Link
              to={`/case-studies/${nextStudy.slug}`}
              className="group block p-8 rounded-[24px] bg-white border border-[#E8EAF0] shadow-[0_10px_30px_rgba(20,24,60,0.05)] hover:border-[#DDE2FF] hover:shadow-[0_20px_40px_rgba(20,24,60,0.08)] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#5B5BF0] uppercase tracking-wider mb-1">
                    Next Case Study →
                  </div>
                  <h3 className="text-[22px] font-display font-bold text-[#0F1222] group-hover:text-[#5B5BF0] transition-colors">
                    {nextStudy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6275] mt-1 line-clamp-1">
                    {nextStudy.summary}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F7F8FB] border border-[#E8EAF0] flex items-center justify-center text-[#0F1222] group-hover:bg-[#5B5BF0] group-hover:text-white group-hover:border-[#5B5BF0] transition-all shrink-0">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ─── Final CTA Band ─── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[24px] bg-[#F7F8FB] border border-[#E8EAF0] p-8 sm:p-12 text-center flex flex-col items-center">
            <h2 className="text-[28px] sm:text-[34px] font-display font-bold text-[#0F1222] tracking-tight mb-3">
              Ready to engineer your next breakthrough?
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#5B6275] max-w-lg mb-8 leading-relaxed font-normal">
              Book a technical scoping call to see how Career Craftly can build custom AI, automation, and software for your team.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center h-[48px] px-8 bg-[#0F1222] text-white hover:bg-[#5B5BF0] text-[15px] font-semibold rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              Book a call
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default CaseStudyDetail;
