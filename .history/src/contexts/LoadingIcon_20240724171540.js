import { useContext} from "react";
import { authContext } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    const {loading,showLogOut,} = useContext(authContext)
    return ( 
        <div className="loading-main">
            <div className="tri-content dropdown hidde">
                <a href="##" className="add-account header-link child-link">Add another account</a>
                <a href="##" className="log-out header-link child-link">LogOut from <span className="current-account">Coiner mk</span></a>
                <div className="drowtri"><div className="triangle"></div></div>
            </div>
            {loading && <FontAwesomeIcon 
                icon={faSpinner} spinPulse
                className="loading-spinner"
            />}
        </div>
     );
}
 
export default Loading;