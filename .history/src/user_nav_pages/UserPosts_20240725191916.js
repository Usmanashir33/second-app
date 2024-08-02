import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserPosts = () => {
    const {pk} = useParams();
    const {data} =
    return (
        <div className="user-posts">
            Iam The user Post
            {pk}
        </div>
    );
}
 
export default UserPosts;