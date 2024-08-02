import { useContext, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostCard from "./Card";
import useFetchData from "./hooks/fetchData";
import { authContext } from "./contexts/AuthContext";

// const postsUrl = "http://localhost:8000/posts";

const Posts = () => {
    const {loading} = useContext(authContext);
    // const {data:posts, error,fetchData} = useFetchData("/posts/posts/");
    const { posts,setPosts,fetchPosts} = useContext(data)

    const [visible ,setVisible] = useState("hidden");
    const [clickedPostId ,setClickedPostId] = useState(null);
    
    const commentClick = (postId) => {
       setVisible("visible");
       setClickedPostId(postId);
    //    console.log(postId);
    }
    useEffect(() => {
        fetchData();
    },[])
    return (
        <div className="posts-container">
            { loading && <div className="loading-container">loading...</div>}
           { posts && posts.map(post => (
                // insert your card
                <PostCard object = {post} commentClick ={commentClick} cardType='post' key={post.id} />
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