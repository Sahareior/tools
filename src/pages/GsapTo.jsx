import {useGSAP} from "@gsap/react"
import gsap from "gsap";

const GsapTo = () => {
  // TODO: Implement the gsap.to() method

  // useGSAP(()=>{
  //   gsap.from('#blue-box', {
  //     c:250,
  //     repeat: -1,
  //     yoyo:true,
  //     rotation: 260,
  //     duration:2,
  //     ease: 'back.out'
  //   })
  // },[])

//   useGSAP(()=>{
//     gsap.fromTo('#blue-box', {
//       x:0,
//       // repeat: -1,
//       borderRadius: '0%',
//       // yoyo:true,
//       rotation: 260,
//       // duration:2,
//       // ease: 'back.out'
//     },{
// x: 250,
// repeat: -1,
// yoyo: true,
// rotation: 360,
// borderRadius: '100%',
// duration: 3,
// ease: 'expo.in'
//     })
//   },[])


const timeline = gsap.timeline({
  repeat: -1, repeatDelay: 1, yoyo: true
});


useGSAP(()=>{
timeline.to('#blue-box', {
  x: 250,
  rotation: 360,
  borderRadius: '100%',
  duration: 2,
  ease: 'back.inOut'
})
timeline.to('#blue-box', {
  x: 500,
  scale:1,
  rotation: 360,
  borderRadius: '10%',
  duration: 2,
  ease: 'back.inOut'
})
},[])





  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
