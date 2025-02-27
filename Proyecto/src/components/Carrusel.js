import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import foto_1 from '../images/boba_fett.gif';
import foto_2 from '../images/spiderman2.gif';
import foto_3 from '../images/groot.gif';
import "../estilos/Carrusel.css";

function Carrusel() {
    return (
    <Carousel className="carousel-inner" variant="ligth">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto_1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel">This is the way!</h5>
            <p className="pdecarrusel">Casco replica de Boba Fett basado en la serie "The Book of Boba Fett".</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto_2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel"> "Your friendly neighborhood Spider-Man 🕸🕷</h5>
            <p className="pdecarrusel">Mascara replica de Spider-Man basado en la pelicula "Infinity War".</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto_3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5 className="pdecarrusel">I am Groot!</h5>
            <p className="pdecarrusel">
                Figura impresa en 3d de Baby Groot.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export {Carrusel};