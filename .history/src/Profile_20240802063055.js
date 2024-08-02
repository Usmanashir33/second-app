import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import './profile.css';
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import useGetUser from "./hooks/useGetUser";
import { dataRendingContext } from "./contexts/DataRending";
import useFollowUser from "./hooks/Following";
import { authContext } from "./contexts/AuthContext";

const Profile = () => {
  const { pk } = useParams(); // this is the user id
  const history = useHistory();
  const { user, fetchUser } = useGetUser();
  const [followers, setFollowers] = useState(null);
  const [followings, setFollowings] = useState(null);
  const { userTotal } = useContext(dataRendingContext);
  const { currentUser } = useContext(authContext);
  const { followUser } = useFollowUser();
  const myProfile = (currentUser && currentUser.id == pk);
  const followed = user ? user.followers.includes(currentUser.id) : false;
console.log(followe);
  useEffect(() => {
    fetchUser(pk);
  }, [pk]);

  useEffect(() => {
    if (user) {
      setFollowers(user.followers.length);
      setFollowings(user.followings ? user.followings.length : 0);
    }
  }, [user]);

  const follow = (e) => {
    followUser(`/accounts/user/${pk}/follow/`);
    setFollowers((prev) => prev + 1);
  };

  if (!user) return <div>Loading...</div>; // Add a loading state

  return (
    // page start
    <div className="profile main-page ">
      <div className=" relative">
        <header className="fixed-header flex profile-header">
          <div className="mr-back" onClick={() => { history.go(-1) }}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="names">
            <span className="bold name">
              {user.first_name} {user.last_name}
            </span>
            <span className="counter muted-txt small-txt block">{userTotal}</span>
          </div>
        </header>
        <div className="profile-images relative">
          <img src={process.env.PUBLIC_URL + `/image/GQkndUQakAM7Hq6.png`} className='wide-img' />
          <img src={process.env.PUBLIC_URL + `/image/GQkndUQakAM7Hq6.png`} className='rounded-img' />
        </div>

        <div className="user-buttons">
          {!myProfile && (
            <Link to="" className="simple-link">
              <button type="button" className="user-btn">message</button>
            </Link>
          )}

          {!myProfile && !followed && (
            <Link to="#" className="simple-link">
              <button type="button" onClick={follow} className="user-btn">follow</button>
            </Link>
          )}

          {!myProfile && followed && (
            <Link to="#" className="simple-link">
              <button type="button" onClick={follow} className="followed">unfollow</button>
            </Link>
          )}

          {myProfile && (
            <Link to="" className="simple-link">
              <button type="button" className="user-btn">Edit Profile</button>
            </Link>
          )}
        </div>

        <div className="user-info">
          <div id='profile-fullname'>
            {user.first_name} {user.last_name}
            <span className="block" id="profile-username">@{user.username}</span>
          </div>

          <div className="user-title">
            {user.profile.title}
          </div>
          <div className="address ">
            <span className=" mr-10" id="profile-address ">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="adjust-icon mr-10"
              />
              {user.profile.address} kano
            </span>

            <span className="mr-10" id="profile-date-joined">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="adjust-icon mr-10"
              />
              {user.profile.data}
            </span>
          </div>

          <div className="follow">
            <Link to={`/followers/${pk}`}><span className="followers ml-10">{followers}</span> followers</Link>
            <Link to={`/followings/${pk}`}><span className="following">{followings}</span> followings</Link>
          </div>
        </div>
        <nav className="additional-data">
          <NavLink to={`/profile/${pk}`} exact className="post-section header-link">Posts</NavLink>
          <NavLink to={`/profile/${pk}/replies`} className="replies-section header-link">Replies</NavLink>
          <NavLink to={`/profile/${pk}/media`} className="media-section header-link">Media</NavLink>
          <NavLink to={`/profile/${pk}/likes`} className="likes-section header-link">Likes</NavLink>
        </nav>
      </div>
    </div>
    // page ends 
  );
};

export default Profile;