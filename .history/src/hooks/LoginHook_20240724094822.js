import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const [failed,setFailed] = useState('');
    const {setLoading,setIsAuthenticated} = useContext(authContext);
    const login = (userData) => {
        setLoading(true);
        fetch(`${config.BASE_URL}/api/token/`,{
            method:"POST",
            headers : {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(userData)
        }).then((resp) => {
            if (resp.ok){
                return resp.json();
            }
            setLoading(false);
            setFailed("failed");
        })
        .then((data) => {
            setLoading(false);
            localStorage.setItem('access',data.access);
            localStorage.setItem('refresh',data.refresh);
            setLogging("success");
            setIsAuthenticated(true);
        }).catch((err) => {setFailed(err.message)})
        .finally(() => {
            setTimeout(() => {
                setFailed('';)
            }, 700);
        })
    }
    return {logging,failed,login};
}
 
export default useLogin;