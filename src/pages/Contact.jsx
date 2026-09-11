import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Phone, Mail, MapPin, Clock, ArrowRight, Sparkles,
    CheckCircle, MessageSquare, Calendar, Shield
} from 'lucide-react';

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

const InputField = ({ label, children }) => (
    <div>
        <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0A0A0A' }}>{label}</label>
        {children}
    </div>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
    const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, error: null });
        try {
            const res = await fetch('https://formsubmit.co/ajax/anant@careercraftly.org', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ ...formData, _subject: `New Contact from ${formData.name} - Career Craftly` })
            });
            if (res.ok) {
                setStatus({ submitting: false, submitted: true, error: null });
                setFormData({ name: '', phone: '', email: '', service: '', message: '' });
                setTimeout(() => setStatus(p => ({ ...p, submitted: false })), 5000);
            } else {
                setStatus({ submitting: false, submitted: false, error: 'Something went wrong. Please try again.' });
            }
        } catch {
            setStatus({ submitting: false, submitted: false, error: 'Network error. Please check your connection.' });
        }
    };

    const inputStyle = {
        width: '100%', background: '#fff', border: '1.5px solid #E8E8EE',
        borderRadius: '12px', padding: '12px 16px', fontSize: '15px',
        fontFamily: 'Inter, sans-serif', color: '#0A0A0A',
        outline: 'none', transition: 'all 0.2s', appearance: 'none'
    };
    const onFocus = e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.10)'; e.target.style.background = '#FAFBFF'; };
    const onBlur = e => { e.target.style.borderColor = '#E8E8EE'; e.target.style.boxShadow = 'none'; e.target.style.background = '#fff'; };

    const contactItems = [
        { icon: Phone, label: 'Phone', value: '+91 86400 58346', href: 'tel:+918640058346' },
        { icon: Mail, label: 'Email', value: 'anant@careercraftly.org', href: 'mailto:anant@careercraftly.org' },
        { icon: Calendar, label: 'Book a Call', value: 'Schedule via Calendly', href: 'https://calendly.com/officialanant17/30min' },
        { icon: Clock, label: 'Working Hours', value: 'Mon–Fri 9AM–6PM · Sat 10AM–4PM', href: null },
        { icon: MapPin, label: 'Location', value: 'India (Remote & In-Person)', href: null },
    ];

    const trustPoints = [
        'Free 30-min discovery call',
        'Response within 24 hours',
        'No commitment required',
        'Global client support',
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen" style={{ background: 'linear-gradient(160deg, #F7F8FC 0%, #ECEFF4 50%, #F7F8FC 100%)' }}>
            <div className="container">

                {/* ── Header ── */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <div className="badge mx-auto mb-4"><Sparkles size={11} /> Get In Touch</div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#0A0A0A' }}>
                            Let's Build Something <span className="text-gradient">Remarkable</span>
                        </h1>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5A5A72' }}>
                            Whether you have a project, a career question, or just want to explore what's possible — we're ready to listen.
                        </p>
                    </div>
                </FadeIn>

                {/* ── Trust strip ── */}
                <FadeIn delay={0.08}>
                    <div className="flex flex-wrap justify-center gap-5 mb-16">
                        {trustPoints.map((tp, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: '#374151' }}>
                                <CheckCircle size={16} style={{ color: '#3B82F6' }} />
                                {tp}
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* ── Main grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">

                    {/* Left — Info panel */}
                    <FadeIn delay={0.1} className="lg:col-span-2">
                        <div className="rounded-3xl p-8 h-full flex flex-col" style={{ background: '#ECEFF4', boxShadow: '8px 8px 20px #d0d4de, -8px -8px 20px #ffffff' }}>
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold mb-2" style={{ color: '#0A0A0A' }}>Contact Information</h2>
                                <p className="text-sm" style={{ color: '#5A5A72' }}>Reach out through any of the channels below or fill in the form.</p>
                            </div>

                            <div className="space-y-6 flex-grow">
                                {contactItems.map(({ icon: Icon, label, value, href }, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59,130,246,0.10)' }}>
                                            <Icon size={20} strokeWidth={1.6} style={{ color: '#3B82F6' }} />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-widest mb-0.5" style={{ color: '#9CA3AF' }}>{label}</p>
                                            {href ? (
                                                <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined} className="text-base font-semibold hover:underline transition-colors" style={{ color: '#0A0A0A' }}
                                                    onMouseEnter={e => e.target.style.color = '#3B82F6'}
                                                    onMouseLeave={e => e.target.style.color = '#0A0A0A'}>
                                                    {value}
                                                </a>
                                            ) : (
                                                <p className="text-base font-semibold" style={{ color: '#0A0A0A' }}>{value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom accent */}
                            <div className="mt-10 p-5 rounded-2xl" style={{ background: 'rgba(59,130,246,0.07)', border: '1px solid rgba(59,130,246,0.12)' }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <Calendar size={18} style={{ color: '#3B82F6' }} />
                                    <p className="font-bold text-sm" style={{ color: '#0A0A0A' }}>Book a Free Discovery Call</p>
                                </div>
                                <p className="text-xs mb-4" style={{ color: '#5A5A72' }}>30 minutes, no commitment. Let's explore what's possible together.</p>
                                <a href="https://calendly.com/officialanant17/30min" target="_blank" rel="noopener noreferrer" className="btn-primary text-xs px-5 py-2.5" style={{ display: 'inline-flex', fontSize: '13px', padding: '10px 20px' }}>
                                    Schedule Now <ArrowRight size={13} />
                                </a>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right — Contact form */}
                    <FadeIn delay={0.15} className="lg:col-span-3">
                        <div className="rounded-3xl p-8" style={{ background: '#ECEFF4', boxShadow: '8px 8px 20px #d0d4de, -8px -8px 20px #ffffff' }}>
                            <div className="flex items-center gap-3 mb-7">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(59,130,246,0.10)' }}>
                                    <MessageSquare size={18} style={{ color: '#3B82F6' }} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold" style={{ color: '#0A0A0A' }}>Send a Message</h2>
                                    <p className="text-xs" style={{ color: '#9CA3AF' }}>We'll get back to you within 24 hours</p>
                                </div>
                            </div>

                            {status.submitted && (
                                <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3.5 rounded-xl text-sm mb-5">
                                    <CheckCircle size={18} />
                                    <span className="font-medium">Message sent! We'll be in touch shortly.</span>
                                </div>
                            )}
                            {status.error && (
                                <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3.5 rounded-xl text-sm mb-5">
                                    <Shield size={18} />
                                    <span>{status.error}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <InputField label="Full Name *">
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange}
                                            placeholder="John Doe" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                                    </InputField>
                                    <InputField label="Phone Number *">
                                        <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                                            placeholder="+91 98765 43210" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                                    </InputField>
                                </div>

                                <InputField label="Email Address *">
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                        placeholder="you@company.com" style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
                                </InputField>

                                <InputField label="What can we help you with?">
                                    <select name="service" value={formData.service} onChange={handleChange}
                                        style={{ ...inputStyle, cursor: 'pointer' }} onFocus={onFocus} onBlur={onBlur}>
                                        <option value="">Select a service...</option>
                                        <option value="Website Development">Website Development</option>
                                        <option value="App Development">App Development</option>
                                        <option value="AI Agents">AI Agents</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Career Coaching">Career Coaching</option>
                                        <option value="Resume Optimization">Resume Optimization</option>
                                        <option value="Skill Development">Skill Development</option>
                                        <option value="Interview Preparation">Interview Preparation</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </InputField>

                                <InputField label="Tell us about your project or goal *">
                                    <textarea name="message" required value={formData.message} onChange={handleChange}
                                        rows={4} placeholder="Give us some context — the more detail, the better we can help..."
                                        style={{ ...inputStyle, resize: 'none' }} onFocus={onFocus} onBlur={onBlur} />
                                </InputField>

                                <button type="submit" disabled={status.submitting}
                                    className="btn-primary w-full justify-center"
                                    style={{ opacity: status.submitting ? 0.7 : 1, cursor: status.submitting ? 'not-allowed' : 'pointer' }}>
                                    {status.submitting ? 'Sending...' : 'Send Message'}
                                    {!status.submitting && <ArrowRight size={17} />}
                                </button>

                                <p className="text-xs text-center" style={{ color: '#9CA3AF' }}>
                                    🔒 Your information is secure and never shared with third parties.
                                </p>
                            </form>
                        </div>
                    </FadeIn>
                </div>

                {/* ── Bottom feature strip ── */}
                <FadeIn delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { icon: MessageSquare, title: 'Fast Response', desc: 'We reply to every enquiry within 24 business hours — often much sooner.' },
                            { icon: Shield, title: '100% Confidential', desc: 'All conversations are strictly confidential. Your privacy is our priority.' },
                            { icon: Calendar, title: 'Flexible Scheduling', desc: 'We work across time zones and adapt to your schedule for meetings.' },
                        ].map((item, i) => (
                            <div key={i} className="rounded-2xl p-6 flex gap-4 items-start" style={{ background: '#ECEFF4', boxShadow: '5px 5px 14px #d0d4de, -5px -5px 14px #ffffff' }}>
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(59,130,246,0.10)' }}>
                                    <item.icon size={18} style={{ color: '#3B82F6' }} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1" style={{ color: '#0A0A0A' }}>{item.title}</h4>
                                    <p className="text-xs leading-relaxed" style={{ color: '#5A5A72' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Contact;
