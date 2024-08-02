import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

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
        setData(data);
    }).catch((error) => {
        console.log(error);
    })
    .finally(faArrowAltCircleDown)
    return {data};
}
export default useUserRelatedData;