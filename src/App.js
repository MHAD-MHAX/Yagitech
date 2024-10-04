import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';




import Home from "./Home"
import Products from './Products';
import Calculator from "./Calculator";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
