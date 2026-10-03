import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-[#E8EAF0] pt-16 pb-12 text-[#5B6275] font-normal">
      <div className="saas-container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E8EAF0]">
          {/* Brand + City + Phone column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#EEF0FF] border border-[#DDE2FF] p-1 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/loadingpagelogo.png"
                    alt="Career Craftly Logo"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<span class="font-display font-bold text-xs text-[#5B5BF0]">CC</span>';
                    }}
                  />
                </div>
                <span className="font-display font-bold text-xl text-[#0F1222] tracking-tight">
                  Career Craftly LLP
                </span>
              </div>

              {/* Tagline */}
              <p className="text-sm text-[#5B6275] leading-relaxed max-w-sm mb-6 font-normal">
                Engineering autonomous systems, high-performance software, and compounding digital leverage for ambitious businesses across India and beyond.
              </p>

              {/* City + Phone + Contact Info */}
              <div className="space-y-2.5 text-xs text-[#5B6275] font-medium">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#5B5BF0]" />
                  <span>Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#5B5BF0]" />
                  <a
                    href="mailto:contact@careercraftly.org"
                    className="hover:text-[#5B5BF0] transition-colors"
                  >
                    contact@careercraftly.org
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#5B5BF0]" />
                  <span>+91 [PHONE NUMBER PLACEHOLDER]</span>
                </div>
              </div>
            </div>

            {/* Social Icons (X, Instagram, LinkedIn) */}
            <div className="flex items-center gap-3 mt-8">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Career Craftly on X"
                className="w-9 h-9 rounded-full bg-[#F7F8FB] border border-[#E8EAF0] flex items-center justify-center text-[#5B6275] hover:text-[#5B5BF0] hover:border-[#DDE2FF] hover:bg-white transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Career Craftly on Instagram"
                className="w-9 h-9 rounded-full bg-[#F7F8FB] border border-[#E8EAF0] flex items-center justify-center text-[#5B6275] hover:text-[#5B5BF0] hover:border-[#DDE2FF] hover:bg-white transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Connect with Career Craftly on LinkedIn"
                className="w-9 h-9 rounded-full bg-[#F7F8FB] border border-[#E8EAF0] flex items-center justify-center text-[#5B6275] hover:text-[#5B5BF0] hover:border-[#DDE2FF] hover:bg-white transition-all shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Three Link Columns (Services, Company, Legal) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: Services */}
            <div>
              <h4 className="font-display font-bold text-sm text-[#0F1222] tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#services" className="hover:text-[#5B5BF0] transition-colors">
                    AI Automation
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#5B5BF0] transition-colors">
                    Software Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#5B5BF0] transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#5B5BF0] transition-colors">
                    Brand &amp; Documents
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#5B5BF0] transition-colors">
                    Multi-Agent Systems
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div>
              <h4 className="font-display font-bold text-sm text-[#0F1222] tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/case-studies" className="hover:text-[#5B5BF0] transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <a href="#proof" className="hover:text-[#5B5BF0] transition-colors">
                    Proof &amp; Metrics
                  </a>
                </li>
                <li>
                  <a href="#how-we-work" className="hover:text-[#5B5BF0] transition-colors">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-[#5B5BF0] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#5B5BF0] transition-colors">
                    Book a call
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h4 className="font-display font-bold text-sm text-[#0F1222] tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-[#5B5BF0] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5B5BF0] transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5B5BF0] transition-colors">
                    Client Non-Disclosure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#5B5BF0] transition-colors">
                    Security Protocols
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5B6275] gap-4">
          <p>© {new Date().getFullYear()} Career Craftly LLP. Registered in India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>LLPIN: [REGISTRATION NUMBER PLACEHOLDER]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
