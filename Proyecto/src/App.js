//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrusel } from './componentes/Carrusel.js';
import { Footer } from './componentes/Footer.js';
import { Footer2 } from './componentes/Footer2.js';
import {Home} from './componentes/Home';
import { Contacto } from './componentes/Contacto';
import Quienessomos from './componentes/Quienessomos';
import { Vista1 } from './componentes/Vista1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (    
    <div>
      <Router>
      <Vista1 />
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/contacto" element={< Contacto/>} />
          <Route path="/quienessomos" element={< Quienessomos/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;