import React from "react";
import "../stylesheets/Navbar.css"
import logopng from "../imagenes/logovita.png";
import { useState } from "react";

function Navbar(props)
{
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className="navigation">
      <img
        className="imagenNav"
        src={logopng}
        alt="logovita"/>
      <a href="/" className="brand-name">
        Vita
      </a>
      <button 
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
         className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href={props.primeraRuta}>{props.primerElemento}</a>
          </li>
          <li>
            <a href={props.segundaRuta}>{props.segundoElemento}</a>
          </li>
          <li>
            <a href={props.terceraRuta}>{props.tercerElemento}</a>
          </li>
          <li>
            <a href={props.cuartaRuta}>{props.cuartoElemento}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
  
}

export default Navbar;
