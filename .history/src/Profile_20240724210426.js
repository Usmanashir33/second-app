import {Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetUser from "./useGetUser";
import './profile.css';
import { useEffect, useState } from "react";
import UserNavbar from "./user_nav_pages/UserNavbar";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarDay, faLocation, faLocationDot, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons/faCalendarCheck";



const Profile = () => {
    // const {pk} = useParams();
    const pk =1
    const {user:profile,loading,error} = useGetUser(`http://localhost:8000/users/${pk}`);
    // const {user:profile,loading,error} = useGetUser(`http://localhost:8000/posts`);
    useEffect(() => {
        // setFocus();
    })
    return ( 
    //     page start
        <div className="profile main-page">
            { loading && <div className="loading-container">loading...</div>}
            {error && <div className="error-container">{error}</div>}

            <div className=" relative">
            <header className="fixed-header flex profile-header">
                <Link to='/'>
                    <div className="mr-back"><i className="fa-solid fa-arrow-left i-size"></i></div>
                </Link>
                <div className="names">
                    <span className="bold name"> profile.first_name profile.lat_name</span>
                    <span className="counter muted-txt small-txt block">1000 posts</span>
                </div>
            </header>
            <div className="profile-images relative">
                <img src={process.env.PUBLIC_URL+`/image/GQkndUQakAM7Hq6.png`} className='wide-img' />
                <img src={process.env.PUBLIC_URL+`/image/GQkndUQakAM7Hq6.png`} className='rounded-img'/>
            </div>
    
            <div className="user-buttons">
                <Link to ="" className="simple-link">
                    <button type="button" className="user-btn">message</button>
                </Link>
                <Link to ="" className="simple-link">
                    <button type="button" className="user-btn">follow</button>
                </Link>
                <Link to ="" className="simple-link">
                    <button type="button" className="user-btn">Edit Profile</button>
                </Link>
            </div>
    
            <div className="user-info">
                <div className=""id='profile-fullname'>
                    profile.first_name profile.lat_name
                    <span className="block" id="profile-username">@ profile.username </span>
                </div>
                
                <div className="user-title">
                profile.title
                </div>
                <div className="address ">
                    <span className=" mr-10" id="profile-address ">
                        <FontAwesomeIcon 
                            icon={faLocationDot} 
                            className="adjust-icon mr-10"
                        />
                        Kano Nigeria
                    </span>
    
                    <span className="mr-10" id="profile-date-joined">
                    <FontAwesomeIcon 
                            icon={fa} 
                            className="adjust-icon mr-10"
                        />
                        Joined December
                    </span>
                </div>
    
                <div className="follow">
                    <span className="following "> profile.followings.length </span>Followings 
                    <span className="followers ml-10">profile.followers.length</span> Followers
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