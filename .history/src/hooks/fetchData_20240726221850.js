import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";

const useFetchPosts= (url) => {
    const {setLoading,getToken} = useContext(authContext)
    const [data ,setData] = useState(null);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const Aborter = new AbortController()
        setTimeout(() => {
        fetch(`${config.BASE_URL}${url}`,{
            signal: Aborter.signal,
            method:"GET",
            headers:{
                "Authorization":`Bearer ${getToken()}`
            }
        })
        .then((res) => {
            if (!res.ok) {
                throw Error(res.error.message);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            // setError(null);
            setData(data);
        })
        .catch((err) => {
            if (err.name !== "AbortError"){
                setError(err.message);
            }
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
                // setError(null);
            }, 500);
        })
        },200)
        return (() => {Aborter.abort()})
    },[])

    return {data, error};
}
 
export default useFetchPosts;