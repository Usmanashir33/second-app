import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";
import config from "../hooks/Config";
export const authContext = createContext();


const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState('');
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? true : false
    );
    const [loading,setLoading] = useState(false);
    const [showLogOut,setShowLogOut] = useState(false);
    const  getUser = () => {
        fetch(`${config.BASE_URL}/accounts/get-request-user/`,{
            method : "GET",
            headers : {
                "Authorization" : `Bearer ${getToken}`
            }
        }).then ((resp) => {
            if (resp.ok){
                return resp.json()
            }
            throw Error("failed to fetch user")
        }).then((data) => {
            se
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    
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
        setLoading(true);
        setTimeout(() => {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            setIsAuthenticated(false);
            setLoading(false);
        }, 700);
    }

    return ( 
        <authContext.Provider value={{
            isAuthenticated,setIsAuthenticated,logOut,showLogOut,
            loading,setLoading,getToken,refreshToken,setShowLogOut,
        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;