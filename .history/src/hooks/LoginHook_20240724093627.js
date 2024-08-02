import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const [failed,setFailed] = useState('');
    const {setLoading} = useContext(authContext);
    const login = (userData) => {
        setLoading(true);
        fetch('',{
            method:"POST",
            headers : {
                "Content-type":"application/json",
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
            setIs
        })
    }
    return {logging,failed,login};
}
 
export default useLogin;