import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Italian from './Pages/Italian';
import American from './Pages/American';
import Thai from './Pages/Thai';
import French from './Pages/French';
export default function App() {
  return (
    <div>
    <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
         <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home/>} /> 
                <Route exact path="/Italian" element={<Italian />} />
                <Route exact path="/American" element={<American />} />
                <Route exact path="/Thai" element={<Thai />} />
                <Route exact path="/French" element={<French />} />
              </Routes>
        </BrowserRouter>   
     
      </div>
  )
}
