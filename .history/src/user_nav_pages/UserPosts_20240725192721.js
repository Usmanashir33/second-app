import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";

const UserPosts = () => {
    const {pk} = useParams();
    const {data} = useFetchUserRelatedData(pk,"posts");
    return (
        <div className="user-posts">
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
        </div>
    );
}
 
export default UserPosts;