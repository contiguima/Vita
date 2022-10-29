import  promos  from "../imagenes/home/promos.png";
import  logochico  from "../imagenes/home/logochico.png";
import "../stylesheets/HomeGeneral.css";
import { Noticia } from "../components/Noticia";
import { MedicosFavoritos } from "../components/MedicosFavoritos";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

function HomeGeneral(props) {

    //Previo hasta hacer validación  usamos logeado
    return<>
    <Navbar
    primerElemento = "Ayuda"
    segundoElemento = {props.logueado ? "Mis Turnos" : "Inicia sesión/Registrate"}
    segundaRuta = {props.logueado ? "/" : "/Login"}
    tercerElemento = {props.logueado ? "Mis Documentos" : "" }
    cuartoElemento = {props.logueado ? "Mi Cuenta" : "" }

        
    />
   
    <div className="motorBusqueda">
        <h1>Encuentre al profesional que necesita. Más de <span>600 prestadores</span> de salud a su disposición</h1>
        <button><NavLink  to ="/Pacientes/BuscarMedico"
          style={{ textDecoration: "none", color: "black" }}>
            <span>Ver Médicos</span></NavLink>  </button>
          </div>
    <div className="promos">
    <img
        className="imagenpromos"
        alt="promociones"
        src={promos}
    />
    </div>
    <div className={
          props.logueado ? "botonera" : "empty"
        }>
        <button>Búsqueda avanzada</button>
        <button>Administrá grupo familiar</button>
        <button>Mensajes</button>
    </div>
    <div className={
          props.logueado ? "favoritos" : "empty"
        }>
            <h1>Mis profesionales favoritos</h1>
            <MedicosFavoritos
            medico= "Harry Styles"
            especialidad = "Cardiólogo"/>
            <button>Agregar favoritos</button>
        </div>
    <div className="comunidadVita">
        <h1 className="comunidadTitulo">Comunidad Vita</h1>
        <div className="introComunidad">
            <img
            className="imagenComunidad"
            alt="doctores"
            src="https://smeo.org.mx/wp-content/uploads/2022/06/transparent-doctor-national-doctors-day-5f27677bd7e399.1840477915964179158843.png"
        />
            <h2>¡Tu salud nos importa! Por eso nació <span>Comunidad Vita</span>, un espacio para compartir información y novedades en custiones de salud. Te invitamos a <span>vitalizarte.</span></h2>
        </div>
        <div className="lineaAzul"><p></p></div>
        <h1 className="temas">Temas del mes</h1>
        <div className="lineaAzul"><p></p></div>
        <div className="noticiasComunidad">
            <Noticia 
            titulo="El titulo de la noticia irá aquí"
            autor= "Empresa"
            texto= "Articulo sobre como hacer para que no tengan piojos. Tipo resumen de lo que dice el artículo.No comparta prendas de vestir como sombreros, bufandas, abrigos, uniformes deportivos, cintas del cabello o broches. No comparta peines, cepillos o toallas. Desinfecte los peines y cepillos que haya utilizado una persona infestada remojándolos en agua caliente (al menos 130°F) durante 5 a 10 minutos."
            />
            <Noticia 
            titulo="El titulo de la noticia irá aquí"
            autor= "Empresa"
            texto= "Articulo sobre como hacer para que no tengan piojos. Tipo resumen de lo que dice el artículo.No comparta prendas de vestir como sombreros, bufandas, abrigos, uniformes deportivos, cintas del cabello o broches. No comparta peines, cepillos o toallas. Desinfecte los peines y cepillos que haya utilizado una persona infestada remojándolos en agua caliente (al menos 130°F) durante 5 a 10 minutos."
            />
            <Noticia 
            titulo="El titulo de la noticia irá aquí"
            autor= "Empresa"
            texto= "Articulo sobre como hacer para que no tengan piojos. Tipo resumen de lo que dice el artículo.No comparta prendas de vestir como sombreros, bufandas, abrigos, uniformes deportivos, cintas del cabello o broches. No comparta peines, cepillos o toallas. Desinfecte los peines y cepillos que haya utilizado una persona infestada remojándolos en agua caliente (al menos 130°F) durante 5 a 10 minutos."
            />
        </div>
        <p className="verMas"><u>Ver más contenido</u></p>
    </div>
    <div className="subscripcion">
        <h1>¿Te gustó el contenido de la Comunidad Vita? <br/> ¡Suscribite! </h1>

        <input className="input-subscripcion" 
        type="email" 
        placeholder="Dirección de email"
        htmlFor="email"></input>
        <button>Suscribirse</button>
    </div>
    </>
}

export default HomeGeneral;