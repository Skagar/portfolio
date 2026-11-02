import React from 'react';
import { ArrowDown, FileDown, Eye, Send, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/profile';
import Avatar from '../components/Avatar';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Soft Background Vignette behind right side */}
      <div className="absolute top-1/3 right-10 sm:right-20 w-[450px] h-[450px] bg-white/[0.025] rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Technology Badges, Large Headline, Intro, Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Technology Pill Badges */}
            <div className="flex flex-wrap gap-2">
              {profileData.heroBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium text-[#E5E5E5] bg-[#161618] border border-[#26262a] shadow-sm select-none"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Introductory Label & Main Headline */}
            <div>
              <p className="text-xs font-semibold tracking-widest text-[#777777] uppercase mb-2">
                {profileData.greetingLabel}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-[1.12]">
                {profileData.name}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-[#A3A3A3]">
                {profileData.headline}
              </p>
            </div>

            {/* Professional Supporting Introduction */}
            <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-xl font-sans">
              {profileData.heroDescription}
            </p>

            {/* Compact Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 rounded-full bg-[#F5F5F5] hover:bg-white text-[#090909] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                View projects
              </button>

              {/* View Resume Button (opens in-app modal preview) */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-[#1c1416] hover:bg-[#251518] border border-[#D92332]/50 text-[#FF6B7A] hover:text-[#FFFFFF] font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View resume</span>
              </button>

              {/* Download Resume Button (direct download) */}
              <a
                href={profileData.resumeUrl}
                download="Samaksha_Agarwal_Resume.pdf"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-full bg-[#151515] hover:bg-[#1f1f1f] border border-[#252525] hover:border-[#383838] text-[#F5F5F5] font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5 text-[#A3A3A3]" />
                <span>Download resume</span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2.5 rounded-full bg-[#151515] hover:bg-[#1f1f1f] border border-[#252525] hover:border-[#383838] text-[#F5F5F5] font-medium text-xs sm:text-sm transition-all duration-200 shadow-sm cursor-pointer"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right Column: Slightly rounded rectangular portrait */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <Avatar />
          </div>

        </div>
      </div>
    </section>
  );
}
