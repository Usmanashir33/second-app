import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";
export const authContext = createContext();
<c

const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? localStorage.getItem("access") : false
    );
    const [loading,setLoading] = useState(false);
    const refreshToken = () => {
        const RToken = localStorage.getItem('refresh');
        if (RToken){
            fetch(`${config.BASE_URL}/`,{
                method:"POST",
                headers:{"Content-Type":"application/js"},
                body: JSON.stringify(RToken)
            })
            .then((resp) => {return resp.json()})
            .then((data) => {
                localStorage.setItem('access',data.access);
            })}
        else{
            setIsAuthenticated(false);
        }
    }
    const getToken = () => {
        let token = localStorage.getItem('access');
        if (token){
            let decoded = jwtDecode(token);
            if (decoded.exp < Date.now()){
                refreshToken();
                return getToken();
            }
            return token;
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