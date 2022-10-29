import Navbar from "../../components/Navbar";
import { Container } from "react-bootstrap";
import "../../stylesheets/PerfilMedicos.css";
import { authContext } from "../../context/authContext";
import { useAuth } from "../../context/authContext";
import { useFirestore } from "../../hooks/useFirestore";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import  iconopersona from "../../imagenes/iconopersona.png";
import { Formik, Form  } from "formik";
import { TextField } from "../pacientes/TextField";




function PerfilMedicos() { 

    const {userData, user} = useAuth();
    const {medicos, getAllMedicos, updatePrecioMedicos} = useFirestore();
    const [honorarios, setHonorarios] = useState("");

    const handleSubmit =  (values) => {
      console.log(values.honorarios);
      updatePrecioMedicos(values.honorarios)
      }; 

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
                <img
                src={iconopersona}
                alt='Foto del medico'/>
                <h3>Doctor { item.displayName} { item.apellido}</h3>
               
                <h5>E-mail: {userData.email} </h5>
                <br></br>
                <br></br>
                <div>
                <h2>Días y horarios de atención</h2>


                <div className= "botonera">Precio de la consulta: {item.honorarios ? 
                <h4>{item.honorarios}</h4>: "Todavía no elegiste tu precio"}</div>
                </div>
            </div>

            )) }
            <br></br>
            <br></br>
            <Formik
          initialValues={{
            honorarios: ''
          }}
          onSubmit={ handleSubmit}
        >
          {formik => (
            <div>
             
              <Form>
                <h3>Controlá tus honorarios</h3>
                <TextField label="Honorarios" name="honorarios" type="text" />
                <button className="btn btn-dark mt-3" type="submit">Guardar</button>
              </Form>
            </div>
          )}
        </Formik>
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