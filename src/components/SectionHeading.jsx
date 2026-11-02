import React from 'react';

export default function SectionHeading({ category, title, subtitle, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : 'text-left'}`}>
      {/* Small Category Pill / Label */}
      {category && (
        <span className="inline-block text-[11px] font-semibold tracking-wider text-[#A3A3A3] uppercase px-2.5 py-1 rounded-md bg-[#161618] border border-[#26262a] mb-3">
          {category}
        </span>
      )}

      {/* Main Section Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#F5F5F5]">
        {title}
      </h2>

      {/* Subtitle / Context */}
      {subtitle && (
        <p className={`mt-2.5 text-sm sm:text-base text-[#A3A3A3] max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
