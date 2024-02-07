import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { Power3 } from "gsap";
function Circle() {
  const circle = useRef(null);
  const circleRed = useRef(null);
  const circleBlue = useRef(null);
  return (
    <div>
      <div className="circle-container">
        <div className="circles " ref={circle}></div>
        <div className="circles circles-red" ref={circleRed}></div>
        <div className="circles circles-blue" ref={circleBlue}></div>
      </div>
    </div>
  );
}

export default Circle;
