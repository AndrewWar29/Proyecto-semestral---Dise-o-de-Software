import React from "react";
import "../estilos/Vista1.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/chileprops1.png';
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { AiOutlineTag} from "react-icons/ai";


const localName=localStorage.getItem("name")

function Vista1() {
    return (
        <Nav class="py-0">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Nav className="m-auto">
            <Navbar.Brand href="/"><img className="logo_de_marca" src={logo} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/"><a className="linkText"  href="/">Home <AiOutlineHome/></a></Nav.Link>
                <Nav.Link href="/Proyectos"><a className="linkText" href="/Proyectos">Galeria <AiOutlinePicture/></a></Nav.Link>
                <Nav.Link href="/Contact"><a className="linkText" href="/Contact">Contacto <RiContactsLine/></a></Nav.Link>
                <Nav.Link href="/Tienda"><a className="linkText" href="/Tienda">Tienda <AiOutlineTag/></a></Nav.Link>
                <Nav.Link  href="/"> Cuenta: <a className="linkText" href="/">{localName}</a></Nav.Link >
            </Nav>
            </Navbar.Collapse>
            </Nav>
    </Navbar>
    </Nav>
    );
}

export {Vista1};