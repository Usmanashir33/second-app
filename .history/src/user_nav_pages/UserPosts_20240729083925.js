import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";
import CommentForm from "../CommentForm";
import { dataRendingContext } from "../contexts/DataRending";


const UserPosts = () => {
    const {pk} = useParams();
    // const {setUserTotal} = useContext(authContext);
    const {showCForm,posts:data,setPosts,fetchPosts,setUserTotal} = useContext(dataRendingContext);
    // const {data} = useFetchUserRelatedData(pk,"posts");
    // const {data} = {};
    useEffect(() => {
       fetchPosts(`/accounts/user/${pk}/posts/`);
    },[])
    if(dat)
    return (
        <div className="user-posts">
            
            {data &&
            data.map((post) => 
                <PostCard object = {post} cardType='post' key={post.id} />
            )}
            {showCForm &&
                <CommentForm />
            }
            <br />
        </div>
    );
}
 
export default UserPosts;