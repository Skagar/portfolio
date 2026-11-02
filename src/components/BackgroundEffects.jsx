import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Sophisticated Dark Base */}
      <div className="absolute inset-0 bg-[#090909]" />

      {/* Subtle Soft Ambient Illumination in upper-right matching reference design */}
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[150px]" />
    </div>
  );
}
