import React from 'react';

const LogoStrip = () => {
  // 10 clearly marked client logo placeholders as specified in instructions
  const logos = [
    { id: 1, name: '[CLIENT LOGO 01]' },
    { id: 2, name: '[CLIENT LOGO 02]' },
    { id: 3, name: '[CLIENT LOGO 03]' },
    { id: 4, name: '[CLIENT LOGO 04]' },
    { id: 5, name: '[CLIENT LOGO 05]' },
    { id: 6, name: '[CLIENT LOGO 06]' },
    { id: 7, name: '[CLIENT LOGO 07]' },
    { id: 8, name: '[CLIENT LOGO 08]' },
    { id: 9, name: '[CLIENT LOGO 09]' },
    { id: 10, name: '[CLIENT LOGO 10]' },
  ];

  return (
    <section className="py-14 bg-[#FFFFFF] border-y border-[#E8EAF0] overflow-hidden">
      <div className="saas-container mb-6 text-center">
        <p className="text-xs uppercase tracking-wider font-semibold text-[#5B6275]">
          Trusted by fast-growing brands &amp; ambitious founders
        </p>
      </div>

      {/* Infinite scrolling ticker */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        }}
      >
        <div className="flex w-max animate-marquee space-x-8 items-center">
          {[...logos, ...logos].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center justify-center px-6 py-3 rounded-full bg-[#F7F8FB] border border-[#E8EAF0] text-[#5B6275] hover:text-[#0F1222] hover:border-[#DDE2FF] hover:bg-white transition-all cursor-default whitespace-nowrap shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#5B6275]/30 mr-2.5" />
              <span className="text-xs tracking-wider uppercase font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
