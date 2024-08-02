import { useContext, useState } from "react";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const {setLoading} = useContext(Auth)
    
    return {};
}
 
export default useLogin;