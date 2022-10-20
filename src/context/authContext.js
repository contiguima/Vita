import {createContext} from "react";

const context = createContext();

function AuthProvider({children}) {
    
    const user = {
        login: true,
    }
    return(
        <context.Provider>
            {children}
        </context.Provider>
    )
    
}