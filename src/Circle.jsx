import React from "react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { Power3 } from "gsap";

function Circle() {
  const circle = useRef(null);
  const app = useRef(null);
  const circleRed = useRef(null);
  const circleBlue = useRef(null);
  const [circleState, setCircleState] = useState(false);

  const toggleExpand = () => {
    setCircleState((prevState) => !prevState);
  };

  useGSAP(
    () => {
      gsap.to(circleRed.current, {
        width: circleState ? 292 : 75,
        height: circleState ? 200 : 75,
        ease: Power3.easeOut,
      });
    },
    { dependencies: [circleState] }
  );
  useGSAP(() => {
    const circleRef = circle.current;
    const circleRedRef = circleRed.current;
    const circleBlueRef = circleBlue.current;
    gsap.to(app.current, {
      duration: 0,
      css: { visibility: "visible" },
    });
    gsap.from(circleRef, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.4,
    });
    gsap.from(circleRedRef, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.6,
    });
    gsap.from(circleBlueRef, {
      opacity: 0,
      x: 40,
      ease: Power3.easeOut,
      delay: 0.9,
    });
  });
  //Check stagger
  return (
    <div className="App-circle" ref={app}>
      <div className="circle-container">
        <div className="circles" ref={circle}></div>
        <div
          className="circles circles-red"
          onClick={toggleExpand}
          ref={circleRed}
        ></div>
        <div className="circles circles-blue" ref={circleBlue}></div>
      </div>
    </div>
  );
}

export default Circle;
