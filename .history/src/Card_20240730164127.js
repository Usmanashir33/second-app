import { faArrowUp, faEye} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faRotate } from "@fortawesome/free-solid-svg-icons/faRotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { dataRendingContext } from "./contexts/DataRending";
import { authContext } from "./contexts/AuthContext";
import { uiContext } from "./contexts/UiContext";

const PostCard = ({object,doDelete,ishover,cardType}) => {
    const {currentUser} = useContext(authContext)
    const {id,body,likes,shares,reposts,views,date,postcomments,replies} = object;
    const {first_name,last_name,username} = object.user? object.user : {};
    const history = useHistory();
    const owner = (currentUser.id === object.user.id) ? true : false
    const liked = likes.find((id) => {id=})
    const { setCommentFormType,setShowCForm,setShowUForm,setClickedObjectId} = useContext(dataRendingContext)
    const {showCardDD} = useContext(uiContext);
    const deleting = (e,Id) => {
        console.log(Id,cardType);
        if (cardType === 'post'){
            doDelete(`/posts/post/${Id}/`,Id)
        }else{
            doDelete(`/posts/post/${Id}/comment/`,Id)
        }
        
    }
    const update = (e,objectId) => {
        setShowUForm(true);
        setCommentFormType(cardType);
        setClickedObjectId(objectId);
    }
    const commentClick = (objectId) => {
        setCommentFormType(cardType); //if ist comment or post
        //console.log(cardType);
        setShowCForm(true);
        setClickedObjectId(objectId);
    }
    const like =(e) => {
        e.stopPropagation();
        e.target.classList.toggle('liked')
    }
   
    const setHover = (hover='yes') =>{
        if (hover !== "yes") {
        const PostCard = document.querySelector('.post-card');
        PostCard.addEventListener("mouseover",() => {
            PostCard.style.backgroundColor = `unset`;
        });
        }
    }
    const cardClicked = () => {
        if (window.location.pathname !== `/${cardType}/${id}/`){
            history.push(`/${cardType}/${id}/`)
        }
    }
    useEffect(() => {
        setHover(ishover);
    })
    return ( 
        <div className="post-card" key={id} onClick={(e) => cardClicked(e)}>
                <div className="post-col1">
                    <Link to={`/profile/${object.user.id}`} className='child-link' onClick={(e) => {e.stopPropagation()}} >
                        <img src={process.env.PUBLIC_URL+`/image/GQkndUQakAM7Hq6.png`} className='profile-image' />
                    </Link>
                </div>
                <div className="post-col2">
                    <div className="post-header">
                                <div className="post-userdata">
                                    <span className="post-name"> 
                                    { first_name ? `${first_name} ${last_name}` : 'Anonymous_user'}
                                    </span>
                                    <span className="post-username">@{username}</span>
                                    <span className="post-date">{date}</span>
                                </div>
                                <div className="post-dot" onClick={(e) => {showCardDD(e,`dot-${id}`)}}>
                                    <div className="post-dot-container dropdown hidden" id={`dot-${id}`}>
                                        {owner && <div className="child-lin">
                                            <span className="" onClick={(e) => {deleting(e,id)}}>Delete {cardType}</span>
                                        </div>}
                                        {owner && <div className="child-lin" onClick={(e) => {update(e,id)}}>
                                            <span className="" >Update {cardType} </span>
                                        </div>}
                                        <div className=" child-link">
                                            <span className="" >Not interested in this post</span>
                                        </div>
                                        <div className=" child-link">
                                            <span className=""> Unfollow  @{username}</span>
                                        </div>
                                        <div className=" child-link">
                                            <span className=""> Mute  @{username}</span>
                                        </div>
                                        <div className=" child-link">
                                            <span className=""> Block  @{username}</span>
                                        </div>
                                        <div className=" child-link">
                                            <span className=""> Report Post</span>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon icon={faEllipsisV}/>
                                </div>
                    </div>

                    {/* post text and media */}
                    <div className="post-txt">
                        {body}
                    </div>
                    <div className="post-media">
                        <img src={process.env.PUBLIC_URL+`/`} alt="logo" srcSet="" className="post-image"/>
                        {/* <img src={process.env.PUBLIC_URL+`/image/GODD9xBXUAEgJnr.jpeg`} alt="logo" srcSet="" className="post-image"/> */}
                    </div>
                            
                    {/* the post navbar */}
                    <div className="postnav">
                                <div className='post-nav-lin' id ="comment-${id}" onClick={(e) => {
                                    e.stopPropagation();
                                    commentClick(id);
                                }}>
                                    <div className="" >
                                        <FontAwesomeIcon icon={faComment} className="comment" />{postcomments? postcomments.length : replies.length}
                                    </div>
                                </div>

                                <Link to="##" className='post-nav-link child-link' id ="repost-${id}">
                                    <div className="" >
                                    <FontAwesomeIcon icon={faRotate} className="comment" />{reposts.length}
                                    </div>
                                </Link>

                                <div className='post-nav-link child-link' >
                                    <div className="like" >
                                    <FontAwesomeIcon icon={faHeart} className="comment" id ={`${cardType}like-${id}`}
                                    onClick={(e) => {like(e)}} />{likes.length}

                                    </div>
                                </div>

                                <Link to="##" className='post-nav-link child-link' id ="view-${id}">
                                    <div className="view" >
                                    <FontAwesomeIcon icon={faEye} className="comment" />{views}
                                    </div>
                                </Link>

                                <Link to="##" className='post-nav-link child-link' id = {`share-${id}`}>
                                    <div className="share" >
                                        <FontAwesomeIcon icon={faArrowUp} className="comment" />{shares.length}
                                    </div>
                                </Link>
                    </div>
                </div>
        </div>
     );
}
 
export default PostCard;