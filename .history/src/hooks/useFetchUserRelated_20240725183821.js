const useUserRelatedData = (data_type) => {
    fetch("url",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${getToken()}`
        }]
    })

 
export default useUserRelatedData;