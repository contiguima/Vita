import React from "react";
import "../stylesheets/AnteSala.css";
import logopng from "../imagenes/logovita.png";
import { NavLink } from "react-router-dom";
function AnteSala()
{
    return(
        <><div className="contenedor-logo">
            <img 
            className="logo-inicial" 
            src={logopng}
            alt="logo vita"/>
        </div>
        
        <div className="contenedor-botones">
        <button> Soy médico</button>
        <button><NavLink to ="/RegistrarPaciente"><span>Soy paciente<span/></span></NavLink></button>
            </div></>
    )
}

export default AnteSala;