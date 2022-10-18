import React from "react";
import "../estilos/Proyectos.css";
import foto_1 from '../project1.jpg';
import foto_2 from '../project2.jpg';
import foto_3 from '../project3.jpg';
import foto_4 from '../project4.jpg';
import foto_5 from '../project5.jpg';
import foto_6 from '../project6.jpg';


function Proyectos(){
    return(
        <div className="wrapper">
            <div className="header">
                <h1 className="anim">Proyectos</h1>
                <p className="anim">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illum commodi aperiam! In quo enim esse, tenetur. 
                Ab voluptatem alias aliquid harum corporis quos, pariatur libero ex ipsam beatae eius.</p>
            </div>

            <div className="work">
                <img className="anim" src={foto_1} alt="project img" ></img>
                <img className="anim" src={foto_2} alt="project img" ></img>
                <img className="anim" src={foto_3} alt="project img" ></img>
                <img className="anim" src={foto_4} alt="project img" ></img>
            </div>

            <div className="header2">
            <h1 className="anim">Proyectos</h1>
                <p className="anim">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illum commodi aperiam! In quo enim esse, tenetur. 
                Ab voluptatem alias aliquid harum corporis quos, pariatur libero ex ipsam beatae eius.</p>
            </div>

            <div className="work2">
                <img className="anim" src={foto_5} alt="project img" ></img>
                <img className="anim" src={foto_6} alt="project img" ></img>
            </div>

            <div className="footer">
                <p>&copy; Chileprops, 2022. Todos los derechos reservados.</p>
            </div>
        </div>

    );

}

export {Proyectos};