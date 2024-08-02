import {Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import './profile.css';
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import useGetUser from "./hooks/useGetUser";
import { dataRendingContext } from "./contexts/DataRending";
import useFollowUser from "./hooks/Following";
import { authContext } from "./contexts/AuthContext";

const Profile = () => {
    const {pk} = useParams(); // this is the user id
    const history = useHistory();
    const {user,fetchUser} = useGetUser();
    const [followers,setFollowers] = useState(0)
    const [followings,setFollowings] = useState(0)
    const {userTotal} = useContext(dataRendingContext);
    const {currentUser} = useContext(authContext);
    const {followUser,following} = useFollowUser();
    const myProfile = (currentUser && (currentUser.id == pk))? true : false ;
    const [followed,setFollowed] = useState(false) 
    // const followed = user? user.followers.find((id) => id == currentUser.id) : ''; // this also works
    // const followed = user ? user.followers.includes(currentUser.id) : false;

    useEffect(() => {
        fetchUser(pk);
    },[followers,pk])
    useEffect(() => {
        if (user){
            setFollowers(user.followers.length)
            setFollowers(user.followings.length)
            setFollowed(
                user ? user.followers.includes(currentUser.id) : false
            )
        }
    },[user])
   

    const follow = (e) => {
        setFollowers(followers + 1)
        followUser(`/accounts/user/${pk}/follow/`)
        //fetchUser(pk);
    }
    return ( 
    //     page start
        <div className="profile main-page ">
            <div className=" relative">
            <header className="fixed-header flex profile-header">
                <div className="mr-back" onClick={() => {history.go(-1)}}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </div>
                <div className="names">
                    <span className="bold name">
                        {user ? user.first_name : ""} {user ? user.last_name : ""}
                    </span>
                    <span className="counter muted-txt small-txt block"> {userTotal}</span>
                </div>
            </header>
            <div className="profile-images relative">
                <img src={process.env.PUBLIC_URL+`/image/GQkndUQakAM7Hq6.png`} className='wide-img' />
                <img src={process.env.PUBLIC_URL+`/image/GQkndUQakAM7Hq6.png`} className='rounded-img'/>
            </div>
    
            <div className="user-buttons">
                {(!myProfile) && <Link to ="" className="simple-link">
                    <button type="button" className="user-btn">message</button>
                </Link>}

               {(!myProfile && !followed) && <Link to ="#" className="simple-link"  >
                    <button type="button" onClick={(e) => {follow(e)}} className="user-btn">follow</button>
                </Link>}
               {(!myProfile && followed) && <Link to ="#" className="simple-link"  >
                    <button type="button" onClick={(e) => {follow(e)}} className="followed">unfollow</button>
                </Link>}

                <Link to ="" className="simple-link">
                    <button type="button" className="user-btn">Edit Profile</button>
                </Link>
            </div>
    
            <div className="user-info">
                <div className=""id='profile-fullname'>
                {user ? user.first_name : ""} {user ? user.last_name : ""}
                    <span className="block" id="profile-username">@{user && user.username} </span>
                </div>
                
                <div className="user-title">
                {user && user.profile.title}
                </div>
                <div className="address ">
                    <span className=" mr-10" id="profile-address ">
                        <FontAwesomeIcon 
                            icon={faLocationDot} 
                            className="adjust-icon mr-10"
                        />
                        {user && user.profile.address} kano 
                    </span>
    
                    <span className="mr-10" id="profile-date-joined">
                    <FontAwesomeIcon 
                            icon={faCalendarAlt} 
                            className="adjust-icon mr-10"
                        />
                        {user && user.profile.data}
                    </span>
                </div>
    
                <div className="follow">
                    <Link to={`/followers/${pk}`} > <span className="followers ml-10">{followers</span> followers </Link>
                    <Link to={`/followings/${pk}`} > <span className="following " > {user && user.followings.length} </span> followings </Link>
                </div>
            </div>
            <nav className="additional-data">
                <NavLink to={`/profile/${pk}`} exact onClick={(e) => {}}  className="post-section header-link">Posts</NavLink>
                <NavLink to={`/profile/${pk}/replies`} onClick={(e) => {}} className="replies-section header-link">Replies</NavLink>
                <NavLink to={`/profile/${pk}/media`} onClick={(e) => {}} className="media-section header-link">Media</NavLink>
                <NavLink to={`/profile/${pk}/likes`} onClick={(e) => {}} className="likes-section header-link">Likes</NavLink>
            </nav>
        </div>
        </div>
    // page ends 
     );
}
 
export default Profile;