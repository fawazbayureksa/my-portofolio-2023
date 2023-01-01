import React from 'react';

const Template = ({ children }) => {
    return (
        <div className='bg-content'>
            <div className='container'>
                <header>
                    <nav className=''>
                        <a href="#about" className='animated-text'>ABOUT</a>
                        <a href="#education" className='animated-text'>EDUCATION</a>
                        <a href="#skill" className='animated-text'>SKILL</a>
                        <a href="#project" className='animated-text'>PROJECT</a>
                        <a href="#contact" className='animated-text'>CONTACT</a>
                    </nav>
                </header>
            </div>
            <div className='container animated-text pb-5'>
                {children}
            </div>
        </div>
    );
}

export default Template;
