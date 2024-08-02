import { useContext, useEffect, useState } from "react";
import config from "./Config";
import { authContext } from "../contexts/AuthContext";

const useGetUser = (userId) => {
    const {getToken,setLoading} = useContext(authContext)
    const [error,setError] = useState(null);
    const [user,setUser] = useState(null);

    fetchUser = () => {
        const abortMult = new AbortController();
        setTimeout(() => {
            fetch(`${config.BASE_URL}/accounts/user/${userId}`,
            {
                signal : abortMult.signal,
                method:"GET",
                headers:{"Content-Type":"application/json",
                        "Authorization" : `Bearer ${getToken()}`}
            })
            .then((resp) => {
               if (resp.ok) {
                    return resp.json();
               }else{
               throw Error("Failed try again!")
               }
            })
            .then((data) => {// data Found
                // console.log(data);
                setError(null);
                setUser(data);
                setLoading(false);
            })
            .catch((err) => { // error found
                if (!err.name === "AbortError") {
                    setLoading(false);
                    setError(err.message);
                }
            }).finally(() => {setTimeout(() => {
                setLoading(false);
                setError(false);
            }, 400);})
        },200)
        return () => abortMult.abort();
    },[]
    
    return {error,user};
}
 
export default useGetUser;