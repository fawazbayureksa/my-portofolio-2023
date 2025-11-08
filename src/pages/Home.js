import React from 'react';
import Template from '../components/Template';
import { projects, skill } from './helpers/constant'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import myPict from '../assets/pict_12_24.jpg';
import Astronot1 from '../assets/astronot.png';
import Astronot2 from '../assets/astronot2.png';
import Astronot3 from '../assets/astronot3.png';

const Home = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsiveProjects = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Template>
            <section className="section-one ml-3" id='home'>
                <div className='text-section-one' style={{
                    animation: 'fadeInUp 1s ease-out',
                    animationFillMode: 'both'
                }}>
                    <div style={{marginBottom: '10px'}}>
                        <div className='d-flex' style={{gap: '10px', flexWrap: 'wrap'}}>
                        <span style={{
                                backgroundColor: 'rgba(244, 206, 20, 0.15)',
                                border: '2px solid #F4CE14',
                                padding: '8px 20px',
                                borderRadius: '25px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#F4CE14',
                                display: 'inline-block',
                                animation: 'pulse 2s infinite'
                            }}>
                                <i className="fas fa-code mr-2"></i>
                                Full Stack Developer
                            </span>
                        <span style={{
                                backgroundColor: 'rgba(244, 206, 20, 0.15)',
                                border: '2px solid #F4CE14',
                                padding: '8px 20px',
                                borderRadius: '25px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#F4CE14',
                                display: 'inline-block',
                                animation: 'pulse 2s infinite'
                            }}>
                                <i className="fas fa-code mr-2"></i>
                                Software Developer
                            </span>
                        <span style={{
                                backgroundColor: 'rgba(244, 206, 20, 0.15)',
                                border: '2px solid #F4CE14',
                                padding: '8px 20px',
                                borderRadius: '25px',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                color: '#F4CE14',
                                display: 'inline-block',
                                animation: 'pulse 2s infinite'
                            }}>
                                <i className="fas fa-code mr-2"></i>
                                Mobile Developer
                            </span>
                            </div>
                        </div>
                        <h1 className='text-h1-bold' style={{marginTop: '20px'}}>Hello! I'm</h1>
                        <h1 className='text-h1-bold' style={{
                            background: 'linear-gradient(135deg, #F4CE14 0%, #FFF 50%, #F4CE14 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontSize: '3.5rem',
                            marginBottom: '15px'
                        }}>Fawwaz Bayureksa</h1>
                        <h3 className='text-h3' style={{marginBottom: '20px'}}>
                            Building <span style={{color: '#F4CE14', fontWeight: 'bold'}}>enterprise-level</span> web & mobile applications
                        </h3>
                        
                        <div style={{
                            display: 'flex',
                            gap: '15px',
                            marginBottom: '25px',
                            flexWrap: 'wrap'
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '10px 15px',
                                borderRadius: '10px',
                                border: '1px solid rgba(244, 206, 20, 0.3)'
                            }}>
                                <i className="fas fa-briefcase" style={{color: '#F4CE14', marginRight: '8px'}}></i>
                                <span style={{fontSize: '0.95rem'}}>4+ Years Experience</span>
                            </div>
                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '10px 15px',
                                borderRadius: '10px',
                                border: '1px solid rgba(244, 206, 20, 0.3)'
                            }}>
                                <i className="fas fa-project-diagram" style={{color: '#F4CE14', marginRight: '8px'}}></i>
                                <span style={{fontSize: '0.95rem'}}>6+ Projects Delivered</span>
                            </div>
                            <div style={{
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                padding: '10px 15px',
                                borderRadius: '10px',
                                border: '1px solid rgba(244, 206, 20, 0.3)'
                            }}>
                                <i className="fas fa-building" style={{color: '#F4CE14', marginRight: '8px'}}></i>
                                <span style={{fontSize: '0.95rem'}}>Digital Industry</span>
                            </div>
                        </div>

                        <p style={{
                            fontSize: '1.05rem',
                            marginBottom: '25px',
                            color: '#ddd',
                            maxWidth: '600px',
                            lineHeight: '1.6'
                        }}>
                            Specialized in <strong style={{color: '#F4CE14'}}> Javascript, PHP, React.js, React Native, Laravel</strong>. 
                            Currently start to learn how to be good at <strong style={{color: '#F4CE14'}}>Golang</strong>
                        </p>

                        <div className='d-flex align-items-center py-3'>
                            <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1GCs7ho2Cd7j5K_IKrRhVa2Y6bAOiDiaa/view?usp=sharing' 
                                className='button mr-3' 
                                style={{
                                    padding: '12px 30px',
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                <i className="fas fa-download"></i>
                                Download CV
                            </a>
                            <a className='link' target="_blank" rel="noopener noreferrer" href="https://github.com/fawazbayureksa/" >
                                <i className="fab fa-github icon"></i>
                            </a>
                            <a className='link' target="_blank" rel="noopener noreferrer" href="https://gitlab.com/fawazbayureksa" >
                                <i className="fab fa-gitlab icon"></i>
                            </a>
                            <a className='link' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/fawwaz-bayureksa-406b891a3/" >
                                <i className="fab fa-linkedin icon"></i>
                            </a>
                            <a className='link' target="_blank" rel="noopener noreferrer" href="https://twitter.com/FawazBayureksa" >
                                <i className="fab fa-twitter icon"></i>
                            </a>
                        </div>
                    </div>
                <div className='bg-section-one' style={{
                    animation: 'fadeInRight 1.2s ease-out',
                    animationFillMode: 'both',
                    animationDelay: '0.3s'
                }}>
                    <img className='ml-0' src={Astronot1} alt='astronot' />
                </div>
            </section>
            <section className='section-two ml-3' id='about'>
                <hr className='line' />
                <h3 className='text-h3-bold text-center'>About Me</h3>
                <div className='d-flex align-items-center' id='content-section-two'>
                    <div className='col-md-6'>
                        <div className='text-center'>
                            <img src={myPict} className='my-pict' alt='my-pict' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h3 className='text-h3-bold'>Who am i?</h3>
                        <p className='text-justify text-about'>
                            I'm a passionate Software Developer create web and mobile applications. I hold an Associate's degree in Informatics Management and currently leverage my skills in the fast-paced Fintech industry. While I'm based in <span style={{ color: "#F4CE14" }}>Jakarta & Makassar, Indonesia</span>, I'm a quick learner, highly adaptable, and excited by the prospect of new challenges anywhere.
                        </p>
                    </div>
                </div>
            </section>
            <section className='section-three ml-3' id='education'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={2}>
                    <hr className='line' />
                    <h3 className='text-h3-bold text-center'>My Education</h3>
                    <div className='d-flex align-items-center' id='content-section-three-desktop'>
                        <div className='col-md-7 col-xs-12 col-sm-12'>
                            <div className='card-education mb-3'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-school icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>2015-2018</p>
                                        <small>
                                            Accounting
                                        </small>
                                        <p>
                                            SMK NEGERI 1 GOWA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-education'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-school icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>2018-2021</p>
                                        <small>
                                            Management informatics
                                        </small>
                                        <p>
                                            POLITEKNIK LP3I MAKASSAR
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 col-xs-12 col-sm-12 bg-section-two' id='section-astronot-3'>
                            <img className='ml-0' src={Astronot3} alt='astronot' />
                        </div>
                    </div>
                    <div className='d-flex flex-column' id='content-section-three-mobile'>
                        <div className='bg-section-three' id='section-astronot-3'>
                            <img className='ml-0' src={Astronot3} alt='astronot' />
                        </div>
                        <div className=''>
                            <div className='card-education mb-3'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-school icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>2018-2021</p>
                                        <small>
                                            Management informatics
                                        </small>
                                        <p>
                                            POLITEKNIK LP3I MAKASSAR
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-education'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-school icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>2015-2018</p>
                                        <small>
                                            Accounting
                                        </small>
                                        <p>
                                            SMK NEGERI 1 GOWA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
            <section className='section-three ml-3' id='experience'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={2}>
                    <hr className='line' />
                    <h3 className='text-h3-bold text-center'>Professional Experience</h3>
                    <div className='d-flex align-items-center' id='content-section-three-desktop'>
                        <div className='col-md-7'>
                            <div className='card-education mb-3'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-building icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>April 2022 - December 2022</p>
                                        <small>
                                            Front End Web & Mobile Developer
                                        </small>
                                        <p>
                                            PT TEKINDO SOLUSI INDONESIA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-education'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-building icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>January 2023 - Present</p>
                                        <small>
                                            Full Stack Developer
                                        </small>
                                        <p>
                                            PT ABADI SEJAHTERA FINANSINDO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-5 bg-section-one'>
                            <img className='ml-0' src={Astronot2} alt='astronot' />
                        </div>
                    </div>
                    <div className='d-flex flex-column' id='content-section-three-mobile'>
                        <div className='bg-section-three' id='section-astronot-3'>
                            <img className='ml-0' src={Astronot2} alt='astronot' />
                        </div>
                        <div className=''>
                            <div className='card-education mb-3'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-building icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>April 2022 - December 2022</p>
                                        <small>
                                            Front End Web & Mobile Developer
                                        </small>
                                        <p>
                                            PT TEKINDO SOLUSI INDONESIA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-education'>
                                <div className='d-flex align-items-center'>
                                    <div className='col-4'>
                                        <i className='fa fa-building icon-school'></i>
                                    </div>
                                    <div className='col-8'>
                                        <p>January 2023 - Present</p>
                                        <small>
                                            Full Stack Developer
                                        </small>
                                        <p>
                                            PT ABADI SEJAHTERA FINANSINDO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
            <section className='section-three ml-3' id='project'>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1.5}>
                    <hr className='line' />
                    <div className='text-center mb-4'>
                        <h3 className='text-h3-bold'>Featured Projects</h3>
                        <p className='text-muted mt-2' style={{fontSize: '1.1rem', maxWidth: '700px', margin: '10px auto'}}>
                            Showcasing enterprise-level solutions built with modern technologies
                        </p>
                        <div className='d-flex justify-content-center align-items-center mt-3'>
                            <span style={{backgroundColor: '#F4CE14', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem'}}>
                                <i className="fas fa-briefcase mr-2"></i>
                                6+ Professional Projects Delivered
                            </span>
                        </div>
                    </div>
                    
                    <Carousel
                        swipeable={true}
                        draggable={false}
                        responsive={responsiveProjects}
                        showDots={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        showArrows={true}
                        customTransition="transform 500ms ease-in-out"
                        transitionDuration={500}
                    >
                        {projects.map((item, index) => (
                            <div className='card-projects mb-3' key={index} style={{position: 'relative', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                                <div style={{position: 'absolute', top: '15px', left: '15px', zIndex: 10}}>
                                    <span style={{backgroundColor: 'rgba(244, 206, 20, 0.9)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', color: '#000'}}>
                                        Image #{index + 1}
                                    </span>
                                </div>
                                <img 
                                    src={require(`../assets/projects/${item.image}`)} 
                                    alt={item.name} 
                                    style={{transition: 'transform 0.3s ease', width: '100%', height: 'auto'}}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div className="description" style={{background: 'linear-gradient(135deg, rgba(44, 41, 41, 0.95) 0%, rgba(40,40,40,0.95) 100%)'}}>
                                    <h5 style={{color: '#F4CE14', marginBottom: '10px', fontSize: '1.3rem', fontWeight: 'bold'}}>{item.name}</h5>
                                    <p style={{marginBottom: '15px', lineHeight: '1.6', color: '#ddd'}}>{item.description}</p>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        {item.url ? 
                                            <a className='link-url' target='_blank' rel="noopener noreferrer" href={item.url} style={{backgroundColor: '#F4CE14', color: '#000', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', fontWeight: 'bold', transition: 'all 0.3s ease'}}>
                                                <i className="fas fa-external-link-alt mr-2"></i>
                                                View Live Project
                                            </a> 
                                            : 
                                            <span style={{backgroundColor: 'rgba(255,255,255,0.1)', color: '#aaa', padding: '10px 20px', borderRadius: '25px', fontSize: '0.9rem'}}>
                                                <i className="fas fa-lock mr-2"></i>
                                                Confidential Project
                                            </span>
                                        }
                                        <div style={{display: 'flex', gap: '10px'}}>
                                            <i className="fas fa-code" style={{color: '#F4CE14', fontSize: '1.2rem'}} title="Production Ready"></i>
                                            <i className="fas fa-check-circle" style={{color: '#4CAF50', fontSize: '1.2rem'}} title="Completed"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </AnimationOnScroll>
            </section>
            <section className='' id='skill'>
                <hr className='line' />
                <h3 className='text-h3-bold text-center mb-5'>Technologies I Use</h3>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    // showArrows={false}
                    // customTransition="all .1"
                    // transitionDuration={100}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {skill.map((i, index) => (
                        <div className='card-skills mb-3' key={index}>
                            <img src={require(`../assets/${i.logo}`)} alt={i.name} />
                        </div>
                    ))}
                </Carousel>
            </section>
            <section className='mt-5' id='contact'>
                {/* <hr className='line' /> */}
                <h3 className='text-h3-bold text-center mb-3'>Get In Touch</h3>
                <div className='row justify-content-around'>
                    <div className='col-md-6'>
                        <div className='d-flex mt-3'>
                            <i className="far fa-envelope mr-1"></i>
                            <a className='cursor-pointer text-decoration-none text-white' target='_blank' rel="noopener noreferrer" href="mailto:fawwazbayureksa@gmail.com"><h6 className='font-weight-bold'>fawwazbayureksa@gmail.com</h6></a>
                        </div>
                        <div className='d-flex mt-3'>
                            <i className="fas fa-phone-alt mr-1"></i>
                            <a className='cursor-pointer text-decoration-none text-white' target='_blank' rel="noopener noreferrer" href="https://wa.me/+6282394418669"> <h6 className='font-weight-bold'>+6282394418669</h6></a>
                        </div>
                        <div className='d-flex mt-3'>
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            <h6 className='font-weight-bold'>Makassar | Jakarta, Indonesia</h6>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfepvjX1lcQbWGmnqlSVKcW3tTU4YlCilNGmrKHZDO2TC3ukw/formResponse"
                         target="_blank" method="post"
                        >
                            <div >
                                <input type="email" className="form-control mt-3" placeholder="Your E-mail" name="entry.178149943" required />
                            </div>
                            <div >
                                <textarea className="form-control mt-3" placeholder="Message" name="entry.315198414" required></textarea>
                            </div>
                            <div className="mt-3">
                                <button type="submit" name="submit" className="button mt-2">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Template >
    );
}

export default Home;
