import Template from '../components/Template';
import { projects, skill } from './helpers/constant'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'react-multi-carousel/lib/styles.css';
import myPict from '../assets/pict_02_26_opt.jpg';
import Astronot1 from '../assets/astronot.png';
import Astronot2 from '../assets/astronot2.png';
import Astronot3 from '../assets/astronot3.png';
import ProjectSection from '../components/ProjectSection';
import SkillSection from '../components/SkillSection';

const primaryColor = '#3b82f6';     // Terracotta modern
// const secondaryColor = '#60a5fa';   // Soft sand
// const thirdColor = '#1e40af';       // Warm caramel
// const fourthColor = '#eff6ff';      // Off-white

// const textColorDark = '#0f172a';
const textColorWhite = '#ffffff';

// --- Data Constants ---
const ROLES = [
    { icon: 'fas fa-code', label: 'Full Stack Developer' },
    { icon: 'fas fa-code', label: 'Software Developer' },
    { icon: 'fas fa-code', label: 'Mobile Developer' }
];

const STATS = [
    { icon: 'fas fa-briefcase', label: '5 Years Experience' },
    { icon: 'fas fa-project-diagram', label: '8+ Projects Delivered' },
    { icon: 'fas fa-building', label: 'Digital Industry' }
];

const SOCIAL_LINKS = [
    { href: 'https://github.com/fawazbayureksa/', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://gitlab.com/fawazbayureksa', icon: 'fab fa-gitlab', label: 'GitLab' },
    { href: 'https://www.linkedin.com/in/fawwaz-bayureksa-406b891a3/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
    { href: 'https://twitter.com/FawazBayureksa', icon: 'fab fa-twitter', label: 'X (Twitter)' }
];

const EDUCATION_HISTORY = [
    { period: '2015-2018', major: 'Accounting', school: 'SMK NEGERI 1 GOWA' },
    { period: '2018-2021', major: 'Management informatics', school: 'POLITEKNIK LP3I MAKASSAR' }
];

const EXPERIENCE_HISTORY = [
    { period: 'April 2022 - December 2022', role: 'Front End Web & Mobile Developer', company: 'PT TEKINDO SOLUSI INDONESIA' },
    { period: 'January 2023 - Present', role: 'Full Stack Developer', company: 'PT ABADI SEJAHTERA FINANSINDO' }
];

const FAQS = [
    {
        question: 'Who is Fawwaz Bayureksa?',
        answer: 'Fawwaz Bayureksa is a full stack developer from Indonesia with more than five years of experience building enterprise web and mobile applications. He currently works as a Full Stack Developer at PT Abadi Sejahtera Finansindo in the fintech industry.'
    },
    {
        question: 'Where is Fawwaz Bayureksa based?',
        answer: 'Fawwaz Bayureksa is based in Jakarta and Makassar, Indonesia. He is open to remote collaboration and new opportunities anywhere.'
    },
    {
        question: 'What technologies does Fawwaz Bayureksa use?',
        answer: 'He works with JavaScript, React.js, React Native, Next.js, Swift, PHP, Laravel, Golang, SQL, MySQL, PostgreSQL, Redis, RabbitMQ, Firebase, Supabase, Google Cloud Platform, and DevOps tools such as GitLab, GitHub, Jenkins, Grafana, and Prometheus.'
    },
    {
        question: 'What kind of projects has Fawwaz Bayureksa built?',
        answer: 'His portfolio includes a warehouse management system, a school quality management platform, a multi-tenant customer service platform called OmniCare, a personal finance app for iOS, Android, and web, an e-commerce and auction platform, and fintech marketing and landing pages.'
    },
    {
        question: 'How can I contact Fawwaz Bayureksa?',
        answer: 'You can reach him by email at fawwazbayureksa@gmail.com, by WhatsApp at +6282394418669, or through LinkedIn, GitHub, GitLab, and X (Twitter).'
    }
];

// --- Subcomponents ---
const RoleBadge = ({ icon, label }) => (
    <span style={{
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        border: '2px solid' + primaryColor,
        padding: '8px 20px',
        borderRadius: '25px',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        color: primaryColor,
        display: 'inline-block',
        animation: 'pulse 2s infinite'
    }}>
        <i className={`${icon} mr-2`}></i>
        {label}
    </span>
);

const StatCard = ({ icon, label }) => (
    <div style={{
        backgroundColor: textColorWhite,
        padding: '10px 15px',
        borderRadius: '10px',
        border: '1px solid ' + primaryColor,
    }}>
        <i className={icon} style={{ color: primaryColor, marginRight: '8px' }}></i>
        <span style={{ fontSize: '0.95rem' }}>{label}</span>
    </div>
);

const TimelineCard = ({ period, title, subtitle, icon }) => (
    <div className='card-education mb-3'>
        <div className='d-flex align-items-center'>
            <div className='col-4'>
                <i className={`${icon} icon-school`}></i>
            </div>
            <div className='col-8'>
                <p>{period}</p>
                <small>{title}</small>
                <p>{subtitle}</p>
            </div>
        </div>
    </div>
);

const Home = () => {
    // const responsive = {
    //     superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 8 },
    //     desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
    //     tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    //     mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    // };

    const responsiveProjects = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <Template>
            <section className="section-one ml-3" id='home'>
                <div className='text-section-one' style={{ animation: 'fadeInUp 1s ease-out', animationFillMode: 'both' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <div className='d-flex' style={{ gap: '10px', flexWrap: 'wrap' }}>
                            {ROLES.map((role, idx) => <RoleBadge key={idx} icon={role.icon} label={role.label} />)}
                        </div>
                    </div>
                    
                    <h1 className='text-h1-bold' style={{ marginTop: '20px' }}>
                        Hello! I'm{' '}
                        <span style={{
                            display: 'block',
                            background: primaryColor,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontSize: '3.5rem',
                            marginBottom: '15px'
                        }}>Fawwaz Bayureksa</span>
                    </h1>
                    
                    <p className='text-h3' style={{ marginBottom: '20px' }}>
                        Building <strong style={{ color: primaryColor, fontWeight: 'bold' }}>enterprise-level</strong> web & mobile applications
                    </p>
                    
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap',fontWeight: 'bold' }}>
                        {STATS.map((stat, idx) => <StatCard key={idx} icon={stat.icon} label={stat.label} />)}
                    </div>

                    <p style={{ fontSize: '1.05rem', marginBottom: '25px', color: '#333', maxWidth: '600px', lineHeight: '1.6',fontWeight: 'bold' }}>
                        Specialized in <strong style={{ color: primaryColor }}> Javascript, PHP, React.js, React Native, Laravel, Golang</strong>
                    </p>

                    <div className='d-flex align-items-center py-3'>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.cake.me/pdf/s--LNBPb6lnn_yDud59N3Yq6w--/B0VyzJ.pdf' 
                            className='button mr-3' 
                            aria-label="Download Fawwaz Bayureksa's CV (PDF)"
                            style={{ padding: '12px 30px', fontSize: '1rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                            <i className="fas fa-download" aria-hidden="true"></i>
                            Download CV
                        </a>
                        {SOCIAL_LINKS.map((link, idx) => (
                            <a key={idx} className='link' target="_blank" rel="me noopener noreferrer" href={link.href} aria-label={`Fawwaz Bayureksa on ${link.label}`}>
                                <i className={`${link.icon} icon`} aria-hidden="true"></i>
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className='bg-section-one' style={{ animation: 'fadeInRight 1.2s ease-out', animationFillMode: 'both', animationDelay: '0.3s' }}>
                    <img className='ml-0' src={Astronot1} alt='' aria-hidden='true' />
                </div>
            </section>

            <section className='section-two ml-3' id='about'>
                <hr className='line' />
                <h2 className='text-h3-bold text-center'>About Me</h2>
                <div className='d-flex align-items-center' id='content-section-two'>
                    <div className='col-md-6'>
                        <div className='text-center'>
                            <img src={myPict} className='my-pict' alt='Fawwaz Bayureksa, full stack developer based in Makassar and Jakarta, Indonesia' loading='lazy' decoding='async' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h3 className='text-h3-bold'>Who am i?</h3>
                        <p className='text-justify text-about'>
                            I'm a passionate Software Developer create web and mobile applications. I hold an Associate's degree in Informatics Management and currently leverage my skills in the fast-paced Fintech industry. While I'm based in <span style={{ color: primaryColor }}>Jakarta & Makassar, Indonesia</span>, I'm a quick learner, highly adaptable, and excited by the prospect of new challenges anywhere.
                        </p>
                    </div>
                </div>
            </section>

            <section className='section-three ml-3' id='education'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={2}>
                    <hr className='line' />
                    <h2 className='text-h3-bold text-center'>My Education</h2>
                    
                    <div className='d-flex align-items-center' id='content-section-three-desktop'>
                        <div className='col-md-7 col-xs-12 col-sm-12'>
                            {EDUCATION_HISTORY.map((edu, idx) => (
                                <TimelineCard key={idx} period={edu.period} title={edu.major} subtitle={edu.school} icon="fa fa-school" />
                            ))}
                        </div>
                        <div className='col-md-5 col-xs-12 col-sm-12 bg-section-two' id='section-astronot-3'>
                            <img className='ml-0' src={Astronot3} alt='' aria-hidden='true' loading='lazy' />
                        </div>
                    </div>

                    <div className='d-flex flex-column' id='content-section-three-mobile'>
                        <div className='bg-section-three' id='section-astronot-3'>
                            <img className='ml-0' src={Astronot3} alt='' aria-hidden='true' loading='lazy' />
                        </div>
                        <div>
                            {[...EDUCATION_HISTORY].reverse().map((edu, idx) => (
                                <TimelineCard key={idx} period={edu.period} title={edu.major} subtitle={edu.school} icon="fa fa-school" />
                            ))}
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>

            <section className='section-three ml-3' id='experience'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={2}>
                    <hr className='line' />
                    <h2 className='text-h3-bold text-center'>Professional Experience</h2>
                    
                    <div className='d-flex align-items-center' id='content-section-three-desktop'>
                        <div className='col-md-7'>
                            {EXPERIENCE_HISTORY.map((exp, idx) => (
                                <TimelineCard key={idx} period={exp.period} title={exp.role} subtitle={exp.company} icon="fa fa-building" />
                            ))}
                        </div>
                        <div className='col-md-5 bg-section-one'>
                            <img className='ml-0' src={Astronot2} alt='' aria-hidden='true' loading='lazy' />
                        </div>
                    </div>

                    <div className='d-flex flex-column' id='content-section-three-mobile'>
                        <div className='bg-section-three' id='section-astronot-3'>
                            <img className='ml-0' src={Astronot2} alt='' aria-hidden='true' loading='lazy' />
                        </div>
                        <div>
                            {EXPERIENCE_HISTORY.map((exp, idx) => (
                                <TimelineCard key={idx} period={exp.period} title={exp.role} subtitle={exp.company} icon="fa fa-building" />
                            ))}
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>

            <ProjectSection projects={projects} primaryColor={primaryColor} textColorWhite={textColorWhite} responsiveProjects={responsiveProjects} />

            <SkillSection skills={skill} primaryColor={primaryColor} />

            <section className='section-three ml-3' id='faq'>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
                    <hr className='line' />
                    <h2 className='text-h3-bold text-center'>Frequently Asked Questions</h2>
                    <div className='row justify-content-center mt-4'>
                        <div className='col-lg-9'>
                            {FAQS.map((faq, idx) => (
                                <details key={idx} className='mb-3' style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    padding: '18px 22px',
                                    border: '1px solid rgba(0,0,0,0.06)',
                                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
                                }}>
                                    <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#1f2937' }}>
                                        {faq.question}
                                    </summary>
                                    <p style={{ margin: '12px 0 0 0', color: '#333333', lineHeight: '1.7' ,fontWeight: '600'}}>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>

            <section className='ml-3' id='contact' style={{ padding: '80px 0', marginBottom: '40px' }}>
                <h2 className='text-h3-bold text-center mb-3'>Get In Touch</h2>
                <div className='row justify-content-around'>
                    <div className='col-md-6'>
                        <div className='d-flex mt-3'>
                            <i className="far fa-envelope mr-1" aria-hidden="true"></i>
                            <a className='cursor-pointer text-decoration-none text-dark' target='_blank' rel="noopener noreferrer" href="mailto:fawwazbayureksa@gmail.com">
                                <p className='font-weight-bold mb-0'>fawwazbayureksa@gmail.com</p>
                            </a>
                        </div>
                        <div className='d-flex mt-3'>
                            <i className="fas fa-phone-alt mr-1" aria-hidden="true"></i>
                            <a className='cursor-pointer text-decoration-none text-dark' target='_blank' rel="noopener noreferrer" href="https://wa.me/+6282394418669"> 
                                <p className='font-weight-bold mb-0'>+6282394418669</p>
                            </a>
                        </div>
                        <div className='d-flex mt-3'>
                            <i className="fas fa-map-marker-alt mr-1" aria-hidden="true"></i>
                            <p className='font-weight-bold mb-0'>Makassar | Jakarta, Indonesia</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfepvjX1lcQbWGmnqlSVKcW3tTU4YlCilNGmrKHZDO2TC3ukw/formResponse" target="_blank" method="post">
                            <div>
                                <input type="email" className="form-control mt-3" placeholder="Your E-mail" aria-label="Your email address" name="entry.178149943" required />
                            </div>
                            <div>
                                <textarea className="form-control mt-3" placeholder="Message" aria-label="Your message" name="entry.315198414" required></textarea>
                            </div>
                            <div className="mt-3">
                                <button type="submit" name="submit" className="button mt-2" aria-label="Send message">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Template>
    );
};

export default Home;
