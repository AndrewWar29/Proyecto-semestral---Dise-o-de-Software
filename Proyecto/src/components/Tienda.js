import React from "react";
import { MainContent } from './MainContent.js';


const api_url = 'https://lxulzipcrcnbmeb.form.io/productos/submission';
    
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  const producto0 = data[0].data.nombreProducto;
  const precio0 = data[0].data.precioProducto;
  const descripcion0 = data[0].data.descripcion;

  document.getElementById("nombre_producto0").textContent = producto0;
  document.getElementById("precio_producto0").textContent = precio0;
  document.getElementById("descripcion0").textContent = descripcion0;

  const producto1 = data[1].data.nombreProducto;
  const precio1 = data[1].data.precioProducto;
  const descripcion1 = data[1].data.descripcion;

  document.getElementById("nombre_producto1").textContent = producto1;
  document.getElementById("precio_producto1").textContent = precio1;
  document.getElementById("descripcion1").textContent = descripcion1;

  const producto2 = data[2].data.nombreProducto;
  const precio2 = data[2].data.precioProducto;
  const descripcion2 = data[2].data.descripcion;

  document.getElementById("nombre_producto2").textContent = producto2;
  document.getElementById("precio_producto2").textContent = precio2;
  document.getElementById("descripcion2").textContent = descripcion2;

  const producto3 = data[3].data.nombreProducto;
  const precio3 = data[3].data.precioProducto;
  const descripcion3 = data[3].data.descripcion;

  document.getElementById("nombre_producto3").textContent = producto3;
  document.getElementById("precio_producto3").textContent = precio3;
  document.getElementById("descripcion3").textContent = descripcion3;

  const producto4 = data[4].data.nombreProducto;
  const precio4 = data[4].data.precioProducto;
  const descripcion4 = data[4].data.descripcion;

  document.getElementById("nombre_producto4").textContent = producto4;
  document.getElementById("precio_producto4").textContent = precio4;
  document.getElementById("descripcion4").textContent = descripcion4;

  const producto5 = data[5].data.nombreProducto;
  const precio5 = data[5].data.precioProducto;
  const descripcion5 = data[5].data.descripcion;

  document.getElementById("nombre_producto5").textContent = producto5;
  document.getElementById("precio_producto5").textContent = precio5;
  document.getElementById("descripcion5").textContent = descripcion5;

  const producto6 = data[6].data.nombreProducto;
  const precio6 = data[6].data.precioProducto;
  const descripcion6 = data[6].data.descripcion;

  document.getElementById("nombre_producto6").textContent = producto6;
  document.getElementById("precio_producto6").textContent = precio6;
  document.getElementById("descripcion6").textContent = descripcion6;

  const producto7 = data[7].data.nombreProducto;
  const precio7 = data[7].data.precioProducto;
  const descripcion7 = data[7].data.descripcion;

  document.getElementById("nombre_producto7").textContent = producto7;
  document.getElementById("precio_producto7").textContent = precio7;
  document.getElementById("descripcion7").textContent = descripcion7;

  const producto8 = data[8].data.nombreProducto;
  const precio8 = data[8].data.precioProducto;
  const descripcion8 = data[8].data.descripcion;

  document.getElementById("nombre_producto8").textContent = producto8;
  document.getElementById("precio_producto8").textContent = precio8;
  document.getElementById("descripcion8").textContent = descripcion8;

  const producto9 = data[9].data.nombreProducto;
  const precio9 = data[9].data.precioProducto;
  const descripcion9 = data[9].data.descripcion;

  document.getElementById("nombre_producto9").textContent = producto9;
  document.getElementById("precio_producto9").textContent = precio9;
  document.getElementById("descripcion9").textContent = descripcion9;

}

getISS();

function Tienda(){
    return(  
      <MainContent/>
    )

}

export {Tienda};