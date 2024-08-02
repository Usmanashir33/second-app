import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PostCard from "./Card";
// import useFetch from "./useFetch";
import { useContext, useEffect, useState } from "react";
import CommentForm from './CommentForm';
import useFetchData from "./hooks/fetchData";
import { dataRendingContext } from "./contexts/DataRending";
import { authContext } from "./contexts/AuthContext";

const PostDetail = () => {
    const {posts} = useContext(dataRendingContext);
    const {error} = useContext(authContext);
    const {id:postId} = useParams();
    // console.log(postId);
    // const post = posts? posts.filter((id) => id === postId) : {}
    const [visible ,setVisible] = useState("hidden");
    const postUrl = `/posts/post/${postId}/`;
    const commentsUrl = `/posts/post/${postId}/comments`;
    const {data:post,fetchData} = useFetchData();
    const comments = post? post.postcomments.length : null;
    const  comments,fetchComments,
    
    useEffect(() => {
        fetchData(postUrl)
    },[])

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
                    <PostCard object={comment} ishover ='no' commentClick={setVisible} cardType='comment' key={comment.id}/>
                </div>
            )}
            </div>
            {!comments && <div className="no-data"> No comments available now</div>}
            {/* <CommentForm showForm = {visible} hideForm = {setVisible}/> */}
        </div>
    );
}
 
export default PostDetail