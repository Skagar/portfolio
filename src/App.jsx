import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import CodingProfiles from './sections/CodingProfiles';
import Contact from './sections/Contact';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090909] text-[#F5F5F5] font-sans antialiased overflow-x-hidden selection:bg-[#D92332] selection:text-white">
      {/* Subtle Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Background Ambience */}
      <BackgroundEffects />

      {/* Sticky Minimal Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections Hierarchy */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero / Introduction */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. Verified Telemetry & Engineering Benchmarks */}
        <Stats />

        {/* 3. Technical Proficiencies (Redesigned & Visually Attractive) */}
        <Skills />

        {/* 4. Featured Projects (Primary Highlight with Working Architecture Spec Modal) */}
        <Projects />

        {/* 5. Professional Experience */}
        <Experience />

        {/* 6. Education & Academic Distinction */}
        <Education />

        {/* 7. Competitive Programming Profiles */}
        <CodingProfiles />

        {/* 8. Direct Contact & Opportunities (Form Eliminated, Compact Channels) */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Resume Preview & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
