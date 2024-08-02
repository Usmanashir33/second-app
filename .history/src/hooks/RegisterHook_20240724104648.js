import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";

const useRegister = (resetForm) => {
    const [registered,setRegistered] = useState('');
    const [failedR,setFailed] = useState('');
    const {setLoading,setIsAuthenticated} = useContext(authContext);
    const register = (userData) => {
        setLoading(true);
        setTimeout(() => {
        fetch(`${config.BASE_URL}/accounts/register/`,{
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
            setRegistered("success");
            resetForm();
            setIsAuthenticated(true);
        }).catch((err) => {
            setLoading(false);
            setFailed("username or password mismatch")
        })
        .finally(() => {
            setTimeout(() => {
                setFailed('');
                setLogging('');
                setLoading(false)
            }, 1000);
        })
        }, 500);
    }
    return {registered,failedR,};
}
 
export default useRegister;