import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";
import CommentForm from "../CommentForm";
import { dataRendingContext } from "../contexts/DataRending";
import UpdateForm from "../UpdateForm";
import useDeleteData from "../hooks/DeleteData";


const UserLikes = () => {
    const {pk} = useParams();
    const {showCForm,showUForm,posts:data,setPosts,fetchPosts,setUserTotal} = useContext(dataRendingContext);
    const {doDelete} = useDeleteData(data,setPosts);

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
                <PostCard object = {post} doDelete={doDelete} cardType='post' key={post.id} />
            )}
            {showCForm &&
                <CommentForm />
            }
            {showUForm && <UpdateForm  data={data} setData={setPosts}/> }
            {!(data && data.length >= 1) && <div className="no-data"> No Likes Post available for this user</div>}

            <br />
        </div>
    );
}
 
export default UserLikes;