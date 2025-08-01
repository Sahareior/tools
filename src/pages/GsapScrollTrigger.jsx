import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const GsapScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const leftRef = useRef();
  const rightRef = useRef();

  useGSAP(() => {
    const leftBoxes = gsap.utils.toArray(leftRef.current.children);
    const rightBoxes = gsap.utils.toArray(rightRef.current.children);

    leftBoxes.forEach((box) => {
      gsap.to(box, {
        x: 700,
        rotation: 360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });

    rightBoxes.forEach((box) => {
      gsap.to(box, {
        x: -350,
        rotation: -360,
        borderRadius: "100%",
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    });
  }, {scope: rightRef});

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>
        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

<div className="flex justify-between">
        {/* Left side boxes */}
      <div className="mt-20 w-full h-screen flex gap-5 justify-center" ref={leftRef}>
        <div className="scroll-box w-20 h-20 rounded-lg bg-pink-500" />
        <div className="scroll-box w-20 h-20 rounded-lg bg-orange-500" />
      </div>

      {/* Right side boxes with mirrored animation */}
      <div className="mt-20 w-full h-screen flex gap-5 justify-center" ref={rightRef}>
        <div className="scroll-box w-20 h-20 rounded-lg bg-blue-500" />
        <div className="scroll-box w-20 h-20 rounded-lg bg-green-500" />
      </div>
</div>
    </main>
  );
};

export default GsapScrollTrigger;
