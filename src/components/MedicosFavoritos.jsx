import React from "react";
import  iconopersona  from "../imagenes/iconopersona.png";
import "../stylesheets/MedicosFavoritos.css"


export function MedicosFavoritos(props){
    return<>
         <div className='contenedor-medicos'>
        
      <img 
        className='imagen-medicos'
        src={iconopersona}
        alt='Foto del medico'/>
      <div className='contenedor-texto-medicos'>
        <h1 className="nombre-medico">{props.medico}</h1>
        <p className='medico-especialidad'>
          <strong>{props.especialidad}</strong> 
        </p>
        <div className="botonera-favs">
        <a><u>Ver perfil</u></a><button>Solicitar turno</button>
        </div>
      </div>
    </div>
    </>
 }