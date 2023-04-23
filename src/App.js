import React from 'react'
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import AnimateRoutes from './components/AnimateRoutes'
import LoadingMask from './components/LoadingMask'
import Navbar from './components/Navbar'
import ScrollToTop from './scrollToTop'

export default function App() {
  

  return (
    <div className="App">
       <ScrollToTop/>
      <AnimateRoutes/> 
    </div>
  )
}
