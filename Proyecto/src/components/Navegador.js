import React from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../chileprops.png';
import "../estilos/Navegador.css";

function Navegador(){
        const [navOpen, setNavOpen] = useState(false);

        return (
        <div className="nav">
            <div className="nav-container">
            <div className="navbar">
                <div className="logo"><img className="logo_de_marca" src={logo}></img></div>
                <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
                <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                    <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                    <span
                    className={navOpen ? "lineBottom spin" : "lineBottom"}
                    ></span>
                </div>
                </div>
            </div>
    
            <div
                className="nav-overlay"
                style={{
                top: navOpen ? "0" : "-100%",
                transitionDelay: navOpen ? "0s" : "0s",
                }}
            >
                <ul className="nav-links">
                <li className="nav-item">
                    <Link
                    to="/"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                        top: navOpen ? "0" : "120px",
                        transitionDelay: navOpen ? "0.8s" : "0s",
                    }}
                    >
                    Home
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                    <Link
                    to="/Proyectos"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                        top: navOpen ? "0" : "120px",
                        transitionDelay: navOpen ? "0.9s" : "0s",
                    }}
                    >
                    Proyectos
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                    <Link
                    to="/Quienessomos"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                        top: navOpen ? "0" : "120px",
                        transitionDelay: navOpen ? "1s" : "0s",
                    }}
                    >
                    Sobre Nosotros
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                    <Link
                    to="/contact"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                        top: navOpen ? "0" : "120px",
                        transitionDelay: navOpen ? "1.1s" : "0s",
                    }}
                    >
                    Contacto
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
                <li className="nav-item">
                    <Link
                    to="/Tienda"
                    onClick={() => setNavOpen(!navOpen)}
                    style={{
                        top: navOpen ? "0" : "120px",
                        transitionDelay: navOpen ? "1.1s" : "0s",
                    }}
                    >
                    Tienda
                    </Link>
                    <div className="nav-item-wrapper"></div>
                </li>
                </ul>
                <div className="nav-footer">
                <div
                    className="location"
                    style={{
                    bottom: navOpen ? "0" : "-20px",
                    opacity: navOpen ? "1" : "0",
                    transitionDelay: navOpen ? "1.2s" : "0s",
                    }}
                >
                    <span>Santiago, CL</span>
                </div>
                <div className="nav-social-media">
                    <ul>
                    <li>
                        <a
                        href="#"
                        style={{
                            bottom: navOpen ? "0" : "-20px",
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.3s" : "0s",
                        }}
                        >
                        YouTube
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        style={{
                            bottom: navOpen ? "0" : "-20px",
                            opacity: navOpen ? "1" : "0",
                            transitionDelay: navOpen ? "1.4s" : "0s",
                        }}
                        >
                        Instagram
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
}

export {Navegador};