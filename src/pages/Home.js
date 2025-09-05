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


    {/* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" /> */ }
    return (
        <Template>
            <section className="section-one ml-3" id='home'>
                <div className='text-section-one'>
                    <h1 className='text-h1-bold'>Hello! My Name is</h1>
                    <h1 className='text-h1-bold'>Fawwaz Bayureksa</h1>
                    <h3 className='text-h3'>I build things for the web and mobile.</h3>
                    <div className='d-flex align-items-center py-3'>
                        <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1GCs7ho2Cd7j5K_IKrRhVa2Y6bAOiDiaa/view?usp=sharing' className='button mr-2'>View CV</a>
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
                <div className='bg-section-one'>
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
            {/* <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={2}> */}
                <hr className='line' />
                <h3 className='text-h3-bold text-center'>My Recent Work</h3>
                {/* <div className="image-gallery"> */}
                    {/* {projects.map(item => (
                        <img key={item.id} className="image-wrapper" src={require(`../assets/projects/${item.image}`)} alt={item.name}  />
                    ))} */}
                    
                {/* </div> */}
                <Carousel
                    swipeable={true}
                    draggable={false}
                    responsive={responsiveProjects}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1500}
                    showArrows={true}
                    // keyBoardControl={true}
                    customTransition="all.1"
                    transitionDuration={100}
                    // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {projects.map((item,index) => (
                        <div className='card-projects mb-3' key={index}>
                            <img src={require(`../assets/projects/${item.image}`)} alt={item.name}  />
                            <div className="description">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                                {item.url ? 
                                    <a className='link-url' target='_blank' rel="noopener noreferrer" href={item.url}>View Project</a> 
                                    : 
                                    null
                                }
                            </div>
                        </div>
                    ))}
                </Carousel>


            {/* </AnimationOnScroll> */}
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
