import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";

const useFetchPosts= (dataUrl) => {
    const {setLoading,getToken} = useContext(authContext)
    const [posts ,setData] = useState(null);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const Aborter = new AbortController()
        setTimeout(() => {
        fetch(`${ }`,{
            signal: Aborter.signal(),
            method:"GET",
            headers:{
                "Authorization":`Bearer ${getToken()}`
            }
        })
        // fetch("http://localhost:8000/posts")
        .then((res) => {
            if (!res.ok) {
                throw Error("Data Failed to Fetch,try again");
            }
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            setLoading(false);
            setError(null);
            setData(data);
        })
        .catch((err) => {
            setLoading(false);
            setError(err.message);
        })
        },200)
    },[])

    return {data ,loading, error};
}
 
export default useFetchPosts;