import { createContext, useState } from "react";

export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? localStorage.getItem("access") : false
    );
    const [loading,setLoading] = useState(false);
    const getToken = () => {
        let token = localStorage.getItem('access');
        if (token){
            let decoded = decod;
            if (decoded.exp < Date.now()){
                refreshToken();
                return getToken();
            }
            
        }else{
            setIsAuthenticated(false);
        }
    }
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