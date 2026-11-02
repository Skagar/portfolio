import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { codingProfiles } from '../data/codingProfiles';
import { Binary, Trophy, Code2, ExternalLink } from 'lucide-react';

const iconMap = {
  Binary,
  Trophy,
  Code: Code2
};

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="COMPETITIVE PROGRAMMING"
          title="Coding Profiles"
          subtitle="Algorithmic problem-solving metrics, contest ratings, and verified platform handles."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {codingProfiles.map((cp, idx) => {
            const Icon = iconMap[cp.icon] || Binary;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#151515] border border-[#252525] hover:border-[#383838] transition-colors flex flex-col justify-between shadow-card"
              >
                <div>
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2 rounded-lg bg-[#1c1c1f] border border-[#2a2a30] text-[#D92332]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#F5F5F5]">{cp.platform}</h3>
                        <span className="text-xs text-[#777777] font-mono">@{cp.handle}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#1c1c1c] border border-[#282828] text-emerald-400">
                      {cp.badge}
                    </span>
                  </div>

                  {/* Rating & Solved Metric Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#19191d] border border-[#222228]">
                      <span className="text-[10px] font-medium text-[#777777] uppercase block">Rating</span>
                      <span className="text-xs sm:text-sm font-bold text-[#F5F5F5] mt-0.5 block">{cp.rating}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#19191d] border border-[#222228]">
                      <span className="text-[10px] font-medium text-[#777777] uppercase block">Solved</span>
                      <span className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 block">{cp.problemsSolved}</span>
                    </div>
                  </div>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cp.highlights.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#18181a] border border-[#222226] text-[10px] text-[#A3A3A3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Profile Link */}
                {cp.profileUrl && (
                  <div className="pt-3 border-t border-[#222226] flex justify-end">
                    <a
                      href={cp.profileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#F5F5F5] hover:text-[#D92332] transition-colors"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
