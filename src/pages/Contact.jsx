import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div
            className="pt-28 pb-20"
            style={{ background: 'linear-gradient(135deg, #f5f5f7 0%, #e8eaed 50%, #f5f5f7 100%)' }}
        >
            <div className="container">
                {/* Top Section - Hero */}
                <div className="text-center mb-16 pt-4">
                    <h1
                        className="text-5xl md:text-6xl font-bold mb-4"
                        style={{ color: '#000000' }}
                    >
                        Get In Touch
                    </h1>
                    <p
                        className="text-lg max-w-3xl mx-auto"
                        style={{ color: '#6B6B6B' }}
                    >
                        Have a project in mind or want to discuss your career goals? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Contact Information Card - Left (Soft Charcoal Gradient) */}
                    <div
                        className="rounded-3xl p-10"
                        style={{
                            background: 'linear-gradient(180deg, #2C2C2C 0%, #1F1F1F 50%, #141414 100%)',
                            boxShadow: `
                                inset 0 1px 1px rgba(255, 255, 255, 0.05),
                                0 20px 60px rgba(0, 0, 0, 0.15),
                                0 8px 24px rgba(0, 0, 0, 0.1)
                            `
                        }}
                    >
                        <h3
                            className="text-3xl font-bold mb-8"
                            style={{ color: '#FFFFFF' }}
                        >
                            Contact Information
                        </h3>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className="p-3 rounded-2xl flex-shrink-0"
                                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                >
                                    <Phone
                                        size={24}
                                        strokeWidth={1.5}
                                        style={{ color: '#3B82F6' }}
                                    />
                                </div>
                                <div>
                                    <p
                                        className="font-medium mb-1 text-sm"
                                        style={{ color: '#E6E6E6' }}
                                    >
                                        Phone
                                    </p>
                                    <p
                                        className="text-xl font-semibold"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        +91 86400 58346
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className="p-3 rounded-2xl flex-shrink-0"
                                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                >
                                    <Mail
                                        size={24}
                                        strokeWidth={1.5}
                                        style={{ color: '#3B82F6' }}
                                    />
                                </div>
                                <div>
                                    <p
                                        className="font-medium mb-1 text-sm"
                                        style={{ color: '#E6E6E6' }}
                                    >
                                        Email
                                    </p>
                                    <p
                                        className="text-xl font-semibold"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        anant@careercraftly.org
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className="p-3 rounded-2xl flex-shrink-0"
                                    style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                                >
                                    <Clock
                                        size={24}
                                        strokeWidth={1.5}
                                        style={{ color: '#3B82F6' }}
                                    />
                                </div>
                                <div>
                                    <p
                                        className="font-medium mb-1 text-sm"
                                        style={{ color: '#E6E6E6' }}
                                    >
                                        Working Hours
                                    </p>
                                    <p
                                        className="text-lg"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        Mon–Fri: 9:00 AM – 6:00 PM
                                    </p>
                                    <p
                                        className="text-lg"
                                        style={{ color: '#FFFFFF' }}
                                    >
                                        Sat: 10:00 AM – 4:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card - Right (Pure White) */}
                    <div
                        className="bg-white rounded-3xl p-10 border"
                        style={{
                            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                            borderColor: '#E5E5E5'
                        }}
                    >
                        <form className="space-y-6">
                            {/* Top Row - 2 Columns (Name + Phone) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: '#000000' }}
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border transition-all outline-none"
                                        style={{
                                            borderColor: '#E5E5E5',
                                            color: '#000000'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#3B82F6';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '#E5E5E5';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: '#000000' }}
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl border transition-all outline-none"
                                        style={{
                                            borderColor: '#E5E5E5',
                                            color: '#000000'
                                        }}
                                        onFocus={(e) => {
                                            e.target.style.borderColor = '#3B82F6';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                        }}
                                        onBlur={(e) => {
                                            e.target.style.borderColor = '#E5E5E5';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Email - Full Width */}
                            <div>
                                <label
                                    className="block text-sm font-semibold mb-2"
                                    style={{ color: '#000000' }}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border transition-all outline-none"
                                    style={{
                                        borderColor: '#E5E5E5',
                                        color: '#000000'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#3B82F6';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#E5E5E5';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                />
                            </div>

                            {/* Service Dropdown - Full Width */}
                            <div>
                                <label
                                    className="block text-sm font-semibold mb-2"
                                    style={{ color: '#000000' }}
                                >
                                    Service Interested In
                                </label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border transition-all outline-none"
                                    style={{
                                        borderColor: '#E5E5E5',
                                        color: '#000000'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#3B82F6';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#E5E5E5';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    <option>Select a service</option>
                                    <option>Technical Solutions</option>
                                    <option>Career Coaching</option>
                                    <option>AI Agents</option>
                                    <option>Digital Marketing</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            {/* Message - Full Width */}
                            <div>
                                <label
                                    className="block text-sm font-semibold mb-2"
                                    style={{ color: '#000000' }}
                                >
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-xl border transition-all outline-none resize-none"
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    style={{
                                        borderColor: '#E5E5E5',
                                        color: '#000000'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = '#3B82F6';
                                        e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = '#E5E5E5';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                ></textarea>
                            </div>

                            {/* Submit Button - Black Pill with Blue Glow Hover */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center space-x-2"
                                style={{
                                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.boxShadow = '0 8px 30px rgba(59, 130, 246, 0.4)';
                                    e.target.style.transform = 'translateY(-1px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.1)';
                                    e.target.style.transform = 'translateY(0)';
                                }}
                            >
                                <span>Send Message</span>
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section - Visit Our Office */}
                <div
                    className="bg-white rounded-3xl p-10 border"
                    style={{
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                        borderColor: '#E5E5E5'
                    }}
                >
                    <div className="text-center mb-6">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                            style={{ background: 'rgba(59, 130, 246, 0.1)' }}
                        >
                            <MapPin
                                size={32}
                                strokeWidth={1.5}
                                style={{ color: '#3B82F6' }}
                            />
                        </div>
                        <h3
                            className="text-2xl font-bold"
                            style={{ color: '#000000' }}
                        >
                            Visit Our Office
                        </h3>
                    </div>
                    <div
                        className="h-64 rounded-2xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #f5f5f7 0%, #e8eaed 100%)' }}
                    >
                        <div className="text-center">
                            <MapPin
                                size={48}
                                strokeWidth={1.5}
                                style={{ color: '#3B82F6' }}
                                className="mx-auto mb-3"
                            />
                            <p
                                className="text-lg font-medium"
                                style={{ color: '#6B6B6B' }}
                            >
                                Map Integration Placeholder
                            </p>
                            <p
                                className="text-sm mt-1"
                                style={{ color: '#9CA3AF' }}
                            >
                                Add your Google Maps embed here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
