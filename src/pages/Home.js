import React, { useEffect } from 'react';
import Template from '../components/Template';
import { skill } from './helpers/constant'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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

    return (
        <Template>
            <section className="section-one ml-3">
                <div className='text-section-one'>
                    <h1 className='text-h1-bold'>Hello! My Name is</h1>
                    <h1 className='text-h1-bold'>Fawwaz Bayureksa</h1>
                    <h3 className='text-h3'>Junior Front-End Web & Mobile Developer</h3>
                    <div className='d-flex align-items-center py-3'>
                        <button className='mr-2'>Curiculum Vitae</button>
                        <i className="fab fa-github icon"></i>
                        <i className="fab fa-gitlab icon"></i>
                        <i className="fab fa-linkedin icon"></i>
                        <i className="fab fa-twitter icon"></i>
                        <i className="fab fa-facebook icon"></i>
                    </div>
                </div>
                <div className='bg-section-one'>
                    <img className='ml-0' src='/images/astronot.png' alt='astronot' />
                </div>
            </section>
            <section className='section-two ml-3'>
                <hr className='line' />
                <h3 className='text-h3-bold text-center'>ABOUT</h3>
                <div className='d-flex align-items-center'>
                    <div className='col-md-6'>
                        <div className='text-center'>
                            <img src='/images/pict.jpg' className='my-pict' alt='my-pict' />
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <h3 className='text-h3-bold'>Who i am ?</h3>
                        <p className='text-justify text-about'>
                            i'm a Associate's degree From informatics management study program at
                            Politeknik LP3I Makassar based in Makassar, Indonesia , i've passion and motivation
                            Tall, fast in learning and adapting skilled in making websites & mobile app ,
                            i currently work as Front-End Developer
                        </p>
                    </div>
                </div>
            </section>
            <section className='section-three ml-3'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" duration={2}>
                    <hr className='line' />
                    <h3 className='text-h3-bold text-center'>EDUCATION</h3>
                    <div className='row align-items-center'>
                        <div className='col-md-7'>
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
                        <div className='col-md-5 bg-section-one'>
                            <img className='ml-0' src='/images/astronot3.png' alt='astronot' />
                        </div>
                    </div>
                </AnimationOnScroll>
            </section>
            <section className=''>
                <hr className='line' />
                <h3 className='text-h3-bold text-center mb-5'>SKILLS</h3>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    // showArrows={false}
                    // customTransition="all .1"
                    // transitionDuration={100}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {skill.map((i, index) => (
                        // <div className="col-md-2">
                        <div className='card-skills mb-3' key={index}>
                            <img src={`/images/${i.logo}`} alt='javascript' />
                        </div>
                        // </div>
                    ))}
                </Carousel>
            </section>
        </Template >
    );
}

export default Home;
