import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2, Phone } from 'lucide-react';
import { profileData } from '../data/profile';
import { socialLinks } from '../data/social';
import { navigationLinks } from '../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1c1c1c] bg-[#090909] text-[#A3A3A3] text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Identity & Bio */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-lg font-bold text-[#F5F5F5]">
              {profileData.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-sm leading-relaxed">
              Computer Science undergraduate at JIIT Noida focusing on Java 21, Spring Boot 3, and distributed backend architectures.
            </p>
            <div className="pt-2 flex items-center space-x-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.name === 'Email' || s.name === 'Phone' ? undefined : '_blank'}
                  rel={s.name === 'Email' || s.name === 'Phone' ? undefined : 'noreferrer'}
                  title={s.name}
                  className="p-2 rounded-lg bg-[#151515] border border-[#252525] hover:border-[#383838] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
                >
                  {s.name === 'GitHub' && <Github className="w-4 h-4" />}
                  {s.name === 'LinkedIn' && <Linkedin className="w-4 h-4" />}
                  {s.name === 'LeetCode' && <Code2 className="w-4 h-4" />}
                  {s.name === 'Email' && <Mail className="w-4 h-4" />}
                  {s.name === 'Phone' && <Phone className="w-4 h-4" />}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Shortcuts */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profileData.resumeUrl}
                  download="Samaksha_Agarwal_Resume.pdf"
                  className="text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors"
                >
                  Resume PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">
              Contact
            </h4>
            <div className="space-y-1.5 text-xs text-[#A3A3A3]">
              <a 
                href={`mailto:${profileData.email}`} 
                className="block hover:text-[#F5F5F5] transition-colors truncate"
              >
                {profileData.email}
              </a>
              <a 
                href={`tel:${profileData.phone}`} 
                className="block hover:text-[#F5F5F5] transition-colors"
              >
                {profileData.phone}
              </a>
              <span className="block text-[#777777]">
                {profileData.location}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#1c1c1c] flex flex-col sm:flex-row items-center justify-between text-xs text-[#777777] gap-3">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#151515] border border-[#252525] hover:border-[#383838] text-[#A3A3A3] hover:text-[#F5F5F5] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
