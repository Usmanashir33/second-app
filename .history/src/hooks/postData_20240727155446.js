import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";
import useFetchData from "./fetchData";

const usePostData= (url) => {

    const {data:currentData, setData:setCurrentData} = useFetchData(url)
    const {setLoading,getToken,setError,setSuccess} = useContext(authContext)
    const applyChanges = (newData) => {
        setCurrentData([newData,...currentData]);
    }
    
    const doPost = (newData) => {
        const Aborter = new AbortController()
        setLoading(true)
        setTimeout(() => {
        fetch(`${config.BASE_URL}${url}`,{
            signal: Aborter.signal,
            method:"POST",
            headers:{
                "Authorization":`Bearer ${getToken()}`
            },
            body: JSON.stringify(newData)
        })
        .then((res) => {
            if (!res.ok) {
                throw Error('resp not ok!');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (!data.error){
                applyChanges(data);
                setSuccess()
            }else{
                setError(data.error)
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
                setSuccess(null)
                // setError(null);
            }, 500);
        })
        },200)
        return (() => {Aborter.abort()})
    }

    return {error,doPost};
}
 
export default usePostData;