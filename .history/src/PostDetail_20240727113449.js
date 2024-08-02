import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PostCard from "./Card";
// import useFetch from "./useFetch";
import { useState } from "react";
import CommentForm from './CommentForm';
import useFetchData from "./hooks/fetchData";

const PostDetail = () => {
    const {id:postId} = useParams();
    // console.log(postId);
    const [visible ,setVisible] = useState("hidden");
    const postUrl = `/posts/post/${postId}/`;
    const {data:post, error} = useFetchData(postUrl);
    const comments = post? post.postcomments.length : null
    // const  comments = post.postcomments
    // const {data : post, loading ,error} = useFetch(postUrl);
   
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
                {post && <PostCard object = {post} ishover ='no' commentClick={setVisible} cardType='post'/>}
            </div>
            <div className="book-mark">
                Bookmark
            </div>
            <div className="comment-in">
            {(post && !error) && 
            post.postcomments
            .map((comment) => 
                <div> 
                    <PostCard object={comment} ishover ='no' commentClick={setVisible} cardType='comment' key={p.id}/>
                </div>
            )}
            </div>
            {!comments && <div className="no-data"> No comments available now</div>}
            {/* <CommentForm showForm = {visible} hideForm = {setVisible}/> */}
        </div>
    );
}
 
export default PostDetail