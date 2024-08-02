import { useContext, useEffect} from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";
import { dataRendingContext } from "../contexts/DataRending";

const useDeleteData= (currentData,setCurrentData) => {
    const {getToken,setError,setSuccess} = useContext(authContext);
    const {setShowUForm} = useContext(dataRendingContext);
    const 
    const applyChanges = (dataId) => {
        // console.log(newData.parent.id);
        const samepage = currentData? currentData.find(({id}) => id == dataId) : null ;
        console.log(samepage);
        // console.log(newData);
        console.log(currentData);
        if(currentData && samepage){
            setCurrentData(currentData.filter((child) => 
                child.id !== dataId 
            ));
        }else{
            history.go(-1);
        }
    }
    useEffect(() => {
        // fetchData();
    },[])
    const doDelete = (url,dataId) => {
        const Aborter = new AbortController()
        setTimeout(() => {
        fetch(`${config.BASE_URL}${url}`,{
            signal: Aborter.signal,
            method:"DELETE",
            headers:{
                "Authorization":`Bearer ${getToken()}`,
            },
        })
        .then((res) => {
            // console.log('hi',res );
            if (!res.ok) {
                throw Error('resp not ok!');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            if (!data.error){
                applyChanges(dataId);
                setSuccess(data.success)
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
                setError(null);
            }, 500);
        })
        },200)
        return (() => {Aborter.abort()})
    }

    return {doDelete};
}
 
export default useDeleteData;