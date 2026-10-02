import React, { useEffect } from 'react';
import Navbar from '../components/home/Navbar';
import HeroSection from '../components/home/HeroSection';
import LogoStrip from '../components/home/LogoStrip';
import ServicesSection from '../components/home/ServicesSection';
import NumbersBand from '../components/home/NumbersBand';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import HowWeWorkSection from '../components/home/HowWeWorkSection';
import FaqSection from '../components/home/FaqSection';
import FinalCtaSection from '../components/home/FinalCtaSection';
import FooterSection from '../components/home/FooterSection';

/**
 * Rebuilt Homepage for Career Craftly LLP
 * Modern White Premium AI SaaS Theme (Dribbble AI Project Management Assistant style):
 * - Clean white background (#FFFFFF) & soft off-white (#F7F8FB)
 * - Near-black headings (#0F1222) and slate body copy (#5B6275)
 * - Deep indigo/violet accent (#5B5BF0) and soft tint (#EEF0FF)
 * - Plus Jakarta Sans & Inter typography
 * - Blueprint order (Sections 1 to 10)
 */
const Home = () => {
  useEffect(() => {
    // Set document title and meta description dynamically
    document.title = 'Career Craftly LLP — AI Automation & Software Engineering';
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F1222] selection:bg-[#5B5BF0] selection:text-white">
      {/* 1. Sticky nav with blurred background and 'Book a call' button */}
      <Navbar />

      {/* 2. Hero with one strong headline, one supporting sentence, two buttons */}
      <HeroSection />

      {/* 3. Client logo strip */}
      <LogoStrip />

      {/* 4. Services section (4 cards) */}
      <ServicesSection />

      {/* 5. Numbers band (animated counters with placeholders) */}
      <NumbersBand />

      {/* 6. Case studies (2 featured stories with stat rows) */}
      <CaseStudiesSection />

      {/* 7. How we work (4 steps framework + owned media block) */}
      <HowWeWorkSection />

      {/* 8. FAQ accordion (5 questions with rotating amber +/x) */}
      <FaqSection />

      {/* 9. Final CTA section */}
      <FinalCtaSection />

      {/* 10. Footer with brand, India, services, company, legal links & social icons */}
      <FooterSection />
    </div>
  );
};

export default Home;
