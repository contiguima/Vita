import React from "react";
import  foto  from "../imagenes/foto.jpg";
import "../stylesheets/Noticia.css"


export function Noticia(props){
    return<>
         <div className='contenedor-noticia'>
        
      <img 
        className='imagen-noticia'
        src={foto}
        alt='Foto de la noticia'/>
      <div className='contenedor-texto-noticia'>
      <h1>{props.titulo}</h1>
        <p className='autor-noticia'>
          Autor: <strong>{props.autor}</strong> 
        </p>
        <p className='texto-noticia'>{props.texto}</p>
      </div>
    </div>
    </>
 }