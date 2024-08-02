import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? 
    )
    return ( 
        <authContext.Provider value={{

        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;