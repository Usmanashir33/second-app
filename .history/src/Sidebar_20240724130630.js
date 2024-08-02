import { useContext, useEffect } from "react";
import { authContext } from "./contexts/AuthContext";

const Sidebar = () => {
    const {logOut,loading} = useContext(authContext);
    useEffect(() => {
    },[])
    return ( 
        <div className="sidebar hidde">.
                {loading && <div className="loading-container">loading...</div>}
                <a href="/profile/1">
                    <div className="side-element">
                        <img src={process.env.PUBLIC_URL + '/image/perfect_logo.png'} alt="logo"id='logo' srcSet=""/>
                    </div>
                </a>
                <a href="/">
                    <div className="side-element home " ><i className="fa-solid fa-house "></i></div>
                </a>
                <a href="/search">
                    <div className="side-element search" ><i className="fa-solid fa-magnifying-glass "></i></div>
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