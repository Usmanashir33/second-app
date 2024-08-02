import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { authContext } from "./contexts/AuthContext";

const UserCard = ({object}) => {
    const {currentUser} = useContext(authContext);
    const {id,first_name,last_name,username} = object;
    const history = useHistory();
    
    const cardClicked = () => {
        // if (window.location.pathname !== `/${cardType}/${id}/`){
            history.push(`/profile/${id}/`)
        // }
    }
    useEffect(() => {
    })
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
                    but
                </div>
        </div>
     );
}
 
export default UserCard;