import { useContext, useState } from "react"
import { authContext } from "../contexts/AuthContext"
import config from "./Config"

const useFetchUserRelatedData = (user_id,data_type) => {
    const {setLoading,getToken} = useContext(authContext)
    const [data,setData] = useState('')
    const
    return {data};
}
export default useFetchUserRelatedData;