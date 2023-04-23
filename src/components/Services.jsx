import React from "react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import pic2 from "../img/pic2.jpg";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const [t] = useTranslation("global");
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let smoother = ScrollSmoother.create({
        content: "#servicepic",
        smooth: 1.5,
        ignoreMobileResize: true,
        normalizeScroll: true,
        effects: true,
      });
      smoother.effects("img", { speed: "auto" });
/*       gsap.from(textRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
      }); */
    });
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="services"
      className="flex flex-wrap md:flex-nowrap max-w-screen-2xl mx-auto h-fit py-10 px-5 gap-5 leading-8 text-gray-900"
    >
      <div className="w-full md:w-1/2 px-5 bg-gray-100 rounded-3xl shadow-xl py-5">
        <label htmlFor="#services" className="uppercase font-bold">{t("Szolgáltatások")}</label>
        <p className="my-5">
          {t(
            "Az RS Home építőipari vállalkozás, amely széles körű építőipari szolgáltatásokat kínál Magyarországon. Tapasztalt csapatunk felépítette jó hírnevét azáltal, hogy minőségi és megbízható építési szolgáltatásokat nyújtott korábbi ügyfeleinek. Cégünk specializálódott házak építésére és felújítására, valamint nagyobb épületek, például irodaházak, csarnokok és raktárak generálkivitelezésére. Az Ön igényeire szabva dolgozunk, hogy megvalósítsuk az álmai otthonát, vagy segítsünk a cége székhelyének megtervezésében."
          )}
        </p>
        <p >
          {t(
            "A szolgáltatásaink tartalmazzák a tervezést és az építési munkálatokat, beleértve az átfogó projektmenedzsmentet, a források felügyeletét és az időzítést. Az évek során kialakult kapcsolatrendszerünknek köszönhetően számos képzett és tapasztalt szakemberrel dolgozunk együtt, beleértve az építészmérnököket, a szakipari vállalkozókat és az építőipari szakembereket. Az RS Home csapata mindent megtesz annak érdekében, hogy megfeleljen ügyfeleink igényeinek és elvárásainak, hogy az építkezés minden szakasza zökkenőmentes legyen."
          )}
        </p>
      </div>
      <div className="w-full md:w-1/2 relative overflow-hidden h-screen max-h-[400px] md:max-h-[450px]">
        <img
          src={pic2}
          alt="új ház"
          id="servicepic"
          className="absolute w-full object-fill object-center bottom-0 sm:h-[120%] h-full mx-auto"
        />
      </div>
    </section>
  );
}
