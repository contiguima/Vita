import {createContext, useContext, useEffect} from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDoc, doc, getDoc } from "firebase/firestore/lite";


export const authContext = createContext();


export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There is no authProvider");
    return context;
}; //Hook para no tener que llamar a este componente en todos lados

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState(false);
    const [userData, setUserData] = useState({});
    //Pacientes
    const [userPacienteData, setUserPacienteData] = useState({});
    //Medicos
    const [userMedicoData, setUserMedicoData] = useState({});
    const navigate = useNavigate();
    
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
          setUserData({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
           
          });
        } else {
          setUser(false);
          setUserData({});
        }
      });
    }, [user]);

    //Pacientes
    const signup = async (email, password, nombre) =>
    {

        try {
            const { user } = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const docRef = doc(db, "pacientes", user.uid);
            const docSpan = await getDoc(docRef);
            if (docSpan.exists()) {
              setUserPacienteData({ ...docSpan.data() });
            } else {
              await setDoc(docRef, {
                email: user.email,
                uid: user.uid,
                displayName: nombre,
                photoURL: user.photoURL,
              });
              setUser(true);
              setUserPacienteData({
                email: user.email,
                uid: user.uid,
                displayName: nombre,
                photoURL: user.photoURL,
              });
              navigate("/Pacientes/Home");
           
            }
          } catch (error) {
            console.log(error);
          }
    };
    const prevmedicos = async (email, password, nombre, apellido, especialidad, honorarios) =>
    {

       
        try {
            const { user } = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const docRef = doc(db, "medicos", user.uid);
            const docSpan = await getDoc(docRef);
            if (docSpan.exists()) {
              setUserMedicoData({ ...docSpan.data() });
            } else {
              await setDoc(docRef, {
                email: user.email,
                uid: user.uid,
                displayName: nombre,
                apellido: apellido,
                photoURL: user.photoURL,
                especialidad : especialidad,
                honorarios: "",
                atencion: [
                  {dia1: "", horarioEntrada1: "", horarioSalida1: ""},
                  {dia2: "", horarioEntrada2: "", horarioSalida2: ""},
                  {dia3: "", horarioEntrada3: "", horarioSalida3: ""},
                  {dia4: "", horarioEntrada4: "", horarioSalida4: ""},
                  {dia5: "", horarioEntrada5: "", horarioSalida5: ""},
                ]
                
              });
              setUser(true);
              setUserMedicoData({
                email: user.email,
                uid: user.uid,
                displayName: nombre,
                apellido: apellido,
                especialidad : especialidad,
                honorarios: "",
                photoURL: user.photoURL,
                
              });
              navigate("/Medicos/Registro/Verificacion");
           
            }
          } catch (error) {
            console.log(error);
          }
    };

     


    const login = async (email, password) =>
    {   try {
            signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            alert(error.message);
        
    }
       
    }

    useEffect (() => {
        console.log("AuthProvider loaded")
    } , [ ]  )
    return(
        <authContext.Provider value = {{ signup, login, user,prevmedicos, userData }}>{children}</authContext.Provider>
    )
    
};