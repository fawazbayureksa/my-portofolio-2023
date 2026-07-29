import React, { useEffect, useRef } from 'react';
import { animate, createScope, spring, stagger } from 'animejs';

const primaryColor = '#3b82f6';
const secondaryColor = '#60a5fa';
const accentColor = '#06b6d4';
const textColorDark = '#0f172a';

const EXPERIENCES = [
    {
        id: 1,
        title: 'Software Developer',
        company: 'PT Abadi Sejahtera Finansindo',
        type: 'Purnawaktu (Full-time)',
        period: 'Jan 2023 - Present · 3 yrs 7 mos',
        location: 'Tangerang, Banten, Indonesia · On-site',
        iconBg: '#10b981',
        iconClass: 'fas fa-laptop-code',
        description: [
            'I work as a Fullstack Developer building internal systems that support daily operations, such as Telemarketing System, Collection System, Field Collection, and Customer Service platforms. I use Laravel, Inertia.js, and React.js to develop both frontend and backend, and I also handle integrations with tools like WebSocket, Redis, RabbitMQ, and multi-channel communication (chat, call, email).',
            'At this company I also make sure the systems can handle real business needs. I focus on improving performance, simplifying workflows, and making the system more scalable as the company grows. I\'m also involved in preparing the system for international expansion and exploring AI integrations to help automate processes and improve efficiency.'
        ],
        skills: ['MySQL', 'Laravel', 'Inertia.js', 'React.js', 'WebSocket', 'Redis', 'RabbitMQ', 'AI Integration', '+24 keahlian']
    },
    {
        id: 2,
        title: 'Full Stack Engineer',
        company: 'Self Employed',
        type: 'Pekerja Lepas (Freelance)',
        period: 'Nov 2025 - Present · 9 mos',
        location: 'Indonesia · Remote',
        iconBg: '#f97316',
        iconClass: 'fas fa-handshake',
        description: [
            'Developed and maintained full-stack applications using modern technology stack frameworks. Built RESTful APIs and responsive web interfaces tailored to client business needs.'
        ],
        skills: ['Web Interface Design', 'Engineering', 'RESTful APIs', 'React.js', 'Node.js', '+11 keahlian']
    },
    {
        id: 3,
        title: 'Front End Web & Mobile Developer',
        company: 'Tekindo Solusi Indonesia',
        type: 'Purnawaktu (Full-time)',
        period: 'Apr 2022 - Dec 2022 · 9 mos',
        location: 'Jakarta Selatan, Jakarta Raya, Indonesia · Hybrid',
        techStack: 'Postman · VS Code · Android Studio · ClickUp · GitLab · JavaScript (React.js, React Native) · HTML · CSS',
        iconBg: '#6366f1',
        iconClass: 'fas fa-mobile-alt',
        description: [
            'I worked on development of web and mobile applications, mainly e-commerce and CMS platforms, using React.js and React Native. I developed responsive and user-friendly interfaces by translating designs from Figma into clean and functional UI. I also managed application state using React Hooks, Context API, and Redux, ensuring smooth performance and maintainable code.',
            'In addition, I focused on improving user experience by understanding user behavior and optimizing interface flow. I wrote clean and reusable code, used various libraries to enhance features, and worked closely with the team in an agile environment using ClickUp and GIT for task management and version control.'
        ],
        skills: ['Skill Development', 'styled-components', 'React.js', 'React Native', 'Redux', 'Figma', '+8 keahlian']
    },
    {
        id: 4,
        title: 'Staff Intern',
        company: 'iPajak.com',
        type: 'Magang (Internship)',
        period: 'Jan 2022 - Apr 2022 · 4 mos',
        location: 'Makassar, Sulawesi Selatan, Indonesia',
        iconBg: '#0284c7',
        iconClass: 'fas fa-tools',
        description: [
            '• Help Troubleshooting for supporting machines such as printers and hardware peripherals.',
            '• Troubleshooting PC hardware, OS setup, and network infrastructure maintenance.'
        ],
        skills: ['IT Operations', 'Microsoft Excel', 'Hardware & Troubleshooting', '+3 keahlian']
    }
];

