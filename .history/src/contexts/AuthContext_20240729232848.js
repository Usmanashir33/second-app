import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import config from "../hooks/Config";
export const authContext = createContext();
// in this folder i need to make my is authenticated mor
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
                    localStorage.setItem('access',data.access);
                    console.log('token refreshed');
                }
            })}
        else{
            setIsAuthenticated(false);
        }
    }
    const getToken = () => {
        let token = localStorage.getItem('access');
        // console.log(token);
        if ((token) && (isAuthenticated)){
            let decodedToken = jwtDecode(token);
            const expDate = decodedToken.exp;
            const now = Date.now() / 1000 ; 
            if (expDate < now){ // token expired
                refreshToken();
                return;
            }
            setIsAuthenticated(true);
        // else{
        //     if (trial > 5)
        //     setIsAuthenticated(false);
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