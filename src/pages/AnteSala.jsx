import React from "react";
import "../stylesheets/AnteSala.css";
import logopng from "../imagenes/logovita.png";
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
        <button 
        className="redirigirPaciente"
        //</div>onClick={}
        > Soy paciente</button>
            </div></>
    )
}

export default AnteSala;