import React from "react";
import {Navegador} from './Navegador';
import { Carrusel } from './Carrusel.js';
import { Footer } from './Footer.js';

function Home(){
    return(
        <React.Fragment>
            <Carrusel/>
            <Footer/>
        </React.Fragment>
    )
}

export {Home};