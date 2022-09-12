import React from "react";
import {Vista1} from './Vista1.js';
import { Pie2 } from './Pie2';
import { Carrusel } from './Carrusel.js';

function Home() {
    return(
        <React.Fragment>
        <Carrusel/>
        <Pie2/>
        </React.Fragment>
    )
}

export {Home};