import { useContext, useState } from "react";

const useLogin = () => {
    const [logging,setLogging] = useState('');
    const {setLoading} = useContext(Au)
    
    return {};
}
 
export default useLogin;