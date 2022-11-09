import React from "react";
import "../estilos/Proyectos.css";
import Printer from '../images/3D-Printer.gif';
import Printer2 from '../images/groot.gif';
import shield from '../images/shield.png';
import loki from '../images/loki.png';
import groot from '../images/groot.png';
import iron from '../images/helmet.png';

function Proyectos(){
    return(
        <div className="wrapper">
            <div className="header">
            <div className="title_proyectos">
					<h1>Galería</h1>
			</div>
            </div>

            <div className="work">
                <img className="anim" src={shield} alt="project img" ></img>
                <img className="anim" src={loki} alt="project img" ></img>
                <img className="anim" src={groot} alt="project img" ></img>
                <img className="anim" src={iron} alt="project img" ></img>
            </div>

            <div className="header2">
                <p className="anim2"></p>
            </div>

            <div className="work2">
                <img className="anim" src={Printer} alt="project img" ></img>
                <img className="anim" src={Printer2} alt="project img" ></img>
            </div>
        </div>

    );

}

export {Proyectos};