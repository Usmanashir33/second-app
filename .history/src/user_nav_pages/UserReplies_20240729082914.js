import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";
import { dataRendingContext } from "../contexts/DataRending";
import CommentForm from "../CommentForm";


const UserReplies = () => {
    const {pk} = useParams();
    const
    const {data} = useFetchUserRelatedData(pk,"replies");
    const { setUserTotal} = useContext(authContext)
    const {showCForm} = useContext(dataRendingContext);

    useEffect(() => {
        fetchPosts(`/accounts/user/${pk}/replies/`);
     },[])
    return (
        <div className="user-posts">
            {data && setUserTotal(`${data.length} Replies`)}
            {data &&
            data.map((reply) => 
                <PostCard object = {reply} cardType='comment' key={reply.id} />
            )}
            {showCForm &&
                <CommentForm />
            }
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
 
export default UserReplies;