import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PostCard from "./Card";
// import useFetch from "./useFetch";
import { useContext, useEffect, useState } from "react";
import CommentForm from './CommentForm';
import useFetchData from "./hooks/fetchData";
import { dataRendingContext } from "./contexts/DataRending";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CommentDetail = () => {
    const {id:commentId} = useParams();
    const history = useHistory();
    // console.log(commentId);
    const commentUrl = `/posts/post/${commentId}/comment/`;
    const repliesUrl = `/posts/comment/${commentId}/replies/`;
    // const {data:post, error,fetchData} = useFetchData(commentUrl);
    const {comment,fetchComment,showCForm} = useContext(dataRendingContext)
    const {replies,setReplies,fetchReplies} = useContext(dataRendingContext)
    // console.log(replies);
    
   useEffect(() => {
        fetchComment(commentUrl);
        fetchReplies(repliesUrl);

   },[commentId])
    return (
        <div className="post-detail-page relative">
           <header className="flex center-v profile-header">
                <Link to='/'>
                    <div className="mr-10 ml-10"><i className="fa-solid fa-arrow-left"></i></div>
                </Link>
                <div className="names">
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => {history.go(-1)}} className="comment" />
                    <span className="bold ml-10"> Replies </span>
                </div>
            </header>
            <div className="mt-45">
                {comment && <PostCard object = {comment} ishover ='no' cardType='comment' />}
            </div>
            <div className="book-mark">
                Bookmark
            </div>
            <div className="comment-in">
            {replies && 
            replies.map((reply) => 
                <PostCard object={reply} ishover ='no'cardType='comment' key={reply.id} />
            )}
            </div>
            {(replies && !replies.length) && <div className="no-data"> No Replies available now</div>}

            {showCForm &&
                <CommentForm  data={replies} setData={setReplies}/>
            }
            {showUForm && <UpdateForm  data={comments} setData={setComments}/> }

        </div>
    );
}
 
export default CommentDetail