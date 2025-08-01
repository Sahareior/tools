import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef();
  const videoref = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const video = videoref.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container, // ✅ pin the full section, not the video
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
    });

    const handleLoaded = () => {
      tl.to(video, {
        currentTime: video.duration,
        ease: 'none',
      });
    };

    if (video.readyState >= 1) {
      handleLoaded();
    } else {
      video.onloadedmetadata = handleLoaded;
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full z-10">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoref}
          src="/input.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full video"
        />
   
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-white  px-4">
        <h1 className="text-4xl absolute top-36 md:text-6xl font-bold">Welcome to Our Journey</h1>
      </div>
    </section>
  );
};

export default Hero;
