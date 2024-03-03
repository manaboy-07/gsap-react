import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Stagger() {
  const mybox = useRef();
  useGSAP(() => {
    gsap.to(
      ".boxes",
      {
        x: 200,
        y: 100,
        // scale: 0,
        duration: 1,
        delay: 0.1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,

        stagger: {
          // wrap advanced options in an object
          each: 0.2,

          from: "start",
          //   grid: "auto",
          ease: "power2.inOut",
          //   repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
        },
      },
      { scope: mybox }
    );
  });
  return (
    <div>
      <div ref={mybox} className="mybox">
        <div className="boxes">Box 1</div>
        <div className="boxes">Box 2</div>
        <div className="boxes">Box 3</div>
        <div className="boxes">Box 4</div>
        <div className="boxes">Box 1</div>
        <div className="boxes">Box 2</div>
        <div className="boxes">Box 3</div>
        <div className="boxes">Box 4</div>
      </div>
    </div>
  );
}

export default Stagger;
