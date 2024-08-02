const useUserRelatedData = (data_type) => {
    const {setLoadi}
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