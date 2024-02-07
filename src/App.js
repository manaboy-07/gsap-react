import { useState, useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Start from "./start";
function App() {
  const boxRef = useRef(null);
  const boxShift = useRef(null);
  const container = useRef();
  const [endx, setEndx] = useState(0);
  const randomX = gsap.utils.random(-200, 800, 1, true);

  // useGSAP(() => {
  //   const box = boxRef.current;

  //   gsap.to(box, {
  //     duration: 1,
  //     x: 200,
  //     y: 400,
  //     rotation: 360,
  //     ease: "power2.inOut",
  //   });
  // });
  //or using scope
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
    <div>
      <div
        ref={boxRef}
        style={{ width: "100px", height: "100px", background: "blue" }}
      >
        {/* Your component content */}
        <div ref={container} className="container">
          <div className="circle">1</div>
          <div className="circle">2</div>
          <div className="circle">3</div>
          <div className="circle">4</div>
        </div>
        {/* Using dependencies or state */}
        <div className="boxshift" ref={boxShift}>
          <button onClick={() => setEndx(randomX())}>
            Pass in a random varable
          </button>
          <div className="boxX">{endx}</div>
        </div>
      </div>
      <div>
        <Start />
      </div>
    </div>
  );
}

export default App;
