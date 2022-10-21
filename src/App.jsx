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
import LoginPacientes from "./pages/autenticaciones/LoginPacientes";
import HomePacientes from "./pages/homes/HomePacientes";
import RegistrarPaciente from "./pages/autenticaciones/RegistrarPaciente";
import {AuthProvider} from "./context/authContext";
import HomeGeneral from "./pages/homes/HomeGeneral";
import RegistrarMedicos from "./pages/autenticaciones/RegistrarMedicos";





function App() {
  

  return (
    <div className="App">
      <Router>
        <AuthProvider>
        <Routes>
         <Route path="/" element={ <HomeGeneral />}/>
          <Route path="*" element={<>NOT FOUND</>}/>
          <Route path="LoginPacientes" element={<LoginPacientes/>}/>
          <Route path="HomePacientes" element={<HomePacientes/>}/>
          <Route path="RegistrarPaciente" element={<RegistrarPaciente/>}/>
          <Route path="Antesala" element={ <AnteSala />}/>
          <Route path="RegistrarMedicos" element={<RegistrarMedicos/>}/>
        
        </Routes>
        </AuthProvider>
      </Router>
      


   
  
  
  
    

    </div>
  )
}

export default App
