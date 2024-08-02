import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetUser from "./hooks/useGetUser";
import UserCard from "./UserCard";

const Follower = () => {
    const {id} = useParams();
    const {user:users,fetchUser} = useGetUser()

    useEffect(() => {
        fetchUser(`${id}/followers/`)
    },[id])
    // console.log(users);
    return ( 
        <div className="followers-page">
           {users && users.map((user) => 
                <div>
                    <UserCard object={user}/>
                </div>
           )
           }
        </div>
     );
}
 
export default Follower;