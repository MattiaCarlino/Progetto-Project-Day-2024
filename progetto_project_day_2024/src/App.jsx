import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer.jsx'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Header from './Components/Header/Header.jsx'
import About_us from './pages/About_us/About_us.jsx'

function App() {
  return (
    <>
    <div id='App' className='wrapper'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About_us" element={<About_us />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
