import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/RegistroPaciente.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function RegistrarMedicos() {
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
            navigate("/Medicos/Home");
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

            <button>Registrarse</button>
        </form>
    </div>
    </div>
    
    </>
}

export default RegistrarMedicos;

