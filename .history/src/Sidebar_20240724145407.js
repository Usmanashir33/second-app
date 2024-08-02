import { useContext, useEffect } from "react";
import { authContext } from "./contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHomeAlt, faHomeLg, faHomeUser } from "@fortawesome/free-solid-svg-icons";
import { faHomeLgAlt } from "@fortawesome/free-solid-svg-icons/faHomeLgAlt";

const Sidebar = () => {
    const {logOut} = useContext(authContext);
    useEffect(() => {
    },[])
    return ( 
        <div className="sidebar hidde">
                <a href="/profile/1">
                    <div className="side-element">
                        <img src={process.env.PUBLIC_URL + '/image/perfect_logo.png'} alt="logo"id='logo' srcSet=""/>
                    </div>
                </a>
                <a href="/">
                    <div className="side-element" ><i className="fa-solid fa-house "></i></div>
                </a>
                <a href="/search" cl>
                    <div className="side-element" >
                        <FontAwesomeIcon 
                        icon={faHome}
                        className="side-icon"
                        />
                    </div>
                </a>
                <a href="/">
                    <div className="side-element" ><i className="fa-solid fa-envelope"></i></div>
                </a>
                <a href="/">
                    <div className="side-element"><i className="fa-solid fa-bell"></i></div>
                </a>
                <a href="/profile/1">
                    <div className="side-element"><i className="fa-solid fa-user"></i></div>
                </a>
                <a href="/">
                    <div className="side-element"><i className="fa-solid fa-gear"></i></div>
                </a>
                <a>
                    <div className="side-element"onClick={(e) => {logOut()}}>
                        <i className="fa-solid fa-user-group"></i>
                    </div>
                </a>
                <a>
                    <div className="side-element"onClick={(e) => {}}>
                        <i className="fa-solid fa-user-group"></i>
                    </div>
                </a>
                
        </div>
     );
}
 
export default Sidebar;