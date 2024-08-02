import { useContext, useEffect } from "react";
import { authContext } from "./contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry, faBell, faGears, faHome, faSearch, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Sidebar = () => {
    const {setShowLogout,show} = useContext(authContext);
    useEffect(() => {
    },[])
    return ( 
        <div className="sidebar hidde">
                <div className="side-element" >
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faAngry} spin
                        className="side-icon"
                        />
                    </a>
                </div>
                <div className="side-element" >
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faHome}
                        className="side-icon"
                        />
                    </a>
                </div>
                <div className="side-element" >
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faSearch}
                        className="side-icon"
                        />
                    </a>
                </div>

                <div className="side-element" >
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faEnvelope}
                        className="side-icon"
                        />
                    </a>
                </div>

                <div className="side-element" >
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faBell}
                        className="side-icon"
                        />
                    </a>
                </div>
                
                <div className="side-element" >
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faUser}
                        className="side-icon"
                        />
                    </a>
                </div>
                
                <div className="side-element"onClick={(e) => {setShowLogout(e)}}>
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faUserGroup}
                        className="side-icon"
                        />
                    </a>
                </div>

                <div className="side-element"onClick={(e) => {setShowLogout(e)}}>
                    <a href="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faGears}
                        className="side-icon"
                        />
                    </a>
                </div>
        </div>
     );
}
 
export default Sidebar;