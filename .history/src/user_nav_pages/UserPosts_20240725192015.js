import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";

const UserPosts = () => {
    const {pk} = useParams();
    const {data} = useFetchUserRelatedData(pk)
    return (
        <div className="user-posts">
            Iam The user Post
            {pk}
        </div>
    );
}
 
export default UserPosts;