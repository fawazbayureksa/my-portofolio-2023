import React, { useState, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
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

export default function ProjectSection({ projects }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState('odd-lights'); // 'odd-lights' | 'grid'

  const stageRef = useRef(null);

  // Smooth spring-driven mouse tracking for the 3D tilted "Odd Lights" gallery stage
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 22, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle 3D tilt & pan inspired by motion.dev/examples/react-gallery-odd-lights
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-9, 9]);
  const panX = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const panY = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const handleStageMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleStageMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredIndex(null);
  };

  const openProject = (index) => {
    setSelectedIndex(index);
    setActiveSlide(0);
  };

  const closeProject = () => {
    setSelectedIndex(null);
    setActiveSlide(0);
  };

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;
  const galleryItems =
    selectedProject?.gallery && selectedProject.gallery.length > 0
      ? selectedProject.gallery
      : selectedProject
      ? [{ image: selectedProject.image, title: selectedProject.name }]
      : [];

  const nextSlide = (e) => {
    e.stopPropagation();
    if (!galleryItems.length) return;
    setActiveSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (!galleryItems.length) return;
    setActiveSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section className="section-three ml-3" id="project">
      <hr className="line" />

      {/* Section Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h2 className="text-h3-bold" style={{ color: THEME.textDark }}>
          Featured Projects
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
          Showcasing enterprise-level solutions built with modern technologies
        </p>

        <div
          className="d-flex justify-content-center align-items-center flex-wrap mt-3"
          style={{ gap: '12px' }}
        >
          <span
            style={{
              color: THEME.textWhite,
              background: `linear-gradient(135deg, ${THEME.primary}, ${THEME.third})`,
              padding: '8px 20px',
              borderRadius: '20px',
              fontWeight: 'bold',
              fontSize: '0.9rem',
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.3)',
            }}
          >
            <i className="fas fa-briefcase mr-2"></i>
            {projects.length}+ Professional Projects Delivered
          </span>

          {/* View Mode Switcher */}
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
              onClick={() => setViewMode('odd-lights')}
              style={{
                border: 'none',
                backgroundColor:
                  viewMode === 'odd-lights' ? THEME.primary : 'transparent',
                color:
                  viewMode === 'odd-lights' ? THEME.textWhite : THEME.third,
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <i
                className="fas fa-lightbulb mr-1"
                style={{
                  color:
                    viewMode === 'odd-lights' ? THEME.fourth : THEME.accent,
                }}
              ></i>
              Odd Lights Gallery
            </button>
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              style={{
                border: 'none',
                backgroundColor:
                  viewMode === 'grid' ? THEME.primary : 'transparent',
                color: viewMode === 'grid' ? THEME.textWhite : THEME.third,
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '0.82rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            >
              <i className="fas fa-th-large mr-1"></i>
              Classic Grid
            </button>
          </div>
        </div>
      </motion.div>

      {/* MODE 1: ODD LIGHTS INTERACTIVE 3D GALLERY */}
      {viewMode === 'odd-lights' ? (
        <div
          ref={stageRef}
          onMouseMove={handleStageMouseMove}
          onMouseLeave={handleStageMouseLeave}
          style={{
            position: 'relative',
            borderRadius: '24px',
            background:
              'radial-gradient(circle at 50% 18%, #ffffff 0%, var(--fourth-color, #eff6ff) 58%, rgba(96, 165, 250, 0.22) 100%)',
            padding: '48px 24px 64px',
            overflow: 'hidden',
            perspective: '1300px',
            boxShadow:
              '0 20px 50px -12px rgba(30, 64, 175, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
            border: `2px solid ${THEME.secondary}`,
          }}
        >
          {/* Ambient overhead light beam effect using primary, secondary & accent colors */}
          <div
            style={{
              position: 'absolute',
              top: '-110px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '260px',
              background:
                'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.28) 0%, rgba(59, 130, 246, 0.18) 45%, rgba(239, 246, 255, 0) 75%)',
              pointerEvents: 'none',
              filter: 'blur(18px)',
            }}
          />


          <motion.div
            style={{
              rotateX,
              rotateY,
              x: panX,
              y: panY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="row" style={{ rowGap: '28px' }}>
              {projects.map((item, index) => {
                const isOddColumn = index % 2 !== 0;
                const isSomeoneHovered = hoveredIndex !== null;
                const isHovered = hoveredIndex === index;
                const isDimmed = isSomeoneHovered && !isHovered;

                return (
                  <div
                    key={item.name}
                    className="col-lg-6 col-md-6 col-sm-12"
                    style={{
                      transform: isOddColumn
                        ? 'translateY(18px)'
                        : 'translateY(0px)',
                      transition: 'transform 0.4s ease',
                    }}
                  >
                    <motion.article
                      layoutId={`project-card-${index}`}
                      onClick={() => openProject(index)}
                      onHoverStart={() => setHoveredIndex(index)}
                      onHoverEnd={() => setHoveredIndex(null)}
                      initial={{ opacity: 0, y: 35, scale: 0.94 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.06,
                        layout: { type: 'spring', stiffness: 260, damping: 26 },
                      }}
                      animate={{
                        opacity: isDimmed ? 0.52 : 1,
                        scale: isHovered ? 1.03 : isDimmed ? 0.97 : 1,
                        y: isHovered ? -8 : 0,
                      }}
                      style={{
                        position: 'relative',
                        backgroundColor: THEME.textWhite,
                        borderRadius: '18px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        border: isHovered
                          ? `2px solid ${THEME.primary}`
                          : `1px solid ${THEME.secondary}`,
                        boxShadow: isHovered
                          ? '0 20px 45px -10px rgba(59, 130, 246, 0.38), 0 0 28px rgba(6, 182, 212, 0.28)'
                          : '0 10px 26px rgba(30, 64, 175, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <motion.div
                        animate={{
                          opacity: isHovered ? 1 : 0.4,
                          scale: isHovered ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                          position: 'absolute',
                          top: '-42px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '240px',
                          height: '95px',
                          background:
                            'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.45) 0%, rgba(59, 130, 246, 0.25) 45%, transparent 75%)',
                          pointerEvents: 'none',
                          zIndex: 3,
                        }}
                      />

                      {/* Image Container */}
                      <div
                        style={{
                          position: 'relative',
                          height: '240px',
                          overflow: 'hidden',
                          backgroundColor: THEME.fourth,
                        }}
                      >
                        {/* Index & Latest Badge */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '14px',
                            left: '14px',
                            zIndex: 4,
                            display: 'flex',
                            gap: '8px',
                          }}
                        >
                          <span
                            style={{
                              background:
                                index === 0
                                  ? `linear-gradient(135deg, ${THEME.primary}, ${THEME.accent})`
                                  : THEME.third,
                              color: THEME.textWhite,
                              padding: '5px 14px',
                              borderRadius: '999px',
                              fontSize: '0.78rem',
                              fontWeight: 'bold',
                              boxShadow: '0 4px 10px rgba(15, 23, 42, 0.2)',
                            }}
                          >
                            {index === 0
                              ? ' Latest Project'
                              : `Project #0${index + 1}`}
                          </span>
                        </div>

                        {/* Gallery Count Pill */}
                        {item.gallery && item.gallery.length > 1 && (
                          <div
                            style={{
                              position: 'absolute',
                              top: '14px',
                              right: '14px',
                              zIndex: 4,
                            }}
                          >
                            <span
                              style={{
                                backgroundColor: THEME.textWhite,
                                color: THEME.third,
                                padding: '5px 12px',
                                borderRadius: '999px',
                                fontSize: '0.78rem',
                                fontWeight: 'bold',
                                border: `1px solid ${THEME.secondary}`,
                                boxShadow: '0 4px 10px rgba(15, 23, 42, 0.12)',
                              }}
                            >
                              <i
                                className="far fa-images mr-1"
                                style={{ color: THEME.accent }}
                              ></i>
                              {item.gallery.length}
                            </span>
                          </div>
                        )}

                        <motion.img
                          layoutId={`project-image-${index}`}
                          src={require(`../assets/projects/${item.image}`)}
                          alt={`${item.name} project screenshot`}
                          loading="lazy"
                          decoding="async"
                          animate={{ scale: isHovered ? 1.07 : 1 }}
                          transition={{ duration: 0.45, ease: 'easeOut' }}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />

                        {/* Subtle bottom tint matching theme */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(to top, rgba(239, 246, 255, 0.7) 0%, transparent 35%)',
                            pointerEvents: 'none',
                          }}
                        />
                      </div>

                      {/* Card Body */}
                      <div
                        style={{
                          padding: '22px 24px',
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                          backgroundColor: isHovered
                            ? THEME.fourth
                            : THEME.textWhite,
                          transition: 'background-color 0.3s ease',
                        }}
                      >
                        <motion.h3
                          layoutId={`project-title-${index}`}
                          style={{
                            color: isHovered ? THEME.third : THEME.textDark,
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                            marginBottom: '10px',
                          }}
                        >
                          {item.name}
                        </motion.h3>

                        <p
                          style={{
                            color: THEME.textDark,
                            opacity: 0.8,
                            fontSize: '0.8rem',
                            lineHeight: '1.65',
                            marginBottom: '18px',
                            flexGrow: 1,
                            fontWeight: 600,
                          }}
                        >
                          {item.description}
                        </p>

                        <div
                          className="d-flex align-items-center justify-content-between pt-3 mt-auto"
                          style={{
                            borderTop: `1px solid ${THEME.secondary}`,
                          }}
                        >
                          {item.url ? (
                            <a
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              href={item.url}
                              style={{
                                backgroundColor: THEME.primary,
                                color: THEME.textWhite,
                                padding: '6px 16px',
                                borderRadius: '999px',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                fontSize: '0.82rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                              }}
                            >
                              <i className="fas fa-external-link-alt mr-2"></i>
                              View Live
                            </a>
                          ) : (
                            <span
                              style={{
                                backgroundColor: THEME.fourth,
                                color: THEME.third,
                                border: `1px solid ${THEME.secondary}`,
                                padding: '6px 14px',
                                borderRadius: '999px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                              }}
                            >
                              <i
                                className="fas fa-lock mr-2"
                                style={{ color: THEME.primary }}
                              ></i>
                              Confidential
                            </span>
                          )}

                          <span
                            style={{
                              color: isHovered ? THEME.accent : THEME.primary,
                              fontSize: '0.82rem',
                              fontWeight: 'bold',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'color 0.2s ease',
                            }}
                          >
                            Inspect Gallery
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      ) : (
        /* MODE 2: CLASSIC GRID WITH FRAMER MOTION ANIMATIONS */
        <div className="container-fluid px-0">
          <div className="row">
            {projects.map((item, index) => {
              const isOddTotal = projects.length % 2 !== 0;
              const isLatest = index === 0;
              let colClass = 'col-lg-6 col-md-6 col-sm-12';
              if (isOddTotal && isLatest) {
                colClass = 'col-lg-8 col-md-10 col-sm-12 mx-auto';
              }

              return (
                <div className={`${colClass} mb-4`} key={item.name}>
                  <motion.article
                    layoutId={`project-card-${index}`}
                    onClick={() => openProject(index)}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      backgroundColor: THEME.textWhite,
                      borderRadius: '15px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(30, 64, 175, 0.1)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: `1px solid ${THEME.secondary}`,
                      cursor: 'pointer',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        height: isOddTotal && isLatest ? '350px' : '280px',
                        overflow: 'hidden',
                        backgroundColor: THEME.fourth,
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '15px',
                          left: '15px',
                          zIndex: 10,
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: THEME.primary,
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            color: THEME.textWhite,
                            boxShadow: '0 4px 6px rgba(15, 23, 42, 0.15)',
                          }}
                        >
                          {isLatest
                            ? 'Latest Project'
                            : `Project #${index + 1}`}
                        </span>
                      </div>
                      {item.gallery && item.gallery.length > 1 && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '15px',
                            right: '15px',
                            zIndex: 10,
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: THEME.third,
                              padding: '6px 12px',
                              borderRadius: '20px',
                              fontSize: '0.85rem',
                              color: THEME.textWhite,
                              fontWeight: 'bold',
                            }}
                          >
                            <i
                              className="far fa-images mr-1"
                              style={{ color: THEME.accent }}
                            ></i>{' '}
                            {item.gallery.length}
                          </span>
                        </div>
                      )}
                      <motion.img
                        layoutId={`project-image-${index}`}
                        src={require(`../assets/projects/${item.image}`)}
                        alt={`${item.name} project screenshot`}
                        loading="lazy"
                        decoding="async"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.4 }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>

                    <div
                      style={{
                        padding: '25px',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                      }}
                    >
                      <motion.h3
                        layoutId={`project-title-${index}`}
                        style={{
                          color: THEME.textDark,
                          marginBottom: '12px',
                          fontSize: '1.35rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.name}
                      </motion.h3>
                      <p
                        style={{
                          marginBottom: '20px',
                          lineHeight: '1.7',
                          color: THEME.textDark,
                          opacity: 0.8,
                          flexGrow: 1,
                          fontSize: '0.78rem',
                          fontWeight: 600,
                        }}
                      >
                        {item.description}
                      </p>

                      <div
                        className="d-flex align-items-center justify-content-between mt-auto pt-3"
                        style={{ borderTop: `1px solid ${THEME.fourth}` }}
                      >
                        {item.url ? (
                          <a
                            onClick={(e) => e.stopPropagation()}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.url}
                            style={{
                              backgroundColor: THEME.primary,
                              color: THEME.textWhite,
                              padding: '8px 20px',
                              borderRadius: '25px',
                              textDecoration: 'none',
                              fontWeight: 600,
                              fontSize: '0.9rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                            }}
                          >
                            <i className="fas fa-external-link-alt mr-2"></i>
                            View Live
                          </a>
                        ) : (
                          <span
                            style={{
                              backgroundColor: THEME.fourth,
                              color: THEME.third,
                              border: `1px solid ${THEME.secondary}`,
                              padding: '8px 20px',
                              borderRadius: '25px',
                              fontSize: '0.9rem',
                              fontWeight: 600,
                              display: 'inline-flex',
                              alignItems: 'center',
                            }}
                          >
                            <i
                              className="fas fa-lock mr-2"
                              style={{ color: THEME.primary }}
                            ></i>
                            Confidential
                          </span>
                        )}
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <i
                            className="fas fa-code"
                            style={{ color: THEME.primary, fontSize: '1.25rem' }}
                            title="Production Ready"
                          ></i>
                          <i
                            className="fas fa-check-circle"
                            style={{ color: THEME.accent, fontSize: '1.25rem' }}
                            title="Completed"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SHARED-LAYOUT FRAMER MOTION LIGHTBOX / DETAIL PANEL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.name} project gallery`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeProject}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.78)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              layoutId={`project-card-${selectedIndex}`}
              onClick={(e) => e.stopPropagation()}
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              style={{
                backgroundColor: THEME.textWhite,
                borderRadius: '20px',
                maxWidth: '940px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
                boxShadow:
                  '0 25px 60px -12px rgba(15, 23, 42, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
                border: `2px solid ${THEME.secondary}`,
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: '18px 24px',
                  background: `linear-gradient(135deg, ${THEME.fourth}, ${THEME.textWhite})`,
                  borderBottom: `1px solid ${THEME.secondary}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <motion.h3
                    layoutId={`project-title-${selectedIndex}`}
                    style={{
                      margin: 0,
                      fontWeight: 'bold',
                      color: THEME.textDark,
                      fontSize: '1.25rem',
                    }}
                  >
                    {selectedProject.name}
                  </motion.h3>
                  <p
                    style={{
                      margin: '4px 0 0 0',
                      fontSize: '0.85rem',
                      color: THEME.third,
                      fontWeight: 'bold',
                    }}
                  >
                    <i
                      className="fas fa-layer-group mr-2"
                      style={{ color: THEME.accent }}
                    ></i>
                    {galleryItems[activeSlide]?.title || 'Project Showcase'} (
                    {activeSlide + 1} / {galleryItems.length})
                  </p>
                </div>

                <button
                  onClick={closeProject}
                  type="button"
                  aria-label="Close project gallery"
                  style={{
                    background: THEME.primary,
                    color: THEME.textWhite,
                    border: 'none',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    cursor: 'pointer',
                    fontSize: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Animated Image Stage */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '460px',
                  backgroundColor: THEME.textDark,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryItems[activeSlide]?.image}
                    src={require(`../assets/projects/${galleryItems[activeSlide]?.image}`)}
                    alt={
                      galleryItems[activeSlide]?.title || selectedProject.name
                    }
                    initial={{ opacity: 0, scale: 0.96, x: 24 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.96, x: -24 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </AnimatePresence>

                {galleryItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevSlide}
                      aria-label="Previous screenshot"
                      style={{
                        position: 'absolute',
                        left: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: THEME.primary,
                        color: THEME.textWhite,
                        border: `2px solid ${THEME.textWhite}`,
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.4)',
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      type="button"
                      onClick={nextSlide}
                      aria-label="Next screenshot"
                      style={{
                        position: 'absolute',
                        right: '16px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: THEME.primary,
                        color: THEME.textWhite,
                        border: `2px solid ${THEME.textWhite}`,
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 14px rgba(15, 23, 42, 0.4)',
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip & Description Footer */}
              <div
                style={{
                  padding: '18px 24px',
                  backgroundColor: THEME.fourth,
                  borderTop: `1px solid ${THEME.secondary}`,
                }}
              >
                {galleryItems.length > 1 && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '10px',
                      overflowX: 'auto',
                      paddingBottom: '12px',
                      marginBottom: '12px',
                      borderBottom: `1px solid ${THEME.secondary}`,
                    }}
                  >
                    {galleryItems.map((gItem, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        style={{
                          border:
                            idx === activeSlide
                              ? `2px solid ${THEME.primary}`
                              : `1px solid ${THEME.secondary}`,
                          borderRadius: '8px',
                          padding: 0,
                          overflow: 'hidden',
                          width: '72px',
                          height: '48px',
                          flexShrink: 0,
                          cursor: 'pointer',
                          opacity: idx === activeSlide ? 1 : 0.6,
                          transition: 'all 0.2s ease',
                          background: THEME.textWhite,
                          boxShadow:
                            idx === activeSlide
                              ? '0 0 0 2px rgba(6, 182, 212, 0.35)'
                              : 'none',
                        }}
                      >
                        <img
                          src={require(`../assets/projects/${gItem.image}`)}
                          alt={gItem.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}

                <p
                  style={{
                    margin: 0,
                    fontSize: '0.88rem',
                    color: THEME.textDark,
                    fontWeight: 600,
                    lineHeight: 1.6,
                  }}
                >
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
