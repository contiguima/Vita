import React from "react";
import "../stylesheets/AnteSala.css";
import logopng from "../imagenes/logovita.png";
import { NavLink } from "react-router-dom";
import  Navbar  from "../components/Navbar";
function AnteSala()
{
    return(
        
        <>
        <Navbar
        primerElemento="Ayuda"
        primeraRuta= "/"/>
        
        <div className="contenedor-logo">
            <img 
            className="logo-inicial" 
            src={logopng}
            alt="logo vita"/>
        </div>
        
        <div className="contenedor-botones">
        <button> <NavLink to ="/Medicos/Registro"><span>Soy médico<span/></span></NavLink></button>
        <button><NavLink to ="/Pacientes/Registro"><span>Soy paciente<span/></span></NavLink></button>
            </div></>
    )
}

export default AnteSala;