import { createContext, useState } from "react";
import useFetchData from "../hooks/fetchData";
export const dataRendingContext = createContext();

const DataRendingContextProvider = ({children}) => {
    const [hidden,setHidden] = useState(fal);
    const [commentFormType,setCommentFormType] = useState('')
    const [clickedObjectId,setClickedObjectId] = useState('');

    const {data:post,setData:setPost,fetchData:fetchPost} = useFetchData();
    const {data:posts,setData:setPosts,fetchData:fetchPosts} = useFetchData();
    const {data:comments,setData:setComments,fetchData:fetchComments} = useFetchData();
    const {data:comment,setData:setComment,fetchData:fetchComment} = useFetchData();
    const {data:replies,setData:setReplies, fetchData:fetchReplies} = useFetchData();

    // const {data:post,fetchData} = useFetchData();


    return ( 
        <dataRendingContext.Provider value={{
            post,setPost,fetchPost,
            posts,setPosts,fetchPosts,
            comments,setComments,fetchComments,
            comment,setComment,fetchComment,
            replies,fetchReplies,setReplies,
            //for comment form
            showCForm,setShowCForm,clickedObjectId,
            setClickedObjectId,commentFormType,setCommentFormType
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;