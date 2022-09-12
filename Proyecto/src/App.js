//import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Vista1} from './componentes/Vista1.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrusel } from './componentes/Carrusel.js';
import { Footer } from './componentes/Footer.js';
import { Footer2 } from './componentes/Footer2.js';
import { Pie2 } from './componentes/Pie2';


function App() {
  return (
    <React.Fragment>
      <Vista1 />
      <Carrusel/>
      <Pie2/>
    </React.Fragment>
  );
}

export default App;
