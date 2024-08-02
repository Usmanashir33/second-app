import { useContext} from "react";
import { authContext } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    const {loading,showLogOut,logOut,setShowLogOut,currentUser,error,success} = useContext(authContext)
    return ( 
        <div className="loading-main">
            {showLogOut && <div className="tri-content dropdown hidde">
                <div className="child-link">Add another account</div>
                <div className="child-lin" onClick={(e) => {logOut();setShowLogOut(!showLogOut)}}>logout from  <span className="current-account"> {currentUser.username}</span></div>
                <div className="drowtri"><div className="triangle"></div></div>
            </div>}
            {loading && <FontAwesomeIcon 
                icon={faSpinner} spinPulse
                className="loading-spinner"
            />}
            {!error && <div className="failed-container">
                {error}e
            </div>}
            {success && <div className="success-container">
                {success}
            </div>}
        </div>
     );
}
 
export default Loading;