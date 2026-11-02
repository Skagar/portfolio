import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Cpu,
  CheckCircle2,
  Server,
  Layers,
  Database,
  Radio,
  ShieldCheck,
  Workflow,
  Lock,
  Box
} from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[92vh] bg-[#141416] border border-[#2b2b34] rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#24242c] bg-[#18181c]">
            <div className="flex items-center space-x-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D92332] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
                System Architecture Specification · {project.badge}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#777777] hover:text-[#F5F5F5] hover:bg-[#25252e] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
            
            {/* Title & Timeline Header */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#201517] border border-[#D92332]/40 text-[#FF6B7A] text-xs font-semibold">
                  {project.badge}
                </span>
                <span className="text-xs text-[#777777]">{project.timeline}</span>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  {project.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5] tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem Statement Box */}
            <div className="p-4 rounded-xl bg-[#1a1718] border border-[#382025]">
              <span className="text-[11px] font-bold text-[#FF4D5E] uppercase tracking-wider block mb-1">
                Challenge & Core Problem Solved:
              </span>
              <p className="text-xs sm:text-sm text-[#E5E5E5] leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Architecture Details Container */}
            {project.architectureDetails && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#F5F5F5] font-bold text-base">
                  <Cpu className="w-4 h-4 text-[#D92332]" />
                  <span>High-Level Architecture & Technical Blueprint</span>
                </div>

                {/* RainIQ: 10 Microservices Breakdown */}
                {project.architectureDetails.servicesList && (
                  <div className="p-4 rounded-xl bg-[#111113] border border-[#23232a] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider flex items-center space-x-2">
                        <Server className="w-3.5 h-3.5 text-[#D92332]" />
                        <span>Decomposed Microservices ({project.architectureDetails.servicesCount} Total)</span>
                      </span>
                      <span className="text-[11px] text-[#777777]">Spring Cloud & Eureka Service Registry</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {project.architectureDetails.servicesList.map((svc, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-[#17171b] border border-[#24242d] hover:border-[#33333d] transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D92332]" />
                            <span className="text-xs font-bold text-[#F5F5F5]">{svc.name}</span>
                          </div>
                          <p className="text-[11px] text-[#888888] mt-1 pl-3.5 leading-snug">
                            {svc.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* BookMyShow: Entities & Schema */}
                {project.architectureDetails.entitiesList && (
                  <div className="p-4 rounded-xl bg-[#111113] border border-[#23232a] space-y-3">
                    <span className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider flex items-center space-x-2">
                      <Database className="w-3.5 h-3.5 text-[#D92332]" />
                      <span>Normalized Relational Domain Entities ({project.architectureDetails.entitiesList.length} Core Tables)</span>
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.architectureDetails.entitiesList.map((entity, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md bg-[#18181c] border border-[#282832] text-xs font-medium text-[#E5E5E5]"
                        >
                          {entity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Concurrency & Event Strategy */}
                {project.architectureDetails.concurrencyAndEvents && (
                  <div className="p-4 rounded-xl bg-[#111113] border border-[#23232a] space-y-2">
                    <span className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider flex items-center space-x-2">
                      {project.id === 'rainiq' ? (
                        <>
                          <Radio className="w-3.5 h-3.5 text-[#D92332]" />
                          <span>Event-Driven Architecture & Messaging Flow</span>
                        </>
                      ) : project.id === 'bookmyshow-clone' ? (
                        <>
                          <Layers className="w-3.5 h-3.5 text-[#D92332]" />
                          <span>Transactional Workflow & State Transitions</span>
                        </>
                      ) : (
                        <>
                          <Workflow className="w-3.5 h-3.5 text-[#D92332]" />
                          <span>Request Processing & Client Integration</span>
                        </>
                      )}
                    </span>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                      {project.architectureDetails.concurrencyAndEvents}
                    </p>
                  </div>
                )}

                {/* Database Design Strategy */}
                {project.architectureDetails.databaseDesign && (
                  <div className="p-4 rounded-xl bg-[#111113] border border-[#23232a] space-y-2">
                    <span className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider flex items-center space-x-2">
                      <Database className="w-3.5 h-3.5 text-[#D92332]" />
                      <span>Database Architecture & Persistence Strategy</span>
                    </span>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                      {project.architectureDetails.databaseDesign}
                    </p>
                  </div>
                )}

                {/* Telemetry / Benchmarking */}
                {project.architectureDetails.telemetry && (
                  <div className="p-4 rounded-xl bg-[#111113] border border-[#23232a] space-y-2">
                    <span className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Telemetry & Verification Evidence</span>
                    </span>
                    <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                      {project.architectureDetails.telemetry}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Contributions */}
            <div>
              <h4 className="text-xs font-bold uppercase text-[#777777] tracking-wider mb-3">
                Key Engineering Deliverables:
              </h4>
              <div className="space-y-2">
                {project.keyContributions.map((contrib, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#A3A3A3]">
                    <CheckCircle2 className="w-4 h-4 text-[#D92332] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contrib}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-bold uppercase text-[#777777] tracking-wider mb-2.5">
                Full Technology Stack:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#19191d] border border-[#282830] text-xs font-medium text-[#D1D1D1]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Bottom Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-[#24242c] bg-[#18181c]">
            <span className="text-xs text-[#777777]">
              Source: Verified from candidate GitHub repositories & academic records
            </span>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#F5F5F5] hover:bg-white text-[#090909] text-xs font-semibold transition-all shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-[#1e1e24] border border-[#2b2b36] hover:border-[#3a3a46] text-[#A3A3A3] hover:text-[#F5F5F5] text-xs font-medium transition-colors cursor-pointer"
              >
                Close Spec
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
