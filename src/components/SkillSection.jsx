import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';

// Color palette aligned with src/App.css :root variables
const THEME = {
  primary: 'var(--primary-color, #3b82f6)',
  secondary: 'var(--secondary-color, #60a5fa)',
  accent: 'var(--accent-color, #06b6d4)',
  third: 'var(--third-color, #1e40af)',
  fourth: 'var(--fourth-color, #eff6ff)',
  textDark: 'var(--text-color-dark, #0f172a)',
  textWhite: 'var(--text-color-white, #ffffff)',
};

const CATEGORIES = {
  'Frontend & Mobile': [
    'Javascript',
    'ReactJS',
    'NextJS',
    'ReactNative',
    'Swift',
    'Tailwind CSS',
  ],
  'Backend & Database': [
    'PHP',
    'Laravel',
    'Golang',
    'SQL',
    'MySQL',
    'Redis',
    'Rabbit MQ',
    'PostgreSQL',
  ],
  'Cloud & Services': [
    'Firebase',
    'Supabase',
    'Google Cloud Platform',
    'Alibaba',
  ],
  'DevOps & Tools': [
    'Gitlab',
    'Github',
    'Linux',
    'Jira',
    'Grafana',
    'Prometheus',
    'Jenkins',
  ],
  'AI & Productivity': ['Claude', 'ChatGPT', 'Git Co-Pilot'],
};

const mod = (v, n) => ((v % n) + n) % n;

/**
 * Infinite, pannable grid gallery for skills.
 * One "block" of items is tiled in both directions; the plane's offset is
 * wrapped by the block size so the edge is never visible.
 */
