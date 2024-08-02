import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const [faild,setLogging] = useState(null);
    const {setLoading} = useContext(authContext);
    
    return {logging};
}
 
export default useLogin;