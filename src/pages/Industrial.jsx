import { useRef, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import rslogo from "../img/rslogo.png"

const Residential = () => {
  const rel = useRef();
  const q = gsap.utils.selector(rel);
  const [t] = useTranslation("global");
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


/*    useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let smoother = ScrollSmoother.create({
        content:"#residential",
        smooth: 2,
        effects: true, 
      });
    });
    return () => ctx.revert();

  }, []);  */

  const images = [
    { src: require("../img/pic5.jpg"), alt: "Kép 1" },
    { src: require("../img/pic6.jpg"), alt: "Kép 2" },
    { src: require("../img/pic7.jpg"), alt: "Kép 3" },
    { src: require("../img/pic8.jpg"), alt: "Kép 3" },
    { src: require("../img/pic9.jpg"), alt: "Kép 3" },
    { src: require("../img/pic10.jpg"), alt: "Kép 3" },
    { src: require("../img/pic11.jpg"), alt: "Kép 3" },
    { src: require("../img/pic12.jpg"), alt: "Kép 3" },
    { src: require("../img/pic13.jpg"), alt: "Kép 3" },
    { src: require("../img/pic14.jpg"), alt: "Kép 3" },
    { src: require("../img/pic15.jpg"), alt: "Kép 3" },
    { src: require("../img/pic16.jpg"), alt: "Kép 3" },
    { src: require("../img/pic17.jpg"), alt: "Kép 3" },
    { src: require("../img/pic18.jpg"), alt: "Kép 3" },
    { src: require("../img/pic19.jpg"), alt: "Kép 3" },
    { src: require("../img/pic20.jpg"), alt: "Kép 3" },
    { src: require("../img/pic21.jpg"), alt: "Kép 3" },
    { src: require("../img/pic22.jpg"), alt: "Kép 3" },
    { src: require("../img/pic23.jpg"), alt: "Kép 3" },
    { src: require("../img/pic24.jpg"), alt: "Kép 3" },
  ];

  return (
    <div className="w-full overflow-hidden" id="residential" ref={rel} >
      <div className="max-w-screen-2xl mx-auto  translate-y-10 border">
        <img src={rslogo} alt="rs logo" className="h-24 mx-auto"/>
      </div>
    <div className="max-w-screen-2xl mx-auto">
      <div className="flex justify-between mt-20 md:px-10 px-5">
        <Link
          className="flex justify-center items-center gap-2 cursor-pontier text-gray-900 hover:bg-gray-100 hover:scale-105 duration-200 hover:text-yellow-500 z-30"
          to="/"
        >
          <IoIosArrowBack size={30} />
          <h3 className="font-bold uppercase">{t("Főoldal")}</h3>
        </Link>
        <div className="flex justify-center items-center">
          <h3 className="uppercase font-bold text-gray-900">{t("ipari munkáink")}</h3>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-3 py-10">
        {images.map((image) => (
          <div key={image.src} className="flex justify-center max-h-[400px]">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full  duration-500 hover:scale-110 object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Residential;
