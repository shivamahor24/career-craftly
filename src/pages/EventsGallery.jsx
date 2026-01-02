import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GlassRadio from '../components/ui/GlassRadio';
import NeumorphicServiceCard from '../components/ui/NeumorphicServiceCard';

const EventsGallery = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState('All');
    const [selectedMedia, setSelectedMedia] = useState(null);

    // Sample event media data
    const eventMedia = [
        { id: 1, type: 'photo', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800', title: 'Tech Workshop 2024', date: 'Nov 2024' },
        { id: 2, type: 'photo', url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800', title: 'Career Fair Event', date: 'Oct 2024' },
        { id: 3, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800', title: 'AI Seminar Highlights', date: 'Sep 2024' },
        { id: 4, type: 'photo', url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800', title: 'Networking Session', date: 'Aug 2024' },
        { id: 5, type: 'photo', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800', title: 'Resume Workshop', date: 'Jul 2024' },
        { id: 6, type: 'video', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnail: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800', title: 'Webinar Recording', date: 'Jun 2024' },
    ];

    const filteredMedia = filter === 'All'
        ? eventMedia
        : eventMedia.filter(item => filter === 'Photos' ? item.type === 'photo' : item.type === 'video');

    return (
        <div
            className="pt-28 pb-20 min-h-screen"
            style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
        >
            <div className="container">
                {/* Hero Banner */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Event Gallery
                    </h1>
                    <p className="text-lg mb-8" style={{ color: '#6C6C6C' }}>
                        Photos & videos from our past CareerCraftly events
                    </p>

                    {/* Category Filter */}
                    <GlassRadio
                        options={['All', 'Photos', 'Videos']}
                        defaultValue="All"
                        onChange={setFilter}
                    />
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMedia.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="cursor-pointer"
                            onClick={() => setSelectedMedia(item)}
                        >
                            <NeumorphicServiceCard>
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src={item.type === 'photo' ? item.url : item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {item.type === 'video' && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <div
                                                className="w-16 h-16 rounded-full flex items-center justify-center"
                                                style={{
                                                    background: '#e0e0e0',
                                                    boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff'
                                                }}
                                            >
                                                <Play size={24} style={{ color: '#3B82F6' }} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-2" style={{ color: '#111111' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm" style={{ color: '#6C6C6C' }}>
                                        {item.date}
                                    </p>
                                </div>
                            </NeumorphicServiceCard>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="fixed bottom-24 right-8 w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                        background: '#e8e8e8',
                        border: '3px solid #d0d0d0',
                        boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff, inset 2px 2px 4px rgba(255, 255, 255, 0.8), inset -2px -2px 4px rgba(0, 0, 0, 0.1)',
                        zIndex: 999
                    }}
                >
                    <ArrowLeft size={24} style={{ color: '#3B82F6' }} />
                </button>
            </div>

            {/* Fullscreen Media Viewer */}
            <AnimatePresence>
                {selectedMedia && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-6xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {selectedMedia.type === 'photo' ? (
                                <img
                                    src={selectedMedia.url}
                                    alt={selectedMedia.title}
                                    className="w-full h-auto rounded-2xl"
                                />
                            ) : (
                                <div className="aspect-video">
                                    <iframe
                                        src={selectedMedia.url}
                                        className="w-full h-full rounded-2xl"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedMedia(null)}
                                className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center"
                                style={{
                                    background: '#e8e8e8',
                                    border: '3px solid #d0d0d0',
                                    boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff'
                                }}
                            >
                                <X size={20} style={{ color: '#111111' }} />
                            </button>

                            <div className="mt-4 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {selectedMedia.title}
                                </h3>
                                <p className="text-gray-300">
                                    {selectedMedia.date}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventsGallery;
