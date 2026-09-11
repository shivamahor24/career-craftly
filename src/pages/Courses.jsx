import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Check, ArrowRight } from 'lucide-react';
import NeumorphicServiceCard from '../components/ui/NeumorphicServiceCard';

const Courses = () => {
    const navigate = useNavigate();
    const courses = [
        {
            title: 'Full Stack Web Development',
            duration: '12 weeks',
            description: 'Master modern web development with React, Node.js, and databases.',
            level: 'Beginner',
            levelColor: '#EFFCEE',
            levelTextColor: '#16A34A',
            features: [
                'HTML, CSS, JavaScript fundamentals',
                'React & modern frontend frameworks',
                'Node.js & Express backend',
                'Database design & integration'
            ]
        },
        {
            title: 'AI & Machine Learning',
            duration: '16 weeks',
            description: 'Learn to build intelligent systems using Python and TensorFlow.',
            level: 'Intermediate',
            levelColor: '#E0F2FE',
            levelTextColor: '#0284C7',
            features: [
                'Python programming for AI',
                'Machine learning algorithms',
                'Neural networks & deep learning',
                'Real-world AI project deployment'
            ]
        },
        {
            title: 'Mobile App Development',
            duration: '10 weeks',
            description: 'Create native mobile apps for iOS and Android platforms.',
            level: 'Intermediate',
            levelColor: '#E0F2FE',
            levelTextColor: '#0284C7',
            features: [
                'React Native fundamentals',
                'iOS & Android development',
                'App deployment & publishing',
                'Mobile UI/UX best practices'
            ]
        },
        {
            title: 'Cloud Architecture & DevOps',
            duration: '14 weeks',
            description: 'Master cloud infrastructure, CI/CD, and modern deployment strategies.',
            level: 'Advanced',
            levelColor: '#F3E8FF',
            levelTextColor: '#9333EA',
            features: [
                'AWS, Azure, Google Cloud',
                'Docker & Kubernetes',
                'CI/CD pipeline automation',
                'Infrastructure as Code'
            ]
        },
        {
            title: 'Data Science & Analytics',
            duration: '12 weeks',
            description: 'Transform data into insights using Python, SQL, and visualization tools.',
            level: 'Beginner',
            levelColor: '#EFFCEE',
            levelTextColor: '#16A34A',
            features: [
                'Python for data analysis',
                'SQL & database querying',
                'Data visualization with Tableau',
                'Statistical analysis & modeling'
            ]
        },
        {
            title: 'Cybersecurity Fundamentals',
            duration: '8 weeks',
            description: 'Learn to protect systems and networks from cyber threats.',
            level: 'Advanced',
            levelColor: '#F3E8FF',
            levelTextColor: '#9333EA',
            features: [
                'Network security principles',
                'Ethical hacking techniques',
                'Security tools & frameworks',
                'Incident response & recovery'
            ]
        }
    ];

    return (
        <div
            className="pt-28 pb-20"
            style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
        >
            <div className="container">
                {/* Top Section */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Our Courses
                    </h1>
                    <p
                        className="text-lg max-w-3xl mx-auto"
                        style={{ color: '#6C6C6C' }}
                    >
                        Master the skills that define the future of technology.
                    </p>
                </div>

                {/* Course Cards - 3 Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="group cursor-pointer"
                        >
                            <NeumorphicServiceCard>
                                {/* Course Icon (Blue) */}
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                >
                                    <BookOpen
                                        size={32}
                                        strokeWidth={1.5}
                                        style={{ color: '#3B82F6' }}
                                    />
                                </div>

                                {/* Difficulty Badge */}
                                <div className="mb-4">
                                    <span
                                        className="px-4 py-2 rounded-full text-sm font-semibold"
                                        style={{
                                            background: course.levelColor,
                                            color: course.levelTextColor
                                        }}
                                    >
                                        {course.level}
                                    </span>
                                </div>

                                {/* Course Title */}
                                <h3
                                    className="text-2xl font-bold mb-3"
                                    style={{ color: '#000000' }}
                                >
                                    {course.title}
                                </h3>

                                {/* Duration */}
                                <div
                                    className="flex items-center mb-4 text-sm"
                                    style={{ color: '#6C6C6C' }}
                                >
                                    <Clock size={16} className="mr-2" />
                                    <span>{course.duration}</span>
                                </div>

                                {/* Description */}
                                <p
                                    className="mb-6 leading-relaxed"
                                    style={{
                                        color: '#4B5563',
                                        lineHeight: '1.7'
                                    }}
                                >
                                    {course.description}
                                </p>

                                {/* Feature List with Blue Bullets */}
                                <ul className="space-y-3 mb-6 flex-grow w-full text-left">
                                    {course.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-start text-sm"
                                            style={{ color: '#444444' }}
                                        >
                                            <Check
                                                size={16}
                                                className="mr-2 flex-shrink-0 mt-0.5"
                                                style={{ color: '#3B82F6' }}
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Enroll Now Button */}
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="w-full bg-black text-white py-3 rounded-full font-semibold text-sm transition-all flex items-center justify-center space-x-2"
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
                                    <span>Enroll Now</span>
                                </button>
                            </NeumorphicServiceCard>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section at Bottom */}
                <div
                    className="rounded-3xl p-12 border text-center"
                    style={{
                        background: '#FAFAFA',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                        borderColor: '#EAEAEA'
                    }}
                >
                    {/* Heading */}
                    <h2
                        className="text-4xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Not sure which course is right for you?
                    </h2>

                    {/* Subtext */}
                    <p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        style={{ color: '#6C6C6C' }}
                    >
                        Talk to our team — we'll help you find the perfect learning path for your goals.
                    </p>

                    {/* Button */}
                    <button
                        onClick={() => navigate('/contact')}
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
                        <span>Get Personalized Guidance</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Courses;
