const useUserRelatedData = (data_type) => {
    fetch(url,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${getToken()}`
        }
    }).then{(res) => {
        if (res.ok){
            return res.json();
        }
        th
    }}
    return {};
}
 
export default useUserRelatedData;