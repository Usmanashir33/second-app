import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetchUserRelatedData from "../hooks/useFetchUserRelated";

const UserPosts = () => {
    const {pk} = useParams();
    const {data} = useFetchUserRelatedData(pk,"posts");
    return (
        <div className="user-posts">
            {data &&
            data.map
            }
        </div>
    );
}
 
export default UserPosts;