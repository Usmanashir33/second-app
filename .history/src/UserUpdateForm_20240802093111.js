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
    const [last_name,SetLastname] = useState(data.last_name)
    const [first_name,SetFirstname] = useState(data.first_name)
    const [title,SetTitle] = useState(data.profile.title)
    const [address,SetAddress] = useState(data.profile.address)
    
    const {showUserForm,setShowUserForm} = useContext(dataRendingContext);
    const filesInput = document.querySelector('.comment-file-input');
    const commentInput = document.querySelector('#comment');
    // const {user,fetchUser} = useGetUser();
    
    const displayDialog = () => {
        // if (commentInput.value){
        if (data){
            document.querySelector(".comment-form-dialog").showModal();
            return true;
        }
        setShowUserForm(false);
    }
    const hideDialog = (e) => {
        document.querySelector(".comment-form-dialog").close();
    }
    const clearForm = (e) => {
        commentInput.value = '';
        //filesInput.value = '';
        document.querySelector(".comment-form-dialog").close();
        setShowUserForm(false)
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
                 <button type="submit" id="reply-button" className="small-txt right-top ">Update</button>
                 <div className="form-header">
                         <div className="cancel inline" onClick={displayDialog}>
                         <FontAwesomeIcon icon={faXmark} className="comment" />
                         </div>
                         <div className="back inline" onClick={displayDialog}>
                            <FontAwesomeIcon icon={faArrowLeft} className="comment" />
                         </div>
                     </div>

                     { !h<section>
                    <input type="text" name="username" id="username" 
                    required value={username} onChange={(e) => {setUsername(e.target.value)}}  placeholder=" username" />
                </section>}
                <section>
                    <input type="email" name="email" id="email" 
                    required value={email} onChange={(e) => {setEmail(e.target.value)}}  placeholder=" email (e.g parson@gmail.com)" />
                </section>

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