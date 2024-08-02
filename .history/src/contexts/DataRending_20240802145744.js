import { createContext, useState } from "react";
import useFetchData from "../hooks/fetchData";
export const dataRendingContext = createContext();

const DataRendingContextProvider = ({children}) => {
    const getDate = (data) => {
        const date = new Date(data);
        const now = new Date();
        const clearTime = (time,last) => {
            if (time < 0){
                time *= -1 ;
                return last - time ;
            }
            return time ;
        }
        const setDate = (date,name) => {
            if (date != 0){
                return `${date}${name}`
            }
            return '';
        }
    
        let years = (now.getFullYear()) -(date.getFullYear());
        let months = clearTime((now.getMonth()) -(date.getMonth()),12);
        let days = clearTime((now.getDay()) -(date.getDay()),31);
        let hours = clearTime((now.getHours()) -(date.getHours()),24);
        let minutes = clearTime((now.getMinutes()) -(date.getMinutes()),60);
        let seconds = clearTime((now.getSeconds()) -(date.getSeconds()),60);
        const TIME = `${setDate(years,"y")} ${setDate(months,'M')} ${setDate(days,'d')} ${setDate(hours,'h')} ${setDate(minutes,'m')} ${setDate(seconds,'s')} ago`
        return TIME;
    }

    const [userTotal,setUserTotal] = useState('');
    const [showCForm,setShowCForm] = useState(false);
    const [showUForm,setShowUForm] = useState(false);
    const [showUserForm,setShowUserForm] = useState(false);
    // const [showUForm,setShowUForm] = useState(true);
    const [commentFormType,setCommentFormType] = useState('')
    const [clickedObjectId,setClickedObjectId] = useState('');

    const {data:post,setData:setPost,fetchData:fetchPost} = useFetchData();
    const {data:posts,setData:setPosts,fetchData:fetchPosts} = useFetchData();
    const {data:comments,setData:setComments,fetchData:fetchComments} = useFetchData();
    const {data:comment,setData:setComment,fetchData:fetchComment} = useFetchData();
    const {data:replies,setData:setReplies, fetchData:fetchReplies} = useFetchData();

    const {data:likes,setData:setLikes, fetchData:fetchLikes} = useFetchData();

    return ( 
        <dataRendingContext.Provider value={{
            userTotal,setUserTotal,
            post,setPost,fetchPost,
            posts,setPosts,fetchPosts,
            comments,setComments,fetchComments,
            comment,setComment,fetchComment,
            replies,fetchReplies,setReplies,
            
            likes,fetchLikes,setLikes,
            getDate, // this handles the date 
            //for comment form and update form
            showCForm,setShowCForm,clickedObjectId,
            showUForm,setShowUForm,
            showUserForm,setShowUserForm,
            setClickedObjectId,commentFormType,setCommentFormType
        }} >
            {children}
        </dataRendingContext.Provider>
     );
}
 
export default DataRendingContextProvider;