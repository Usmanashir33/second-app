import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";
import useFetchData from "./fetchData";

const usePostData= (url) => {
    const {getToken,setError,setSuccess} = useContext(authContext)
    const {posts,setPosts} = useContext()

    const applyChanges = (newData) => {
        // setCurrentData([newData,...currentData]);
        // console.log(currentData);

    }
    useEffect(() => {
        // fetchData();
    },[])
    const doPost = (newData) => {
        const Aborter = new AbortController()
        setTimeout(() => {
        fetch(`${config.BASE_URL}${url}`,{
            signal: Aborter.signal,
            method:"POST",
            headers:{
                "Authorization":`Bearer ${getToken()}`,
                "Content-Type":"application/json"
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