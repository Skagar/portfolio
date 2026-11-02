import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { profileData } from '../data/profile';
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Github,
  Linkedin,
  Code2,
  ArrowUpRight,
  Clock,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(profileData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const contactChannels = [
    {
      id: "email",
      title: "Direct Email",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
      actionLabel: copiedEmail ? "Copied" : "Copy Email",
      onAction: handleCopyEmail,
      isCopied: copiedEmail,
      icon: Mail,
      sublabel: "Best for recruitment & inquiries"
    },
    {
      id: "phone",
      title: "Direct Phone",
      value: profileData.phone,
      href: `tel:${profileData.phone.replace(/[^0-9+]/g, '')}`,
      actionLabel: copiedPhone ? "Copied" : "Copy Phone",
      onAction: handleCopyPhone,
      isCopied: copiedPhone,
      icon: Phone,
      sublabel: "Direct line for hiring discussions"
    },
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      value: "samaksha-agarwal",
      href: "https://www.linkedin.com/in/samaksha-agarwal",
      actionLabel: "Connect",
      external: true,
      icon: Linkedin,
      sublabel: "Professional background & networking"
    },
    {
      id: "github",
      title: "GitHub Repositories",
      value: "github.com/Skagar",
      href: "https://github.com/Skagar",
      actionLabel: "Explore Code",
      external: true,
      icon: Github,
      sublabel: "Source code & project commits"
    },
    {
      id: "leetcode",
      title: "LeetCode Profile",
      value: "Sk_Agar (Rating: 1563)",
      href: "https://leetcode.com/u/Sk_Agar/",
      actionLabel: "View Stats",
      external: true,
      icon: Code2,
      sublabel: "500+ solved algorithmic challenges"
    },
    {
      id: "location",
      title: "Primary Location",
      value: profileData.location,
      href: null,
      actionLabel: "Open to Relocation",
      icon: MapPin,
      sublabel: "Onsite in Delhi NCR / Hybrid / Remote"
    }
  ];

  return (
    <section id="contact" className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="CONNECT"
          title="Get In Touch"
          subtitle="Actively seeking Software Engineering internships, Java backend roles, and distributed systems opportunities."
        />

        {/* Opportunity Status Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-[#141417] border border-[#262630] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3.5">
            <span className="relative flex h-3 w-3 mt-1 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-[#F5F5F5]">
                Available for Immediate SDE Internships & Technical Engagements
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">
                Targeting Summer/Fall 2027 internships and junior backend development roles.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs text-[#888888] shrink-0">
            <Clock className="w-3.5 h-3.5 text-[#D92332]" />
            <span>Typical response within 24 hours</span>
          </div>
        </div>

        {/* 6-Card Clean Contact Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;

            return (
              <div
                key={channel.id}
                className="group p-5 rounded-2xl bg-[#141416] border border-[#232328] hover:border-[#383842] transition-all duration-200 flex flex-col justify-between shadow-sm"
              >
                <div>
                  {/* Top Bar: Icon + Action Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#1a1a20] border border-[#2b2b36] text-[#D92332]">
                      <Icon className="w-4 h-4" />
                    </div>

                    {channel.onAction ? (
                      <button
                        onClick={channel.onAction}
                        className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#1c1c22] hover:bg-[#252530] border border-[#2a2a36] text-[11px] font-semibold text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors cursor-pointer"
                        title={channel.actionLabel}
                      >
                        {channel.isCopied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{channel.actionLabel}</span>
                          </>
                        )}
                      </button>
                    ) : channel.external && channel.href ? (
                      <a
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#1c1c22] hover:bg-[#252530] border border-[#2a2a36] text-[11px] font-semibold text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
                      >
                        <span>{channel.actionLabel}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="px-2.5 py-1 rounded-lg bg-[#1a1a20] border border-[#24242d] text-[11px] font-medium text-[#777777]">
                        {channel.actionLabel}
                      </span>
                    )}
                  </div>

                  {/* Channel Title & Primary Value */}
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#777777] mb-1">
                    {channel.title}
                  </h4>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noreferrer" : undefined}
                      className="text-sm sm:text-base font-bold text-[#F5F5F5] hover:text-white transition-colors block truncate"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base font-bold text-[#F5F5F5] truncate">
                      {channel.value}
                    </p>
                  )}
                </div>

                {/* Sub-label Context */}
                <div className="pt-3 mt-3 border-t border-[#1f1f24] text-[11px] text-[#777777]">
                  {channel.sublabel}
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Email Quick Copy Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#171113] via-[#141416] to-[#171113] border border-[#2d1c20] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#F5F5F5]">
              Prefer to initiate a direct conversation?
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3] mt-0.5">
              Write to <span className="text-[#F5F5F5] font-semibold">{profileData.email}</span> or call directly at <span className="text-[#F5F5F5] font-semibold">{profileData.phone}</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={`mailto:${profileData.email}`}
              className="px-5 py-2.5 rounded-full bg-[#D92332] hover:bg-[#b51c2a] text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              Compose Email
            </a>
            <a
              href={`tel:${profileData.phone.replace(/[^0-9+]/g, '')}`}
              className="px-5 py-2.5 rounded-full bg-[#18181c] hover:bg-[#222228] border border-[#2d2d38] text-[#F5F5F5] text-xs sm:text-sm font-semibold transition-all"
            >
              Call Direct
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
