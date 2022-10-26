import { useState } from "react";
import LoginPacientes from "../components/pacientes/LoginPacientes";
import LoginMedicos from "../components/medicos/LoginMedicos";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Login = () => {
  const [switchForm, setSwitchForm] = useState(true);
  return (
    <Container>
      <h1>Login</h1>
      <Button onClick={() => setSwitchForm(true)} variant="primary">
        Paciente
      </Button>
      <Button onClick={() => setSwitchForm(false)} variant="primary">
        Médico
      </Button>
      {switchForm ? <LoginPacientes /> : <LoginMedicos />}
    </Container>
  );
};
export default Login;
