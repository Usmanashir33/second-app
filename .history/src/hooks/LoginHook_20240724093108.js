import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const [faild,setFailed] = useState(null);
    const {setLoading} = useContext(authContext);
    const login = (user) => {
        fetch('',{
            method:"POST",
            headers : {
                "Content-type":"application/json",
            }
            body: JSON>
        })
    }
    return {logging,failed,login};
}
 
export default useLogin;