export const CareerTimeline = () => {
    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {
        // Scoped Anime.js animations for career timeline
        scope.current = createScope({ root }).add(self => {
            // Animate vertical timeline connector line growth
            animate('.timeline-vertical-line', {
                scaleY: [0, 1],
                duration: 1200,
                ease: 'inOutQuad'
            });

            // Staggered slide in for timeline cards
            animate('.timeline-card-item', {
                translateX: [-30, 0],
                opacity: [0, 1],
                delay: stagger(180, { start: 250 }),
                duration: 850,
                ease: 'out(4)'
            });

            // Staggered pop for company icon badges
            animate('.timeline-icon-badge', {
                scale: [0, 1],
                rotate: [-30, 0],
                delay: stagger(180, { start: 200 }),
                ease: spring({ bounce: 0.6 })
            });

            // Staggered skill tags entrance
            animate('.timeline-skill-pill', {
                scale: [0, 1],
                opacity: [0, 1],
                delay: stagger(35, { start: 700 }),
                ease: spring({ bounce: 0.5 })
            });

            // Hover card animation
            self.add('cardHover', (el) => {
                animate(el, {
                    scale: 1.015,
                    boxShadow: '0 12px 30px rgba(59, 130, 246, 0.18)',
                    duration: 250,
                    ease: 'outQuad'
                });
            });

            self.add('cardLeave', (el) => {
                animate(el, {
                    scale: 1,
                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                    duration: 250,
                    ease: 'outQuad'
                });
            });
        });

        return () => scope.current && scope.current.revert();
    }, []);

    const handleMouseEnter = (e) => {
        if (scope.current && scope.current.methods && scope.current.methods.cardHover) {
            scope.current.methods.cardHover(e.currentTarget);
        }
    };

    const handleMouseLeave = (e) => {
        if (scope.current && scope.current.methods && scope.current.methods.cardLeave) {
            scope.current.methods.cardLeave(e.currentTarget);
        }
    };

    return (
        <section className='ml-3 my-5 py-4 position-relative' id='experience' ref={root} style={{ minHeight: 'auto', height: 'auto', clear: 'both' }}>
            <hr className='line' />
            <div className='text-center mb-5'>
                <h3 className='text-h3-bold'>Work Experience</h3>
                <p style={{ fontSize: '1.05rem', color: '#64748b', marginTop: '8px' }}>
                    My professional journey and career milestones in software engineering
                </p>
            </div>

            <div className='position-relative style-timeline-container px-2 px-md-4'>
                <div className='position-relative d-flex flex-column' style={{ gap: '30px' }}>
                    {/* Vertical timeline line aligned precisely through center of icon badges and constrained to last badge */}
                    <div 
                        className='timeline-vertical-line' 
                        style={{
                            position: 'absolute',
                            left: '24px',
                            top: '26px',
                            bottom: '125px',
                            width: '4px',
                            background: `linear-gradient(to bottom, ${primaryColor}, ${secondaryColor})`,
                            borderRadius: '4px',
                            zIndex: 1,
                            transformOrigin: 'top'
                        }}
                    />

                    {EXPERIENCES.map((exp) => (
                        <div key={exp.id} className='d-flex position-relative align-items-start'>
                            {/* Company / Role Icon Badge */}
                            <div 
                                className='timeline-icon-badge d-flex align-items-center justify-content-center text-white font-weight-bold shadow'
                                style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '16px',
                                    backgroundColor: exp.iconBg,
                                    zIndex: 2,
                                    flexShrink: 0,
                                    marginRight: '24px',
                                    fontSize: '1.2rem'
                                }}
                            >
                                <i className={exp.iconClass}></i>
                            </div>

                            {/* Experience Content Card */}
                            <div 
                                className='timeline-card-item flex-grow-1 p-4 bg-white rounded-lg shadow-sm'
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    borderLeft: `4px solid ${exp.iconBg}`,
                                    borderRadius: '16px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                    transition: 'border-color 0.3s'
                                }}
                            >
                                <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                                    <div>
                                        <h4 style={{ fontWeight: '700', color: textColorDark, fontSize: '1.35rem', marginBottom: '4px' }}>
                                            {exp.title}
                                        </h4>
                                        <div style={{ fontSize: '1rem', fontWeight: '600', color: primaryColor }}>
                                            {exp.company} <span className="mx-1" style={{ color: '#94a3b8' }}>•</span> 
                                            <span style={{ fontSize: '0.85rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '3px 10px', borderRadius: '12px', color: primaryColor }}>
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='text-right mt-1'>
                                        <div style={{ fontSize: '0.9rem', fontWeight: '600', color: '#475569' }}>
                                            <i className="far fa-calendar-alt mr-1" style={{ color: primaryColor }}></i>
                                            {exp.period}
                                        </div>
                                        <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '2px' }}>
                                            <i className="fas fa-map-marker-alt mr-1" style={{ color: '#ef4444' }}></i>
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {exp.techStack && (
                                    <div className="mb-3 p-2 rounded" style={{ backgroundColor: '#f8fafc', fontSize: '0.85rem', color: '#475569', borderLeft: '3px solid ' + secondaryColor }}>
                                        <strong>Tech Stack:</strong> 
                                        <span className='fw-semi-bold'>
                                             {exp.techStack}
                                        </span>
                                    </div>
                                )}

                                <div className='mt-3 mb-3' style={{ color: 'black', lineHeight: '1.7', fontSize: '0.95rem'}}>
                                    {exp.description.map((paragraph, pIdx) => (
                                        <p key={pIdx} className={'fw-semi-bold'}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Skill Pills */}
                                <div className='d-flex flex-wrap align-items-center mt-3 pt-2' style={{ gap: '8px', borderTop: '1px solid #f1f5f9' }}>
                                    <i className="fas fa-diamond text-secondary mr-1" style={{ fontSize: '0.8rem', color: primaryColor }}></i>
                                    {exp.skills.map((skillItem, sIdx) => (
                                        <span 
                                            key={sIdx}
                                            className='timeline-skill-pill'
                                            style={{
                                                backgroundColor: '#f1f5f9',
                                                color: '#334155',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                padding: '4px 12px',
                                                borderRadius: '20px',
                                                border: '1px solid #e2e8f0',
                                                display: 'inline-block'
                                            }}
                                        >
                                            {skillItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerTimeline;
