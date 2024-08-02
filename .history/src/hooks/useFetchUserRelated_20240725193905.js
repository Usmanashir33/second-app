import { useContext, useEffect, useState } from "react"
import { authContext } from "../contexts/AuthContext"
import config from "./Config"

const useFetchUserRelatedData = (user_id,data_type) => {
    const {setLoading,getToken} = useContext(authContext)
    const [data,setData] = useState('')
    useEffect(a)
    return {data};
}
export default useFetchUserRelatedData;