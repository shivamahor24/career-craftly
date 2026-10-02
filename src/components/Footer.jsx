import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Linkedin, ArrowRight, Mail, Phone, MapPin, ExternalLink, Sparkles, Zap } from 'lucide-react';

const Footer = () => {
    const navigate = useNavigate();

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/career_craftly/', label: 'Instagram' },
        { icon: Youtube, href: 'https://www.youtube.com/@anantupadhyayy', label: 'YouTube' },
        { icon: Linkedin, href: 'https://www.linkedin.com/company/107052137/', label: 'LinkedIn' },
    ];

    const navLinks = [
        { label: 'Home', to: '/' },
        { label: 'Projects', to: '/projects' },
        { label: 'Case Studies', to: '/case-studies' },
        { label: 'Programs', to: '/services' },
        { label: 'Event Gallery', to: '/events' },
        { label: 'Contact Us', to: '/contact' },
    ];

    const contactInfo = [
        { icon: Mail, text: 'anant@careercraftly.org', href: 'mailto:anant@careercraftly.org' },
        { icon: Phone, text: '+91 86400 58346', href: 'tel:+918640058346' },
        { icon: MapPin, text: 'India (Remote & In-Person)', href: null },
    ];

    return (
        <div className="relative w-full" style={{ marginTop: '0px' }}>
            {/* SVG Curve to smooth the transition from white background to dark footer */}
            <svg 
                className="w-full h-12 md:h-20 lg:h-28 text-[#050711] block" 
                style={{ transform: 'translateY(1px)' }} 
                viewBox="0 0 1440 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                preserveAspectRatio="none"
            >
                <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="currentColor"></path>
            </svg>

            <div className="relative overflow-hidden" style={{ background: '#050711', color: '#fff', paddingBottom: '20px' }}>
                {/* Subtle top border glow for clean separation */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 blur-[80px] pointer-events-none rounded-b-full" />
                
                {/* ── Main Footer ── */}
                <footer className="relative z-10 w-full" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
                    <div className="container mx-auto px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">

                        {/* Column 1 — Brand */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.15)' }}>
                                    <img src="/assets/tranferentlogo.png" alt="CareerCraftly" className="w-7 h-7 object-contain" />
                                </div>
                                <span className="text-lg font-bold">CareerCraftly</span>
                            </div>
                            <p className="text-sm leading-relaxed mb-6" style={{ color: '#9CA3AF' }}>
                                Empowering professionals and businesses with AI-powered solutions, expert career coaching, and cutting-edge digital services.
                            </p>
                            {/* Social */}
                            <div className="flex items-center gap-3">
                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                        className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200"
                                        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                                        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(59,130,246,0.2)'; e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                                    >
                                        <Icon size={15} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Column 2 — Navigation */}
                        <div>
                            <h4 className="text-sm font-bold mb-5 tracking-wider uppercase" style={{ color: '#fff' }}>Navigation</h4>
                            <ul className="space-y-3">
                                {navLinks.map(({ label, to }) => (
                                    <li key={label}>
                                        <Link to={to} className="text-sm transition-colors"
                                            style={{ color: '#9CA3AF' }}
                                            onMouseEnter={e => e.target.style.color = '#fff'}
                                            onMouseLeave={e => e.target.style.color = '#9CA3AF'}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 — Services */}
                        <div>
                            <h4 className="text-sm font-bold mb-5 tracking-wider uppercase" style={{ color: '#fff' }}>Services</h4>
                            <ul className="space-y-3">
                                {['Website Development', 'App Development', 'AI Agents', 'Career Coaching', 'Resume Optimization', 'Digital Marketing'].map(s => (
                                    <li key={s}>
                                        <Link to="/services" className="text-sm transition-colors"
                                            style={{ color: '#9CA3AF' }}
                                            onMouseEnter={e => e.target.style.color = '#fff'}
                                            onMouseLeave={e => e.target.style.color = '#9CA3AF'}>
                                            {s}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4 — Contact */}
                        <div>
                            <h4 className="text-sm font-bold mb-5 tracking-wider uppercase" style={{ color: '#fff' }}>Contact</h4>
                            <ul className="space-y-4">
                                {contactInfo.map(({ icon: Icon, text, href }) => (
                                    <li key={text} className="flex items-start gap-3">
                                        <Icon size={15} style={{ color: '#3B82F6', flexShrink: 0, marginTop: 2 }} />
                                        {href ? (
                                            <a href={href} className="text-sm transition-colors" style={{ color: '#9CA3AF' }}
                                                onMouseEnter={e => e.target.style.color = '#fff'}
                                                onMouseLeave={e => e.target.style.color = '#9CA3AF'}>{text}</a>
                                        ) : (
                                            <span className="text-sm" style={{ color: '#9CA3AF' }}>{text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                            {/* Flux Mind Studios */}
                            <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <p className="text-xs mb-2" style={{ color: '#6B7280' }}>Parent company</p>
                                <a href="https://www.fluxmindstudios.com/" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                                    style={{ color: '#A5B4FC' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#A5B4FC'}
                                >
                                    Flux Mind Studios <ExternalLink size={12} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <p className="text-xs" style={{ color: '#6B7280' }}>
                            © {new Date().getFullYear()} CareerCraftly. All rights reserved.
                        </p>
                        <p className="text-xs" style={{ color: '#6B7280' }}>
                            Built with <span style={{ color: '#3B82F6' }}>♥</span> for your career success · Powered by AI
                        </p>
                    </div>
                </div>
            </footer>
        </div>
        </div>
    );
};

export default Footer;
