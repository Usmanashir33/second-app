import { useState } from "react";
import CommentForm from "./CommentForm";
import PostCard from "./PostCard";
import useFetch from "./useFetch";

const postsUrl = "http://localhost:8000/posts";

const Posts = () => {
    const posts = 
    const {data : posts, loading ,error} = useFetch(postsUrl);
    const [visible ,setVisible] = useState("hidden");
    const [clickedPostId ,setClickedPostId] = useState(null);

    const postLink = (e,id) => {
        window.location.href = `/post/${id}`;
        console.log( 'card is clicked');
    }
    const commentClick = (postId) => {
       setVisible("visible");
       setClickedPostId(postId);
    //    console.log(postId);
    }
    return (
        <div className="posts-container">
            posts container
            { loading && <div className="loading-container">loading...</div>}
           { posts && posts.map(post => (
                // insert your card
                <PostCard object = {post} postLink={postLink} commentClick ={commentClick} key={post.id}/>
            ))}
            {error && <div className="error-container">{error}</div>}.
            {/* insert commenting form  */}
            {visible === 'visible' && 
            <CommentForm showForm = {visible} hideForm = {setVisible} parentId={clickedPostId}/>
            }
        </div>
    );
}
 
export default Posts;