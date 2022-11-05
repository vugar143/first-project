import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Navbar from './assets/components/navbar/Navbar'
function App() {
  

  return (
   <>
   <Routes>
    <Route path="/" element={<Navbar/>} />
    </Routes>
   </>
  )
}

export default App
