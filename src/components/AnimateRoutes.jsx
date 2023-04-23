import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import React, { useState } from "react";
import Residential from "../pages/Residential";
import Industrial from "../pages/Industrial";
import LoadingMask from "./LoadingMask";
import { useLayoutEffect } from "react";


export default function AnimateRoutes() {
  const location = useLocation();
  const [enter, setEnter] = useState(true)
  useLayoutEffect(()=>{
    setTimeout(()=>{
      setEnter(false)
    },2500)
  })

  return (
    <AnimatePresence>
      {enter?(<LoadingMask/>):(
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/residential" element={<Residential/>} />
        <Route path="/industrilal" element={<Industrial/>}/>
      </Routes>
      )}
    </AnimatePresence>
  );
}
