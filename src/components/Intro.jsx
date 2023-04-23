import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";
import Counter from "./Counter";

export default function Hero() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const [t] = useTranslation("global");
  const introRef = useRef(null);

/*   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(introRef.current, {
        scrollTrigger: {
          trigger: ".introRef",
          start: "top bottom",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []); */
  return (
    <section
      className="w-full h-fit flex justify-center items-center mx-auto max-w-screen-2xl sm:px-10 my-2 text-white py-10 "
      id="about"
    >
      <div
        className="p-10 text-lg introRef shadow-2xl bg-gray-900  leading-8"
        ref={introRef}
      >
        <p>{t("Üdvözöljük az RS Home weboldalán, ahol a házépítés, felújítás és nagyobb épületek, csarnokok építése terén nyújtunk magas színvonalú szolgáltatásokat. Tapasztalt csapatunk segítségével személyre szabott megoldásokat kínálunk minden ügyfelünknek. A weboldalunkon megtekintheti korábbi projekteinket, és tájékozódhat szolgáltatásaink széles köréről. Célunk, hogy segítsünk Önnek megvalósítani az álmai otthonát vagy az ideális irodaházat, és az építkezés minden fázisában segítségére legyünk. Keressen minket ma, hogy elkezdjük az együttműködést!")}</p>
        <Counter />
        <div className="w-full flex justify-center shadow-xl ">
          <button
            className="bg-yellow-500 rounded-xl text-white w-44 h-11 hover:bg-stone-200 hover:text-black hover:duration-200 hover:scale-110 duration-200 shadow-xl mt-5"
            onClick={() =>
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: "#contact", offsetY: 90 },
              })
            }
          >
            {t("Kapcsolat")}
          </button>
        </div>
      </div>
    </section>
  );
}
