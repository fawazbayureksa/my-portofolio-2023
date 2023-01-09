import React from 'react';
import { useRef, useEffect } from "react";

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

    return (
        <div className='bg-content'>
            <div className='container'>
                <header>
                    <nav className=''>
                        <a href="#about" className='animated-text'>ABOUT</a>
                        <a href="#education" className='animated-text'>EDUCATION</a>
                        <a href="#skill" className='animated-text'>SKILL</a>
                        {/* <a href="#project" className='animated-text'>PROJECT</a> */}
                        <a href="#contact" className='animated-text'>CONTACT</a>
                    </nav>
                </header>
            </div>
            <div className='container animated-text pb-5'>
                {children}
            </div>
            <section className='mt-5'>
                <footer className="d-flex justify-content-center">
                    <i className="fas fa-copyright mr-1"></i>
                    <h6 className='font-weight-bold'> Copyright Fawwaz Bayureksa 2023</h6>
                </footer>
            </section>
            <button ref={buttonRef} id='scroll-on-top-button'>
                <i className='fas fa-plane'></i>
            </button>
        </div>
    );
}

export default Template;
