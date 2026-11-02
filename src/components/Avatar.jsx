import React, { useState } from 'react';

export default function Avatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden border border-[#252525] bg-[#121214] shadow-2xl transition-transform duration-300 hover:border-[#383838]">
      {/* Soft Ambient Illumination Vignette behind the portrait */}
      <div className="absolute inset-0 bg-radial-gradient from-white/5 via-transparent to-transparent pointer-events-none" />

      {!imageError ? (
        <img
          src="/assets/avatar.svg"
          alt="Samaksha Agarwal - Developer Portrait"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center select-none"
          loading="eager"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#151515] text-[#A3A3A3] p-8 text-center font-sans">
          <div className="w-20 h-20 rounded-2xl bg-[#1c1c1c] border border-[#252525] flex items-center justify-center mb-4 text-[#F5F5F5] font-semibold text-2xl">
            SA
          </div>
          <span className="text-[#F5F5F5] font-medium text-lg">Samaksha Agarwal</span>
          <span className="text-xs text-[#777777] mt-1">Java Backend Developer</span>
        </div>
      )}
    </div>
  );
}
