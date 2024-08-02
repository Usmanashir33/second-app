const useUserRelatedData = (data_type) => {
    const [posts,setPosts] = us
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

 
export default useUserRelatedData;