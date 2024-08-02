import { faArrowUp, faEye} from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faRotate } from "@fortawesome/free-solid-svg-icons/faRotate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { dataRendingContext } from "./contexts/DataRending";
import { authContext } from "./contexts/AuthContext";
import { uiContext } from "./contexts/UiContext";
import useLikeData from "./hooks/likeData";

const UserCard = ({object,doDelete,ishover,cardType}) => {
    const {currentUser} = useContext(authContext);
    const {id,body,likes,shares,reposts,views,date,postcomments,replies} = object;
    const {first_name,last_name,username} = object.user? object.user : {};
    const {likeData} = useLikeData();
    const [liked,setLiked] = useState(
        likes.find((id) => id===currentUser.id) ? 'liked' : 'notliked'
    )
    const [numLikes,setNumLikes] = useState(likes? likes.length : '')
    const history = useHistory();
    const owner = (currentUser.id === object.user.id) ? true : false
    
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
                  
                </div>
        </div>
     );
}
 
export default UserCard;