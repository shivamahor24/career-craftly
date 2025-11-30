import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Forenotes',
            category: 'Note-taking AI',
            tech: 'React + Node.js + AI/ML',
            status: '95%',
            color: '#F0F6FF',
            initial: 'F'
        },
        {
            title: 'The Nexalyze',
            category: 'Analytics Tool',
            tech: 'Vue.js + Python + D3.js',
            status: '88%',
            color: '#FDECF7',
            initial: 'N'
        },
        {
            title: 'TradeYourCapital',
            category: 'Trading Platform',
            tech: 'Angular + TS + WebSockets',
            status: '92%',
            color: '#EFFCEE',
            initial: 'T'
        },
        {
            title: 'Maasharda Industries',
            category: 'Supply Chain',
            tech: 'Laravel + MySQL',
            status: '85%',
            color: '#FFF4E6',
            initial: 'M'
        },
        {
            title: 'Jaama Sharda Packers',
            category: 'Logistics',
            tech: 'WordPress + GPS API',
            status: '90%',
            color: '#F3E8FF',
            initial: 'J'
        },
        {
            title: 'X-500',
            category: 'Engineering App',
            tech: 'Next.js + GraphQL + MongoDB',
            status: '75%',
            color: '#E0F2FE',
            initial: 'X'
        },
    ];

    return (
        <div
            className="pt-28 pb-20"
            style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
        >
            <div className="container">
                {/* Top Section - Hero */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Our Work & Case Studies
                    </h1>
                    <p
                        className="text-lg max-w-3xl mx-auto"
                        style={{ color: '#6C6C6C' }}
                    >
                        Explore how we've helped businesses transform their digital presence.
                    </p>
                </div>

                {/* Project Cards - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className="bg-white rounded-3xl p-8 border h-full transition-all hover:shadow-xl"
                                style={{
                                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                                    borderColor: '#EAEAEA'
                                }}
                            >
                                {/* Thumbnail Area */}
                                <div
                                    className="h-48 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden transition-all"
                                    style={{ background: project.color }}
                                >
                                    <span
                                        className="text-6xl font-bold"
                                        style={{
                                            color: '#3B82F6',
                                            opacity: 0.3
                                        }}
                                    >
                                        {project.initial}
                                    </span>
                                    <div
                                        className="absolute inset-0"
                                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%)' }}
                                    ></div>
                                </div>

                                {/* Project Title */}
                                <h3
                                    className="text-2xl font-bold mb-2"
                                    style={{ color: '#000000' }}
                                >
                                    {project.title}
                                </h3>

                                {/* Category */}
                                <p
                                    className="text-sm font-medium mb-4"
                                    style={{ color: '#6C6C6C' }}
                                >
                                    {project.category}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <p
                                        className="text-sm"
                                        style={{ color: '#444444' }}
                                    >
                                        Tech: <span className="font-semibold" style={{ color: '#000000' }}>{project.tech}</span>
                                    </p>
                                </div>

                                {/* Status Bar */}
                                <div className="mb-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <span
                                            className="text-sm"
                                            style={{ color: '#6C6C6C' }}
                                        >
                                            Status
                                        </span>
                                        <span
                                            className="text-sm font-bold"
                                            style={{ color: '#000000' }}
                                        >
                                            {project.status}
                                        </span>
                                    </div>
                                    <div
                                        className="w-full h-2 rounded-full overflow-hidden"
                                        style={{ background: '#F0F0F0' }}
                                    >
                                        <div
                                            className="h-full rounded-full transition-all duration-500"
                                            style={{
                                                width: project.status,
                                                background: '#3B82F6'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* View Case Study Link */}
                                <div
                                    className="pt-4 border-t"
                                    style={{ borderColor: '#EAEAEA' }}
                                >
                                    <span
                                        className="text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform"
                                        style={{ color: '#3B82F6' }}
                                    >
                                        View Case Study
                                        <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
