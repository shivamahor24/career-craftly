import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import NeumorphicSwitch from './ui/NeumorphicSwitch';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/services', label: 'Programs' },
    { path: '/events', label: 'Event Gallery' },
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
          className="mt-4 max-w-7xl w-full transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(240,242,248,0.92)' : 'rgba(235,238,246,0.80)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            borderRadius: '50px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)'
              : '0 4px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.55)',
          }}
        >
          <div className="flex items-center justify-between py-2 px-6">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2.5 group shrink-0">
              <img
                src="/assets/tranferentlogo.png"
                alt="CareerCraftly"
                className="w-auto h-12 object-contain"
              />
              <span className="font-bold text-lg whitespace-nowrap" style={{ color: '#0A0A0A', fontFamily: '"Plus Jakarta Sans", Inter, sans-serif' }}>
                CareerCraftly
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap flex items-center gap-2"
                    style={{
                      color: isActive ? '#0A0A0A' : '#5A5A72',
                      background: isActive ? 'rgba(0,0,0,0.06)' : 'transparent',
                    }}
                    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = '#0A0A0A'; e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; } }}
                    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = '#5A5A72'; e.currentTarget.style.background = 'transparent'; } }}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />}
                    {link.label}
                  </Link>
                );
              })}
              {/* Book a Call CTA */}
              <button
                onClick={() => navigate('/contact')}
                className="ml-2 flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-white transition-all duration-200"
                style={{ background: '#0A0A0A', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 20px rgba(59,130,246,0.35)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Phone size={13} />
                Book a Call
              </button>
              <div className="ml-2 flex items-center gap-4">
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
              className="fixed top-[90px] left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-50 lg:hidden rounded-2xl p-3"
              style={{ background: 'rgba(240,242,248,0.97)', backdropFilter: 'blur(20px)', boxShadow: '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)', border: '1px solid rgba(255,255,255,0.7)' }}
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 py-3 px-4 text-sm font-semibold rounded-xl transition-colors mb-1"
                    style={{ background: isActive ? '#0A0A0A' : 'transparent', color: isActive ? '#fff' : '#5A5A72' }}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />}
                    {link.label}
                  </Link>
                );
              })}
              <button onClick={() => { navigate('/contact'); setMobileMenuOpen(false); }}
                className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-bold text-white text-center"
                style={{ background: '#0A0A0A' }}>Book a Free Call</button>
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
