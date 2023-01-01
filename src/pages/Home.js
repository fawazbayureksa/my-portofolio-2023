import React from 'react';
import Template from '../components/Template';
const Home = () => {
    return (
        <Template>
            <div className="section-one ml-3">
                <div>
                    <h1 className='text-h1-bold'>Hello! My Name Is</h1>
                    <h1 className='text-h1-bold'>Fawwaz Bayureksa</h1>
                    <h3 className='text-h3'>Junior Front-End Web & Mobile Developer</h3>
                    <div className='d-flex align-items-center py-3'>
                        <button className='btn bg-E01685 text-white mr-2 btn-md'>Curiculum Vitae</button>
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
            </div>
            <div className='section-two ml-3'>
                <hr className='line' />
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='text-center'>
                            <img src='/images/pict.jpg' className='my-pict' alt='my-pict' />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h3 className='text-h3-bold'>Who i am ?</h3>
                        <p className='text-justify text-about'>
                            i'm a Associate's degree From informatics management study program at
                            Politeknik LP3I Makassar based in Makassar, Indonesia , i've passion and motivation
                            Tall, fast in learning and adapting skilled in making websites & mobile app
                            i currently work as Front-End Developer
                        </p>
                    </div>
                </div>
            </div>
        </Template>
    );
}

export default Home;
