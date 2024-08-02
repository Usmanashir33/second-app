import { useContext, useEffect, useState } from "react";
import config from "./Config";
import { authContext } from "../contexts/AuthContext";

const useGetUserProfile = (userId) => {
    const {getToken,setLoading} = useContext(authContext)
    const [error,setError] = useState(null);
    const [user,setUser] = useState(null);

    useEffect(() => {
        const abortMult = new AbortController();
        setTimeout(() => {
            fetch(`${config.BASE_URL}/accounts/profile/${userId}`,
            {
                signal : abortMult.signal,
                method:"POST",
                headers:{"Content-Type":"application/json",
                        "Authoriation" : `Bearer ${getToken()}`}
            })
            .then((resp) => {
               if (resp.ok) {
                // console.log(resp);
                    return resp.json();
               }else{
               throw Error("Failed to F try again!")
               }
            })
            .then((data) => {// data Found
                setError(null);
                setUser(data);
                setLoading(false);
            })
            .catch((err) => { // error found
                if (!err.name === "AbortError") {
                    setLoading(false);
                    setError(err.message);
                }
            })
        },200)
        return () => abortMult.abort();
    },[])
    
    return {user,loading,error};
}
 
export default useGetUserProfile;