import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/LoginPaciente.css";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik, Form  } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

function LoginPaciente() {
    const {login} = useAuth();
    const navigate = useNavigate();
    const handleSubmit =  ( values) => {
      
        
       login(values.email,values.password);
       navigate("/Pacientes/Home");
       
       
     }; 
    const validate = Yup.object({
        
        email: Yup.string()
          .email('Email inválido')
          .required('El email es obligatorio'),
        password: Yup.string()
          .required('La contraseña es obligatoria'),
       
      })
      return <>
       <div className="logoSeccion">
            <img 
                className="logo-registro" 
                src={logopng}
                alt="logo vita"/>
        </div>
        <div className="form-login" >
        <button><NavLink to ="/Medicos/Login"><span>¿Sos prestador de salud?</span></NavLink></button> 

        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validate}
          onSubmit={ handleSubmit}
        >
          {formik => (
            <div>
             
              <Form>
               
                <TextField label="Correo electrónico" name="email" type="email" />
                <TextField label="Contraseña" name="password" type="password" />
                <button className="btn btn-dark mt-3" type="submit">Ingresar</button>
               
              </Form>
            </div>
          )}
        </Formik>
        </div>
        <NavLink to="/Registro"><span className= "linktoRegister">¿No tenes cuenta? Registrate</span></NavLink>

        </>
}
export default LoginPaciente;

