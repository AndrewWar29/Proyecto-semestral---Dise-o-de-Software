import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegador } from './components/Navegador';
import {Home} from './components/Home';
import {Proyectos} from './components/Proyectos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contacto } from './components/Contacto';
import { Tienda } from './components/Tienda';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div>
    <Router>
      <Navegador/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Proyectos" element={<Proyectos />}></Route>
          <Route path="/contact" element={<Contacto />}></Route>
          <Route path="/Tienda" element={<Tienda />}></Route>
          {/* <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error />}></Route> */}
        </Routes>
    </Router>
  </div>
  );
}

export default App;
serviceWorker.unregister();
