import React from "react";
import "../stylesheets/NavbarPacientes.css"
import logopng from "../imagenes/logovita.png";

function NavbarPacientes()
{
    return<>
  
  <nav className="navigation">
      <img
        className="imagenNav"
        src={logopng}
        alt="logovita"/>
      <a href="/" className="brand-name">
       Vita
      </a>
     
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/">Ayuda</a><i className="fas fa-user"></i>
          </li>
          <li>
            <a href="/">Mis turnos</a>
          </li>
          <li>
            <a href="/">Mis documentos</a>
          </li>
          <li>
            <a href="/Pacientes/Login">Inicia sesión/Registrate</a>
          </li>
        </ul>
      </div>
    </nav>
    </>
}

export default NavbarPacientes;