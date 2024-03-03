import { useState, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Start from "./Start";
import Circle from "./Circle";
import ImageSlider from "./ImageSlider";
function App() {
  const boxRef = useRef(null);
  const boxShift = useRef(null);
  const container = useRef();
  const [endx, setEndx] = useState(0);
  const randomX = gsap.utils.random(-200, 800, 1, true);

  useGSAP(() => {
    const box = boxRef.current;

    gsap.to(box, {
      duration: 1,
      x: 200,
      y: 400,
      rotation: 360,
      ease: "power2.inOut",
    });
  });
  // or using scope
  // useGSAP(
  //   () => {
  //     gsap.from(".circle", {
  //       scale: 0,
  //       duration: 1,
  //       repeat: -1,
  //       ease: "power2.inOut",
  //       yoyo: true,
  //       stagger: {
  //         each: 0.2,
  //       },
  //     });
  //   },
  //   { scope: container }
  // );
  useGSAP(
    () => {
      gsap.to(".boxX", {
        x: endx,
        duration: 1,
      });
    },
    { dependencies: [endx], scope: boxShift }
  );

  //or using it with state
  // useEffect(() => {
  //you can use class as wee
  //check youtube if you want it reverted
  // }, []);
  //** **//
  //YT: https://www.youtube.com/watch?v=l0aI8Ecumy8&t=620s

  return (
    <>
      <ImageSlider />
    </>
  );
}

export default App;
