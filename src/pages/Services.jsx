import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe, Smartphone, Code, Megaphone, Brain,
    User, FileText, BookOpen, Handshake, Bot, ClipboardCheck,
    Sparkles
} from 'lucide-react';

const Services = () => {
    const technicalServices = [
        {
            title: 'Website Development',
            description: 'Professional website design and development services to establish your online presence with responsive and SEO-friendly websites.',
            icon: Globe
        },
        {
            title: 'Application Development',
            description: 'Custom mobile and web application development tailored to your business needs and user requirements.',
            icon: Smartphone
        },
        {
            title: 'Software Development',
            description: 'End-to-end software solutions from concept to deployment, including system design, coding, testing, and maintenance.',
            icon: Code
        },
        {
            title: 'Digital Marketing',
            description: 'Comprehensive digital marketing strategies including SEO, SEM, social media, and content marketing to grow your business.',
            icon: Megaphone
        },
        {
            title: 'AI Agents',
            description: 'Development and integration of intelligent AI agents for automation, customer service, and data analysis.',
            icon: Brain
        }
    ];

    const careerServices = [
        {
            title: 'Career Coaching',
            description: 'One-on-one sessions with experienced career coaches to help you define your career path, set goals, and create actionable plans.',
            icon: User
        },
        {
            title: 'Resume Optimization',
            description: 'Professionally crafted resumes that highlight your strengths and make you stand out to employers in your industry.',
            icon: FileText
        },
        {
            title: 'Skill Development',
            description: 'Customized training programs to develop in-demand skills that boost your employability and career growth.',
            icon: BookOpen
        },
        {
            title: 'Interview Preparation',
            description: 'Mock interviews and personalized feedback to help you ace your next job interview with confidence.',
            icon: Handshake
        },
        {
            title: 'AI Career Assistant',
            description: 'Our AI-powered assistant provides personalized career recommendations and answers your career-related questions 24/7.',
            icon: Bot
        },
        {
            title: 'Career Assessment',
            description: 'Comprehensive assessments to identify your strengths, interests, and ideal career paths based on your unique profile.',
            icon: ClipboardCheck
        }
    ];

    return (
        <div
            className="pt-28 pb-20"
            style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
        >
            <div className="container">
                {/* Page Header */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Our Services
                    </h1>
                </div>

                {/* Section 1 - Technical Solutions */}
                <div className="mb-20">
                    <h2
                        className="text-4xl font-bold mb-12 text-center"
                        style={{ color: '#000000' }}
                    >
                        Technical Solutions
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technicalServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div
                                    className="bg-white rounded-3xl p-8 border h-full transition-all hover:shadow-xl"
                                    style={{
                                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                                        borderColor: '#EAEAEA'
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all"
                                        style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                    >
                                        <service.icon
                                            size={32}
                                            strokeWidth={1.5}
                                            style={{ color: '#3B82F6' }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl font-bold mb-4"
                                        style={{ color: '#000000' }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="leading-relaxed"
                                        style={{
                                            color: '#6C6C6C',
                                            lineHeight: '1.7'
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Section 2 - Career Services */}
                <div className="mb-20">
                    <h2
                        className="text-4xl font-bold mb-12 text-center"
                        style={{ color: '#000000' }}
                    >
                        Career Services
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {careerServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div
                                    className="bg-white rounded-3xl p-8 border h-full transition-all hover:shadow-xl"
                                    style={{
                                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                                        borderColor: '#EAEAEA'
                                    }}
                                >
                                    {/* Icon */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all"
                                        style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                    >
                                        <service.icon
                                            size={32}
                                            strokeWidth={1.5}
                                            style={{ color: '#3B82F6' }}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl font-bold mb-4"
                                        style={{ color: '#000000' }}
                                    >
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="leading-relaxed"
                                        style={{
                                            color: '#6C6C6C',
                                            lineHeight: '1.7'
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer CTA Section */}
                <div
                    className="bg-white rounded-3xl p-12 border text-center"
                    style={{
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                        borderColor: '#EAEAEA'
                    }}
                >
                    {/* Blue Accent Icon */}
                    <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
                        style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                    >
                        <Sparkles
                            size={32}
                            strokeWidth={1.5}
                            style={{ color: '#3B82F6' }}
                        />
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-4xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Ready to Get Started?
                    </h2>

                    {/* Description */}
                    <p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        style={{ color: '#6C6C6C' }}
                    >
                        Let's discuss how our services can help you achieve your goals.
                    </p>

                    {/* Black Pill Button with Blue Glow Hover */}
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
                        Contact Us Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Services;
