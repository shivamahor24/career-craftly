import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is your typical turnaround time for an AI or software build?',
      a: 'Standard AI automation workflows, CRM integrations, and MVP software platforms are typically designed, built, and deployed within 2 to 4 weeks. For more complex custom SaaS solutions or enterprise multi-agent platforms, our sprints typically span 6 to 10 weeks with working milestone deliverables shipped every 14 days.',
    },
    {
      q: 'How much time commitment is required from our internal team?',
      a: 'We deliberately operate with high agency and minimal friction. We only require a 60-minute strategic discovery call at kickoff, followed by a 30-minute weekly asynchronous or live progress review. Everything else—from technical architecture to API integration and bug testing—is fully handled by Career Craftly.',
    },
    {
      q: 'Which platforms, AI models, and technology stacks do you use?',
      a: 'We build on modern, battle-tested foundations: React, Next.js, Node.js, Python, TypeScript, PostgreSQL, and Supabase for core applications. For automation and AI, we integrate leading state-of-the-art models (Anthropic Claude, Google Gemini, OpenAI GPT-4o, DeepSeek) via customized agent orchestrations, n8n, Make, and enterprise vector databases.',
    },
    {
      q: 'What makes Career Craftly LLP different from traditional agencies?',
      a: 'Traditional digital agencies bill hourly, outsource junior engineers, and deliver bloated, unmaintained codebases. Career Craftly operates as an embedded high-velocity engineering partner. We deliver production-grade systems with direct senior architect oversight, transparent weekly milestones, and a relentless focus on measurable operational ROI.',
    },
    {
      q: 'How does your engagement and pricing model work?',
      a: 'We operate primarily on transparent, fixed-scope milestone deliverables for standalone software and AI projects, eliminating budget surprises. For ongoing scaling and cross-functional continuous builds, we offer dedicated monthly engineering sprints that can be paused or adjusted with 30 days notice.',
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="saas-section bg-white relative">
      <div className="saas-container max-w-[900px] relative z-10">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="saas-badge mb-3">
            Frequently Asked Questions
          </span>
          <h2 className="headline-section text-[#0F1222] mb-4">
            Clear Answers. We Build Yours.
          </h2>
          <p className="text-[#5B6275] text-base md:text-lg font-normal max-w-xl mx-auto">
            Everything you need to know about partnering with Career Craftly LLP.
          </p>
        </div>

        {/* 5 Questions Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-[20px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#DDE2FF] shadow-[0_8px_30px_rgba(91,91,240,0.08)]'
                    : 'bg-white border-[#E8EAF0] hover:border-[#DDE2FF]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 px-6 md:px-8 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5BF0]"
                  aria-expanded={isOpen}
                >
                  {/* Question in clean sans font */}
                  <span className="font-display font-bold text-lg md:text-xl text-[#0F1222] pr-2">
                    {faq.q}
                  </span>

                  {/* Accent "+" that rotates 45deg to "x" when open */}
                  <div
                    className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#5B5BF0] text-white border-[#5B5BF0] rotate-45'
                        : 'bg-[#EEF0FF] text-[#5B5BF0] border-[#DDE2FF]'
                    }`}
                  >
                    <Plus size={18} className="stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Accordion Body */}
                <div
                  className={`transition-all duration-300 ease-in-out px-6 md:px-8 overflow-hidden ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-[#5B6275] text-base leading-relaxed font-normal pt-2 border-t border-[#E8EAF0]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
