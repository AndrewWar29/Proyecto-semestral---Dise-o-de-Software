import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../chileprops.png';
import "../estilos/Pie2.css";

export const Pie2 = () => {
    return (
        <CDBFooter className="shadow">
        <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
            <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                <h5 className='Titulo'>Productos Premium</h5>
                </a>
                <p className="my-3">
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
                <CDBFooterLink href="/">Recursos</CDBFooterLink>
                <CDBFooterLink href="/">Sobre Nosotros</CDBFooterLink>
                <CDBFooterLink href="/">Contacto</CDBFooterLink>
                <CDBFooterLink href="/">Blog</CDBFooterLink>
                </CDBBox>
            </CDBBox>
            <CDBBox>
                <p className="h5 mb-4" style={{ color:"#4577bb", fontWeight: '600' }}>
                Ayuda
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Soporte</CDBFooterLink>
                <CDBFooterLink href="/">Iniciar Sesion</CDBFooterLink>
                <CDBFooterLink href="/">Registrarse</CDBFooterLink>
                </CDBBox>
            </CDBBox>
            <CDBBox>
                <p className="h5 mb-4" style={{ color:"#4577bb", fontWeight: '600' }}>
                Productos
                </p>
                <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                <CDBFooterLink href="/">Materiales</CDBFooterLink>
                <CDBFooterLink href="/">Loop</CDBFooterLink>
                <CDBFooterLink href="/">Contrast</CDBFooterLink>
                </CDBBox>
            </CDBBox>
            </CDBBox>
            <small className="text-center mt-5">&copy; Chileprops, 2022. Todos los derechos reservados.</small>
        </CDBBox>
        </CDBFooter>
    );
};