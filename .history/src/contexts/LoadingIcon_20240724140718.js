import { useContext} from "react";
import { authContext } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
    const {loading} = useContext(authContext)
    return ( 
        <div className="loading-main">
            ssssssssssss
            {!loading && <FontAwesomeIcon 
                icon={faSpinner} spinPulse
                className="loading-spinner"
            />}
        </div>
     );
}
 
export default Loading;