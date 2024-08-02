import { BrowserRouter as Router ,Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import Posts from "./Posts";
import Profile from "./Profile";
import Search from "./Search";
import PostDetail from "./PostDetail";
import FollowingPosts from "./FollowingPosts";
import CommunityPages from "./CommunityPages";
import UserPosts from "./user_nav_pages/UserPosts";
import UserLikes from "./user_nav_pages/UserLikes";
import UserMedia from "./UserMedia";
import UserReplies from "./user_nav_pages/UserReplies";
import { useEffect } from "react";
const Col1 = ({stopProp}) => {
    useEffect(() => {
        // stopProp();
    })
    return ( 
        <div className="col1">
                <Switch>
                    <Route  exact path='/'>
                        <Home/>
                        <Route exact path='/'> <Posts/> </Route>
                        <Route exact path='/following-posts'> <FollowingPosts/> </Route>
                        <Route exact path='/following-community' > <CommunityPages/> </Route>
                    </Route>
                    <Route  path='/profile/:pk'>
                        <Profile/>kkkkkkkkkkk
                        <Route exact path='/profile/:pk/' ><UserPosts/></Route>
                        <Route exact path='/profile/:pk/replies' ><UserReplies/></Route>
                        <Route exact path='/profile/:pk/media' ><UserMedia/></Route>
                        <Route exact path='/profile/:pk/likes' ><UserLikes/></Route>
                    </Route>
                    <Route path='/search'>
                        <Search/>
                    </Route>
                    <Route path='/post/:id' >
                        <PostDetail/>
                    </Route>
                </Switch>
        </div>
     );
}
 
export default Col1;