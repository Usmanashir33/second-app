const useUserRelatedData = (data_type) => {
    const [data,setData] = useState('')
    fetch("url",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${getToken()}`
        }
    }).then((resp) => {
        if (resp.ok){
            return resp.json()
        }
    }).then((data) => {
        
    })
    return {};
}
export default useUserRelatedData;