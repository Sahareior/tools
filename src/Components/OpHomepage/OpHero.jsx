import React, { useMemo } from 'react';
import backgroundImage from '/images/Image-1.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const OpHero = () => {
  const animationSettings = useMemo(() => ({
    moon: {
      scale: 1.01,
      duration: 11,
      ease: 'power2.inOut'
    },
    heading: {
      scale: 1.05,
      duration: 10,
      ease: 'power2.inOut'
    },
    background: {
      scale: 1.15,
      duration: 12,
      ease: 'power2.inOut'
    }
  }), []);

  useGSAP(() => {
    gsap.set(['.couples', '.moon', '.heading', '.background-zoom'], {
      willChange: 'transform'
    });

    gsap.fromTo('.couples', {
      y: 0
    }, {
      y: 240,
      duration: 1,
      ease: 'power2.out'
    });

    const sharedProps = {
      repeat: -1,
      yoyo: true,
      transformOrigin: 'center center'
    };

    gsap.fromTo('.moon', 
      { scale: 0.5 },
      { ...animationSettings.moon, ...sharedProps }
    );

    gsap.fromTo('.heading',
      { scale: 1 },
      { ...animationSettings.heading, ...sharedProps }
    );

    gsap.fromTo('.background-zoom',
      { scale: 1 },
      { ...animationSettings.background, ...sharedProps }
    );

    return () => {
      gsap.set(['.couples', '.moon', '.heading', '.background-zoom'], {
        willChange: 'auto'
      });
    };
  }, [animationSettings]);

  return (
    <div className="relative h-screen w-full flex justify-center overflow-hidden items-center bg-black">
      {/* Background zoom layer */}
      <div
        className="background-zoom overflow-hidden absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h4 className="text-8xl heading font-bold text-white relative top-32">
          THE UNKNOWN
        </h4>
        <img className="moon z-0" src="/images/Image-2.png" alt="Moon" loading="eager" />
        <img className="couples bottom-0 absolute z-10" src="/images/Image-3.png" alt="Couples" loading="eager" />
      </div>
    </div>
  );
};

export default OpHero;
