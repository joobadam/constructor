import React from 'react'
import {gsap} from 'gsap'
import { useLayoutEffect } from 'react'
import { useRef } from 'react'
import CountUp from "react-countup";
import { motion } from 'framer-motion';

export default function LoadingMask() {

    const box1=useRef(null)
    const box2=useRef(null)
    const box3=useRef(null)
    const counterRef= useRef(null)
    const lineRef= useRef(null)


    const tl = gsap.timeline()
        useLayoutEffect(()=>{
          
            let ctx=gsap.context(()=>{
                tl.to(counterRef.current,{y:50, opacity:0, duration:0.5, delay:2.5})
                tl.to(lineRef.current,{x:100, opacity:0, duration:.8})
               tl.to(box1.current,{x:"100%", duration:0.8},3.5)
                tl.to(box2.current,{x:"130%", duration:1},3.5)
                tl.to(box3.current,{x:"170%", duration:1.1},3.6) 
                gsap.to(lineRef.current, {height:"80vh", duration:1})
            })
            return()=> ctx.revert()
        },[])

  return (
    <motion.div
    initial={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:.5, delay:2.5}}
    className="max-w-screen-2xl mx-auto w-full h-[100vh] absolute top-0 left-0 right-0 bottom-0 overflow-hidden touch-none flex justify-center items-center z-50">
        <div className=' h-screen w-full bg-white absolute top-0 border top-50 z-50 flex justify-center items-center ' ref={box1}>
            <div className='flex justify-center items-center gap-2 text-xl overflow-hidden text-yellow-500 md:-translate-x-20' ref={counterRef}>
            <CountUp
            end={100}
            duration={2}
            delay={0}
            className='text-5xl font-bold text-yellow-500'/>
            %
            </div>
           <div ref={lineRef} className="rounded-xl w-1 bg-gray-900 ml-3"></div>
    
        </div>
        <div className=' h-screen w-full bg-gray-300  absolute top-0 -translate-x-[30%] z-40' ref={box2}></div>
        <div className='h-screen w-full bg-yellow-500  absolute top-0 -translate-x-[70%] z-30' ref={box3}></div>
    </motion.div>
  )
}
