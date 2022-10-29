import React from "react";
import  iconopersona  from "../imagenes/iconopersona.png";
import "../stylesheets/VerMedicoCard.css"


export function VerMedicoCard(props){
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
        <p className="medico-honorarios"> Precio de la consulta:    
         <strong>{" " + props.honorarios}</strong> </p>
        <div className="botonera-favs">
        <button>Ver Perfil</button>
        </div>
      </div>
    </div>
    </>
 }