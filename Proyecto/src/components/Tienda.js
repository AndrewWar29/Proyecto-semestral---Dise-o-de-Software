import React from "react";
import "../estilos/MainContent.css";
import Darth from '../images/Darth-Vader-Mask.png';
import helmet from '../images/helmet.png';
import Moon from '../images/moon.png';
import mandalorian from '../images/mandalorian.avif';
import groot from '../images/groot.png';
import storm from '../images/storm.png';
import pepper from '../images/Image.png';
import spidey from '../images/spidey.png';
import batmerang from '../images/batmerang.png';
import hammer from '../images/hammer.png';

const api_url = 'https://lxulzipcrcnbmeb.form.io/productos/submission';
    
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const producto0 = data[9].data.nombreProducto;
    const precio0 = data[9].data.precioProducto;
    const descripcion0 = data[9].data.descripcion;

    document.getElementById("nombre_producto0").textContent = producto0;
    document.getElementById("precio_producto0").textContent = precio0;
    document.getElementById("descripcion0").textContent = descripcion0;

    const producto1 = data[8].data.nombreProducto;
    const precio1 = data[8].data.precioProducto;
    const descripcion1 = data[8].data.descripcion;

    document.getElementById("nombre_producto1").textContent = producto1;
    document.getElementById("precio_producto1").textContent = precio1;
    document.getElementById("descripcion1").textContent = descripcion1;

    const producto2 = data[7].data.nombreProducto;
    const precio2 = data[7].data.precioProducto;
    const descripcion2 = data[7].data.descripcion;

    document.getElementById("nombre_producto2").textContent = producto2;
    document.getElementById("precio_producto2").textContent = precio2;
    document.getElementById("descripcion2").textContent = descripcion2;

    const producto3 = data[6].data.nombreProducto;
    const precio3 = data[6].data.precioProducto;
    const descripcion3 = data[6].data.descripcion;

    document.getElementById("nombre_producto3").textContent = producto3;
    document.getElementById("precio_producto3").textContent = precio3;
    document.getElementById("descripcion3").textContent = descripcion3;

    const producto4 = data[5].data.nombreProducto;
    const precio4 = data[5].data.precioProducto;
    const descripcion4 = data[5].data.descripcion;

    document.getElementById("nombre_producto4").textContent = producto4;
    document.getElementById("precio_producto4").textContent = precio4;
    document.getElementById("descripcion4").textContent = descripcion4;

    const producto5 = data[4].data.nombreProducto;
    const precio5 = data[4].data.precioProducto;
    const descripcion5 = data[4].data.descripcion;

    document.getElementById("nombre_producto5").textContent = producto5;
    document.getElementById("precio_producto5").textContent = precio5;
    document.getElementById("descripcion5").textContent = descripcion5;

    const producto6 = data[3].data.nombreProducto;
    const precio6 = data[3].data.precioProducto;
    const descripcion6 = data[3].data.descripcion;

    document.getElementById("nombre_producto6").textContent = producto6;
    document.getElementById("precio_producto6").textContent = precio6;
    document.getElementById("descripcion6").textContent = descripcion6;

    const producto7 = data[2].data.nombreProducto;
    const precio7 = data[2].data.precioProducto;
    const descripcion7 = data[2].data.descripcion;

    document.getElementById("nombre_producto7").textContent = producto7;
    document.getElementById("precio_producto7").textContent = precio7;
    document.getElementById("descripcion7").textContent = descripcion7;

    const producto8 = data[1].data.nombreProducto;
    const precio8 = data[1].data.precioProducto;
    const descripcion8 = data[1].data.descripcion;

    document.getElementById("nombre_producto8").textContent = producto8;
    document.getElementById("precio_producto8").textContent = precio8;
    document.getElementById("descripcion8").textContent = descripcion8;

    const producto9 = data[0].data.nombreProducto;
    const precio9 = data[0].data.precioProducto;
    const descripcion9 = data[0].data.descripcion;

    document.getElementById("nombre_producto9").textContent = producto9;
    document.getElementById("precio_producto9").textContent = precio9;
    document.getElementById("descripcion9").textContent = descripcion9;

}

getISS();

function Tienda(){
    return (
            <div className="main_content">
                <div className="card">
                    <div className="card_img">
                        <img src={mandalorian} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto0"></h2>
                        <p id="descripcion0"></p>
                        <p className="price" id="precio_producto0"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={groot} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto1"></h2>
                        <p id="descripcion1"></p>
                        <p className="price" id="precio_producto1"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={spidey} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto2"></h2>
                        <p id="descripcion2"></p>
                        <p className="price" id="precio_producto2"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={helmet} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto3"></h2>
                        <p id="descripcion3"></p>
                        <p className="price" id="precio_producto3"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={hammer} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto4"></h2>
                        <p id="descripcion4"></p>
                        <p className="price" id="precio_producto4"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={pepper} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto5"></h2>
                        <p id="descripcion5"></p>
                        <p className="price" id="precio_producto5"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={storm} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto6"></h2>
                        <p id="descripcion6"></p>
                        <p className="price" id="precio_producto6"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={batmerang} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto7"></h2>
                        <p id="descripcion7"></p>
                        <p className="price" id="precio_producto7"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={Moon} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto8"></h2>
                        <p id="descripcion8"></p>
                        <p className="price" id="precio_producto8"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>

                <div className="card">
                    <div className="card_img">
                        <img src={Darth} />
                    </div>
                    <div className="card_header">
                        <h2 id="nombre_producto9"></h2>
                        <p id="descripcion9"></p>
                        <p className="price" id="precio_producto9"></p>
                        <div className="btn">Add to cart</div>
                    </div>
                </div>


            </div>
        );
}

export {Tienda};