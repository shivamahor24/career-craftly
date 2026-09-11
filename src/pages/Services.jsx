import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Globe, Smartphone, Code, Megaphone, Brain,
    User, FileText, BookOpen, Handshake, Bot, ClipboardCheck,
    Sparkles, ArrowRight, CheckCircle, ChevronRight
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.52, delay, ease: 'easeOut' }}
            className={className}>
            {children}
        </motion.div>
    );
};

const services = {
    Technical: [
        { icon: Globe, title: 'Website Development', desc: 'Responsive, conversion-optimised websites built with modern frameworks and SEO best practices baked in from the start.', perks: ['Mobile-first responsive', 'SEO optimised', 'CMS integration', 'Performance tuned'] },
        { icon: Smartphone, title: 'App Development', desc: 'Cross-platform mobile and web apps architected for scale — from MVP to enterprise-grade systems.', perks: ['iOS & Android', 'Real-time features', 'Secure APIs', 'Cloud-native'] },
        { icon: Code, title: 'Software Development', desc: 'End-to-end software solutions: architecture design, development, QA, and long-term maintenance support.', perks: ['Microservices', 'CI/CD pipelines', 'Automated testing', 'DevOps ready'] },
        { icon: Megaphone, title: 'Digital Marketing', desc: 'Full-funnel marketing strategy — SEO, paid media, content, and analytics to drive measurable ROI.', perks: ['SEO / SEM', 'Social media', 'Content strategy', 'Analytics dashboards'] },
        { icon: Brain, title: 'AI Agents', desc: 'Custom AI agents and automation pipelines that handle complex workflows, customer service, and data analysis 24/7.', perks: ['LLM integration', 'Workflow automation', 'Custom training', 'API integration'] },
    ],
    Career: [
        { icon: User, title: 'Career Coaching', desc: '1-on-1 sessions with senior coaches who have placed 200+ professionals in top-tier companies worldwide.', perks: ['Goal mapping', 'Personalized roadmap', 'Weekly check-ins', 'Industry experts'] },
        { icon: FileText, title: 'Resume Optimization', desc: 'ATS-beating, recruiter-loved resumes crafted to make you stand out in a competitive job market globally.', perks: ['ATS optimised', 'LinkedIn overhaul', 'Cover letter', '3-day turnaround'] },
        { icon: BookOpen, title: 'Skill Development', desc: 'Structured training programs in in-demand skills — from data science to product management — built around your schedule.', perks: ['Live sessions', 'Project-based', 'Certificate', 'Mentor access'] },
        { icon: Handshake, title: 'Interview Preparation', desc: 'Mock interviews with real feedback, company-specific prep guides, and negotiation scripts to land — and close — offers.', perks: ['Mock interviews', 'Feedback reports', 'Salary negotiation', 'Offer review'] },
        { icon: Bot, title: 'AI Career Assistant', desc: 'Your personal AI-powered career advisor, available 24/7 to answer career questions, review documents, and suggest opportunities.', perks: ['24/7 support', 'Resume review', 'Job matching', 'Smart suggestions'] },
        { icon: ClipboardCheck, title: 'Career Assessment', desc: 'Science-backed assessments to map your strengths, values, and ideal career trajectories — with a detailed expert report.', perks: ['Psychometric tests', 'Expert report', 'Career mapping', 'Action plan'] },
    ]
};

const ServiceCard = ({ service, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
            className="group relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300"
            style={{
                background: '#ECEFF4',
                boxShadow: '8px 8px 20px #d0d4de, -8px -8px 20px #ffffff',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '4px 4px 12px #d0d4de, -4px -4px 12px #ffffff, 0 0 0 2px rgba(59,130,246,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '8px 8px 20px #d0d4de, -8px -8px 20px #ffffff'; }}
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                style={{ background: 'rgba(59,130,246,0.10)' }}>
                <service.icon size={26} strokeWidth={1.6} style={{ color: '#3B82F6' }} />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3" style={{ color: '#0A0A0A' }}>{service.title}</h3>

            {/* Description */}
            <p className="text-sm leading-relaxed mb-5 flex-grow" style={{ color: '#5A5A72', lineHeight: '1.75' }}>{service.desc}</p>

            {/* Perks */}
            <div className="space-y-2 mb-6">
                {service.perks.map((perk, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle size={14} style={{ color: '#3B82F6', flexShrink: 0 }} />
                        <span className="text-xs font-medium" style={{ color: '#374151' }}>{perk}</span>
                    </div>
                ))}
            </div>

            {/* CTA link */}
            <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: '#3B82F6' }}>
                Learn more <ChevronRight size={15} />
            </div>
        </motion.div>
    );
};

