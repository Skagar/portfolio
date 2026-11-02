import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData, academicAchievements } from '../data/education';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="ACADEMICS"
          title="Education & Achievements"
          subtitle="Formal academic credentials, curriculum coursework, and district distinctions."
        />

        {/* Education Timeline / Cards */}
        <div className="space-y-6 mb-10">
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#151515] border border-[#252525] hover:border-[#333333] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1e1e22] text-[#F5F5F5] border border-[#2d2d34]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                      {item.grade}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                    {item.degree}
                  </h3>
                  <h4 className="text-sm sm:text-base font-medium text-[#A3A3A3] mt-0.5">
                    {item.institution}
                  </h4>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-3 text-xs text-[#777777] font-medium">
                  <div className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#D92332]" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Coursework Tags */}
              {item.coursework && (
                <div className="pt-3 border-t border-[#202020]">
                  <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider block mb-2">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#262626] text-xs text-[#A3A3A3]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Academic Distinctions Sub-Grid */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-[#777777] mb-4">
            Academic Distinctions:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {academicAchievements.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-xl bg-[#151515] border border-[#252525] hover:border-[#383838] transition-colors flex items-start space-x-3.5"
              >
                <div className="p-2 rounded-lg bg-[#1c1c1f] border border-[#2a2a30] text-[#D92332] shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-[#F5F5F5]">{ach.title}</span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#1c1c1c] text-[#A3A3A3] border border-[#262626]">
                      {ach.metric}
                    </span>
                  </div>
                  <span className="text-xs text-[#777777] block mt-0.5">{ach.institution} · {ach.year}</span>
                  <p className="text-xs text-[#A3A3A3] mt-1.5 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
