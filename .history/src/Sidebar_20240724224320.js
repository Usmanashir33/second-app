import { useContext, useEffect } from "react";
import { authContext } from "./contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry, faBell, faGears, faHome, faSearch, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
    const {setShowLogOut,showLogOut,currentUser} = useContext(authContext);
    useEffect(() => {
    },[])
    return ( 
        <div className="sidebar hidde">
                <div className="side-element" >
                    <div className="clean-link">
                        <FontAwesomeIcon 
                        icon={faAngry} spin
                        className="side-icon"
                        />
                    </div>
                </div>
                <div className="side-element" >
                    <NavLink exact to="/" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faHome}
                        className="side-icon"
                        />
                    </NavLink>
                </div>
                <div className="side-element" >
                    <NavLink exact to="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faSearch}
                        className="side-icon"
                        />
                    </NavLink>
                </div>

                <div className="side-element" >
                    <NavLink exact to="/dm" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faEnvelope}
                        className="side-icon"
                        />
                    </NavLink>
                </div>

                <div className="side-element" >
                    <NavLink exact to="/notifications" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faBell}
                        className="side-icon"
                        />
                    </NavLink>
                </div>
                
                <div className="side-element" >
                    <NavLink exact to={`/profile/${currentUser? currentUser.id : }`} className="clean-link">
                        <FontAwesomeIcon 
                        icon={faUser}
                        className="side-icon"
                        />
                    </NavLink>
                </div>
                
                <div className="side-element">
                    <div className="clean-link">
                        <FontAwesomeIcon 
                        icon={faUserGroup}
                        className="side-icon"
                        />
                    </div>
                </div>

                <div className="side-element"onClick={(e) => {setShowLogOut(!showLogOut)}}>
                    <div className="clean-link">
                        <FontAwesomeIcon 
                        icon={faGears}
                        className="side-icon"
                        />
                    </div>
                </div>
        </div>
     );
}
 
export default Sidebar;