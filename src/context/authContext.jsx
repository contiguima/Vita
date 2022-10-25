import {createContext, useContext, useEffect} from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There is no authProvider");
    return context;
}; //Hook para no tener que llamar a este componente en todos lados

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState(false);
    const [userData, setUserData] = useState({});
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

    const signup = (email, password) =>
    {

        try {
            createUserWithEmailAndPassword(auth, email, password);
            navigate("/Pacientes/Home");
            
        } catch (error) {
            alert(error.message);
            
        }
    };
    const prevmedicos = (email, password) =>
    {

        try {
            createUserWithEmailAndPassword(auth, email, password);
            navigate("/Medicos/Registro/Verificacion");
            
        } catch (error) {
            
            
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
        <authContext.Provider value = {{ signup, login, user,prevmedicos }}>{children}</authContext.Provider>
    )
    
};