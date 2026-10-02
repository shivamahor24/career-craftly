import React from 'react';
import { Play, ArrowRight, CheckCircle2, Youtube } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      // Format: "How [Client] Gained [Number] [Metric] on Autopilot"
      title: 'How [Client A] Gained [340%] [Inbound Pipeline] on Autopilot',
      clientTag: '[CLIENT A PLACEHOLDER] · B2B Tech Infrastructure',
      // 2-sentence problem/solution
      problemSolution:
        '[Client A] struggled with fragmented manual lead triage and slow turnaround across their SDR team, causing 45% of high-intent enterprise inquiries to go cold. Career Craftly engineered an autonomous multi-model AI routing engine and unified custom dashboard that slashed response times to 12 seconds and automated qualified calendar booking.',
      stats: [
        { value: '[3.4x]', label: 'Inbound Qualified Pipeline' },
        { value: '[14 Days]', label: 'Time to Full Deployment' },
        { value: '[62%]', label: 'Customer Acquisition Cost Reduction' },
        { value: '[$180K]', label: 'Attributed ARR Generated' },
      ],
      testimonial: {
        quote:
          '"Career Craftly transformed our chaotic qualification pipeline into a 24/7 autonomous engine. The ROI was obvious within the first two weeks of launch."',
        author: '[Client A Founder & CEO]',
        role: '[Enterprise SaaS Platform, India]',
        youtubeLink: '#',
      },
    },
    {
      id: 2,
      // Format: "How [Client] Gained [Number] [Metric] on Autopilot"
      title: 'How [Client B] Cut [180 Hours] [Operational Overhead] on Autopilot',
      clientTag: '[CLIENT B PLACEHOLDER] · Logistics & Services',
      // 2-sentence problem/solution
      problemSolution:
        '[Client B] was bogged down by redundant data entry across legacy ERP and disparate warehouse coordination spreadsheets, creating frequent dispatch delays. We architected a fault-tolerant software synchronization middleware coupled with custom AI document extraction that eliminated manual verification entirely.',
      stats: [
        { value: '[180 hrs]', label: 'Monthly Hours Saved' },
        { value: '[99.4%]', label: 'Automated Document Accuracy' },
        { value: '[3.1x]', label: 'Fulfillment Turnaround Speed' },
        { value: '[0]', label: 'Manual Billing Errors Reported' },
      ],
      testimonial: {
        quote:
          '"Their engineering team delivered our custom platform ahead of schedule with flawless reliability. We scaled operations 3x without hiring additional back-office staff."',
        author: '[Client B Head of Operations]',
        role: '[Supply Chain Network, India]',
        youtubeLink: '#',
      },
    },
  ];

  return (
    <section id="case-studies" className="saas-section bg-white relative">
      <div className="saas-container relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-[820px]">
          <span className="saas-badge mb-3">
            Verified Outcomes &amp; Proof
          </span>
          <h2 className="headline-section text-[#0F1222] mb-4">
            Real Proof. Real Leverage. We Build Yours.
          </h2>
          <p className="text-[#5B6275] text-base md:text-lg font-normal">
            Explore how ambitious organizations deploy Career Craftly systems to automate operations and capture market share.
          </p>
        </div>

        {/* 2 Featured Stories */}
        <div className="space-y-12 md:space-y-16 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="saas-card p-6 md:p-10 lg:p-12 transition-all duration-300 group"
            >
              {/* Client Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#5B5BF0] px-3 py-1 rounded-full bg-[#EEF0FF] border border-[#DDE2FF]">
                  {study.clientTag}
                </span>
                <span className="text-xs font-medium text-[#5B6275]">
                  Case Study #0{study.id}
                </span>
              </div>

              {/* Title: How [Client] Gained [Number] [Metric] on Autopilot */}
              <h3 className="card-title text-2xl md:text-3xl lg:text-4xl text-[#0F1222] mb-5 leading-tight group-hover:text-[#5B5BF0] transition-colors">
                {study.title}
              </h3>

              {/* 2-Sentence Problem / Solution */}
              <p className="text-[#5B6275] text-base md:text-lg leading-relaxed mb-8 max-w-4xl font-normal">
                {study.problemSolution}
              </p>

              {/* 4-Stat Row: Large display-font number, small muted label underneath */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:p-8 rounded-2xl bg-[#F7F8FB] border border-[#E8EAF0] mb-8">
                {study.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#5B5BF0] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-[#5B6275] font-medium leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial & Video Block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#E8EAF0]">
                {/* Quote column */}
                <div className="lg:col-span-7">
                  <blockquote className="text-[#0F1222] text-base md:text-lg italic font-normal leading-relaxed mb-4">
                    {study.testimonial.quote}
                  </blockquote>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-[#0F1222]">
                      {study.testimonial.author}
                    </span>
                    <span className="text-xs text-[#5B6275]">
                      {study.testimonial.role}
                    </span>
                  </div>
                </div>

                {/* Video Mock preview with Play and YouTube link */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden bg-[#F7F8FB] border border-[#E8EAF0] p-5 flex flex-col items-center justify-center text-center group/video hover:border-[#DDE2FF] hover:bg-white transition-all shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#EEF0FF] text-[#5B5BF0] flex items-center justify-center mb-3 group-hover/video:scale-110 group-hover/video:bg-[#5B5BF0] group-hover/video:text-white transition-all">
                      <Play size={20} className="ml-1 fill-current" />
                    </div>
                    <span className="text-xs font-semibold text-[#0F1222] mb-1">
                      Client Testimonial Briefing (3:42)
                    </span>
                    <span className="text-[11px] text-[#5B6275] mb-3">
                      [RECORDED VIDEO TESTIMONIAL PLACEHOLDER]
                    </span>

                    <a
                      href={study.testimonial.youtubeLink}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Video testimonial placeholder. Real YouTube asset link can be provided in client slots.');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B5BF0] hover:text-[#4A4AE2] transition-colors focus-visible:outline-none"
                    >
                      <Youtube size={15} />
                      View on YouTube
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Ends with "View all case studies" button */}
        <div className="text-center">
          <a
            href="#contact"
            className="btn-saas-secondary inline-flex items-center gap-2"
          >
            <span>View all case studies</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
