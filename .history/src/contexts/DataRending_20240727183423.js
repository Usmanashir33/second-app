import { createContext } from "react";
import useFetchData from "../hooks/fetchData";
export const dataRendingContext = createContext();

const DataRendingContextProvider = ({children}) => {
    const {data:posts,setData:setPosts,fetchData:fetchPosts} = useFetchData();
    const {data:Comments,setData:setComments,fetchData:fetchComments} = useFetchData();

    return ( 
        <dataRendingContext.Provider value={{
            posts,setPosts,fetchPosts,
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;