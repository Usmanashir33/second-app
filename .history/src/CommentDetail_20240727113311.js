import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PostCard from "./Card";
// import useFetch from "./useFetch";
import { useEffect, useState } from "react";
import CommentForm from './CommentForm';
import useFetchData from "./hooks/fetchData";

const CommentDetail = () => {
    const {id:commentId} = useParams();
    // console.log(commentId);
    const [visible ,setVisible] = useState("hidden");
    const commentUrl = `/posts/post/${commentId}/comment/`;
    const repliesUrl = `/posts/comment/${commentId}/replies/`;
    const {data:post, error} = useFetchData(commentUrl);
    const [replie,setReplies] = useState(null);
    const {data : replies, Rerror} = useFetchData(repliesUrl);
    const fetchComments = () => {
        // const {data:replies, Rerror} = useFetchData(repliesUrl);
        // setReplies(replies);
    }
    
   useEffect(() => {
    console.log('usman');
    console.log(co);
   },[commentId])
    return (
        <div className="post-detail-page relative">
           <header className="flex center-v profile-header">
                <Link to='/'>
                    <div className="mr-10 ml-10"><i className="fa-solid fa-arrow-left"></i></div>
                </Link>
                <div className="names">
                    <span className="bold ml-10"> Post</span>
                </div>
            </header>
            {error && <div className="error-container">{error}</div>}
            <div className="mt-45">
                {post && <PostCard object = {post} ishover ='no' commentClick={setVisible} cardType='comment'/>}
            </div>
            <div className="book-mark">
                Bookmark
            </div>
            <div className="comment-in">
            {(replies && !Rerror) && 
            replies.map((comment) => 
                <div> 
                    <PostCard object={comment} ishover ='no' commentClick={setVisible} cardType='comment'/>
                </div>
            )}
            </div>
            {!replies && <div className="no-data"> No Replies available now</div>}
            {/* <CommentForm showForm = {visible} hideForm = {setVisible}/> */}
        </div>
    );
}
 
export default CommentDetail