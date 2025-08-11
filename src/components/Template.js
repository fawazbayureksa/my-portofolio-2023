import React, { useState } from 'react';
import { useRef, useEffect } from "react";
import { Tooltip } from 'react-tooltip';

const Template = ({ children }) => {

    const buttonRef = useRef(null);

    // Menjalankan efek setelah setiap render
    useEffect(() => {
        // Mengakses elemen DOM menggunakan referensi DOM
        const button = buttonRef.current;

        // Menambahkan event listener ke elemen DOM
        button.addEventListener("click", () => {
            // Mengatur posisi scroll ke atas halaman
            window.scrollTo({
                top: 0, // Atas halaman
                left: 0, // Kiri halaman
                behavior: "smooth", // Gerakan yang halus
            });
        });

        // Menghapus event listener saat component unmount
        return () => {
            button.removeEventListener("click", () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
            });
        };
    }, []); // Jangan jalankan efek lagi saat dependencies berubah

    const [primaryColor, setPrimaryColor] = useState('#236316');
    const [secondaryColor, setSecondaryColor] = useState('#ecf249');
    const [accentColor, setAccentColor] = useState('#d628ab');
    const [showWelcome, setShowWelcome] = useState(false);

  // Apply the colors to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    document.documentElement.style.setProperty('--accent-color', accentColor);
    
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (!hasVisitedBefore) {
      setShowWelcome(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, [primaryColor, secondaryColor,accentColor]);

    return (
        <div className='bg-content'>
            <div className='container'>
                <header>
                    <nav className=''>
                        <a href="#about" className='animated-text'>ABOUT</a>
                        <a href="#education" className='animated-text'>EDUCATION</a>
                        <a href="#experience" className='animated-text'>EXPERIENCE</a>
                        <a href="#project" className='animated-text'>PROJECTS</a>
                        <a href="#skill" className='animated-text'>SKILL</a>
                        <a href="#contact" className='animated-text'>CONTACT</a>
                    </nav>
                </header>
                
            </div>
            <div className='container animated-text pb-5'>
                 {/* Tooltip for Color Pickers */}
                <Tooltip
                    id="color-tooltip"
                    place="bottom"
                    content="Click to change theme colors!"
                    openOnMount={showWelcome}
                />
                {children}
            </div>
            <section className='mt-5'>
                <footer className="d-flex justify-content-center">
                    <i className="fas fa-copyright mr-1"></i>
                    <h6 className='font-weight-bold'> Copyright Fawwaz Bayureksa 2025</h6>
                </footer>
            </section>
            <button ref={buttonRef} id='scroll-on-top-button'>
                <i className='fas fa-plane'></i>
            </button>
            <div className="color-picker">
                <label>
                    Primary:
                    <input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)}/>
                </label>
                <label>
                    Secondary: <input type="color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)}/>
                </label>
                <label>
                    Accent: <input type="color" value={accentColor} onChange={(e) => setAccentColor(e.target.value)}/>
                </label>
            </div>
              {showWelcome && (
                <div className="welcome-popup">
                    <div className="popup-content">
                        <span>🎨 Customize Your Experience!</span>
                        <p>
                            You can change the theme colors using the color pickers in the footer.
                            Try it out!
                        </p>
                        <button onClick={() => setShowWelcome(false)}>Got it!</button>
                    </div>
                </div>
            )}
             {showWelcome && (
                <div className="floating-hint">
                    <span>🎨 Click the color picker to customize!</span>
                    <button onClick={() => setShowWelcome(false)}>✕</button>
                </div>
            )}
    </div>
    );
}

export default Template;
