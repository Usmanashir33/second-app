import { useContext } from "react"
import { authContext } from "../contexts/AuthContext"

const useUserRelatedData = (data_type) => {
    const {setLoading} = useContext(authContext)
    const [data,setData] = useState('')
    fetch(`${}`,{
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
    return {data};
}
export default useUserRelatedData;