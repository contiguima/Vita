import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/RegistroPaciente.css";
import fotoregistro from "../../imagenes/pacientes/fotoregistro.png";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function RegistrarPaciente() {
    const {signup} = useAuth();
    const [user, setUser] = useState(
        { 
            email: "",
            password: "",
         });

    const[error, setError] = useState();
    const navigate = useNavigate();
    


    const handleChange = ({ target: { name, value } }) =>  { 
        setUser({...user, [name]  : value});     
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(" ");
        try {
            await signup(user.email,user.password);
            navigate("/Pacientes/Home");
        } catch (error) {
            setError(error.message);
            
        }
       
     }; 

    return<>
    <div className="logoSeccion">
        <img 
            className="logo-registro" 
            src={logopng}
            alt="logo vita"/>

    </div>
    <div className="parent">
    <div className="textosUsuario">
        <button className="prestador"><NavLink to ="/Medicos/Registro"><span>¿Sos prestador de salud?</span></NavLink></button> 
        <img 
            className="foto-registro" 
            src={fotoregistro}
            alt="Ilustracion"/>


    </div>
    <div className="formRegistro">

    { error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
                <input 
                    type= "text" 
                    name= "text" 
                    placeholder=""
                    onChange={handleChange}/>
                
                <label htmlFor="name">Apellido</label>
                    <input 
                        type= "text" 
                        name= "text" 
                        placeholder=""
                        onChange={handleChange}/>    
                <label htmlFor="email">Email</label>
                    <input 
                        type= "email" 
                        name= "email" 
                        placeholder="mail@mail.com"/>
                <label htmlFor="phone">Número de teléfono</label>
                    <input 
                        type= "phone" 
                        name= "phone" 
                        />
                 <label >Ubicación</label>
                    <input 
                        type= "text" 
                        name= "text" 
                        />        
                <label htmlFor="password">Contraseña</label>
                    <input 
                        type= "password" 
                        name="password" 
                        id="password" 
                        placeholder="******"
                        onChange={handleChange}/>
                <p>Al continuar, acepto los <u>Términos de uso</u> de Vita y reconozco que leí la <u>Política de Privacidad</u></p>        

            <button>Registrarse</button>

            <p>¿Ya tenés una cuenta? <NavLink to ="/Pacientes/Login"><span>Iniciar sesión</span></NavLink></p>
        </form>
    </div>
    </div>
    
    </>
}

export default RegistrarPaciente;

