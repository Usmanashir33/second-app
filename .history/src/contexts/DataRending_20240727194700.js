import { createContext } from "react";
import useFetchData from "../hooks/fetchData";
export const dataRendingContext = createContext();

const DataRendingContextProvider = ({children}) => {
    const {data:posts,setData:setPosts,fetchData:fetchPosts} = useFetchData();
    const {data:comments,setData:setComments,fetchData:fetchComments} = useFetchData();
    const {data:replies,setData:setReplies, fetchData:fetchReplies} = useFetchData();

    // const {data:post,fetchData} = useFetchData();


    return ( 
        <dataRendingContext.Provider value={{
            posts,setPosts,fetchPosts,
            comments,setComments,fetchComments,
            replies,fetchReplies,setReplies,
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;