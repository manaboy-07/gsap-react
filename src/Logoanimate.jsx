import React from "react";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { Power3 } from "gsap";
import logo from "./logo.svg";
function Logoanimate() {
  const logoRef = useRef();
  useGSAP(() => {
    gsap.from(logoRef.current, {
      duration: 2,
      delay: 0.5,
      scale: 2.3,
      grid: "center",
      opacity: 0.4,
      xPercent: 250,
      y: 200,
      ease: Power3.easeInOut,
    });
  });
  return (
    <div>
      <img
        ref={logoRef}
        src={logo}
        className=""
        alt=""
        width={200}
        height={200}
      />
    </div>
  );
}

export default Logoanimate;
