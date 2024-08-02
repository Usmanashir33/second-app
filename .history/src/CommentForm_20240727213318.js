import { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";
import { dataRendingContext } from "./contexts/DataRending";

const CommentForm = ({type}) => {
    const {clickedObjectId} = useContext(dataRendingContext);
    const filesInput = document.querySelector('.comment-file-input');
    const commentInput = document.querySelector('#comment');
    const  {post,fetchPost} = useContext(dataRendingContext);
    const  {comment,fetchComment} = useContext(dataRendingContext);

    const Url = type === "comment"? `/posts/post/${clickedObjectId}/comments/`: `/posts/comment/${clickedObjectId}/replies/`;
    // const parent = post? post : comment;
    // const parent = post? post : null;
    const parent = null;


    // const {data : parent, loading ,error} = useFetch(postUrl);

    const displayDialog = () => {
        if (commentInput.value){
            document.querySelector(".comment-form-dialog").showModal();
            return true;
        }
    }
    const hideDialog = (e) => {
        document.querySelector(".comment-form-dialog").close();
    }
    const clearForm = (e) => {
        commentInput.value = '';
        //filesInput.value = '';
        document.querySelector(".comment-form-dialog").close();
        // hideForm('hidden');
    }

    useEffect(() => {
        if (type === 'comment'){
            fetchPost(Url)
        }else{
            fetchComment(Url)
        }
    })
    
    return ( 
        <div className="add-comment-form">
            {/* dialog "" */}
            <dialog className="comment-form-dialog">
            <form action="" className="flex-center-colum">
                <div className="dialog-question">
                     Are you sure you want Discard?
                </div>
                {/* <button type="button"onClick='cancelDialog()' className="cancel-dialog">Cancel</button>
                <button type="button"onClick='confirmDialog()' className="confirm-action">Confirm</button> */}
                <button type="button" className="cancel-dialog" onClick={hideDialog}>Cancel</button>
                <button type="button" className="confirm-action" onClick={clearForm}>Confirm</button>
            </form>
            </dialog>
            {/* form starts */}
             <div className = {`comment-container float-form`}>
                <form action="" method="get" className="comment-form relative float-form" id="comment-form">
                 <button type="submit" id="reply-button" className="small-txt right-top ">Reply</button>
                 <div className="form-header">
                         <div className="cancel inline" onClick={displayDialog}>
                         <FontAwesomeIcon icon={faXmark} className="comment" />
                         </div>
                         <div className="back inline" onClick={displayDialog}>
                            <FontAwesomeIcon icon={faArrowLeft} className="comment" />
                         </div>
                     </div>
                     
                     <div className="post-card borderless post-in-form">
                         <div className="post-col1 flex-center-colum">
                             <div className="post-in-form-image">
                                <img src={process.env.PUBLIC_URL+`/image/GQhQqaiWcAAvVlx.jpeg`} className='profile-image' />
                            </div>
                             <div className="v-line"></div>
                         </div>
                         <div className="post-col2">
                             <div className="post-header">
                                 <div className="user-data">
                                    <span className="post-name in-form-name"> parent && parent.user.first_name parent && parent.user.last_name</span>
                                    <span className="post-username in-form-username">{parent && parent.user.username}</span>
                                    <span className="post-date in-form-date"> Jun 19</span>
                                 </div>
                             </div>
                             <div className="post-txt in-form-txt">{parent && parent.body}</div>
                             <div className="replying-to">
                                 <span className="small-txt muted-txt">Replaying to </span><span className="in-form-username-link">
                                     <Link to={`profile/${parent && parent.user.id}/`} className="simple-link small-txt">{parent && parent.user.username} </Link>
                                 </span>
                             </div>
                         </div>
                     </div>
 
                     <div className="post-card borderless post-in-form">
                         <div className="post-col1 ">
                             <div className="image">
                                <img src={process.env.PUBLIC_URL+`/image/GQhQqaiWcAAvVlx.jpeg`} className='profile-image' />
                            </div>
 
                         </div>
                         <div className="post-col2">
                             <textarea name="comment" id="comment" autoFocus cols="30" rows="4" placeholder="Post your reply"></textarea>
                         </div>
                     </div>

                     <div className="form-footer">
                         <label htmlFor="comment-file-input" className="comment-upload-label">
                            <FontAwesomeIcon icon={faFile}/>
                             <input type="file" id="comment-file-input" className="comment-upload hidden"/>
                         </label>
                     </div>
                 </form>
            </div>
        </div>
     );
}
 
export default CommentForm;