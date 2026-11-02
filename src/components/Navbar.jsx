import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { navigationLinks, allProjectsButton } from '../data/navigation';
import { profileData } from '../data/profile';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['hero', ...navigationLinks.map((n) => n.id)];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sectionIds[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090909]/90 backdrop-blur-md border-b border-[#252525] py-3.5'
          : 'bg-[#090909]/60 backdrop-blur-sm border-b border-[#1c1c1c] py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: Wordmark */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="text-[#F5F5F5] hover:text-white font-semibold text-base sm:text-lg tracking-tight transition-colors"
          >
            {profileData.name}
          </a>

          {/* CENTER: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#F5F5F5]'
                      : 'text-[#A3A3A3] hover:text-[#F5F5F5]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D92332] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Compact Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-2.5">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold text-[#FF6B7A] hover:text-white bg-[#1e1315] hover:bg-[#251518] border border-[#D92332]/40 rounded-full transition-all duration-200 shadow-sm cursor-pointer"
              title="Preview Curriculum Vitae"
            >
              <FileText className="w-3 h-3 text-[#D92332]" />
              <span>Resume</span>
            </button>

            <a
              href={allProjectsButton.href}
              onClick={(e) => scrollToSection(e, 'projects')}
              className="px-4 py-1.5 text-xs sm:text-sm font-medium text-[#F5F5F5] bg-[#151515] hover:bg-[#1f1f1f] border border-[#252525] hover:border-[#383838] rounded-full transition-all duration-200 shadow-sm cursor-pointer"
            >
              {allProjectsButton.name}
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-[#151515] border border-[#252525] text-[#A3A3A3] hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c0e]/95 border-b border-[#252525] px-4 py-5 mt-2 space-y-2 backdrop-blur-xl">
          {navigationLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-[#1a1a1a] text-[#F5F5F5] border-l-2 border-[#D92332]'
                  : 'text-[#A3A3A3] hover:text-[#F5F5F5] hover:bg-[#151515]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#252525] flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 text-xs font-semibold text-[#FF6B7A] bg-[#1f1315] border border-[#D92332]/40 rounded-full flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#D92332]" />
              <span>View Resume Preview</span>
            </button>

            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, 'projects')}
              className="w-full text-center py-2 text-xs font-medium text-[#F5F5F5] bg-[#151515] border border-[#252525] rounded-full"
            >
              {allProjectsButton.name}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
