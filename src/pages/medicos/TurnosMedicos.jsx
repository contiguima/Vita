import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";
import "../../stylesheets/PerfilMedicos.css"
function TurnosMedicos(props) { 
    return<>

        <Navbar
        primerElemento = "Perfil"
        primeraRuta= "/Medicos/Perfil"
        segundoElemento = "Turnos"
        segundaRuta= "/Medicos/Turnos"
        tercerElemento = "Cartera"
        cuartoElemento = "Eventos"/>
        <Container>
        <h1>TURNOS</h1>
        
        </Container>
        <div className="datos-medico">
           
        </div>

       
    
    </>;
}

export default TurnosMedicos;