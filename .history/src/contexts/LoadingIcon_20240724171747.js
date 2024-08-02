import { useContext} from "react";
import { authContext } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    const {loading,showLogOut,logOut} = useContext(authContext)
    return ( 
        <div className="loading-main">
            <div className="tri-content dropdown hidde">
                < href="##" className="add-account child-link">Add another account</>
                < href="##" className="log-out child-link">logout from  <span className="current-account">Coiner mk</span></>
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