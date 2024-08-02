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

                <div className="side-element" >
                    <a href="/"><img src={process.env.PUBLIC_URL + '/image/perfect_logo.png'}className='side-icon' alt="logo"id='logo' srcSet=""/></a>
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
                </div>

                <div className="side-element" >
                    <a href="/"><i className="fa-solid fa-bell"></i></a>
                </div>
                
                <div className="side-element" >
                    <a href="/"><i className="fa-solid fa-user"></i></a>
                </div>
                
                
                <div className="side-element"onClick={(e) => {logOut()}}>
                    <a><i className="fa-solid fa-user-group"></i></a>
                </div>
                
                <div className="side-element"onClick={(e) => {}}>
                    <a> <i className="fa-solid fa-user-group"></i> </a>
                </div>
               
                
        </div>
     );
}
 
export default Sidebar;