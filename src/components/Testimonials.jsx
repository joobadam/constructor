import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";


export default function Testimonials() {
  gsap.registerPlugin(ScrollTrigger);
  const [t] = useTranslation("global");
  const tesimonialsRef = useRef(null);

/*   useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(tesimonialsRef.current, {
        scrollTrigger: {
          trigger: ".tesimonialsRef",
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
      className="w-full h-fit flex justify-center items-center mx-auto max-w-screen-2xl px-2 my-10 text-white py-20 flex-wrap md:flex-nowrap gap-8 bg-gray-900 relative tesimonialsRef text-md leading-6 shadow-xl"
      id="testimonials"
      ref={tesimonialsRef}
    >
         <label htmlFor="#testimonials" className="absolute text-lg text-white uppercase font-bold top-5">{t("Vélemények")}</label> 
        <div className="w-full grid md:grid-cols-3 md:grid-rows-1 gap-5">
            <div className="  text-center px-3">
                <h3>{t("Teljesen új házat építettünk és az RS Home Kft. vállalta a generálkivitelezést. Nagyon elégedettek vagyunk az eredménnyel. A munkálatok során folyamatosan kapcsolatban voltunk az építésvezetővel, így mindig tudtuk, hogy hol tartunk. A szakemberek nagyon profik voltak és a munka precízen, határidőre és a tervezett költségvetésen belül zajlott")}</h3>
                <h3 className="text-right mt-5">Juhász Péter, Szeged</h3>
            </div>
            <div className=" border-x-white border-x text-center px-8">
                <h3>{t("Az otthonunkat szerettük volna felújítani, de nem tudtuk pontosan, hogy hogyan kezdjünk hozzá. Az RS Home Kft. profi segítséget nyújtott a tervezési folyamatban és a munkálatok során is. Nagyon elégedettek vagyunk az eredménnyel. Az otthonunk újra modernebb és kényelmesebb lett, mint valaha")}</h3>
                <h3 className="text-right mt-5">Kmetykó Ilona, Hódmezővásárhely</h3>
            </div>
            <div className=" text-center px-3">
                <h3>{t("Az Rs Home Kft. vállalta fel szállodánk felújítását és nagyon elégedettek vagyunk a munkájukkal. A szakemberek rendkívül precízen és a legmagasabb minőségi szabványok szerint dolgoztak. Az építésvezető is nagyon figyelt arra, hogy minden szempontból kielégítsék a mi igényeinket és a vendégeink igényeit is. Mindenkinek bátran ajánljuk őket!")}</h3>
                <h3 className="text-right mt-5">Triger Zsolt, Budapest</h3>
            </div>
        </div>
    </section>
  );
}
