import React from 'react';
import Template from '../components/Template';
import { skill } from './helpers/constant'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
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

    const history = useHistory()
    const onCv = () => {
        history.pathname("https://drive.google.com/file/d/12DAb8ycedXIViT5XNS0HJnDNiOgKl40A/view?usp=share_link")
    }
    {/* <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" /> */ }
    return (
        <Template>
            <section className="section-one ml-3">
                <div className='text-section-one'>
                    <h1 className='text-h1-bold'>Hello! My Name is</h1>
                    <h1 className='text-h1-bold'>Fawwaz Bayureksa</h1>
                    <h3 className='text-h3'>Front-End Web & Mobile Developer</h3>
                    <div className='d-flex align-items-center py-3'>
                        <a target="_blank" href='https://drive.google.com/file/d/12DAb8ycedXIViT5XNS0HJnDNiOgKl40A/view?usp=share_link' className='button mr-2'>Curiculum Vitae</a>
                        <a className='link' target="_blank" href="https://github.com/fawazbayureksa/" >
                            <i className="fab fa-github icon"></i>
                        </a>
                        <a className='link' target="_blank" href="https://gitlab.com/fawazbayureksa" >
                            <i className="fab fa-gitlab icon"></i>
                        </a>
                        <a className='link' target="_blank" href="https://www.linkedin.com/in/fawwaz-bayureksa-406b891a3/" >
                            <i className="fab fa-linkedin icon"></i>
                        </a>
                        <a className='link' target="_blank" href="https://twitter.com/FawazBayureksa" >
                            <i className="fab fa-twitter icon"></i>
                        </a>
                    </div>
                </div>
                <div className='bg-section-one'>
                    <img className='ml-0' src='./images/astronot.png' alt='astronot' />
                </div>
            </section>
            <section className='section-two ml-3'>
                <hr className='line' />
                <h3 className='text-h3-bold text-center'>ABOUT</h3>
                <div className='d-flex align-items-center'>
                    <div className='col-md-6'>
                        <div className='text-center'>
                            <img src='./images/pict.jpg' className='my-pict' alt='my-pict' />
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
                            <img className='ml-0' src='./images/astronot3.png' alt='astronot' />
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
                        <div className='card-skills mb-3' key={index}>
                            <img src={`./images/${i.logo}`} alt='javascript' />
                        </div>
                    ))}
                </Carousel>
            </section>
            <section className='mt-5'>
                {/* <hr className='line' /> */}
                <h3 className='text-h3-bold text-center mb-3'>CONTACTS</h3>
                <div className='row justify-content-around'>
                    <div className='col-md-6'>
                        <div className='d-flex mt-3'>
                            <i className="far fa-envelope mr-1"></i>
                            <h6 className='font-weight-bold'>fawwazbayureksa@gmail.com</h6>
                        </div>
                        <div className='d-flex mt-3'>
                            <i className="fas fa-phone-alt mr-1"></i>
                            <h6 className='font-weight-bold'>+6282394418669</h6>
                        </div>
                        <div className='d-flex mt-3'>
                            <i className="fas fa-map-marker-alt mr-1"></i>
                            <h6 className='font-weight-bold'>Makassar</h6>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfepvjX1lcQbWGmnqlSVKcW3tTU4YlCilNGmrKHZDO2TC3ukw/formResponse
                    "target="_blank" method="post"
                        >
                            <div >
                                <input type="email" className="form-control mt-3" placeholder="Your E-mail" name="entry.178149943" required />
                            </div>
                            <div >
                                <textarea className="form-control mt-3" placeholder="Message" name="entry.315198414" required></textarea>
                            </div>
                            <div className="mt-3">
                                <button type="submit" name="submit" className="mt-2">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Template >
    );
}

export default Home;