export function InfiniteGrid({
  items,
  columns = 6,
  itemWidth = 175,
  itemHeight = 195,
  gap = 18,
  className,
}) {
  const viewportRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [view, setView] = useState({ w: 0, h: 0 });
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const rows = Math.max(1, Math.ceil(items.length / columns));
  const cellW = itemWidth + gap;
  const cellH = itemHeight + gap;
  const blockW = columns * cellW;
  const blockH = rows * cellH;

  // Raw pan position (unbounded) and the wrapped position actually rendered.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const planeX = useTransform(x, (v) => mod(v, blockW) - blockW);
  const planeY = useTransform(y, (v) => mod(v, blockH) - blockH);

  // Measure the viewport so we know how many block copies to render.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      setView({ w: rect.width, h: rect.height });
    };
    updateSize();

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        setView({ w: width, h: height });
      });
      ro.observe(el);
      return () => ro.disconnect();
    } else {
      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }, []);

  const copiesX = view.w ? Math.ceil(view.w / blockW) + 2 : 2;
  const copiesY = view.h ? Math.ceil(view.h / blockH) + 2 : 2;

  const stop = () => {
    x.stop();
    y.stop();
  };

  const onPan = (_, info) => {
    x.set(x.get() + info.delta.x);
    y.set(y.get() + info.delta.y);
  };

  const onPanEnd = (_, info) => {
    if (reduceMotion) return;
    const inertia = { type: 'inertia', power: 0.6, timeConstant: 350 };
    animate(x, x.get(), { ...inertia, velocity: info.velocity.x });
    animate(y, y.get(), { ...inertia, velocity: info.velocity.y });
  };

  const onWheel = (e) => {
    stop();
    x.set(x.get() - e.deltaX);
    y.set(y.get() - e.deltaY);
  };

  // One block of skill items, positioned absolutely so copies can be tiled cheaply.
  const block = useMemo(
    () =>
      items.map((item, i) => {
        const col = i % columns;
        const row = Math.floor(i / columns);
        const isOddCol = col % 2 !== 0;
        const isHovered = hoveredIdx === i;

        return (
          <div
            key={item.name + i}
            className="grid-item"
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            style={{
              position: 'absolute',
              left: col * cellW,
              top: row * cellH + (isOddCol ? 20 : 0),
              width: itemWidth,
              height: itemHeight,
              borderRadius: 18,
              overflow: 'hidden',
              backgroundColor: isHovered ? THEME.fourth : THEME.textWhite,
              border: isHovered
                ? `2px solid ${THEME.primary}`
                : `1px solid ${THEME.secondary}`,
              boxShadow: isHovered
                ? '0 18px 36px -8px rgba(59, 130, 246, 0.35), 0 0 22px rgba(6, 182, 212, 0.25)'
                : '0 8px 20px rgba(30, 64, 175, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 14px',
              transform: isHovered ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
              transition:
                'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
              userSelect: 'none',
            }}
          >
            {/* Top lamp glow cone */}
            <div
              style={{
                position: 'absolute',
                top: -28,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 130,
                height: 60,
                background:
                  'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.38) 0%, rgba(59, 130, 246, 0.18) 50%, transparent 75%)',
                opacity: isHovered ? 1 : 0.35,
                pointerEvents: 'none',
                transition: 'opacity 0.25s ease',
              }}
            />

            {/* Category Pill */}
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 'bold',
                color: isHovered ? THEME.textWhite : THEME.third,
                backgroundColor: isHovered ? THEME.primary : THEME.fourth,
                border: `1px solid ${THEME.secondary}`,
                padding: '3px 10px',
                borderRadius: 999,
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                transition: 'all 0.25s ease',
                zIndex: 1,
              }}
            >
              {item.category}
            </span>

            {/* Skill Logo Box */}
            <div
              style={{
                width: 82,
                height: 82,
                borderRadius: 14,
                backgroundColor: THEME.textWhite,
                border: `1px solid ${THEME.fourth}`,
                boxShadow: 'inset 0 2px 6px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                zIndex: 1,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                width={64}
                height={64}
                loading="lazy"
                draggable={false}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  display: 'block',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Skill Name */}
            <span
              style={{
                fontSize: '0.88rem',
                fontWeight: 'bold',
                color: isHovered ? THEME.third : THEME.textDark,
                textAlign: 'center',
                lineHeight: 1.2,
                zIndex: 1,
              }}
            >
              {item.name}
            </span>
          </div>
        );
      }),
    [items, columns, cellW, cellH, itemWidth, itemHeight, hoveredIdx]
  );

  return (
    <motion.div
      ref={viewportRef}
      className={className}
      onPanStart={stop}
      onPan={onPan}
      onPanEnd={onPanEnd}
      onWheel={onWheel}
      role="region"
      aria-label="Infinite pannable skills gallery"
      style={{
        position: 'relative',
        width: '100%',
        height: '620px',
        borderRadius: '24px',
        overflow: 'hidden',
        touchAction: 'none',
        cursor: 'grab',
        background:
          'radial-gradient(circle at 50% 20%, #ffffff 0%, var(--fourth-color, #eff6ff) 60%, rgba(96, 165, 250, 0.22) 100%)',
        border: `2px solid ${THEME.secondary}`,
        boxShadow:
          '0 20px 50px -12px rgba(30, 64, 175, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      }}
      whileTap={{ cursor: 'grabbing' }}
    >

      {/* Edge vignette so tiled items fade smoothly at container borders */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 5,
          boxShadow: 'inset 0 0 40px 12px rgba(239, 246, 255, 0.85)',
          borderRadius: '24px',
        }}
      />

      <motion.div
        style={{
          x: planeX,
          y: planeY,
          position: 'absolute',
          top: 0,
          left: 0,
          willChange: 'transform',
        }}
      >
        {Array.from({ length: copiesY }).flatMap((_, cy) =>
          Array.from({ length: copiesX }).map((__, cx) => (
            <div
              key={`${cx}-${cy}`}
              aria-hidden={cx + cy > 0}
              style={{
                position: 'absolute',
                left: cx * blockW,
                top: cy * blockH,
                width: blockW,
                height: blockH,
              }}
            >
              {block}
            </div>
          ))
        )}
      </motion.div>
    </motion.div>
  );
}

