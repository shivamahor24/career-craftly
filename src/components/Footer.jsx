import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import FooterAnimation from './ui/FooterAnimation';

const Footer = () => {
    return (
        <>
            {/* Section 1 - Bottom CTA */}
            <section
                className="py-20"
                style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
            >
                <div className="container max-w-4xl text-center">
                    {/* Centered Heading */}
                    <h2
                        className="text-4xl md:text-5xl font-bold mb-6"
                        style={{ color: '#000000' }}
                    >
                        Ready to Accelerate Your Growth?
                    </h2>

                    {/* Subheading */}
                    <p
                        className="text-lg md:text-xl mb-10 max-w-3xl mx-auto"
                        style={{ color: '#4A4A4A' }}
                    >
                        Join forward-thinking brands leveraging AI to stay ahead of the competition.
                    </p>

                    {/* CTA Button - Black Pill with Blue Glow Hover */}
                    <button
                        className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center space-x-2"
                        style={{
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        <span>Start Your Transformation</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </section>

            {/* Section 2 - Footer */}
            <footer
                className="pt-20 pb-10 relative"
                style={{
                    background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)',
                    borderTop: '1px solid #E5E5E5',
                    overflow: 'hidden'
                }}
            >
                <FooterAnimation />
                <div className="container mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
                    {/* Footer Layout - 4 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                        {/* Column 1 - Brand */}
                        <div className="space-y-6">
                            {/* Logo + Name */}
                            <div className="flex items-center space-x-3 mb-4">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                >
                                    <img
                                        src="/asssets/tranferentlogo.png"
                                        alt="CareerCraftly"
                                        className="w-7 h-7 object-contain"
                                    />
                                </div>
                                <span
                                    className="text-xl font-bold"
                                    style={{ color: '#111111' }}
                                >
                                    CareerCraftly
                                </span>
                            </div>

                            {/* Tagline */}
                            <p
                                className="leading-relaxed text-sm max-w-sm"
                                style={{ color: '#6C6C6C' }}
                            >
                                Empowering professionals to build successful and fulfilling careers through personalized guidance and expert support in the tech industry.
                            </p>

                            {/* Social Icons */}
                            <div className="flex items-center space-x-3 pt-2">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all border"
                                    style={{
                                        borderColor: '#D1D5DB',
                                        color: '#6C6C6C'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.borderColor = '#3B82F6';
                                        e.target.style.color = '#3B82F6';
                                        e.target.style.background = 'rgba(59, 130, 246, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.borderColor = '#D1D5DB';
                                        e.target.style.color = '#6C6C6C';
                                        e.target.style.background = 'transparent';
                                    }}
                                >
                                    <Instagram size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all border"
                                    style={{
                                        borderColor: '#D1D5DB',
                                        color: '#6C6C6C'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.borderColor = '#3B82F6';
                                        e.target.style.color = '#3B82F6';
                                        e.target.style.background = 'rgba(59, 130, 246, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.borderColor = '#D1D5DB';
                                        e.target.style.color = '#6C6C6C';
                                        e.target.style.background = 'transparent';
                                    }}
                                >
                                    <Youtube size={18} />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-lg flex items-center justify-center transition-all border"
                                    style={{
                                        borderColor: '#D1D5DB',
                                        color: '#6C6C6C'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.borderColor = '#3B82F6';
                                        e.target.style.color = '#3B82F6';
                                        e.target.style.background = 'rgba(59, 130, 246, 0.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.borderColor = '#D1D5DB';
                                        e.target.style.color = '#6C6C6C';
                                        e.target.style.background = 'transparent';
                                    }}
                                >
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2 - Resources */}
                        <div>
                            <h4
                                className="text-lg font-bold mb-6"
                                style={{ color: '#000000' }}
                            >
                                Resources
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        to="/blog"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Career Blog
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Industry Reports
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Salary Guides
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Webinars & Events
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Career Assessment
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Company */}
                        <div>
                            <h4
                                className="text-lg font-bold mb-6"
                                style={{ color: '#000000' }}
                            >
                                Company
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Our Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Partnerships
                                    </a>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 - Legal */}
                        <div>
                            <h4
                                className="text-lg font-bold mb-6"
                                style={{ color: '#000000' }}
                            >
                                Legal
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-sm transition-colors hover:underline"
                                        style={{ color: '#6C6C6C' }}
                                        onMouseEnter={(e) => e.target.style.color = '#3B82F6'}
                                        onMouseLeave={(e) => e.target.style.color = '#6C6C6C'}
                                    >
                                        GDPR Compliance
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom Line */}
                    <div
                        className="pt-8 text-center text-sm"
                        style={{
                            borderTop: '1px solid #E7E7E7',
                            color: '#6C6C6C'
                        }}
                    >
                        <p>
                            © 2025 CareerCraftly. All rights reserved. Designed with{' '}
                            <span style={{ color: '#3B82F6' }}>❤️</span>{' '}
                            for your career success.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
