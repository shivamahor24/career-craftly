import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/courses', label: 'Courses' },
    { path: '/blog', label: 'Blogs' },
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
          className="mt-[18px] max-w-5xl w-full transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '50px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.12)'
              : '0 4px 24px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
          }}
        >
          <div className="flex items-center justify-between py-2 px-5">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/asssets/tranferentlogo.png"
                alt="CareerCraftly"
                className="w-19 h-14 object-contain"
              />
              <span className="font-semibold text-lg text-gray-900">
                CareerCraftly
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                    ? 'bg-black text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
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
    </>
  );
};

export default Navbar;
