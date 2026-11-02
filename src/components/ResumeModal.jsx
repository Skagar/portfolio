import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, ExternalLink, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl h-[92vh] bg-[#141416] border border-[#2b2b36] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#24242c] bg-[#18181c]">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded-lg bg-[#221316] text-[#D92332]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F5F5]">
                  {profileData.name} — Curriculum Vitae
                </h3>
                <span className="text-[11px] text-[#777777]">
                  Computer Science Undergraduate · Java Backend Developer
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href={profileData.resumeUrl}
                download="Samaksha_Agarwal_Resume.pdf"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#D92332] hover:bg-[#b81d2a] text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#1e1e24] hover:bg-[#282832] border border-[#2d2d38] text-[#F5F5F5] text-xs font-medium transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">New Tab</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#777777] hover:text-[#F5F5F5] hover:bg-[#25252e] transition-colors cursor-pointer ml-1"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Viewer */}
          <div className="relative flex-1 bg-[#1a1a1d] p-2 sm:p-4 overflow-hidden flex flex-col">
            <iframe
              src={`${profileData.resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
              title={`${profileData.name} Resume`}
              className="w-full flex-1 rounded-xl border border-[#2b2b36] bg-[#2a2a2e]"
            />
          </div>

          {/* Bottom Bar Info / Fallback */}
          <div className="px-6 py-2.5 border-t border-[#24242c] bg-[#18181c] flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#777777] gap-2">
            <span>
              If preview is not supported on your mobile device, use <strong>Download PDF</strong> or <strong>New Tab</strong> above.
            </span>
            <div className="flex items-center space-x-4">
              <span>Updated: October 2026</span>
              <span>Size: ~365 KB</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
