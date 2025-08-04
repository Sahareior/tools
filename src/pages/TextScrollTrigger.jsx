import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const TextScrollTrigger = () => {
  const [letterRef, setLetterRef] = useArrayRef();

  function useArrayRef() {
    const latterRef = React.useRef([]);
    latterRef.current = [];
    return [
      latterRef,
      (el) => {
        el && latterRef.current.push(el);
      },
    ];
  }
  const triggerRef = React.useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() =>{
const reval = gsap.to(letterRef.current, {
    scrollTrigger: {
      trigger: triggerRef.current,
      start: "top center",
      end: "bottom 80%",
      scrub: true,
    },
    color: "#2A2A2A",
    duration: 5,
    stagger: 1
  });  
  return () => {
    reval.kill();
  };
  },[])

    const text =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis in nobis tempora inventore ipsam id rem a ducimus itaque dicta facere temporibus voluptas nulla quo exercitationem libero, illum incidunt.";
  return (
    <div>
     <div className="spacing-small"></div>
<div className="reveal">
    <div ref={triggerRef}>
          {text.split(" ").map((word, index) => (
        <span
            ref={setLetterRef}
          key={index}
          className="reveal-text"
          style={{ transitionDelay: `${index * 50}ms` }}
        >
          {word}{" "}
        </span>
      ))}
</div>
</div>
  <div className="spacing"></div>
    </div>
  );
};

export default TextScrollTrigger;
