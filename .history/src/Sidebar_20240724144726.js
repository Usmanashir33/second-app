import { useContext, useEffect } from "react";
import { authContext } from "./contexts/AuthContext";

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
                <a href="/search">
                    <div className="side-element" >
                        
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