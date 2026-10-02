import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ExternalLink, Layers } from 'lucide-react';
import Navbar from '../components/home/Navbar';
import FooterSection from '../components/home/FooterSection';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    document.title = 'Projects & Products Built — Career Craftly LLP';
    window.scrollTo(0, 0);
  }, []);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  // Filter projects
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white text-[#0F1222] selection:bg-[#5B5BF0] selection:text-white flex flex-col">
      {/* 1. Floating Pill Navbar */}
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* ─── Hero Header with Faint Lavender Glow ─── */}
        <section className="relative px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto pt-8 pb-14 overflow-hidden">
          {/* Faint Lavender Radial Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] rounded-full pointer-events-none -z-10"
            style={{
              background: 'rgba(120, 130, 255, 0.15)',
              filter: 'blur(80px)',
            }}
            aria-hidden="true"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EEF0FF] border border-[#DDE2FF] text-[#5B5BF0] text-xs font-semibold mb-5 shadow-sm"
          >
            <Sparkles size={13} />
            <span>Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(36px,4.5vw,60px)] font-display font-semibold text-[#0F1222] tracking-[-0.03em] leading-[1.1] mb-4"
          >
            Products and projects we have built.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[17px] text-[#5B6275] leading-relaxed max-w-[540px] mx-auto font-normal"
          >
            Explore our portfolio of cutting-edge AI systems, software platforms, and digital products engineered for ambitious clients.
          </motion.p>

          {/* Category Filter Chips */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-8"
          >
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0F1222] text-white shadow-md'
                      : 'bg-white text-[#5B6275] border border-[#E8EAF0] hover:border-[#5B5BF0] hover:text-[#0F1222]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>
        </section>

        {/* ─── Projects Grid (3 cols desktop, 2 tablet, 1 mobile) ─── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const topThreeTech = project.tech.slice(0, 3);

                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                  >
                    <Link
                      to={`/projects/${project.slug}`}
                      className="group flex flex-col h-full bg-white rounded-[24px] border border-[#E8EAF0] shadow-[0_10px_40px_rgba(20,24,60,0.06)] p-6 transition-all duration-250 hover:-translate-y-1 hover:border-[#DDE2FF] hover:shadow-[0_20px_50px_rgba(20,24,60,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0]"
                    >
                      {/* Top Visual Graphic / Screenshot Frame */}
                      <div className="relative w-full h-[200px] rounded-[16px] bg-[#F7F8FB] border border-[#E8EAF0]/80 overflow-hidden mb-5 flex items-center justify-center p-2">
                        <img
                          src={project.image}
                          alt={`${project.name} preview screenshot`}
                          className="w-full h-full object-cover rounded-[12px] transition-transform duration-300 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#E8EAF0] text-[11px] font-bold text-[#0F1222] shadow-xs">
                          {project.category}
                        </div>
                      </div>

                      {/* Name & Content */}
                      <div className="flex-1 flex flex-col">
                        <h2 className="text-[20px] font-display font-semibold text-[#0F1222] tracking-tight group-hover:text-[#5B5BF0] transition-colors mb-2 leading-snug">
                          {project.name}
                        </h2>

                        {/* 2-line Muted Summary */}
                        <p className="text-[14px] text-[#5B6275] leading-relaxed line-clamp-2 mb-5 font-normal">
                          {project.summary}
                        </p>

                        {/* Tech Stack Pills (up to 3) */}
                        <div className="flex flex-wrap gap-1.5 pt-3 pb-4 border-t border-[#E8EAF0]/80 mt-auto mb-4">
                          {topThreeTech.map((techItem) => (
                            <span
                              key={techItem}
                              className="px-2.5 py-1 rounded-full bg-[#F7F8FB] border border-[#E8EAF0] text-[11.5px] font-medium text-[#5B6275]"
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>

                        {/* View Project Link with Arrow */}
                        <div className="flex items-center gap-1.5 text-[14px] font-semibold text-[#0F1222] group-hover:text-[#5B5BF0] transition-colors pt-1">
                          <span>View project</span>
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ─── Final CTA Band ─── */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="relative overflow-hidden rounded-[24px] bg-[#F7F8FB] border border-[#E8EAF0] p-8 sm:p-12 text-center flex flex-col items-center">
            {/* Soft Glow in CTA */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full pointer-events-none -z-10"
              style={{
                background: 'rgba(91, 91, 240, 0.12)',
                filter: 'blur(60px)',
              }}
              aria-hidden="true"
            />

            <h2 className="text-[28px] sm:text-[34px] font-display font-bold text-[#0F1222] tracking-tight mb-3">
              Have a project in mind?
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[#5B6275] max-w-lg mb-8 leading-relaxed font-normal">
              From MVP builds to enterprise software and autonomous AI agents, let's bring your vision to life.
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

export default Projects;
