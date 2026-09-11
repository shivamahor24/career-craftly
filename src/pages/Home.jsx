import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    ArrowRight, Sparkles, Clock, TrendingUp, Users, Target, Shield,
    Globe, Smartphone, Brain, User, FileText, BookOpen,
    CheckCircle, Star, ChevronRight, Zap, Award, BarChart3, Briefcase, Linkedin
} from 'lucide-react';
import NeumorphicCard from '../components/ui/NeumorphicCard';
import { useNavigate } from 'react-router-dom';

/* ─── Reusable fade-in-up wrapper ─── */
const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

/* ─── Section Badge ─── */
const Badge = ({ label }) => (
    <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-4 shadow-sm">
        <Sparkles className="w-4 h-4" style={{ color: '#3B82F6' }} />
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#606060' }}>{label}</span>
    </div>
);

/* ─── Section Heading ─── */
const SectionHeading = ({ badge, title, subtitle, center = true }) => (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
        <Badge label={badge} />
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#111111' }}>{title}</h2>
        {subtitle && <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#606060' }}>{subtitle}</p>}
    </div>
);

const Home = () => {
    const navigate = useNavigate();

    /* ── Animated count-up ── */
    const countRef = useRef(null);
    const countInView = useInView(countRef, { once: true, margin: '-60px' });

    return (
        <div className="bg-white">

            {/* ══════════════════════════════════════════
                HERO SECTION
            ══════════════════════════════════════════ */}
            <section className="hero-section">
                <video className="hero-video" autoPlay loop muted playsInline>
                    <source src="/assets/herosectionedited.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none" style={{ zIndex: 1 }} />

                <div className="container text-center relative px-4" style={{ zIndex: 10 }}>
                    <motion.div
                        initial={{ opacity: 0, y: -16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-2.5 mb-8 shadow-sm"
                    >
                        <Sparkles className="w-4 h-4" style={{ color: '#3B82F6' }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: '#606060' }}>AI SOLUTIONS FOR MODERN BUSINESSES</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                        style={{ color: '#111111' }}
                    >
                        CAREER CRAFTLY
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                        style={{ color: '#2E2E2E' }}
                    >
                        Where intelligent automation meets real-world execution
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            style={{
                                backgroundColor: '#e0e0e0',
                                borderRadius: '50px',
                                boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                                color: '#111111',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: '600',
                                padding: '16px 48px',
                                transition: 'all 0.2s ease-in-out',
                                border: '2px solid rgb(206, 206, 206)',
                                fontFamily: 'Inter, sans-serif'
                            }}
                            onMouseEnter={e => { e.target.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff'; e.target.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.target.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff'; e.target.style.transform = 'translateY(0)'; }}
                        >✨ Get Started</button>

                        <button
                            onClick={() => navigate('/services')}
                            style={{
                                backgroundColor: '#e8e8e8',
                                borderRadius: '50px',
                                boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                                color: '#4d4d4d',
                                cursor: 'pointer',
                                fontSize: '18px',
                                fontWeight: '600',
                                padding: '16px 48px',
                                transition: 'all 0.2s ease-in-out',
                                border: '2px solid rgb(206, 206, 206)',
                                fontFamily: 'Inter, sans-serif'
                            }}
                            onMouseEnter={e => { e.target.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff'; e.target.style.transform = 'translateY(-2px)'; }}
                            onMouseLeave={e => { e.target.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff'; e.target.style.transform = 'translateY(0)'; }}
                        >Explore Services</button>
                    </motion.div>
                </div>
            </section>


            {/* ══════════════════════════════════════════
                SCROLLING TICKER
            ══════════════════════════════════════════ */}
            <div className="overflow-hidden py-5 border-y border-gray-100 bg-gray-50">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
                >
                    {[...Array(2)].map((_, i) =>
                        ['AI Automation', 'Career Coaching', 'Resume Optimization', 'Web Development', 'Digital Marketing', 'AI Agents', 'Interview Prep', 'Skill Development', 'Software Solutions'].map((label, j) => (
                            <span key={`${i}-${j}`} className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest" style={{ color: '#9CA3AF' }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                                {label}
                            </span>
                        ))
                    )}
                </motion.div>
            </div>

            {/* ══════════════════════════════════════════
                QUOTE / MISSION
            ══════════════════════════════════════════ */}
            <section className="py-28 bg-white">
                <div className="container max-w-4xl text-center">
                    <FadeIn>
                        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-10" />
                        <h2 className="text-3xl md:text-4xl font-light mb-6 leading-relaxed" style={{ color: '#2E2E2E' }}>
                            "We simplify complexity, amplify results, and turn businesses into industry leaders using the power of{' '}
                            <span className="font-bold" style={{ color: '#3B82F6' }}>AI</span>."
                        </h2>
                        <div className="flex items-center justify-center space-x-3 mt-6">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                <User size={18} color="white" />
                            </div>
                            <p className="font-medium" style={{ color: '#606060' }}>Founder, CareerCraftly</p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                STATS — animated
            ══════════════════════════════════════════ */}
            <section className="py-16 bg-gray-50" ref={countRef}>
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: 'Clients Served', value: '200+', icon: Users },
                            { label: 'Project Success Rate', value: '95%', icon: Target },
                            { label: 'Industry Partners', value: '20+', icon: Shield },
                            { label: 'Programs Delivered', value: '50+', icon: TrendingUp },
                        ].map((stat, index) => (
                            <FadeIn key={index} delay={index * 0.08}>
                                <div
                                    className="text-center p-6 rounded-2xl"
                                    style={{
                                        background: '#f0f0f0',
                                        boxShadow: '6px 6px 14px #d1d1d1, -6px -6px 14px #ffffff'
                                    }}
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                                        style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                    >
                                        <stat.icon className="w-6 h-6" style={{ color: '#3B82F6' }} />
                                    </div>
                                    <div className="text-4xl font-bold mb-1" style={{ color: '#111111' }}>{stat.value}</div>
                                    <div className="text-sm font-medium" style={{ color: '#606060' }}>{stat.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                WHY CHOOSE US
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-white">
                <div className="container">
                    <FadeIn><SectionHeading badge="Benefits" title="Why Brands Trust CareerCraftly" subtitle="AI-powered solutions that are fast, reliable, and built to scale with your ambitions." /></FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Real-Time Performance Insights', desc: 'Stay ahead with instant analytics and actionable intelligence that guides your next move.', icon: Clock, metric: 'Real-Time' },
                            { title: 'AI-Driven Growth Engine', desc: 'Make smarter decisions powered by real-time predictive data and intelligent recommendations.', icon: TrendingUp, metric: '97% Success' },
                            { title: 'Always in Sync', desc: 'Seamless collaboration with real-time team updates, keeping everyone aligned.', icon: Users, metric: 'Instant' }
                        ].map((benefit, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <NeumorphicCard icon={benefit.icon} title={benefit.title} description={benefit.desc} metric={benefit.metric} />
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-3 mt-12">
                            {['Smart Automation', 'Scalable Systems', 'Cost Efficient', 'Real-Time Insights', 'Data-Driven Execution', 'Expert Mentors', 'Proven Frameworks'].map((item, index) => (
                                <div key={index} className="bg-gray-50 border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-white hover:border-blue-400 hover:text-blue-500 transition-all cursor-default" style={{ color: '#2E2E2E' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                HOW IT WORKS — PROCESS STEPS
            ══════════════════════════════════════════ */}
            <section className="py-24" style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}>
                <div className="container">
                    <FadeIn><SectionHeading badge="Process" title="How CareerCraftly Works" subtitle="A structured, result-driven process designed to move you from where you are to where you want to be." /></FadeIn>

                    <div className="relative">
                        {/* Connecting line (desktop) */}
                        <div className="hidden md:block absolute top-[52px] left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" style={{ zIndex: 0 }} />

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" style={{ zIndex: 1 }}>
                            {[
                                { step: '01', title: 'Discovery Call', desc: 'We begin with a free consultation to understand your goals, challenges, and vision.', icon: User },
                                { step: '02', title: 'Strategy Design', desc: 'Our team crafts a personalized roadmap tailored to your specific objectives.', icon: BarChart3 },
                                { step: '03', title: 'Execution & Build', desc: 'We execute the plan with precision — from tech builds to career coaching sessions.', icon: Zap },
                                { step: '04', title: 'Growth & Results', desc: 'We measure outcomes, iterate, and help you sustain momentum for long-term success.', icon: Award },
                            ].map((step, index) => (
                                <FadeIn key={index} delay={index * 0.12}>
                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center mb-6 relative"
                                            style={{
                                                background: '#ECEFF2',
                                                boxShadow: '8px 8px 20px #d1d4d9, -8px -8px 20px #ffffff'
                                            }}
                                        >
                                            <step.icon size={28} style={{ color: '#3B82F6' }} />
                                            <span className="text-xs font-bold mt-1" style={{ color: '#3B82F6' }}>{step.step}</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2" style={{ color: '#111111' }}>{step.title}</h3>
                                        <p className="text-sm leading-relaxed" style={{ color: '#606060' }}>{step.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                FEATURED SERVICES PREVIEW
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-white">
                <div className="container">
                    <FadeIn>
                        <SectionHeading
                            badge="Services"
                            title="Everything You Need to Grow"
                            subtitle="From technical development to career transformation — we provide end-to-end solutions for professionals and businesses."
                        />
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Globe, title: 'Website Development', desc: 'Responsive, SEO-friendly websites that establish your digital presence and convert visitors into customers.', tag: 'Technical' },
                            { icon: Brain, title: 'AI Agents', desc: 'Intelligent automation and custom AI agents that handle repetitive tasks and supercharge productivity.', tag: 'Technical' },
                            { icon: Smartphone, title: 'App Development', desc: 'Cross-platform mobile and web apps built with modern technology stacks and scalable architecture.', tag: 'Technical' },
                            { icon: User, title: 'Career Coaching', desc: '1-on-1 coaching with expert mentors who help you clarify your path, set goals, and take decisive action.', tag: 'Career' },
                            { icon: FileText, title: 'Resume Optimization', desc: 'Professionally crafted resumes that highlight your strengths and make you stand out to recruiters.', tag: 'Career' },
                            { icon: BookOpen, title: 'Skill Development', desc: 'Tailored training programs in in-demand skills to boost your employability and stay ahead of trends.', tag: 'Career' },
                        ].map((service, index) => (
                            <FadeIn key={index} delay={index * 0.07}>
                                <div
                                    className="rounded-2xl p-7 h-full flex flex-col group cursor-pointer transition-all duration-300"
                                    style={{
                                        background: '#f0f0f3',
                                        boxShadow: '6px 6px 14px #d1d1d1, -6px -6px 14px #ffffff',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '2px 2px 6px #d1d1d1, -2px -2px 6px #ffffff, 0 0 0 2px rgba(59,130,246,0.2)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '6px 6px 14px #d1d1d1, -6px -6px 14px #ffffff'; }}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                        >
                                            <service.icon size={24} style={{ color: '#3B82F6' }} />
                                        </div>
                                        <span
                                            className="text-xs font-semibold px-3 py-1 rounded-full"
                                            style={{ background: 'rgba(59,130,246,0.08)', color: '#3B82F6' }}
                                        >{service.tag}</span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2" style={{ color: '#111111' }}>{service.title}</h3>
                                    <p className="text-sm leading-relaxed flex-grow" style={{ color: '#606060' }}>{service.desc}</p>
                                    <div className="mt-5 flex items-center text-sm font-semibold gap-1 group-hover:gap-2 transition-all" style={{ color: '#3B82F6' }}>
                                        Learn more <ChevronRight size={15} />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.3}>
                        <div className="text-center mt-10">
                            <button
                                onClick={() => navigate('/services')}
                                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold text-base transition-all"
                                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                View All Programs <ArrowRight size={16} />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                TESTIMONIALS
            ══════════════════════════════════════════ */}
            <section className="py-24" style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}>
                <div className="container">
                    <FadeIn><SectionHeading badge="Testimonials" title="Real People. Real Results." subtitle="Don't just take our word for it — hear from professionals who transformed their careers and businesses with CareerCraftly." /></FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: 'Priya Sharma', role: 'Software Engineer at TCS', stars: 5, text: 'CareerCraftly completely revamped my resume and coaching sessions were a game-changer. I landed my dream job within 6 weeks!' },
                            { name: 'Rahul Mehta', role: 'Founder, TechStart Labs', stars: 5, text: 'Their AI automation solutions saved us 40+ hours a week. The team is incredibly professional and results-focused.' },
                            { name: 'Ananya Patel', role: 'Marketing Manager', stars: 5, text: 'From digital marketing strategy to execution, CareerCraftly\'s team delivered beyond our expectations. Our leads doubled in 3 months.' },
                        ].map((t, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div
                                    className="rounded-2xl p-7 flex flex-col h-full"
                                    style={{
                                        background: '#ECEFF2',
                                        boxShadow: '6px 6px 16px #d1d4d9, -6px -6px 16px #ffffff'
                                    }}
                                >
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: t.stars }).map((_, j) => (
                                            <Star key={j} size={16} fill="#3B82F6" style={{ color: '#3B82F6' }} />
                                        ))}
                                    </div>
                                    <p className="text-sm leading-relaxed flex-grow mb-6 italic" style={{ color: '#4B5563' }}>"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                                            {t.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm" style={{ color: '#111111' }}>{t.name}</p>
                                            <p className="text-xs" style={{ color: '#9CA3AF' }}>{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                TECHNOLOGIES WE USE — MARQUEE
            ══════════════════════════════════════════ */}
            <section className="py-20 bg-white overflow-hidden">
                <FadeIn>
                    <p className="text-center text-sm font-semibold tracking-widest uppercase mb-12" style={{ color: '#9CA3AF' }}>
                        Technologies &amp; Tools We Use
                    </p>
                </FadeIn>

                {/* Marquee Row 1 — left scroll */}
                {(() => {
                    const row1 = [
                        {
                            name: 'Antigravity',
                            logo: (
                                <span className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-black text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg,#4285F4,#34A853)' }}>AG</span>
                            ),
                            bg: '#fff', border: '#DBEAFE', text: '#2563EB'
                        },
                        {
                            name: 'ClawdBot',
                            logo: (
                                <span className="flex items-center justify-center w-9 h-9 rounded-xl text-white font-black text-xs flex-shrink-0" style={{ background: 'linear-gradient(135deg,#7C3AED,#A78BFA)' }}>CB</span>
                            ),
                            bg: '#fff', border: '#EDE9FE', text: '#7C3AED'
                        },
                        {
                            name: 'Claude',
                            logo: (
                                /* Anthropic / Claude logo */
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#D97706" />
                                    <path d="M23.5 10L34 33H27.5L23.5 22L19.5 33H13L23.5 10Z" fill="white" />
                                </svg>
                            ),
                            bg: '#fff', border: '#FEF3C7', text: '#D97706'
                        },
                        {
                            name: 'Cursor',
                            logo: (
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#000" />
                                    <path d="M14 9L37 23L14 37V9Z" fill="white" />
                                </svg>
                            ),
                            bg: '#fff', border: '#E5E7EB', text: '#111111'
                        },
                        {
                            name: 'Gemini',
                            logo: (
                                /* Google Gemini star-shape */
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#EFF6FF" />
                                    <path d="M23 6C23 6 25.5 16.5 30 21C34.5 25.5 40 23 40 23C40 23 34.5 20.5 30 25C25.5 29.5 23 40 23 40C23 40 20.5 29.5 16 25C11.5 20.5 6 23 6 23C6 23 11.5 25.5 16 21C20.5 16.5 23 6 23 6Z" fill="url(#gemGrad)" />
                                    <defs>
                                        <linearGradient id="gemGrad" x1="6" y1="6" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4285F4" />
                                            <stop offset="0.5" stopColor="#9B72CB" />
                                            <stop offset="1" stopColor="#EA4335" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ),
                            bg: '#fff', border: '#DBEAFE', text: '#2563EB'
                        },
                        {
                            name: 'GitHub Copilot',
                            logo: (
                                /* GitHub octocat simplified */
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#F3F4F6" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M23 8C14.716 8 8 14.716 8 23C8 29.627 12.292 35.252 18.254 37.247C18.854 37.354 19.075 36.986 19.075 36.67C19.075 36.385 19.065 35.588 19.06 34.537C15.538 35.27 14.83 32.82 14.83 32.82C14.285 31.43 13.502 31.063 13.502 31.063C12.42 30.312 13.583 30.328 13.583 30.328C14.779 30.411 15.408 31.555 15.408 31.555C16.472 33.388 18.214 32.857 19.097 32.55C19.202 31.769 19.517 31.239 19.864 30.939C17.001 30.636 13.992 29.543 13.992 24.528C13.992 23.219 14.459 22.15 15.431 21.298C15.309 20.995 14.9 19.773 15.547 18.123C15.547 18.123 16.549 17.8 19.045 19.343C20.194 19.029 21.401 18.872 22.601 18.866C23.801 18.872 25.008 19.029 26.159 19.343C28.652 17.8 29.652 18.123 29.652 18.123C30.301 19.773 29.892 20.995 29.77 21.298C30.744 22.15 31.207 23.219 31.207 24.528C31.207 29.555 28.194 30.632 25.323 30.929C25.764 31.296 26.156 32.032 26.156 33.148C26.156 34.741 26.141 36.022 26.141 36.67C26.141 36.99 26.359 37.362 26.968 37.245C32.72 35.246 37 29.625 37 23C37 14.716 30.284 8 23 8Z" fill="#181717" />
                                </svg>
                            ),
                            bg: '#fff', border: '#E5E7EB', text: '#111111'
                        },
                        {
                            name: 'React',
                            logo: (
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#E0F7FA" />
                                    <circle cx="23" cy="23" r="3.2" fill="#61DAFB" />
                                    <ellipse cx="23" cy="23" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" fill="none" />
                                    <ellipse cx="23" cy="23" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(60 23 23)" />
                                    <ellipse cx="23" cy="23" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" fill="none" transform="rotate(120 23 23)" />
                                </svg>
                            ),
                            bg: '#fff', border: '#CFFAFE', text: '#0891B2'
                        },
                        {
                            name: 'Vite',
                            logo: (
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#F5F3FF" />
                                    <defs>
                                        <linearGradient id="viteG" x1="12" y1="8" x2="34" y2="38" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#BD34FE" />
                                            <stop offset="1" stopColor="#646CFF" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M37 9L22 37.5L18 27L30 9H37Z" fill="url(#viteG)" />
                                    <path d="M9 9L22 37.5L18 27L6 9H9Z" fill="#646CFF" opacity="0.6" />
                                    <path d="M9 9H30L22 37.5L9 9Z" fill="url(#viteG)" opacity="0.85" />
                                </svg>
                            ),
                            bg: '#fff', border: '#EDE9FE', text: '#6D28D9'
                        },
                        {
                            name: 'Vercel',
                            logo: (
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#F9FAFB" />
                                    <polygon points="23,10 38,36 8,36" fill="#000000" />
                                </svg>
                            ),
                            bg: '#fff', border: '#E5E7EB', text: '#111111'
                        },
                        {
                            name: 'Framer Motion',
                            logo: (
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#EFF6FF" />
                                    <path d="M12 8H34V22H23L12 8Z" fill="#0055FF" />
                                    <path d="M12 22H23V36L12 22Z" fill="#0055FF" opacity="0.7" />
                                    <path d="M23 22H34L23 36V22Z" fill="#0055FF" opacity="0.4" />
                                </svg>
                            ),
                            bg: '#fff', border: '#DBEAFE', text: '#1D4ED8'
                        },
                        {
                            name: 'TailwindCSS',
                            logo: (
                                <svg className="w-9 h-9 flex-shrink-0" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="46" height="46" rx="10" fill="#ECFEFF" />
                                    <path d="M23 14C19.5 14 17.25 15.75 16 19.25C17.75 17.5 19.75 16.875 22 17.375C23.284 17.671 24.216 18.616 25.25 19.664C26.955 21.391 28.926 23.375 33 23.375C36.5 23.375 38.75 21.625 40 18.125C38.25 19.875 36.25 20.5 34 20C32.716 19.704 31.784 18.759 30.75 17.711C29.045 15.984 27.074 14 23 14ZM16 23.375C12.5 23.375 10.25 25.125 9 28.625C10.75 26.875 12.75 26.25 15 26.75C16.284 27.046 17.216 27.991 18.25 29.039C19.955 30.766 21.926 32.75 26 32.75C29.5 32.75 31.75 31 33 27.5C31.25 29.25 29.25 29.875 27 29.375C25.716 29.079 24.784 28.134 23.75 27.086C22.045 25.359 20.074 23.375 16 23.375Z" fill="#06B6D4" />
                                </svg>
                            ),
                            bg: '#fff', border: '#CFFAFE', text: '#0891B2'
                        },
                    ];

                    const TechCard = ({ tech }) => (
                        <div
                            className="flex items-center gap-3 px-5 py-3.5 rounded-2xl mx-3 flex-shrink-0 transition-all duration-200"
                            style={{
                                background: tech.bg,
                                border: `1.5px solid ${tech.border}`,
                                boxShadow: '0 2px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
                                minWidth: '160px'
                            }}
                        >
                            {tech.logo}
                            <span className="font-semibold text-sm whitespace-nowrap" style={{ color: tech.text }}>{tech.name}</span>
                        </div>
                    );

                    return (
                        <>
                            {/* Row 1 — scrolls left */}
                            <div className="relative mb-5" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <motion.div
                                    className="flex"
                                    animate={{ x: ['0%', '-50%'] }}
                                    transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                                >
                                    {[...row1, ...row1].map((tech, i) => (
                                        <TechCard key={i} tech={tech} />
                                    ))}
                                </motion.div>
                            </div>

                            {/* Row 2 — scrolls right (reverse subset) */}
                            <div className="relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                                <motion.div
                                    className="flex"
                                    animate={{ x: ['-50%', '0%'] }}
                                    transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                                >
                                    {[...row1.slice().reverse(), ...row1.slice().reverse()].map((tech, i) => (
                                        <TechCard key={i} tech={tech} />
                                    ))}
                                </motion.div>
                            </div>
                        </>
                    );
                })()}
            </section>

            {/* ══════════════════════════════════════════
                KEY BENEFITS — CHECKLIST STYLE
            ══════════════════════════════════════════ */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <Badge label="Why Us" />
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: '#111111' }}>
                                Built for Ambitious Professionals & Brands
                            </h2>
                            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#606060' }}>
                                We combine cutting-edge AI with deep industry expertise to deliver outcomes that matter — faster careers, leaner operations, and measurable growth.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Personalized 1-on-1 career and business coaching',
                                    'AI-powered tools that work 24/7 for your growth',
                                    'Dedicated team of 20+ industry experts',
                                    'Transparent reporting and measurable KPIs',
                                    'End-to-end technical and strategic support',
                                    'Fast turnaround without compromising quality',
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle size={20} style={{ color: '#3B82F6', flexShrink: 0 }} />
                                        <span className="text-base" style={{ color: '#2E2E2E' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={() => navigate('/contact')}
                                className="mt-10 inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold text-base transition-all"
                                style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}
                                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 28px rgba(59,130,246,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                                Book a Free Consultation <ArrowRight size={16} />
                            </button>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="grid grid-cols-2 gap-5">
                                {[
                                    { icon: Briefcase, title: 'Career Strategy', value: '100%', sub: 'Personalized Plans' },
                                    { icon: Zap, title: 'Faster Results', value: '3x', sub: 'Avg. Career Growth' },
                                    { icon: Brain, title: 'AI-Powered', value: '24/7', sub: 'AI Assistance' },
                                    { icon: Award, title: 'Client Satisfaction', value: '4.9★', sub: 'Average Rating' },
                                ].map((card, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl p-6 text-center"
                                        style={{
                                            background: '#ECEFF2',
                                            boxShadow: '6px 6px 14px #d1d4d9, -6px -6px 14px #ffffff'
                                        }}
                                    >
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: 'rgba(59,130,246,0.1)' }}>
                                            <card.icon size={22} style={{ color: '#3B82F6' }} />
                                        </div>
                                        <div className="text-2xl font-black mb-0.5" style={{ color: '#111111' }}>{card.value}</div>
                                        <div className="text-xs font-medium" style={{ color: '#9CA3AF' }}>{card.sub}</div>
                                        <div className="text-xs mt-1 font-semibold" style={{ color: '#606060' }}>{card.title}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                FINAL CTA BANNER
            ══════════════════════════════════════════ */}
            <section className="py-28 bg-white">
                <div className="container max-w-4xl text-center">
                    <FadeIn>
                        <div
                            className="rounded-3xl p-12 md:p-16"
                            style={{
                                background: 'linear-gradient(135deg, #EBF2FF 0%, #F0F4FF 50%, #EBF2FF 100%)',
                                border: '1px solid rgba(59,130,246,0.15)',
                                boxShadow: '0 20px 60px rgba(59,130,246,0.1)'
                            }}
                        >
                            <div
                                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8"
                                style={{ background: 'rgba(59, 130, 246, 0.15)' }}
                            >
                                <Sparkles size={30} style={{ color: '#3B82F6' }} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: '#111111' }}>
                                Ready to Accelerate Your Growth?
                            </h2>
                            <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#606060' }}>
                                Join 200+ forward-thinking professionals and businesses already leveraging AI to stay ahead of the competition.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 py-4 rounded-full font-bold text-lg transition-all"
                                    style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
                                    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 10px 32px rgba(59,130,246,0.45)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    Start Your Transformation <ArrowRight size={18} />
                                </button>
                                <button
                                    onClick={() => navigate('/services')}
                                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-bold text-lg transition-all border"
                                    style={{ color: '#111111', borderColor: 'rgba(59,130,246,0.3)', background: 'transparent' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#3B82F6'; e.currentTarget.style.color = '#3B82F6'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.color = '#111111'; }}
                                >
                                    View All Programs
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

        </div>
    );
};

export default Home;
