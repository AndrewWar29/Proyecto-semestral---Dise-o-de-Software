import React from "react";
import "../estilos/Proyectos.css";
import shield from '../images/capitan_america.jpg';
import batman from '../images/batman_gal.png';
import groot from '../images/groot_real.png';
import iron from '../images/ironman.png';
import spiderman from '../images/spiderman.jpg';
import bp from '../images/black panther.png';
import c3po from '../images/c3po.webp';
import ironman_mujer from '../images/ironman_mujer.webp';
import lens from '../images/lens.jpg';
import mandalorian from '../images/mandalorian.webp';
import mask from '../images/mask.jpg';
import spiderman_tela from '../images/spiderman_tela.webp';

function Proyectos(){
    return(
        <div className="wrapper">
            <div className="title_proyectos">
					<h1>Galería</h1>
			</div>
            <div class="row">
                <div class="column">
                <img className="anim" src={shield} alt="project img" ></img>
                <img className="anim" src={batman} alt="project img" ></img>
                <img className="anim" src={spiderman_tela} alt="project img" ></img>
                </div>
                <div class="column">
                <img className="anim" src={groot} alt="project img" ></img>
                <img className="anim" src={iron} alt="project img" ></img>
                <img className="anim" src={mask} alt="project img" ></img>
                </div>
                <div class="column">
                <img className="anim" src={spiderman} alt="project img" ></img>
                <img className="anim" src={bp} alt="project img" ></img>
                <img className="anim" src={c3po} alt="project img" ></img>
                </div>
                <div class="column">
                <img className="anim" src={mandalorian} alt="project img" ></img>
                <img className="anim" src={lens} alt="project img" ></img>
                <img className="anim" src={ironman_mujer} alt="project img" ></img>
                </div>
                
            </div>
        </div>

    );

}

export {Proyectos};