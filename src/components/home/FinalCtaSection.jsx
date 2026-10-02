import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCtaSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[#F7F8FB] border-t border-[#E8EAF0] overflow-hidden"
    >
      <div className="saas-container relative z-10 text-center max-w-[800px] mx-auto">
        {/* Subtle pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#5B5BF0] bg-[#EEF0FF] border border-[#DDE2FF] mb-6">
          <Sparkles size={13} className="text-[#5B5BF0]" />
          Partnership Intake · Q4 / 2026
        </div>

        {/* Headline: "Work With Us" */}
        <h2 className="headline-section text-[#0F1222] mb-4">
          Work With Us
        </h2>

        {/* One sentence: "We might have a waitlist." */}
        <p className="text-[#5B6275] text-base md:text-xl font-normal leading-relaxed mb-10 max-w-lg mx-auto">
          We accept a strictly limited number of partner engineering builds each quarter. We might have a waitlist.
        </p>

        {/* One button: Primary "Book a call" */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@careercraftly.org?subject=Project%20Discovery%20Inquiry%20-%20Career%20Craftly"
            className="btn-saas-primary text-base py-3.5 px-8 group"
          >
            <span>Book a call</span>
            <ArrowRight
              size={18}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <p className="text-xs text-[#5B6275] mt-6 font-medium">
          Direct response within 24 hours · Non-disclosure agreements honored
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
