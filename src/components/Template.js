import React from 'react';
import { useRef, useEffect } from "react";

const Template = ({ children }) => {

    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        };

        button.addEventListener("click", scrollToTop);

        return () => {
            button.removeEventListener("click", scrollToTop);
        };
    }, []);

    return (
        <div className='bg-content'>
            <a href="#main-content" className='skip-link'>Skip to main content</a>
            <div className='container'>
                <header>
                    <nav aria-label='Primary navigation'>
                        <a href="#about" className='animated-text'>ABOUT</a>
                        <a href="#education" className='animated-text'>EDUCATION</a>
                        <a href="#experience" className='animated-text'>EXPERIENCE</a>
                        <a href="#project" className='animated-text'>PROJECTS</a>
                        <a href="#skill" className='animated-text'>SKILL</a>
                        <a href="#faq" className='animated-text'>FAQ</a>
                        <a href="#contact" className='animated-text'>CONTACT</a>
                    </nav>
                </header>
            </div>
            <main id='main-content' className='container animated-text pb-5'>
                {children}
            </main>
            <footer className='mt-5 d-flex justify-content-center'>
                <i className="fas fa-copyright mr-1" aria-hidden="true"></i>
                <p className='font-weight-bold mb-0'>2026 | Fawwaz Bayureksa</p>
            </footer>
            <button ref={buttonRef} id='scroll-on-top-button' type='button' aria-label='Scroll back to top'>
                <i className='fas fa-plane' aria-hidden="true"></i>
            </button>
        </div>
    );
}

export default Template;
