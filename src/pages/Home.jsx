import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Clock, TrendingUp, Users, Target, Shield } from 'lucide-react';
import NeumorphicCard from '../components/ui/NeumorphicCard';

const Home = () => {
    return (
        <div className="bg-white">
            {/* Hero Section with Video Background */}
            <section className="hero-section">
                {/* Video Background */}
                <video
                    className="hero-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >

                    <source src="/asssets/herosectionedited.mp4" type="video/mp4" />

                </video>

                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent pointer-events-none" style={{ zIndex: 1 }}></div>

                <div className="container text-center relative px-4" style={{ zIndex: 10 }}>
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-6 py-2.5 mb-8 shadow-sm">
                        <Sparkles className="w-4 h-4" style={{ color: '#3B82F6' }} />
                        <span className="text-sm font-semibold tracking-wide" style={{ color: '#606060' }}>AI SOLUTIONS FOR MODERN BUSINESSES</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight" style={{ color: '#111111' }}>
                        CAREER CRAFTLY
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#2E2E2E' }}>
                        Where intelligent automation meets real-world execution
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button
                            className="neu-button-primary"
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
                            onMouseEnter={(e) => {
                                e.target.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                                e.target.style.transform = 'translateY(0)';
                            }}
                            onMouseDown={(e) => {
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            ✨ Get Started
                        </button>
                        <button
                            className="neu-button-secondary"
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
                            onMouseEnter={(e) => {
                                e.target.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                                e.target.style.transform = 'translateY(0)';
                            }}
                            onMouseDown={(e) => {
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Explore Services
                        </button>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="py-24 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-light mb-6 leading-relaxed" style={{ color: '#2E2E2E' }}>
                        "We simplify complexity, amplify results, and turn businesses into industry leaders using the power of <span className="font-bold" style={{ color: '#3B82F6' }}>AI</span>."
                    </h2>
                    <div className="flex items-center justify-center space-x-3 mt-6">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                        <p className="font-medium" style={{ color: '#606060' }}>Founder, CareerCraftly</p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-4">
                            <Sparkles className="w-4 h-4" style={{ color: '#3B82F6' }} />
                            <span className="text-sm font-medium" style={{ color: '#606060' }}>BENEFITS</span>
                        </div>
                        <h2 className="text-4xl font-bold mb-3" style={{ color: '#111111' }}>Why Brands Trust CareerCraftly</h2>
                        <p className="max-w-2xl mx-auto" style={{ color: '#2E2E2E' }}>
                            AI-powered solutions that are fast, reliable, and built to scale.
                        </p>
                    </div>

                    {/* Benefits Cards - Neumorphic Style */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Real-Time Performance Insights', desc: 'Stay ahead with instant analytics and actionable intelligence', icon: Clock, metric: 'Real-Time' },
                            { title: 'AI-Driven Growth Engine', desc: 'Make smarter decisions powered by real-time predictive data', icon: TrendingUp, metric: '97% Success' },
                            { title: 'Always in Sync', desc: 'Seamless collaboration with real-time team updates', icon: Users, metric: 'Instant' }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <NeumorphicCard
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.desc}
                                    metric={benefit.metric}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Benefits Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {['Smart Automation', 'Scalable Systems', 'Cost Efficient', 'Real-Time Insights', 'Data-Driven Execution'].map((item, index) => (
                            <div key={index} className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-50 hover:border-black transition-colors" style={{ color: '#2E2E2E' }}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Clients Empowered', value: '5,000+', icon: Users },
                            { label: 'Project Success Rate', value: '97%', icon: Target },
                            { label: 'Industry Partnerships', value: '150+', icon: Shield },
                            { label: 'Average ROI Increase', value: '$15K+', icon: TrendingUp },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <stat.icon className="w-7 h-7 mx-auto mb-2" style={{ color: '#3B82F6' }} />
                                <div className="text-3xl font-bold mb-1" style={{ color: '#111111' }}>{stat.value}</div>
                                <div className="text-sm" style={{ color: '#606060' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-4xl font-bold mb-4" style={{ color: '#111111' }}>Ready to Accelerate Your Growth?</h2>
                    <p className="text-lg mb-6" style={{ color: '#2E2E2E' }}>
                        Join forward-thinking brands leveraging AI to stay ahead of the competition.
                    </p>
                    <button
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
                        onMouseEnter={(e) => {
                            e.target.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        Start Your Transformation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;
