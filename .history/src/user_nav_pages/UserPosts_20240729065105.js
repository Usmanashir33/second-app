import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";
import CommentForm from "../CommentForm";

const UserPosts = () => {
    const {pk} = useParams();
    const {setUserTotal} = useContext(authContext);
    const {data} = useFetchUserRelatedData(pk,"posts");
    // useEffect(() => {
    //    if(data){
    //     setUserTotal(`${data.length} Posts`)
    //    }
    // },[])
    return (
        <div className="user-posts">
            {data && setUserTotal(`${data.length} Posts`)}
            {data &&
            data.map((post) => 
                <PostCard object = {post} cardType='post' key={post.id} />
            )}
             {showCForm &&
                <CommentForm /><CommentForm
            }
            <br />
        </div>
    );
}
 
export default UserPosts;