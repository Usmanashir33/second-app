import { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";
import { dataRendingContext } from "./contexts/DataRending";
import usePostData from "./hooks/postData";
import useGetUser from "./hooks/useGetUser";

const UserUpdateForm = ({data,setData}) => {
    // const {username,first_name,last_name,profile} = data;
    const [username,setUsername] = useState(data.username)
    const [email,SetEmail] = useState(data.email)
    const [user_name,SetUsername] = useState(data.user_name)
    const [email,SetEmail] = useState(data.email)
    
    const {setShowCForm} = useContext(dataRendingContext);
    const filesInput = document.querySelector('.comment-file-input');
    const commentInput = document.querySelector('#comment');
    // const {user,fetchUser} = useGetUser();
    
    const displayDialog = () => {
        if (commentInput.value){
            document.querySelector(".comment-form-dialog").showModal();
            return true;
        }
        setShowCForm(false);
    }
    const hideDialog = (e) => {
        document.querySelector(".comment-form-dialog").close();
    }
    const clearForm = (e) => {
        commentInput.value = '';
        //filesInput.value = '';
        document.querySelector(".comment-form-dialog").close();
        setShowCForm(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // sendData(newComment)

    }
    useEffect(() => {
        
    },[])
    // console.log(post);
    const [textarea,setTextArea] = useState('');
    // console.log(parent);
    return ( 
        <div className="add-comment-form">
            {/* dialog "" */}
            <dialog className="comment-form-dialog">
            <form action="" className="flex-center-colum">
                <div className="dialog-question">
                     Are you sure you want Discard?
                </div>
                <button type="button" className="cancel-dialog" onClick={hideDialog}>Cancel</button>
                <button type="button" className="confirm-action" onClick={clearForm}>Confirm</button>
            </form>
            </dialog>
            {/* form starts */}
             <div className = {`comment-container float-form`}>
                <form onSubmit={(e) => {handleSubmit(e)}} className="comment-form relative float-form relative" id="comment-form">
                 <button type="submit" id="reply-button" className="small-txt right-top ">Reply</button>
                 <div className="form-header">
                         <div className="cancel inline" onClick={displayDialog}>
                         <FontAwesomeIcon icon={faXmark} className="comment" />
                         </div>
                         <div className="back inline" onClick={displayDialog}>
                            <FontAwesomeIcon icon={faArrowLeft} className="comment" />
                         </div>
                     </div>
                            FORM BODY
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
 
export default UserUpdateForm;