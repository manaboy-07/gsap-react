import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import logo from "./logo.svg";

function Start() {
  const logoRef = useRef(null);
  const textItem = useRef(null);

  useGSAP(() => {
    const logo = logoRef.current;
    const text = textItem.current;
    gsap.to(logo, {
      duration: 0.8,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(text, {
      duration: 0.8,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.3,
    });
  });
  return (
    <div className="gsap-edit">
      <img src={logo} ref={logoRef} alt="" />
      <p ref={textItem}>Hi there , Manasseh is learning gsap</p>
    </div>
  );
}

export default Start;
