import logopng from "../../imagenes/logovita.png";
import "../../stylesheets/VerificacionMedicos.css";
import fotoregistro from "../../imagenes/pacientes/fotoregistro.png";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik, Form  } from "formik";
import { TextField } from "../pacientes/TextField";
import * as Yup from "yup";

function VerificacionMedicos() {

  /*Encontrar la forma de validar que no me suban archivos enormes*/
    const navigate = useNavigate();
    const handleSubmit =  () => {
      
      navigate("/Medicos/Home");
       
       
     }; 
    const validate = Yup.object({
        title: Yup.string()
          .required("Obligatorio"),
        certifspecialty: Yup.string()
          .required("Obligatorio"),
        curriculum: Yup.string()
          .required("Obligatorio"),
        dni: Yup.string()
          .required("Obligatorio"),
        passport: Yup.string()
          .required("Obligatorio"),
        matric: Yup.string()
          .required("Obligatorio"),
        specialty: Yup.string()
          .required("Obligatorio"),     
      })
      return <>
       <div className="logoSeccion">
            <img 
                className="logo-verificacion" 
                src={logopng}
                alt="logo vita"/>
        </div>
        <div>

    <div className="form-verificacion">
        <Formik
          initialValues={{
            title:"",
            certifspecialty: "",
            curriculum:"",
            dni:"",
            passport:"",
            matric:"",
            specialty:"",

          }}
          validationSchema={validate}
          onSubmit={ handleSubmit}
        >
          {formik => (
            <div>
             
              <Form>
                <TextField label="Título" name="title" type="file" />
                <TextField label="Certificado de especialidad" name="certifspecialty" type="file" />
                <TextField label="Curriculum Vitae" name="curriculum" type="file" />
                <TextField label="Documento de Identidad" name="dni" type="file" />
                <TextField label="Pasaporte o Licencia" name="passport" type="file" />
                <TextField label="Numero de matricula" name="matric" type="number" />
                <TextField label="Especialidad" name="specialty" type="text" />
                <p>Al continuar, acepto los <u>Términos de uso</u> de Vita y reconozco que leí la <u>Política de Privacidad</u></p>        

                <button className="btn btn-dark mt-3" type="submit">Registrar</button>
                
                <p>¿Ya tenés una cuenta? <NavLink to ="/Medicos/Login"><span>Iniciar sesión</span></NavLink></p>
              </Form>
            </div>
          )}
        </Formik>
        </div>
      </div>
        </>
}

export default VerificacionMedicos;
