import { useContext, useEffect } from "react";
import { authContext } from "./contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngry, faBell, faGears, faHome, faSearch, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
    const {setShowLogOut,showLogOut} = useContext(authContext);
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
                    <NavLink exacto="/" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faHome}
                        className="side-icon"
                        />
                    </NavLink>
                </div>
                <div className="side-element" >
                    <NavLink to="/search" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faSearch}
                        className="side-icon"
                        />
                    </NavLink>
                </div>

                <div className="side-element" >
                    <NavLink to="/dm" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faEnvelope}
                        className="side-icon"
                        />
                    </NavLink>
                </div>

                <div className="side-element" >
                    <NavLink to="" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faBell}
                        className="side-icon"
                        />
                    </NavLink>
                </div>
                
                <div className="side-element" >
                    <NavLink to="" className="clean-link">
                        <FontAwesomeIcon 
                        icon={faUser}
                        className="side-icon"
                        />
                    </NavLink>
                </div>
                
                <div className="side-element"onClick={(e) => {setShowLogOut(!showLogOut)}}>
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