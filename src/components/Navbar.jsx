import React, { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import rslogo from "../img/rslogo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function Navbar() {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  const [t, i18n] = useTranslation("global");

  const languageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [color, setColor] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className="w-full flex justify-center">
      <div
        className={
          color
            ? "w-full px-10 py-5 mx-auto bg-white text-gray-900 hidden md:flex justify-between items-center  duration-200 navbar z-50 fixed max-w-screen-2xl font-bold top-0"
            : "w-full px-10 py-5 mx-auto bg-transparent text-white hidden md:flex justify-between items-center  duration-200 navbar z-50 fixed max-w-screen-2xl  font-bold top-0"
        }
      >
        <div className="w-1/2 flex justify-start">
          <div>
            <img src={rslogo} alt="rs home logo" className="h-16" />
          </div>
          <div>
            <div className="flex text-xs cursor-pointer m-5">
              <h2
                onClick={() => {
                  languageChange("hu");
                }}
                className="hover:text-white hover:scale-110 hover:duration-200 text-yellow-500"
              >
                HU
              </h2>
              <h2
                className="mx-3 hover:text-white hover:scale-110 hover:duration-200 text-yellow-500"
                onClick={() => {
                  languageChange("en");
                }}
              >
                EN
              </h2>
              <h2
                onClick={() => {
                  languageChange("de");
                }}
                className="hover:text-white hover:scale-110 hover:duration-200 text-yellow-500"
              >
                DE
              </h2>
            </div>
          </div>
        </div>
        <div className="w-1/2 text-sm">
          <div className="">
            <nav className="">
              <ul className="flex gap-x-5 justify-end">
                <li>
                  <button
                  className=" duration-200 hover:scale-110 hover:text-yellow-500"
                    href="#about"
                    onClick={() =>
                      gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: "#about",offsetY: 70 },
                      })
                    }
                  >
                    {t("Rólunk")}
                  </button>
                </li>
                <li>
                  <button
                  className=" duration-200 hover:scale-110 hover:text-yellow-500"
                    href="#services"
                    onClick={() =>
                      gsap.to(window, {
                        duration: 2,
                        scrollTo: { y: "#services",offsetY: 70 },
                      })
                    }
                  >
                    {t("Szolgáltatások")}
                  </button>
                </li>
                <li>
                  <button
                  className=" duration-200 hover:scale-110 hover:text-yellow-500"
                    href="#references"
                    onClick={() =>
                      gsap.to(window, {
                        duration: 2,
                        scrollTo: { y: "#references",offsetY: 110 },
                      })
                    }
                  >
                    {t("Referenciák")}
                  </button>
                </li>
                <li>
                  <button
                  className=" duration-200 hover:scale-110 hover:text-yellow-500"
                    href="#testimonials"
                    onClick={() =>
                      gsap.to(window, {
                        duration: 2,
                        scrollTo: { y: "#testimonials",offsetY: 90 },
                      })
                    }
                  >
                    {t("Vélemények")}
                  </button>
                </li>
                <li>
                  <button
                  className=" duration-200 hover:scale-110 hover:text-yellow-500"
                    href="#contact"
                    onClick={() =>
                      gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: "#contact",offsetY: 90 },
                      })
                    }
                  >
                    {t("Kapcsolat")}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* mobil menu */}
      <div
        className={
          color
            ? "w-full md:hidden z-30 top-0 py-2 px-5 bg-white duration-200 fixed"
            : "w-full md:hidden z-30 top-0 py-2 px-5 bg-transparent duration-200 fixed"
        }
      >
        <div className="w-full flex z-50">
          {/* closed menu */}
          <div className="w-1/2">
            <img src={rslogo} alt="rs home logo" className="h-16" />
          </div>
          <div
            className={`w-1/2 flex justify-end items-center ${
              color ? "text-gray-900" : "text-white"
            }`}
          >
            <HiOutlineMenuAlt3
              size={30}
              onClick={() => setIsVisible(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div
        className={`fixed md:hidden top-0 flex justify-center items-center w-full h-[400px] z-50 py-10 text-gray-900 bg-white flex-col gap-y-5 duration-200 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button className="uppercase font-bold duration-200 hover:scale-105 hover:bg-gray-100" onClick={()=>{
          gsap.to(window,{duration:1, scrollTo:{y: "#about", offsetY:70}})
          setIsVisible(false)
        }}>
          {t("Rólunk")}
        </button>
        <button className="uppercase font-bold duration-200 hover:scale-105 hover:bg-gray-100" onClick={()=>{
          gsap.to(window,{duration:1, scrollTo:{y: "#services", offsetY:70}})
          setIsVisible(false)
        }}>
          {t("Szolgáltatások")}
        </button>
        <button className="uppercase font-bold duration-200 hover:scale-105 hover:bg-gray-100" onClick={()=>{
          gsap.to(window,{duration:1, scrollTo:{y: "#references", offsetY:110}})
          setIsVisible(false)
        }}>
          {t("Referenciák")}
        </button>
        <button className="uppercase font-bold duration-200 hover:scale-105 hover:bg-gray-100" onClick={()=>{
          gsap.to(window,{duration:1, scrollTo:{y: "#testimonials", offsetY:90}})
          setIsVisible(false)
        }}>
          {t("Vélemények")}
        </button>
        <button className="uppercase font-bold duration-200 hover:scale-105 hover:bg-gray-100" onClick={()=>{
          gsap.to(window,{duration:1, scrollTo:{y: "#contact", offsetY:40}})
          setIsVisible(false)
        }}>
          {t("Kapcsolat")}
        </button>
        <div>
          <div className="flex text-xs cursor-pointer my-5 w-full justify-center">
            <h2
              onClick={() => {
                languageChange("hu");
              }}
              className="hover:text-gray-900 hover:scale-110 hover:duration-200 text-yellow-500"
            >
              HU
            </h2>
            <h2
              className="mx-3 hover:text-gray-900 hover:scale-110 hover:duration-200 text-yellow-500"
              onClick={() => {
                languageChange("en");
              }}
            >
              EN
            </h2>
            <h2
              onClick={() => {
                languageChange("de");
              }}
              className="hover:text-gray-900 hover:scale-110 hover:duration-200 text-yellow-500"
            >
              DE
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center text-yellow-500 ">
          <BsFillArrowUpSquareFill
            size={30}
            className="shadow-xl"
            onClick={() => setIsVisible(false)}
          />
        </div>
      </div>
    </div>
  );
}
