import React from 'react'
import Navbar from '../../components/Navbar';
import { useFirestore } from '../../hooks/useFirestore';
import { useEffect } from "react";
import { VerMedicoCard } from '../../components/VerMedicoCard';



const VerMedicos = () => {
    const {medicos, getAllMedicos} = useFirestore();
    useEffect(() => {
        getAllMedicos();
      }, [])
      
  return <>
    <Navbar/>
    <div  >
        <h1>Medicos Registrados en Vita</h1>
        <input 
        style={{  padding:"10px", minWidth:"60%"}} 
        type="text" 
        placeholder='Buscar por especialidad, Localidad, etc'>
        </input><button type='submit'>Buscar</button>
        <div className="medicos"
        style={{ textAlign:"left"}}>
            <br></br>
            { medicos.map((item) => (

                <div   key={item.id}>
                <VerMedicoCard 
                medico = { "Doctor " +  item.displayName + " " + item.apellido}
                especialidad= { item.especialidad}
                honorarios = { item.honorarios ? item.honorarios : "Todavía no ha establecido un precio por consulta"}
                />
                 
                 </div>
                
                
                
                // <div style={{  paddingBottom:"100px"}}  
                // key={item.id}>
                // <h3>Doctor { item.displayName} { item.apellido}</h3>
                // <h3> <u>{ item.especialidad}</u></h3>
                // <h4> Precio de la consulta: { item.honorarios ? honorarios : "Todavía no ha establecido un precio por consulta"}</h4>
                // <button>Ver Perfil</button>
                // </div>

            )) }
        </div>
    </div>    
    </>
}

export default VerMedicos;