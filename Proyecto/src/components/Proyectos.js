import React from "react";
import "../estilos/Proyectos.css";
import foto_1 from '../project1.jpg';
import foto_2 from '../project2.jpg';
import foto_3 from '../project3.jpg';
import foto_4 from '../project4.jpg';
import foto_5 from '../project5.jpg';
import foto_6 from '../project6.jpg';
import Printer from '../3D-Printer.gif';
import Printer2 from '../groot.gif';
import shield from '../shield.png';
import loki from '../loki.png';
import groot from '../groot.png';
import iron from '../helmet.png';

function Proyectos(){
    return(
        <div className="wrapper">
            <div className="header">
            </div>

            <div className="work">
                <img className="anim" src={shield} alt="project img" ></img>
                <img className="anim" src={loki} alt="project img" ></img>
                <img className="anim" src={groot} alt="project img" ></img>
                <img className="anim" src={iron} alt="project img" ></img>
            </div>

            <div className="header2">
                <p className="anim2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illum commodi aperiam! In quo enim esse, tenetur. 
                Ab voluptatem alias aliquid harum corporis quos, pariatur libero ex ipsam beatae eius.</p>
            </div>

            <div className="work2">
                <img className="anim" src={Printer} alt="project img" ></img>
                <img className="anim" src={Printer2} alt="project img" ></img>
            </div>

            <div className="footer">
                <p>&copy; Chileprops, 2022. Todos los derechos reservados.</p>
            </div>
        </div>

    );

}

export {Proyectos};