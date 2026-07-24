import { createContext, useState } from "react"
 
export const AuthContext = createContext()

function AuthManager({children}){
    
    const [token , setToken] = useState("");
    const [user , setUser] = useState({});

    return(
        <AuthContext.Provider value={{token , setToken , user , setUser}}>
           {children}
        </AuthContext.Provider>
    )
}

export default AuthManager;