import './App.css'
import AnteSala from './pages/AnteSala';
import React from 'react';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import RegistrarPaciente from "./pages/pacientes/RegistrarPaciente";
import {AuthProvider} from "./context/authContext";
import HomeGeneral from "./pages/HomeGeneral";
import RegistrarMedicos from "./pages/medicos/RegistrarMedicos";
import LayaoutRequireAuth  from './components/Layaout/LayaoutRequireAuth';"./components/Layaout/LayaoutRequireAuth";
import VerificacionMedicos from './pages/medicos/VerificacionMedicos';
import Login from "./pages/Login";
import HomeMedicos from './pages/medicos/HomeMedicos';
import PerfilMedicos from './pages/medicos/PerfilMedicos';
import TurnosMedicos from './pages/medicos/TurnosMedicos';
import VerMedicos from './pages/pacientes/VerMedicos';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <div className="App">

      <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={ <HomeGeneral
          logueado= {false}/>}/>
          <Route path="*" element={<>NOT FOUND</>}/>

          <Route path="/" element={ <LayaoutRequireAuth/>}> 
            <Route path="Pacientes/Home" element={<HomeGeneral
            logueado={true}/>}/>
           </Route>
           <Route path="/" element={ <LayaoutRequireAuth/>}>
           <Route path="Medicos/Home" element = {<HomeMedicos/>}></Route>
           </Route>
          <Route path="Pacientes/Registro" element={<RegistrarPaciente/>}/>
          <Route path="Registro" element={ <AnteSala />}/>
          <Route path="Medicos/Registro" element={<RegistrarMedicos/>}/>
          <Route path="Medicos/Registro/Verificacion" element={<VerificacionMedicos/>}/>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path='/Medicos/Perfil' element={<PerfilMedicos/>}></Route>
          <Route path='/Medicos/Turnos' element={<TurnosMedicos/>}></Route>
          <Route path='Pacientes/BuscarMedico'  element={<VerMedicos/>}></Route>
        </Routes>
        </AuthProvider>
      </Router>
      


   
  
  
  
    

    </div>
  )
}

export default App
