import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

export default function SkillSection({ skills, primaryColor }) {
    
    const categories = {
        "Frontend & Mobile": ["Javascript", "ReactJS","NextJS", "ReactNative","Swift","Tailwind CSS"],
        "Backend & Database": ["PHP", "Laravel", "Golang", "SQL", "MySQL", "Redis", "Rabbit MQ","PostgreSQL"],
        "Cloud & Services": ["Firebase", "Supabase", "Google Cloud Platform","Alibaba"],
        "DevOps & Tools": ["Gitlab", "Github", "Linux", "Jira","Grafana","Prometheus","Jenkins"],
        "AI & Productivity": ["Claude", "ChatGPT", "Git Co-Pilot"]
    };

    const getSkill = (name) => skills.find(s => s.name === name);

    return (
        <section className='ml-3' id='skill' style={{ padding: '80px 0' }}>
            <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
                <hr className='line' />
                <div className='text-center mb-5'>
                    <h3 className='text-h3-bold'>Technologies I Use</h3>
                    <p className='mt-2' style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '10px auto', color: '#4b5563',fontWeight: '600' }}>
                        A comprehensive overview of my technical stack, categorized for quick reading
                    </p>
                </div>

                <div className="container-fluid px-0">
                    <div className="row justify-content-center">
                        {Object.keys(categories).map((cat, idx) => (
                            <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '15px',
                                    padding: '25px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    height: '100%',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                }}
                                >
                                    <h5 style={{ color: primaryColor, fontWeight: 'bold', marginBottom: '20px', fontSize: '1.15rem', borderBottom: `2px solid ${primaryColor}20`, paddingBottom: '12px' }}>
                                        {cat}
                                    </h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                        {categories[cat].map((skillName, sIdx) => {
                                            const s = getSkill(skillName);
                                            if(!s) return null;
                                            return (
                                                <div key={sIdx} style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    width: '75px',
                                                    textAlign: 'center'
                                                }}>
                                                    <div style={{
                                                        width: '75px', height: '75px',
                                                        backgroundColor: '#f8f9fa',
                                                        borderRadius: '12px',
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        marginBottom: '10px',
                                                        padding: '10px',
                                                        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                                                        border: '1px solid #f3f4f6'
                                                    }}>
                                                        <img src={require(`../assets/${s.logo}`)} alt={s.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                                    </div>
                                                    <span style={{ fontSize: '0.75rem', fontWeight: '600', color: '#4b5563', lineHeight: '1.2' }}>
                                                        {s.name}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimationOnScroll>
        </section>
    );
}
