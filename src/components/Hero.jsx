import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import pic1 from "../img/pic1.jpg"
import { useTranslation } from "react-i18next";

export default function Hero() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [t] = useTranslation("global");
  const textRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let smoother = ScrollSmoother.create({
        content:"#content",
        smooth: 1.5,
        ignoreMobileResize: true,
        normalizeScroll: true,
        effects: true, 
      });
      smoother.effects("img", {speed:"auto"});
      gsap.from(textRef.current,{
        y:-100,
        opacity:0,
        duration:1.5,
        delay:.5
      })
    });
    return () => ctx.revert();

  }, []);
  return (
    <section id="content">
        <div className="relative overflow-hidden h-screen max-h-[800px] w-full flex justify-center items-center text-white uppercase text-4xl sm:text-5xl font-bold max-w-screen-2xl mx-auto">
            <div className="z-20 mx-5 tracking-wider textRef " ref={textRef}>
                <h2 className="shadow-2xl bg-black/40 w-fit rounded-xl text-center py-2">{t("Minőségi szolgáltatások versenyképes áron")}</h2>
                <h2 className="text-lg sm:text-xl mt-2 text-yellow-500">{t("Találd meg a legjobb megoldást nálunk")}</h2>
            </div>
            <img src={pic1} alt="megbízható építkezés" className="absolute w-full object-cover object-center bottom-0 sm:h-[160%] h-full mx-auto"/>
        </div>
    </section>
  );
}
