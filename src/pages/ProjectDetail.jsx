import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Layers,
  Building2,
  TrendingUp,
  Cpu,
} from 'lucide-react';
import Navbar from '../components/home/Navbar';
import FooterSection from '../components/home/FooterSection';
import NotFound from './NotFound';
import { getProjectBySlug, getNextProject } from '../data/projects';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);

  const project = getProjectBySlug(slug || '');
  const nextProject = slug ? getNextProject(slug) : null;

  useEffect(() => {
    if (project) {
      document.title = `${project.name} — Project Showcase | Career Craftly LLP`;
      window.scrollTo(0, 0);
    }
  }, [slug, project]);

  if (!project) {
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
            <Link to="/projects" className="hover:text-[#0F1222] transition-colors">
              Projects
            </Link>
            <ChevronRight size={13} className="text-[#8A90A2]" />
            <span className="text-[#0F1222] truncate">{project.name}</span>
          </nav>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF0FF] border border-[#DDE2FF] text-[#5B5BF0] text-xs font-semibold mb-4">
            <Sparkles size={12} />
            <span>{project.category}</span>
          </div>

          {/* Project Name */}
          <h1 className="text-[32px] sm:text-[44px] md:text-[52px] font-display font-bold text-[#0F1222] tracking-tight leading-[1.12] mb-4">
            {project.name}
          </h1>

          {/* Summary */}
          <p className="text-[17px] sm:text-[19px] text-[#5B6275] leading-relaxed max-w-[800px] font-normal mb-8">
            {project.summary}
          </p>

          {/* Client & Metadata Row (only if client exists) */}
          <div className="flex flex-wrap items-center gap-6 py-4 px-6 rounded-2xl bg-[#F7F8FB] border border-[#E8EAF0] text-xs sm:text-sm font-medium text-[#5B6275]">
            {project.client && (
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-[#5B5BF0]" />
                <span>
                  <strong className="text-[#0F1222] font-semibold">Client:</strong> {project.client}
                </span>
              </div>
            )}
            {project.client && <div className="h-4 w-px bg-[#E8EAF0] hidden sm:block" />}
            <div>
              <strong className="text-[#0F1222] font-semibold">Category:</strong> {project.category}
            </div>
            {project.metrics && project.metrics.length > 0 && (
              <>
                <div className="h-4 w-px bg-[#E8EAF0] hidden sm:block" />
                <div className="flex items-center gap-1.5 text-[#5B5BF0] font-semibold">
                  <TrendingUp size={15} />
                  <span>Key Result: {project.metrics[0].value} {project.metrics[0].label}</span>
                </div>
              </>
            )}
            {project.liveUrl && (
              <div className="sm:ml-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0F1222] text-white text-xs font-semibold hover:bg-[#5B5BF0] transition-colors shadow-sm"
                >
                  <span>Visit live project</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ─── Hero Visual Graphic / Screenshot Frame ─── */}
        <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="relative rounded-[24px] overflow-hidden border border-[#E8EAF0] bg-[#F7F8FB] shadow-[0_12px_40px_rgba(20,24,60,0.06)] p-4 sm:p-6 flex items-center justify-center">
            <img
              src={project.image}
              alt={`${project.name} full view screenshot`}
              className="w-full max-h-[480px] object-cover rounded-[16px]"
              loading="eager"
            />
          </div>
        </section>

        {/* ─── Metrics Grid (if present) ─── */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {project.metrics.map((metric, i) => (
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
        )}

        {/* ─── Overview & Features Sections (max-width 720px) ─── */}
        <section className="max-w-[760px] mx-auto px-4 sm:px-6 mb-16 space-y-14">
          {/* Overview */}
          <div className="border-b border-[#E8EAF0] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B5BF0] uppercase tracking-wider mb-3">
              <Layers size={14} />
              <span>Project Overview</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-display font-bold text-[#0F1222] tracking-tight mb-5">
              The Architecture &amp; Objectives
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[#5B6275] leading-[1.7] font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Features */}
          <div className="border-b border-[#E8EAF0] pb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#10B981] uppercase tracking-wider mb-3">
              <CheckCircle2 size={14} />
              <span>Key Features &amp; Capabilities</span>
            </div>
            <h2 className="text-[26px] sm:text-[32px] font-display font-bold text-[#0F1222] tracking-tight mb-6">
              What We Engineered
            </h2>
            <div className="space-y-3.5">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-4 rounded-[16px] bg-[#F7F8FB] border border-[#E8EAF0]"
                >
                  <div className="w-5 h-5 rounded-full bg-[#EEF0FF] text-[#5B5BF0] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <span className="text-[15px] sm:text-[16px] text-[#3A4054] font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B6275] uppercase tracking-wider mb-3">
              <Cpu size={14} />
              <span>Technologies &amp; Frameworks</span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-display font-bold text-[#0F1222] tracking-tight mb-5">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.tech.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 rounded-full bg-white border border-[#E8EAF0] text-xs sm:text-sm font-semibold text-[#0F1222] shadow-xs hover:border-[#DDE2FF] transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Visit Live Project Button (if exists) */}
          {project.liveUrl && (
            <div className="pt-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-[48px] px-8 bg-[#0F1222] text-white hover:bg-[#5B5BF0] text-[15px] font-semibold rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <span>Visit live project</span>
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </section>

        {/* ─── Next Project Navigation Card ─── */}
        {nextProject && (
          <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group block p-8 rounded-[24px] bg-white border border-[#E8EAF0] shadow-[0_10px_30px_rgba(20,24,60,0.05)] hover:border-[#DDE2FF] hover:shadow-[0_20px_40px_rgba(20,24,60,0.08)] transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#5B5BF0] uppercase tracking-wider mb-1">
                    Next Project →
                  </div>
                  <h3 className="text-[22px] font-display font-bold text-[#0F1222] group-hover:text-[#5B5BF0] transition-colors">
                    {nextProject.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6275] mt-1 line-clamp-1">
                    {nextProject.summary}
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
              Ready to engineer your next product?
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#5B6275] max-w-lg mb-8 leading-relaxed font-normal">
              Book a consultation call to discuss how Career Craftly can design, build, and deploy your custom software or AI system.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center h-[48px] px-8 bg-[#0F1222] text-white hover:bg-[#5B5BF0] text-[15px] font-semibold rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5"
            >
              Book a Call
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ProjectDetail;
