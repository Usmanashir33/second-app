import { useContext, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostCard from "./Card";
import useFetchData from "./hooks/fetchData";
import { authContext } from "./contexts/AuthContext";
import { dataRendingContext } from "./contexts/DataRending";

// const postsUrl = "http://localhost:8000/posts";

const Posts = () => {
    const {loading,error} = useContext(authContext);
    // const {data:posts, error,fetchData} = useFetchData("/posts/posts/");
    const { posts,fetchPosts,showCForm,setShowCForm,setClickedObjectId} = useContext(dataRendingContext)
    // setShowCForm(true);
    // setClickedObjectId(postId)
    const commentClick = (postId) => {
       ;
    //    console.log(postId);
    }
    useEffect(() => {
        fetchPosts("/posts/posts/");
    },[])
    
    return (
        <div className="posts-container">
           { posts && posts.map(post => (
                // insert your card
                <PostCard object = {post} commentClick ={commentClick} cardType='post' key={post.id} />
            ))}
            {error && <div className="error-container">{error}</div>}.
            {/* insert commenting form  */}
            {showCForm &&
                <CommentForm  type='com/>
            }
        </div>
    );
}
 
export default Posts;