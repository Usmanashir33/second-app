import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useGetUser from "./hooks/useGetUser";
import UserCard from "./UserCard";

const Followings = () => {
    const {id} = useParams();
    const {user:users,fetchUser} = useGetUser()

    useEffect(() => {
        fetchUser(`${id}/follow/`)
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
 
export default Followings;