const Services = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All');
    const tabs = ['All', 'Technical', 'Career'];

    const visibleTech = activeTab === 'Career' ? [] : services.Technical;
    const visibleCareer = activeTab === 'Technical' ? [] : services.Career;

    return (
        <div className="pt-32 pb-24 min-h-screen" style={{ background: 'linear-gradient(160deg, #F7F8FC 0%, #ECEFF4 50%, #F7F8FC 100%)' }}>
            <div className="container">

                {/* ── Header ── */}
                <FadeIn>
                    <div className="text-center mb-14">
                        <div className="badge mx-auto mb-4">
                            <Sparkles size={11} /> Our Offerings
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-5" style={{ color: '#0A0A0A' }}>
                            Programs &amp; Services
                        </h1>
                        <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: '#5A5A72' }}>
                            End-to-end solutions for professionals building careers and companies scaling with AI — all under one roof.
                        </p>

                        {/* Tab switcher */}
                        <div className="inline-flex items-center gap-1 p-1.5 rounded-full" style={{ background: '#ECEFF4', boxShadow: 'inset 4px 4px 10px #d0d4de, inset -4px -4px 10px #ffffff' }}>
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className="px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                                    style={activeTab === tab
                                        ? { background: '#0A0A0A', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }
                                        : { color: '#5A5A72' }
                                    }
                                >{tab}</button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* ── Technical Section ── */}
                {visibleTech.length > 0 && (
                    <div className="mb-20">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-10">
                                <div>
                                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#3B82F6' }}>01 — TECHNICAL</p>
                                    <h2 className="text-3xl font-bold" style={{ color: '#0A0A0A' }}>Technical Programs</h2>
                                </div>
                                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #E8E8EE, transparent)' }} />
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleTech.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
                        </div>
                    </div>
                )}

                {/* ── Career Section ── */}
                {visibleCareer.length > 0 && (
                    <div className="mb-20">
                        <FadeIn>
                            <div className="flex items-center gap-4 mb-10">
                                <div>
                                    <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#3B82F6' }}>02 — CAREER</p>
                                    <h2 className="text-3xl font-bold" style={{ color: '#0A0A0A' }}>Career Programs</h2>
                                </div>
                                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, #E8E8EE, transparent)' }} />
                            </div>
                        </FadeIn>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleCareer.map((s, i) => <ServiceCard key={i} service={s} index={i} />)}
                        </div>
                    </div>
                )}

                {/* ── CTA Banner ── */}
                <FadeIn delay={0.1}>
                    <div className="rounded-3xl p-10 md:p-14 text-center" style={{ background: 'linear-gradient(135deg, #EEF4FF 0%, #F0F1FF 100%)', border: '1px solid rgba(99,102,241,0.14)', boxShadow: '0 20px 60px rgba(59,130,246,0.08)' }}>
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6" style={{ background: 'rgba(59,130,246,0.12)' }}>
                            <Sparkles size={26} style={{ color: '#3B82F6' }} />
                        </div>
                        <h2 className="text-4xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Ready to Get Started?</h2>
                        <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: '#5A5A72' }}>
                            Let's discuss how our services can help you achieve your goals — book a free discovery call today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button onClick={() => navigate('/contact')} className="btn-primary">
                                Book a Free Call <ArrowRight size={16} />
                            </button>
                            <a href="mailto:anant@careercraftly.org" className="btn-outline">
                                Email Us Directly
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Services;
