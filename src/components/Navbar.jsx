import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import NeumorphicSwitch from './ui/NeumorphicSwitch';
import NeumorphicButton from './ui/NeumorphicButton';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRedirectPopup, setShowRedirectPopup] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Programs' },
    { path: '/courses', label: 'Courses' },
    { path: '/events', label: 'Event Gallery' },
    { path: '/seminars', label: 'Upcoming Events' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Floating Glassmorphism Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mt-[18px] max-w-7xl w-full transition-all duration-300"
          style={{
            background: 'rgb(223, 225, 235)',
            borderRadius: '50px',
            boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
          }}
        >
          <div className="flex items-center justify-between py-2 px-6">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group shrink-0">
              <img
                src="/asssets/tranferentlogo.png"
                alt="CareerCraftly"
                className="w-19 h-14 object-contain"
              />
              <span className="font-semibold text-lg text-gray-900 whitespace-nowrap">
                CareerCraftly
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap"
                  style={
                    location.pathname === link.path
                      ? {
                        backgroundColor: '#e0e0e0',
                        boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                        color: '#111111',
                        border: '2px solid rgb(206, 206, 206)'
                      }
                      : {
                        backgroundColor: 'transparent',
                        color: '#606060',
                        border: '2px solid transparent'
                      }
                  }
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.backgroundColor = 'rgba(224, 224, 224, 0.75)';
                      e.target.style.borderColor = 'rgb(206, 206, 206)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.borderColor = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="ml-4 flex items-center gap-4">
                {/* Flux Mind Studios Info Toggle */}
                <div
                  onMouseEnter={() => setShowRedirectPopup(true)}
                  onMouseLeave={() => setShowRedirectPopup(false)}
                  className="cursor-pointer"
                >
                  <NeumorphicSwitch
                    onChange={(checked) => {
                      if (checked) {
                        setTimeout(() => {
                          window.open('https://www.fluxmindstudios.com/', '_blank');
                        }, 1000)
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-black/5 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 lg:hidden bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 px-4 text-sm font-medium rounded-xl transition-colors ${location.pathname === link.path
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Flux Mind Studios Info Popup */}
      <AnimatePresence>
        {showRedirectPopup && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 right-8 z-[100] w-80"
            style={{
              background: 'rgb(223, 225, 235)',
              borderRadius: '24px',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 30px, rgba(0, 0, 0, 0.05) 0px 5px 15px, inset rgba(255, 255, 255, 0.5) 0px 1px 0px',
              padding: '24px',
            }}
          >
            <div className="relative">
              <div
                className="absolute -top-2 left-0 w-12 h-1 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                }}
              />

              <h3
                className="text-lg font-bold mb-3"
                style={{ color: '#111111' }}
              >
                Flux Mind Studios
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: '#606060' }}
              >
                Our parent company for client projects, digital services, and premium solutions.
              </p>

              <a
                href="https://www.fluxmindstudios.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: '#e0e0e0',
                  boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                  color: '#111111',
                  border: '2px solid rgb(206, 206, 206)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Visit Website →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
