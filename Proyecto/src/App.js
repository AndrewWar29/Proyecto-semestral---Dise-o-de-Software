import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegador } from './components/Navegador';
import {Home} from './components/Home';
import {Proyectos} from './components/Proyectos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contacto } from './components/Contacto';
import { Tienda } from './components/Tienda';
import { Registro} from './components/Registro';
import { Footer } from './components/Footer.js';
import {Vista1} from './components/vista1';
import * as serviceWorker from './serviceWorker';
import './estilos/Registro.css';

function App() {
  return (
    <div>
    <Router>
      <Vista1/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Proyectos" element={<Proyectos />}></Route>
          <Route path="/contact" element={<Contacto />}></Route>
          <Route path="/Tienda" element={<Tienda />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
        </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
serviceWorker.unregister();
