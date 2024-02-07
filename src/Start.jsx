import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { Power3 } from "gsap";
import logo from "./logo.svg";

function Start() {
  const logoRef = useRef(null);
  const textItem = useRef(null);

  useGSAP(() => {
    const logo = logoRef.current;
    const text = textItem.current;
    gsap.to(logo, {
      duration: 0.9,
      opacity: 1,
      y: -20,
      ease: Power3.easeIn,
      delay: 0.1,
    });
    gsap.to(text, {
      duration: 0.8,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.4,
    });
  });
  return (
    <div className="gsap-edit">
      <img
        src={logo}
        ref={logoRef}
        className="App-logo"
        alt=""
        width={100}
        height={100}
      />
      <p ref={textItem}>Hi there , Manasseh is learning gsap</p>
    </div>
  );
}

export default Start;
