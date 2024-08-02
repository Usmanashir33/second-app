import { useContext, useEffect, useState } from "react"
import { authContext } from "../contexts/AuthContext"
import config from "./Config"

const useFetchUserRelatedData = (user_id,data_type) => {
    const {setLoading,getToken} = useContext(authContext)
    const [data,setData] = useState('');
    const [faild : setFailed] = 
    if (user_id && data_type){
        // setLoading(true);
        fetch(`${config.BASE_URL}/accounts/user/${user_id}/${data_type}/`,{
            headers:{
                "Content-Type":"application/json",
                "Authorization":`Bearer ${getToken()}`
            }
        }).then((resp) => {
            if (resp.ok){
                return resp.json()
            }
        }).then((data) => {
            setData(data);
            // setLoading(false);

        }).catch((error) => {
            console.log(error);
            // setLoading(false);
        })
        .finally(() => {
            setTimeout(() => {
                // setLoading(false);
            }, 500);
        })
    }
    // useEffect(() => {})
    return {data};
}
export default useFetchUserRelatedData;