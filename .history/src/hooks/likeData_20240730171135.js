import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";

const LikeData= () => {
    const {setLoading,getToken,setError} = useContext(authContext)
    const [data ,setData] = useState(null);
    
    const likeData = (url) => {
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
            // console.log(res);
            if (!res.ok) {
                throw Error('resp.ok is failed');
            }
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            if (data.like){
                setSuccess(data.like)
            }else{
                setSuccess(data.like)
            }
        })
        .catch((err) => {
            if (err.name !== "AbortError"){
                setError(err.message);
            }
        })
        .finally(() => {
            setTimeout(() => {
            }, 500);
        })
        },200)
        return (() => {Aborter.abort()})
    }

    return {data,setData,likeData};
}
 
export default LikeData;