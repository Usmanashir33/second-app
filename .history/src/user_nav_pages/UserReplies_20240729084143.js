import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";
import { dataRendingContext } from "../contexts/DataRending";
import CommentForm from "../CommentForm";


const UserReplies = () => {
    const {pk} = useParams();
    // const {data} = useFetchUserRelatedData(pk,"replies");
    const { setUserTotal} = useContext(authContext)
    const {showCForm, replies:data,fetchReplies} = useContext(dataRendingContext);

    useEffect(() => {
        fetchReplies(`/accounts/user/${pk}/replies/`);
     },[])
     if(data){
        // setUserTotal(`${data.length} Replies`)
        setUserTotal(data.length)
    }
    return (
        <div className="user-posts">
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