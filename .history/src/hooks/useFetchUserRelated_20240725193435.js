import { useContext, useState } from "react"
import { authContext } from "../contexts/AuthContext"
import config from "./Config"

const useFetchUserRelatedData = (user_id,data_type) => {
    const {setLoading,getToken} = useContext(authContext)
    const [data,setData] = useState('')
    if (user_id && data_type){
        setLoading(true);
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
        }).catch((error) => {
            console.log(error);
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        })
    }
    return {data};
}
export default useFetchUserRelatedData;