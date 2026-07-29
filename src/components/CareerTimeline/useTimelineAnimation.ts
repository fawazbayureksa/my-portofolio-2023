import { useEffect, useRef, useState } from 'react';
import * as animeModule from 'animejs';

export interface UseTimelineAnimationProps {
  itemCount: number;
}

// Robust resolver for Anime.js (supports v3 and v4)
const getAnimeApi = () => {
  const mod = animeModule as any;
  const animeFn = mod.default || mod;

  const createTl =
    mod.createTimeline ||
    (typeof animeFn.timeline === 'function' ? (opts?: any) => animeFn.timeline(opts) : null) ||
    (mod.Timeline ? (opts?: any) => new mod.Timeline(opts) : null);

  const staggerFn =
    mod.stagger ||
    (typeof animeFn.stagger === 'function' ? (...args: any[]) => animeFn.stagger(...args) : (val: number) => (_el: any, i: number) => i * val);

  const animateFn = mod.animate || (typeof animeFn === 'function' ? animeFn : null);

  return {
    createTimeline: createTl,
    stagger: staggerFn,
    animate: animateFn,
  };
};

export const useTimelineAnimation = ({ itemCount }: UseTimelineAnimationProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const progressLineRef = useRef<HTMLDivElement | null>(null);
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const animeInstanceRef = useRef<any>(null);

  // 1. Viewport Animation with IntersectionObserver & Anime.js
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Instant reveal for reduced motion users
      const elementsToReveal = container.querySelectorAll(
        '.timeline-vertical-line, .timeline-dot, .timeline-card, .tech-badge, .achievement-badge'
      );
      elementsToReveal.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      });
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const { createTimeline, stagger } = getAnimeApi();

          if (!createTimeline) {
            // Fallback reveal if anime.js functions are unavailable
            container.querySelectorAll(
              '.timeline-vertical-line, .timeline-dot, .timeline-card, .tech-badge, .achievement-badge'
            ).forEach((el) => {
              if (el instanceof HTMLElement) {
                el.style.opacity = '1';
                el.style.transform = 'none';
              }
            });
            return;
          }

          // Create Anime.js Timeline
          const timeline = createTimeline({
            defaults: { easing: 'easeOutExpo' },
            autoplay: true,
          });

          animeInstanceRef.current = timeline;

          // Step 1: Vertical Line animation (scaleY: 0 -> 1)
          if (lineRef.current) {
            lineRef.current.style.transformOrigin = 'top center';
            timeline.add(
              lineRef.current,
              {
                scaleY: [0, 1],
                opacity: [0, 1],
                duration: 800,
                ease: 'outExpo',
                easing: 'easeOutExpo',
              },
              0
            );
          }

          // Step 2: Timeline Dots animation (scale 0 -> 1, rotate 180deg -> 0deg)
          const dots = Array.from(container.querySelectorAll('.timeline-dot'));
          if (dots.length > 0) {
            timeline.add(
              dots,
              {
                scale: [0, 1],
                rotate: ['180deg', '0deg'],
                opacity: [0, 1],
                duration: 600,
                delay: stagger(150),
                ease: 'outBack',
                easing: 'easeOutBack',
              },
              '-=400'
            );
          }

          // Step 3: Cards animation (Left cards -60px, Right cards 60px)
          const leftCards = Array.from(container.querySelectorAll('.timeline-card-left'));
          const rightCards = Array.from(container.querySelectorAll('.timeline-card-right'));
          const mobileCards = Array.from(container.querySelectorAll('.timeline-card-mobile'));

          if (leftCards.length > 0) {
            timeline.add(
              leftCards,
              {
                translateX: [-60, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 700,
                delay: stagger(200),
                ease: 'outQuart',
                easing: 'easeOutQuart',
              },
              '-=300'
            );
          }

          if (rightCards.length > 0) {
            timeline.add(
              rightCards,
              {
                translateX: [60, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 700,
                delay: stagger(200),
                ease: 'outQuart',
                easing: 'easeOutQuart',
              },
              '-=600'
            );
          }

          if (mobileCards.length > 0) {
            timeline.add(
              mobileCards,
              {
                translateX: [-40, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 700,
                delay: stagger(200),
                ease: 'outQuart',
                easing: 'easeOutQuart',
              },
              '-=500'
            );
          }

          // Step 4: Tech Stack Badges (fade upward 12px -> 0px)
          const techBadges = Array.from(container.querySelectorAll('.tech-badge'));
          if (techBadges.length > 0) {
            timeline.add(
              techBadges,
              {
                translateY: [12, 0],
                opacity: [0, 1],
                duration: 400,
                delay: stagger(30),
                ease: 'outCubic',
                easing: 'easeOutCubic',
              },
              '-=400'
            );
          }

          // Step 5: Achievement Badges (Bounce animation scale 0 -> 1.1 -> 1)
          const achievementBadges = Array.from(container.querySelectorAll('.achievement-badge'));
          if (achievementBadges.length > 0) {
            timeline.add(
              achievementBadges,
              {
                scale: [0, 1.1, 1],
                opacity: [0, 1],
                duration: 500,
                delay: stagger(80),
                ease: 'outElastic(1, .6)',
                easing: 'easeOutElastic(1, .6)',
              },
              '-=300'
            );
          }

          // Play timeline if paused
          if (typeof timeline.play === 'function') {
            timeline.play();
          }

          // Unobserve once triggered
          observer.unobserve(container);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animeInstanceRef.current && typeof animeInstanceRef.current.pause === 'function') {
        animeInstanceRef.current.pause();
      }
    };
  }, [itemCount, hasAnimated]);

  // 2. Scroll Progress & Active Dot Stage Indicator
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate container top/bottom relative to viewport
      const startY = windowHeight * 0.7; // Start filling when section reaches 70% of viewport
      const totalHeight = rect.height;
      const currentScroll = startY - rect.top;

      let progress = currentScroll / totalHeight;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      // Determine active item based on dot positions
      const itemElements = container.querySelectorAll('.timeline-item-container');
      let currentActiveIndex = 0;

      itemElements.forEach((el, index) => {
        const itemRect = el.getBoundingClientRect();
        if (itemRect.top <= windowHeight * 0.55) {
          currentActiveIndex = index;
        }
      });

      setActiveItemIndex(currentActiveIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [itemCount]);

  return {
    containerRef,
    lineRef,
    progressLineRef,
    hasAnimated,
    activeItemIndex,
    scrollProgress,
  };
};
