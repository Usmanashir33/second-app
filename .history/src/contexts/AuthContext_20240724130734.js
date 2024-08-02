import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";
import config from "../hooks/Config";
export const authContext = createContext();


const AuthContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? true : false
    );
    const [loading,setLoading] = useState(false);
    const refreshToken = () => {
        const RToken = localStorage.getItem('refresh');
        if (RToken){
            fetch(`${config.BASE_URL}/api/token/refresh/`,{
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
    const logOut = () => {
        setTimeout(() => {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            setIsAuthenticated(false);
            {loading && <div className="loading-container">loading...</div>}    
    }
    return ( 
        <authContext.Provider value={{
            isAuthenticated,setIsAuthenticated,logOut,
            loading,setLoading,getToken,refreshToken
        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;