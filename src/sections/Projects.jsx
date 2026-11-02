import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import { Github, ExternalLink, Cpu, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 border-t border-[#1c1c1c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="FEATURED WORK"
          title="Engineered Projects"
          subtitle="Distributed microservices, transactional domain modeling, and RESTful client integrations."
        />

        {/* Project Cards Grid */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#151515] border border-[#252525] hover:border-[#383838] transition-all duration-200 overflow-hidden shadow-card"
            >
              <div className="p-6 sm:p-8 space-y-5">
                {/* Header: Title, Category Badge, Status */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-1.5">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#1e1e22] text-[#F5F5F5] border border-[#2c2c34]">
                        {project.badge}
                      </span>
                      <span className="text-xs text-[#777777]">{project.timeline}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#F5F5F5]">
                      {project.title}
                    </h3>
                  </div>

                  <span className="self-start sm:self-auto text-xs font-medium text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                    {project.status}
                  </span>
                </div>

                {/* Concise Overview */}
                <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
                  {project.overview}
                </p>

                {/* Problem Being Solved */}
                <div className="p-3.5 rounded-xl bg-[#121214] border border-[#222226]">
                  <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider block mb-1">
                    Problem Being Solved:
                  </span>
                  <p className="text-xs sm:text-sm text-[#F5F5F5] leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                {/* 2-3 Important Features / Engineering Contributions */}
                <div>
                  <span className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider block mb-2.5">
                    Engineering Contributions & Architecture:
                  </span>
                  <div className="space-y-2">
                    {project.keyContributions.map((contribution, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#A3A3A3]">
                        <CheckCircle2 className="w-4 h-4 text-[#D92332] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compact Technology Stack */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#1a1a1c] border border-[#26262a] text-xs font-medium text-[#A3A3A3]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-6 sm:px-8 py-3.5 bg-[#121214] border-t border-[#222226] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1.5 text-xs font-semibold text-[#F5F5F5] hover:text-[#D92332] transition-colors cursor-pointer"
                >
                  <Cpu className="w-3.5 h-3.5 text-[#D92332]" />
                  <span>Inspect Architecture Spec</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-[#18181a] border border-[#262626] hover:border-[#383838] text-[#F5F5F5] hover:text-white text-xs font-medium transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#18181a] border border-[#262626] hover:border-[#383838] text-[#F5F5F5] hover:text-white text-xs font-medium transition-colors"
                      title="Live System"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
