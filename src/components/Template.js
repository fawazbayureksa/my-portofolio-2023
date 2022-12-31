import React from 'react';

const Template = ({ children }) => {
    return (
        <div>
            <header>
                {/* <div className="logo">
                    Fawwaz Bayureksa
                </div> */}
                <nav>
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#skill">Skill</a>
                    <a href="#project">Project</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Template;
