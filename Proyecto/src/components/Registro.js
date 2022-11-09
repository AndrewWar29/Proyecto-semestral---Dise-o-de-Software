import React, { useEffect, useRef, useState } from "react";
import {Home} from './Home';
import { Footer } from './Footer.js';
import '../estilos/Registro.css';

function Registro(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")

   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })

   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Cuenta creada exitosamente!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value===localEmail&&password.current.value===localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Usuario/Contraseña incorrecta!")
    }
   }
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <div className="container">
                        <h1>Ingresa tu cuenta:</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Contraseña" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn} class="boton_registro">Iniciar Sesión</button>
                </div>
                :
                <div className="container">
                        <div className="input_space">
                            <input placeholder="Nombre" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Contraseña" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick} class="boton_registro" >Registrarse</button> 
                </div>
                                
                )
            }
        </div>
    );
}
export {Registro};