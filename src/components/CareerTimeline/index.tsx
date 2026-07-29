import React from 'react';
import { timelineData } from './timelineData';
import { TimelineItem } from './TimelineItem';
import { useTimelineAnimation } from './useTimelineAnimation';
import { ParticleBackground } from './ParticleBackground';

export const CareerTimeline: React.FC = () => {
  const {
    containerRef,
    lineRef,
    progressLineRef,
    activeItemIndex,
    scrollProgress,
  } = useTimelineAnimation({
    itemCount: timelineData.length,
  });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative w-full py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden font-sans selection:bg-cyan-500 selection:text-slate-950"
      aria-label="Career Timeline"
    >
      {/* Background Particles */}
      <ParticleBackground />

      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 shadow-inner backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              Career Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Engineering Scalable Solutions
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            A chronicle of my technical leadership, architectural decisions, and full-stack software development experience across high-growth startups and enterprise platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* DESKTOP VERTICAL LINE (Center line) */}
          <div
            ref={lineRef}
            className="timeline-vertical-line hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-slate-800 z-10"
            style={{ opacity: 0 }}
          >
            {/* Scroll Progress Active Gradient Fill */}
            <div
              ref={progressLineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] transition-all duration-150 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            />
          </div>

          {/* MOBILE VERTICAL LINE (Left line) */}
          <div className="md:hidden absolute left-6 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-slate-800 z-10">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-150 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            />
          </div>

          {/* Timeline Items List */}
          <div className="relative z-20 space-y-4">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index === activeItemIndex;
              const isCompleted = index <= activeItemIndex;

              return (
                <TimelineItem
                  key={item.id}
                  item={item}
                  index={index}
                  isLeft={isLeft}
                  isActive={isActive}
                  isCompleted={isCompleted}
                />
              );
            })}
          </div>
        </div>

        {/* Bottom Callout / Footer Note */}
        <div className="mt-20 sm:mt-28 text-center">
          <p className="font-mono text-xs text-slate-500 tracking-wider">
            ALWAYS BUILDING • DRIVEN BY CODE QUALITY & ARCHITECTURAL EXCELLENCE
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;
