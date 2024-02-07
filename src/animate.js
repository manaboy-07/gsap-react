import { gsap } from "gsap";
export const scaleAnimation = (element, duration) => {
  return gsap.from(element, {
    duration: 1,
    x: 200,
    y: 400,
    rotation: 360,
    ease: "power2.inOut",
  });
};

//gsap.from(".circle", {duration: 1, opacity: 0, y: 150, stagger: 0.25})
//The above animates circles with different time variation(stagger)
//you can also use a random y value , y: () => Math.random() * 400 -200
//or "random(-200-200)"

//Control Methods
//var tl = gsap.timeline()
//timeline({yoyo: true}) reverses the animation process
// you can use tl.from, tweens dont overlap
//Sign up in gsap i.e club greensock