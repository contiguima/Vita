import React from 'react'
import Navbar from '../../components/Navbar';
import { useFirestore } from '../../hooks/useFirestore';
import { useEffect } from "react";


const VerMedicos = () => {
    const {medicos, getAllMedicos} = useFirestore();
    useEffect(() => {
        getAllMedicos();
      }, [])
      
  return <>
    <Navbar/>
    <div  >
        <h1>Medicos Registrados en Vita</h1>
        <div className="medicos">
            <br></br>
            { medicos.map((item) => (
                <div  key={item.id}>
                <h3>Doctor { item.displayName} { item.apellido}</h3>
                <h3> <u>{ item.especialidad}</u></h3>
                </div>

            )) }
        </div>
    </div>    
    </>
}

export default VerMedicos;