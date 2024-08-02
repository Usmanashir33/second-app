import { useEffect, useState } from "react";

const useGetUserProfile = (url) => {
    const [error,setError] = useState(null);
    const [user,setUser] = useState(null);

    useEffect(() => {
        const abortMult = new AbortController();
        setTimeout(() => {
            fetch(url,
            {signal : abortMult.signal})
            .then((resp) => {
               if (resp.ok) {
                // console.log(resp);
                    return resp.json();
               }else{
               throw Error("Failed to Find the user try again!")
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