import React from 'react';
import img from '/a.png'
import Dounats from './Dounats';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Flip } from 'gsap/Flip';
import DepoCard from './DepoCard';

const donutCards = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1644845795925-da6cee5f7c3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Strawberry Nova',
    desc: 'Juicy bursts of berry fused with cosmic cream. One bite is a supernova.',
  },
  {
    id: 2,
    img: 'https://plus.unsplash.com/premium_photo-1661290215759-0bdf89db7d14?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Galaxy Glaze',
    desc: 'Swirled with stardust and sweet nebula drizzle. Taste the universe.',
  },
  {
    id: 3,
    img: '', // this will trigger the special `third` animation donut
    title: 'Quantum Sprinkle',
    desc: 'Futuristic sprinkle pattern shifting at subatomic speed. Observe it... or eat it.',
  },
  {
    id: 4,
    img: 'https://plus.unsplash.com/premium_photo-1679341700428-e5e2a677ec66?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Hyper Choco',
    desc: 'Dark matter fudge swirled in rich hyperspace cocoa. It bends time.',
  },
  {
    id: 5,
    img: 'https://plus.unsplash.com/premium_photo-1664472607092-2f28b4b14b55?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Alien Matcha',
    desc: 'Earth-grown matcha reimagined with alien enzymes. Smooth, strange, addictive.',
  },
  {
    id: 6,
    img: 'https://plus.unsplash.com/premium_photo-1677591560135-94f160bee6e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cyber Crunch',
    desc: 'A glitchy crunch layer over silky AI-frosted core. Bytes you back.',
  },
];


const OpScroll = () => {

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger, Flip);
  
  gsap.context(() => {
    // Short delay to ensure conditional rendering completes
    setTimeout(() => {
      const secondState = Flip.getState('.second', { create: false });
      const thirdState = Flip.getState('.third', { create: false });
      
      const flipConfig = {
        rotate: -360,
        ease: 'none',
        duration: 1,
        immediateRender: false
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-1',
          start: 'clamp(center center)',
          endTrigger: "third",
          end: 'clamp(center top)',
          scrub: 1,
          ease: 'none',
        }
      });

      tl
        .add(Flip.fit(".donut", secondState, flipConfig))
        .add(Flip.fit(".donut", thirdState, flipConfig)); // Corrected selector
    }, 100); // 100ms delay for rendering
  });
});
  return (
   <div>
      {/* Hero section */}
      <section className="relative h-screen section-1">
        <div
          className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-center"
         
        ></div>

        <div className="flex justify-center  items-center h-full relative">
          <div className="text-white flex text-[13rem] z- uppercase tracking-widest z-10">
            <h1>Dou</h1>
            <h1>nts</h1>
          </div>

          <div
            className="absolute donut bg-cover  bg-center z-50 h-96 w-96 "
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
      </section>

      {/* Second Section */}
<section className="relative h-screen bg-gradient-to-br from-amber-100 via-pink-100 to-fuchsia-200 overflow-hidden">
  <div className="h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-28 px-6 lg:px-24 py-16">
    {/* 🔮 Futuristic Card */}
    <div className="second h-72 w-72 rounded-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-[0_0_60px_#ff00ff50] transition-transform hover:scale-105 duration-500"></div>

    {/* 📝 Text Content */}
    <div className="max-w-xl text-center lg:text-left space-y-6">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 drop-shadow-lg">
        Where Every Bite is Worth <br className="hidden sm:block" /> the Calories
      </h2>
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed tracking-wide">
        Bite into the future. We’re not just making donuts — we’re reshaping taste. Experience indulgence engineered for joy, crafted for the bold.
      </p>
      <button className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-300">
        Explore More
      </button>
    </div>
  </div>
</section>


      <section className='relative flex items-center justify-center h-screen p-20'>
          <div className='grid grid-cols-3 gap-24 place-content-center'>
{donutCards.map((donut, index) => (
  <DepoCard key={donut.id} img={donut.img} title ={donut.title} des ={donut.desc} indx={index + 1} />
))}
          </div>
      </section>
    </div>
  );
};

export default OpScroll;
