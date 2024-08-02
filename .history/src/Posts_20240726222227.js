import { useContext, useState } from "react";
import CommentForm from "./CommentForm";
import PostCard from "./PostCard";
import useFetch from "./useFetch";
import useFetchPosts from "./hooks/fetchData";
import { authContext } from "./contexts/AuthContext";

const postsUrl = "http://localhost:8000/posts";

const Posts = () => {
    const {loading} = useContext(authContext)
    // const posts = []
    // const {data, loading ,error} = useFetch(postsUrl);
    const {data:posts, error} = useFetchPosts("/posts/posts")
    const [visible ,setVisible] = useState("hidden");
    const [clickedPostId ,setClickedPostId] = useState(null);
    
    const commentClick = (postId) => {
       setVisible("visible");
       setClickedPostId(postId);
    //    console.log(postId);
    }
    return (
        <div className="posts-container">
            { loading && <div className="loading-container">loading...</div>}
           { posts && posts.map(post => (
                // insert your card
                <PostCard post = {post} commentClick ={commentClick} key={post.id}/>
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