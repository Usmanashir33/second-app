import { useContext} from "react";
import { authContext } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { uiContext } from "./UiContext";

const Loading = () => {
    const {loading,logOut
        ,currentUser,error,success} = useContext(authContext)
    const {showLogOut,setShowLogOut,hideAllDD} = useContext(uiContext);
    return ( 
        <div className="loading-main">
            <div className={`tri-content dropdown ${showLogOut} `}>
                <div className="child-link">Add another account</div>
                <div className="child-lin" onClick={(e) => {logOut();setShowLogOut('hidden')}}>logout from 
                     <span className="current-account"> {currentUser.username}</span></div>
                <div className="drowtri"><div className="triangle"></div></div>
            </div>
            {loading && <FontAwesomeIcon 
                icon={faSpinner} spinPulse
                className="loading-spinner"
            />}
            {error && <div className="failed-container">{error}</div>}
            {success && <div className="success-container">{success}</div>}
        </div>
     );
}
 
export default Loading;