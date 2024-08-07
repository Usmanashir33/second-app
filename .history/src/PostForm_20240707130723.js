import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const PostForm = () => {
    const media = ["image/20240410_091348.jpg","image/ebaad206539e09d8e67e20f00fda857f.jpg","image/facebook-icon.png","image/facebook-logo-2019.png","image/facebook.svg","image/GODD9xBXUAEgJnr.jpeg","image/Google__G__logo.svg.png","image/google_logo.svg.png","image/google-icon.png","image/GQboJchaIAMWgoH.jpeg","image/GQdzEExW0AACu1o.jpeg","image/GQh8TWSbgAAVwRl.jpeg"]
    const [uploading , setUploading] = useState(false);
    const history = useHistory();
    const [post,setPost] = useState('');
    const [fullname,setFullname] = useState('');
    const [username,setUsername] = useState('');
    const [comments,setComments] = useState(null);
    const [likes,setLikes] = useState(null);
    const [reposts,setReposts] = useState(null);
    const [views,setViews] = useState(null);
    const [share,setShare] = useState(null);
    const [pic,setPic] = useState('');
    const [postPic,setPostPic] = useState('');
    const [liked,setLiked] = useState(false);
    const [reposted,setReposted] = useState(false);
    const [user_id,setUserId] = useState(1);
    const newPost = {post,fullname,username,pic,postPic,user_id,comments,likes,reposts,views,share,liked,reposted,}
    
    const random = (n) => {
       return Math.floor(Math.random() * n);
    }
    const randomise = () => {
        setPic(media[random(7)]);
        setPostPic(media[random(7)]);
        setComments(random(100));
        setLikes(random(100));
        setReposts(random(1000));
        setViews(random(3300));
        setShare(random(100));
        setUserId(random(150));
        setFullname(`Usman Ashir-${random(9)}`);
        setUsername(`Coiner-${random(99)}`);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
            setUploading(true);
            // console.log(e.target[0].value.length);
        setTimeout(() => {
            fetch("http://localhost:8000/posts",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(newPost),
            }).then((resp) => { // success
                setUploading(false);
                console.log(resp);
                // history.push("/");
                window.location.reload();
            }).catch((err) => {
                console.log(err);
            })
        }, 800);
    }
    useEffect(() => {
        randomise();
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
                    required onChange={(e) => {setPost(e.target.value)}}
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