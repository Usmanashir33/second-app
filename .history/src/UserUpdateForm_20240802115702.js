import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";
import { dataRendingContext } from "./contexts/DataRending";
import useUpdateUser from "./hooks/UpdateUser";

const UserUpdateForm = ({data,setData}) => {
    // const {username,first_name,last_name,profile} = data;
    const [username,setUsername] = useState(data.username)
    const [email,setEmail] = useState(data.email)
    const [last_name,setLastname] = useState(data.last_name)
    const [first_name,setFirstname] = useState(data.first_name)
    const [title,setTitle] = useState(data.profile.title)
    const [address,setAddress] = useState(data.profile.address)
    const {error,user:updatedUser,updateUser} = useUpdateUser()
    const updatedData = {first_name,last_name,title,address}
    
    const {showUserForm,setShowUserForm} = useContext(dataRendingContext);
    const filesInput = document.querySelector('.comment-file-input');
    const commentInput = document.querySelector('#comment');
    // const {user,fetchUser} = useGetUser();
    const sameData = () => {
        if ((first_name == data.first_name) && (last_name == data.last_name) && 
        (title == data.profile.title) && (address == data.profile.address)
    ){
        return true
    }else{return null}
    }
    const displayDialog = () => {
        // if (commentInput.value){
        if (!sameData()){
            document.querySelector(".comment-form-dialog").showModal();
            return true;
        }
        setShowUserForm(false);
    }
    const hideDialog = (e) => {
        document.querySelector(".comment-form-dialog").close();
    }
    const clearForm = (e) => {
        // commentInput.value = '';
        //filesInput.value = '';
        document.querySelector(".comment-form-dialog").close();
        setShowUserForm(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(updatedData,data.id)
        console.log(updated);
    }
    useEffect(() => {
        
    },[])
    // console.log(post);
    const [textarea,setTextArea] = useState('');
    // console.log(parent);
    return ( 
        <div className="add-comment-form ">
            {/* dialog "" */}
            <dialog className="comment-form-dialog">
            <form action="" className="flex-center-colum">
                <div className="dialog-question">
                     Are you sure you want discard changes?
                </div>
                <button type="button" className="cancel-dialog" onClick={hideDialog}>Cancel</button>
                <button type="button" className="confirm-action" onClick={clearForm}>Confirm</button>
            </form>
            </dialog>
            {/* form starts */}
             <div className = {`comment-container add-user-form float-form`}>
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
                        {/* style using register.css  */}
                <div className="user-form-body">
                    {<section>
                        <label htmlFor="username" > username:</label>
                        <input  type="text" name="username" id="username" 
                        disabled value={username} onChange={(e) => {setUsername(e.target.value)}}  placeholder=" username" />
                    </section>}
                    <section>
                        <label htmlFor="email">email :</label>
                        <input type="email" name="email" id="email" 
                        disabled value={email} onChange={(e) => {setEmail(e.target.value)}}  placeholder=" email (e.g parson@gmail.com)" />
                    </section>
                    
                     {<section>
                        <label htmlFor="first name">fist name :</label>
                        <input type="text" name="first_name" id="first_name" 
                         value={first_name} onChange={(e) => {setFirstname(e.target.value)}}  placeholder=" first name" />
                    </section>}
                     {<section>
                        <label htmlFor="last_name">last name</label>
                        <input type="text" name="last_name" id="last_name" 
                         value={last_name} onChange={(e) => {setLastname(e.target.value)}}  placeholder=" last name" />
                    </section>}

                     {<section>
                        <label htmlFor="title">title</label>
                        <input type="text" name="title" id="title" 
                         value={title} onChange={(e) => {setTitle(e.target.value)}}  placeholder=" title" />
                    </section>}

                     {<section>
                        <label htmlFor="address">address :</label>
                        <input type="text" name="address" id="address" 
                         value={address} onChange={(e) => {setAddress(e.target.value)}}  placeholder=" address" />
                    </section>}
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
 
export default UserUpdateForm;