import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const {setLoading} = useContext(authContext);
    
    return {logging};
}
 
export default useLogin;