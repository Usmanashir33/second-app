import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UserPosts = () => {
    const {pk} = useParams()
    return (
        <div className="user-posts">
            Iam The user Post
            
        </div>
    );
}
 
export default UserPosts;