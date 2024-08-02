import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authContext } from "./contexts/AuthContext";
import useFollowUser from "./hooks/Following";

const UserCard = ({object}) => {
    const [followed,setFollowed] = useState(null) 

    const {currentUser} = useContext(authContext);
    const {id,first_name,last_name,username} = object;
    const history = useHistory();
    const {followUser} = useFollowUser();
    const myProfile = (currentUser && (currentUser.id == id))? true : false ;
    
    const cardClicked = () => {
        // if (window.location.pathname !== `/${cardType}/${id}/`){
            history.push(`/profile/${id}/`)
        // }
    }
    const follow = (e) => {
        e.stopPropagation();
        followUser(`/accounts/user/${id}/follow/`)
    }
    useEffect(() => {
    },[])
    return ( 
        <div className="post-card" key={id} onClick={(e) => cardClicked(e)}>
                <div className="post-col1">
                    <Link to={`/profile/${id}`} className='child-link' onClick={(e) => {e.stopPropagation()}} >
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
                        </div>
                               
                    </div>

                    {/* post text and media */}
                    <div className="post-txt">
                        {object && object.profile.title}
                    </div>
                </div>
                <div className="user-buttons">
                {(!myProfile && !followed) && <Link to ="#" className="simple-link"  >
                    <button type="button" onClick={(e) => {follow(e)}} className="user-btn">follow</button>
                </Link>}
               {(!myProfile && followed) && <Link to ="#" className="simple-link"  >
                    <button type="button" onClick={(e) => {follow(e)}} className="followed">unfollow</button>
                </Link>}
                </div>
        </div>
     );
}
 
export default UserCard;