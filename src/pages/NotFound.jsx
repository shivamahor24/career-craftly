import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{ background: 'linear-gradient(135deg, #F5F6F8 0%, #ECEFF2 50%, #F5F6F8 100%)' }}
        >
            <div className="text-center max-w-lg">
                {/* 404 Number */}
                <h1
                    className="text-9xl font-bold mb-4"
                    style={{ color: '#E5E7EB' }}
                >
                    404
                </h1>

                {/* Heading */}
                <h2
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: '#111111' }}
                >
                    Page Not Found
                </h2>

                {/* Description */}
                <p
                    className="text-lg mb-10"
                    style={{ color: '#6C6C6C' }}
                >
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center space-x-2"
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
                        <Home size={20} />
                        <span>Go Home</span>
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center space-x-2"
                        style={{
                            backgroundColor: '#e0e0e0',
                            boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                            color: '#111111',
                            border: '2px solid rgb(206, 206, 206)',
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
                        <span>Contact Us</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
