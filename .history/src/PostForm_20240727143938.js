import { useContext, useEffect, useState } from "react";
import { authContext } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostForm = () => {
    const {loading} = useContext(authContext) ;
    const history = useHistory();
    const [post ,setPost] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
            setUploading(true);
            // console.log(e.target[0].value.length);
        
    }
    useEffect(() => {
    },[])
    return ( 
        <div className="post-form">
        <div className="post-card post-home-form">
            <div className="post-col1">
                <img src={process.env.PUBLIC_URL + "image/GQhQqaiWcAAvVlx.jpeg"} className='profile-image'/>
            </div>
            <div className="post-col2">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <textarea rows="4" name="post-message" id="" placeholder="whats in your mind"
                    required  value={post} onChange={(e) => {setPost(e.target.value)}}
                    ></textarea>
                    <div className="form-footer flex-end">
                        <div className="add-media">media</div>
                        { loading && <button disabled type="submit" id="add-post">posting...</button>}
                        { !loading && <button  type="submit" id="add-post">Post</button>}
                    </div>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default PostForm;