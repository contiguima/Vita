import { useState } from "react";
import { db, auth } from "../firebase.js";
import { doc, getDocs, collection } from "firebase/firestore/lite";

export const useFirestore = () => {
    const [medicos, setMedicos] = useState([]);
    const getAllMedicos = async () => {

        try {
            
            const querySnapshot = await getDocs(collection(db, "medicos"))
            const dataDB = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setMedicos(dataDB)
        } catch (error) {
            console.log(error)
            
        } 
    }
    return{ medicos, getAllMedicos};
}


