import React from 'react';
import Template from '../components/Template';
const Home = () => {
    return (
        <Template>
            <section className="section-one ml-3">
                <div className='text-section-one'>
                    <h1 className='text-h1-bold'>Hello! My Name Is</h1>
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
                <h3 className='text-h3-bold text-center'>About</h3>
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
                <hr className='line' />
                <h3 className='text-h3-bold text-center'>Education</h3>
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
            </section>
        </Template >
    );
}

export default Home;
