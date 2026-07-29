import React, { useState } from 'react';
import { CareerItem } from './timelineData';

interface TimelineItemProps {
  item: CareerItem;
  index: number;
  isLeft: boolean;
  isActive: boolean;
  isCompleted: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  item,
  index,
  isLeft,
  isActive,
  isCompleted,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Helper to render icon for achievements
  const renderAchievementIcon = (iconName?: string) => {
    switch (iconName) {
      case 'bolt':
        return (
          <svg className="w-3.5 h-3.5 text-amber-400 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'shield-check':
      case 'lock':
        return (
          <svg className="w-3.5 h-3.5 text-emerald-400 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'sparkles':
      case 'star':
        return (
          <svg className="w-3.5 h-3.5 text-cyan-400 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        );
      case 'trending-up':
        return (
          <svg className="w-3.5 h-3.5 text-blue-400 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      default:
        return (
          <svg className="w-3.5 h-3.5 text-cyan-400 mr-1.5 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <div className="timeline-item-container relative w-full my-8 md:my-16">
      {/* --- DESKTOP LAYOUT (md and up) --- */}
      <div className="hidden md:flex items-center w-full">
        {/* Left column */}
        <div className={`w-1/2 pr-10 ${isLeft ? 'text-right' : 'opacity-0 pointer-events-none'}`}>
          {isLeft && (
            <CardContent
              item={item}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              isActive={isActive}
              isCompleted={isCompleted}
              isLeft={true}
            />
          )}
        </div>

        {/* Center Timeline Dot & Connector */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
          <div
            className={`timeline-dot w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center cursor-pointer ${
              isHovered || isActive
                ? 'border-cyan-400 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.9)] scale-125'
                : isCompleted
                ? 'border-blue-500 bg-blue-600 shadow-[0_0_12px_rgba(59,130,246,0.6)]'
                : 'border-slate-600 bg-slate-900 shadow-inner'
            }`}
            title={`${item.year} - ${item.company}`}
          >
            {/* Core dot indicator */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isHovered || isActive
                  ? 'bg-white animate-ping'
                  : isCompleted
                  ? 'bg-cyan-200'
                  : 'bg-slate-500'
              }`}
            />
          </div>
        </div>

        {/* Right column */}
        <div className={`w-1/2 pl-10 ${!isLeft ? 'text-left' : 'opacity-0 pointer-events-none'}`}>
          {!isLeft && (
            <CardContent
              item={item}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
              isActive={isActive}
              isCompleted={isCompleted}
              isLeft={false}
            />
          )}
        </div>
      </div>

      {/* --- MOBILE LAYOUT (sm and below) --- */}
      <div className="flex md:hidden items-start w-full pl-6 relative">
        {/* Mobile Dot */}
        <div className="absolute left-0 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
          <div
            className={`timeline-dot w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
              isHovered || isActive
                ? 'border-cyan-400 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.9)] scale-110'
                : isCompleted
                ? 'border-blue-500 bg-blue-600'
                : 'border-slate-600 bg-slate-900'
            }`}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        </div>

        {/* Mobile Card Container */}
        <div className="w-full pl-4">
          <CardContent
            item={item}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
            isActive={isActive}
            isCompleted={isCompleted}
            isLeft={false}
            isMobile={true}
          />
        </div>
      </div>
    </div>
  );
};

// Internal Subcomponent for Card Content
interface CardContentProps {
  item: CareerItem;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  isActive: boolean;
  isCompleted: boolean;
  isLeft: boolean;
  isMobile?: boolean;
}

const CardContent: React.FC<CardContentProps> = ({
  item,
  isHovered,
  setIsHovered,
  isActive,
  isCompleted,
  isLeft,
  isMobile = false,
}) => {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`timeline-card ${
        isMobile
          ? 'timeline-card-mobile'
          : isLeft
          ? 'timeline-card-left'
          : 'timeline-card-right'
      } group relative p-6 sm:p-7 rounded-2xl backdrop-blur-xl transition-all duration-300 ease-out cursor-default ${
        isHovered || isActive
          ? 'bg-slate-900/90 border-cyan-500/50 shadow-[0_20px_50px_-12px_rgba(6,182,212,0.25)] -translate-y-1.5 scale-[1.01]'
          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900/80 shadow-xl'
      } border`}
      style={{
        boxShadow: isHovered || isActive
          ? '0 10px 30px -10px rgba(6, 182, 212, 0.25), 0 0 20px rgba(59, 130, 246, 0.15)'
          : undefined,
      }}
    >
      {/* Top subtle glow bar */}
      <div
        className={`absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r transition-opacity duration-300 ${
          isHovered || isActive
            ? 'from-transparent via-cyan-400 to-transparent opacity-100'
            : 'from-transparent via-blue-500/30 to-transparent opacity-40'
        }`}
      />

      {/* Year & Period Header */}
      <div className={`flex items-center gap-2 mb-2 ${isLeft && !isMobile ? 'justify-end' : 'justify-start'}`}>
        <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-3 py-0.5 rounded-full shadow-inner">
          {item.year}
        </span>
        <span className="font-mono text-xs text-slate-400">
          {item.period}
        </span>
        {item.isCurrent && (
          <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Present
          </span>
        )}
      </div>

      {/* Position & Company */}
      <div className="mb-3">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-white transition-colors tracking-tight">
          {item.position}
        </h3>
        <div className={`flex items-center gap-2 text-slate-300 font-medium text-sm sm:text-base mt-0.5 ${isLeft && !isMobile ? 'justify-end' : 'justify-start'}`}>
          <span className="text-blue-400 font-semibold">{item.company}</span>
          {item.location && (
            <>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 text-xs">{item.location}</span>
            </>
          )}
        </div>
      </div>

      {/* Short Description */}
      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Key Highlights */}
      {item.keyHighlights && item.keyHighlights.length > 0 && (
        <ul className="mb-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
          {item.keyHighlights.map((highlight, idx) => (
            <li key={idx} className={`flex items-start gap-2 ${isLeft && !isMobile ? 'justify-end text-right' : 'justify-start text-left'}`}>
              {!isLeft || isMobile ? (
                <span className="text-cyan-400 font-bold mt-1">›</span>
              ) : null}
              <span className="leading-snug">{highlight}</span>
              {isLeft && !isMobile ? (
                <span className="text-cyan-400 font-bold mt-1">‹</span>
              ) : null}
            </li>
          ))}
        </ul>
      )}

      {/* Achievements Badges (Bounce animation target) */}
      {item.achievements && item.achievements.length > 0 && (
        <div className={`flex flex-wrap gap-2 mb-4 ${isLeft && !isMobile ? 'justify-end' : 'justify-start'}`}>
          {item.achievements.map((ach, idx) => (
            <span
              key={idx}
              className="achievement-badge inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-700/50 text-cyan-200 shadow-sm transition-transform duration-200 hover:scale-105"
            >
              {ach.text}
            </span>
          ))}
        </div>
      )}

      {/* Tech Stack Badges */}
      <div className={`flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 ${isLeft && !isMobile ? 'justify-end' : 'justify-start'}`}>
        {item.techStack.map((tech, idx) => (
          <span
            key={idx}
            className={`tech-badge font-mono text-xs px-2.5 py-1 rounded-md transition-all duration-200 ${
              isHovered
                ? 'bg-blue-900/40 border-blue-500/50 text-blue-200 -translate-y-0.5 shadow-sm'
                : 'bg-slate-800/60 border-slate-700/50 text-slate-300'
            } border`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
