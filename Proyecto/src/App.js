import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navegador } from './components/Navegador';
import {Home} from './components/Home';
import {Quienessomos} from './components/Quienessomos';
import {Proyectos} from './components/Proyectos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Navegador/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Quienessomos" element={<Quienessomos />}></Route>
          <Route path="/Proyectos" element={<Proyectos />}></Route>
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
