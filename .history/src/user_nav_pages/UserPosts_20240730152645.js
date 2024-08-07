import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";
import CommentForm from "../CommentForm";
import { dataRendingContext } from "../contexts/DataRending";


const UserPosts = () => {
    const {pk} = useParams();
    const {doDelete} = useContext(dataRendingContext);
    const {showCForm,posts:data,setPosts,fetchPosts,setUserTotal} = useContext(dataRendingContext);
    useEffect(() => {
       fetchPosts(`/accounts/user/${pk}/posts/`);
    },[])
    if(data){
        setUserTotal(`${data.length} Posts`)
        // setUserTotal(data.length)
    }
    return (
        <div className="user-posts">
            
            {data &&
            data.map((post) => 
            {!(data && data.length >= 1) && <div className="no-data"> No replies available for this user</div>}
            <PostCard object = {post} docardType='post' key={post.id} />
            )}
            {showCForm &&
                <CommentForm />
            }
            {!(data && data.length >= 1) && <div className="no-data"> No replies available for this user</div>}

            <br />
        </div>
    );
}
 
export default UserPosts;