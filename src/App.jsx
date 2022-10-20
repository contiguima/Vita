import './App.css'
import AnteSala from './pages/AnteSala';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";
import LoginPacientes from "./pages/autenticaciones/LoginPacientes";
import HomePacientes from "./pages/HomePacientes";
import RegistrarPaciente from "./pages/autenticaciones/RegistrarPaciente";




function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <AnteSala />}/>
          <Route path="*" element={<>NOT FOUND</>}/>
          <Route path="LoginPacientes" element={<LoginPacientes/>}/>
          <Route path="HomePacientes" element={<HomePacientes/>}/>
          <Route path="RegistrarPaciente" element={<RegistrarPaciente/>}/>
        
        </Routes>
      </Router>
      


   
  
  
  
    

    </div>
  )
}

export default App
