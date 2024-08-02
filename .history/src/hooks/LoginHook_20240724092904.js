import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const [faild,setFailed] = useState(null);
    const {setLoading} = useContext(authContext);
    
    return {logging,failed,};
}
 
export default useLogin;