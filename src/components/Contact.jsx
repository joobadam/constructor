import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineMailOpen } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import { Form } from "./Form";


export default function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  const [t] = useTranslation("global");
  const contactRef = useRef(null);

/*   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(contactRef.current, {
        scrollTrigger: {
          trigger: "#contact",
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
    <div
      className="w-full h-fit flex justify-center items-center mx-auto max-w-screen-2xl px-2 my-10 text-white py-20 flex-wrap md:flex-nowrap gap-8 relative text-md leading-6 shadow-xl"
      id="contact"
      ref={contactRef}
    >
         <label htmlFor="#contact" className="absolute text-lg text-gray-900 uppercase font-bold top-5">{t("Kapcsolat")}</label> 
        <div className="w-full grid md:grid-cols-2 md:grid-rows-1 gap-5">
            <div className="w-full p-10 bg-gray-900 text-white flex gap-10 justify-center items-center flex-col">
                <div>
                    <h2 className="text-yellow-500 uppercase">
                        {t("Lépj velünk kapcsolatba")}
                    </h2>
                </div>
                <div>
                    <p className="text-sm">
                        {t("Ha szeretnél egy új otthont építeni, vagy meglévő ingatlanodat felújítani, mi vagyunk az Önök álmai megvalósítói. Tegyük valóra álmaitokat és hozzuk létre a tökéletes otthont! Ne habozz kapcsolatba lépni velünk még ma!")}
                    </p>
                </div>
                <div>
                    <div className="flex gap-x-5">
                        <HiOutlineMapPin size={30} />
                        <div className="flex justify-center items-center">
                            <p className="text-sm">6721 Szeged, Szűcs u.18/B</p>
                        </div>
                    </div>
                    <div className="flex gap-x-5 my-5">
                    <HiOutlinePhone size={30} />
                        <div className="flex justify-center items-center">
                            <p className="text-sm">+36709078729</p>
                        </div>
                    </div>
                    <div className="flex gap-x-5">
                    <HiOutlineMailOpen size={30} />
                        <div className="flex justify-center items-center">
                            <p className="text-sm">rshome@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
                <Form/>
        </div>
    </div>
  );
}
