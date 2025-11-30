import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Future of Remote Work in Tech',
            excerpt: 'How distributed teams are reshaping the software industry landscape in 2025 and beyond.',
            date: 'Nov 28, 2025',
            author: 'Anant Singh',
            category: 'Industry Trends',
            avatar: 'AS'
        },
        {
            title: 'Top 10 Programming Languages for 2026',
            excerpt: 'A comprehensive guide to the most in-demand languages you should learn next year.',
            date: 'Nov 25, 2025',
            author: 'Sarah Chen',
            category: 'Development',
            avatar: 'SC'
        },
        {
            title: 'Transition into Tech Without a Degree',
            excerpt: 'Real stories and actionable steps to launch your career in technology from non-traditional backgrounds.',
            date: 'Nov 20, 2025',
            author: 'Mike Johnson',
            category: 'Career Advice',
            avatar: 'MJ'
        },
        {
            title: 'Salary Negotiation Strategies',
            excerpt: 'Master the art of negotiation to ensure you get paid what you are worth in the current market.',
            date: 'Nov 15, 2025',
            author: 'Emily Davis',
            category: 'Career Growth',
            avatar: 'ED'
        },
        {
            title: 'AI & Automation in Modern Workflows',
            excerpt: 'Discover how artificial intelligence is transforming productivity and business operations.',
            date: 'Nov 10, 2025',
            author: 'David Park',
            category: 'AI & Automation',
            avatar: 'DP'
        },
        {
            title: 'Building Productive Remote Teams',
            excerpt: 'Essential tools and strategies for managing distributed teams effectively in the digital age.',
            date: 'Nov 5, 2025',
            author: 'Lisa Wong',
            category: 'Remote Work',
            avatar: 'LW'
        }
    ];

    return (
        <div
            className="pt-28 pb-20"
            style={{ background: 'linear-gradient(135deg, #f5f5f7 0%, #e8eaed 50%, #f5f5f7 100%)' }}
        >
            <div className="container">
                {/* Hero Title Section */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Insights & Career Guides
                    </h1>
                    <p
                        className="text-lg max-w-3xl mx-auto"
                        style={{ color: '#6B6B6B' }}
                    >
                        Expert perspectives on technology, career growth, and industry trends.
                    </p>
                </div>

                {/* Blog Cards Grid - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {posts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group cursor-pointer"
                        >
                            <div
                                className="bg-white rounded-3xl p-8 border h-full flex flex-col transition-all hover:shadow-xl"
                                style={{
                                    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                                    borderColor: '#EDEDED'
                                }}
                            >
                                {/* Category Badge + Date */}
                                <div className="flex items-center justify-between mb-6">
                                    <span
                                        className="px-4 py-2 rounded-full font-semibold text-sm"
                                        style={{
                                            background: '#3B82F6',
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        {post.category}
                                    </span>
                                    <div
                                        className="flex items-center text-sm"
                                        style={{ color: '#9CA3AF' }}
                                    >
                                        <Calendar size={16} className="mr-2" />
                                        <span style={{ color: '#4B4B4B' }}>{post.date}</span>
                                    </div>
                                </div>

                                {/* Blog Title */}
                                <h3
                                    className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors"
                                    style={{ color: '#111111' }}
                                >
                                    {post.title}
                                </h3>

                                {/* Short Description */}
                                <p
                                    className="mb-6 leading-relaxed flex-grow"
                                    style={{
                                        color: '#4B4B4B',
                                        lineHeight: '1.7'
                                    }}
                                >
                                    {post.excerpt}
                                </p>

                                {/* Author Row */}
                                <div
                                    className="flex items-center justify-between pt-6 border-t"
                                    style={{ borderColor: '#EDEDED' }}
                                >
                                    {/* Author with Avatar */}
                                    <div className="flex items-center">
                                        <div
                                            className="w-10 h-10 rounded-full flex items-center justify-center mr-3 font-semibold text-sm"
                                            style={{
                                                background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            {post.avatar}
                                        </div>
                                        <span
                                            className="font-medium text-sm"
                                            style={{ color: '#111111' }}
                                        >
                                            {post.author}
                                        </span>
                                    </div>

                                    {/* Read Article Link */}
                                    <span
                                        className="flex items-center font-semibold text-sm group-hover:translate-x-1 transition-transform"
                                        style={{ color: '#3B82F6' }}
                                    >
                                        Read Article
                                        <ArrowRight size={16} className="ml-2" />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Load More Section */}
                <div className="text-center">
                    <button
                        className="px-8 py-3 rounded-full font-medium transition-all"
                        style={{
                            color: '#111111',
                            border: '1px solid #E5E5E5',
                            background: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.borderColor = '#111111';
                            e.target.style.background = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.borderColor = '#E5E5E5';
                            e.target.style.background = 'transparent';
                        }}
                    >
                        Load More Articles
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
