import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/RegistroMedicos.css";
import fotoregistro from "../../imagenes/pacientes/fotoregistro.png";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik, Form  } from "formik";
import { TextField } from "../pacientes/TextField";
import * as Yup from "yup";
import Navbar from "../../components/Navbar";

function RegistrarMedicos() {
    const {prevmedicos} = useAuth();
    const navigate = useNavigate();
    const handleSubmit =  ( values) => {
      
       console.log(values.email,values.password, values.firstName, values.lastName, values.especialidad); 
       prevmedicos(values.email,values.password, values.firstName, values.lastName, values.especialidad);
       
       
       
     }; 
    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        especialidad: Yup.string()
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
      <Navbar
      primerElemento = "Ayuda"
      primeraRuta = "/"/>
       <div className="logoSeccion">
            <img 
                className="logo-registro" 
                src={logopng}
                alt="logo vita"/>
        </div>
        <div className="parent">
        <div className="textosMedicos">
            <h1><strong>Administr?? tus tiempos</strong></h1>
            <h1><strong>Defin?? tus horarios</strong></h1>
            <h1><strong>Cobr?? en tiempo real</strong></h1>


        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            especialidad: ''
          }}
          validationSchema={validate}
          onSubmit={ handleSubmit}
        >
          {formik => (
            <div>
             
              <Form>
                <TextField label="Nombre" name="firstName" type="text" />
                <TextField label="Apellido" name="lastName" type="text" />
                <TextField label="Especialidad" name="especialidad" type="text" />
                <TextField label="Correo electr??nico" name="email" type="email" />
                <TextField label="N??mero de tel??fono" name="phone" type="phone" />
                <TextField label="Contrase??a" name="password" type="password" />
                <TextField label="Confirmar Contrase??a" name="confirmPassword" type="password" />
                <p>Al continuar, acepto los <u>T??rminos de uso</u> de Vita y reconozco que le?? la <u>Pol??tica de Privacidad</u></p>        

                <button className="btn btn-dark mt-3" type="submit">Continuar</button>
                
                <p>??Ya ten??s una cuenta? <NavLink to ="/Login"><span>Iniciar sesi??n</span></NavLink></p>
              </Form>
            </div>
          )}
        </Formik>
        </div>
        </>
}

export default RegistrarMedicos;
