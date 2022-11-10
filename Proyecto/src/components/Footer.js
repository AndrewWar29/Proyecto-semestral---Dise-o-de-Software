import React, { useEffect,useState } from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../images/chileprops.png';

export const Footer = () => {

    const [inputText,setInputText] = useState("");
    const [savedData,setSavedData] = useState(false);


    const handleInputChange = (e) =>{
        const text = e.target.value
        setInputText(text);
        console.log(inputText);
    }

    const saveData = () =>{
        localStorage.setItem("nombre",inputText);
        alert("Se ha guardado tu direccion de correo");
        setSavedData(true);
    }

    const logout=()=>{
        localStorage.removeItem("signUp")
        window.location.reload()
    }
    const deleteAccount=()=>{ 
        localStorage.clear()
        window.location.reload()
    }

    return (
        <CDBFooter className="shadow">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
                <a href="/" className="d-flex align-items-center p-0 text-dark" style={{ textDecoration:"none" }}>
                <span className="ml-3 h5 font-weight-bold" style={{ color:"#4577bb" }}> Productos Premium</span>
                </a>
                <p className="my-3" style={{ color:"black", width: '250px' }}>
                Creamos productos con los materiales de mas alta calidad para garantizar siempre la mejor expereriencia de usuario
                </p>
                <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                    <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                    <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="instagram" />
                </CDBBtn>
                </CDBBox>
            </CDBBox>
            <CDBBox>
                <p className="h5 mb-4" style={{ color:"#4577bb", fontWeight: '600' }}>
                Chileprops
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/Proyectos">Recursos</CDBFooterLink>
                <CDBFooterLink href="/contact">Sobre Nosotros</CDBFooterLink>
                <CDBFooterLink href="/contact">Contacto</CDBFooterLink>
                </CDBBox>
            </CDBBox>
            <CDBBox>
                <p className="h5 mb-4" style={{ color:"#4577bb", fontWeight: '600' }}>
                Cuenta
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/contact">Soporte</CDBFooterLink>
                <CDBFooterLink href="/Registro">Registrarse</CDBFooterLink>
                <CDBFooterLink href="/Registro">
                <a onClick={logout}>Cerrar Sesión</a>
                </CDBFooterLink >
                <CDBFooterLink href="/Registro">
                <a onClick={deleteAccount} >Borrar Cuenta</a>
                </CDBFooterLink>
                

                </CDBBox>
            </CDBBox>
            <CDBBox>
                <p className="h5 mb-4" style={{ color:"#4577bb", fontWeight: '600' }}>
                Productos
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/Proyectos">Materiales</CDBFooterLink>
                <CDBFooterLink href="/">Catalogo</CDBFooterLink>
                </CDBBox>
            </CDBBox>
            </CDBBox>
            <small className="text-center mt-5">&copy; Chileprops, 2022. Todos los derechos reservados.</small>
        </CDBBox>
        </CDBFooter>
    );
};