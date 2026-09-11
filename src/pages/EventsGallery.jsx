import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { X, ArrowRight, Camera, ZoomIn, Sparkles } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.52, delay, ease: 'easeOut' }}
            className={className}>
            {children}
        </motion.div>
    );
};

const eventMedia = [
    { id: 1, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80', title: 'Tech Workshop 2024', date: 'Nov 2024', category: 'Workshop' },
    { id: 2, url: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=900&q=80', title: 'Career Fair Event', date: 'Oct 2024', category: 'Career' },
    { id: 3, url: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=900&q=80', title: 'Workshop Highlights', date: 'Sep 2024', category: 'Workshop' },
    { id: 4, url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=900&q=80', title: 'Networking Session', date: 'Aug 2024', category: 'Networking' },
    { id: 5, url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=80', title: 'Resume Workshop', date: 'Jul 2024', category: 'Workshop' },
    { id: 6, url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&q=80', title: 'Seminar Recap', date: 'Jun 2024', category: 'Networking' },
];

const categories = ['All', 'Workshop', 'Career', 'Networking'];

const EventsGallery = () => {
    const [filter, setFilter] = useState('All');
    const [selected, setSelected] = useState(null);

    const filtered = filter === 'All' ? eventMedia : eventMedia.filter(e => e.category === filter);

    return (
        <div className="pt-32 pb-24 min-h-screen" style={{ background: 'linear-gradient(160deg, #F7F8FC 0%, #ECEFF4 50%, #F7F8FC 100%)' }}>
            <div className="container">

                {/* ── Header ── */}
                <FadeIn>
                    <div className="text-center mb-14">
                        <div className="badge mx-auto mb-4"><Camera size={11} /> Moments</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#0A0A0A' }}>Event Gallery</h1>
                        <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: '#5A5A72' }}>
                            A glimpse into the energy, learning, and connections that define every CareerCraftly event.
                        </p>

                        {/* Filter tabs */}
                        <div className="inline-flex items-center gap-1 p-1.5 rounded-full" style={{ background: '#ECEFF4', boxShadow: 'inset 4px 4px 10px #d0d4de, inset -4px -4px 10px #ffffff' }}>
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setFilter(cat)}
                                    className="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                                    style={filter === cat
                                        ? { background: '#0A0A0A', color: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }
                                        : { color: '#5A5A72' }}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* ── Masonry-style Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                className="group cursor-pointer"
                                onClick={() => setSelected(item)}
                            >
                                <div className="rounded-3xl overflow-hidden relative" style={{ background: '#ECEFF4', boxShadow: '6px 6px 16px #d0d4de, -6px -6px 16px #ffffff' }}>
                                    {/* Image */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <img src={item.url} alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ background: 'rgba(0,0,0,0.35)' }}>
                                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                                                <ZoomIn size={22} color="white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card info */}
                                    <div className="p-5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-bold text-base mb-0.5" style={{ color: '#0A0A0A' }}>{item.title}</h3>
                                                <p className="text-xs" style={{ color: '#9CA3AF' }}>{item.date}</p>
                                            </div>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: 'rgba(59,130,246,0.08)', color: '#3B82F6' }}>
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-lg" style={{ color: '#9CA3AF' }}>No events in this category yet.</p>
                    </div>
                )}
            </div>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
                        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)' }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.88, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
                            className="relative max-w-5xl w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <img src={selected.url} alt={selected.title}
                                className="w-full h-auto rounded-2xl" style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }} />

                            {/* Caption */}
                            <div className="mt-5 flex items-center justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                                    <p className="text-sm" style={{ color: '#9CA3AF' }}>{selected.date} · {selected.category}</p>
                                </div>
                                <button onClick={() => setSelected(null)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-white/20"
                                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                                    <X size={18} color="white" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventsGallery;
