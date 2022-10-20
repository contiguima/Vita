import './App.css'
import AnteSala from './pages/AnteSala';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <AnteSala />}/>
        </Routes>
      </Router>
   
  
  
  
    

    </div>
  )
}

export default App
