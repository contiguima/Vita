import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/RegistroPaciente.css";
import fotoregistro from "../../imagenes/pacientes/fotoregistro.png";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function LoginPaciente() {
    const {login} = useAuth();
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
            await login(user.email,user.password);
            navigate("/Pacientes/HomePacientes");
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
        

    </div>
    <div className="formRegistro">

    { error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                type= "email" 
                name= "email" 
                placeholder="mail@mail.com"
                onChange={handleChange}/>
            <label htmlFor="password">Contraseña</label>
            <input 
                type= "password" 
                name="password" 
                id="password" 
                placeholder="******"
                onChange={handleChange}/>

            <button>Login</button>
        </form>
    </div>
    </div>
    
    </>
}

export default LoginPaciente;

