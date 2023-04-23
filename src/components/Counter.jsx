import React, { useEffect, useRef } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Counter() {
  const [t] = useTranslation("global");
  gsap.registerPlugin(ScrollTrigger);
  const counterRef = useRef(null);

/*   useEffect(() => {
    let counterAnimate = gsap.from(counterRef.current, {
      scrollTrigger: {
        trigger: ".counterRef",
        start: "top bottom",
        toggleActions: "play none none none",
      },
      opacity: 0,
      duration: 1,
    });
    return () => counterAnimate.revert();
  }, []); */
 
  return (
    <div>
      <div
        className="max-w-screen-2xl mx-auto flex flex-wrap md:flex-nowrap gap-5 px-10 counterRef my-10"
        ref={counterRef}
      >
        <div className="w-full md:w-1/3 flex justify-center items-center flex-col">
          <div className="flex justify-center items-center w-20 h-20 border-4 relative">
            <div className="h-24 w-14 bg-gray-900  justify-center items-center flex">
              <CountUp
                end={75}
                duration={6}
                delay={5}
                className="text-2xl text-yellow-500"
              />
              +
            </div>
          </div>
          <div>
            <h3 className="uppercase mt-1">{t("elégedett ügyfél")}</h3>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center gap-y-3 flex-col">
          <div className="flex justify-center items-center w-20 h-20 border-4 relative">
            <div className="h-24 w-14 bg-gray-900 justify-center items-center flex">
              <CountUp
                end={23}
                duration={6}
                delay={5}
                className="text-2xl text-yellow-500"
              />
              +
            </div>
          </div>
          <div>
            <h3 className="uppercase mt-1">{t("projekt")}</h3>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center gap-y-5 flex-col">
          <div className="flex justify-center items-center w-20 h-20 border-4 relative">
            <div className="h-24 w-14 bg-gray-900  justify-center items-center flex">
              <CountUp
                end={10}
                duration={6}
                delay={5}
                className="text-2xl text-yellow-500"
              />
              +
            </div>
          </div>
          <div>
            <h3 className="uppercase mt-1">{t("év tapasztalat")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
