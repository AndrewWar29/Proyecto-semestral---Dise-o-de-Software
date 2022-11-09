import React from "react";
import {Navegador} from './Navegador';
import { Carrusel } from './Carrusel.js';
import { Footer } from './Footer.js';
import { Vista1 } from "./vista1";

function Home(){
    return(
        <React.Fragment>
            <Carrusel/>
        </React.Fragment>
    )
}

export {Home};