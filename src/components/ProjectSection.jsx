import React, { useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ProjectSection({ projects, primaryColor, textColorWhite }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const responsiveGallery = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className='section-three ml-3' id='project'>
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
            <hr className='line' />
            <div className='text-center mb-5'>
                <h3 className='text-h3-bold'>Featured Projects</h3>
                <p className='mt-2' style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '10px auto', color: '#4b5563', fontWeight: 'semi-bold' }}>
                    Showcasing enterprise-level solutions built with modern technologies
                </p>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <span style={{ color: textColorWhite, backgroundColor: primaryColor, padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' }}>
                        <i className="fas fa-briefcase mr-2"></i>
                        {projects.length}+ Professional Projects Delivered
                    </span>
                </div>
            </div>
            
            <div className="container-fluid px-0">
                <div className="row">
                    {projects.map((item, index) => {
                        const isOddTotal = projects.length % 2 !== 0;
                        const isLatest = index === 0;
                        
                        // If total is odd, center the latest (first) project
                        let colClass = "col-lg-6 col-md-6 col-sm-12";
                        if (isOddTotal && isLatest) {
                            colClass = "col-lg-8 col-md-10 col-sm-12 mx-auto";
                        }
                        
                        return (
                            <div className={`${colClass} mb-4`} key={index}>
                                <div 
                                    onClick={() => setSelectedProject(item)}
                                    style={{ 
                                        backgroundColor: '#ffffff',
                                        borderRadius: '15px', 
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        cursor: 'pointer'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    {/* Image Section */}
                                    <div style={{ position: 'relative', height: (isOddTotal && isLatest) ? '350px' : '280px', overflow: 'hidden' }}>
                                        <div style={{ position: 'absolute', top: '15px', left: '15px', zIndex: 10 }}>
                                            <span style={{ backgroundColor: primaryColor, padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', color: textColorWhite, boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                                {isLatest ? '🌟 Latest Project' : `Project #${index + 1}`}
                                            </span>
                                        </div>
                                        {item.gallery && item.gallery.length > 1 && (
                                            <div style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 10 }}>
                                                <span style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', color: textColorWhite }}>
                                                    <i className="far fa-images mr-1"></i> {item.gallery.length}
                                                </span>
                                            </div>
                                        )}
                                        <img 
                                            src={require(`../assets/projects/${item.image}`)} 
                                            alt={item.name} 
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                    </div>
                                    
                                    <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <h5 style={{ color: '#1f2937', marginBottom: '12px', fontSize: '1.35rem', fontWeight: 'bold' }}>{item.name}</h5>
                                        <p style={{ marginBottom: '20px', lineHeight: '1.7', color: '#5c6877', flexGrow: 1, fontSize: '0.75rem' ,fontWeight:'600'}}>{item.description}</p>
                                        
                                        <div className='d-flex align-items-center justify-content-between mt-auto pt-3' style={{ borderTop: '1px solid #f3f4f6' }}>
                                            {item.url ? 
                                                <a 
                                                    onClick={(e) => e.stopPropagation()} 
                                                    target='_blank' 
                                                    rel="noopener noreferrer" 
                                                    href={item.url} 
                                                    style={{ backgroundColor: primaryColor, color: textColorWhite, padding: '8px 20px', borderRadius: '25px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center' }}
                                                >
                                                    <i className="fas fa-external-link-alt mr-2"></i>
                                                    View Live
                                                </a> 
                                                : 
                                                <span style={{ backgroundColor: '#f3f4f6', color: '#6b7280', padding: '8px 20px', borderRadius: '25px', fontSize: '0.9rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center' }}>
                                                    <i className="fas fa-lock mr-2"></i>
                                                    Confidential
                                                </span>
                                            }
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                <i className="fas fa-code" style={{ color: primaryColor, fontSize: '1.25rem' }} title="Production Ready"></i>
                                                <i className="fas fa-check-circle" style={{ color: '#10b981', fontSize: '1.25rem' }} title="Completed"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </AnimationOnScroll>

        {/* PROJECT GALLERY MODAL */}
        {selectedProject && (
            <div 
                style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
                    backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    padding: '20px', backdropFilter: 'blur(5px)'
                }}
                onClick={() => setSelectedProject(null)}
            >
                <div 
                    style={{
                        backgroundColor: '#fff', borderRadius: '15px', 
                        maxWidth: '900px', width: '100%', overflow: 'hidden',
                        position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'absolute', top: '15px', right: '15px', zIndex: 10000,
                            background: 'rgba(0,0,0,0.5)', color: '#fff', border: 'none',
                            borderRadius: '50%', width: '40px', height: '40px',
                            cursor: 'pointer', fontSize: '20px', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            transition: 'background 0.3s'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.8)'}
                        onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.5)'}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    
                    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e5e7eb' }}>
                        <h4 style={{ margin: 0, fontWeight: 'bold', color: '#1f2937' }}>{selectedProject.name}</h4>
                        <p style={{ margin: '5px 0 0 0', fontSize: '0.9rem', color: '#6b7280',fontWeight:'600'  }}>Project Gallery</p>
                    </div>

                    {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                        <Carousel
                            swipeable={true}
                            draggable={true}
                            responsive={responsiveGallery}
                            showDots={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={3500}
                            renderDotsOutside={false}
                            style={{ paddingBottom: '30px' }}
                        >
                            {selectedProject.gallery.map((gItem, gIndex) => (
                                <div key={gIndex} style={{ position: 'relative', width: '100%', height: '500px', backgroundColor: '#111827' }}>
                                    <img 
                                        src={require(`../assets/projects/${gItem.image}`)} 
                                        alt={gItem.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                    <div style={{ position: 'absolute', bottom: '40px', left: 0, right: 0, textAlign: 'center', pointerEvents: 'none' }}>
                                        <span style={{ backgroundColor: 'rgba(0,0,0,0.7)', color: '#fff', padding: '8px 20px', borderRadius: '20px', fontSize: '0.9rem', backdropFilter: 'blur(4px)',fontWeight:'600' }}>
                                            {gItem.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        <div style={{ width: '100%', height: '500px', backgroundColor: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <img 
                                src={require(`../assets/projects/${selectedProject.image}`)} 
                                alt={selectedProject.name} 
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                            />
                        </div>
                    )}
                </div>
            </div>
        )}
    </section>
  )
}
