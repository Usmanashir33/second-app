import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";
import { useContext } from "react";
import { authContext } from "../contexts/AuthContext";

const UserPosts = () => {
    const {pk} = useParams();
    const {setUserTotal} = useContext(authContext);
    const {data} = useFetchUserRelatedData(pk,"posts");

    return (
        <div className="user-posts">
            {data && setUserTotal('usma)}
            {data &&
            data.map((post) => 
                <div key={post.id}>
                    {post.body}
                </div>
            )}
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}
 
export default UserPosts;