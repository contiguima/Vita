import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";
import "../../stylesheets/PerfilMedicos.css";
import { authContext } from "../../context/authContext";
import { useAuth } from "../../context/authContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";



function PerfilMedicos() { 

    const {userData, user} = useAuth();
    const {medicos, getAllMedicos} = useFirestore();
    const [honorarios, setHonorarios] = useState("");

    let arrayMedicos = [];

    for (let i = 0; i< medicos.length; i++)
    {
        const currentValue = medicos[i];
      
        if(currentValue.uid == auth.currentUser.uid)
        {
            arrayMedicos.push(currentValue)
        }
    }


    useEffect(() => {
      getAllMedicos();
    }, [])
    

    return<>

<Navbar
        primerElemento = "Perfil"
        primeraRuta= "/Medicos/Perfil"
        segundoElemento = "Turnos"
        segundaRuta= "/Medicos/Turnos"
        tercerElemento = "Cartera"
        cuartoElemento = "Eventos"/>
        <Container>
        <h1>Mi perfil</h1>
     
        </Container>
        <div className="datos-medico">
            <h2>Mis datos</h2>
            <br></br>
            { arrayMedicos.map((item) => (
                <div  key={item.id}>
                <h3>Doctor { item.displayName} { item.apellido}</h3>
                <h3> <u>{ item.especialidad}</u></h3>
                </div>

            )) }
            <h5>E-mail: {userData.email} </h5>
            <h2>Días y horarios de atención</h2>
            <div className="datos=atencion">

            </div>
            <h2>Precio de la consulta: {honorarios ? "precio" : "Todavía no elegiste tu precio"}</h2>
            <form>
                <input type="text"></input><button type="submit">Guardar honorarios</button>

            </form>
        </div>

        {/* El perfil debe tener
        Nombre y apellido (viene del registro)
        Mail (viene del registro)
        Especialidad  (viene del registro)
        Dìas y horarios de atencion(viene por default y se puede cambiar)
        Precio de consulta
     */}
    
    </>;
}

export default PerfilMedicos;