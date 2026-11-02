import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { statsData } from '../data/stats';
import { Binary, GraduationCap, Server, Cpu, Gauge, Award, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Binary,
  GraduationCap,
  Server,
  Cpu,
  Gauge,
  Award
};

function formatValue(numericValue, decimals) {
  if (decimals !== undefined && decimals !== null) {
    return numericValue.toFixed(decimals);
  }
  return Math.round(numericValue).toLocaleString();
}

function StatCard({ item, index, triggerAnimation }) {
  const cardRef = useRef(null);
  // Zero horizontal margin ensures narrow mobile columns are never clipped out of the observer rect
  const isCardInView = useInView(cardRef, {
    once: true,
    amount: 0.1,
    margin: '0px 0px -20px 0px'
  });

  const shouldAnimate = triggerAnimation || isCardInView;
  const [displayValue, setDisplayValue] = useState(
    item.decimals ? '0.00' : '0'
  );
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    if (!shouldAnimate || hasCompleted) return;

    let animationFrameId;
    let startTimeout;
    const duration = 1200; // ms
    const target = item.numericValue;
    const delay = index * 60; // subtle stagger

    startTimeout = setTimeout(() => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out quartic formula for smooth organic deceleration
        const easedProgress = 1 - Math.pow(1 - progress, 4);
        const current = target * easedProgress;

        if (progress < 1) {
          setDisplayValue(formatValue(current, item.decimals));
          animationFrameId = requestAnimationFrame(step);
        } else {
          setDisplayValue(formatValue(target, item.decimals));
          setHasCompleted(true);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [shouldAnimate, hasCompleted, item, index]);

  // Safety fallback: guarantees final value is rendered even if observer or rAF is throttled
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setDisplayValue(formatValue(item.numericValue, item.decimals));
      setHasCompleted(true);
    }, 2500);

    return () => clearTimeout(safetyTimer);
  }, [item]);

  const Icon = iconMap[item.icon] || Binary;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: '0px 0px -20px 0px' }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative p-4 rounded-xl bg-[#141416] border border-[#232328] hover:border-[#D92332]/40 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-[0_0_20px_rgba(217,35,50,0.08)]"
    >
      {/* Top: Icon & Category Tag */}
      <div className="flex items-center justify-between mb-3">
        <div className="p-1.5 rounded-lg bg-[#1a1a1e] border border-[#26262e] text-[#D92332] group-hover:scale-105 transition-transform duration-200">
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wider text-[#777777]">
          {item.category}
        </span>
      </div>

      {/* Counter Metric */}
      <div className="my-1">
        <div className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-[#F5F5F5] tabular-nums">
          <span className="font-bold tracking-tight text-[#F5F5F5]">
            {item.prefix || ''}{displayValue}{item.suffix || ''}
          </span>
        </div>
        <p className="text-xs font-semibold text-[#E5E5E5] mt-1 line-clamp-1">
          {item.label}
        </p>
      </div>

      {/* Subtitle / Context */}
      <p className="text-[11px] text-[#777777] mt-2 pt-2 border-t border-[#1e1e24] line-clamp-1">
        {item.subtitle}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
    margin: '0px 0px -40px 0px'
  });

  return (
    <section
      id="telemetry"
      ref={sectionRef}
      className="py-12 border-t border-[#1c1c1c] bg-[#0c0c0d]/60"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Mini-Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D92332] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#777777]">
                VERIFIED TELEMETRY & MILESTONES
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mt-1">
              Engineering Benchmarks & Academic Records
            </h2>
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-[#777777]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Factual Data Verified from Candidate Records</span>
          </div>
        </div>

        {/* 6-Grid Telemetry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {statsData.map((item, index) => (
            <StatCard
              key={item.id}
              item={item}
              index={index}
              triggerAnimation={isSectionInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
