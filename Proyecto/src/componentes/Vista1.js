import React from "react";
import "../estilos/Vista1.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../chileprops.png';
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "./Home";
import { Contacto } from "./Contacto";
import {Quienessomos} from "./Quienessomos";

function Vista1() {
    return (
        <Navbar className="navegacion" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className="logo_de_marca" src={logo} alt="logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/"><a className="linkText" href="/">Inicio</a></Nav.Link>
                    <Nav.Link href="https://www.instagram.com/chileprops/?hl=es"><a className="linkText" href="https://www.instagram.com/chileprops/?hl=es">Instagram <AiOutlineInstagram/></a></Nav.Link>
                    <Nav.Link href="https://www.youtube.com/channel/UCvdPVa5nW0_Ajl80rVG3mOA"><a className="linkText" href="https://www.youtube.com/channel/UCvdPVa5nW0_Ajl80rVG3mOA">Youtube <AiOutlineYoutube/></a></Nav.Link>
                    <Nav.Link href="/Contacto"><a className="linkText" href="/Contacto">Contacto <RiContactsLine/></a></Nav.Link>
                    <Nav.Link href="/Quienessomos"><a className="linkText" href="/Quienessomos">¿Quienes somos?</a></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export {Vista1};