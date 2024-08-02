import { useContext, useEffect} from "react";
import { authContext } from "../contexts/AuthContext";
import config from "./Config";
import { dataRendingContext } from "../contexts/DataRending";

const useUpdateData= (url,currentData,setCurrentData) => {
    const {getToken,setError,setSuccess} = useContext(authContext);
    const {setShowCForm} = useContext(dataRendingContext);
    const applyChanges = (newData) => {
        // console.log(newData.parent.id);
        const samepage = currentData? currentData.find(({id}) => id == newData.parent) : null ;
        console.log(samepage);
        setShowCForm(false);
        console.log(currentData);
        if(currentData && !samepage){
            setCurrentData(currentData.map(({id}) => {
                
            }));
        }
    }
    useEffect(() => {
        // fetchData();
    },[])
    const doUpdate = (newData) => {
        const Aborter = new AbortController()
        setTimeout(() => {
        fetch(`${config.BASE_URL}${url}`,{
            signal: Aborter.signal,
            method:"PUT",
            headers:{
                "Authorization":`Bearer ${getToken()}`,
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newData),
        })
        .then((res) => {
            // console.log('hi',res );
            if (!res.ok) {
                throw Error('resp not ok!');
            }
            return res.json();
        })
        .then((data) => {
            // console.log(data);
            if (!data.error){
                applyChanges(data);
                setSuccess("Updated")
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

    return {doUpdate};
}
 
export default useUpdateData;