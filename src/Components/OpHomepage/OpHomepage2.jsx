import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useMemo } from 'react';

const OpHomepage2 = ({active}) => {




  const animationSettings = useMemo(() => ({
    background: {
      scale: 1.2,
      duration: 3,
      ease: 'power2.inOut'
    }
  }), []);

  useGSAP(() => {
    gsap.set(['.man', '.background-zoom', '.text-container'], {
      willChange: 'transform, opacity'
    });

    // Animate the man: move and scale up
// Animate the man: scale together with background zoom
gsap.fromTo('.man', {
  scale: 1,
  x: 0,
  y: 0,
}, {
  scale: 1.2, // Same as background
  x: 120,     // Adjust based on zoom to make it look like it's anchored
  y: -70,
  duration: 3,
  ease: 'power2.inOut',
});


    // Animate the background zoom (now won't affect text)
    gsap.fromTo('.background-zoom',
      { scale: 1 },
      { ...animationSettings.background }
    );

    // Animate text container (isolated from background)
    // gsap.from('.', {
    //   opacity: 0,
    //   duration: 1,
    //   ease: 'power3.out',
    //   delay: 0.5,
    // });

    // Animate subtext within the isolated container
    // gsap.from('.subtext', {
    //   opacity: 0,
    //   x: 100,
    //   duration: 2.5,
    //   ease: 'power2.out',
    //   delay: 1,
    // });

    return () => {
      gsap.set(['.man', '.background-zoom', '.text-container'], {
        willChange: 'auto'
      });
    };
  }, [animationSettings,active]);

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background with zoom effect */}
      <div
        className="absolute inset-0 background-zoom"
        style={{
          backgroundImage: 'url(/images/Image-4.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Man image */}
      <img
        className="absolute man bottom-0 left-1"
        src="/images/Image-5.png"
        alt="Man standing"
      />

      {/* Text container (positioned independently of background) */}
      <div className="text-container absolute inset-0 pointer-events-none">
        <h5 className="text-7xl absolute font-bold bottom-60 right-32 text-white subtext">
          INTO THE UNSEEN
        </h5>
      </div>
    </div>
  );
};

export default OpHomepage2;