import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/RegistroPaciente.css";
import fotoregistro from "../../imagenes/pacientes/fotoregistro.png";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik, Form  } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

function RegistrarPaciente() {
    const {signup} = useAuth();
    const navigate = useNavigate();
    const handleSubmit =  ( values) => {
      
        
       signup(values.email,values.password);
       //navigate("/Pacientes/Home");
       
       
     }; 
    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
      })
      return <>
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
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={validate}
          onSubmit={ handleSubmit}
        >
          {formik => (
            <div>
             
              <Form>
                <TextField label="Nombre" name="firstName" type="text" />
                <TextField label="Apellido" name="lastName" type="text" />
                <TextField label="Correo electrónico" name="email" type="email" />
                <TextField label="Número de teléfono" name="phone" type="phone" />
                <TextField label="Contraseña" name="password" type="password" />
                <TextField label="Confirmar Contraseña" name="confirmPassword" type="password" />
                <p>Al continuar, acepto los <u>Términos de uso</u> de Vita y reconozco que leí la <u>Política de Privacidad</u></p>        
                <button className="btn btn-dark mt-3" type="submit">Registrarse</button>
                <p>¿Ya tenés una cuenta? <NavLink to ="/Pacientes/Login"><span>Iniciar sesión</span></NavLink></p>

              </Form>

            </div>
            
          )}
        </Formik>
        
        </div>
        </>
}

export default RegistrarPaciente;

 /* const {signup} = useAuth();
    const [user, setUser] = useState(
        { 
            email: "",
            password: "",
         });

    const[error, setError] = useState();
   
    


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
    
    </>*/