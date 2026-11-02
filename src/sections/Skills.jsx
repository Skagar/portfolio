import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';
import {
  Code2,
  Layers,
  Database,
  Radio,
  Box,
  Binary,
  Coffee,
  Cpu,
  FileCode,
  Zap,
  Globe,
  Network,
  HardDrive,
  Server,
  Workflow,
  GitBranch,
  Github,
  PackageCheck,
  Send,
  Terminal,
  Table,
  Wifi,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Code2,
  Layers,
  Database,
  Radio,
  Box,
  Binary,
  Coffee,
  Cpu,
  FileCode,
  Zap,
  Globe,
  Network,
  HardDrive,
  Server,
  Workflow,
  GitBranch,
  Github,
  PackageCheck,
  Send,
  Terminal,
  Table,
  Wifi
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="SKILLS & PROFICIENCIES"
          title="Technical Proficiencies"
          subtitle="Specialized in Java backend engineering, distributed event streaming, and resilient relational data architectures."
        />

        {/* 6-Category Grid — Balanced Proportions & Polished Aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, groupIdx) => {
            const GroupIcon = iconMap[group.icon] || Code2;
            const primaryCount = group.skills.filter((s) => s.primary).length;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: groupIdx * 0.07 }}
                className="group relative rounded-2xl bg-[#141416] border border-[#232328] hover:border-[#383842] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
              >
                {/* Subtle Top Accent Glow on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D92332]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-[#1a1a20] border border-[#2b2b36] text-[#D92332] shadow-inner">
                        <GroupIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-[#F5F5F5] tracking-tight">
                          {group.title}
                        </h3>
                        <span className="text-[11px] text-[#777777] font-medium block">
                          {group.skills.length} {group.skills.length === 1 ? 'Technology' : 'Technologies'}
                        </span>
                      </div>
                    </div>

                    {primaryCount > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-[#221316] border border-[#D92332]/30 text-[10px] font-semibold text-[#FF4D5E] uppercase tracking-wider">
                        Core Focus
                      </span>
                    )}
                  </div>

                  {/* Skills Grid / Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, sIdx) => {
                      const TechIcon = iconMap[skill.icon] || Code2;

                      return (
                        <div
                          key={sIdx}
                          className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                            skill.primary
                              ? 'bg-[#1e1315] hover:bg-[#251518] text-[#FFFFFF] border border-[#D92332]/40 shadow-sm'
                              : 'bg-[#18181b] hover:bg-[#202024] text-[#A3A3A3] hover:text-[#E5E5E5] border border-[#25252b]'
                          }`}
                        >
                          <TechIcon
                            className={`w-3.5 h-3.5 shrink-0 ${
                              skill.primary ? 'text-[#FF4D5E]' : 'text-[#777777]'
                            }`}
                          />
                          <span className="tracking-tight">{skill.name}</span>

                          {/* Subtle Tag for primary technologies */}
                          {skill.badge && (
                            <span className="text-[9px] font-semibold uppercase px-1.5 py-0.2 rounded bg-[#D92332]/20 text-[#FF6B7A] tracking-wider ml-1 border border-[#D92332]/30">
                              {skill.badge}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Sub-Footer: Contextual Technical Summary */}
                <div className="px-6 py-3 bg-[#111113] border-t border-[#1f1f24] flex items-center justify-between text-[11px] text-[#777777]">
                  <span className="truncate">{group.summary}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
