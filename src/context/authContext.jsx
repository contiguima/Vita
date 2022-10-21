import {createContext, useContext, useEffect} from "react";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error("There is no authProvider");
    return context;
}; //Hook para no tener que llamar a este componente en todos lados

export function AuthProvider({ children }) {
    
    const user = {
        login: true,
    };

    const signup = (email, password) =>
    {
        createUserWithEmailAndPassword(auth, email, password);
    };

    const login = async (email, password) =>{ signInWithEmailAndPassword(auth, email, password)
    }

    useEffect (() => {
        console.log("AuthProvider loaded")
    } , [ ]  )
    return(
        <authContext.Provider value = {{ signup, login }}>{children}</authContext.Provider>
    )
    
};