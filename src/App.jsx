import './App.css'
import AnteSala from './pages/AnteSala';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink

} from "react-router-dom";
import LoginPacientes from "./pages/pacientes/LoginPacientes";
import HomePacientes from "./pages/pacientes/HomePacientes";
import RegistrarPaciente from "./pages/pacientes/RegistrarPaciente";
import {AuthProvider} from "./context/authContext";
import HomeGeneral from "./pages/HomeGeneral";
import RegistrarMedicos from "./pages/medicos/RegistrarMedicos";





function App() {
  

  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
         <Route path="/" element={ <HomeGeneral />}/>
          <Route path="*" element={<>NOT FOUND</>}/>
          <Route path="Pacientes/Login" element={<LoginPacientes/>}/>
          <Route path="Pacientes/Home" element={<HomePacientes/>}/>
          <Route path="Pacientes/Registro" element={<RegistrarPaciente/>}/>
          <Route path="Registro" element={ <AnteSala />}/>
          <Route path="Medicos/Registro" element={<RegistrarMedicos/>}/>
        
        </Routes>
        </AuthProvider>
      </Router>
      


   
  
  
  
    

    </div>
  )
}

export default App
