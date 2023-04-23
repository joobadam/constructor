import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import pic3 from "../img/pic3.jpg"
import pic4 from "../img/pic4.jpg"
import { Link } from "react-router-dom";



export default function References() {
  gsap.registerPlugin(ScrollTrigger);
  const [t] = useTranslation("global");
  const referencesRef = useRef(null);

/*   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(referencesRef.current, {
        scrollTrigger: {
          trigger: ".referencesRef",
          start: "top bottom",
          toggleActions: "play none none none",
        },
        opacity: 0,
        duration: 1.5,
        delay: 1,
      });
    });
    return () => ctx.revert();
  }, []); */
  return (
    <section
      className="w-full h-fit flex justify-center items-center mx-auto max-w-screen-2xl px-2 my-10 text-white py-10 flex-wrap md:flex-nowrap gap-5  relative referencesRef "
      id="references"
      ref={referencesRef}
    >
         <label htmlFor="#references" className="absolute text-lg text-gray-900 uppercase font-bold top-0">{t("Referenciák")}</label> 
        <Link to="/residential" className="w-full md:w-1/2 h-[300px] md:h-[500px] shadow-xl hover:scale-95 duration-200 flex justify-center items-center text-xl hover:text-2xl hover:text-yellow-500 cursor-pointer">
            <img src={pic3} alt="új ház" className="object-cover object-center h-full w-full"/>
            <div className="absolute">
                <h3 className="z-30 uppercase font-bold">
                    {t("lakossági munkáink")}
                </h3>
            </div>
        </Link>
        <Link to="/industrilal" className="w-full md:w-1/2 h-[300px] md:h-[500px] shadow-xl hover:scale-95 duration-200 flex justify-center items-center text-xl hover:text-2xl hover:text-yellow-500 cursor-pointer">

            <img src={pic4} alt="új ház" className="object-cover object-center h-full w-full"/>
            <div className="absolute">
                <h3 className="z-30 uppercase font-bold">
                    {t("ipari munkáink")}
                </h3>
            </div>
        </Link>
    </section>
  );
}
