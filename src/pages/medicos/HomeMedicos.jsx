import Navbar from "../../components/Navbar";
import "../../stylesheets/HomeMedicos.css";
import homemedicos from "../../imagenes/medicos/homemedicos.jpg";

function HomeMedicos ()
{
    return<> 
       <Navbar
        primerElemento = "Perfil"
        primeraRuta= "/Medicos/Perfil"
        segundoElemento = "Turnos"
        segundaRuta= "/Medicos/Turnos"
        tercerElemento = "Cartera"
        cuartoElemento = "Eventos"/>
        <div className="img-medicos">
        <img
        className="imagenmedicos"
        alt="home medicos"
        src={homemedicos}
    />
        </div>
        <div className="botonera-medicos">
            <button>Gestión de calendario</button>
            <button> Gestión de archivos </button>
            <button>Gestión de cobranzas</button>
            <button> Gestión de pacientes </button>
            <button> Comunidad Vita </button>
            <button> Mensajes </button>
        </div>
    </>
}

export default HomeMedicos;