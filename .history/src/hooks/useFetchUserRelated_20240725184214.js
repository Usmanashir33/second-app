const useUserRelatedData = (data_type) => {
    const [posts,setPosts] = useState('')
    const [comments,setComments] = useState('')
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
    return {posts}
 
export default useUserRelatedData;