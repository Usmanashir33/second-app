import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";
import useFetchData from "./fetchData";

const usePostData= (url) => {

    const {data:currentData, setData:setCurrentData} = useFetchData(url)
    const {getToken,setError,setSuccess} = useContext(authContext)
    const applyChanges = (newData) => {
        setCurrentData([newData,...currentData]);
    }
    
    const doPost = (newData) => {
        const Aborter = new AbortController()
        setTimeout(() => {
        fetch(`${config.BASE_URL}${url}`,{
            signal: Aborter.signal,
            method:"POST",
            headers:{
                "Authorization":`Bearer ${getToken()}`,
                "Content-Type":"appli"
            },
            body: JSON.stringify(newData),
        })
        .then((res) => {
            console.log('hi',res );
            if (!res.ok) {
                throw Error('resp not ok!');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (!data.error){
                applyChanges(data);
                setSuccess("post added")
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
                setSuccess(null)
                // setError(null);
            }, 500);
        })
        },200)
        return (() => {Aborter.abort()})
    }

    return {doPost};
}
 
export default usePostData;