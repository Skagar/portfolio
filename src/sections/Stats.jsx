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

function AnimatedCounter({ item }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(
    item.decimals ? '0.00' : '0'
  );

  useEffect(() => {
    if (!isInView) return;

    const duration = 1400; // ms
    const steps = 35;
    const intervalTime = duration / steps;
    const target = item.numericValue;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // Ease out quartic formula
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      const current = target * easedProgress;

      if (step >= steps) {
        setDisplayValue(
          item.decimals ? target.toFixed(item.decimals) : Math.round(target).toLocaleString()
        );
        clearInterval(timer);
      } else {
        setDisplayValue(
          item.decimals ? current.toFixed(item.decimals) : Math.round(current).toLocaleString()
        );
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, item]);

  return (
    <span ref={ref} className="font-bold tracking-tight text-[#F5F5F5]">
      {item.prefix || ''}{displayValue}{item.suffix || ''}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="telemetry" className="py-12 border-t border-[#1c1c1c] bg-[#0c0c0d]/60">
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
          {statsData.map((item, index) => {
            const Icon = iconMap[item.icon] || Binary;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
                  <div className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-[#F5F5F5]">
                    <AnimatedCounter item={item} />
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
          })}
        </div>
      </div>
    </section>
  );
}
