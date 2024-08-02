import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import PostCard from "./Card";
// import useFetch from "./useFetch";
import { useContext, useEffect, useState } from "react";
import CommentForm from './CommentForm';
import { dataRendingContext } from "./contexts/DataRending";
import { authContext } from "./contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import UpdateForm from "./UpdateForm";

const PostDetail = () => {
    const {error} = useContext(authContext);
    const history = useHistory();
    const {id:postId} = useParams();
    const [visible ,setVisible] = useState("hidden");
    const postUrl = `/posts/post/${postId}/`;
    const commentsUrl = `/posts/post/${postId}/comments`;

    const  {post,fetchPost} = useContext(dataRendingContext);
    const  {comments,setComments,fetchComments,showCForm,showUForm} = useContext(dataRendingContext)
    const {doD}
    useEffect(() => {
        fetchPost(postUrl);
        fetchComments(commentsUrl)
    },[])
    return (
        <div className="post-detail-page relative">
           <header className="flex center-v profile-header">
                <Link to='/'>
                    <div className="mr-10 ml-10"><i className="fa-solid fa-arrow-left"></i></div>
                </Link>
                <div className="names">
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => {history.go(-1)}} className="comment" />
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
            {comments && 
            comments
            .map((comment) => 
                <div> 
                    <PostCard object={comment} doDelete={doDelete} ishover ='no' cardType='comment' key={comment.id}/>
                </div>
            )}
            </div>
            {!comments && <div className="no-data"> No comments available now</div>}
            {/* <CommentForm showForm = {visible} hideForm = {setVisible}/> */}
            {showCForm &&
                <CommentForm  data={comments} setData={setComments}/>
            }
            {showUForm && <UpdateForm  data={comments} setData={setComments}/> }

        </div>
    );
}
 
export default PostDetail