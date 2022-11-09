import React from "react";
import "../estilos/Navegador.css";
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/chileprops.png';


function Navegador() {
        return (
        <div class="topnav">
                <img src={logo}/>
                <a class="active" href="/">Home</a>
                <a href="/Proyectos">Galeria</a>
                <a href="/Contact">Contacto</a>
                <a href="/Tienda">Tienda</a>
        </div>
);
}

export {Navegador};