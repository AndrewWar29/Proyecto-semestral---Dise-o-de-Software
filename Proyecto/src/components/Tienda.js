import React from "react";
import "../estilos/Tienda.css";
import casco from '../casco.png';

function Tienda(){
    return(
        <body>
            <div className="Card">
                <div className="imgBox">
                    <img src={casco} alt="casco"/>
                </div>
                <div className="details">
                    <div className="title">
                        <h3>Casco de Bobba Fet</h3>
                        <small>Replica del original</small>
                    </div>
                    <div className="description">
                        <h4>Descripcion</h4>
                        <p>bbdsbcsbdusbsubcabusbdasbcbasdbciu</p>
                    </div>
                    <div className="size"></div>
                    <div className="buy"></div>
                </div>
            </div>
        </body>
    )

}

export {Tienda};