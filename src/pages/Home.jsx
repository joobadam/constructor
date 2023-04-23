import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Hero from "../components/Hero";
import Intro from "../components/Intro"
import Services from "../components/Services"
import References from "../components/References"
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from '../scrollToTop'






export default function Home() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  useLayoutEffect(() => {
    let ctx = gsap.context(()=>{
        let smoother = ScrollSmoother.create({
            smooth: 1.5,
            effects: true, 
  })
    })
 ;
    return () => ctx.revert()
  }, []);

  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <div ref={el} id="smooth-wrapper" className="w-full relative min-h-100vh">
      <div id="smooth-content" className="max-w-screen-2xl mx-auto" >
        <Hero/>
        <Intro/>
        <Services/>
        <References/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </div>
    </>
  );
}