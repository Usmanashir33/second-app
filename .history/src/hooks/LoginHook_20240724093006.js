import { useContext, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const [faild,setFailed] = useState(null);
    const {setLoading} = useContext(authContext);
    const login = (user) => {
        fetch(''c,{
            metho
        })
    }
    return {logging,failed,login};
}
 
export default useLogin;