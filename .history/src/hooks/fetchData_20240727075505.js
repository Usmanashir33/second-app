import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";

const useFetchData= (url) => {
    const {setLoading,getToken} = useContext(authContext)
    const [data ,setData] = useState(null);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const Aborter = new AbortController()
        setLoading(true)
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
                throw Error('resp.ok is failed');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (!data.error){
                setData(data);
            }else{
                setError(dt)
            }
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
 
export default useFetchData;