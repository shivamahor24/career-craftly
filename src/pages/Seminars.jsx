import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Bell } from 'lucide-react';
import GlassRadio from '../components/ui/GlassRadio';
import NeumorphicSwitch from '../components/ui/NeumorphicSwitch';
import NeumorphicServiceCard from '../components/ui/NeumorphicServiceCard';

const Seminars = () => {
    const [filter, setFilter] = useState('All');
    const [notifications, setNotifications] = useState(false);

    // Sample upcoming events data
    const upcomingEvents = [
        {
            id: 1,
            type: 'Webinar',
            title: 'AI-Powered Resume Building Workshop',
            date: 'December 10, 2025',
            time: '6:00 PM - 8:00 PM IST',
            mode: 'Online',
            description: 'Learn how to create ATS-friendly resumes using AI tools and get personalized feedback from industry experts.',
            registrationOpen: true
        },
        {
            id: 2,
            type: 'Seminar',
            title: 'Career Growth in Tech Industry 2025',
            date: 'December 15, 2025',
            time: '3:00 PM - 5:00 PM IST',
            mode: 'Offline',
            location: 'Mumbai Tech Hub',
            description: 'Discover the latest trends and opportunities in the tech industry with insights from leading professionals.',
            registrationOpen: true
        },
        {
            id: 3,
            type: 'Workshop',
            title: 'Full Stack Development Bootcamp',
            date: 'December 20, 2025',
            time: '10:00 AM - 4:00 PM IST',
            mode: 'Online',
            description: 'Hands-on workshop covering React, Node.js, and MongoDB. Build a complete web application from scratch.',
            registrationOpen: true
        },
        {
            id: 4,
            type: 'Webinar',
            title: 'Interview Preparation Masterclass',
            date: 'December 25, 2025',
            time: '5:00 PM - 7:00 PM IST',
            mode: 'Online',
            description: 'Master the art of technical and HR interviews with mock sessions and expert tips.',
            registrationOpen: true
        },
        {
            id: 5,
            type: 'Seminar',
            title: 'Digital Marketing Trends 2025',
            date: 'January 5, 2026',
            time: '2:00 PM - 4:00 PM IST',
            mode: 'Offline',
            location: 'Delhi Convention Center',
            description: 'Explore the future of digital marketing with AI, automation, and data-driven strategies.',
            registrationOpen: true
        },
        {
            id: 6,
            type: 'Workshop',
            title: 'Data Science & Machine Learning',
            date: 'January 10, 2026',
            time: '11:00 AM - 5:00 PM IST',
            mode: 'Online',
            description: 'Comprehensive workshop on Python, data analysis, and building ML models for real-world applications.',
            registrationOpen: true
        }
    ];

    const filteredEvents = filter === 'All'
        ? upcomingEvents
        : upcomingEvents.filter(event => event.type === filter);

    return (
        <div
            className="pt-28 pb-20 min-h-screen"
            style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
        >
            <div className="container max-w-6xl">
                {/* Hero Banner */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Upcoming Events
                    </h1>
                    <p className="text-lg mb-8" style={{ color: '#6C6C6C' }}>
                        Stay updated with upcoming events, training & skill programs
                    </p>

                    {/* Filter Section */}
                    <GlassRadio
                        options={['All', 'Seminar', 'Webinar', 'Workshop']}
                        defaultValue="All"
                        onChange={setFilter}
                    />
                </div>

                {/* Announcement Strip */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 p-6 rounded-3xl text-center"
                    style={{
                        background: '#e8e8e8',
                        boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                        border: '2px solid #d0d0d0'
                    }}
                >
                    <div className="flex items-center justify-center gap-3">
                        <Bell size={20} style={{ color: '#3B82F6' }} />
                        <p className="text-base font-semibold" style={{ color: '#111111' }}>
                            🔔 AI Resume Workshop on 10 Dec 2025 — Registrations Open
                        </p>
                    </div>
                </motion.div>



                {/* Upcoming Event Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <NeumorphicServiceCard>
                                {/* Event Type Badge */}
                                <div className="inline-block mb-4 px-4 py-1 rounded-full text-xs font-semibold"
                                    style={{
                                        background: '#e8e8e8',
                                        color: '#3B82F6',
                                        boxShadow: 'inset 2px 2px 4px #bcbcbc, inset -2px -2px 4px #ffffff'
                                    }}
                                >
                                    {event.type}
                                </div>

                                {/* Event Title */}
                                <h3 className="text-2xl font-bold mb-4" style={{ color: '#111111' }}>
                                    {event.title}
                                </h3>

                                {/* Event Details */}
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                                        <Calendar size={18} />
                                        <span className="text-sm">{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                                        <Clock size={18} />
                                        <span className="text-sm">{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-3" style={{ color: '#4B5563' }}>
                                        <MapPin size={18} />
                                        <span className="text-sm">
                                            {event.mode} {event.location && `- ${event.location}`}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm mb-6 leading-relaxed" style={{ color: '#4B5563' }}>
                                    {event.description}
                                </p>

                                {/* Register Button */}
                                <button
                                    style={{
                                        backgroundColor: '#e0e0e0',
                                        borderRadius: '50px',
                                        boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                                        color: '#3B82F6',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        padding: '12px 32px',
                                        transition: 'all 0.2s ease-in-out',
                                        border: '2px solid rgb(206, 206, 206)',
                                        fontFamily: 'Inter, sans-serif',
                                        width: '100%',
                                        marginTop: 'auto'
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
                                    {event.registrationOpen ? 'Register Now' : 'Registration Closed'}
                                </button>
                            </NeumorphicServiceCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Seminars;
