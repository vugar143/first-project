import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from './assets/components/navbar/Navbar'
import Home from "./assets/pages/Home"
import Services from "./assets/pages/Services"
import Products from "./assets/pages/Products"
import SignUp from "./assets/pages/SignUp"
function App() {
  

  return (
   <>
    <Navbar/>
   <Routes>
   
    <Route path="/" element={<Home/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
   </>
  )
}

export default App