export default function SkillSection({ skills }) {
  const [viewMode, setViewMode] = useState('infinite'); // 'infinite' | 'categories'

  const getSkill = (name) => skills.find((s) => s.name === name);

  const findCategory = (skillName) => {
    for (const [cat, list] of Object.entries(CATEGORIES)) {
      if (list.includes(skillName)) return cat;
    }
    return 'Technology';
  };

  // Build GridItem[] for InfiniteGrid
  const gridItems = useMemo(() => {
    return skills.map((s) => ({
      name: s.name,
      category: findCategory(s.name),
      src: require(`../assets/${s.logo}`),
      alt: `${s.name} logo`,
    }));
  }, [skills]);

  return (
    <section className="ml-3" id="skill" style={{ padding: '80px 0' }}>
      <hr className="line" />

      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-h3-bold" style={{ color: THEME.textDark }}>
          Technologies I Use
        </h2>
        <p
          className="mt-2"
          style={{
            fontSize: '1.1rem',
            maxWidth: '700px',
            margin: '10px auto',
            color: THEME.third,
            fontWeight: 600,
          }}
        >
          A comprehensive overview of my technical stack — explore the infinite
          canvas or browse by category
        </p>

        {/* View Mode Switcher */}
        <div className="d-flex justify-content-center align-items-center mt-3">
          <div
            style={{
              display: 'inline-flex',
              backgroundColor: THEME.textWhite,
              padding: '4px',
              borderRadius: '24px',
              border: `1px solid ${THEME.secondary}`,
              boxShadow: '0 2px 10px rgba(59, 130, 246, 0.1)',
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode('infinite')}
              style={{
                border: 'none',
                backgroundColor:
                  viewMode === 'infinite' ? THEME.primary : 'transparent',
                color:
                  viewMode === 'infinite' ? THEME.textWhite : THEME.third,
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <i
                className="fas fa-infinity mr-1"
                style={{
                  color:
                    viewMode === 'infinite' ? THEME.fourth : THEME.accent,
                }}
              ></i>
              Infinite Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode('categories')}
              style={{
                border: 'none',
                backgroundColor:
                  viewMode === 'categories' ? THEME.primary : 'transparent',
                color:
                  viewMode === 'categories' ? THEME.textWhite : THEME.third,
                padding: '6px 16px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <i className="fas fa-layer-group mr-1"></i>
              Categorized View
            </button>
          </div>
        </div>
      </motion.div>

      {viewMode === 'infinite' ? (
        <InfiniteGrid items={gridItems} columns={6} />
      ) : (
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            {Object.keys(CATEGORIES).map((cat, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  style={{
                    backgroundColor: THEME.textWhite,
                    borderRadius: '15px',
                    padding: '25px',
                    boxShadow: '0 10px 30px rgba(30, 64, 175, 0.08)',
                    height: '100%',
                    border: `1px solid ${THEME.secondary}`,
                  }}
                >
                  <h3
                    style={{
                      color: THEME.primary,
                      fontWeight: 'bold',
                      marginBottom: '20px',
                      fontSize: '1.15rem',
                      borderBottom: `2px solid ${THEME.fourth}`,
                      paddingBottom: '12px',
                    }}
                  >
                    {cat}
                  </h3>
                  <div
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}
                  >
                    {CATEGORIES[cat].map((skillName, sIdx) => {
                      const s = getSkill(skillName);
                      if (!s) return null;
                      return (
                        <div
                          key={sIdx}
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '75px',
                            textAlign: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: '75px',
                              height: '75px',
                              backgroundColor: THEME.fourth,
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginBottom: '10px',
                              padding: '10px',
                              boxShadow: '0 2px 8px rgba(30, 64, 175, 0.06)',
                              border: `1px solid ${THEME.secondary}`,
                            }}
                          >
                            <img
                              src={require(`../assets/${s.logo}`)}
                              alt={`${s.name} logo`}
                              loading="lazy"
                              decoding="async"
                              style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                              }}
                            />
                          </div>
                          <span
                            style={{
                              fontSize: '0.75rem',
                              fontWeight: 600,
                              color: THEME.textDark,
                              lineHeight: '1.2',
                            }}
                          >
                            {s.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
