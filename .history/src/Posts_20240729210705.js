import { useContext, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostCard from "./Card";
import useFetchData from "./hooks/fetchData";
import { authContext } from "./contexts/AuthContext";
import { dataRendingContext } from "./contexts/DataRending";
import UpdateForm from "./UpdateForm";
import useDeleteData from "./hooks/DeleteData";

// const postsUrl = "http://localhost:8000/posts";

const Posts = () => {
    const {loading,error} = useContext(authContext);
    // const {data:posts, error,fetchData} = useFetchData("/posts/posts/");
    const { posts,fetchPosts,setPosts,showCForm,showUForm} = useContext(dataRendingContext);
    const {doDelete :delete} = useDeleteData(posts,setPosts);
    // setShowCForm(true);
    // setClickedObjectId(postId)
    
    useEffect(() => {
        fetchPosts("/posts/posts/");
    },[])
    
    return (
        <div className="posts-container">
           { posts && posts.map(post => (
                // insert your card
                <PostCard object = {post} cardType='post' key={post.id} />
            ))}
            {error && <div className="error-container">{error}</div>}.
            {/* insert commenting form  */}
            {showCForm && <CommentForm /> }
            {showUForm && <UpdateForm  data={posts} setData={setPosts}/> }
        </div>
    );
}
 
export default Posts;