import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import config from "../hooks/Config";
export const authContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState('');
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');
    const [isAuthenticated,setIsAuthenticated] = useState(
        localStorage.getItem("access")? true : false
    );
    const [loading,setLoading] = useState(false);
    const [showLogOut,setShowLogOut] = useState(false);
    const  getUser = () => {
        fetch(`${config.BASE_URL}/accounts/get-request-user/`,{
            method : "GET",
            headers : {
                Authorization : `Bearer ${getToken()}`
            }
        }).then ((resp) => {
            if (resp.ok){
                return resp.json();
            }
            throw Error("failed to fetch user")
        }).then((data) => {
            if (!data.error){
                setCurrentUser(data);
            }else{
                setCurrentUser(null);
            }
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    
    const refreshToken = () => {
        const RToken = localStorage.getItem('refresh');
        if (RToken && isAuthenticated){
            fetch(`${config.BASE_URL}/api/token/refresh/`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body : JSON.stringify({"refresh":RToken})
            })
            .then((resp) => {return resp.json()})
            .then((data) => {
                if (data.access){
                    // localStorage.setItem('access',data.access);
                    console.log('token refreshed');
                }
            })}
        else{
            setIsAuthenticated(false);
        }
    }
    const trial = 0;
    const getToken = () => {
        let token = localStorage.getItem('access');
        // console.log(token);
        if ((token) && (isAuthenticated) && (trial <= 5)){
            let decoded = jwtDecode(token);
            if (decoded.exp < (Date.now()/1000)){
                refreshToken();
                trial++ 
                return getToken();
            }
            return token;
        }else{
            if (trial > 5){alert("refresh token max exceeded")}
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
    useEffect(() => {
        getUser();
        // console.log("hmm");
    },[])
    return ( 
        <authContext.Provider value={{
            isAuthenticated,setIsAuthenticated,logOut,showLogOut,
            loading,setLoading,getToken,refreshToken,setShowLogOut,
            currentUser,error,success,setError,setSuccess,
        }} >
            {children}
        </authContext.Provider>
     );
}
 
export default AuthContextProvider;