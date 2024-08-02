import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PostCard from "./PostCard";
import useFetch from "./useFetch";
import { useState } from "react";
import CommentForm from './CommentForm';
import useFetchData from "./hooks/fetchData";
const PostDetail = () => {
    const {id:postId} = useParams();
    co
    const [visible ,setVisible] = useState("hidden");
    const postUrl = `/post/${postId}`;
    const {data:post, error} = useFetchData("/posts/posts/");
    // const {data : post, loading ,error} = useFetch(postUrl);
    const postLink = (e,id) => {
        e.preventDefault();
        // i set it blan here hence its post detail page 
        return ;
    }
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
            <div className="main">
                { loading && <div className="loading-container">loading...</div>}
                {error && <div className="error-container">{error}</div>}
                {post && <PostCard object = {post} postLink={postLink}  ishover ='no' commentClick={setVisible} />}
            </div>
            {/* insert commenting form  */}
            <CommentForm showForm = {visible} hideForm = {setVisible} parentId={postId}/>
        </div>
    );
}
 
export default PostDetail