import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="CAREER"
          title="Professional Experience"
          subtitle="Software engineering programs and hands-on enterprise microservice simulations."
        />

        <div className="space-y-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#151515] border border-[#252525] hover:border-[#333333] transition-colors"
            >
              {/* Header: Company, Role, Location, Period */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1e1e22] text-[#F5F5F5] border border-[#2d2d34]">
                      {item.badge}
                    </span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#1a1a1a] text-[#A3A3A3] border border-[#262626]">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                    {item.role}
                  </h3>
                  <h4 className="text-sm sm:text-base font-semibold text-[#D92332] mt-0.5">
                    {item.company}
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

              {/* Summary */}
              <p className="text-sm text-[#A3A3A3] leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Verified Highlight Bullets */}
              <div className="space-y-2 mb-5">
                {item.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#A3A3A3]">
                    <CheckCircle2 className="w-4 h-4 text-[#D92332] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              {item.skillsUsed && (
                <div className="pt-4 border-t border-[#202020] flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider mr-1">
                    Technologies:
                  </span>
                  {item.skillsUsed.map((sk, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#262626] text-xs text-[#A3A3A3]"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
