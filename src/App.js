import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Index from './pages/index';
import About from './pages/about';
import Portfolio from './pages/portfolio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
