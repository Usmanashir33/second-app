import { useContext} from "react";
import { authContext } from "./AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    const {loading} = useContext(authContext)
    return ( 
        <div className="loading-main">
            {loading && <FontAwesomeIcon 
                icon={faSpinnerLight} spinPulse
                className="loading-spinner"
            />}
        </div>
     );
}
 
export default Loading;