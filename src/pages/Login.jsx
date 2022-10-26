import { useState } from "react";
import LoginPacientes from "../components/pacientes/LoginPacientes";
import LoginMedicos from "../components/medicos/LoginMedicos";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "../components/Navbar";

const Login = () => {
  const [switchForm, setSwitchForm] = useState(true);
  return <>
   
      <Container>
        <Button onClick={() => setSwitchForm(true)} variant="primary">
          Paciente
        </Button>
        <Button onClick={() => setSwitchForm(false)} variant="primary">
          Médico
        </Button>
        {switchForm ? <LoginPacientes /> : <LoginMedicos />}
      </Container>
      </>;
};
export default Login;
