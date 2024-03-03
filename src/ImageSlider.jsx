import React from "react";
import landscape from "./img/landscape.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { Power2 } from "gsap";

function ImageSlider() {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(
      container.current,
      { duration: 1 },
      { css: { visibility: "visible" } }
    );
    tl.to(
      imageReveal,
      { duration: 1.4 },
      { width: "0%", ease: Power2.easeInOut }
    );
    tl.from(
      image.current,
      { duration: 1.4 },
      { scale: 1.6, ease: Power2.easeInOut, delay: -1.6 }
    );
  });
  return (
    <section className="main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="container" ref={container}>
        <>
          <div className="img-container">
            <img ref={image} src={landscape} />
          </div>
        </>
      </div>
    </section>
  );
}

export default ImageSlider;
