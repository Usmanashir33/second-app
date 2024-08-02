import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/AuthContext";
import PostCard from "../Card";


const UserReplies = () => {
    const {pk} = useParams();
    const {data} = useFetchUserRelatedData(pk,"replies");
    const { setUserTotal} = useContext(authContext)
    const {showCForm} = useContext(dataRendingContext);data

    // useEffect(() => {
    //     if(data.length){
    //      setUserTotal(`${data.length} Replies`)
    //     }
    //  },[])
    return (
        <div className="user-posts">
            {data && setUserTotal(`${data.length} Replies`)}
            {data &&
            data.map((reply) => 
                <PostCard object = {reply} cardType='comment' key={reply.id} />
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
 
export default UserReplies;