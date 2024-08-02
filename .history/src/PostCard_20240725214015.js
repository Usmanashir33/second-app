import { faEye, faMessage, faRotateBackward } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faCommentSms } from "@fortawesome/free-solid-svg-icons/faCommentSms";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faRotate } from "@fortawesome/free-solid-svg-icons/faRotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PostCard = ({object,postLink,ishover,commentClick}) => {
    const {fullname,pic,username,post,postPic,likes,reposts,comments,views,share,id,date} = object;
    // we remove post link to allow other files to set their own postLink
    const deletePost = (e,postId) => {
        const postLink = `http://localhost:8000/posts/${postId}`;
        setTimeout(() => {
            fetch(postLink,{
                method : "DElETE"
            }).then((res) => { // deleted
                console.log(res);
            }).then((err) => {
                console.log(err);
            })
        }, 500);
        console.log('iam cliked');   
    }

    const showDotDD = (e,containerId,username) => {
        // console.log(e);
        const dropChilderen = document.querySelectorAll('.dropdown');
        const dotContainer = document.querySelector(`#${containerId}`);
        if (dropChilderen){
            dropChilderen.forEach((dropchild) => {
                dropchild.classList.add("hidden")
            });
        }
        const details = `
            <a href='##delete' onClick=${(e) => {deletePost(e,id)}} className="child-link">
                <span className="" >Delete Post</span></div>
            </a>
            <a href='##222' className=" child-link">
                <span className="" >Not interested in this post</span></div>
            </a>
            <a href='##' className=" child-link">
                <span className=""> Unfollow  @${username}</span>
            </a>
            <a href='##' className=" child-link">
                <span className=""> Mute  @${username}</span>
            </a>
            <a href='##' className=" child-link">
                <span className=""> Block  @${username}</span>
            </a>
            <a href='##' className=" child-link">
                <span className=""> Report Post</span>
            </a>
        `;
        dotContainer.innerHTML = details;
        dotContainer.classList.remove("hidden");
        e.stopPropagation();
    }
    const stopChildLinks = () => {
        document.querySelectorAll('.child-link').forEach((child) => {
          child.addEventListener("click",(event) => {
            // console.log(event.target);
            console.log('child link clicked');
            event.stopPropagation();
          })
        })
      }
    const setHover = (hover='yes') =>{
        if (hover !== "yes") {
        const PostCard = document.querySelector('.post-card');
        PostCard.addEventListener("mouseover",() => {
            PostCard.style.backgroundColor = `unset`;
        });
        }
    }
    useEffect(() => {
        stopChildLinks(); // control nested links;
        setHover(ishover);
    })
    return ( 
        <div className="post-card" key={id} onClick={(e) => postLink(e,id)}>
                <div className="post-col1">
                    <Link to={`/profile/${id}`} className='child-link'>
                        <img src={process.env.PUBLIC_URL+`/${pic}`} className='profile-image' />
                    </Link>
                </div>
                <div className="post-col2">
                    <div className="post-header">
                                <div className="post-userdata">
                                    <span className="post-name">{fullname}</span>
                                    <span className="post-username">@{username}</span>
                                    <span className="post-date">date</span>
                                </div>
                                <div className="post-dot" onClick={(e) => {showDotDD(e,`dot-${id}`,`${username}`)}}>
                                    <div className="post-dot-container dropdown hidden" id={`dot-${id}`}>
                                        testing the  dot box
                                    </div>
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                    </div>

                    {/* post text and media */}
                    <div className="post-txt">
                        {post}
                        {/* in sha Allahu one day i will be the one to be helping the poor poeple in this country,
                        I ask the god Jannah the Muslim Ummah the Parents of mine and the I my Self.Ameen */}
                    </div>
                    <div className="post-media">
                        <img src={process.env.PUBLIC_URL+`/${postPic}`} alt="logo" srcSet="" className="post-image"/>
                    </div>
                            
                    {/* the post navbar */}
                    <div className="postnav">
                                <Link to="##" className='post-nav-link' id ="comment-${id}" onClick={(e) => {
                                    e.stopPropagation();
                                    commentClick(id);
                                }}>
                                    <div className="" >
                                        {/* <FontAwesomeIcon {comments} */}
                                        <FontAwesomeIcon icon={faComment} className="comment" />{comments}
                                    </div>
                                </Link>

                                <Link to="##" className='post-nav-link child-link' id ="repost-${id}">
                                    <div className="" >
                                    <FontAwesomeIcon icon={faRotate} className="comment" />{reposts}
                                    </div>
                                </Link>

                                <Link to="##" className='post-nav-link child-link' id ="like-${id}" >
                                    <div className="like" >
                                    <FontAwesomeIcon icon={faHeart} className="comment" />{likes}

                                    </div>
                                </Link>

                                <Link to="##" className='post-nav-link child-link' id ="view-${id}">
                                    <div className="view" >
                                    <FontAwesomeIcon icon={faEye} className="comment" />{comments}
                                    </div>
                                </Link>

                                <Link to="##" className='post-nav-link child-link' id ="share-${id}">
                                    <div className="share" >
                                    <FontAwesomeIcon icon={faMessage} className="comment" />{comments}
                                    </div>
                                </Link>
                    </div>
                </div>
        </div>
     );
}
 
export default PostCard;