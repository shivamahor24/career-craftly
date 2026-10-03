import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const isCaseStudiesActive = location.pathname.startsWith('/case-studies');

  const navLinks = [
    { label: 'Services', href: '/#services', isRoute: false },
    {
      label: 'Solutions',
      href: '/#services',
      isRoute: false,
      hasDropdown: true,
      subItems: [
        { label: 'AI Automation', href: '/#services' },
        { label: 'Software Engineering', href: '/#services' },
        { label: 'SaaS Development', href: '/#services' },
        { label: 'AI & Machine Learning', href: '/#services' },
        { label: 'Web & Mobile App Development', href: '/#services' },
        { label: 'Cloud & DevOps Solutions', href: '/#services' },
      ],
    },
    { label: 'Case Studies', href: '/case-studies', isRoute: true },
    { label: 'How We Work', href: '/#how-we-work', isRoute: false },
    { label: 'FAQ', href: '/#faq', isRoute: false },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="w-full max-w-[1100px] pointer-events-auto">
        <nav
          className="relative flex items-center justify-between px-6 md:px-8 h-[64px] bg-white/95 backdrop-blur-md rounded-full border border-[#E8EAF0] shadow-[0_8px_30px_rgba(20,24,60,0.06)] transition-all"
          role="navigation"
          aria-label="Main Navigation"
        >
          {/* Left: Brand Logo & Title */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] rounded-full shrink-0"
            aria-label="Career Craftly Home"
          >
            <div className="w-8 h-8 rounded-full bg-[#EEF0FF] border border-[#DDE2FF] p-0.5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <img
                src="/assets/loadingpagelogo.png"
                alt="Career Craftly Logo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML =
                    '<span class="font-bold text-xs text-[#5B5BF0]">CC</span>';
                }}
              />
            </div>
            <span className="font-display font-bold text-[17px] tracking-tight text-[#0F1222] group-hover:text-[#5B5BF0] transition-colors">
              Career Craftly
            </span>
          </Link>

          {/* Center: Navigation Links (15px, #3A4054) */}
          <div className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#3A4054]">
            {navLinks.map((link) => {
              const isActive = link.href === '/case-studies' && isCaseStudiesActive;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-1 hover:text-[#0F1222] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] rounded-md"
                      aria-expanded={solutionsOpen}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          solutionsOpen ? 'rotate-180 text-[#0F1222]' : ''
                        }`}
                      />
                    </a>

                    {/* Solutions dropdown */}
                    {solutionsOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-50">
                        <div className="bg-white rounded-2xl border border-[#E8EAF0] shadow-xl p-2 flex flex-col gap-1">
                          {link.subItems.map((sub) => (
                            <a
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setSolutionsOpen(false)}
                              className="px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#5B6275] hover:text-[#0F1222] hover:bg-[#F7F8FB] transition-colors"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.isRoute) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`relative py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] rounded-md ${
                      isActive
                        ? 'text-[#5B5BF0] font-semibold'
                        : 'hover:text-[#0F1222]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#5B5BF0] rounded-full" />
                    )}
                  </Link>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#0F1222] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] rounded-md"
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right: Black Pill Button "Book a call" (44px height) */}
          <div className="hidden lg:flex items-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center h-[44px] px-6 bg-[#0F1222] text-white hover:bg-[#5B5BF0] text-[15px] font-semibold rounded-full transition-all duration-200 shadow-sm hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] focus-visible:ring-offset-2"
            >
              Book a call
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center h-[38px] bg-[#0F1222] text-white text-xs font-semibold px-4 rounded-full hover:bg-[#5B5BF0] transition-colors"
            >
              Book a call
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5B6275] hover:text-[#0F1222] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0] rounded-full"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-5 bg-white rounded-3xl border border-[#E8EAF0] shadow-2xl transition-all">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = link.href === '/case-studies' && isCaseStudiesActive;

                if (link.isRoute) {
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-semibold py-2 border-b border-[#E8EAF0]/60 flex items-center justify-between ${
                        isActive ? 'text-[#5B5BF0]' : 'text-[#5B6275] hover:text-[#0F1222]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} className="text-[#5B6275]/50" />
                    </Link>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-[#5B6275] hover:text-[#0F1222] py-2 border-b border-[#E8EAF0]/60 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={15} className="text-[#5B6275]/50" />
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-[#0F1222] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5B5BF0] transition-colors"
                >
                  Book a call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
