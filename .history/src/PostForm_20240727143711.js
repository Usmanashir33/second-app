import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostForm = () => {
    const media = ["image/20240410_091348.jpg","image/ebaad206539e09d8e67e20f00fda857f.jpg","image/facebook-icon.png","image/facebook-logo-2019.png","image/facebook.svg","image/GODD9xBXUAEgJnr.jpeg","image/Google__G__logo.svg.png","image/google_logo.svg.png","image/google-icon.png","image/GQboJchaIAMWgoH.jpeg","image/GQdzEExW0AACu1o.jpeg","image/GQh8TWSbgAAVwRl.jpeg"]
    const {loading} = useContext ;
    const [uploading , setUploading] = useState(false);
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
                        { uploading && <button disabled type="submit" id="add-post">posting...</button>}
                        { !uploading && <button  type="submit" id="add-post">Post</button>}
                    </div>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default PostForm;