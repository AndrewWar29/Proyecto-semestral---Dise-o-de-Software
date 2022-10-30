import React from "react";
import "../estilos/contacto.css";
import foto_1 from '../images/contacto boba.gif';

function Contacto() {
    return(
        <div>
        <div className="section_contacto">
		<div className="container_contacto">
			<div className="content-section_contacto">
				<div className="title_contacto">
					<h1>Sobre Nosotros</h1>
				</div>
				<div className="content_contacto">
					<h3>¿Quienes somos?</h3>
					<p>Chileprops es un pequeño emprendimiento creado en el año 2019. Se dedica a la producción de replicas y props de peliculas. Especificamente todo lo que tenga que ver con el universo Geek, como Marvel, DC, Star wars y más. Todos los productos son realizados con nuestras impresoras 3D y pintados a mano. Si desea realizar una encomienda revisar nuestras distintas redes sociales. </p>
					<div className="button_contacto">
						<a href="">Más información</a>
					</div>
				</div>
				<div className="social_contacto">
					<a href="https://www.facebook.com/profile.php?id=100064928802785"><i class="fab fa-facebook-f"></i></a>
					<a href="https://www.youtube.com/channel/UCvdPVa5nW0_Ajl80rVG3mOA"><i class="fab fa-youtube"></i></a>
					<a href="https://www.instagram.com/chileprops/"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section_contacto">
            <img src={foto_1}/>
		</div>
            
        </div>
        
        </div>
        </div>
        
        

    )
}

export {Contacto};