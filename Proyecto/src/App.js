//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import {Vista1} from './componentes/Vista1.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carrusel } from './componentes/Carrusel.js';
import { Footer } from './componentes/Footer.js';
import { Footer2 } from './componentes/Footer2.js';

function App() {
  return (
    <React.Fragment>
      <Vista1 />
      <Carrusel/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
