import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

const Navbar = () => {
    const navRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        // Set initial styles (purple background)
        gsap.set(navRef.current, {
            backgroundColor: '#800080'
        });

        // Animation for scroll effect
        gsap.to(navRef.current, {
            backgroundColor: 'rgba(128, 0, 128, 0.8)', // slightly transparent purple
            backdropFilter: 'blur(40px)',
            duration: 0.5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: document.body, // or use a specific section
                start: 'top top', // when top of viewport hits top of trigger
                end: '+=100', // 100px scroll distance
                toggleActions: 'play none none reverse',
                scrub: true // smooth scrubbing effect
            }
        });
    }, []);

    return (
        <div>
            <div
                ref={navRef}
                  className='flex fixed z-50 w-full py-6 px-10 justify-between items-center transition-all duration-500 text-black'
                style={{
                    // Initial styles (will be overridden by GSAP)
                    backgroundColor: '#800080',
                    transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease'
                }}
            >
                <p className="text-white">Hello there</p>
                <div className='flex items-center gap-4 text-white'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Category</h3>
                    <h3>Others</h3>
                </div>
            </div>
        </div>
    );
};

export default Navbar;