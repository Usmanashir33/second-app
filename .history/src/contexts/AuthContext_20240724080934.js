import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? localStorage.getItem("access") : false
    );
    const [loading,setLoading] = useState(false);
    
    return ( 
        <authContext.Provider value={{
            isAuthenticated,setIsAuthenticated,
            loading,setLoading,
        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;