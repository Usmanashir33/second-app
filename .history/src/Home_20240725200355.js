import { useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import PostForm from "./PostForm";
const Home = () => {
    
    useEffect(() => {
    })
    return ( 
    <div className="home-container">
        <div className="page-header ">
            <div className="header-txt">Home</div>
            <nav className="header-link">
                <NavLink to="/" exact className='header-link for-you' >Foryou</NavLink>
                <NavLink to="/following-posts"className='header-link'>following</NavLink>
                <NavLink to="/following-community"className='header-link'>community1</NavLink>
                <NavLink to="/following-com2"className='header-link'>community2</NavLink>
                <NavLink to="/following-com3"className='header-link'>community3</NavLink>
                <NavLink to="/following-com4"className='header-link'>community4</NavLink>
            </nav>
        </div>
        <PostForm/>
    </div>
    );
}
 
export default Home;