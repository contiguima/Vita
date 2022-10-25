import React from "react";
import  foto  from "../imagenes/foto.jpg";
import "../stylesheets/MedicosFavoritos.css"


export function MedicosFavoritos(props){
    return<>
         <div className='contenedor-medicos'>
        
      <img 
        className='imagen-medicos'
        src={foto}
        alt='Foto del medico'/>
      <div className='contenedor-texto-medicos'>
      <h1>{props.medico}</h1>
        <p className='medico-especialidad'>
          <strong>{props.especialidad}</strong> 
        </p>
      <a>Ver perfil</a><button>Solicitar turno</button>
      </div>
    </div>
    </>
 }