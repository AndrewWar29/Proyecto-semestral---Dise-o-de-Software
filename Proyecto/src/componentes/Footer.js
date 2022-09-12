import React from "react";
import "../estilos/Footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

function Footer() {
    return(
        <div className="pies" id="footer" class="container">
            <div class="row text-center">
            <div class="col-12 col-lg">
                <a href="https://www.instagram.com/chileprops/?hl=es">Official Website <BsLink45Deg/></a>
            </div>
            <div class="col-12 col-lg">
                <a href="https://linktr.ee/gorillazofficial">Instagram <BsInstagram/> </a>
            </div>
            </div>
        </div>
    );
}

export {Footer};